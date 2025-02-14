"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#050709] p-6">
      <div className="bg-[#140C1C] text-center rounded-lg p-8 max-w-md w-full border border-[#27272A] shadow-lg">
        <h2 className="text-[#8750F7] text-4xl font-bold mb-4">404</h2>
        <p className="text-[#989BA4] text-lg mb-6">
          Sorry, the page you’re looking for doesn’t exist.
        </p>
        <p className="text-[#989BA4] mb-4">
          It seems like the URL is either incorrect or the page has been
          removed.
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-[#8750F7] hover:bg-[#733DD6] text-white text-xl rounded-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#8750F7] focus:ring-offset-2"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
}
