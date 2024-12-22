import React, { useState } from "react";
import { Table, Layout } from "antd";

const { Content } = Layout;

const drafts = [
  {
    id: 1,
    name: "Practice Written Assignment",
    type: "Document",
    date: "Nov 8, 2024",
  },
  { id: 2, name: "ELE 350 Assignment", type: "Document", date: "Jul 15, 2024" },
  { id: 3, name: "Resume", type: "Document", date: "Sep 6, 2023" },
  { id: 4, name: "Untitled Document", type: "Document", date: "Sep 23, 2024" },
  { id: 5, name: "Recording jobOffer", type: "Video", date: "Jun 11, 2024" },
  { id: 6, name: "Job Offer UI", type: "Video", date: "May 24, 2024" },
  {
    id: 7,
    name: "Review of HR Attendance",
    type: "Document",
    date: "May 6, 2024",
  },
  {
    id: 8,
    name: "Transforming Campus",
    type: "Document",
    date: "Sep 27, 2023",
  },
  {
    id: 9,
    name: "Employment Contract",
    type: "Word File",
    date: "Jul 3, 2024",
  },
];

const ManuscriptDrafts = ({ darkModeTheme }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const columns = [
    {
      title: "#",
      dataIndex: "index",
      key: "index",
      render: (text, record, index) => index + 1,
    },
    {
      title: "File Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Date Modified",
      dataIndex: "date",
      key: "date",
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
              Manuscript Drafts
            </h3>
            <div className="sales-trend-header-right">
              <p id="green-link" className="green-link">
                See All
              </p>
            </div>
          </div>
          <div className="table_container">
            <table>
              <tr>
                <th
                  style={{
                    color: darkModeTheme ? "rgb(255, 255, 255)" : "",
                  }}
                >
                  ManuscriptID
                </th>
                <th
                  style={{
                    color: darkModeTheme ? "rgb(255, 255, 255)" : "",
                  }}
                >
                  Type
                </th>
                <th
                  style={{
                    color: darkModeTheme ? "rgb(255, 255, 255)" : "",
                  }}
                >
                  Title
                </th>
                <th
                  style={{
                    color: darkModeTheme ? "rgb(255, 255, 255)" : "",
                  }}
                >
                  Status
                </th>
                <th
                  style={{
                    color: darkModeTheme ? "rgb(255, 255, 255)" : "",
                  }}
                >
                  Submit Date
                </th>
              </tr>
              <tr
                className="row"
                style={{
                  borderTop: darkModeTheme && "1px solid rgb(46 46 47)",
                  display: "table-footer-group",
                }}
              >
                <td>
                  <div
                    className="flex order-name"
                    style={{
                      color: darkModeTheme ? "white" : "",
                    }}
                  >
                    <img src="path/to/man01.jpg" alt="" />
                    Marcus Bergson
                  </div>
                </td>
                <td
                  className="order-date"
                  style={{
                    color: darkModeTheme ? "rgb(189 187 187)" : "",
                  }}
                >
                  Nov 15, 2023
                </td>
                <td
                  className="order-price"
                  style={{
                    color: darkModeTheme ? "white" : "",
                  }}
                >
                  $80,000
                </td>
                <td className="green-paid">Paid</td>
                <td>
                  <div
                    className="flex order-view"
                    style={{ cursor: "pointer" }}
                    onClick={showModal}
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
                </td>
              </tr>
              <tr
                className="row"
                style={{
                  borderTop: darkModeTheme && "1px solid rgb(46 46 47)",
                  display: "table-footer-group",
                }}
              >
                <td>
                  <div
                    className="flex order-name"
                    style={{
                      color: darkModeTheme ? "white" : "",
                    }}
                  >
                    <img src="path/to/man01.jpg" alt="" />
                    Marcus Bergson
                  </div>
                </td>
                <td
                  className="order-date"
                  style={{
                    color: darkModeTheme ? "rgb(189 187 187)" : "",
                  }}
                >
                  Nov 15, 2023
                </td>
                <td
                  className="order-price"
                  style={{
                    color: darkModeTheme ? "white" : "",
                  }}
                >
                  $80,000
                </td>
                <td className="green-paid">Paid</td>
                <td>
                  <div
                    className="flex order-view"
                    style={{ cursor: "pointer" }}
                    onClick={showModal}
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
                </td>
              </tr>
            </table>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default ManuscriptDrafts;
