import React from "react";
import { Card, Avatar, Badge } from "antd";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./NewsComponent.css"; // Add your custom styles
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  FaCalendarAlt,
  FaClock,
  FaChevronLeft,
  FaChevronRight,
  FaUniversity,
  FaUserTie,
  FaUsers,
  FaPrint,
  FaGlobe,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VolumeList from "../VolumeItem";

const { Meta } = Card;

const newsData = [
  {
    id: 1,
    title: "Police Arrested More Than 11000 People At Protests Across The US",
    description:
      "Markdown is a lightweight markup language with plain-text formatting syntax. Its design allows it to...",
    author: "Jane Smith",
    date: "2024-12-24",
    readingTime: "2 min",
    image: "https://via.placeholder.com/600x400",
    avatar: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    title:
      "A Cop Who Said Let's Start A Riot In An Instagram Post Has Been Fired",
    description:
      "Lorem markdownum transique nondum, Peliaeque at poterat exegit, urbis quo; tibi. Cursus mecum adit...",
    author: "John Doe",
    date: "2024-12-23",
    readingTime: "1 min",
    image: "https://via.placeholder.com/600x400",
    avatar: "https://via.placeholder.com/100",
  },
  {
    id: 3,
    title: "A Lot Of Celebrities Are Being Useless Right Now",
    description:
      "Lorem markdownum illic venturi instructa nobis Echidnae, cum quid magna fatebor. Levat placetque...",
    author: "Steve Grant",
    date: "2024-12-22",
    readingTime: "1 min",
    image: "https://via.placeholder.com/600x400",
    avatar: "https://via.placeholder.com/100",
  },
  {
    id: 4,
    title: "New Discovery In Space Technology",
    description:
      "Researchers announced groundbreaking advancements in space exploration technology...",
    author: "Emily Rose",
    date: "2024-12-20",
    readingTime: "3 min",
    image: "https://via.placeholder.com/600x400",
    avatar: "https://via.placeholder.com/100",
  },
];

function NewsComponent() {
  const sortedNews = newsData.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  const latestNews = sortedNews.slice(0, 3);
  const otherNews = sortedNews.slice(3);
  const controls = useAnimation();
  const controls2 = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false, // Animation triggers every time the section comes into view
    threshold: 0.2, // Adjust the threshold as needed
  });
  const [ref2, inView2] = useInView({
    triggerOnce: false, // Animation triggers every time the section comes into view
    threshold: 0.2, // Adjust the threshold as needed
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
    if (inView2) {
      controls2.start("visible");
    } else {
      controls2.start("hidden");
    }
  }, [controls, inView, controls2, inView2]);

  // Animations for the section when it comes in view and out of view
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };
  const issueVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  // Animation for the card hover effect
  const cardHoverVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
    },
  };
  const cardIssueHoverVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
    },
  };
  const featuredData = [
    {
      title: "Am I Ovulating? How to Spot the Signs",
      date: "May 15, 2021",
      time: "1 min read",
      img: "https://flexiblog-medical.netlify.app/static/f13c542303e28afe8a0d8d5aed107c61/fc596/image.webp",
      authorImage:
        "https://flexiblog-medical.netlify.app/static/18c810c8f231ac22d5ec2cf2819ed68c/a3542/john-doe.webp",
      author: "John Doe",
    },
    {
      title: "A Pandemic Nurse's Love Letter to New York",
      date: "June 2, 2020",
      time: "1 min read",
      img: "https://flexiblog-medical.netlify.app/static/d99a0ca1fbf77c815fc0a1484db4ed2d/6b99c/image.webp",
      authorImage:
        "https://flexiblog-medical.netlify.app/static/18c810c8f231ac22d5ec2cf2819ed68c/a3542/john-doe.webp",
      author: "John Doe",
    },
    {
      title: "Am I Ovulating? How to Spot the Signs",
      date: "May 15, 2021",
      time: "1 min read",
      img: "https://flexiblog-medical.netlify.app/static/dcc7787dc9059b24e64832c7086cf6d6/6b99c/image.webp",
      authorImage:
        "https://flexiblog-medical.netlify.app/static/18c810c8f231ac22d5ec2cf2819ed68c/a3542/john-doe.webp",
      author: "John Doe",
    },
    {
      title: "A Pandemic Nurse's Love Letter to New York",
      date: "June 2, 2020",
      time: "1 min read",
      img: "https://flexiblog-medical.netlify.app/static/9d33424e607688cd3c5d27a6d51dcb94/6b99c/image.webp",
      authorImage:
        "https://flexiblog-medical.netlify.app/static/18c810c8f231ac22d5ec2cf2819ed68c/a3542/john-doe.webp",
      author: "John Doe",
    },
    {
      title: "Am I Ovulating? How to Spot the Signs",
      date: "May 15, 2021",
      time: "1 min read",
      img: "https://flexiblog-medical.netlify.app/static/a7138a11a2b6524096fc8fa545524f36/6b99c/image.webp",
      authorImage:
        "https://flexiblog-medical.netlify.app/static/18c810c8f231ac22d5ec2cf2819ed68c/a3542/john-doe.webp",
      author: "John Doe",
    },
    {
      title: "A Pandemic Nurse's Love Letter to New York",
      date: "June 2, 2020",
      time: "1 min read",
      img: "https://flexiblog-medical.netlify.app/static/cd7dc614f389c2944b377b602e17cf40/6b99c/image.webp",
      authorImage:
        "https://flexiblog-medical.netlify.app/static/18c810c8f231ac22d5ec2cf2819ed68c/a3542/john-doe.webp",
      author: "John Doe",
    },
  ];

  const recentlyPublished = [
    {
      title: "Am I Ovulating? How to Spot the Signs",
      date: "May 15, 2021",
      time: "1 min read",
    },
    {
      title: "A Pandemic Nurse's Love Letter to New York",
      date: "June 2, 2020",
      time: "1 min read",
    },
    {
      title: "19 Tips for Fuller, Healthier Hair",
      date: "May 16, 2020",
      time: "1 min read",
    },
    {
      title: "Common Vitamins & Supplements You Should Take",
      date: "April 16, 2020",
      time: "1 min read",
    },
  ];

  const topStories = [
    {
      title: "Dog Scooting: What It Means and What to Do",
      author: "John Doe",
      date: "April 16, 2020",
      time: "1 min read",
      category: "Family Pregnancy",
      description:
        "Lorem markdownum transitque nondum, Peliaeque at poterat exegit, urbis quo; tibi. Cursus mecum adit…",
      img: "https://flexiblog-medical.netlify.app/static/f13c542303e28afe8a0d8d5aed107c61/fc596/image.webp",
      authorImage:
        "https://flexiblog-medical.netlify.app/static/18c810c8f231ac22d5ec2cf2819ed68c/a3542/john-doe.webp",
    },
    {
      title: "16 Foods Your Dog Should Never Eat",
      author: "John Doe",
      date: "April 16, 2020",
      time: "1 min read",
      img: "https://flexiblog-medical.netlify.app/static/f13c542303e28afe8a0d8d5aed107c61/fc596/image.webp",
      category: "Family Pregnancy",
      description:
        "Lorem markdownum transitque nondum, Peliaeque at poterat exegit, urbis quo; tibi. Cursus mecum adit…",
      authorImage:
        "https://flexiblog-medical.netlify.app/static/18c810c8f231ac22d5ec2cf2819ed68c/a3542/john-doe.webp",
    },
  ];

  const FeaturedCarousel = ({ featuredData }) => {
    const buttonVariants = {
      hover: { scale: 1.2, rotate: 15, transition: { duration: 0.3 } },
      tap: { scale: 0.9, rotate: -15, transition: { duration: 0.2 } },
    };

    const imageVariants = {
      hover: { scale: 1.05, transition: { duration: 0.5 } },
    };
    const shadowStyle = {
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
    };
    const settings = {
      dots: false,
      infinite: true,
      speed: 600,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 12000,
      // centerMode: true,
      centerPadding: "50px",
      prevArrow: (
        <motion.div
          className="carousel-control-prev"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          style={shadowStyle}
        >
          <FaChevronLeft size={30} color="black" />
        </motion.div>
      ),
      nextArrow: (
        <motion.div
          className="carousel-control-next"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          style={shadowStyle}
        >
          <FaChevronRight size={30} color="black" />
        </motion.div>
      ),
    };

    return (
      <div className="col-lg-12 mb-4">
        <h4 className="mb-3 section-header">Latest News</h4>
        <Slider {...settings}>
          {featuredData.map((item, index) => (
            <motion.div
              className="carousel-item"
              key={index}
              whileHover="hover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              variants={imageVariants}
            >
              <div
                className="card border position-relative"
                style={{ borderRadius: "20px" }}
              >
                <motion.div
                  className="card-img-top position-relative"
                  style={{
                    height: "550px",
                    backgroundImage: `url(${item.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                    zIndex: 1,
                    borderRadius: "20px",
                  }}
                  whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
                >
                  {/* Gradient Overlay */}
                  <div
                    className="gradient-overlay"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background:
                        "linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.8) 100%)",
                      zIndex: 2,
                      borderRadius: "20px",
                    }}
                  />
                </motion.div>
                <div
                  className="card-body position-absolute bottom-0 w-100 p-3 carousel-detail-section"
                  style={{
                    zIndex: 3,
                    marginTop: "10px",
                  }}
                >
                  <h5 className="card-title" style={{ color: "white" }}>
                    {item.title}
                  </h5>
                  <p className="card-text" style={{ color: "white" }}>
                    {item.date} • {item.time}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "13px",
                      color: "#fff",
                    }}
                  >
                    <img
                      src={item.authorImage}
                      alt={item.author}
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        marginRight: "10px",
                      }}
                    />
                    <div>
                      <div style={{ fontWeight: "700" }}>{item.author}</div>
                      <span>{item.date}</span>
                      <span> • {item.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    );
  };

  return (
    <div className="journal-container container py-5">
      <div className="row">
        {/* Featured Section */}
        <FeaturedCarousel featuredData={featuredData} />
      </div>

      <div className="row">
        {/* Top Stories */}
        <div className="col-lg-8 mb-4">
          <h4 className="mb-3 section-header">Top Stories</h4>
          <motion.div
            className="row"
            ref={ref}
            variants={sectionVariants}
            initial="hidden"
            animate={controls}
          >
            {topStories.map((story, index) => (
              <motion.div className="col-md-12 mb-4" key={index}>
                <motion.div
                  className="card d-flex flex-row align-items-center"
                  style={{
                    borderRadius: "15px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    padding: "10px",
                    height: "300px",
                    cursor: "pointer",
                  }}
                  whileHover="hover"
                  variants={cardHoverVariants}
                >
                  {/* Image Section */}
                  <img
                    src={story.img}
                    alt={story.title}
                    style={{
                      width: "40%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "15px",
                      marginRight: "15px",
                    }}
                  />

                  {/* Text Section */}
                  <div style={{ flex: 1, padding: "20px" }}>
                    <div
                      style={{
                        display: "inline-block",
                        padding: "5px 10px",
                        backgroundColor: "#f0f4f7",
                        borderRadius: "20px",
                        fontSize: "12px",
                        color: "#007BFF",
                        marginBottom: "10px",
                      }}
                    >
                      {story.category}
                    </div>
                    <h5
                      className="card-title"
                      style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        marginBottom: "15px",
                      }}
                    >
                      {story.title}
                    </h5>
                    <p
                      className="card-text"
                      style={{
                        fontSize: "14px",
                        color: "#555",
                        marginBottom: "10px",
                      }}
                    >
                      {story.description}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: "13px",
                        color: "#888",
                      }}
                    >
                      <img
                        src={story.authorImage}
                        alt={story.author}
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                          marginRight: "10px",
                        }}
                      />
                      <div>
                        <div style={{ fontWeight: "700" }}>{story.author}</div>
                        <span>{story.date}</span>
                        <span> • {story.time}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Publication Info Section */}
        <div className="col-lg-4 mb-4">
          <h4 className="mb-3 section-header">Journal Archieve</h4>
          <div className="card shadow border-0">
            <div className="card-body">
              <VolumeList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsComponent;
