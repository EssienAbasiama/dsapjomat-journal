import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// VolumeItem Component
const VolumeItem = ({ volume, issues }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="mb-3">
      {/* Volume Header */}
      <div
        className="d-flex justify-content-between align-items-center py-2 px-3 bg-light border"
        style={{ cursor: "pointer" }}
        onClick={toggleOpen}
      >
        <strong>{isOpen ? `- ${volume}` : `+ ${volume}`}</strong>
      </div>

      {/* Issues Section */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="border-left pl-3"
          >
            {issues.map((issue, index) => (
              <div key={index} className="py-1">
                <div>
                  <span role="img" aria-label="document">
                    📄
                  </span>{" "}
                  <strong>{issue.title}</strong>
                </div>
                <div className="text-muted small">{issue.details}</div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const VolumeList = () => {
  const volumes = [
    {
      volume: "Volume 58 (2024)",
      issues: [{ title: "Issue 1", details: "June 2024, Pages 1-207" }],
    },
    {
      volume: "Volume 57 (2023)",
      issues: [
        { title: "Issue 2", details: "December 2023, Pages 179-399" },
        { title: "Issue 1", details: "June 2023, Pages 1-178" },
      ],
    },
    {
      volume: "Volume 56 (2022)",
      issues: [{ title: "Issue 1", details: "June 2024, Pages 1-207" }],
    },
    {
      volume: "Volume 55 (2021)",
      issues: [
        { title: "Issue 2", details: "December 2023, Pages 179-399" },
        { title: "Issue 1", details: "June 2023, Pages 1-178" },
      ],
    },
    {
      volume: "Volume 54 (2020)",
      issues: [{ title: "Issue 1", details: "June 2024, Pages 1-207" }],
    },
    {
      volume: "Volume 53 (2019)",
      issues: [
        { title: "Issue 2", details: "December 2023, Pages 179-399" },
        { title: "Issue 1", details: "June 2023, Pages 1-178" },
      ],
    },
    {
      volume: "Volume 52 (2018)",
      issues: [{ title: "Issue 1", details: "June 2024, Pages 1-207" }],
    },
    {
      volume: "Volume 51 (2017)",
      issues: [
        { title: "Issue 2", details: "December 2023, Pages 179-399" },
        { title: "Issue 1", details: "June 2023, Pages 1-178" },
      ],
    },
    {
      volume: "Volume 50 (2016)",
      issues: [{ title: "Issue 1", details: "June 2024, Pages 1-207" }],
    },
    {
      volume: "Volume 49 (2015)",
      issues: [
        { title: "Issue 2", details: "December 2023, Pages 179-399" },
        { title: "Issue 1", details: "June 2023, Pages 1-178" },
      ],
    },
  ];

  return (
    <div className="container">
      {volumes.map((volume, index) => (
        <VolumeItem key={index} volume={volume.volume} issues={volume.issues} />
      ))}
    </div>
  );
};

export default VolumeList;
