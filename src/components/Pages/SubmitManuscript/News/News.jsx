import React, { useState, useEffect } from "react";
import apiClient from "../../../../utility/apiClient";
import { decryptData } from "../../../../utility/authUtils";
import { message } from "antd";

const News = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [drafts, setDrafts] = useState([]);
  const [fetching, setFetching] = useState();
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: "",
    image: null,
    description: "",
    mainText: "",
    created_by: "",
    created_at: "",
    type: "",
  });
  useEffect(() => {
    // Load user from secure storage on app load
    const loadUser = async () => {
      setLoading(true);
      const storedToken = localStorage.getItem("refreshToken");
      const storedUser = localStorage.getItem("user");

      if (storedToken && storedUser) {
        setToken(decryptData(storedToken));
        setUser(JSON.parse(decryptData(storedUser)));
      }

      setLoading(false);
    };

    loadUser();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      created_by: user.id,
      created_at: new Date().toISOString(),
      type: "news",
    });
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        image: e.target.files[0],
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation logic
    if (!formData.title?.trim()) {
      message.error("Title is required.");
      return;
    }
    if (!formData.description?.trim()) {
      message.error("Description is required.");
      return;
    }
    if (!formData.mainText?.trim()) {
      message.error("Main text is required.");
      return;
    }
    if (!formData.image) {
      message.error("An image is required.");
      return;
    }

    try {
      // Prepare a new FormData object
      const newsData = new FormData();
      newsData.append("title", formData.title);
      newsData.append("description", formData.description);
      newsData.append("mainText", formData.mainText);
      newsData.append("image", formData.image);
      //   newsData.append("type", formData.type);
      newsData.append(
        "created_by",
        formData.created_by || user?.id || "unknown"
      );
      newsData.append(
        "created_at",
        formData.created_at || new Date().toISOString()
      );

      console.log("FormData Entries:", Array.from(newsData.entries())); // Debugging
      console.log("FormData Entries1:", Array.from(newsData)); // Debugging

      const response = await apiClient.post("/news/news", newsData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      if (response.status === 201) {
        console.log("News published successfully:", response.data);
        message.success("News published successfully!");
      }
    } catch (error) {
      console.error(
        "Error while publishing news:",
        error.response?.data?.message || error.message
      );
      message.error("Failed to publish news. Please try again.");
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="font-weight-bold display-24">Publish News</div>

          {/* Banner Image */}
          <div className="mb-4 text-center">
            <label
              htmlFor="image-upload"
              className="d-block border rounded"
              style={{
                width: "100%",
                height: "250px",
                background: formData.image
                  ? `url(${URL.createObjectURL(formData.image)}) center/cover`
                  : "#f0f0f0",
                cursor: "pointer",
              }}
            >
              {!formData.image && (
                <span className="text-muted">Click to upload banner image</span>
              )}
            </label>
            <input
              type="file"
              id="image-upload"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter the title"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="form-control"
                rows="3"
                placeholder="Enter the description"
                required
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="mainText">Main Text</label>
              <textarea
                id="mainText"
                name="mainText"
                value={formData.mainText}
                onChange={handleChange}
                className="form-control"
                rows="6"
                placeholder="Enter the main text"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100"
              style={{ background: "#163bb5" }}
            >
              Publish
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default News;
