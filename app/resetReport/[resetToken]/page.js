'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useRouter } from 'next/navigation';



// ResetPassword component
const ResetReport = () => {
    // Get the resetToken from the URL params
    const resetToken = useParams().resetToken;
    console.log(resetToken);

    // State for new password and success/error messages
    const [newPassword, setNewPassword] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); 

    // Get the router object
    const router = useRouter();

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send a POST request to the /resetPassword endpoint with the correct resetToken
            const response = await axios.post(`http://103.159.85.246:6001/api/superAdmin/resetReport/${resetToken}`, {
                newPassword: newPassword,
            });

            // Check if the request was successful
            if (response.status === 200) {
                // Display a success message to the user
                setSuccessMessage('Password reset successful.');
                setErrorMessage('');
                router.push('/reportLogin');
            } else {
                // Handle other response statuses if needed
                console.error('Response status:', response.status);
                setErrorMessage('Something went wrong. Please try again later.');
                setSuccessMessage('');
            }
        } catch (error) {
            // Handle any errors that occur during the request
            console.error('Error resetting password:', error);
            setErrorMessage('An error occurred. Please try again later.');
            setSuccessMessage('');
        }
    };


    return (
        <div>
            <section className="bg-gray-50 dark:bg-gray-900 font-sans">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
                        <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-orange-600 md:text-2xl dark:text-white">
                            Reset Password
                        </h2>
                        <form onSubmit={handleSubmit} className="mt-4 space-y-4 lg:mt-5 md:space-y-5">
                            <div>
                                <label htmlFor="newPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
                                <input
                                    type="password"
                                    name="newPassword"
                                    id="newPassword"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Enter New Password"
                                    required
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-green-600 text-white font-bold py-2 px-4 w-full rounded-lg hover:bg-green-600"

                            >
                                Reset Password
                            </button>
                        </form>
                        {successMessage && <p className="mt-4 text-green-600">{successMessage}</p>}
                        {errorMessage && <p className="mt-4 text-red-600">{errorMessage}</p>}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ResetReport;