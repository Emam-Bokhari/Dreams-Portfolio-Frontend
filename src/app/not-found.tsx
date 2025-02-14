"use client";

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
      </div>
    </div>
  );
}
