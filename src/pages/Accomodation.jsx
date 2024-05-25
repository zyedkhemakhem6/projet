import React from "react";
import DestinationItem from "../components/DestinationItem";
import cuba from "../assets/cuba.png";
import paris from "../assets/paris.png";
import japan from "../assets/japan.png";
import HeroImage from "../assets/hero.png";  

function Accomodation() {
  const destinations = [
    { name: "dar el jaw", image: cuba , price:100  ,description: "Explore the harmonious blend of ancient tradition and cutting-edge innovation in Japan, a land of stunning natural beauty and cultural depth.",date: "01/05/2024"},
    { name: "el jaw", image: paris, price:100  ,description: "Explore the harmonious blend of ancient tradition and cutting-edge innovation in Japan, a land of stunning natural beauty and cultural depth.",date: "01/05/2024"},
    { name: "jaw", image: japan, price:100  ,description: "Explore the harmonious blend of ancient tradition and cutting-edge innovation in Japan, a land of stunning natural beauty and cultural depth.",date: "01/05/2024" },
    { name: "Kyoto", image: japan, price:100   ,description: "Explore the harmonious blend of ancient tradition and cutting-edge innovation in Japan, a land of stunning natural beauty and cultural depth.",date: "01/05/2024"},
    { name: "Osaka", image: japan, price:100  ,description: "Explore the harmonious blend of ancient tradition and cutting-edge innovation in Japan, a land of stunning natural beauty and cultural depth.",date: "01/05/2024"},
    { name: "Tokyo", image: japan, price:100  ,description: "Explore the harmonious blend of ancient tradition and cutting-edge innovation in Japan, a land of stunning natural beauty and cultural depth." ,date: "01/05/2024"},
    { name: "Hokkaido", image: japan, price:100   ,description: "Explore the harmonious blend of ancient tradition and cutting-edge innovation in Japan, a land of stunning natural beauty and cultural depth.",date: "01/05/2024"},
    { name: "Okinawa", image: japan , price:100  ,description: "Explore the harmonious blend of ancient tradition and cutting-edge innovation in Japan, a land of stunning natural beauty and cultural depth.",date: "01/05/2024"},
  ];

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
          <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {destinations.map((destination, index) => (
              <DestinationItem key={index} name={destination.name} image={destination.image} price={destination.price} description={destination.description} date={destination.date}/>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Accomodation;
