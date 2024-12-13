/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const Journal = () => {
  const featuredArticles = [
    {
      id: 1,
      category: "Family Pregnancy",
      title: "Am I Ovulating? How to Spot the Signs",
      date: "May 15, 2021",
      time: "1 min",
      author: "John Doe",
      image:
        "https://flexiblog-medical.netlify.app/static/f13c542303e28afe8a0d8d5aed107c61/fc596/image.webp",
    },
    {
      id: 2,
      category: "News & Experts",
      title: "A Pandemic Nurse's Love Letter to New York",
      date: "June 02, 2020",
      time: "1 min",
      author: "John Doe",
      image:
        "https://flexiblog-medical.netlify.app/static/f13c542303e28afe8a0d8d5aed107c61/fc596/image.webp",
    },
  ];

  const recentArticles = [
    "Am I Ovulating? How to Spot the Signs",
    "A Pandemic Nurse's Love Letter to New York",
    "19 Tips for Fuller Healthier Hair",
    "Common Vitamins & Supplements You Should Take",
  ];

  const topStories = [
    {
      id: 1,
      category: "Family Pregnancy",
      title: "Dog Scooting: What It Means and What to Do",
      date: "April 16, 2020",
      time: "1 min",
      author: "John Doe",
      image: "story1.jpg",
    },
    {
      id: 2,
      category: "Family Pregnancy",
      title: "16 Foods Your Dog Should Never Eat",
      date: "April 16, 2020",
      time: "1 min",
      author: "John Doe",
      image: "story2.jpg",
    },
  ];

  return (
    <div className="journal-container container py-4">
      {/* Featured Section */}
      <div className="row mb-4">
        <div className="col-lg-8">
          <h4 className="mb-3">Featured this month</h4>
          <div
            id="featuredCarousel"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              {featuredArticles.map((article, index) => (
                <div
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  key={article.id}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="card h-100">
                      <img
                        className="card-img-top"
                        src={article.image}
                        alt={article.title}
                      />
                      <div className="card-body">
                        <small className="text-muted">{article.category}</small>
                        <h5 className="card-title mt-2">{article.title}</h5>
                        <p className="text-muted mb-0">
                          {article.date} • {article.time}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
            <a
              className="carousel-control-prev"
              href="#featuredCarousel"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#featuredCarousel"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>

        {/* Recently Published Section */}
        <div className="col-lg-4">
          <h4 className="mb-3">Recently Published</h4>
          {recentArticles.map((title, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="card mb-3">
                <div className="card-body p-3">
                  <p className="mb-0">{title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Top Stories and Sponsor Section */}
      <div className="row">
        <div className="col-lg-8">
          <h4 className="mb-3">Top Stories</h4>
          <div className="row">
            {topStories.map((story) => (
              <div className="col-md-6 mb-4" key={story.id}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="card h-100">
                    <img
                      className="card-img-top"
                      src={story.image}
                      alt={story.title}
                    />
                    <div className="card-body">
                      <small className="text-muted">{story.category}</small>
                      <h5 className="card-title mt-2">{story.title}</h5>
                      <p className="text-muted mb-0">
                        {story.date} • {story.time}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-lg-4">
          <h4 className="mb-3">Our Sponsor</h4>
          <div className="card text-center">
            <img className="card-img-top" src="sponsor.jpg" alt="Sponsor" />
            <div className="card-body">
              <p className="mb-0">Advertise with us</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journal;
