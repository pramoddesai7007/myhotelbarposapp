'use client'

import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from '../components/Navbar';
import * as XLSX from 'xlsx'; // Import xlsx package

const KotReport = () => {
  // Initialize startDate and endDate with current date
  const currentDate = new Date().toISOString().split("T")[0];
  const [startDate, setStartDate] = useState(currentDate);
  const [endDate, setEndDate] = useState(currentDate);

  const [kotData, setKotData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const params = {};
        const response = await axios.get(`http://103.159.85.246:6001/api/kot/items${startDate && endDate
          ? `?startDate=${startDate}&endDate=${endDate}`
          : ''
          }`);
        console.log("Response data:", response.data); // Log response data
        setKotData(response.data.items); // Adjust to access the 'items' property of the response
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [startDate, endDate]);

  useEffect(() => {
    // Set both start and end dates using the getFormattedDate function
    const date = getFormattedDate();
    setStartDate(date);
    setEndDate(date);
  }, []);

  function getFormattedDate() {
    const now = new Date();
    const currentHour = now.getHours();

    // If the current hour is before 3 AM, use the previous day's date
    // Otherwise, use the current date
    if (currentHour < 3) {
      const prevDay = new Date(now);
      prevDay.setDate(prevDay.getDate() - 1);
      const year = prevDay.getFullYear();
      const month = (prevDay.getMonth() + 1).toString().padStart(2, '0');
      const day = prevDay.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}`;
    } else {
      const year = now.getFullYear();
      const month = (now.getMonth() + 1).toString().padStart(2, '0');
      const day = now.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}`;
    }
  }

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(dateString).toLocaleDateString("en-GB", options);
  };

  const startDateFormatted = formatDate(startDate);
  const endDateFormatted = formatDate(endDate);
  const dateRange =
    startDate && endDate
      ? `${startDateFormatted} - ${endDateFormatted}`
      : "(All Dates)";

  const startDates = formatDate(startDate);

  // Function to export selected date data to Excel
  const exportToExcel = () => {
    const filename = 'KOT_Report.xlsx';

    // Filter data based on selected start and end dates
    const filteredData = kotData.filter(item => {
      const formattedDate = formatDate(item.date);
      return formattedDate >= formatDate(startDate) && formattedDate <= formatDate(endDate);
    });

    // Format filtered data for Excel
    const formattedData = filteredData.map(item => [formatDate(item.date), item.itemName, item.totalQuantity]);

    // Create worksheet and workbook
    const ws = XLSX.utils.aoa_to_sheet([['Date', 'Menu Name', 'Quantity'], ...formattedData]);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "KOT_Report");

    // Download Excel file
    XLSX.writeFile(wb, filename);
  };

  const printReport = () => {
    // Filter kotData based on selected start and end dates
    const filteredData = kotData.filter(item => {
      const formattedDate = formatDate(item.date);
      return formattedDate >= formatDate(startDate) && formattedDate <= formatDate(endDate);
    });

    const printContent = filteredData.map((item) => ({
      date: formatDate(item.date),
      menuName: item.itemName,
      quantity: item.totalQuantity,
    }));


    const printableContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Report</title>
      <style>

      @page {
    size: 80(72.1)X 297 mm; /* Set the page size */
    margin: 2mm; /* Adjust the margin as needed */
  }
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      
      .report-header {
        margin-top: -11px;
        color: black;
        font-size: 10px;
        padding: 10px;
        text-align: center;
      }
      
      .date-range {
        font-size: 13px;
        margin: -4px 0;
        text-align: left;
      }
      
      .report-content {
        margin-top: 10px;
        width: 100%; /* Make the report content width 100% */
        overflow-x: auto; /* Allow horizontal scrolling if needed */
      }
      
      .table {
        width: 100%;
        border-collapse: collapse;
      }
      
      .table th, .table td {
        padding: 5px; /* Adjust padding as needed */
        font-size: 10px; /* Adjust font size as needed */
        text-align: center;
        border: 1px solid black;
        word-wrap: break-word; /* Allow content to wrap within cells */
        max-width: 100px; /* Limit maximum width of the cell */
        overflow: hidden;
      }
      
      .table .vertical-line {
        border-left: 1px solid black;
        border-right: 1px solid black;
      }
      
      .bg-gray-100 {
        border-bottom: 1px solid black;
        padding: 1px;
      }
      
      .label {
        font-weight: normal;
      }
      
      .value {
        font-weight: normal;
      }
    </style>
    </head>
    <body>
      <div class="report-header">
        KOT Report
      </div>
      <div class="date-range">
        Date Range: ${new Date(startDate).toLocaleDateString('en-GB')} - ${new Date(endDate).toLocaleDateString('en-GB')}
      </div>
      <div class="report-content">
        <table class="table">
          <thead>
            <tr class="bg-gray-100">
              <th class="label">Date</th>
              <th class="vertical-line label">Menu Name</th>
              <th class="vertical-line label">Quantity</th>
            </tr>
          </thead>
          <tbody>
            ${printContent
        .map(
          (item) => `
                  <tr class="bg-gray-100">
                    <td class="value">${item.date}</td>
                    <td class="vertical-line value">${item.menuName}</td>
                    <td class="vertical-line value">${item.quantity}</td>
                  </tr>
                `
        )
        .join('')}
          </tbody>
        </table>
      </div>
    </body>
    </html>
  `;

    const printWindow = window.open("", "blank");

    if (!printWindow) {
      alert("Please allow pop-ups to print the report.");
      return;
    }

    printWindow.document.write(printableContent);
    printWindow.document.close();
    printWindow.print();
    printWindow.close();
  };
  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-10 p-2 bg-white rounded-md shadow-md font-sans">
        <h1 className="text-xl font-bold mb-2">KOT Report</h1>
        <div className="mb-4 flex flex-wrap items-center">
          <label className="mr-2 text-gray-600">Start Date:</label>
          <input
            type="date"
            className="border rounded-md p-1 text-gray-700 text-sm mb-2"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <div>
          <label className="mx-2 text-gray-600">End Date:</label>
          <input
            type="date"
            className="border rounded-md text-gray-700 p-1 text-sm mb-2"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
          </div>

          <div className="flex flex-wrap justify-between">

            <button 
              className="bg-blue-100 text-blue-600 text-sm px-4 py-2 rounded-full font-bold hover:bg-blue-200 focus:outline-none focus:shadow-outline-blue mb-2 md:ml-2"
              onClick={exportToExcel}>Export to Excel</button>

            <button
              className="bg-gray-100 text-gray-600 text-sm px-4 py-2 rounded-full lg:ml-2 ml-2 font-bold hover:bg-gray-200 focus:outline-none focus:shadow-outline-gray mb-2"
              onClick={printReport}
            >
              Print
            </button>
          </div>
        </div>

        <div className="table-container overflow-x-auto overflow-y-auto text-sm">
          <table className="min-w-full bg-white border border-gray-300 text-left align-middle">
            <thead className="bg-gray-200">
              <tr className="text-sm bg-zinc-100 text-yellow-700 border">
                <th className="border border-gray-300 px-4 py-1">SR No</th>
                <th className="border border-gray-300 px-4 py-1">Date</th>
                <th className="border border-gray-300 px-4 py-1">Menu Name</th>
                <th className="border border-gray-300 px-4 py-1">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {kotData
                .sort((item1, item2) => item2.totalQuantity - item1.totalQuantity)
                .map((item, index) => {
                  const formattedDate = formatDate(item.date);
                  if (!startDate || !endDate || (formattedDate >= formatDate(startDate) && formattedDate <= formatDate(endDate))) {
                    return (
                      <tr key={index}>
                        <td className="border border-gray-300 px-4 py-1">{index + 1}</td>
                        <td className="border border-gray-300 px-4 py-1">{formattedDate}</td>
                        <td className="border border-gray-300 px-4 py-1">{item.itemName}</td>
                        <td className="border border-gray-300 px-4 py-1">{item.totalQuantity}</td>
                      </tr>
                    );
                  } else {
                    return null;
                  }
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default KotReport;