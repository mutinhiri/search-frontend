import React from 'react'
import { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");

    const handleSearch = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch(`http://localhost:3000/search?q=${encodeURIComponent(query)}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
    
          if (!response.ok) throw new Error("Search failed");
    
          const data = await response.json();
          setQuery('')
          {{data}}

        } catch (error) {
          console.error("Error during search:", error.message);
        }
    };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSearch}
        className="p-6 rounded-xl shadow-xl w-full max-w-md flex gap-2"
      >
        <input
          type="text"
          placeholder="Enter search query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
