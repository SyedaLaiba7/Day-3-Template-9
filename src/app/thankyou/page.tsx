import Link from "next/link";

const ThankYou = () => {
    return (
        <div className="flex justify-center items-center h-screen ">
            <div className="bg-white p-10 rounded-lg shadow-lg text-center max-w-lg w-full">
                <h1 className="text-4xl font-bold text-primary_color mb-4">Thank You for Your Order!</h1>
                <p className="text-lg text-gray-700 mb-6">Your order has been successfully placed. We appreciate your purchase and hope you enjoy your products!</p>
                <div className="relative">
                    <div className="absolute opacity-40 rounded-lg"></div>
                    <Link
                        href="/Shop"
                        className="relative inline-block text-black bg-primary_color hover:bg-primary_color-dark py-3 px-8 rounded-full text-xl transition duration-300"
                    >
                        Continue Shopping
                    </Link>
                </div>
                <p className="mt-4 text-gray-600 text-sm">Explore more products and enjoy exclusive deals!</p>
            </div>
        </div>
    );
};

export default ThankYou;
