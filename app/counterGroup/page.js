"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faTrash,
  faCheck,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import CouponNavbar from "../components/couponNavbar";

const CounterGroupMenu = () => {
  const [mainCategories, setMainCategories] = useState([]);
  const [menus, setMenus] = useState([]);
  const [counterCategorySelectedMenus, setCounterCategorySelectedMenus] =
    useState([]);
  const [selectedMainCategory, setSelectedMainCategory] = useState("");
  const [counterCategories, setCounterCategories] = useState([]);
  const [selectedCounterCategory, setSelectedCounterCategory] = useState("");
  const [selectedMenus, setSelectedMenus] = useState([]);
  const [filteredMenus, setFilteredMenus] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedAddMenus, setSelectedAddMenus] = useState([]);
  const [menuSearchQuery, setMenuSearchQuery] = useState("");
  const [selectAll, setSelectAll] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [isNoMenuSelectedModalOpen, setIsNoMenuSelectedModalOpen] =
    useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [menuCounts, setMenuCounts] = useState({});
  const [popups, setPopups] = useState({
    isErrorModalOpen: false,
    isNoMenuSelectedModalOpen: false,
    isSuccessModalOpen: false,
  });
  const [selectedMainCategoryName, setSelectedMainCategoryName] = useState("");
  useEffect(() => {
    const fetchMainCategories = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://103.159.85.246:6001/api/main");
        setMainCategories(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching main categories:", error);
        setError("Error fetching main categories from the server");
        setLoading(false);
      }
    };

    fetchMainCategories();
  }, []);

  useEffect(() => {
    const fetchCounterCategories = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://103.159.85.246:6001/api/counter");
        setCounterCategories(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching counter categories:", error);
        setError("Error fetching counter categories from the server");
        setLoading(false);
      }
    };

    fetchCounterCategories();
  }, []);

  const handleCounterCategoryChange = (event) => {
    const selectedCounterCategoryId = event.target.value;
    setSelectedCounterCategory(selectedCounterCategoryId);

    // Find the selected counter category object
    const selectedCounterCategoryObj = counterCategories.find(
      (category) => category._id === selectedCounterCategoryId
    );

    // Update the selected main category name
    if (selectedCounterCategoryObj && selectedCounterCategoryObj.mainCategory) {
      setSelectedMainCategoryName(selectedCounterCategoryObj.mainCategory.name);
    } else {
      setSelectedMainCategoryName("");
    }
  };

  useEffect(() => {
    const authToken = localStorage.getItem("couponEmployeeAuthToken");
    if (!authToken) {
      router.push("/counterLogin");
    }
  }, []);





  const router = useRouter();


  let closeTimeout;

  const [isMenuAddedPopupOpen, setIsMenuAddedPopupOpen] = useState(false);

  // Function to handle adding menus to the counter category
  const handleAddMenusToCategory = async () => {
    try {
      const response = await axios.post(
        `http://103.159.85.246:6001/api/counter/${selectedCounterCategory}/assignmenus`,
        {
          menuIds: selectedAddMenus,
        }
      );

      openPopup("isSuccessModalOpen");
      console.log("Menus assigned successfully:", response.data);
    } catch (error) {
      // Handle error
      if (error.response) {
        openPopup("isErrorModalOpen");
        console.log(
          "Server responded with error status:",
          error.response.status
        );
        console.log("Error response data:", error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.log("No response received from the server:", error.request);
      } else {
        // Something happened in setting up the request that triggered an error
        console.log("Error setting up the request:", error.message);
      }
    }
  };

  const handleMainCategoryChange = (event) => {
    const { value, name } = event.target;
    setSelectedMainCategory(value);

    // Assuming you have access to the name of the main category
    // and it's provided as a property of the option element
    const categoryName =
      event.target.options[event.target.selectedIndex].getAttribute(
        "data-name"
      );
    setSelectedMainCategoryName(categoryName);
  };



  const assignMainCategoryToCounter = async () => {
    try {
      setLoading(true);
  
      // Ensure counterCategories is properly initialized and is an array
      if (!Array.isArray(counterCategories) || counterCategories.length === 0) {
        console.error("Counter categories not properly initialized or empty");
        return;
      }
  
      // Check if the selected main category is already assigned to any other counter
      const isMainCategoryAssignedToOtherCounter = counterCategories.some(counter => 
        counter.countername !== selectedCounterCategory && // Exclude the current counter
        counter.mainCategory && // Ensure mainCategory is defined
        counter.mainCategory.id === selectedMainCategory
      );
  
      if (isMainCategoryAssignedToOtherCounter) {
        // Show popup indicating that the main category is already assigned to another counter
        openPopup("isErrorModalOpen");
        setLoading(false);
        return; // Exit function
      }
  
      // If the main category is not assigned to any other counter, proceed with the API call
      const response = await axios.post(
        `http://103.159.85.246:6001/api/counter/${selectedCounterCategory}/assignmaincategory`,
        {
          mainCategory: {
            id: selectedMainCategory,
            name: selectedMainCategoryName,
          },
        }
      );
      openPopup("isSuccessModalOpen");
      console.log("Main category assigned to counter successfully:", response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error assigning main category to counter:", error);
      setError("Error assigning main category to counter");
      setLoading(false);
    }
  };
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    assignMainCategoryToCounter();
  };
  
  useEffect(() => {
    let timeoutId;
    if (Object.values(popups).some((isOpen) => isOpen)) {
      timeoutId = setTimeout(() => {
        setPopups({
          isErrorModalOpen: false,
          isNoMenuSelectedModalOpen: false,
          isSuccessModalOpen: false,
        });
      }, 2000); // Close all popups after 3 seconds
    }

    // Cleanup function to clear the timeout when the component unmounts
    return () => {
      clearTimeout(timeoutId);
    };
  }, [popups]);
  const closeModal = () => {
    setIsErrorModalOpen(false);
    setIsNoMenuSelectedModalOpen(false);
    setIsSuccessModalOpen(false);
  };

  useEffect(() => {
    return () => {
      clearTimeout(closeTimeout);
    };
  }, []);

  const handleMenuCheckboxChange = (menuId) => {
    const updatedSelectedMenus = selectedMenus.includes(menuId)
      ? selectedMenus.filter((id) => id !== menuId)
      : [...selectedMenus, menuId];

    setSelectedMenus(updatedSelectedMenus);

    const isAllSelected = filteredMenus.every((menu) =>
      updatedSelectedMenus.includes(menu._id)
    );

    setSelectAll(isAllSelected);
  };

  const handleSelectAllChange = () => {
    const updatedSelectAll = !selectAll;
    setSelectAll(updatedSelectAll);

    const updatedSelectedMenus = updatedSelectAll
      ? filteredMenus.map((menu) => menu._id)
      : [];

    setSelectedMenus(updatedSelectedMenus);
  };

  const fetchAllMenus = async () => {
    try {
      const response = await axios.get(
        "http://103.159.85.246:6001/api/menu/menus/list"
      );
      const allMenus = response.data;
      // console.log(response.data);
      const counts = {};
      allMenus.forEach((menu) => {
        const category = menu.category;
        counts[category] = (counts[category] || 0) + 1;
      });

      setMenuCounts(counts);
      setMenus(allMenus);
    } catch (error) {
      console.error("Error fetching menus:", error);
    }
  };

  useEffect(() => {
    fetchAllMenus();
  }, []);

  useEffect(() => {
    fetchAllMenus();
  }, []);

  const handleAddMenuCheckboxChange = (menuId) => {
    const isSelected = selectedAddMenus.includes(menuId);

    if (isSelected) {
      setSelectedAddMenus((prevMenus) =>
        prevMenus.filter((menu) => menu !== menuId)
      );
    } else {
      setSelectedAddMenus((prevMenus) => [...prevMenus, menuId]);
    }
  };

  const setErrorWithDuration = (errorMessage, duration) => {
    setError(errorMessage);

    setTimeout(() => {
      clearError();
    }, duration);
  };

  const clearError = () => {
    setError(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Adjusted URL to fetch main categories
        const mainCategoriesResponse = await axios.get(
          "http://103.159.85.246:6001/api/main"
        );

        // Assuming mainCategoriesResponse.data contains main categories
        setMainCategories(mainCategoriesResponse.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data from the server");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const home = () => {
    router.push("/dashboard");
  };

  const filteredMenusForAdd = menus.filter((menu) =>
    menu.name.toLowerCase().includes(menuSearchQuery.toLowerCase())
  );
  const fetchMenusForCounterCategory = async (counterCategoryId) => {
    try {
      setLoading(true);

      // Adjust the API endpoint to match your backend route for fetching menus based on the counter category ID
      const response = await axios.get(
        `http://103.159.85.246:6001/api/counter/${counterCategoryId}/menus`
      );

      // Assuming response.data contains the menus for the selected counter category
      setCounterCategorySelectedMenus(response.data);
      setLoading(false);
    } catch (error) {
      console.error(
        "Error fetching menus for the selected counter category:",
        error
      );
      setError("Error fetching menus for the selected counter category");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectedCounterCategory) {
      fetchMenusForCounterCategory(selectedCounterCategory);
    }
  }, [selectedCounterCategory]);

  // Function to close all popups after 3 seconds
  const closeAllPopups = () => {
    setTimeout(() => {
      setPopups({
        isErrorModalOpen: false,
        isNoMenuSelectedModalOpen: false,
        isSuccessModalOpen: false,
      });
    }, 3000);
  };

  // Function to open a specific popup
  const openPopup = (popupName) => {
    setPopups((prevPopups) => ({
      ...prevPopups,
      [popupName]: true,
    }));
    closeAllPopups(); // Close all popups after opening one
  };

  const [selectAllMenusInSection, setSelectAllMenusInSection] = useState(false);

  // Event handler to handle changes to the "Select All Menus" checkbox within the specified section
  const handleSelectAllMenusInSectionChange = (event) => {
    setSelectAllMenusInSection(event.target.checked);

    // Update the state of selected menus based on the value of the checkbox
    const updatedSelectedMenus = event.target.checked
      ? counterCategorySelectedMenus.map((menu) => menu._id)
      : [];
    setSelectedMenus(updatedSelectedMenus);
  };

  const handleDeleteMenus = async () => {
    showDeleteConfirmation();

    try {
      setLoading(true);

      const response = await axios.delete(
        `http://103.159.85.246:6001/api/counter/${selectedCounterCategory}/removemenus`,
        {
          data: { menuIds: selectedMenus },
        }
      );

      console.log("Menus deletion successful:", response.data);

      setSelectedMenus([]);
      setLoading(false);
    } catch (error) {
      console.error("Error deleting menus:", error);
      setError("Error deleting menus");
      setLoading(false);
    }
  };


  const [showDeletePopup, setShowDeletePopup] = useState(false);

  // Function to show delete confirmation popup and automatically hide it after 3 seconds
  const showDeleteConfirmation = () => {
    setShowDeletePopup(true);

    setTimeout(() => {
      hideDeleteConfirmation();
    }, 3000); // Hide popup after 3 seconds
  };

  // Function to hide delete confirmation popup
  const hideDeleteConfirmation = () => {
    setShowDeletePopup(false);
  };
  return (
    <>
  <CouponNavbar/>
      <div className="container justify-center text-lg mt-1 font-sans font-semibold mx-auto p-5 overflow-x-auto border-gray-300 border-1 max-full"></div>
      <div>
        <div className=" bg-black font-sans">
          {popups.isErrorModalOpen && (
            <div
              className="fixed inset-0 flex items-center justify-center z-50 font-sans"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            >
              <div className="modal-container bg-white w-full md:w-96 p-6 m-4 rounded shadow-lg">
                <div className="text-center">
                  <h3 className="mb-5 text-lg font-semibold text-red-600 dark:text-red-400">
                    Menus are already added!
                  </h3>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {menus.length === 0 && <p className="text-red-500">Menus object empty</p>}
      {showDeletePopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 font-sans" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
          <div className="modal-container bg-white w-full md:w-96 p-6 m-4 rounded shadow-lg">
            <div className="text-center">
              <h3 className="mb-5 text-lg font-semibold text-red-600 dark:text-red-400">
            menus are deleted successfully
              </h3>
              {/* No need for close button */}
            </div>
          </div>
        </div>
      )}
      <div className="max-w-4xl mx-auto mt-2 p-4 rounded-md flex flex-col md:flex-row bg-gray-50 font-sans">
        <div className="w-full md:w-1/2 pr-4 mb-4 md:mb-0">
          <h1 className="text-xl font-bold font-sans mb-2 md:mb-0 text-orange-600">
            Group Menus
          </h1>


          
          <div className="mb-4">
            <label
              htmlFor="counterCategory"
              className="block text-gray-700 text-sm font-bold mb-2 mt-2"
              onChange={handleCounterCategoryChange}

            >
              Select Counter Category:
            </label>
            <select
            id="counterCategory"
            name="counterCategory"
            value={selectedCounterCategory}
            onChange={(e) => {
              setSelectedCounterCategory(e.target.value);
          
              // Fetch the main category name associated with the selected counter category
              const selectedCounterCategoryObject = counterCategories.find(
                (counterCategory) => counterCategory._id === e.target.value
              );
          
              if (selectedCounterCategoryObject) {
                const { mainCategory } = selectedCounterCategoryObject;
                if (mainCategory) {
                  setSelectedMainCategoryName(mainCategory.name);
                } else {
                  setSelectedMainCategoryName(""); // Reset the main category name if not found
                }
              } else {
                setSelectedMainCategoryName(""); // Reset the main category name if the selected counter category is not found
              }
            }}
            className="mt-1 p-2 w-1/2 border text-sm bg-white rounded-xl focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="" disabled>
              Select Counter Category
            </option>
            {counterCategories.map((counterCategory) => (
              <option key={counterCategory._id} value={counterCategory._id}>
                {counterCategory.countername}
              </option>
            ))}
          </select>
          
            {selectedMainCategoryName && (
              <p>Main Category: {selectedMainCategoryName}</p>
            )}
          </div>
          <select
            id="mainCategory"
            name="mainCategory"
            value={selectedMainCategory}
            onChange={handleMainCategoryChange}
            className="mt-1 p-2 w-1/2 border text-sm bg-white rounded-xl focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="" disabled>
              Select Main Category
            </option>
            {mainCategories.map((mainCategory) => (
              <option
                key={mainCategory._id}
                value={mainCategory._id}
                data-name={mainCategory.name} // Include the name as a data attribute
              >
                {mainCategory.name}
              </option>
            ))}
          </select>

          {/* */}

          <div className="mb-4 overflow-y-auto max-h-96">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Selected Category:
            </label>

            <>
              <div className="flex items-center mb-2 w-full">
                <input
                  type="checkbox"
                  id="select-all-menus-in-section"
                  onChange={handleSelectAllMenusInSectionChange}
                  checked={selectAllMenusInSection}
                  className="mr-2 checkbox text-sm mt-1"
                />
                <label
                  htmlFor="select-all-menus-in-section"
                  className="text-gray-800 text-sm font-bold"
                >
                  Select All Menus
                </label>
              </div>
              {counterCategorySelectedMenus.map((menu) => (
                <div key={menu._id} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    id={`category-menu-${menu._id}`}
                    onChange={() => handleMenuCheckboxChange(menu._id)}
                    checked={selectedMenus.includes(menu._id)}
                    className="mr-2 checkbox text-sm mt-1"
                  />
                  <label className="text-gray-800 text-sm">{menu.name}</label>
                </div>
              ))}
            </>
          </div>
          <button
            type="button"
            onClick={handleDeleteMenus}
            className="bg-red-100 hover:bg-red-200 text-red-600 font-bold py-2 px-4 rounded-full w-72 mx-auto mt-4"
          >
            <FontAwesomeIcon
              icon={faTrash}
              className="cursor-pointer mr-2 text-sm"
            />
            Delete Selected Menus
          </button>
        </div>


        {error && <p className="text-red-500">{error}</p>}
        <div className="w-full md:w-1/2 ml-0 md:ml-4">
          <div className="flex flex-col md:flex-row">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Select Menus to Add:
            </label>
            <div className="ml-2 text-sm">
              {Object.keys(menuCounts).map((category) => (
                <p key={category}>Total Menus: {menuCounts[category]}</p>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap">
            <input
              type="text"
              placeholder="Search menus..."
              value={menuSearchQuery}
              onChange={(e) => setMenuSearchQuery(e.target.value)}
              className="w-full p-2 border mb-4 text-sm rounded-xl focus:outline-none focus:ring focus:border-blue-300"
            />
            <div
              className="custom-scrollbars overflow-y-auto force-overflow h-96 w-full scrollbar"
              id="style-4"
            >
              {loading ? (
                <p>Loading menus...</p>
              ) : (
                <>
                  <div className="flex flex-wrap">
                    {filteredMenusForAdd
                      .slice(0, Math.ceil(filteredMenusForAdd.length))
                      .map((menu) => (
                        <div
                          key={menu._id}
                          className="flex items-center w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/2 mt-2"
                        >
                          <input
                            type="checkbox"
                            id={`add-menu-${menu._id}`}
                            onChange={() =>
                              handleAddMenuCheckboxChange(menu._id)
                            }
                            checked={selectedAddMenus.includes(menu._id)}
                            className="mr-2 checkbox text-sm mt-1"
                          />
                          <label
                            htmlFor={`add-menu-${menu._id}`}
                            className="text-sm text-gray-800"
                          >
                            {menu.name}
                          </label>
                        </div>
                      ))}
                  </div>
                </>
              )}
            </div>
          </div>
          <div className=" justify-between">
            {menus.length > 0 && (
              <button
                type="button"
                onClick={handleAddMenusToCategory}
                className="bg-orange-100 hover:bg-orange-200 text-orange-600 font-bold py-2 px-4 rounded-full w-72 mx-auto mt-4"
              >
                <FontAwesomeIcon
                  icon={faCheck}
                  className="cursor-pointer mr-2 text-sm"
                />
                Add Selected Menus
              </button>
            )}
            <form action="submit" onSubmit={handleSubmit}>
              <button
                type="submit"
                className="bg-orange-100 hover:bg-orange-200 text-orange-600 font-bold py-2 px-4 rounded-full w-72 mx-auto mt-4"
              >
                Assign Main Category to Counter
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* No Menu Selected Modal */}
      {popups.isNoMenuSelectedModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 font-sans"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="modal-container bg-white w-full md:w-96 p-6 m-4 rounded shadow-lg">
            <div className="text-center">
              <h3 className="mb-5 text-lg font-semibold text-red-600 dark:text-red-400">
                Please select menus to add!
              </h3>
            </div>
          </div>
        </div>
      )}
      {/* Success Modal */}
      {popups.isSuccessModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 font-sans"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="modal-container bg-white w-full md:w-96 p-6 m-4 rounded shadow-lg">
            <div className="text-center">
              <h3 className="mb-5 text-lg font-semibold text-green-600 dark:text-green-400">
                Menu Added Successfully
              </h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CounterGroupMenu;