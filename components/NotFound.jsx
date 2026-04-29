import Link from "next/link.js";
import React from "react";

const NotFound = ({ slug }) => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center justify-center p-10">
        <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
        <p className="text-lg mb-6">
          The news article with slug "{slug}" was not found.
        </p>
        <Link
          href="/"
          className="px-4 py-2 bg-[#0b0d12] hover:bg-[#38a1c0] rounded-md border border-[#38a1c0] text-white"
        >
          Go Back to News
        </Link>
      </div>
    </>
  );
};

export default NotFound;
