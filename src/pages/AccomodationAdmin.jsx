import React, { useState } from "react";
import cuba from "../assets/cuba.png";
import paris from "../assets/paris.png";
import japan from "../assets/japan.png";
import HeroImage from "../assets/hero.png";  
import Button from "../components/Button";

function AccomodationAdmin() {
  const [destinations, setDestinations] = useState([
    { name: "Cuba City", image: cuba, price: 100, description: "Beautiful city with rich culture and history.", date: "01/05/2024" },
    { name: "Paris", image: paris, price: 100, description: "The city of lights and love.", date: "01/05/2024" },
    { name: "Japan", image: japan, price: 100, description: "A perfect blend of tradition and modernity.", date: "01/05/2024" },
    { name: "Kyoto", image: japan, price: 100, description: "Famous for its classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines and traditional wooden houses.", date: "01/05/2024" },
    { name: "Osaka", image: japan, price: 100, description: "Known for its modern architecture, nightlife and hearty street food.", date: "01/05/2024" },
    { name: "Tokyo", image: japan, price: 100, description: "The bustling capital of Japan, known for its skyscrapers, shopping, and pop culture.", date: "01/05/2024" },
    { name: "Hokkaido", image: japan, price: 100, description: "Famous for its volcanoes, natural hot springs (onsen) and ski resorts.", date: "01/05/2024" },
    { name: "Okinawa", image: japan, price: 100, description: "Known for its tropical climate, beautiful beaches and coral reefs.", date: "01/05/2024" },
  ]);

  const handleDelete = (index) => {
    const newDestinations = [...destinations];
    newDestinations.splice(index, 1);
    setDestinations(newDestinations);
  };

  return (
    <>
      <section
        id="destinations"
        className="p-4 md:p-10 lg:p-16 bg-cover bg-center relative text-gray-900"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <div className="bg-white bg-opacity-95 backdrop-filter backdrop-blur-xl rounded-xl shadow-2xl p-6 md:p-12 transition-all duration-500 hover:shadow-lg">
          <h2 className="text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-10">
            Top Accomodation In The World
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {destinations.map((destination, index) => (
              <div key={index} className="text-center p-4 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition duration-300">
                <img src={destination.image} alt={destination.name} className="h-64 w-full object-cover rounded-md mb-4" />
                <h3 className="text-lg text-gray-800 font-semibold mb-2">{destination.name}</h3>
                <p className="text-gray-600 mb-4">Price: TND {destination.price}</p>
                <p className="text-gray-600">{destination.description}</p>
                <p className="text-gray-600">{destination.date}</p>
                <Button text="Discover More" link="#" />
                <button onClick={() => handleDelete(index)} className="mt-4 py-2 px-4 bg-red-600 text-white rounded hover:bg-red-700">
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default AccomodationAdmin;
