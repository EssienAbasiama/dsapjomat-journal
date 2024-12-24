/* eslint-disable no-unused-vars */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import image1 from "/src/assets/img1.jpg";
import image2 from "/src/assets/img2.jpg";
import image3 from "/src/assets/img3.jpg";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      description:
        "Holisticly empower leveraged ROI whereas effective web-readiness. Completely enable emerging meta-services with cross-platform web services.",
      imgSrc: image1,
      name: "Grenchen Pearce",
      company: "Boston Brothers co.",
    },
    {
      id: 2,
      description:
        "Quickly initiate inexpensive total linkage rather than extensible scenarios. Holisticly empower leveraged ROI whereas effective web-readiness.",
      imgSrc: { image2 },
      name: "Domeni Gesson",
      company: "Awesome Technology co.",
    },
    {
      id: 3,
      description:
        "Completely enable emerging meta-services with cross-platform web services. Quickly initiate inexpensive total linkage rather than extensible scenarios.",
      imgSrc: { image3 },
      name: "Dommini Albert",
      company: "Nesnal Design co.",
    },
  ];

  return (
    <section id="testimonial" className="testimonial section-padding">
      <div className="container">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="testimonial-swiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="testimonial-item">
                <div className="content">
                  <p className="description">{testimonial.description}</p>
                </div>
                <div className="img-thumb">
                  <img src={testimonial.imgSrc} alt={testimonial.name} />
                </div>
                <div className="info">
                  <h2>
                    <a href="#">{testimonial.name}</a>
                  </h2>
                  <h3>
                    <a href="#">{testimonial.company}</a>
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
