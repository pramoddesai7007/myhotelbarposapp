"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faFileLines,
  faPaste,
  faCubes,
  faBellConcierge,
  faTableCellsLarge,
  faBarsProgress,
  faReceipt,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

const CouponNavbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTableMasterDropdownOpen, setIsTableMasterDropdownOpen] =
    useState(false); //1//
  const [isMenuDropdownOpen, setIsMenuDropdownOpen] = useState(false); //2//
  const [isGstDropdownOpen, setIsGstDropdownOpen] = useState(false); //3//
  const [isItemMasterDropdownOpen, setIsItemMasterDropdownOpen] =
    useState(false);
  const [isVendorMasterDropdownOpen, setIsVendorMasterDropdownOpen] =
    useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isMasterDropdownOpen, setIsMasterDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isListOpen, setIsListOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Function to handle clicks outside of the dropdown list
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        // Click occurred outside of the dropdown, so close it
        setIsMasterDropdownOpen(false);
      }
    };

    // Add event listener to handle clicks outside of the dropdown list
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Clean up event listener when component unmounts
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (dropdownName) => {
    switch (dropdownName) {
      case "Master": //master
        setIsMasterDropdownOpen(!isMasterDropdownOpen);
        setIsListOpen(false); // Close the "Expenses" dropdown
        setIsSubMenuOpen(false); // Close the submenu dropdown
        break;

      case "SubMenu": //info
        setIsSubMenuOpen(!isSubMenuOpen);
        setIsListOpen(false); // Close the "Expenses" dropdown
        setIsMasterDropdownOpen(false); // Close the "Expenses" dropdown
        break;

      case "List": // material entry
        setIsOpen(!isOpen);
        setIsMasterDropdownOpen(false); // Close the "Master" dropdown
        setIsSubMenuOpen(false); // Close the submenu dropdown
        setIsListOpen(false); // Close the list dropdown
        break;

      case "Expenses": //expense
        setIsListOpen(!isListOpen);
        setIsMasterDropdownOpen(false); // Close the "Master" dropdown
        setIsSubMenuOpen(false); // Close the submenu dropdown
        break;

      // Add cases for other dropdowns if needed
      default:
        break;
    }
  };

  const openMasterDropdown = () => {
    toggleDropdown("Master");
  };

  const openSubMenu = () => {
    toggleDropdown("SubMenu");
  };

  const openListDropdown = () => {
    toggleDropdown("List");
  };

  const openExpensesDropdown = () => {
    toggleDropdown("Expenses");
  };

  // Function to toggle the state of the master dropdown
  const toggleMasterDropdown = () => {
    setIsMasterDropdownOpen(!isMasterDropdownOpen);
    // Close other dropdowns
    setIsListOpen(false); // Close the "Expenses" dropdown
  };

  // Function to toggle submenu visibility
  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };
  const toggleList = () => {
    setIsOpen(!isOpen);
    // Close other dropdowns
    setIsMasterDropdownOpen(false); // Close the "Master" dropdown
  };

  const handleListToggle = () => {
    setIsListOpen(!isListOpen);
    // Close other dropdowns
    setIsMasterDropdownOpen(false); // Close the "Master" dropdown
  };

  const router = useRouter();

  const opentableMasterDropdown = () => {
    setIsTableMasterDropdownOpen(!isTableMasterDropdownOpen);
    setIsMenuDropdownOpen(false);
    setIsGstDropdownOpen(false);
    setIsItemMasterDropdownOpen(false);
    setIsVendorMasterDropdownOpen(false);
  };

  const closeTableMasterDropdown = () => {
    setIsTableMasterDropdownOpen(false);
  };

  const handleToggle = () => {
    setIsMobile(!isMobile);
  };

  const openMenuDropdown = () => {
    setIsMenuDropdownOpen(!isMenuDropdownOpen);
    setIsGstDropdownOpen(false);
    setIsTableMasterDropdownOpen(false);
    setIsVendorMasterDropdownOpen(false);
    setIsItemMasterDropdownOpen(false);
  };

  const closePurchaseDropdown = () => {
    setIsMenuDropdownOpen(false);
  };

  const openGstDropdown = () => {
    setIsGstDropdownOpen(!isGstDropdownOpen);
    setIsMenuDropdownOpen(false);
    setIsTableMasterDropdownOpen(false);
    setIsVendorMasterDropdownOpen(false);
    setIsItemMasterDropdownOpen(false);
  };

  const openItemMasterDropdown = () => {
    setIsItemMasterDropdownOpen(!isItemMasterDropdownOpen);
    setIsMenuDropdownOpen(false);
    setIsGstDropdownOpen(false);
    setIsTableMasterDropdownOpen(false);
    setIsVendorMasterDropdownOpen(false);
  };

  const closeItemMasterDropdown = () => {
    setIsVendorMasterDropdownOpen(false);
  };

  const openVendorMasterDropdown = () => {
    setIsVendorMasterDropdownOpen(!isVendorMasterDropdownOpen);
    setIsMenuDropdownOpen(false);
    setIsGstDropdownOpen(false);
    setIsTableMasterDropdownOpen(false);
    setIsItemMasterDropdownOpen(false);
  };

  const closeVendorMasterDropdown = () => {
    setIsVendorMasterDropdownOpen(false);
  };

  const closeExpensesDropdown = () => {
    setIsGstDropdownOpen(false);
  };

  const home = () => {
    router.push("/couponDashboard");
  };

  const handleButtonClick = () => {
    // Redirect to the 'reportLogin' page
    router.push("/reportLogin");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isTableMasterDropdownOpen ||
        isMenuDropdownOpen ||
        isGstDropdownOpen ||
        isItemMasterDropdownOpen ||
        isVendorMasterDropdownOpen
      ) {
        const navbar = document.getElementById("navbar");
        if (navbar && !navbar.contains(event.target)) {
          closeTableMasterDropdown();
          closePurchaseDropdown();
          closeExpensesDropdown();
          setIsItemMasterDropdownOpen();
          setIsVendorMasterDropdownOpen();
        }
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [
    isTableMasterDropdownOpen,
    isMenuDropdownOpen,
    isGstDropdownOpen,
    isItemMasterDropdownOpen,
    isVendorMasterDropdownOpen,
  ]);

  return (
    <div className=" fixed top-0 w-full  z-20" ref={dropdownRef}>
      <div className="flex items-center h-11 text-white pr-4 md:pr-14 justify-end font-sans bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
        {/* Your content goes here */}
        <div className="md:hidden cursor-pointer mr-4" onClick={handleToggle}>
          <svg viewBox="0 0 10 8" width="30">
            <path
              d="M1 1h8M1 4h 8M1 7h8"
              stroke="#FFFFFF"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </div>
        {isMobile && (
          <div className="absolute top-16 left-0 right-0 bg-gray-200 rounded-lg  -mt-4 text-black  flex flex-col z-50">
            {/* Menu Dropdown */}
            <div className="relative group inline-block">
              <button
                className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black"
                onClick={() => toggleDropdown("SubMenu")}
              >
                <span className="pr-1 font-semibold flex-1 ml-1">Info</span>
                <span>
                  <svg
                    className={`fill-current h-4 w-4 transform ${
                      isSubMenuOpen ? "-rotate-90" : "rotate-0"
                    } transition duration-150 ease-in-out`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </button>

              {isSubMenuOpen && (
                <ul className="bg-gray-100 border border-orange-300 rounded-md transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top right-12 -mt-6 min-w-32 z-30">
                  <li className="rounded-md px-1 py-1 whitespace-nowrap hover:bg-gray-200">
                    <Link href="/counterHotel">
                      <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
                        <span className="pr-1 flex-1 text-black font-semibold">
                          Hotel Details
                        </span>
                      </button>
                    </Link>
                  </li>
                  <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
                    <Link href="/counterGreeting">
                      <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
                        <span className="pr-1 flex-1  text-black font-semibold">
                          Greeting Master
                        </span>
                      </button>
                    </Link>
                  </li>
                </ul>
              )}
            </div>
            {/* Bill Setting Dropdown */}
            <div className="relative group inline-block mt-3 ">
              <button
                className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black"
                onClick={() => toggleDropdown("Master")}
              >
                <span className="pr-1 font-semibold flex-1 ml-1 ">Master</span>
                <span>
                  <svg
                    className={`fill-current h-4 w-4 transform ${
                      isMasterDropdownOpen ? "-rotate-90" : "" // Rotate arrow based on dropdown state
                    } transition duration-150 ease-in-out`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </button>
              <div>
                <ul
                  className={`bg-gray-100 border border-orange-300 rounded-md transform scale-${
                    isMasterDropdownOpen ? "100" : "0" // Scale dropdown based on state
                  } absolute transition duration-150 ease-in-out origin-top -mt-8 w-44 right-8 z-30 ml-5 max-h-80 custom-scrollbars overflow-y-auto`}
                >
                  <div className="relative group inline-block mt-2">
                    <Link href={"/counter"}>
                      <button
                        className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black "
                        onClick={opentableMasterDropdown}
                      >
                        <span className="pr-1 font-semibold flex-0 pl-1">
                          Counter Master
                        </span>
                      </button>
                    </Link>
                  </div>
                  <div className="relative group inline-block mt-2">
                    <button
                      className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black "
                      onClick={opentableMasterDropdown}
                    >
                      <span className="pr-1 font-semibold flex-0 pl-1">
                        Main Menu Master
                      </span>
                    </button>
                  </div>
                  <div className="relative group inline-block mt-2">
                    <button
                      className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black "
                      onClick={opentableMasterDropdown}
                    >
                      <span className="pr-1 font-semibold flex-0 pl-1">
                        Submenu Master
                      </span>
                    </button>
                  </div>
                </ul>
              </div>
            </div>

            <div className="relative group mt-2">
              <ul className="">
                <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
                  <Link href="/counterGst">
                    <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
                      <span className="pr-1 flex-1 text-black font-semibold">
                        GST Order
                      </span>
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="relative group inline-block ml-1.5 mt-2 mb-6">
              <button
                className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black"
                onClick={() => toggleDropdown("Expenses")}
              >
                <span className="pr-1 font-semibold flex-0">Group</span>
                <span>
                  <svg
                    className={`fill-current h-4 w-4 transform transition duration-150 ease-in-out ${
                      isListOpen ? "-rotate-90" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </button>

              {isListOpen && (
                <ul className="bg-gray-100 border border-orange-300 rounded-md transform scale-100 absolute transition duration-150 ease-in-out origin-top right-12 -mt-8 min-w-32 z-30">
                  <li className="rounded-md px-1 py-1 whitespace-nowrap hover:bg-gray-200">
                    <Link href="/expensesForm">
                      <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
                        <span className="pr-1 flex-1 text-black font-semibold">
                          Counter Group{" "}
                        </span>
                      </button>
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
        )}{" "}
        <div className="hidden md:block  ">
          <div className="flex items-center h-16  text-white pr-14 md:pr-14 justify-end font-sans">
            <div className="relative group inline-block">
              <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-white">
                <FontAwesomeIcon
                  icon={faBarsProgress}
                  size="lg"
                  style={{ color: "#ffff" }}
                />

                <span className="pr-1 font-semibold flex-1 ml-1">Info</span>
                <span>
                  <svg
                    className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </button>

              <ul className="bg-gray-100 border border-orange-300 rounded-md transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32 ">
                <li className="rounded-md px-1 py-1 whitespace-nowrap hover:bg-gray-200 ">
                  <Link href="/counterHotel">
                    <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
                      <span className="pr-1 flex-1 text-black font-semibold">
                        Hotel Details
                      </span>
                    </button>
                  </Link>
                </li>
                <li className="rounded-md px-1 py-1 whitespace-nowrap hover:bg-gray-200 ">
                  <Link href="/counterGreeting">
                    <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
                      <span className="pr-1 flex-1 text-black font-semibold">
                        Greeting Master
                      </span>
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="relative group inline-block">
            
              <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-white">
                <FontAwesomeIcon
                  icon={faCubes}
                  size="lg"
                  style={{ color: "#ffff" }}
                />
                <span className="pr-1 font-semibold flex-1 ml-1">Masters</span>
                <span>
                  <svg
                    className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </button>

              <ul className="bg-gray-100 border border-orange-300 rounded-md transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32 ">
                <div className="relative group inline-block mt-2 ">
                  <button
                    className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black"
                    onClick={openMenuDropdown}
                  >
                    <span>
                      <svg
                        className={`fill-current h-4 w-4 transform ${
                          isMenuDropdownOpen
                            ? "rotate-90"
                            : "group-hover:-rotate-180"
                        } transition duration-150 ease-in-out`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </span>
                    <span className="pr-1 font-semibold flex-0 border-t whitespace-nowrap pl-1">
                      Menu Master
                    </span>
                  </button>

                  <ul
                    className={`bg-gray-100 border border-orange-300 rounded-md transform scale-${
                      isMenuDropdownOpen ? "100" : "0"
                    } absolute transition duration-150 ease-in-out origin-top-right min-w-32 mr-40 right-0`}
                  >
                    <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
                      <Link href="/main">
                        <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
                          <span className="pr-1 flex-1 text-black font-semibold">
                            Menu List{" "}
                          </span>
                        </button>
                      </Link>
                    </li>
                    <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
                      <Link href="/menu">
                        <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
                          <span className="pr-1 flex-1 text-black font-semibold">
                            Sub-Menu List{" "}
                          </span>
                        </button>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="relative group inline-block mt-2">
                  <button
                    className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black"
                    onClick={openGstDropdown}
                  >
                    <span>
                      <svg
                        className={`fill-current h-4 w-4 transform ${
                          isGstDropdownOpen
                            ? "rotate-90"
                            : "group-hover:-rotate-180"
                        } transition duration-150 ease-in-out`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </span>
                    <span className="pr-1 font-semibold flex-0 border-t pl-1">
                      GST Master
                    </span>
                  </button>

                  <ul
                    className={`bg-gray-100 border border-orange-300 rounded-md transform scale-${
                      isGstDropdownOpen ? "100" : "0"
                    } absolute transition duration-150 ease-in-out origin-top-right min-w-34 mr-36 -mt-7 right-0`}
                  >
                    <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
                      <Link href="/counterGst">
                        <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
                          <span className="pr-1 flex-1 text-black font-semibold">
                            GST Order
                          </span>
                        </button>
                      </Link>
                    </li>
                  </ul>
                </div>
                <li className="rounded-md px-1 py-1 whitespace-nowrap hover:bg-gray-200 ">
                  <Link href="/counter">
                    <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
                      <span className="pr-1 flex-1 text-black font-semibold">
                        Counter Master
                      </span>
                    </button>
                  </Link>
                </li>
              </ul>
              
            </div>

            <div className="relative group inline-block">
              <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center  text-white">
                <FontAwesomeIcon
                  icon={faPaste}
                  size="lg"
                  style={{ color: "#ffff" }}
                />

                <span className="pr-1 font-semibold flex-1 ml-1 ">Group</span>
                <span>
                  <svg
                    className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </button>

              <ul className="bg-gray-100 border border-orange-300 w-40 rounded-md transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32">
                <li className="rounded-md px-3 py-1 hover:bg-gray-200">
                  <Link href="/counterGroup">
                    <button className="outline-none focus:outline-none px-2 py-1 rounded-md flex items-center text-black border-t">
                      <span className="pr-1 flex-1 text-black font-semibold">
                        Counter Group
                      </span>
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="">
          <FontAwesomeIcon
            icon={faHouse}
            onClick={home}
            className="cursor-pointer text-xl text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default CouponNavbar;