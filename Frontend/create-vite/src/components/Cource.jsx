import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import { Link } from "react-router-dom";

function Cource() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch('/list.json')  // Fetch JSON from the public folder
      .then(response => response.json())
      .then(data => setList(data));
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="text-center">
          <h1 className="text-2xl font-semibold md:text-4xl">
            We're Delighted to have you <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-6">
            Books are, let's face it, better than everything else. If we played Cultural Fantasy Boxing League, and made books go fifteen rounds in the ring against the best that any other art form had to offer, then books would win pretty much every time.
          </p>
          <Link to="/">
            <button className="bg-pink-400 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Cource;
