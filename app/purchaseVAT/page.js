'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from 'next/navigation';


const VatForm = () => {
  const [vatPercentage, setVatPercentage] = useState('');
  const [vatList, setVatList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [deletingItemId, setDeletingItemId] = useState(null);

  const router = useRouter()
  useEffect(() => {
    const authToken = localStorage.getItem("EmployeeAuthToken");
    if (!authToken) {
      router.push("/login");
    }
  }, []);

  const handleConfirmDelete = async () => {
    try {
      // Send a delete request to the server
      await axios.delete(`http://103.159.85.246:6001/api/purchaseVAT/vat/${deletingItemId}`);
      // Fetch the updated VAT list after deletion
      fetchVatList();
    } catch (error) {
      console.error('Error deleting VAT item:', error.message);
    }

    // Close the popup after deletion
    setShowDeletePopup(false);
    setDeletingItemId(null);
  };

  useEffect(() => {
    fetchVatList();
  }, []);

  const fetchVatList = async () => {
    try {
      const response = await axios.get('http://103.159.85.246:6001/api/purchaseVAT/vat');
      setVatList(response.data || []);
    } catch (error) {
      console.error('Error fetching VAT list:', error.message);
    }
  };

  const handleInputChange = (e) => {
    setVatPercentage(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://103.159.85.246:6001/api/purchaseVAT/vat', { vatPercentage });
      fetchVatList();
      setVatPercentage('');
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const errorMessage = error.response.data.error;
        setErrorMessage(errorMessage);
        setShowModal(true);
        // Close the modal after 2 seconds
        setTimeout(() => {
          setShowModal(false);
          setErrorMessage('');
        }, 2000);
      } else {
        console.error('Error submitting VAT form:', error.message);
      }
    }
  };

  const handleDeleteClick = (itemId) => {
    setDeletingItemId(itemId);
    setShowDeletePopup(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setErrorMessage('');
  };

  const handleCancelDelete = () => {
    // Cancel the delete action
    setShowDeletePopup(false);
    setDeletingItemId(null);
  };

  return (
    <>
      <Navbar />

      <div className="max-w-5xl mx-auto mt-20 container shadow-md font-sans">
        <form onSubmit={handleFormSubmit} className="mb-4 flex items-center ml-3">
          <div className="text-xl font-semibold font-sans md:mb-0 ">
          <h1 className="text-xl font-bold font-sans mb-2 md:mb-0 text-orange-600">VAT For Purchase</h1>
            <label htmlFor="vatPercentage" className="block text-sm font-bold text-gray-600 mt-4">
              VAT Percentage (%)
            </label>
            <input
              type="text"
              id="vatPercentage"
              name="vatPercentage"
              value={vatPercentage}
              onChange={handleInputChange}
              className="mt-1 p-0.5 border rounded-md focus:outline-none focus:ring focus:border-blue-300 w-28"
              required
            />
            <div className='flex justify-center mt-4'>
               <button
              type="submit"
              className="bg-orange-100 hover:bg-orange-200 text-orange-600 font-bold py-2 px-4 rounded-full
               w-64 mx-auto mb-3 lg:ml-96 md:ml-72"
            >
              Save
            </button>
            </div>
          </div>
        </form>
        
        <div>
          <table className="min-w-full  border border-gray-300 mb-4 mx-auto ">
            <thead className='text-base bg-zinc-100 text-yellow-700 border'>
              <tr>
                <th className="text-left text-gray lg:pl-16 pl-4">VAT Percentage</th>
                <th className="p-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {vatList.map((vat,index) => (
                <tr key={vat._id }
                className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100 '}

                >
                  <td className=" p-1 text-left text-gray lg:pl-16 pl-4">{vat.vatPercentage}</td>
                  <td className="p-1 text-center text-gray">
                    <button
                      onClick={() => handleDeleteClick(vat._id)}
                      className="text-gray-600  focus:outline-none font-sans font-medium p-2 py-1 rounded-full  text-sm shadow-md" style={{ background: "#ffff" }}
                    >
                      <FontAwesomeIcon icon={faTrash} color="red" className=" text-center" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Delete Confirmation Popup */}
        {showDeletePopup && (
          <div className="fixed inset-0 bg-gray-200 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-red-500 mb-4">Are you sure you want to Delete ?</p>
              <button
                onClick={handleConfirmDelete}
                className=" bg-red-200  hover:bg-red-300 text-red-700 font-bold py-2 px-4 rounded-full mr-2"
              >
                Yes
              </button>
              <button
                onClick={handleCancelDelete}
                className=" bg-slate-300  hover:bg-slate-200 text-slate-700 font-bold py-2 px-4 rounded-full "
              >
                No
              </button>
            </div>
          </div>
        )}

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-gray-700 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-green-800">VAT already added</h2>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default VatForm;
