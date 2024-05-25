import React from "react";
import testimonial1 from "../assets/testimonial1.png";
import testimonial2 from "../assets/testimonial2.png";
import avatar from "../assets/avatar.png";

export default function Testimonial() {
  return (
    <section id="blog" className="mt-20 md:mt-5">
      <div className="title flex justify-center">
        <h1 className="text-center text-2xl md:text-xl w-1/3 md:w-4/5">What our Happy Customers Say About Us</h1>
      </div>
      <div className="testimonials flex gap-16 md:flex-col md:overflow-hidden">
        <div className="testimonial-image-one w-full">
          <img src={testimonial1} alt="testimonials" className="w-full" />
        </div>
        <div className="testimonial mt-16 shadow-lg p-16 flex flex-col gap-8 border-t-8 border-primary-color">
          <div className="title flex gap-4 justify-center items-center">
            <div className="image h-12">
              <img src={avatar} alt="avatar" className="h-full" />
            </div>
            <div className="info">
              <h3 className="text-lg">Kishan Sheth</h3>
              <span className="text-primary-color">Full Stack Developer</span>
            </div>
          </div>
          <p className="description text-base leading-6">
            Jetrips Hotel is an excellent choice for anybody for considering
            hosting their events there. Top level facilities and excellent staff
            make for a brilliant environment within which to operate. The hotel
            is meticulous in its planning.
          </p>
        </div>
        <div className="testimonial-image-two w-full">
          <img src={testimonial2} alt="testimonials" className="w-full" />
        </div>
      </div>
    </section>
  );
}
