"use client"
import MainBreadcum from '@/components/Breadcum/MainBreadcum';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

const Checkout = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formFields, setFormFields] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        company: '',
        country: '',
        city: '',
        zipCode: '',
        address1: '',
        address2: '',
    });

    const handlePlaceOrder = () => {
        // Validate the form fields before proceeding
        if (Object.values(formFields).some(field => field === '')) {
            toast.error('Please fill all required fields');
            return; // Prevent order submission if fields are not filled
        }

        // Show the pulse animation and toast
        setIsSubmitting(true);

        // Show toast notification
        toast.success('Order placed successfully!');

        // Clear the cart from localStorage
        localStorage.removeItem('cart'); // This clears the cart in localStorage

        // Simulate page redirection after a brief delay (for the animation to play)
        setTimeout(() => {
            setIsSubmitting(false);
            // Redirect to the Thank You page using window.location.assign
            window.location.assign('/thankyou');
        }, 2000); // Adjust delay if needed
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormFields((prevFields) => ({
            ...prevFields,
            [name]: value,
        }));
    };

    return (
        <div>
            <MainBreadcum name='Checkout Page' pageName='Checkout Page' />
            <div className="p-8 max-md:p-1 py-20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Shipping and Billing Form */}
                    <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold mb-6">Shipping Address</h2>
                        <form
                            className="grid grid-cols-2 max-md:grid-cols-1 max-md:grid-rows-11 gap-4"
                            onSubmit={(e) => e.preventDefault()} // Prevent form default submission
                        >
                            <input
                                type="text"
                                placeholder="First name"
                                required
                                className="border p-2 rounded max-md:col-span-2"
                                name="firstName"
                                value={formFields.firstName}
                                onChange={handleInputChange}
                            />
                            <input
                                type="text"
                                placeholder="Last name"
                                required
                                className="border p-2 rounded max-md:col-span-2"
                                name="lastName"
                                value={formFields.lastName}
                                onChange={handleInputChange}
                            />
                            <input
                                type="email"
                                placeholder="Email address"
                                required
                                className="border p-2 rounded col-span-2 sm:col-span-1"
                                name="email"
                                value={formFields.email}
                                onChange={handleInputChange}
                            />
                            <input
                                type="tel"
                                placeholder="Phone number"
                                required
                                className="border p-2 rounded max-md:col-span-2"
                                name="phoneNumber"
                                value={formFields.phoneNumber}
                                onChange={handleInputChange}
                            />
                            <input
                                type="text"
                                placeholder="Company"
                                required
                                className="border p-2 rounded max-md:col-span-2"
                                name="company"
                                value={formFields.company}
                                onChange={handleInputChange}
                            />
                            <select
                                required
                                className="border p-2 rounded max-md:col-span-2"
                                name="country"
                                value={formFields.country}
                                onChange={handleInputChange}
                            >
                                <option value="">Choose country</option>
                                <option value="USA">USA</option>
                                <option value="Canada">Canada</option>
                                <option value="UK">UK</option>
                            </select>
                            <select
                                required
                                className="border p-2 rounded max-md:col-span-2"
                                name="city"
                                value={formFields.city}
                                onChange={handleInputChange}
                            >
                                <option value="">Choose city</option>
                                <option value="New York">New York</option>
                                <option value="Los Angeles">Los Angeles</option>
                                <option value="Chicago">Chicago</option>
                            </select>
                            <input
                                type="text"
                                placeholder="Zip code"
                                required
                                className="border p-2 rounded max-md:col-span-2"
                                name="zipCode"
                                value={formFields.zipCode}
                                onChange={handleInputChange}
                            />
                            <input
                                type="text"
                                placeholder="Address 1"
                                required
                                className="border p-2 rounded col-span-2"
                                name="address1"
                                value={formFields.address1}
                                onChange={handleInputChange}
                            />
                            <input
                                type="text"
                                placeholder="Address 2"
                                required
                                className="border p-2 rounded col-span-2"
                                name="address2"
                                value={formFields.address2}
                                onChange={handleInputChange}
                            />
                        </form>
                        <div className="mt-6">
                            <label className="flex flex-col ">
                                <h2 className='font-bold text-xl'>Billing Address</h2>
                                <div className="flex ">
                                    <input type="checkbox" className="mr-2" />
                                    Same as shipping address
                                </div>
                            </label>
                        </div>
                        <div className="flex justify-between items-center mt-6 max-sm:flex-col ">
                            <button className="bg-white w-[50%] max-sm:w-full h-[58px] text-black px-6 py-2 hover:bg-gray-500 border-2 border-gray-300">
                                <Link href={"/cart"}>&lt; Back to cart</Link>
                            </button>
                            <button
                                className={`bg-primary_color w-[50%] max-sm:w-full h-[58px] text-white px-6 py-2 max-sm:mt-5 hover:bg-primary_color ${isSubmitting ? 'animate-pulse' : ''}`}
                                onClick={handlePlaceOrder}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Processing...' : 'Proceed to shipping →'}
                            </button>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="space-y-4">
                            {[...Array(3)].map((_, index) => (
                                <div key={index} className="flex items-center justify-between border-b pb-4">
                                    <Image
                                        src="/assets/shop1.svg"
                                        alt="Chicken Tikka Kabab"
                                        className="w-16 h-16 rounded-lg"
                                        width={200}
                                        height={100}
                                    />
                                    <div className="flex-1 px-4">
                                        <h3 className="text-lg font-semibold">Chicken Tikka Kabab</h3>
                                        <p className="text-gray-500 text-sm">150 gm net</p>
                                    </div>
                                    <span className="text-gray-600">$50</span>
                                </div>
                            ))}
                        </div>
                        <div className="border-t pt-4 mt-4 space-y-2">
                            <div className="flex justify-between">
                                <span>Sub-total</span>
                                <span>$130</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Shipping</span>
                                <span>Free</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Discount</span>
                                <span>25%</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Tax</span>
                                <span>$54.76</span>
                            </div>
                        </div>
                        <div className="border-t pt-4 mt-4 flex justify-between text-xl font-bold">
                            <span>Total</span>
                            <span>$432.65</span>
                        </div>
                        <button
                            className={`w-full bg-primary_color text-black py-2 mt-6 rounded-lg hover:bg-primary_color h-[58px] ${isSubmitting ? 'animate-pulse' : ''}`}
                            onClick={handlePlaceOrder}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Processing...' : 'Place an order →'}
                        </button>
                    </div>
                </div>
            </div>

            {/* Toast Container for notifications */}
            <ToastContainer />
        </div>
    );
};

export default Checkout;
