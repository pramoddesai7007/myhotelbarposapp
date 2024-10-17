'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/Navbar';

const AdminSettings = () => {
  const [admins, setAdmins] = useState([]);
  const [isDirectState, setIsDirectState] = useState([]); // State to store isDirect values
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  useEffect(() => {
    const authToken = localStorage.getItem("EmployeeAuthToken");
    if (!authToken) {
      router.push("/login");
    }
  }, []);


  // const fetchAdmins = async () => {
  //   try {
  //     const response = await axios.get('http://103.159.85.246:6001/api/auth/admins');
  //     setAdmins(response.data.admins.concat(response.data.adminBars)); // Combine both results
  //   } catch (error) {
  //     console.error('Error fetching admins:', error.message);
  //     setErrorMessage('Failed to fetch admins.');
  //   }
  // };

  useEffect(() => {
    // Declare the fetchAdmins function inside useEffect
    const fetchAdmins = async () => {
      try {
        const response = await axios.get('http://103.159.85.246:6001/api/auth/admins');
        const combinedAdmins = response.data.admins.concat(response.data.adminBars); // Combine both Admin and AdminBar data

        setAdmins(combinedAdmins); // Set the combined admins

        // Extract isDirect values and save them in the isDirectState
        const isDirectValues = combinedAdmins.map((admin) => ({
          id: admin._id, // or any unique identifier
          isDirect: admin.isDirect,
        }));
        console.log(isDirectValues);
        setIsDirectState(isDirectValues); // Set the state with isDirect values
      } catch (error) {
        console.error('Error fetching admins:', error.message);
        setErrorMessage('Failed to fetch admins.');
      }
    };

    // Call fetchAdmins inside the useEffect hook
    fetchAdmins();
  }, []); // Empty dependency array means this runs once when the component mounts

  const handleToggleChange = async (adminId, currentStatus) => {
    try {
      const newValue = !currentStatus; // Toggle the current status

      // Send a PATCH request to update isDirect
      const response = await axios.patch(`http://103.159.85.246:6001/api/auth/admin/${adminId}/direct`, {
        isDirect: newValue
      });

      if (response.status === 200) {
        // Update the local state to reflect changes
        setAdmins((prev) => 
          prev.map(admin => 
            admin._id === adminId ? { ...admin, isDirect: newValue } : admin
          )
        );
        setShowModal(true); // Show success modal
        setTimeout(() => setShowModal(false), 2000); // Auto-hide the modal
      }
    } catch (error) {
      console.error('Error updating setting:', error.message);
      setErrorMessage('Failed to update setting.');
    }
  };

  return (
    <>
      <Navbar />

      <div className="max-w-5xl mx-auto mt-20 p-6 bg-white rounded-lg shadow-lg font-sans">
        <h1 className="text-2xl font-bold text-orange-600 mb-4">Admin Settings</h1>

        <div className="mb-4">
          {admins.map((admin) => (
            <div key={admin._id} className="flex items-center justify-between mb-2">
              <span className="text-lg font-semibold">Direct Cash/Online</span>
              <button
      onClick={() => handleToggleChange(admin._id, admin.isDirect)}
      className={`p-2 rounded-full transition duration-300 ease-in-out ${admin.isDirect ? 'bg-green-500' : 'bg-red-500'} text-white`}
    >
      {/* Use the FontAwesomeIcon component to toggle between icons */}
      <FontAwesomeIcon 
      icon={admin.isDirect ? faToggleOn : faToggleOff}
      className=" cursor-pointer text-2xl flex item-center" />
    </button>
            </div>
          ))}
        </div>

        {/* Modal for success */}
        {showModal && (
          <div className="fixed inset-0 bg-gray-700 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-green-800">Setting updated successfully!</h2>
              </div>
            </div>
          </div>
        )}

        {/* Error Modal */}
        {errorMessage && (
          <div className="fixed inset-0 bg-gray-700 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-red-800">{errorMessage}</h2>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AdminSettings;