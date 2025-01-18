import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { useParams } from "react-router-dom";
import { decryptData } from "../../../utility/authUtils";

import {
  Drawer,
  Steps,
  Button,
  Card,
  Table,
  Divider,
  Typography,
  Layout,
  Spin,
} from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import apiClient from "../../../utility/apiClient";

function ManuscriptDetails() {
  const { id } = useParams();
  const [token, setToken] = useState(null);
  const [fetching, setFetching] = useState(false);
  const [data, setData] = useState(null);
  const [filesData, setFilesData] = useState([]);

  const fetchManuscriptById = async () => {
    setFetching(true); // Show the loader
    const storedToken = localStorage.getItem("refreshToken");
    const storedUser = localStorage.getItem("user");

    try {
      if (storedToken && storedUser) {
        setToken(decryptData(storedToken)); // Decrypt and set the token
        const email = JSON.parse(decryptData(storedUser)).email;
        console.log("User:", email);

        // Fetch manuscript data by ID
        const response = await apiClient.get(`/manuscripts/${id}`, {
          headers: {
            Authorization: `Bearer ${decryptData(storedToken)}`, // Add token to headers
          },
        });

        if (response.status === 200) {
          console.log(response.data);
          const filesData = response.data.files.map((file) => ({
            ...file,
            size: `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
          }));
          setFilesData(filesData);
          setData(response.data); // Store the response data
        }
      }
    } catch (error) {
      console.error("Error fetching manuscripts:", error.message);
    } finally {
      setFetching(false); // Hide the loader
    }
  };
  const handleDownload = (fileUrl) => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileUrl.split("/").pop();
    link.click();
  };
  useEffect(() => {
    fetchManuscriptById();
  }, []);
  const estimateReadingTime = (text) => {
    const wordsPerMinute = 200; // Average reading speed
    const wordCount = text.split(" ").length; // Count words
    const readingTime = Math.ceil(wordCount / wordsPerMinute); // Estimate reading time
    return readingTime;
  };
  return (
    <div className="container" style={{ marginTop: "90px", height: "100vh" }}>
      {fetching ? (
        // Show loader while fetching
        <div style={{ textAlign: "center", padding: "50px 0" }}>
          <Spin size="large" />
        </div>
      ) : data ? (
        <>
          <div
            className="card shadow-sm"
            style={{ height: "300px", overflow: "hidden" }}
          >
            <img
              src="https://img.freepik.com/free-vector/digital-futuristic-earth-technology-background-with-glowing-lights_1017-23327.jpg?t=st=1735655793~exp=1735659393~hmac=1282ebb05c6e837c8f830796b3ff114d61eeb6a4325d34830d841a0f2585ce7a&w=1800"
              alt="Manuscript Thumbnail"
              className="card-img-top"
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
          </div>

          <div
            className="mt-4"
            style={{ background: "white", padding: "20px 30px" }}
          >
            {/* Title */}
            <h1 className="h2 font-weight-bold mb-3 my-3">{data.full_title}</h1>

            {/* Metadata */}
            <div className="text-muted d-flex flex-wrap mb-3">
              <span>By {data.created_by.username}</span>
              <span className="mx-2">•</span>
              <span>Published in Family Pregnancy</span>
              <span className="mx-2">•</span>
              <span>{dayjs(data.created_at).format("MMM D, YYYY")}</span>
              <span className="mx-2">•</span>
              <span>{estimateReadingTime(data.abstract_text)} min read</span>
              <span className="mx-2">•</span>
              <span>{data.file_type}</span>
            </div>

            {/* Article Content */}
            <div>
              <p
                className="mb-3 text-muted my-3"
                dangerouslySetInnerHTML={{ __html: data.file_description }}
              ></p>
              <h2 className="h5 my-3">Abstract Text</h2>
              <p dangerouslySetInnerHTML={{ __html: data.abstract_text }}></p>
              <h3 className="h6 my-3">Cover Letter</h3>
              <p dangerouslySetInnerHTML={{ __html: data.cover_letter }}></p>
              <h3 className="h6">
                Inexorable saevo siccus certus Phorbas Aeson nec
              </h3>
              <div className="my-3">
                <Typography.Title level={5}>Attached Files</Typography.Title>
                <Table
                  dataSource={filesData}
                  columns={[
                    {
                      title: "File Name",
                      dataIndex: "originalName",
                      key: "fileName",
                    },
                    {
                      title: "URL",
                      dataIndex: "fileUrl",
                      key: "size",
                    },
                    {
                      title: "Action",
                      dataIndex: "fileUrl", // Assuming the file path is stored in `filePath`
                      key: "action",
                      render: (fileUrl) => (
                        <Button
                          icon={<DownloadOutlined />}
                          onClick={() => handleDownload(fileUrl)} // Trigger file download when clicked
                          type="link"
                        >
                          Download
                        </Button>
                      ),
                    },
                  ]}
                  pagination={false}
                  bordered
                  size="small"
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        // Show message if no data is fetched
        <div style={{ textAlign: "center", padding: "50px 0" }}>
          <p>No manuscript data available.</p>
        </div>
      )}
    </div>
  );
}

export default ManuscriptDetails;
