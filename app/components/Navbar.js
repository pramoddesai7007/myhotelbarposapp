// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHouse, faFileLines, faPaste, faCubes, faBell, faTableCellsLarge, faBarsProgress, faReceipt } from "@fortawesome/free-solid-svg-icons";
// import { useRouter } from "next/navigation";

// const Navbar = () => {
//   const [isMobile, setIsMobile] = useState(false);
//   const [isTableMasterDropdownOpen, setIsTableMasterDropdownOpen] = useState(false); //1//
//   const [isMenuDropdownOpen, setIsMenuDropdownOpen] = useState(false);  //2//
//   const [items, setItems] = useState([]);
//   const [error, setError] = useState(null);
//   const [isBarMenuDropdownOpen, setIsBarMenuDropdownOpen] = useState(false);  //2//
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [itemCount, setItemCount] = useState(0); // State for item count
//   const [isGstDropdownOpen, setIsGstDropdownOpen] = useState(false);  //3//
//   const [isVatDropdownOpen, setIsVatDropdownOpen] = useState(false);  //3//
//   const [isItemMasterDropdownOpen, setIsItemMasterDropdownOpen] = useState(false);
//   const [isVendorMasterDropdownOpen, setIsVendorMasterDropdownOpen] = useState(false);
//   const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
//   const [isMasterDropdownOpen, setIsMasterDropdownOpen] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   const [isListOpen, setIsListOpen] = useState(false);
//   const dropdownRef = useRef(null);



//   useEffect(() => {
//     // Function to handle clicks outside of the dropdown list
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         // Click occurred outside of the dropdown, so close it
//         setIsMasterDropdownOpen(false);
//       }
//     };

//     // Add event listener to handle clicks outside of the dropdown list
//     document.addEventListener('mousedown', handleClickOutside);

//     return () => {
//       // Clean up event listener when component unmounts
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   const toggleDropdown = (dropdownName) => {
//     switch (dropdownName) {
//       case "Master": //master
//         setIsMasterDropdownOpen(!isMasterDropdownOpen);
//         setIsListOpen(false); // Close the "Expenses" dropdown
//         setIsSubMenuOpen(false); // Close the submenu dropdown
//         break;

//       case "SubMenu":  //info
//         setIsSubMenuOpen(!isSubMenuOpen);
//         setIsListOpen(false); // Close the "Expenses" dropdown
//         setIsMasterDropdownOpen(false); // Close the "Expenses" dropdown
//         break;

//       case "List": // material entry
//         setIsOpen(!isOpen);
//         setIsMasterDropdownOpen(false); // Close the "Master" dropdown
//         setIsSubMenuOpen(false); // Close the submenu dropdown
//         setIsListOpen(false); // Close the list dropdown
//         break;

//       case "Expenses": //expense
//         setIsListOpen(!isListOpen);
//         setIsMasterDropdownOpen(false); // Close the "Master" dropdown
//         setIsSubMenuOpen(false); // Close the submenu dropdown
//         break;

//       // Add cases for other dropdowns if needed
//       default:
//         break;
//     }
//   };

//   const openMasterDropdown = () => {
//     toggleDropdown("Master");
//   };

//   const openSubMenu = () => {
//     toggleDropdown("SubMenu");
//   };

//   const openListDropdown = () => {
//     toggleDropdown("List");
//   };

//   const openExpensesDropdown = () => {
//     toggleDropdown("Expenses");
//   };


//   // Function to toggle the state of the master dropdown
//   const toggleMasterDropdown = () => {
//     setIsMasterDropdownOpen(!isMasterDropdownOpen);
//     // Close other dropdowns
//     setIsListOpen(false); // Close the "Expenses" dropdown
//   };

//   // Function to toggle submenu visibility
//   const toggleSubMenu = () => {
//     setIsSubMenuOpen(!isSubMenuOpen);
//   };
//   const toggleList = () => {
//     setIsOpen(!isOpen);
//     // Close other dropdowns
//     setIsMasterDropdownOpen(false); // Close the "Master" dropdown
//   };

//   const handleListToggle = () => {
//     setIsListOpen(!isListOpen);
//     // Close other dropdowns
//     setIsMasterDropdownOpen(false); // Close the "Master" dropdown
//   };

//   const router = useRouter();

//   const opentableMasterDropdown = () => {
//     setIsTableMasterDropdownOpen(!isTableMasterDropdownOpen);
//     setIsMenuDropdownOpen(false);
//     setIsBarMenuDropdownOpen(false);
//     setIsGstDropdownOpen(false);
//     setIsVatDropdownOpen(false);
//     setIsItemMasterDropdownOpen(false);
//     setIsVendorMasterDropdownOpen(false);

//   };

//   const closeTableMasterDropdown = () => {
//     setIsTableMasterDropdownOpen(false);
//   };

//   const handleToggle = () => {
//     setIsMobile(!isMobile);
//   };

//   const openMenuDropdown = () => {
//     setIsMenuDropdownOpen(!isMenuDropdownOpen);
//     setIsGstDropdownOpen(false);
//     setIsVatDropdownOpen(false);
//     setIsTableMasterDropdownOpen(false);
//     setIsVendorMasterDropdownOpen(false);
//     setIsItemMasterDropdownOpen(false);
//     setIsBarMenuDropdownOpen(false);



//   };

//   const openBarMenuDropdown = () => {
//     setIsBarMenuDropdownOpen(!isBarMenuDropdownOpen);
//     setIsGstDropdownOpen(false);
//     setIsVatDropdownOpen(false);
//     setIsTableMasterDropdownOpen(false);
//     setIsVendorMasterDropdownOpen(false);
//     setIsItemMasterDropdownOpen(false);
//     setIsMenuDropdownOpen(false);


//   };

//   const closePurchaseDropdown = () => {
//     setIsMenuDropdownOpen(false);
//     setIsBarMenuDropdownOpen(false);
//   };

//   const openGstDropdown = () => {
//     setIsGstDropdownOpen(!isGstDropdownOpen);
//     setIsMenuDropdownOpen(false);
//     setIsTableMasterDropdownOpen(false);
//     setIsVendorMasterDropdownOpen(false);
//     setIsItemMasterDropdownOpen(false);
//     setIsVatDropdownOpen(false);
//     setIsBarMenuDropdownOpen(false);



//   };

//   const openVatDropdown = () => {
//     setIsVatDropdownOpen(!isVatDropdownOpen);
//     setIsMenuDropdownOpen(false);
//     setIsTableMasterDropdownOpen(false);
//     setIsVendorMasterDropdownOpen(false);
//     setIsItemMasterDropdownOpen(false);
//     setIsGstDropdownOpen(false);
//     setIsBarMenuDropdownOpen(false);



//   };


//   const openItemMasterDropdown = () => {
//     setIsItemMasterDropdownOpen(!isItemMasterDropdownOpen);
//     setIsMenuDropdownOpen(false);
//     setIsBarMenuDropdownOpen(false);
//     setIsGstDropdownOpen(false);
//     setIsVatDropdownOpen(false);
//     setIsTableMasterDropdownOpen(false);
//     setIsVendorMasterDropdownOpen(false);

//   };

//   const closeItemMasterDropdown = () => {
//     setIsVendorMasterDropdownOpen(false);
//   };

//   const openVendorMasterDropdown = () => {
//     setIsVendorMasterDropdownOpen(!isVendorMasterDropdownOpen);
//     setIsMenuDropdownOpen(false);
//     setIsGstDropdownOpen(false);
//     setIsVatDropdownOpen(false);
//     setIsTableMasterDropdownOpen(false);
//     setIsItemMasterDropdownOpen(false);

//   };

//   const closeVendorMasterDropdown = () => {
//     setIsVendorMasterDropdownOpen(false);
//   };

//   const closeExpensesDropdown = () => {
//     setIsGstDropdownOpen(false);
//     setIsVatDropdownOpen(false);

//   };

//   const home = () => {
//     router.push("/dashboard");
//   };

//   const handleButtonClick = () => {
//     // Redirect to the 'reportLogin' page
//     router.push("/reportLogin");
//   };

//   // Fetch items when component mounts
//   useEffect(() => {
//     const fetchItems = async () => {
//       try {
//         const response = await fetch('http://103.159.85.246:6001/api/item/items/equal-low-stock');
//         if (!response.ok) {
//           throw new Error('Network response was not ok ' + response.statusText);
//         }
//         const data = await response.json();
//         console.log('Fetched items:', data); // Debug: log the fetched data
//         setItems(data);
//         setItemCount(data.length); // Update the item count based on fetched items
//       } catch (error) {
//         console.error('Error fetching items:', error);
//       }
//     };

//     fetchItems();
//   }, []); // Empty dependency array ensures this runs once when component mounts

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };



//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         isTableMasterDropdownOpen ||
//         isMenuDropdownOpen ||
//         isBarMenuDropdownOpen ||
//         isGstDropdownOpen ||
//         isVatDropdownOpen ||
//         isItemMasterDropdownOpen ||
//         isVendorMasterDropdownOpen
//       ) {
//         const navbar = document.getElementById("navbar");
//         if (navbar && !navbar.contains(event.target)) {
//           closeTableMasterDropdown();
//           closePurchaseDropdown();
//           closeExpensesDropdown();
//           setIsItemMasterDropdownOpen();
//           setIsVendorMasterDropdownOpen();

//         }
//       }
//     };

//     window.addEventListener("click", handleClickOutside);

//     return () => {
//       window.removeEventListener("click", handleClickOutside);
//     };
//   }, [isTableMasterDropdownOpen, isMenuDropdownOpen, isBarMenuDropdownOpen, isGstDropdownOpen, isVatDropdownOpen, isItemMasterDropdownOpen, isVendorMasterDropdownOpen]);


//   return (
//     <div className=" fixed top-0 w-full  z-20" ref={dropdownRef}>
//       <div className="flex items-center h-11 text-white pr-4 md:pr-14 justify-end font-sans bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
//         {/* Your content goes here */}



//         <div className="md:hidden cursor-pointer mr-4" onClick={handleToggle}>
//           <svg viewBox="0 0 10 8" width="30">
//             <path
//               d="M1 1h8M1 4h 8M1 7h8"
//               stroke="#FFFFFF"
//               strokeWidth="1"
//               strokeLinecap="round"
//             />
//           </svg>
//         </div>
//         {isMobile && (
//           <div className="absolute top-16 left-0 right-0 bg-gray-200 rounded-lg  -mt-4 text-black  flex flex-col z-50">
//             {/* Menu Dropdown */}
//             <div className="relative group inline-block">
//               <button
//                 className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black"
//                 onClick={() => toggleDropdown("SubMenu")}>
//                 <span className="pr-1 font-semibold flex-1 ml-1">Info</span>
//                 <span>
//                   <svg
//                     className={`fill-current h-4 w-4 transform ${isSubMenuOpen ? '-rotate-90' : 'rotate-0'
//                       } transition duration-150 ease-in-out`}
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
//                   </svg>
//                 </span>
//               </button>


//               {isSubMenuOpen && (
//                 <ul className="bg-gray-100 border border-orange-300 rounded-md transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top right-2 -mt-6 min-w-32 z-30">
//                   <li className="rounded-md px-1 py-1 whitespace-nowrap hover:bg-gray-200">
//                     <Link href="/hotel">
//                       <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
//                         <span className="pr-1 flex-1 text-black font-semibold">Hotel Details</span>
//                       </button>
//                     </Link>
//                   </li>
//                   <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
//                     <Link href="/greeting">
//                       <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
//                         <span className="pr-1 flex-1  text-black font-semibold">Greeting Master</span>
//                       </button>
//                     </Link>
//                   </li>
//                 </ul>
//               )}
//             </div>
//             {/* Bill Setting Dropdown */}
//             <div className="relative group inline-block mt-3 ">
//               <button
//                 className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black"
//                 onClick={() => toggleDropdown("Master")}>

//                 <span className="pr-1 font-semibold flex-1 ml-1 ">Masters</span>
//                 <span>
//                   <svg
//                     className={`fill-current h-4 w-4 transform ${isMasterDropdownOpen ? '-rotate-90' : '' // Rotate arrow based on dropdown state
//                       } transition duration-150 ease-in-out`}
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
//                   </svg>
//                 </span>
//               </button>
//               <div>
//                 <ul
//                   className={`bg-gray-100 border border-orange-300 rounded-md transform scale-${isMasterDropdownOpen ? '100' : '0' // Scale dropdown based on state
//                     } absolute transition duration-150 ease-in-out origin-top -mt-8 w-44 right-2 z-30 ml-5 max-h-80 custom-scrollbars overflow-y-auto`}
//                 >
//                   <div className="relative group inline-block mt-2">
//                     <button
//                       className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black "
//                       onClick={opentableMasterDropdown}
//                     >
//                       <span>
//                         <svg
//                           className={`fill-current h-4 w-4 transform ${isTableMasterDropdownOpen ? 'rotate-360' : 'group-hover:-rotate-180'
//                             } transition duration-150 ease-in-out`}
//                           xmlns="http://www.w3.org/2000/svg"
//                           viewBox="0 0 20 20"
//                         >
//                           <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
//                         </svg>
//                       </span>
//                       <span className="pr-1 font-semibold flex-0 pl-1">Table Master</span>


//                     </button>

//                     <ul
//                       className={`scale-${isTableMasterDropdownOpen ? '100' : '0'
//                         } bg-gray-200 border border-orange-300 rounded-md transform scale-100 absolute transition duration-150 ease-in-out origin-top-right min-w-32 mr-50 mt-2 right-0 z-30`}
//                     >
//                       <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
//                         <Link href="/section">
//                           <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
//                             <span className="pr-1 flex-1 text-black font-semibold">Sections</span>
//                           </button>
//                         </Link>
//                       </li>
//                       <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
//                         <Link href="/tables">
//                           <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
//                             <span className="pr-1 flex-1 text-black font-semibold">Tables</span>
//                           </button>
//                         </Link>
//                       </li>

//                     </ul>
//                   </div>


//                   <div className="relative group inline-block mt-2">
//                     <button
//                       className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black"
//                       onClick={openMenuDropdown}
//                     >
//                       <span>
//                         <svg
//                           className={`fill-current h-4 w-4 transform ${isMenuDropdownOpen ? 'rotate-360' : 'group-hover:-rotate-180'
//                             } transition duration-150 ease-in-out`}
//                           xmlns="http://www.w3.org/2000/svg"
//                           viewBox="0 0 20 20"
//                         >
//                           <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
//                         </svg>
//                       </span>
//                       <span className="pr-1 font-semibold flex-0 border-t whitespace-nowrap pl-1">Menu Master</span>

//                     </button>

//                     <ul
//                       className={`scale-${isMenuDropdownOpen ? '100' : '0'
//                         } bg-gray-200 border border-orange-300 rounded-md transform scale-100 absolute transition duration-150 ease-in-out origin-top-right min-w-32 mr-46 ml-4 mt-3  z-30`}
//                     >
//                       <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
//                         <Link href="/main">
//                           <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
//                             <span className="pr-1 flex-1 text-black font-semibold">Menu List </span>
//                           </button>
//                         </Link>
//                       </li>
//                       <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
//                         <Link href="/menu">
//                           <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
//                             <span className="pr-1 flex-1 text-black font-semibold">Sub-Menu List </span>
//                           </button>
//                         </Link>
//                       </li>
//                       <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
//                         <Link href="/group">
//                           <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
//                             <span className="pr-1 flex-1 text-black font-semibold">Group Menus</span>
//                           </button>
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>


//                   <div className="relative group inline-block mt-2">
//                     <button
//                       className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black"
//                       onClick={openBarMenuDropdown}
//                     >
//                       <span>
//                         <svg
//                           className={`fill-current h-4 w-4 transform ${isBarMenuDropdownOpen ? 'rotate-360' : 'group-hover:-rotate-180'
//                             } transition duration-150 ease-in-out`}
//                           xmlns="http://www.w3.org/2000/svg"
//                           viewBox="0 0 20 20"
//                         >
//                           <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
//                         </svg>
//                       </span>
//                       <span className="pr-1 font-semibold flex-0 border-t whitespace-nowrap pl-1">Bar Master</span>

//                     </button>

//                     <ul
//                       className={`scale-${isBarMenuDropdownOpen ? '100' : '0'
//                         } bg-gray-200 border border-orange-300 rounded-md transform scale-100 absolute transition duration-150 ease-in-out origin-top-right min-w-32 mr-46 ml-4 mt-3  z-30`}
//                     >
//                       <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
//                         <Link href="/barMenu">
//                           <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
//                             <span className="pr-1 flex-1 text-black font-semibold">Liquor List </span>
//                           </button>
//                         </Link>
//                       </li>

//                       <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
//                         <Link href="/barGroup">
//                           <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
//                             <span className="pr-1 flex-1 text-black font-semibold">Group Bar</span>
//                           </button>
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>






//                   <div className="relative group inline-block mt-2">
//                     <button
//                       className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black"
//                       onClick={openGstDropdown}
//                     >
//                       <span>
//                         <svg
//                           className={`fill-current h-4 w-4 transform ${isGstDropdownOpen ? 'rotate-360' : 'group-hover:-rotate-180'
//                             } transition duration-150 ease-in-out`}
//                           xmlns="http://www.w3.org/2000/svg"
//                           viewBox="0 0 20 20"
//                         >
//                           <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
//                         </svg>
//                       </span>
//                       <span className="pr-1 font-semibold flex-0 border-t pl-1">GST Master</span>

//                     </button>

//                     <ul
//                       className={`bg-gray-200 border border-orange-300 rounded-md transform scale-${isGstDropdownOpen ? '100' : '0'
//                         } absolute transition duration-150 ease-in-out origin-top-right min-w-34 mr-46 ml-4 mt-2 z-30`}
//                     >
//                       <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
//                         <Link href="/gstForm">
//                           <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
//                             <span className="pr-1 flex-1 text-black font-semibold">GST Purchase</span>
//                           </button>
//                         </Link>
//                       </li>
//                       <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
//                         <Link href="/gst">
//                           <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
//                             <span className="pr-1 flex-1 text-black font-semibold">GST Order</span>
//                           </button>
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>





//                   <div className="relative group inline-block mt-2">
//                     <button
//                       className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black"
//                       onClick={openVatDropdown}
//                     >
//                       <span>
//                         <svg
//                           className={`fill-current h-4 w-4 transform ${isVatDropdownOpen ? 'rotate-360' : 'group-hover:-rotate-180'
//                             } transition duration-150 ease-in-out`}
//                           xmlns="http://www.w3.org/2000/svg"
//                           viewBox="0 0 20 20"
//                         >
//                           <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
//                         </svg>
//                       </span>
//                       <span className="pr-1 font-semibold flex-0 border-t pl-1">VAT Master</span>

//                     </button>

//                     <ul
//                       className={`bg-gray-200 border border-orange-300 rounded-md transform scale-${isVatDropdownOpen ? '100' : '0'
//                         } absolute transition duration-150 ease-in-out origin-top-right min-w-34 mr-46 ml-4 mt-2 z-30`}
//                     >
//                       <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
//                         <Link href="/vat">
//                           <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
//                             <span className="pr-1 flex-1 text-black font-semibold">VAT Order</span>
//                           </button>
//                         </Link>
//                       </li>
//                       <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
//                         <Link href="/purchaseVAT">
//                           <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
//                             <span className="pr-1 flex-1 text-black font-semibold">VAT Purchase</span>
//                           </button>
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>


//                   <div className="relative group inline-block mt-2">
//                     <button
//                       className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black"
//                       onClick={openItemMasterDropdown}
//                     >
//                       <span>
//                         <svg
//                           className={`fill-current h-4 w-4 transform ${isItemMasterDropdownOpen ? 'rotate-360' : 'group-hover:-rotate-180'
//                             } transition duration-150 ease-in-out`}
//                           xmlns="http://www.w3.org/2000/svg"
//                           viewBox="0 0 20 20"
//                         >
//                           <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
//                         </svg>
//                       </span>
//                       <span className="pr-1 font-semibold flex-0 border-t pl-1">Item Master</span>

//                     </button>

//                     <ul
//                       className={`bg-gray-200 border border-orange-300 rounded-md transform scale-${isItemMasterDropdownOpen ? '100' : '0'
//                         } absolute transition duration-150 ease-in-out origin-top-right min-w-32 mr-46 z-30 mt-2 ml-4`}
//                     >
//                       <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
//                         <Link href="/unit">
//                           <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
//                             <span className="pr-1 flex-1 text-black font-semibold">Unit Master</span>
//                           </button>
//                         </Link>
//                       </li>
//                       <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
//                         <Link href="/itemForm">
//                           <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
//                             <span className="pr-1 flex-1 text-black font-semibold">Item Master</span>
//                           </button>
//                         </Link>
//                       </li>
//                       <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
//                         <Link href="/taste">
//                           <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
//                             <span className="pr-1 flex-1 text-black font-semibold">Taste Master</span>
//                           </button>
//                         </Link>
//                       </li>

//                     </ul>
//                   </div>

//                   <div className="relative group inline-block mt-2">
//                     <button
//                       className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black"
//                       onClick={openVendorMasterDropdown}
//                     >
//                       <span>
//                         <svg
//                           className={`fill-current h-4 w-4 transform ${isVendorMasterDropdownOpen ? 'rotate-360' : 'group-hover:-rotate-180'
//                             } transition duration-150 ease-in-out`}
//                           xmlns="http://www.w3.org/2000/svg"
//                           viewBox="0 0 20 20"
//                         >
//                           <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
//                         </svg>
//                       </span>
//                       <span className="pr-1 font-semibold flex-0 border-t pl-1">Vendor Master</span>

//                     </button>

//                     <ul
//                       className={`bg-gray-200 border border-orange-300 rounded-md transform scale-${isVendorMasterDropdownOpen ? '100' : '0'
//                         } absolute transition duration-150 ease-in-out origin-top-right min-w-32 mr-46 mt-2 z-30 ml-2`}
//                     >
//                       <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
//                         <Link href="/supplier">
//                           <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
//                             <span className="pr-1 flex-1 text-black font-semibold">Vendor</span>
//                           </button>
//                         </Link>
//                       </li>
//                       <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
//                         <Link href="/supplierPayment">
//                           <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
//                             <span className="pr-1 flex-1 text-black font-semibold">Vendor Payment</span>
//                           </button>
//                         </Link>
//                       </li>

//                     </ul>
//                   </div>
//                   <div className="relative group inline-block">
//                     <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
//                       <Link href="/acForm">
//                         <button className="outline-none focus:outline-none px-2 py-1 rounded-md flex items-center text-black border-t">
//                           <span className="pr-1 flex-1 text-black font-semibold">Ac Master Order</span>

//                         </button>
//                       </Link>
//                     </li>
//                   </div>
//                   <div className="relative group inline-block">
//                     <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
//                       <Link href="/waiter">
//                         <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
//                           <span className="pr-1 flex-1 text-black font-semibold">Waiter Master</span>
//                         </button>
//                       </Link>
//                     </li>
//                   </div>
//                   <div className="relative group inline-block">
//                     <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
//                       <Link href="/bankName">
//                         <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
//                           <span className="pr-1 flex-1 text-black font-semibold">BankName Master</span>
//                         </button>
//                       </Link>
//                     </li>
//                   </div>
//                   <div className="relative group inline-block">
//                     <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
//                       <Link href="/expense">
//                         <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
//                           <span className="pr-1 flex-1 text-black font-semibold">Expense Master</span>

//                         </button>
//                       </Link>
//                     </li>
//                   </div>
//                   <div className="relative group inline-block">
//                     <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
//                       <Link href="/customerPayment">
//                         <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
//                           <span className="pr-1 flex-1 text-black font-semibold">Customer Master</span>

//                         </button>
//                       </Link>
//                     </li>
//                   </div>
//                 </ul>
//               </div>
//             </div>

//             {/*Material Entry sublist  */}

//             <div className="relative group inline-block mt-3">
//               <button
//                 className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black"
//                 onClick={() => toggleDropdown("List")}>

//                 <span className="pr-1 font-semibold flex-0">Material Entry</span>
//                 <span>
//                   <svg
//                     className={`fill-current h-4 w-4 transform transition duration-150 ease-in-out ${isOpen ? '-rotate-90' : ''
//                       }`}
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
//                   </svg>
//                 </span>
//               </button>
//               {isOpen && (
//                 <ul className="bg-gray-100 border border-orange-300 rounded-md transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top right-2 -mt-6 min-w-32 z-30">
//                   <li className="rounded-md px-4 py-1 whitespace-nowrap">
//                     <Link href="/purchase">
//                       <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
//                         <span className="pr-1 flex-1 text-black font-semibold">Order Purchase </span>
//                       </button>
//                     </Link>
//                   </li>
//                   <li className="rounded-md px-4 py-1 whitespace-nowrap">
//                     <Link href="/barPurchase">
//                       <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
//                         <span className="pr-1 flex-1 text-black font-semibold">Bar Purchase </span>
//                       </button>
//                     </Link>
//                   </li>
//                   <li className="rounded-md px-4 py-1 whitespace-nowrap">
//                     <Link href="/stockOut">
//                       <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
//                         <span className="pr-1 flex-1 text-black font-semibold">Stockoutward </span>
//                       </button>
//                     </Link>
//                   </li>
//                 </ul>
//               )}
//             </div>
//             {/* Expenses sublist */}
//             <div className="relative group inline-block mt-3 mb-6">
//               <button
//                 className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black"
//                 onClick={() => toggleDropdown("Expenses")}>

//                 <span className="pr-1 font-semibold flex-0">Expenses</span>
//                 <span>
//                   <svg
//                     className={`fill-current h-4 w-4 transform transition duration-150 ease-in-out ${isListOpen ? '-rotate-90' : ''
//                       }`}
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
//                   </svg>
//                 </span>
//               </button>

//               {isListOpen && (
//                 <ul className="bg-gray-100 border border-orange-300 rounded-md transform scale-100 absolute transition duration-150 ease-in-out origin-top right-2 -mt-6 min-w-32 z-30">
//                   <li className="rounded-md px-1 py-1 whitespace-nowrap hover:bg-gray-200">
//                     <Link href="/expensesForm">
//                       <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
//                         <span className="pr-1 flex-1 text-black font-semibold">Expense</span>
//                       </button>
//                     </Link>
//                   </li>
//                 </ul>
//               )}
//             </div>
//           </div>
//         )}{" "}


//         <div className="hidden md:block  ">
//           <div className="flex items-center h-16  text-white pr-14 md:pr-14 justify-end font-sans">
//             <div className="relative group inline-block">
//               <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-white">
//                 <FontAwesomeIcon icon={faBarsProgress} size="lg" style={{ color: "#ffff", }} />

//                 <span className="pr-1 font-semibold flex-1 ml-1">Info</span>
//                 <span>
//                   <svg
//                     className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
//                   </svg>
//                 </span>
//               </button>

//               <ul className="bg-gray-100 border border-orange-300 rounded-md transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32 ">
//                 <li className="rounded-md px-1 py-1 whitespace-nowrap hover:bg-gray-200 ">
//                   <Link href="/hotel">
//                     <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
//                       <span className="pr-1 flex-1 text-black font-semibold">Hotel Details</span>
//                     </button>
//                   </Link>
//                 </li>
//                 <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
//                   <Link href="/greeting">
//                     <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
//                       <span className="pr-1 flex-1  text-black font-semibold">Greeting Master</span>
//                     </button>
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div className="relative group inline-block">
//               <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-white">
//                 <FontAwesomeIcon icon={faCubes} size="lg" style={{ color: "#ffff", }} />
//                 <span className="pr-1 font-semibold flex-1 ml-1">Masters</span>
//                 <span>
//                   <svg
//                     className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
//                   </svg>
//                 </span>
//               </button>

//               <ul className="bg-gray-100 border border-orange-300 rounded-md transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32 ">

//                 <div className="relative group inline-block mt-2">
//                   <button
//                     className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black "
//                     onClick={opentableMasterDropdown}
//                   >
//                     <span>
//                       <svg
//                         className={`fill-current h-4 w-4 transform ${isTableMasterDropdownOpen ? 'rotate-90' : 'group-hover:-rotate-180'
//                           } transition duration-150 ease-in-out`}
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 20 20"
//                       >
//                         <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
//                       </svg>
//                     </span>
//                     <span className="pr-1 font-semibold flex-0 pl-1">Table Master</span>


//                   </button>

//                   <ul
//                     className={`bg-gray-100 border border-orange-300 rounded-md transform scale-${isTableMasterDropdownOpen ? '100' : '0'
//                       } absolute transition duration-150 ease-in-out origin-top-right min-w-32 mr-32 right-0`}
//                   >
//                     <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
//                       <Link href="/section">
//                         <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
//                           <span className="pr-1 flex-1 text-black font-semibold">Sections</span>
//                         </button>
//                       </Link>
//                     </li>
//                     <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
//                       <Link href="/tables">
//                         <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
//                           <span className="pr-1 flex-1 text-black font-semibold">Tables</span>
//                         </button>
//                       </Link>
//                     </li>

//                   </ul>
//                 </div>



//                 <div className="relative group inline-block mt-2">
//                   <button
//                     className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black"
//                     onClick={openMenuDropdown}
//                   >
//                     <span>
//                       <svg
//                         className={`fill-current h-4 w-4 transform ${isMenuDropdownOpen ? 'rotate-90' : 'group-hover:-rotate-180'
//                           } transition duration-150 ease-in-out`}
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 20 20"
//                       >
//                         <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
//                       </svg>
//                     </span>
//                     <span className="pr-1 font-semibold flex-0 border-t whitespace-nowrap pl-1">Menu Master</span>

//                   </button>

//                   <ul
//                     className={`bg-gray-100 border border-orange-300 rounded-md transform scale-${isMenuDropdownOpen ? '100' : '0'
//                       } absolute transition duration-150 ease-in-out origin-top-right min-w-32 mr-40 right-0`}
//                   >
//                     <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
//                       <Link href="/main">
//                         <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
//                           <span className="pr-1 flex-1 text-black font-semibold">Menu List </span>
//                         </button>
//                       </Link>
//                     </li>
//                     <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
//                       <Link href="/menu">
//                         <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
//                           <span className="pr-1 flex-1 text-black font-semibold">Sub-Menu List </span>
//                         </button>
//                       </Link>
//                     </li>
//                     <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
//                       <Link href="/group">
//                         <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
//                           <span className="pr-1 flex-1 text-black font-semibold">Group Menus</span>
//                         </button>
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>


//                 <div className="relative group inline-block mt-2">
//                   <button
//                     className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black"
//                     onClick={openBarMenuDropdown}
//                   >
//                     <span>
//                       <svg
//                         className={`fill-current h-4 w-4 transform ${isBarMenuDropdownOpen ? 'rotate-360' : 'group-hover:-rotate-180'
//                           } transition duration-150 ease-in-out`}
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 20 20"
//                       >
//                         <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
//                       </svg>
//                     </span>
//                     <span className="pr-1 font-semibold flex-0 border-t whitespace-nowrap pl-1">Bar Master</span>

//                   </button>

//                   <ul
//                     className={`bg-gray-100 border border-orange-300 rounded-md transform scale-${isBarMenuDropdownOpen ? '100' : '0'
//                       } absolute transition duration-150 ease-in-out origin-top-right min-w-32 mr-40 right-0`}
//                   >
//                     <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
//                       <Link href="/barMenu">
//                         <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
//                           <span className="pr-1 flex-1 text-black font-semibold">Liquor List </span>
//                         </button>
//                       </Link>
//                     </li>

//                     <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
//                       <Link href="/liquorCategory">
//                         <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
//                           <span className="pr-1 flex-1 text-black font-semibold">Liquor Category </span>
//                         </button>
//                       </Link>
//                     </li>

//                     <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
//                       <Link href="/barGroup">
//                         <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
//                           <span className="pr-1 flex-1 text-black font-semibold">Group Bar</span>
//                         </button>
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>


//                 <div className="relative group inline-block mt-2">
//                   <button
//                     className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black"
//                     onClick={openGstDropdown}
//                   >
//                     <span>
//                       <svg
//                         className={`fill-current h-4 w-4 transform ${isGstDropdownOpen ? 'rotate-90' : 'group-hover:-rotate-180'
//                           } transition duration-150 ease-in-out`}
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 20 20"
//                       >
//                         <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
//                       </svg>
//                     </span>
//                     <span className="pr-1 font-semibold flex-0 border-t pl-1">GST Master</span>

//                   </button>

//                   <ul
//                     className={`bg-gray-100 border border-orange-300 rounded-md transform scale-${isGstDropdownOpen ? '100' : '0'
//                       } absolute transition duration-150 ease-in-out origin-top-right min-w-34 mr-40 right-0`}
//                   >
//                     <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
//                       <Link href="/gstForm">
//                         <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
//                           <span className="pr-1 flex-1 text-black font-semibold">GST Purchase</span>
//                         </button>
//                       </Link>
//                     </li>
//                     <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
//                       <Link href="/gst">
//                         <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
//                           <span className="pr-1 flex-1 text-black font-semibold">GST Order</span>
//                         </button>
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>



//                 <div className="relative group inline-block mt-2">
//                   <button
//                     className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black"
//                     onClick={openVatDropdown}
//                   >
//                     <span>
//                       <svg
//                         className={`fill-current h-4 w-4 transform ${isVatDropdownOpen ? 'rotate-90' : 'group-hover:-rotate-180'
//                           } transition duration-150 ease-in-out`}
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 20 20"
//                       >
//                         <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
//                       </svg>
//                     </span>
//                     <span className="pr-1 font-semibold flex-0 border-t pl-1">VAT Master</span>
//                   </button>


//                   <ul
//                     className={`bg-gray-100 border border-orange-300 rounded-md transform scale-${isVatDropdownOpen ? '100' : '0'
//                       } absolute transition duration-150 ease-in-out origin-top-right min-w-34 mr-40 right-0`}
//                   >
//                     {/* <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
//                       <Link href="/gstForm">
//                         <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
//                           <span className="pr-1 flex-1 text-black font-semibold">VAT Purchase</span>
//                         </button>
//                       </Link>
//                     </li> */}
//                     <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
//                       <Link href="/vat">
//                         <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
//                           <span className="pr-1 flex-1 text-black font-semibold">VAT Order</span>
//                         </button>
//                       </Link>
//                     </li>
//                     <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
//                       <Link href="/purchaseVAT">
//                         <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
//                           <span className="pr-1 flex-1 text-black font-semibold">VAT Purchase</span>
//                         </button>
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>



//                 <div className="relative group inline-block mt-2">
//                   <button
//                     className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black"
//                     onClick={openItemMasterDropdown}
//                   >
//                     <span>
//                       <svg
//                         className={`fill-current h-4 w-4 transform ${isItemMasterDropdownOpen ? 'rotate-90' : 'group-hover:-rotate-180'
//                           } transition duration-150 ease-in-out`}
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 20 20"
//                       >
//                         <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
//                       </svg>
//                     </span>
//                     <span className="pr-1 font-semibold flex-0 border-t pl-1">Item Master</span>

//                   </button>

//                   <ul
//                     className={`bg-gray-100 border border-orange-300 rounded-md transform scale-${isItemMasterDropdownOpen ? '100' : '0'
//                       } absolute transition duration-150 ease-in-out origin-top-right min-w-32 mr-36 right-0`}
//                   >
//                     <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
//                       <Link href="/unit">
//                         <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
//                           <span className="pr-1 flex-1 text-black font-semibold">Unit Master</span>
//                         </button>
//                       </Link>
//                     </li>
//                     <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
//                       <Link href="/itemForm">
//                         <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
//                           <span className="pr-1 flex-1 text-black font-semibold">Item Master</span>
//                         </button>
//                       </Link>
//                     </li>
//                     <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
//                       <Link href="/taste">
//                         <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
//                           <span className="pr-1 flex-1 text-black font-semibold">Taste Master</span>
//                         </button>
//                       </Link>
//                     </li>

//                   </ul>
//                 </div>

//                 <div className="relative group inline-block mt-2">
//                   <button
//                     className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black"
//                     onClick={openVendorMasterDropdown}
//                   >
//                     <span>
//                       <svg
//                         className={`fill-current h-4 w-4 transform ${isVendorMasterDropdownOpen ? 'rotate-90' : 'group-hover:-rotate-180'
//                           } transition duration-150 ease-in-out`}
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 20 20"
//                       >
//                         <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
//                       </svg>
//                     </span>
//                     <span className="pr-1 font-semibold flex-0 border-t pl-1">Vendor Master</span>

//                   </button>

//                   <ul
//                     className={`bg-gray-100 border border-orange-300 rounded-md transform scale-${isVendorMasterDropdownOpen ? '100' : '0'
//                       } absolute transition duration-150 ease-in-out origin-top-right min-w-32 mr-36 right-0`}
//                   >
//                     <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
//                       <Link href="/supplier">
//                         <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
//                           <span className="pr-1 flex-1 text-black font-semibold">Vendor</span>
//                         </button>
//                       </Link>
//                     </li>
//                     <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
//                       <Link href="/supplierPayment">
//                         <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
//                           <span className="pr-1 flex-1 text-black font-semibold">Vendor Payment</span>
//                         </button>
//                       </Link>
//                     </li>

//                   </ul>
//                 </div>
//                 <div className="relative group inline-block">
//                   <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
//                     <Link href="/acForm">
//                       <button className="outline-none focus:outline-none px-2 py-1 rounded-md flex items-center text-black border-t">
//                         <span className="pr-1 flex-1 text-black font-semibold">Ac Master Order</span>

//                       </button>
//                     </Link>
//                   </li>
//                 </div>
//                 <div className="relative group inline-block">
//                   <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
//                     <Link href="/waiter">
//                       <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
//                         <span className="pr-1 flex-1 text-black font-semibold">Waiter Master</span>
//                       </button>
//                     </Link>
//                   </li>
//                 </div>
//                 <div className="relative group inline-block">
//                   <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
//                     <Link href="/bankName">
//                       <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
//                         <span className="pr-1 flex-1 text-black font-semibold">BankName Master</span>
//                       </button>
//                     </Link>
//                   </li>
//                 </div>
//                 <div className="relative group inline-block">
//                   <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
//                     <Link href="/expense">
//                       <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
//                         <span className="pr-1 flex-1 text-black font-semibold">Expense Master</span>

//                       </button>
//                     </Link>
//                   </li>
//                 </div>
//                 <div className="relative group inline-block">
//                   <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
//                     <Link href="/customerPayment">
//                       <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
//                         <span className="pr-1 flex-1 text-black font-semibold">Customer Master</span>

//                       </button>
//                     </Link>
//                   </li>
//                 </div>
//               </ul>
//             </div>



//             <div className="relative group inline-block">
//               <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center  text-white">
//                 <FontAwesomeIcon icon={faPaste} size="lg" style={{ color: "#ffff" }} />

//                 <span className="pr-1 font-semibold flex-1 ml-1 ">Material Entry</span>
//                 <span>
//                   <svg
//                     className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
//                   </svg>
//                 </span>
//               </button>

//               <ul className="bg-gray-100 border border-orange-300 w-40 rounded-md transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32">
//                 <li className="rounded-md px-3 py-1 hover:bg-gray-200">
//                   <Link href="/purchase">
//                     <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
//                       <span className="pr-1 flex-1 text-black font-semibold">Purchase</span>
//                     </button>
//                   </Link>
//                 </li>
//                 <li className="rounded-md px-3 py-1 hover:bg-gray-200">
//                   <Link href="/barPurchase">
//                     <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
//                       <span className="pr-1 flex-1 text-black font-semibold">Bar Purchase </span>
//                     </button>
//                   </Link>
//                 </li>
//                 <li className="rounded-md relative px-3 py-1 hover:bg-gray-200">
//                   <Link href="/stockOut">
//                     <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
//                       <span className="pr-1 flex-1 text-black font-semibold">Stockoutward</span>
//                     </button>
//                   </Link>
//                 </li>
//               </ul>
//             </div>

//             <div className="relative group inline-block">
//               <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-white">
//                 <FontAwesomeIcon icon={faReceipt} size="lg" style={{ color: "#ffff", }} />
//                 <span className="pr-1 font-semibold flex-1 ml-1">Expenses</span>
//                 <span>
//                   <svg
//                     className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
//                   </svg>
//                 </span>
//               </button>

//               <ul className="bg-gray-100 border border-orange-300 rounded-md transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32 ">
//                 <li className="rounded-md px-4 py-1 hover:bg-gray-200 whitespace-nowrap">
//                   <Link href="/expensesForm">
//                     <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
//                       <span className="pr-1 flex-1 text-black font-semibold">Expense </span>
//                     </button>
//                   </Link>
//                 </li>
//               </ul>
//             </div>

//             {/* <div className="relative group inline-block">
//               <button
//                 className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-white"
//                 onClick={handleButtonClick}
//               >
//                 <FontAwesomeIcon icon={faFileLines} size="lg" style={{ color: "#ffff", }} />
//                 <span className="pr-1 font-semibold flex-1 ml-1">Reports</span>
//               </button>
//             </div> */}
//           </div>
//         </div>
//         <div className="relative mr-6">
//           <div className="relative">
//             <FontAwesomeIcon
//               icon={faBell}
//               onClick={openModal}
//               className="cursor-pointer text-xl text-white"
//             />
//             {itemCount > 0 && (
//               <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
//                 {itemCount}
//               </span>
//             )}
//           </div>


//           {isModalOpen && (
//             <div
//               className="fixed inset-0 flex items-center justify-center z-50"
//               style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
//               onClick={closeModal}
//             >
//               <div
//                 className="modal-container bg-white w-72 md:w-96 p-2 md:p-6 rounded shadow-lg"
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <button
//                   type="button"
//                   className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
//                   onClick={closeModal}
//                 >
//                   ×
//                 </button>
//                 {/* <div className="p-2 text-center text-sm md:text-base">
//         <h3 className="mb-5 text-lg font-semibold text-gray-800 dark:text-gray-400">
//           Low Stock Items 
//         </h3>
//         <ul>
//           {Array.isArray(items) && items.length > 0 ? (
//             items.map((item, index) => (
//               <li key={index} className="text-black">{item} </li>
//             ))
//           ) : (
//             <li>No items found</li>
//           )}
//         </ul>
//         <button
//           type="button"
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
//           onClick={closeModal}
//         >
//           Close
//         </button>
//       </div> */}

//                 <div className="p-2 text-center text-sm md:text-base">
//                   <h3 className="mb-5 text-lg font-semibold text-gray-800 dark:text-gray-400">
//                     Low Stock Items
//                   </h3>
//                   <ul>
//                     {Array.isArray(items) && items.length > 0 ? (
//                       items.map((item, index) => (
//                         <li key={index} className="text-black">
//                           {item.itemType === 'Item' ? (
//                             <span>{item.name} (Stock: {item.stockQty})</span>
//                           ) : (
//                             <span>
//                               {/* {item.liquorBrand} - {item.menuName} (Stock: {item.stockQty}) */}
//                               {item.menuName} - (Stock: {item.stockQty})
//                             </span>
//                           )}
//                         </li>
//                       ))
//                     ) : (
//                       <li>No items found</li>
//                     )}
//                   </ul>
//                   <button
//                     type="button"
//                     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
//                     onClick={closeModal}
//                   >
//                     Close
//                   </button>
//                 </div>

//               </div>
//             </div>
//           )}

//         </div>

//         <div className="">
//           <FontAwesomeIcon
//             icon={faHouse}
//             onClick={home}
//             className="cursor-pointer text-xl text-white"
//           />
//         </div>
//       </div>

//     </div>

//   );
// };

// export default Navbar;







"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faFileLines, faPaste, faCubes, faBell, faTimes, faTableCellsLarge, faBarsProgress, faReceipt } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import * as XLSX from "xlsx"; // Import xlsx package


const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTableMasterDropdownOpen, setIsTableMasterDropdownOpen] = useState(false); //1//
  const [isMenuDropdownOpen, setIsMenuDropdownOpen] = useState(false);  //2//
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [isBarMenuDropdownOpen, setIsBarMenuDropdownOpen] = useState(false);  //2//
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemCount, setItemCount] = useState(0); // State for item count
  const [isGstDropdownOpen, setIsGstDropdownOpen] = useState(false);  //3//
  const [isVatDropdownOpen, setIsVatDropdownOpen] = useState(false);  //3//
  const [showAll, setShowAll] = useState(false);
  const itemsToShow = showAll ? items : items.slice(0, 9); // Adjust the number 5 to the number of items you want to show initially
  const [isItemMasterDropdownOpen, setIsItemMasterDropdownOpen] = useState(false);
  const [isVendorMasterDropdownOpen, setIsVendorMasterDropdownOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isMasterDropdownOpen, setIsMasterDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isListOpen, setIsListOpen] = useState(false);
  const dropdownRef = useRef(null);

  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("EmployeeAuthToken");
    if (token) {
      const decodedToken = jwtDecode(token);
      setUserRole(decodedToken.role);
    }
  }, []);

  useEffect(() => {
    if (!isModalOpen) {
      setShowAll(false); // Reset showAll state when modal is closed
    }
  }, [isModalOpen]);

  useEffect(() => {
    // Function to handle clicks outside of the dropdown list
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        // Click occurred outside of the dropdown, so close it
        setIsMasterDropdownOpen(false);
      }
    };

    // Add event listener to handle clicks outside of the dropdown list
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      // Clean up event listener when component unmounts
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const exportToExcelhotel = () => {

    // Filtered items for the Excel export
   const itemsToShow = items.filter((item) => item.itemType === "Item");

   if (itemsToShow.length > 0) {
     const data = itemsToShow.map((item) => ({
       Name: item.name,
       "Stock Quantity": item.stockQty,
     }));

     // Create a worksheet
     const worksheet = XLSX.utils.json_to_sheet(data);
     // Create a workbook
     const workbook = XLSX.utils.book_new();
     // Append the worksheet to the workbook
     XLSX.utils.book_append_sheet(workbook, worksheet, "Items");

     // Export the workbook to Excel file
     XLSX.writeFile(workbook, "low_stockhotel.xlsx");
   } else {
     alert("No items available to export!");
   }
 };

 // export to excel bar

 const exportToExcelbar = () => {

 // Filtered items to show
 const itemsToShow = items.filter((item) => item.itemType !== "Item");

 if (itemsToShow.length > 0) {
   const data = itemsToShow.map((item) => ({
     "Menu Name": item.menuName,
     "Stock Quantity": item.stockQty,
   }));

   // Create a worksheet
   const worksheet = XLSX.utils.json_to_sheet(data);
   // Create a workbook
   const workbook = XLSX.utils.book_new();
   // Append the worksheet to the workbook
   XLSX.utils.book_append_sheet(workbook, worksheet, "BarItems");

   // Export the workbook to an Excel file
   XLSX.writeFile(workbook, "low_stockbar.xlsx");
 } else {
   alert("No bar items available to export!");
 }
 };

  const toggleDropdown = (dropdownName) => {
    switch (dropdownName) {
      case "Master": //master
        setIsMasterDropdownOpen(!isMasterDropdownOpen);
        setIsListOpen(false); // Close the "Expenses" dropdown
        setIsSubMenuOpen(false); // Close the submenu dropdown
        break;

      case "SubMenu":  //info
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
    setIsBarMenuDropdownOpen(false);
    setIsGstDropdownOpen(false);
    setIsVatDropdownOpen(false);
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
    setIsVatDropdownOpen(false);
    setIsTableMasterDropdownOpen(false);
    setIsVendorMasterDropdownOpen(false);
    setIsItemMasterDropdownOpen(false);
    setIsBarMenuDropdownOpen(false);



  };

  const openBarMenuDropdown = () => {
    setIsBarMenuDropdownOpen(!isBarMenuDropdownOpen);
    setIsGstDropdownOpen(false);
    setIsVatDropdownOpen(false);
    setIsTableMasterDropdownOpen(false);
    setIsVendorMasterDropdownOpen(false);
    setIsItemMasterDropdownOpen(false);
    setIsMenuDropdownOpen(false);


  };

  const closePurchaseDropdown = () => {
    setIsMenuDropdownOpen(false);
    setIsBarMenuDropdownOpen(false);
  };

  const openGstDropdown = () => {
    setIsGstDropdownOpen(!isGstDropdownOpen);
    setIsMenuDropdownOpen(false);
    setIsTableMasterDropdownOpen(false);
    setIsVendorMasterDropdownOpen(false);
    setIsItemMasterDropdownOpen(false);
    setIsVatDropdownOpen(false);
    setIsBarMenuDropdownOpen(false);



  };

  const openVatDropdown = () => {
    setIsVatDropdownOpen(!isVatDropdownOpen);
    setIsMenuDropdownOpen(false);
    setIsTableMasterDropdownOpen(false);
    setIsVendorMasterDropdownOpen(false);
    setIsItemMasterDropdownOpen(false);
    setIsGstDropdownOpen(false);
    setIsBarMenuDropdownOpen(false);



  };


  const openItemMasterDropdown = () => {
    setIsItemMasterDropdownOpen(!isItemMasterDropdownOpen);
    setIsMenuDropdownOpen(false);
    setIsBarMenuDropdownOpen(false);
    setIsGstDropdownOpen(false);
    setIsVatDropdownOpen(false);
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
    setIsVatDropdownOpen(false);
    setIsTableMasterDropdownOpen(false);
    setIsItemMasterDropdownOpen(false);

  };

  const closeVendorMasterDropdown = () => {
    setIsVendorMasterDropdownOpen(false);
  };

  const closeExpensesDropdown = () => {
    setIsGstDropdownOpen(false);
    setIsVatDropdownOpen(false);

  };

  const home = () => {
    router.push("/dashboard");
  };

  // Fetch items when component mounts
  
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('http://103.159.85.246:6001/api/item/items/equal-low-stock');
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        console.log('Fetched items:', data); // Debug: log the fetched data
        setItems(data);
        setItemCount(data.length); // Update the item count based on fetched items
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []); // Empty dependency array ensures this runs once when component mounts


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };



  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isTableMasterDropdownOpen ||
        isMenuDropdownOpen ||
        isBarMenuDropdownOpen ||
        isGstDropdownOpen ||
        isVatDropdownOpen ||
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
  }, [isTableMasterDropdownOpen, isMenuDropdownOpen, isBarMenuDropdownOpen, isGstDropdownOpen, isVatDropdownOpen, isItemMasterDropdownOpen, isVendorMasterDropdownOpen]);


  return (
    <div className=" fixed top-0 w-full z-20" ref={dropdownRef}>
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
                onClick={() => toggleDropdown("SubMenu")}>
                <span className="pr-1 font-semibold flex-1 ml-1">Info</span>
                <span>
                  <svg
                    className={`fill-current h-4 w-4 transform ${isSubMenuOpen ? '-rotate-90' : 'rotate-0'
                      } transition duration-150 ease-in-out`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </button>


              {isSubMenuOpen && (
                <ul className="bg-gray-100 border border-orange-300 rounded-md transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top right-2 -mt-6 min-w-32 z-30">
                  <li className="rounded-md px-1 py-1 whitespace-nowrap hover:bg-gray-200">
                    <Link href="/hotel">
                      <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
                        <span className="pr-1 flex-1 text-black font-semibold">Hotel Details</span>
                      </button>
                    </Link>
                  </li>
                  <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
                    <Link href="/greeting">
                      <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
                        <span className="pr-1 flex-1  text-black font-semibold">Greeting Master</span>
                      </button>
                    </Link>
                  </li>
                  <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
                    <Link href="/setting">
                      <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
                        <span className="pr-1 flex-1  text-black font-semibold">Setting</span>
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
                onClick={() => toggleDropdown("Master")}>

                <span className="pr-1 font-semibold flex-1 ml-1 ">Masters</span>
                <span>
                  <svg
                    className={`fill-current h-4 w-4 transform ${isMasterDropdownOpen ? '-rotate-90' : '' // Rotate arrow based on dropdown state
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
                  className={`bg-gray-100 border border-orange-300 rounded-md transform scale-${isMasterDropdownOpen ? '100' : '0' // Scale dropdown based on state
                    } absolute transition duration-150 ease-in-out origin-top -mt-8 w-44 right-2 z-30 ml-5 max-h-80 custom-scrollbars overflow-y-auto`}
                >
                  <div className="relative group inline-block mt-2">
                    <button
                      className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black "
                      onClick={opentableMasterDropdown}
                    >
                      <span>
                        <svg
                          className={`fill-current h-4 w-4 transform ${isTableMasterDropdownOpen ? 'rotate-360' : 'group-hover:-rotate-180'
                            } transition duration-150 ease-in-out`}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </span>
                      <span className="pr-1 font-semibold flex-0 pl-1">Table Master</span>


                    </button>

                    <ul
                      className={`scale-${isTableMasterDropdownOpen ? '100' : '0'
                        } bg-gray-200 border border-orange-300 rounded-md transform scale-100 absolute transition duration-150 ease-in-out origin-top-right min-w-32 mr-50 mt-2 right-0 z-30`}
                    >
                      <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
                        <Link href="/section">
                          <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
                            <span className="pr-1 flex-1 text-black font-semibold">Sections</span>
                          </button>
                        </Link>
                      </li>
                      <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
                        <Link href="/tables">
                          <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
                            <span className="pr-1 flex-1 text-black font-semibold">Tables</span>
                          </button>
                        </Link>
                      </li>

                    </ul>
                  </div>


                  <div className="relative group inline-block mt-2">
                    <button
                      className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black"
                      onClick={openMenuDropdown}
                    >
                      <span>
                        <svg
                          className={`fill-current h-4 w-4 transform ${isMenuDropdownOpen ? 'rotate-360' : 'group-hover:-rotate-180'
                            } transition duration-150 ease-in-out`}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </span>
                      <span className="pr-1 font-semibold flex-0 border-t whitespace-nowrap pl-1">Menu Master</span>

                    </button>

                    <ul
                      className={`scale-${isMenuDropdownOpen ? '100' : '0'
                        } bg-gray-200 border border-orange-300 rounded-md transform scale-100 absolute transition duration-150 ease-in-out origin-top-right min-w-32 mr-46 ml-4 mt-3  z-30`}
                    >
                      <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
                        <Link href="/main">
                          <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
                            <span className="pr-1 flex-1 text-black font-semibold">Menu List </span>
                          </button>
                        </Link>
                      </li>
                      <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
                        <Link href="/menu">
                          <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
                            <span className="pr-1 flex-1 text-black font-semibold">Sub-Menu List </span>
                          </button>
                        </Link>
                      </li>
                      <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
                        <Link href="/group">
                          <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
                            <span className="pr-1 flex-1 text-black font-semibold">Group Menus</span>
                          </button>
                        </Link>
                      </li>
                    </ul>
                  </div>


                  <div className="relative group inline-block mt-2">
                    <button
                      className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black"
                      onClick={openBarMenuDropdown}
                    >
                      <span>
                        <svg
                          className={`fill-current h-4 w-4 transform ${isBarMenuDropdownOpen ? 'rotate-360' : 'group-hover:-rotate-180'
                            } transition duration-150 ease-in-out`}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </span>
                      <span className="pr-1 font-semibold flex-0 border-t whitespace-nowrap pl-1">Bar Master</span>

                    </button>

                    <ul
                      className={`scale-${isBarMenuDropdownOpen ? '100' : '0'
                        } bg-gray-200 border border-orange-300 rounded-md transform scale-100 absolute transition duration-150 ease-in-out origin-top-right min-w-32 mr-46 ml-4 mt-3 z-30`}
                    >
                      <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
                        <Link href="/barMenu">
                          <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
                            <span className="pr-1 flex-1 text-black font-semibold">Bar List </span>
                          </button>
                        </Link>
                      </li>

                      <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
                        <Link href="/barGroup">
                          <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
                            <span className="pr-1 flex-1 text-black font-semibold">Group Bar</span>
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
                          className={`fill-current h-4 w-4 transform ${isGstDropdownOpen ? 'rotate-360' : 'group-hover:-rotate-180'
                            } transition duration-150 ease-in-out`}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </span>
                      <span className="pr-1 font-semibold flex-0 border-t pl-1">GST Master</span>

                    </button>

                    <ul
                      className={`bg-gray-200 border border-orange-300 rounded-md transform scale-${isGstDropdownOpen ? '100' : '0'
                        } absolute transition duration-150 ease-in-out origin-top-right min-w-34 mr-46 ml-4 mt-2 z-30`}
                    >
                      <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
                        <Link href="/gstForm">
                          <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
                            <span className="pr-1 flex-1 text-black font-semibold">GST Purchase</span>
                          </button>
                        </Link>
                      </li>
                      <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
                        <Link href="/gst">
                          <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
                            <span className="pr-1 flex-1 text-black font-semibold">GST Order</span>
                          </button>
                        </Link>
                      </li>
                    </ul>
                  </div>





                  <div className="relative group inline-block mt-2">
                    <button
                      className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black"
                      onClick={openVatDropdown}
                    >
                      <span>
                        <svg
                          className={`fill-current h-4 w-4 transform ${isVatDropdownOpen ? 'rotate-360' : 'group-hover:-rotate-180'
                            } transition duration-150 ease-in-out`}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </span>
                      <span className="pr-1 font-semibold flex-0 border-t pl-1">VAT Master</span>

                    </button>

                    <ul
                      className={`bg-gray-200 border border-orange-300 rounded-md transform scale-${isVatDropdownOpen ? '100' : '0'
                        } absolute transition duration-150 ease-in-out origin-top-right min-w-34 mr-46 ml-4 mt-2 z-30`}
                    >
                      <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
                        <Link href="/vat">
                          <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
                            <span className="pr-1 flex-1 text-black font-semibold">VAT (Sell)</span>
                          </button>
                        </Link>
                      </li>
                      <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
                        <Link href="/purchaseVAT">
                          <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
                            <span className="pr-1 flex-1 text-black font-semibold">VAT (Purchase)</span>
                          </button>
                        </Link>
                      </li>
                    </ul>
                  </div>


                  <div className="relative group inline-block mt-2">
                    <button
                      className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black"
                      onClick={openItemMasterDropdown}
                    >
                      <span>
                        <svg
                          className={`fill-current h-4 w-4 transform ${isItemMasterDropdownOpen ? 'rotate-360' : 'group-hover:-rotate-180'
                            } transition duration-150 ease-in-out`}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </span>
                      <span className="pr-1 font-semibold flex-0 border-t pl-1">Item Master</span>

                    </button>

                    <ul
                      className={`bg-gray-200 border border-orange-300 rounded-md transform scale-${isItemMasterDropdownOpen ? '100' : '0'
                        } absolute transition duration-150 ease-in-out origin-top-right min-w-32 mr-46 z-30 mt-2 ml-4`}
                    >
                      <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
                        <Link href="/unit">
                          <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
                            <span className="pr-1 flex-1 text-black font-semibold">Unit Master</span>
                          </button>
                        </Link>
                      </li>
                      <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
                        <Link href="/itemForm">
                          <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
                            <span className="pr-1 flex-1 text-black font-semibold">Item Master</span>
                          </button>
                        </Link>
                      </li>
                      <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
                        <Link href="/taste">
                          <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
                            <span className="pr-1 flex-1 text-black font-semibold">Taste Master</span>
                          </button>
                        </Link>
                      </li>

                    </ul>
                  </div>

                  <div className="relative group inline-block mt-2">
                    <button
                      className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black"
                      onClick={openVendorMasterDropdown}
                    >
                      <span>
                        <svg
                          className={`fill-current h-4 w-4 transform ${isVendorMasterDropdownOpen ? 'rotate-360' : 'group-hover:-rotate-180'
                            } transition duration-150 ease-in-out`}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </span>
                      <span className="pr-1 font-semibold flex-0 border-t pl-1">Vendor Master</span>

                    </button>

                    <ul
                      className={`bg-gray-200 border border-orange-300 rounded-md transform scale-${isVendorMasterDropdownOpen ? '100' : '0'
                        } absolute transition duration-150 ease-in-out origin-top-right min-w-32 mr-46 mt-2 z-30 ml-2`}
                    >
                      <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
                        <Link href="/supplier">
                          <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
                            <span className="pr-1 flex-1 text-black font-semibold">Vendor</span>
                          </button>
                        </Link>
                      </li>
                      <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
                        <Link href="/supplierPayment">
                          <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
                            <span className="pr-1 flex-1 text-black font-semibold">Vendor Payment</span>
                          </button>
                        </Link>
                      </li>

                    </ul>
                  </div>
                  <div className="relative group inline-block">
                    <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
                      <Link href="/acForm">
                        <button className="outline-none focus:outline-none px-2 py-1 rounded-md flex items-center text-black border-t">
                          <span className="pr-1 flex-1 text-black font-semibold">AC Master</span>

                        </button>
                      </Link>
                    </li>
                  </div>
                  <div className="relative group inline-block">
                    <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
                      <Link href="/waiter">
                        <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
                          <span className="pr-1 flex-1 text-black font-semibold">Waiter Master</span>
                        </button>
                      </Link>
                    </li>
                  </div>
                  <div className="relative group inline-block">
                    <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
                      <Link href="/bankName">
                        <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
                          <span className="pr-1 flex-1 text-black font-semibold">BankName Master</span>
                        </button>
                      </Link>
                    </li>
                  </div>
                  <div className="relative group inline-block">
                    <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
                      <Link href="/expense">
                        <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
                          <span className="pr-1 flex-1 text-black font-semibold">Expense Master</span>

                        </button>
                      </Link>
                    </li>
                  </div>
                  <div className="relative group inline-block">
                    <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
                      <Link href="/customerPayment">
                        <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
                          <span className="pr-1 flex-1 text-black font-semibold">Customer Master</span>

                        </button>
                      </Link>
                    </li>
                  </div>
                </ul>
              </div>
            </div>

            {/*Material Entry sublist  */}

            <div className="relative group inline-block mt-3">
              <button
                className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black"
                onClick={() => toggleDropdown("List")}>

                <span className="pr-1 font-semibold flex-0">Material Entry</span>
                <span>
                  <svg
                    className={`fill-current h-4 w-4 transform transition duration-150 ease-in-out ${isOpen ? '-rotate-90' : ''
                      }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </button>
              {isOpen && (
                <ul className="bg-gray-100 border border-orange-300 rounded-md transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top right-2 -mt-6 min-w-32 z-30">
                  <li className="rounded-md px-4 py-1 whitespace-nowrap">
                    <Link href="/purchase">
                      <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
                        <span className="pr-1 flex-1 text-black font-semibold">Order Purchase </span>
                      </button>
                    </Link>
                  </li>

                  {userRole === "adminBar" && (
                    <li className="rounded-md px-4 py-1 whitespace-nowrap">
                      <Link href="/barPurchase">
                        <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
                          <span className="pr-1 flex-1 text-black font-semibold">Bar Purchase </span>
                        </button>
                      </Link>
                    </li>
                  )}
                  <li className="rounded-md px-4 py-1 whitespace-nowrap">
                    <Link href="/stockOut">
                      <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
                        <span className="pr-1 flex-1 text-black font-semibold">Stockoutward </span>
                      </button>
                    </Link>
                  </li>
                </ul>
              )}
            </div>
            {/* Expenses sublist */}
            <div className="relative group inline-block mt-3 mb-6">
              <button
                className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black"
                onClick={() => toggleDropdown("Expenses")}>

                <span className="pr-1 font-semibold flex-0">Expenses</span>
                <span>
                  <svg
                    className={`fill-current h-4 w-4 transform transition duration-150 ease-in-out ${isListOpen ? '-rotate-90' : ''
                      }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </button>

              {isListOpen && (
                <ul className="bg-gray-100 border border-orange-300 rounded-md transform scale-100 absolute transition duration-150 ease-in-out origin-top right-2 -mt-6 min-w-32 z-30">
                  <li className="rounded-md px-1 py-1 whitespace-nowrap hover:bg-gray-200">
                    <Link href="/expensesForm">
                      <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
                        <span className="pr-1 flex-1 text-black font-semibold">Expense</span>
                      </button>
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
        )}{" "}


        {/* Desktop View */}

        <div className="hidden md:block  ">
          <div className="flex items-center h-16  text-white pr-14 md:pr-14 justify-end font-sans">
            <div className="relative group inline-block">
              <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-white">
                <FontAwesomeIcon icon={faBarsProgress} size="lg" style={{ color: "#ffff", }} />

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
                  <Link href="/hotel">
                    <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
                      <span className="pr-1 flex-1 text-black font-semibold">Hotel Details</span>
                    </button>
                  </Link>
                </li>
                <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
                  <Link href="/greeting">
                    <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
                      <span className="pr-1 flex-1  text-black font-semibold">Greeting Master</span>
                    </button>
                  </Link>
                </li>
                <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
                  <Link href="/setting">
                    <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
                      <span className="pr-1 flex-1  text-black font-semibold">Setting</span>
                    </button>
                  </Link>
                </li>
              </ul>


            </div>
            <div className="relative group inline-block">
              <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-white">
                <FontAwesomeIcon icon={faCubes} size="lg" style={{ color: "#ffff", }} />
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

                <div className="relative group inline-block mt-2">
                  <button
                    className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black "
                    onClick={opentableMasterDropdown}
                  >
                    <span>
                      <svg
                        className={`fill-current h-4 w-4 transform ${isTableMasterDropdownOpen ? 'rotate-90' : 'group-hover:-rotate-180'
                          } transition duration-150 ease-in-out`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </span>
                    <span className="pr-1 font-semibold flex-0 pl-1">Table Master</span>


                  </button>

                  <ul
                    className={`bg-gray-100 border border-orange-300 rounded-md transform scale-${isTableMasterDropdownOpen ? '100' : '0'
                      } absolute transition duration-150 ease-in-out origin-top-right min-w-32 mr-36 right-0`}
                  >
                    <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
                      <Link href="/section">
                        <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
                          <span className="pr-1 flex-1 text-black font-semibold">Sections</span>
                        </button>
                      </Link>
                    </li>
                    <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
                      <Link href="/tables">
                        <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
                          <span className="pr-1 flex-1 text-black font-semibold">Tables</span>
                        </button>
                      </Link>
                    </li>
                  </ul>
                </div>



                <div className="relative group inline-block mt-2">
                  <button
                    className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black"
                    onClick={openMenuDropdown}
                  >
                    <span>
                      <svg
                        className={`fill-current h-4 w-4 transform ${isMenuDropdownOpen ? 'rotate-90' : 'group-hover:-rotate-180'
                          } transition duration-150 ease-in-out`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </span>
                    <span className="pr-1 font-semibold flex-0 border-t whitespace-nowrap pl-1">Menu Master</span>

                  </button>

                  <ul
                    className={`bg-gray-100 border border-orange-300 rounded-md transform scale-${isMenuDropdownOpen ? '100' : '0'
                      } absolute transition duration-150 ease-in-out origin-top-right min-w-32 mr-36 right-0`}
                  >
                    <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
                      <Link href="/main">
                        <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
                          <span className="pr-1 flex-1 text-black font-semibold">Menu List </span>
                        </button>
                      </Link>
                    </li>
                    <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
                      <Link href="/menu">
                        <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
                          <span className="pr-1 flex-1 text-black font-semibold">Sub-Menu List </span>
                        </button>
                      </Link>
                    </li>
                    <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
                      <Link href="/group">
                        <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
                          <span className="pr-1 flex-1 text-black font-semibold">Group Menus</span>
                        </button>
                      </Link>
                    </li>
                  </ul>
                </div>



                {userRole === "adminBar" && (
                  <div className="relative group inline-block mt-2">
                    <button
                      className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black"
                      onClick={openBarMenuDropdown}
                    >
                      <span>
                        <svg
                          className={`fill-current h-4 w-4 transform ${isBarMenuDropdownOpen ? "rotate-360" : "group-hover:-rotate-180"
                            } transition duration-150 ease-in-out`}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </span>
                      <span className="pr-1 font-semibold flex-0 border-t whitespace-nowrap pl-1">Bar Master</span>
                    </button>

                    <ul
                      className={`bg-gray-100 border border-orange-300 rounded-md transform scale-${isBarMenuDropdownOpen ? "100" : "0"
                        } absolute transition duration-150 ease-in-out origin-top-right min-w-32 mr-32 right-0`}
                    >
                      <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
                        <Link href="/liquorCategory">
                          <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
                            <span className="pr-1 flex-1 text-black font-semibold">Bar Category </span>
                          </button>
                        </Link>
                      </li>

                      <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
                        <Link href="/barMenu">
                          <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
                            <span className="pr-1 flex-1 text-black font-semibold">Bar List </span>
                          </button>
                        </Link>
                      </li>

                      <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
                        <Link href="/barGroup">
                          <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
                            <span className="pr-1 flex-1 text-black font-semibold">Bar Group</span>
                          </button>
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}




                <div className="relative group inline-block mt-2">
                  <button
                    className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black"
                    onClick={openGstDropdown}
                  >
                    <span>
                      <svg
                        className={`fill-current h-4 w-4 transform ${isGstDropdownOpen ? 'rotate-90' : 'group-hover:-rotate-180'
                          } transition duration-150 ease-in-out`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </span>
                    <span className="pr-1 font-semibold flex-0 border-t pl-1">GST Master</span>

                  </button>

                  <ul
                    className={`bg-gray-100 border border-orange-300 rounded-md transform scale-${isGstDropdownOpen ? '100' : '0'
                      } absolute transition duration-150 ease-in-out origin-top-right min-w-34 mr-32 right-0`}
                  >
                    <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
                      <Link href="/gstForm">
                        <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
                          <span className="pr-1 flex-1 text-black font-semibold">GST Purchase</span>
                        </button>
                      </Link>
                    </li>
                    <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
                      <Link href="/gst">
                        <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
                          <span className="pr-1 flex-1 text-black font-semibold">GST Order</span>
                        </button>
                      </Link>
                    </li>
                  </ul>
                </div>




                {userRole === "adminBar" && (

                  <div className="relative group inline-block mt-2">
                    <button
                      className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black"
                      onClick={openVatDropdown}
                    >
                      <span>
                        <svg
                          className={`fill-current h-4 w-4 transform ${isVatDropdownOpen ? 'rotate-90' : 'group-hover:-rotate-180'
                            } transition duration-150 ease-in-out`}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </span>
                      <span className="pr-1 font-semibold flex-0 border-t pl-1">VAT Master</span>
                    </button>


                    <ul
                      className={`bg-gray-100 border border-orange-300 rounded-md transform scale-${isVatDropdownOpen ? '100' : '0'
                        } absolute transition duration-150 ease-in-out origin-top-right min-w-34 mr-32 right-0`}
                    >
                      <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
                        <Link href="/vat">
                          <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
                            <span className="pr-1 flex-1 text-black font-semibold">VAT (Sell)</span>
                          </button>
                        </Link>
                      </li>
                      <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
                        <Link href="/purchaseVAT">
                          <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
                            <span className="pr-1 flex-1 text-black font-semibold">VAT (Purchase)</span>
                          </button>
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}



                <div className="relative group inline-block mt-2">
                  <button
                    className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black"
                    onClick={openItemMasterDropdown}
                  >
                    <span>
                      <svg
                        className={`fill-current h-4 w-4 transform ${isItemMasterDropdownOpen ? 'rotate-90' : 'group-hover:-rotate-180'
                          } transition duration-150 ease-in-out`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </span>
                    <span className="pr-1 font-semibold flex-0 border-t pl-1">Item Master</span>

                  </button>

                  <ul
                    className={`bg-gray-100 border border-orange-300 rounded-md transform scale-${isItemMasterDropdownOpen ? '100' : '0'
                      } absolute transition duration-150 ease-in-out origin-top-right min-w-32 mr-36 right-0`}
                  >
                    <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
                      <Link href="/unit">
                        <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
                          <span className="pr-1 flex-1 text-black font-semibold">Unit Master</span>
                        </button>
                      </Link>
                    </li>
                    <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
                      <Link href="/itemForm">
                        <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
                          <span className="pr-1 flex-1 text-black font-semibold">Item Master</span>
                        </button>
                      </Link>
                    </li>
                    <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
                      <Link href="/taste">
                        <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
                          <span className="pr-1 flex-1 text-black font-semibold">Taste Master</span>
                        </button>
                      </Link>
                    </li>

                  </ul>
                </div>

                <div className="relative group inline-block mt-2">
                  <button
                    className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black"
                    onClick={openVendorMasterDropdown}
                  >
                    <span>
                      <svg
                        className={`fill-current h-4 w-4 transform ${isVendorMasterDropdownOpen ? 'rotate-90' : 'group-hover:-rotate-180'
                          } transition duration-150 ease-in-out`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </span>
                    <span className="pr-1 font-semibold flex-0 border-t pl-1">Vendor Master</span>

                  </button>

                  <ul
                    className={`bg-gray-100 border border-orange-300 rounded-md transform scale-${isVendorMasterDropdownOpen ? '100' : '0'
                      } absolute transition duration-150 ease-in-out origin-top-right min-w-32 mr-36 right-0`}
                  >
                    <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
                      <Link href="/supplier">
                        <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
                          <span className="pr-1 flex-1 text-black font-semibold">Vendor</span>
                        </button>
                      </Link>
                    </li>
                    <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
                      <Link href="/supplierPayment">
                        <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
                          <span className="pr-1 flex-1 text-black font-semibold">Vendor Payment</span>
                        </button>
                      </Link>
                    </li>

                  </ul>
                </div>
                <div className="relative group inline-block">
                  <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap ml-1">
                    <Link href="/acForm">
                      <button className="outline-none focus:outline-none px-2 py-1 rounded-md flex items-center text-black border-t">
                        <span className="pr-1 flex-1 text-black font-semibold">AC Master</span>

                      </button>
                    </Link>
                  </li>
                </div>
                <div className="relative group inline-block">
                  <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
                    <Link href="/waiter">
                      <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
                        <span className="pr-1 flex-1 text-black font-semibold">Waiter Master</span>
                      </button>
                    </Link>
                  </li>
                </div>
                <div className="relative group inline-block">
                  <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
                    <Link href="/bankName">
                      <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
                        <span className="pr-1 flex-1 text-black font-semibold">BankName Master</span>
                      </button>
                    </Link>
                  </li>
                </div>
                <div className="relative group inline-block">
                  <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
                    <Link href="/expense">
                      <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
                        <span className="pr-1 flex-1 text-black font-semibold">Expense Master</span>

                      </button>
                    </Link>
                  </li>
                </div>
                <div className="relative group inline-block">
                  <li className="rounded-md px-1 py-1 hover:bg-gray-200 whitespace-nowrap">
                    <Link href="/customerPayment">
                      <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
                        <span className="pr-1 flex-1 text-black font-semibold">Customer Master</span>

                      </button>
                    </Link>
                  </li>
                </div>
              </ul>
            </div>



            <div className="relative group inline-block">
              <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center  text-white">
                <FontAwesomeIcon icon={faPaste} size="lg" style={{ color: "#ffff" }} />

                <span className="pr-1 font-semibold flex-1 ml-1 ">Material Entry</span>
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

              <ul className="bg-gray-100 border border-orange-300 w-44 rounded-md transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32">
                <li className="rounded-md px-3 py-1 hover:bg-gray-200">
                  <Link href="/purchase">
                    <button className="outline-none focus:outline-none px-1 py-1 rounded-md flex items-center text-black border-t">
                      <span className="pr-1 flex-1 text-black font-semibold whitespace-nowrap">Purchase (Resto)</span>
                    </button>
                  </Link>
                </li>

                {userRole === "adminBar" && (

                  <li className="rounded-md px-3 py-1 hover:bg-gray-200">
                    <Link href="/barPurchase">
                      <button className="outline-none focus:outline-none px-1 py-1 rounded-md flex items-center text-black border-t">
                        <span className="pr-1 flex-1 text-black font-semibold">Purchase (Bar)</span>
                      </button>
                    </Link>
                  </li>
                )}

                <li className="rounded-md relative px-3 py-1 hover:bg-gray-200">
                  <Link href="/stockOut">
                    <button className="outline-none focus:outline-none px-1 py-1 rounded-md flex items-center text-black border-t">
                      <span className="pr-1 flex-1 text-black font-semibold whitespace-nowrap">Stockoutward (Resto)</span>
                    </button>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="relative group inline-block">
              <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-white">
                <FontAwesomeIcon icon={faReceipt} size="lg" style={{ color: "#ffff", }} />
                <span className="pr-1 font-semibold flex-1 ml-1">Expenses</span>
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
                <li className="rounded-md px-4 py-1 hover:bg-gray-200 whitespace-nowrap">
                  <Link href="/expensesForm">
                    <button className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-black border-t">
                      <span className="pr-1 flex-1 text-black font-semibold">Expense </span>
                    </button>
                  </Link>
                </li>
              </ul>
            </div>

            {/* <div className="relative group inline-block">
              <button
                className="outline-none focus:outline-none px-3 py-1 rounded-md flex items-center text-white"
                onClick={handleButtonClick}
              >
                <FontAwesomeIcon icon={faFileLines} size="lg" style={{ color: "#ffff", }} />
                <span className="pr-1 font-semibold flex-1 ml-1">Reports</span>
              </button>
            </div> */}
          </div>
        </div>
        <div className="relative mr-6">
          <div className="relative">
            <FontAwesomeIcon
              icon={faBell}
              onClick={openModal}
              className="cursor-pointer text-xl text-white"
            />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-6 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                {itemCount}
              </span>
            )}
          </div>


          {isModalOpen && (
            <div
              className="fixed inset-0 flex items-start justify-end z-10 text-xs "
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', paddingTop: '3rem' }} // Adjust '2rem' as needed
              onClick={closeModal}
            >

              <div
                className="modal-container absolute bg-white w-96 md:w-auto p-2 md:p-6 h-96 md:h-4/5 custom-sidescrollbars rounded shadow-lg max-h-full overflow-y-auto"
                style={{ marginRight: '2rem' }} // Adjust '2rem' to shift left
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-2 text-center text-sm md:text-base">
                  <h3 className="mb-5 text-xl font-semibold text-gray-800 dark:text-gray-400">
                    Low Stock Items
                  </h3>
                  {/* Hotel Items */}
                  <h4 className="text-xl font-bold text-gray-700 dark:text-gray-300">Resto Items</h4>
                  <ul className="text-left font-sans text-sm">
                    {Array.isArray(items) && items.length > 0 ? (
                      itemsToShow.filter(item => item.itemType === 'Item').length > 0 ? (
                        itemsToShow.filter(item => item.itemType === 'Item').map((item, index) => (
                          <li key={index} className="flex justify-between text-black text-base font-sans p-0.5">
                            <span>{index + 1}. {item.name}</span>
                            <span className="text-red-500">QTY: {item.stockQty}</span>
                          </li>
                        ))
                      ) : (
                        <li>No hotel items found</li>
                      )
                    ) : (
                      <li>No items found</li>
                    )}
                  </ul>
                  <button
                    className="bg-blue-100 text-blue-600  text-sm px-3 py-1 rounded-full font-bold hover:bg-blue-200 focus:outline-none focus:shadow-outline-blue ml-5 mt-5"
                    onClick={exportToExcelhotel}
                  >
                    Export to Excel
                  </button>


                  {/* Bar Items */}
                  {userRole === "adminBar" && (

                    <h4 className="text-xl font-bold text-gray-700 dark:text-gray-300 mt-4">Bar Items</h4>)}


                  {userRole === "adminBar" && (
                    <ul className="text-left font-sans">
                      {Array.isArray(items) && items.length > 0 ? (
                        itemsToShow.filter(item => item.itemType !== 'Item').length > 0 ? (
                          itemsToShow.filter(item => item.itemType !== 'Item').map((item, index) => (
                            <li key={index} className="flex justify-between text-black text-base font-sans p-0.5">
                              <span>{index + 1}. {item.menuName}</span>
                              <span className="text-red-500">QTY: {item.stockQty}</span>
                            </li>
                          ))
                        ) : (
                          <li>No bar items found</li>
                        )
                      ) : (
                        <li>No items found</li>
                      )}
                      <button
                    className="bg-blue-100 text-blue-600  text-sm px-3 py-1 rounded-full font-bold hover:bg-blue-200 focus:outline-none focus:shadow-outline-blue ml-20 mt-5"
                    onClick={exportToExcelbar}
                  >
                    Export to Excel
                  </button>
                    </ul>
                  )}
                  
                  {items.length > 5 && !showAll && ( // Adjust the number 5 to the number of items you want to show initially
                    <button
                      type="button"
                      className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-32 rounded mt-4 text-sm"
                      onClick={() => setShowAll(true)}
                    >
                      See All
                    </button>
                  )}
                  {/* <button
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
              onClick={closeModal}
            >
              Close
            </button> */}
                </div>
              </div>
              <button
                onClick={closeModal}
                className="relative top-3 right-12 bg-red-100 text-red-600 hover:bg-red-200 p-2 py-1 px-2 rounded-full text-center"
              >
                <FontAwesomeIcon icon={faTimes} size="lg" />
              </button>
            </div>
          )}

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

export default Navbar;