/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import "./manuscript.css";

import MainBody from "./MainBody/MainBody";
import JournalHeader from "./Header/Header";
import SideBar from "./Sidebar/SideBar";

import {
  Drawer,
  Steps,
  Form,
  Input,
  Button,
  Select,
  Card,
  DatePicker,
  message,
  Upload,
  Row,
  Col,
  Modal,
  Table,
  Alert,
  Checkbox,
  Divider,
  Typography,
  Tag,
  Tooltip,
} from "antd";
import { UploadOutlined, InboxOutlined } from "@ant-design/icons";
import ReactQuill from "react-quill";
import moment from "moment";
import "react-quill/dist/quill.snow.css";

import {} from "@ant-design/icons";
import {
  SaveOutlined,
  RedoOutlined,
  ArrowLeftOutlined,
  EyeOutlined,
  PlusOutlined,
} from "@ant-design/icons";

const { Step } = Steps;
const { Option } = Select;
function SubmitManuscript() {
  const [darkMode, setDarkMode] = useState(false);
  const [tags, setTags] = useState([]);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleClose = (removedTag) => {
    setTags(tags.filter((tag) => tag !== removedTag));
  };

  const showInput = () => {
    setInputVisible(true);
  };
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    console.log("Dark Mode Activated");
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    if (inputValue && !tags.includes(inputValue)) {
      setTags([...tags, inputValue]);
    }
    setInputValue("");
  };

  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };
  const onReset = () => {
    form.resetFields();
  };
  const closeDrawer = () => {
    setDrawerVisible(false);
  };
  const [current, setCurrent] = useState(0);
  const [form] = Form.useForm();
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewJob, setPreviewJob] = useState(null);
  const [isDepartmentModalVisible, setIsDepartmentModalVisible] =
    useState(false);
  const isSmallScreen = window.innerWidth <= 767;
  const [loading, setLoading] = useState(false);
  const [departments, setDepartments] = useState([]);
  const [sending, setSending] = useState(false);
  const [opening_date, setOpeningDate] = useState("");
  const [expiring_date, setExpiringDate] = useState("");
  const [formData, setFormData] = useState({
    department_id: "",
    job_title: "",
    job_description: "",
    employment_type: "",
    salary: "",
    currency: "",
    city_country: "",
    remote_options: "",
    qualifications: "",
    responsibility: "",
    skills: "",
    phone: "",
    resume: "",
    cover_letter: "",
    location: "",
    portfolio: "",
    linkedin: "",
    github: "",
    video: "",
    twitter: "",
    website: "",
    hiring_manager: "",
    no_openings: "",
  });

  const onChange = (value, state) => {
    setFormData({ ...formData, [state]: value });
  };
  const [subjects, setSubjects] = useState([
    "Physics",
    "Mathematics",
    "Biology",
    "Chemistry",
    "Engineering",
    "Computer Science",
  ]);
  const onClosePreview = () => {
    setPreviewVisible(false);
  };
  const handleChange = (value) => {
    console.log("Selected subjects:", value);
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

  const next = () => {
    form
      .validateFields()
      .then(() => {
        setCurrent(current + 1);
      })
      .catch((info) => {
        console.log("Validation Failed:", info);
      });
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const showDepartmentModal = () => {
    setIsDepartmentModalVisible(true);
  };

  const handleDepartmentModalCancel = () => {
    setIsDepartmentModalVisible(false);
  };

  const fetchDepartments = async () => {
    setLoading(true);
    try {
      // const res = await getDepartments();
      // setDepartments(res.departments);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  const onChangeExpiringDate = (date, dateString) => {
    setExpiringDate(dateString);
  };

  const onChangeOpeningDate = (date, dateString) => {
    setOpeningDate(dateString);
  };
  const handleDepartmentSubmit = async (values) => {
    setSending(true);
    try {
      // const token = document
      //   .querySelector('meta[name="csrf-token"]')
      //   .getAttribute("content");
      // const response = await axios.post("/create/hire/department", values, {
      //   headers: {
      //     "X-CSRF-TOKEN": token,
      //     "Content-Type": "application/json",
      //   },
      // });
      // if (response.status === 200 || response.status === 201) {
      //   message.success("Department added successfully");
      //   setIsDepartmentModalVisible(false);
      //   setSending(false);
      //   fetchDepartments();
      // } else {
      //   message.error("Failed to add department");
      // }
    } catch (error) {
      message.error("Error: Failed to add department");
    }
  };
  const manuscriptData = [
    {
      key: "1",
      field: "Manuscript ID",
      value: "dfvd",
    },
    {
      key: "2",
      field: "Manuscript Title",
      value: "Research Paper",
    },
    {
      key: "3",
      field: "Main Subjects",
      value: "Biochemical engineering / Biomaterials",
    },
    {
      key: "4",
      field: "Abstract",
      value:
        "Insert abstract text here with long content as shown in the screenshots.",
    },
    {
      key: "5",
      field: "Keywords",
      value: "Insert keywords here.",
    },
  ];

  const authorsData = [
    {
      key: "1",
      name: "Essien, Abasiama",
      email: "essienabasiama11@gmail.com",
      degree: "BSc",
      position: "Professor",
      phone: "09036894661",
      country: "Nigeria",
      affiliation: "Add Affiliation Here",
    },
  ];

  const filesData = [
    {
      key: "1",
      fileType: "Manuscript Main File",
      fileName: "Module 1.docx",
      size: "24.29 KB",
    },
    {
      key: "2",
      fileType: "Title Page",
      fileName: "Editor_030943.docx",
      size: "12.26 KB",
    },
  ];
  const handleSubmit = async () => {
    setSending(true);
    try {
      const token = document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute("content");
      const values = await form.validateFields();
      const formattedData = {
        ...formData,
        opening_date: opening_date,
        expiring_date: expiring_date,
      };

      // await axios.post("/create/job-opening", formattedData, {
      //   headers: {
      //     "X-CSRF-Token": token,
      //   },
      // });
      message.success("Job opening created successfully");
      form.resetFields();
      setCurrent(0);
      setSending(false);
    } catch (error) {
      console.log(error);
      setSending(false);
      message.error("Failed to create job opening");
    }
  };

  const handleKeyPress = (event) => {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  };

  const styles = {
    container: {
      display: "flex",
      justifyContent: "space-around",
      fontFamily: "Arial, sans-serif",
      fontSize: "14px",
      fontWeight: 400,
      paddingBottom: 20,
    },
    item: {
      marginRight: "5px",
    },
  };
  const renderFormItem = (name, label, placeholder, type = "input") => {
    if (previewJob[name] === "hidden") return null;

    const rules =
      previewJob[name] === "required"
        ? [{ required: true, message: `${label} is required` }]
        : [];

    return (
      <Form.Item name={name} label={label} rules={rules}>
        {type === "input" ? (
          <Input
            placeholder={placeholder}
            disabled
            onKeyPress={name === "phone" ? handleKeyPress : undefined}
          />
        ) : (
          <Upload disabled>
            <Button icon={<UploadOutlined />}>{placeholder}</Button>
          </Upload>
        )}
      </Form.Item>
    );
  };
  const steps = [
    {
      title: "Select Manuscript Type",
      content: (
        <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
          {/* Section Header */}
          <h3
            style={{ borderBottom: "1px solid #d9d9d9", paddingBottom: "8px" }}
          >
            Select Manuscript Type
          </h3>

          {/* Info Box */}
          <Alert
            message="To submit your manuscript to this journal, you need to complete all the submission steps."
            type="info"
            showIcon
            style={{ margin: "16px 0" }}
          />

          <Form
            layout="vertical"
            form={form}
            style={{ background: "#fff", padding: "20px", borderRadius: "8px" }}
          >
            {/* Form Item */}
            <Form.Item
              label="Select manuscript type"
              name="manuscript_type"
              rules={[
                { required: true, message: "Manuscript type is required" },
              ]}
            >
              <Select
                placeholder="Select manuscript type"
                style={{ height: "50px" }}
              >
                <Select.Option value="research">Research Paper</Select.Option>
                <Select.Option value="review">Review Article</Select.Option>
              </Select>
            </Form.Item>

            {/* Next Button */}
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  width: "100%",
                  height: "45px",
                  background: "rgb(22, 59, 181)",
                }}
              >
                Next
              </Button>
            </Form.Item>
          </Form>
        </div>
      ),
    },
    {
      title: "Enter Manuscript Title",
      content: (
        <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
          {/* Section Header */}
          <h3
            style={{ borderBottom: "1px solid #d9d9d9", paddingBottom: "8px" }}
          >
            Enter Manuscript Title
          </h3>

          {/* Info Box */}
          <Alert
            message="Please enter only the title of your manuscript below. Additional comments may be entered at a later step."
            type="info"
            showIcon
            style={{ margin: "16px 0" }}
          />
          <Form layout="vertical" form={form}>
            <Form.Item
              label="Full Title"
              name="full_title"
              rules={[
                { required: false, message: "Qualifications is required" },
              ]}
            >
              <ReactQuill
                theme="snow"
                value={formData.qualifications}
                onChange={(value) => onChange(value, "qualifications")}
              />
            </Form.Item>

            <Form.Item
              label="Running Title"
              name="running_title"
              rules={[{ required: false, message: "skills is required" }]}
            >
              <ReactQuill
                theme="snow"
                value={formData.skills}
                onChange={(value) => onChange(value, "skills")}
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  width: "100%",
                  height: "45px",
                  background: "rgb(22, 59, 181)",
                }}
              >
                Next
              </Button>
            </Form.Item>
          </Form>
        </div>
      ),
    },
    {
      title: "Add/Remove Authors",
      content: (
        <div>
          <h3
            style={{ borderBottom: "1px solid #d9d9d9", paddingBottom: "8px" }}
          >
            Add/Remove Authors
          </h3>

          {/* Info Box */}
          <div style={{ margin: "16px 0" }}>
            Please enter the name and details of all authors (other than you)
            who contributed to the work reported in your manuscript. After
            entering each author's details, click on Add Author button. After
            entering each author's information, click the Save Author button.
          </div>
          <div style={{ margin: "16px 0" }}>
            By beginning the manuscript submission process, you are
            automatically designated as the Corresponding Author.
          </div>
          <Alert
            message="By changing the Corresponding Author, the manuscript will be removed from your account and added to the new Corresponding Author's account after finishing submission process."
            type="info"
            showIcon
            style={{ margin: "16px 0" }}
          />
          <Form
            form={form}
            layout="vertical"
            style={{ background: "#fff", padding: "20px", borderRadius: "8px" }}
          >
            {/* Email */}
            <Form.Item
              label="Email Address"
              name="email"
              rules={[{ required: true, message: "Email is required" }]}
            >
              <Input placeholder="Enter email address" type="email" />
            </Form.Item>

            {/* Title */}
            <Form.Item
              label="Title"
              name="title"
              rules={[{ required: true, message: "Title is required" }]}
            >
              <Select placeholder="Select title">
                <Option value="mr">Mr.</Option>
                <Option value="ms">Ms.</Option>
                <Option value="dr">Dr.</Option>
              </Select>
            </Form.Item>

            {/* Name Fields */}
            <Form.Item
              label="First Name"
              name="firstName"
              rules={[{ required: true, message: "First Name is required" }]}
            >
              <Input placeholder="Enter first name" />
            </Form.Item>
            <Form.Item label="Middle Name" name="middleName">
              <Input placeholder="Enter middle name" />
            </Form.Item>
            <Form.Item
              label="Last Name"
              name="lastName"
              rules={[{ required: true, message: "Last Name is required" }]}
            >
              <Input placeholder="Enter last name" />
            </Form.Item>

            {/* ORCID */}
            <Form.Item
              label="ORCID"
              name="orcid"
              rules={[
                { required: true, message: "ORCID is required" },
                {
                  pattern: /^\d{4}-\d{4}-\d{4}-\d{4}$/,
                  message: "Invalid ORCID format",
                },
              ]}
            >
              <Input placeholder="0000-0000-0000-0000" />
            </Form.Item>

            {/* Degree */}
            <Form.Item
              label="Degree"
              name="degree"
              rules={[{ required: true, message: "Degree is required" }]}
            >
              <Select placeholder="Select degree">
                <Option value="bachelors">Bachelors</Option>
                <Option value="masters">Masters</Option>
                <Option value="phd">Ph.D.</Option>
              </Select>
            </Form.Item>

            {/* Position */}
            <Form.Item
              label="Position"
              name="position"
              rules={[{ required: true, message: "Position is required" }]}
            >
              <Select placeholder="Select position">
                <Option value="professor">Professor</Option>
                <Option value="researcher">Researcher</Option>
                <Option value="student">Student</Option>
              </Select>
            </Form.Item>

            {/* Phone Numbers */}
            <Form.Item label="Phone" name="phone">
              <Input placeholder="Enter phone number" />
            </Form.Item>
            <Form.Item label="Mobile" name="mobile">
              <Input placeholder="Enter mobile number" />
            </Form.Item>

            {/* Country and City */}
            <Form.Item
              label="Country"
              name="country"
              rules={[{ required: true, message: "Country is required" }]}
            >
              <Select placeholder="Select country">
                <Option value="usa">USA</Option>
                <Option value="uk">UK</Option>
                <Option value="india">India</Option>
              </Select>
            </Form.Item>
            <Form.Item label="City" name="city">
              <Input placeholder="Enter city" />
            </Form.Item>

            {/* Affiliation */}
            <Form.Item
              label="Affiliation"
              name="affiliation"
              rules={[{ required: true, message: "Affiliation is required" }]}
            >
              <ReactQuill theme="snow" />
            </Form.Item>

            {/* Checkbox */}
            <Form.Item name="correspondingAuthor" valuePropName="checked">
              <Checkbox>This author is a Corresponding Author</Checkbox>
            </Form.Item>

            {/* Buttons */}
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                icon={<SaveOutlined />}
                style={{ marginRight: "10px" }}
              >
                Save Author
              </Button>
              <Button
                htmlType="button"
                onClick={onReset}
                icon={<RedoOutlined />}
              >
                Reset
              </Button>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  width: "100%",
                  height: "45px",
                  background: "rgb(22, 59, 181)",
                }}
              >
                Next
              </Button>
            </Form.Item>
          </Form>
        </div>
      ),
    },
    {
      title: "Enter Abstract",
      content: (
        <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
          {/* Section Header */}
          <h3
            style={{ borderBottom: "1px solid #d9d9d9", paddingBottom: "8px" }}
          >
            Enter the submission abstract
          </h3>

          {/* Info Box */}
          <div style={{ margin: "16px 0" }}>
            Submitting an abstract is required for submission.
          </div>
          <Alert
            message="Please enter the abstract of your manuscript into the text box below. The abstract may be cut and pasted from a word processing program; however, the formatting will be lost."
            type="info"
            showIcon
            style={{ margin: "16px 0" }}
          />
          <Alert
            message=" Abstract word limit is 150 to 250 words."
            type="warning"
            showIcon
            style={{ margin: "16px 0" }}
          />

          <Form
            layout="vertical"
            form={form}
            style={{ background: "#fff", padding: "20px", borderRadius: "8px" }}
          >
            {/* Form Item */}

            <Form.Item
              label=""
              name="abstract_text"
              style={{}}
              rules={[{ required: true, message: "Affiliation is required" }]}
            >
              <ReactQuill theme="snow" />
            </Form.Item>
            {/* Next Button */}
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  width: "100%",
                  height: "45px",
                  background: "rgb(22, 59, 181)",
                }}
              >
                Next
              </Button>
            </Form.Item>
          </Form>
        </div>
      ),
    },
    {
      title: "Enter Keywords",
      content: (
        <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
          {/* Section Header */}
          <h3
            style={{ borderBottom: "1px solid #d9d9d9", paddingBottom: "8px" }}
          >
            Enter submission keywords
          </h3>

          {/* Info Box */}
          <div style={{ margin: "16px 0" }}>
            Keywords must be separated by semicolons or commas.
          </div>
          <Alert
            message=" Keywords should not repeat the words of manuscript title. 5 to 6 Keywords"
            type="info"
            showIcon
            style={{ margin: "16px 0" }}
          />

          <Form
            layout="vertical"
            form={form}
            style={{ background: "#fff", padding: "20px", borderRadius: "8px" }}
          >
            <Form.Item>
              <Input
                value={inputValue}
                onChange={handleInputChange}
                onPressEnter={handleInputConfirm}
                placeholder="Type a keyword and press Enter"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  alignItems: "center",
                  height: "auto",
                }}
                prefix={
                  <div
                    style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}
                  >
                    {tags.map((tag) => (
                      <Tag
                        key={tag}
                        closable
                        onClose={() => handleClose(tag)}
                        style={{ marginBottom: "4px" }}
                      >
                        {tag}
                      </Tag>
                    ))}
                  </div>
                }
              />
            </Form.Item>

            {/* Next Button */}
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  width: "100%",
                  height: "45px",
                  background: "rgb(22, 59, 181)",
                }}
              >
                Next
              </Button>
            </Form.Item>
          </Form>
        </div>
      ),
    },
    {
      title: "Select Related Subjects",
      content: (
        <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
          {/* Section Header */}
          <h3
            style={{ borderBottom: "1px solid #d9d9d9", paddingBottom: "8px" }}
          >
            Select the subjects related to your submission
          </h3>

          <Form
            layout="vertical"
            form={form}
            style={{ background: "#fff", padding: "20px", borderRadius: "8px" }}
          >
            <Form.Item
              label="Please select the subject related to your manuscript."
              name="subjects"
              style={{}}
              rules={[{ required: true, message: "subjects is required" }]}
            >
              <Select
                mode="multiple"
                showSearch
                placeholder="Select or search subjects"
                onChange={handleChange}
                style={{ width: "100%", height: "50px" }}
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.children.toLowerCase().includes(input.toLowerCase())
                }
              >
                {subjects.map((subject) => (
                  <Option key={subject} value={subject}>
                    {subject}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              label=""
              name="moreSubject"
              style={{}}
              rules={[{ required: true, message: "Affiliation is required" }]}
            >
              <Input
                placeholder="Enter one or more subject(s) if you like:"
                value={formData.hiring_manager}
                onChange={(e) => onChange(e.target.value, "hiring_manager")}
              />
            </Form.Item>
            {/* Next Button */}
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  width: "100%",
                  height: "45px",
                  background: "rgb(22, 59, 181)",
                }}
              >
                Next
              </Button>
            </Form.Item>
          </Form>
        </div>
      ),
    },
    {
      title: "Additional Comments",
      content: (
        <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
          {/* Section Header */}
          <h3
            style={{ borderBottom: "1px solid #d9d9d9", paddingBottom: "8px" }}
          >
            Enter Enter the additional comments on your submission
          </h3>

          {/* Info Box */}

          <Alert
            message="Please enter any comments you would like to send to the editorial office.
These comments will not appear in your manuscript."
            type="info"
            showIcon
            style={{ margin: "16px 0" }}
          />

          <Form
            layout="vertical"
            form={form}
            style={{ background: "#fff", padding: "20px", borderRadius: "8px" }}
          >
            <Form.Item
              label="Enter your content"
              name="content"
              rules={[{ required: true, message: "Content is required" }]}
            >
              <ReactQuill
                value={formData.qualifications}
                onChange={(value) => onChange(value, "qualifications")}
                theme="snow"
              />
            </Form.Item>
            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(
                          new Error("You must agree to the terms")
                        ),
                },
              ]}
            >
              <Checkbox>
                I have read and agreed to the <b>terms and conditions</b>
              </Checkbox>
            </Form.Item>
            {/* Next Button */}
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  width: "100%",
                  height: "45px",
                  background: "rgb(22, 59, 181)",
                }}
              >
                Next
              </Button>
            </Form.Item>
          </Form>
        </div>
      ),
    },
    {
      title: "Suggested Reviewer",
      content: (
        <div>
          <h3
            style={{ borderBottom: "1px solid #d9d9d9", paddingBottom: "8px" }}
          >
            Suggest Reviewers
          </h3>

          {/* Info Box */}
          <div style={{ margin: "16px 0" }}>
            Please suggest potential reviewers for this submission. (At least 5
            suggested reviewers)
          </div>
          <div style={{ margin: "16px 0" }}>
            Use the fields below to give us contact information for each
            suggested reviewer.
          </div>
          <Alert
            message="Journal may not use your suggestions, but your help is appreciated and may speed up the selection of appropriate reviewers."
            type="info"
            showIcon
            style={{ margin: "16px 0" }}
          />
          <Form
            form={form}
            layout="vertical"
            style={{ background: "#fff", padding: "20px", borderRadius: "8px" }}
          >
            {/* Email */}
            <div className="form-row">
              <Form.Item
                label="Email Address"
                name="email"
                className="form-item-half"
                rules={[{ required: true, message: "Email is required" }]}
              >
                <Input placeholder="Enter email address" type="email" />
              </Form.Item>

              {/* Title */}
              <Form.Item
                label="Title"
                name="title"
                className="form-item-half"
                rules={[{ required: true, message: "Title is required" }]}
              >
                <Select placeholder="Select title">
                  <Option value="mr">Mr.</Option>
                  <Option value="ms">Ms.</Option>
                  <Option value="dr">Dr.</Option>
                </Select>
              </Form.Item>
            </div>
            <div className="form-row">
              <Form.Item
                label="First Name"
                name="firstName"
                className="form-item-half"
                rules={[{ required: true, message: "First Name is required" }]}
              >
                <Input placeholder="Enter first name" />
              </Form.Item>
              <Form.Item
                label="Middle Name"
                name="middleName"
                className="form-item-half"
              >
                <Input placeholder="Enter middle name" />
              </Form.Item>
            </div>
            <div className="form-row">
              <Form.Item
                label="Last Name"
                name="lastName"
                className="form-item-half"
                rules={[{ required: true, message: "Last Name is required" }]}
              >
                <Input placeholder="Enter last name" />
              </Form.Item>

              <Form.Item
                label="ORCID"
                className="form-item-half"
                name="orcid"
                rules={[
                  { required: true, message: "ORCID is required" },
                  {
                    pattern: /^\d{4}-\d{4}-\d{4}-\d{4}$/,
                    message: "Invalid ORCID format",
                  },
                ]}
              >
                <Input placeholder="0000-0000-0000-0000" />
              </Form.Item>
            </div>
            {/* Degree */}
            <div className="form-row">
              <Form.Item
                label="Degree"
                className="form-item-half"
                name="degree"
                rules={[{ required: true, message: "Degree is required" }]}
              >
                <Select placeholder="Select degree">
                  <Option value="bachelors">Bachelors</Option>
                  <Option value="masters">Masters</Option>
                  <Option value="phd">Ph.D.</Option>
                </Select>
              </Form.Item>

              {/* Position */}
              <Form.Item
                label="Position"
                name="position"
                className="form-item-half"
                rules={[{ required: true, message: "Position is required" }]}
              >
                <Select placeholder="Select position">
                  <Option value="professor">Professor</Option>
                  <Option value="researcher">Researcher</Option>
                  <Option value="student">Student</Option>
                </Select>
              </Form.Item>
            </div>
            <div className="form-row">
              <Form.Item label="Phone" name="phone" className="form-item-half">
                <Input placeholder="Enter phone number" />
              </Form.Item>
              <Form.Item
                label="Mobile"
                name="mobile"
                className="form-item-half"
              >
                <Input placeholder="Enter mobile number" />
              </Form.Item>
            </div>

            <div className="form-row">
              <Form.Item
                label="Country"
                name="country"
                className="form-item-half"
                rules={[{ required: true, message: "Country is required" }]}
              >
                <Select placeholder="Select country">
                  <Option value="usa">USA</Option>
                  <Option value="uk">UK</Option>
                  <Option value="india">India</Option>
                </Select>
              </Form.Item>
              <Form.Item label="City" name="city" className="form-item-half">
                <Input placeholder="Enter city" />
              </Form.Item>
            </div>

            <Form.Item
              label="Affiliation"
              name="affiliation"
              rules={[{ required: true, message: "Affiliation is required" }]}
            >
              <ReactQuill theme="snow" />
            </Form.Item>
            <Form.Item
              label="Reason"
              name="reason"
              rules={[{ required: false }]}
            >
              <ReactQuill theme="snow" />
            </Form.Item>

            {/* Buttons */}
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                icon={<SaveOutlined />}
                style={{ marginRight: "10px" }}
              >
                Save Reviewer
              </Button>
              <Button
                htmlType="button"
                onClick={onReset}
                icon={<RedoOutlined />}
              >
                Reset
              </Button>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  width: "100%",
                  height: "45px",
                  background: "rgb(22, 59, 181)",
                }}
              >
                Next
              </Button>
            </Form.Item>
          </Form>
        </div>
      ),
    },
    {
      title: "Attach Files",
      content: (
        <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
          {/* Section Header */}
          <h3
            style={{ borderBottom: "1px solid #d9d9d9", paddingBottom: "8px" }}
          >
            Attach Files
          </h3>

          {/* Info Box */}
          <div style={{ margin: "16px 0" }}>
            Please upload all the files related to your manuscript here.
          </div>
          <Alert
            message="Allowed file type(s) for Manuscript Main File is only: doc, docx"
            type="info"
            showIcon
            style={{ margin: "16px 0" }}
          />
          <Alert
            message="Authors information should not be placed in Manuscript Main File. Upload authors information via Title Page."
            showIcon
            type="warning"
            style={{ margin: "16px 0" }}
          />

          <Form
            layout="vertical"
            form={form}
            onFinish={handleSubmit}
            style={{ background: "#fff", padding: "20px", borderRadius: "8px" }}
          >
            {/* File Type Dropdown */}
            <Form.Item
              label="Select File Type"
              name="file_type"
              rules={[{ required: true, message: "File type is required" }]}
            >
              <Select placeholder="Select file type" style={{ height: "50px" }}>
                <Select.Option value="pdf">PDF</Select.Option>
                <Select.Option value="doc">Word Document</Select.Option>
                <Select.Option value="ppt">PowerPoint</Select.Option>
              </Select>
            </Form.Item>

            {/* File Description (ReactQuill) */}
            <Form.Item
              label="File Description"
              name="file_description"
              rules={[
                { required: true, message: "File description is required" },
              ]}
            >
              <ReactQuill
                theme="snow"
                placeholder="Write a description for the file..."
              />
            </Form.Item>

            {/* Drag and Drop for Multiple Files */}
            <Form.Item
              label="Upload Files"
              name="files"
              rules={[
                { required: true, message: "Please upload at least one file" },
              ]}
            >
              <Upload.Dragger
                name="files"
                multiple
                beforeUpload={() => false} // Prevent auto-upload for custom handling
                onChange={(info) => {
                  const { status } = info.file;
                  if (status === "done") {
                    message.success(
                      `${info.file.name} file uploaded successfully.`
                    );
                  } else if (status === "error") {
                    message.error(`${info.file.name} file upload failed.`);
                  }
                }}
              >
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag files to this area to upload
                </p>
                <p className="ant-upload-hint">
                  You can upload multiple files simultaneously.
                </p>
              </Upload.Dragger>
            </Form.Item>

            {/* Submit Button */}
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  width: "100%",
                  height: "45px",
                  background: "rgb(22, 59, 181)",
                }}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      ),
    },
    {
      title: "Cover Letter and Checklist",
      content: (
        <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
          {/* Section Header */}
          <h3
            style={{ borderBottom: "1px solid #d9d9d9", paddingBottom: "8px" }}
          >
            Enter Enter the additional comments on your submission
          </h3>

          {/* Info Box */}

          <Alert
            message={
              <div>
                <p style={{ marginBottom: "8px", fontWeight: "bold" }}>
                  Dear Add Name of Editor-in-Chief or Section Editor
                </p>
                <p>Editor-in-Chief or Section Editor</p>
                <p>
                  Add a brief note about the manuscript. Note should not be more
                  than 5 lines. For example:
                </p>
                <p>
                  Particles attrition is a complex phenomenon which widely
                  occurs in many industrial processes. This paper presents an
                  algorithm for CFD-DEM modelling of attrition in fluidized
                  beds, aiming to give first applicable method to predict
                  particle breakage in fluidized beds. An improved CFD-DEM model
                  for simulation of particles attrition is presented in a
                  jet-in-fluidized bed.
                </p>
                <p>
                  The presented manuscript is original and unpublished and is
                  not being considered for publication elsewhere. Attached
                  please find the manuscript entitled "Manuscript Title"
                  prepared by Add Name of all Authors, to be considered for
                  possible publication in Journal of Chemical and Petroleum
                  Engineering (JChPE).
                </p>
                <p>
                  Regards, <br />
                  Name of Corresponding Author, <br />
                  Title of Corresponding Author, <br />
                  Affiliation, <br />
                  P.O. Box: ..., <br />
                  Name of City, Name of Country, <br />
                  Tel.: and Fax: ..., <br />
                  Email:
                </p>
              </div>
            }
            type="info"
            showIcon
            style={{ margin: "16px 0" }}
          />

          <Form
            layout="vertical"
            form={form}
            onFinish={handleSubmit}
            style={{ marginTop: "16px" }}
          >
            {/* ReactQuill Editor */}
            <Form.Item
              label="Cover Letter"
              name="cover_letter"
              rules={[{ required: true, message: "Cover letter is required" }]}
            >
              <ReactQuill
                theme="snow"
                placeholder="Write your cover letter here..."
                style={{ minHeight: "200px" }}
              />
            </Form.Item>

            {/* Submit Button */}
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  width: "100%",
                  height: "45px",
                  background: "rgb(22, 59, 181)",
                }}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      ),
    },
    {
      title: "Finish Submission",
      content: (
        <div>
          <Alert
            message="You cannot finish your submission until completing the: At least 5 suggested reviewers; Attach Files (Cover Letter)"
            type="error"
            showIcon
            style={{ marginBottom: "16px" }}
          />

          <Card title="Your Submission Summary">
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

            <Typography.Title level={5}>Authors</Typography.Title>
            <Table
              dataSource={authorsData}
              columns={[
                {
                  title: "Name",
                  dataIndex: "name",
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
                  title: "Position",
                  dataIndex: "position",
                  key: "position",
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
                {
                  title: "Affiliation",
                  dataIndex: "affiliation",
                  key: "affiliation",
                },
              ]}
              pagination={false}
              bordered
              size="small"
            />

            <Divider />

            <Typography.Title level={5}>Files</Typography.Title>
            <Table
              dataSource={filesData}
              columns={[
                {
                  title: "File Type",
                  dataIndex: "fileType",
                  key: "fileType",
                },
                {
                  title: "File Name",
                  dataIndex: "fileName",
                  key: "fileName",
                },
                {
                  title: "Size",
                  dataIndex: "size",
                  key: "size",
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
  const handlePreview = async () => {
    try {
      setPreviewVisible(true);
    } catch (error) {
      message.error("Please complete all required fields before previewing");
    }
  };

  const handleSaveDraft = async () => {
    try {
      const formattedData = {
        ...formData,
        opening_date: opening_date,
        expiring_date: expiring_date,
      };
      localStorage.setItem("jobOpeningDraft", JSON.stringify(formattedData));
      setPreviewJob(formattedData);
      message.success("Draft saved successfully");
    } catch (error) {
      message.error("Failed to save draft");
    }
  };
  const [activeItemId, setActiveItemId] = useState('1');
  return (
    <>
      <div className="page-container">
        <SideBar
          darkModeTheme={darkMode}
          toggleDarkMode={toggleDarkMode}
          activeItemId={activeItemId}
          setActiveItemId={setActiveItemId}
        />
        <div className={`body ${darkMode ? "dark-mode" : "light-mode"}`}>
          <JournalHeader darkModeTheme={darkMode} />
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              padding: "10px",
              marginTop: "10vh",
            }}
          >
            <Button
              type="primary"
              onClick={showDrawer}
              style={{ padding: "20px", background: "#163bb5" }}
            >
              Submit Manuscript
            </Button>

            <Drawer
              title="Submit Manuscript"
              placement="right"
              onClose={closeDrawer}
              visible={drawerVisible}
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
                  className="steps-card"
                  style={{
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    borderRadius: "8px",
                    marginBottom: "16px",
                    border: "1px solid #edf2f7",
                  }}
                >
                  <Steps
                    direction="vertical"
                    current={current}
                    className="steps-list"
                  >
                    {steps.map((item, index) => (
                      <Step
                        key={index}
                        title={item.title}
                        onClick={() => setCurrent(index)}
                        className="step-item"
                      />
                    ))}
                  </Steps>
                </Card>
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
              <div
                className="drawer-footer"
                style={{
                  display: "flex",
                  flexDirection: isSmallScreen ? "column" : "row",
                  gap: "10px",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderTop: "1px solid #f0f0f0",
                  padding: "16px",
                }}
              >
                <Button
                  icon={<EyeOutlined />}
                  onClick={handlePreview}
                  disabled={!previewJob}
                >
                  Preview
                </Button>
                <div>
                  <Button style={{ margin: "0 8px" }} onClick={handleSaveDraft}>
                    Save as Draft
                  </Button>
                  {current > 0 && (
                    <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
                      Previous
                    </Button>
                  )}
                  {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => next()}>
                      Next step
                    </Button>
                  )}
                  {current === steps.length - 1 && (
                    <Button type="primary" onClick={handleSubmit}>
                      {sending ? "Submitting..." : "Submit"}
                    </Button>
                  )}
                </div>
              </div>

              <Modal
                title="Create New Department"
                visible={isDepartmentModalVisible}
                onCancel={handleDepartmentModalCancel}
                footer={null}
              >
                <Form layout="vertical" onFinish={handleDepartmentSubmit}>
                  <Form.Item
                    name="name"
                    label="Department"
                    rules={[
                      {
                        required: true,
                        message: "Please enter department name",
                      },
                    ]}
                  >
                    <Input placeholder="Enter Department" />
                  </Form.Item>
                  <Form.Item>
                    <Button onClick={handleDepartmentModalCancel}>
                      Cancel
                    </Button>
                    <Button
                      type="primary"
                      htmlType="submit"
                      style={{ marginLeft: 8 }}
                    >
                      {sending ? "Saving..." : "Save"}
                    </Button>
                  </Form.Item>
                </Form>
              </Modal>
            </Drawer>
          </div>
          <MainBody
            darkModeTheme={darkMode}
            activeItemId={activeItemId}
            setActiveItemId={setActiveItemId}
          />
        </div>
      </div>
    </>
  );
}

export default SubmitManuscript;
