import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaTwitter, FaGlobe, FaPhone } from "react-icons/fa";

function EditorialBoard() {
  const teamMembers = [
    {
      id: 1,
      name: "Ghassemieh, Mehdi",
      role: "Director-in-Charge",
      description:
        "Sed commodo, est quis maximus fermentum, massa ipsum euismod neque, in varius risus tellus quis lacus.",
      expertise: "Medicine, Kids, Elderly",
      image: "https://jchpe.ut.ac.ir/data/jcpe/avatar/1695022626.jpg",
      location:
        "Professor, School of Chemical Engineering, College of Engineering, University of Tehran, Tehran, Iran",
      Hindex: "29",
      socials: {
        instagram: "Instagram",
        twitter: "Twitter",
        website: "Website",
      },
    },
    {
      id: 2,
      name: "Zarghami, Reza",
      role: "Editor-in-Chief",
      description:
        "Sed commodo, est quis maximus fermentum, massa ipsum euismod neque, in varius risus tellus quis lacus.",
      expertise: "Virus, Examination, Cancer",
      image: "https://jchpe.ut.ac.ir/data/jcpe/avatar/1695022626.jpg",
      location:
        "Professor, School of Chemical Engineering, College of Engineering, University of Tehran, Tehran, Iran",
      Hindex: "29",
      socials: {
        instagram: "Instagram",
        twitter: "Twitter",
        website: "Website",
      },
    },
    {
      id: 3,
      name: "Tahouni, Nassim",
      role: "Section Editor",
      description:
        "Aliquam erat volutpat. Proin facilisis lacus nec libero sodales, eget tincidunt elit consequat.",
      expertise: "Digital Marketing, SEO, Analytics",
      image: "https://jchpe.ut.ac.ir/data/jcpe/avatar/1695022626.jpg",
      location:
        "Professor, School of Chemical Engineering, College of Engineering, University of Tehran, Tehran, Iran",
      Hindex: "29",
      socials: {
        instagram: "Instagram",
        twitter: "Twitter",
        website: "Website",
      },
    },
    {
      id: 4,
      name: "Riahi, Siavash",
      role: "",
      description:
        "Pellentesque ac justo nec purus dignissim volutpat. Integer in nisi ut nisl congue tempus.",
      expertise: "Design Systems, Wireframes, Prototyping",
      image: "https://jchpe.ut.ac.ir/data/jcpe/avatar/1695022626.jpg",
      location:
        "Professor, School of Chemical Engineering, College of Engineering, University of Tehran, Tehran, Iran",
      Hindex: "29",
      socials: {
        instagram: "Instagram",
        twitter: "Twitter",
        website: "Website",
      },
    },
    {
      id: 5,
      name: "Sarrafzadeh, Mohammad Hossein",
      role: "",
      description:
        "Cras et libero nec magna tempor malesuada. Suspendisse cursus consectetur libero.",
      expertise: "Agile, Scrum, Team Management",
      image: "https://jchpe.ut.ac.ir/data/jcpe/avatar/1695022626.jpg",
      location:
        "Professor, School of Chemical Engineering, College of Engineering, University of Tehran, Tehran, Iran",
      Hindex: "29",
      socials: {
        instagram: "Instagram",
        twitter: "Twitter",
        website: "Website",
      },
    },
    {
      id: 6,
      name: "Sarrafzadeh, Mohammad Hossein",
      role: "",
      description:
        "Cras et libero nec magna tempor malesuada. Suspendisse cursus consectetur libero.",
      expertise: "Agile, Scrum, Team Management",
      image: "https://jchpe.ut.ac.ir/data/jcpe/avatar/1695022626.jpg",
      location:
        "Professor, School of Chemical Engineering, College of Engineering, University of Tehran, Tehran, Iran",
      Hindex: "29",
      socials: {
        instagram: "Instagram",
        twitter: "Twitter",
        website: "Website",
      },
    },
    {
      id: 7,
      name: "Sarrafzadeh, Mohammad Hossein",
      role: "",
      description:
        "Cras et libero nec magna tempor malesuada. Suspendisse cursus consectetur libero.",
      expertise: "Agile, Scrum, Team Management",
      image: "https://jchpe.ut.ac.ir/data/jcpe/avatar/1695022626.jpg",
      location:
        "Professor, School of Chemical Engineering, College of Engineering, University of Tehran, Tehran, Iran",
      Hindex: "29",
      socials: {
        instagram: "Instagram",
        twitter: "Twitter",
        website: "Website",
      },
    },
    {
      id: 8,
      name: "Sarrafzadeh, Mohammad Hossein",
      role: "",
      description:
        "Cras et libero nec magna tempor malesuada. Suspendisse cursus consectetur libero.",
      expertise: "Agile, Scrum, Team Management",
      image: "https://jchpe.ut.ac.ir/data/jcpe/avatar/1695022626.jpg",
      location:
        "Professor, School of Chemical Engineering, College of Engineering, University of Tehran, Tehran, Iran",
      Hindex: "29",
      socials: {
        instagram: "Instagram",
        twitter: "Twitter",
        website: "Website",
      },
    },
    {
      id: 9,
      name: "Sarrafzadeh, Mohammad Hossein",
      role: "",
      description:
        "Cras et libero nec magna tempor malesuada. Suspendisse cursus consectetur libero.",
      expertise: "Agile, Scrum, Team Management",
      image: "https://jchpe.ut.ac.ir/data/jcpe/avatar/1695022626.jpg",
      location:
        "Professor, School of Chemical Engineering, College of Engineering, University of Tehran, Tehran, Iran",
      Hindex: "29",
      socials: {
        instagram: "Instagram",
        twitter: "Twitter",
        website: "Website",
      },
    },
    {
      id: 10,
      name: "Sarrafzadeh, Mohammad Hossein",
      role: "",
      description:
        "Cras et libero nec magna tempor malesuada. Suspendisse cursus consectetur libero.",
      expertise: "Agile, Scrum, Team Management",
      image: "https://jchpe.ut.ac.ir/data/jcpe/avatar/1695022626.jpg",
      location:
        "Professor, School of Chemical Engineering, College of Engineering, University of Tehran, Tehran, Iran",
      Hindex: "29",
      socials: {
        instagram: "Instagram",
        twitter: "Twitter",
        website: "Website",
      },
    },
    {
      id: 11,
      name: "Sarrafzadeh, Mohammad Hossein",
      role: "",
      description:
        "Cras et libero nec magna tempor malesuada. Suspendisse cursus consectetur libero.",
      expertise: "Agile, Scrum, Team Management",
      image: "https://jchpe.ut.ac.ir/data/jcpe/avatar/1695022626.jpg",
      location:
        "Professor, School of Chemical Engineering, College of Engineering, University of Tehran, Tehran, Iran",
      Hindex: "29",
      socials: {
        instagram: "Instagram",
        twitter: "Twitter",
        website: "Website",
      },
    },
    {
      id: 12,
      name: "Sarrafzadeh, Mohammad Hossein",
      role: "",
      description:
        "Cras et libero nec magna tempor malesuada. Suspendisse cursus consectetur libero.",
      expertise: "Agile, Scrum, Team Management",
      image: "https://jchpe.ut.ac.ir/data/jcpe/avatar/1695022626.jpg",
      location:
        "Professor, School of Chemical Engineering, College of Engineering, University of Tehran, Tehran, Iran",
      Hindex: "29",
      socials: {
        instagram: "Instagram",
        twitter: "Twitter",
        website: "Website",
      },
    },
  ];
  const handleViewDetails = () => {
    window.location.href = "https://example.com"; // Replace with your desired URL
  };
  return (
    <div
      className="container"
      style={{ marginTop: "150px", height: "max-content" }}
    >
      <div className="text-center mb-5">
        <h2 className="font-weight-bold">Editorial Board</h2>
        <p>
          Meet our dedicated team of professionals who bring expertise and
          creativity to every project, <br />
          ensuring the highest standards of content and collaboration.
        </p>
      </div>
      <div className="row">
        {teamMembers.map((member, index) => (
          <div className="col-md-6 mb-4" key={member.id}>
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              style={{
                border: "none",
                backgroundColor: "#f9f9f9",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                padding: "20px",
              }}
            >
              <div className="d-flex">
                <img
                  src={member.image}
                  alt={member.name}
                  className="profile-img mr-3"
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
                <div>
                  <h5 className="font-weight-bold mb-1">{member.name}</h5>
                  <p className="mb-2">{member.role}</p>
                  <p>{member.description}</p>
                  <p className="expertise mb-1">
                    <strong>Expertise:</strong> {member.expertise}
                  </p>
                  <p className="expertise mb-1">
                    <strong>Location:</strong> {member.location}
                  </p>
                  <p className="expertise mb-1">
                    <strong>H-Index: Scopus:</strong> {member.Hindex}
                  </p>
                  <p className="social-media mb-0">
                    <a
                      href={member.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ marginRight: "10px", color: "#163bb5" }}
                    >
                      <FaInstagram size={20} />
                    </a>
                    <a
                      href={member.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ marginRight: "10px", color: "#163bb5" }}
                    >
                      <FaPhone size={20} />
                    </a>
                    <a
                      href={member.socials.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#163bb5" }}
                    >
                      <FaGlobe size={20} />
                    </a>
                  </p>
                </div>
              </div>
              <div className="text-right mt-3">
                <button
                  onClick={handleViewDetails}
                  style={{
                    backgroundColor: "#163bb5",
                    color: "#fff",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  View Details
                </button>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EditorialBoard;
