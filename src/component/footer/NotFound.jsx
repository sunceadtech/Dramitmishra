import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-2 text-center">
      <img
        src="https://www.shutterstock.com/image-vector/male-doctor-smiling-selfconfidence-flat-600nw-2281709217.jpg"
        alt="Not Found"
        className="w-64 md:w-96 mb-6 object-cover rounded-sm"
      />
      <h1 className="text-4xl md:text-5xl font-bold text-purple-800 mb-4">
        Oops! Page not found.
      </h1>
      <p className="text-gray-600 text-lg md:text-xl mb-6 max-w-xl">
        The page you're looking for might have been removed or is temporarily
        unavailable. Let’s get you back to health!
      </p>
      <Link
        to="/"
        className="inline-flex items-center px-6 py-3 text-white bg-purple-700 hover:bg-purple-800 font-semibold rounded-lg transition"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Home
      </Link>
    </div>
  );
}
