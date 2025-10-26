import Footer from "../components/Footer";

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Main Content */}
      <div className="flex flex-1 items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row gap-6 p-6 sm:p-8 mx-auto ml-20">
            {children}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
