import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import Analytics from "./Analytics";

const Header = () => {
    const [page, setPage] = useState("home");
    const [searchData, setSearchData] = useState({});

    useEffect(() => {
        fetch('http://localhost:3000/analytics')
        .then((res) => res.json())
        .then((data) => setSearchData(data))
        .catch((err) => console.error("Error fetching search data:", err));
    }, []);
  
    return (
      <div className="min-h-screen bg-gray-500">
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
        <main className="mx-auto">
          {page === "home" && <div><SearchBar/></div>}
          {page === "analytics" && <div><Analytics results={searchData}/></div>}
        </main>
      </div>
    );
  };
  
  export default Header;