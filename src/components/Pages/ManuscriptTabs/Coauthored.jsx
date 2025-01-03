import React, { useState, useEffect } from "react";

import {
  Drawer,
  Steps,
  Button,
  Card,
  Table,
  Divider,
  Typography,
  Layout,
} from "antd";
import apiClient from "../../../utility/apiClient";
import { decryptData } from "../../../utility/authUtils";
import { DownloadOutlined } from "@ant-design/icons";

const { Content } = Layout;

const Coauthored = ({ darkModeTheme, createdBy, drawerVisible }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [drafts, setDrafts] = useState([]);
  const [fetching, setFetching] = useState();
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const isSmallScreen = window.innerWidth <= 767;
  const [authorsData, setAuthorData] = useState([]);
  const [suggestedReviewers, setSuggestedReviewers] = useState([]);
  const [collectedData, setCollectedData] = useState(() => {});
  const [filesData, setFilesData] = useState([]);
  const [drawerVisiblee, setDrawerVisible] = useState(false);
  const [current, setCurrent] = useState(0);
  const handleDownload = (fileUrl) => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileUrl.split("/").pop();
    link.click();
  };
  const manuscriptData = [
    {
      key: "1",
      field: "Manuscript ID",
      value: "***",
    },
    {
      key: "2",
      field: "Manuscript Title",
      value: collectedData?.full_title,
    },
    {
      key: "3",
      field: "Running Title",
      value: (
        <div
          dangerouslySetInnerHTML={{ __html: collectedData?.running_title }}
        />
      ),
    },
    {
      key: "4",
      field: "Manuscript Type",
      value: collectedData?.manuscript_type,
    },
    {
      key: "5",
      field: "Comments",
      value: (
        <div dangerouslySetInnerHTML={{ __html: collectedData?.comments }} />
      ),
    },
    {
      key: "6",
      field: "Main Subjects",
      value: collectedData?.subjects,
    },

    {
      key: "7",
      field: "More Subject",
      value: (
        <div dangerouslySetInnerHTML={{ __html: collectedData?.moreSubject }} />
      ),
    },
    {
      key: "8",
      field: "Abstract",
      value: (
        <div
          dangerouslySetInnerHTML={{ __html: collectedData?.abstract_text }}
        />
      ),
    },

    {
      key: "9",
      field: "Keywords",
      value: collectedData?.tags,
    },
    {
      key: "10",
      field: "Cover Letter",
      value: (
        <div
          dangerouslySetInnerHTML={{ __html: collectedData?.cover_letter }}
        />
      ),
    },
  ];

  const steps = [
    {
      title: "View Manuscript",
      content: (
        <div>
          <Card>
            <Typography.Title level={5}>
              Manuscript Information
            </Typography.Title>
            <Table
              dataSource={manuscriptData}
              columns={[
                {
                  title: "Field",
                  dataIndex: "field",
                  key: "field",
                  width: "30%",
                },
                {
                  title: "Value",
                  dataIndex: "value",
                  key: "value",
                },
              ]}
              pagination={false}
              bordered
              size="small"
            />

            <Divider />

            <Typography.Title level={5}>Co-Authors</Typography.Title>
            <Table
              dataSource={authorsData}
              columns={[
                {
                  title: "Title",
                  dataIndex: "title",
                  key: "title",
                },
                {
                  title: "Name",
                  dataIndex: "username",
                  key: "name",
                },
                {
                  title: "Email Address",
                  dataIndex: "email",
                  key: "email",
                },
                {
                  title: "Degree",
                  dataIndex: "degree",
                  key: "degree",
                },
                {
                  title: "Specialty",
                  dataIndex: "specialty",
                  key: "specialty",
                },
                {
                  title: "Phone",
                  dataIndex: "phone",
                  key: "phone",
                },
                {
                  title: "Country",
                  dataIndex: "country",
                  key: "country",
                },
              ]}
              pagination={false}
              bordered
              size="small"
            />

            <Divider />

            <Typography.Title level={5}>Suggested Reviewers</Typography.Title>
            <Table
              dataSource={suggestedReviewers}
              columns={[
                {
                  title: "Title",
                  dataIndex: "title",
                  key: "title",
                },
                {
                  title: "Name",
                  dataIndex: "username",
                  key: "name",
                },
                {
                  title: "Email Address",
                  dataIndex: "email",
                  key: "email",
                },
                {
                  title: "Degree",
                  dataIndex: "degree",
                  key: "degree",
                },
                {
                  title: "Specialty",
                  dataIndex: "specialty",
                  key: "specialty",
                },
                {
                  title: "Phone",
                  dataIndex: "phone",
                  key: "phone",
                },
                {
                  title: "Country",
                  dataIndex: "country",
                  key: "country",
                },
              ]}
              pagination={false}
              bordered
              size="small"
            />
            <Divider />

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
                  title: "Size",
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
          </Card>
        </div>
      ),
    },
  ];

  const showModal = (record) => {
    console.log("Record", record);
    const transformedRecord = {
      ...record,
      co_authors:
        typeof record.co_authors === "string"
          ? JSON.parse(record.co_authors)
          : record.co_authors,
      suggestedReviewers: Array.isArray(record.suggestedReviewers)
        ? record.suggestedReviewers
        : JSON.parse(record.suggestedReviewers || "[]"),
      files: Array.isArray(record.files)
        ? record.files
        : JSON.parse(record.files || "[]"),
      subjects: Array.isArray(record.subjects)
        ? record.subjects
        : JSON.parse(record.subjects || "[]"),
      tags: Array.isArray(record.tags)
        ? record.tags
        : JSON.parse(record.tags || "[]"),
    };
    console.log("Transformed Record", transformedRecord);

    // Set transformed data
    setCollectedData(transformedRecord);

    setAuthorData(transformedRecord.co_authors);
    setSuggestedReviewers(transformedRecord.suggestedReviewers);

    console.log("Transformed Co-Authors", transformedRecord.co_authors);

    const filesData = transformedRecord.files.map((file) => ({
      ...file,
      size: `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
    }));
    setFilesData(filesData);
    setDrawerVisible(true);
  };

  useEffect(() => {
    const loadUser = async () => {
      setFetching(true);
      const storedToken = localStorage.getItem("refreshToken");
      const storedUser = localStorage.getItem("user");

      if (storedToken && storedUser) {
        setToken(decryptData(storedToken));
        setUser(JSON.parse(decryptData(storedUser)));
      }

      setFetching(false);
    };

    loadUser();
  }, []);

  const fetchCoAuthoredManuscript = async () => {
    setFetching(true);
    const storedToken = localStorage.getItem("refreshToken");
    const storedUser = localStorage.getItem("user");

    try {
      if (storedToken && storedUser) {
        setToken(decryptData(storedToken));
        const email = JSON.parse(decryptData(storedUser)).email;

        console.log("User", email);
        const response = await apiClient.get("/getManuscriptsByCoAuthor", {
          params: {
            email: email,
          },
        });

        if (response.status === 200) {
          console.log(response);
          setDrafts(response.data.data); // Update state with fetched data
        }
      }
      setFetching(false);
    } catch (error) {
      console.error("Error fetching manuscripts:", error.message);
      setFetching(false);
    }
  };

  useEffect(() => {
    fetchCoAuthoredManuscript();
  }, [createdBy, drawerVisible]);

  useEffect(() => {
    fetchCoAuthoredManuscript();
  }, []);
  const closeDrawer = () => {
    setDrawerVisible(false);
  };
  const columns = [
    {
      title: "Title",
      dataIndex: "full_title",
      key: "manuscriptID",
      render: (text) => (
        <span
          style={{
            color: darkModeTheme ? "rgb(255, 255, 255)" : "",
          }}
        >
          {text}
        </span>
      ),
    },
    {
      title: "Type",
      dataIndex: "manuscript_type",
      key: "type",
      render: (text) => (
        <span
          style={{
            color: darkModeTheme ? "rgb(255, 255, 255)" : "",
          }}
        >
          {text}
        </span>
      ),
    },

    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text) => (
        <span
          style={{
            color: darkModeTheme ? "rgb(255, 255, 255)" : "",
          }}
        >
          {text}
        </span>
      ),
    },
    {
      title: "Created Date",
      dataIndex: "created_at",
      key: "submitDate",
      render: (text) => {
        // Create a new Date object from the text (ISO date string)
        const date = new Date(text);

        // Format the date to "Nov 15, 2023" using toLocaleDateString
        const formattedDate = date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        });

        return (
          <span
            style={{
              color: darkModeTheme ? "rgb(189 187 187)" : "",
            }}
          >
            {formattedDate}
          </span>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div
          className="flex order-view"
          style={{ cursor: "pointer" }}
          onClick={() => showModal(record)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M6 11.8334C5.93333 11.8334 5.87333 11.82 5.80667 11.7934C5.62 11.72 5.5 11.5334 5.5 11.3334V7.33337C5.5 7.06004 5.72667 6.83337 6 6.83337C6.27333 6.83337 6.5 7.06004 6.5 7.33337V10.1267L6.98 9.64671C7.17333 9.45337 7.49333 9.45337 7.68667 9.64671C7.88 9.84004 7.88 10.16 7.68667 10.3534L6.35333 11.6867C6.26 11.78 6.12667 11.8334 6 11.8334Z"
              fill={darkModeTheme ? "white" : "#292D32"}
            />
            <path
              d="M5.99964 11.8334C5.87297 11.8334 5.7463 11.7867 5.6463 11.6867L4.31297 10.3534C4.11964 10.16 4.11964 9.84004 4.31297 9.64671C4.5063 9.45338 4.8263 9.45338 5.01964 9.64671L6.35297 10.98C6.5463 11.1734 6.5463 11.4934 6.35297 11.6867C6.25297 11.7867 6.1263 11.8334 5.99964 11.8334Z"
              fill={darkModeTheme ? "white" : "#292D32"}
            />
            <path
              d="M9.99967 15.1667H5.99967C2.37967 15.1667 0.833008 13.62 0.833008 10V6.00004C0.833008 2.38004 2.37967 0.833374 5.99967 0.833374H9.33301C9.60634 0.833374 9.83301 1.06004 9.83301 1.33337C9.83301 1.60671 9.60634 1.83337 9.33301 1.83337H5.99967C2.92634 1.83337 1.83301 2.92671 1.83301 6.00004V10C1.83301 13.0734 2.92634 14.1667 5.99967 14.1667H9.99967C13.073 14.1667 14.1663 13.0734 14.1663 10V6.66671C14.1663 6.39337 14.393 6.16671 14.6663 6.16671C14.9397 6.16671 15.1663 6.39337 15.1663 6.66671V10C15.1663 13.62 13.6197 15.1667 9.99967 15.1667Z"
              fill={darkModeTheme ? "white" : "#292D32"}
            />
            <path
              d="M14.6663 7.1667H11.9997C9.71967 7.1667 8.83301 6.28003 8.83301 4.00003V1.33337C8.83301 1.13337 8.95301 0.9467 9.13967 0.873366C9.32634 0.793366 9.53967 0.840033 9.68634 0.980033L15.0197 6.31337C15.1597 6.45337 15.2063 6.67337 15.1263 6.86003C15.0463 7.0467 14.8663 7.1667 14.6663 7.1667ZM9.83301 2.54003V4.00003C9.83301 5.72003 10.2797 6.1667 11.9997 6.1667H13.4597L9.83301 2.54003Z"
              fill={darkModeTheme ? "white" : "#292D32"}
            />
          </svg>
          <p
            style={{
              color: darkModeTheme ? "white" : "",
            }}
          >
            View
          </p>
        </div>
      ),
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Content style={{ padding: "20px", backgroundColor: "#f0f2f5" }}>
        <div
          className={`lastOrder ${
            darkModeTheme ? "sales-trend-dark-mode" : "sales-trend-light-mode"
          }`}
          style={{ width: "100%" }}
        >
          <div className="sales-trend-header">
            <h3
              style={{
                color: darkModeTheme ? "rgb(255, 255, 255)" : "",
              }}
            >
              Co-Authored
            </h3>
            <div className="sales-trend-header-right">
              <p id="green-link" className="green-link">
                See All
              </p>
            </div>
          </div>
          <div className="table_container">
            <Table
              columns={columns}
              dataSource={drafts}
              pagination={false}
              loading={fetching}
              style={{
                backgroundColor: darkModeTheme
                  ? "rgb(36 36 36)"
                  : "transparent",
              }}
              rowClassName={(record, index) =>
                index % 2 === 0 ? "even-row" : "odd-row"
              }
              // Custom styles for the table rows can be applied here if needed
            />
          </div>
        </div>
      </Content>
      <Drawer
        title="View Manuscript"
        placement="right"
        onClose={closeDrawer}
        visible={drawerVisiblee}
        drawerStyle={{
          background: "#f7f8fa",
        }}
        width={"90%"}
      >
        <div
          className="drawer-content"
          style={{ marginBottom: 30, padding: isSmallScreen && "0px" }}
        >
          <Card
            className="form-card"
            style={{
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
              border: "1px solid #edf2f7",
            }}
          >
            {steps[current].content}
          </Card>
        </div>
      </Drawer>
    </Layout>
  );
};

export default Coauthored;
