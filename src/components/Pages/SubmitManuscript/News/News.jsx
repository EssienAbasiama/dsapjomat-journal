import React, { useState } from "react";
import { Input, Button, Upload, Form, Row, Col, Card } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

const { TextArea } = Input;

const News = () => {
  const [formData, setFormData] = useState({
    title: "",
    image: null,
    description: "",
    mainText: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (info) => {
    if (info.file.status === "done") {
      setFormData((prevData) => ({
        ...prevData,
        image: info.file.originFileObj,
      }));
    }
  };

  const handleSubmit = () => {
    console.log(formData);
    // handle your submission logic here
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container py-5"
    >
      <Row justify="center">
        <Col xs={24} md={12}>
          {/* Banner Image */}
          {formData.image && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <img
                src={URL.createObjectURL(formData.image)}
                alt="Banner"
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </motion.div>
          )}

          <Card
            title="Create News"
            bordered={false}
            className="shadow-lg p-4 rounded"
            style={{ background: "#f9f9f9" }}
          >
            <Form onFinish={handleSubmit}>
              {/* Title */}
              <motion.div
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Form.Item
                  name="title"
                  rules={[
                    { required: true, message: "Please enter the title!" },
                  ]}
                >
                  <Input
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Enter the title"
                    className="shadow-sm mb-3"
                  />
                </Form.Item>
              </motion.div>

              {/* Image Upload */}
              <motion.div
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Form.Item>
                  <Upload
                    name="image"
                    accept="image/*"
                    showUploadList={false}
                    customRequest={handleImageChange}
                  >
                    <Button
                      icon={<UploadOutlined />}
                      className="shadow-sm mb-3 w-100"
                      style={{ background: "#2c7be5", color: "#fff" }}
                    >
                      Upload Image
                    </Button>
                  </Upload>
                </Form.Item>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Form.Item
                  name="description"
                  rules={[
                    {
                      required: true,
                      message: "Please enter the description!",
                    },
                  ]}
                >
                  <TextArea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Enter the description"
                    className="shadow-sm mb-3"
                  />
                </Form.Item>
              </motion.div>

              {/* Main Text */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Form.Item
                  name="mainText"
                  rules={[
                    { required: true, message: "Please enter the main text!" },
                  ]}
                >
                  <TextArea
                    name="mainText"
                    value={formData.mainText}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Enter the main text"
                    className="shadow-sm mb-3"
                  />
                </Form.Item>
              </motion.div>

              {/* Publish Button */}
              <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Button
                  type="primary"
                  htmlType="submit"
                  className="w-100 py-3"
                  style={{
                    background: "#2c7be5",
                    borderColor: "#2c7be5",
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                >
                  Publish
                </Button>
              </motion.div>
            </Form>
          </Card>
        </Col>
      </Row>
    </motion.div>
  );
};

export default News;
