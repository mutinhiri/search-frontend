import { useState } from "react";
import SearchBar from "./SearchBar";

const Header = () => {
    const [page, setPage] = useState("home");
  
    return (
      <div className="min-h-screen bg-gray-500">
        {/* Header */}
        <header className="bg-white shadow p-4">
          <nav className="flex justify-between items-center max-w-5xl mx-auto">
            <h1 className="text-xl font-bold text-blue-600">Search</h1>
            <div className="space-x-4">
              <button
                onClick={() => setPage("home")}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  page === "home"
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-blue-100"
                }`}
              >
                Home
              </button>
              <button
                onClick={() => setPage("analytics")}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  page === "analytics"
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-blue-100"
                }`}
              >
                Analytics
              </button>
            </div>
          </nav>
        </header>
  
        {/* Page Content */}
        <main className="mx-auto">
          {page === "home" && <div><SearchBar/></div>}
          {page === "analytics" && <div>hello</div>}
        </main>
      </div>
    );
  };
  
  export default Header;