/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Input, Select, Checkbox, Tooltip, message } from "antd";
// import "antd/dist/reset.css";
import { APIURL } from "../../constants";
const { Option } = Select;

function Signup() {
  const [proceed, setProceed] = useState(false);
  const inputStyle = { width: "100%", height: "45px" };
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    title: "",
    address: "",
    rememberMe: false,
    first_name: "",
    middle: "",
    last_name: "",
    degree: "",
    specialty: "",
    phone: "",
    country: "",
    orcid: "",
    confirm_email: "",
    alternative_email: "",
    username: "",
    available_as_reviewer: false,
    receive_news: false,
    comments: "",
  });

  const [errors, setErrors] = useState({});

  const handleProceed = (e) => {
    e.preventDefault();
    // Simple validation before proceeding
    if (
      !formData.email ||
      !formData.password ||
      formData.password !== formData.confirmPassword
    ) {
      setErrors({
        ...errors,
        email: !formData.email ? "Email is required" : "",
        password: !formData.password ? "Password is required" : "",
        confirmPassword:
          formData.password !== formData.confirmPassword
            ? "Passwords do not match"
            : "",
      });
      return;
    }
    setProceed(true);
  };
  const handleOrcidChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    const formattedValue = value
      .match(/.{1,4}/g)
      ?.join("-")
      .substr(0, 19);

    setFormData({ ...formData, orcid: formattedValue });
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (value, field) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };
  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.first_name) newErrors.first_name = "First name is required";
    if (!formData.last_name) newErrors.last_name = "Last name is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.orcid) newErrors.orcid = "ORCID is required";
    if (!formData.confirm_email)
      newErrors.confirm_email = "Confirm email is required";
    if (formData.confirm_email !== formData.email)
      newErrors.confirm_email = "Email addresses do not match";
    if (!formData.username) newErrors.username = "Username is required";
    if (formData.username && formData.username.length < 8)
      newErrors.username = "Username must be at least 8 characters long";

    // You can add more validation as needed

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleRegister = async (e) => {
    e.preventDefault();

    console.log("Registration data:", formData);
    if (validateForm()) {
      try {
        const response = await fetch(`${APIURL}/auth/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
          message.success(
            "Successful Registration, Kindly login to access the Journal"
          );
          navigate("/login");
          console.log("Registration successful", data);
          setFormData({
            email: "",
            password: "",
            confirmPassword: "",
            title: "",
            address: "",
            rememberMe: false,
            first_name: "",
            middle: "",
            last_name: "",
            degree: "",
            specialty: "",
            phone: "",
            country: "",
            orcid: "",
            confirm_email: "",
            alternative_email: "",
            username: "",
            available_as_reviewer: false,
            receive_news: false,
            comments: "",
          });
        } else {
          console.error("Registration failed", data);
        }
      } catch (error) {
        console.error("Error during registration:", error);
      }
    } else {
      message.error("Please fix the errors in the form.");
    }
  };

  return (
    <div id="" className="page">
      {!proceed ? (
        <div className="form-container max-w-[520px] px-4 sm:px-8 xl:px-0 shadow-lg p-4 bg-white rounded">
          <div className="form-container-item rounded-xl bg-white shadow-box p-4 sm:p-7.5 xl:p-12.5">
            <div className="text-center mb-9">
              <h1 className="font-bold text-heading-6 sm:text-heading-4 lg:text-heading-3 text-dark mb-3.5">
                Sign up
              </h1>
              <p className="text-body">Create your account</p>
            </div>

            <button
              disabled
              className="svg-btn btn btn-block d-flex align-items-center justify-content-center text-dark p-3 rounded border "
            >
              <svg
                width="23"
                height="22"
                viewBox="0 0 23 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_709_8846)">
                  <path
                    d="M22.5001 11.2438C22.5134 10.4876 22.4338 9.73256 22.2629 8.995H11.7246V13.0771H17.9105C17.7933 13.7929 17.5296 14.478 17.1352 15.0914C16.7409 15.7047 16.224 16.2335 15.6158 16.646L15.5942 16.7827L18.9264 19.3124L19.1571 19.335C21.2772 17.4161 22.4997 14.5926 22.4997 11.2438"
                    fill="#4285F4"
                  ></path>
                  <path
                    d="M11.7245 22C14.755 22 17.2992 21.0221 19.1577 19.3355L15.6156 16.6464C14.6679 17.2944 13.3958 17.7467 11.7245 17.7467C10.3051 17.7385 8.92433 17.2926 7.77814 16.472C6.63195 15.6515 5.77851 14.4981 5.33892 13.1755L5.20737 13.1865L1.74255 15.8142L1.69727 15.9376C2.63043 17.7602 4.06252 19.2925 5.83341 20.3631C7.60429 21.4337 9.64416 22.0005 11.7249 22"
                    fill="#34A853"
                  ></path>
                  <path
                    d="M5.33889 13.1755C5.09338 12.4753 4.96669 11.7404 4.96388 11C4.9684 10.2608 5.09041 9.52685 5.32552 8.8245L5.31927 8.67868L1.81196 6.00867L1.69724 6.06214C0.910039 7.5938 0.5 9.28491 0.5 10.9999C0.5 12.7148 0.910039 14.406 1.69724 15.9376L5.33889 13.1755Z"
                    fill="#FBBC05"
                  ></path>
                  <path
                    d="M11.7249 4.25337C13.3333 4.22889 14.8888 4.8159 16.065 5.89121L19.2329 2.86003C17.2011 0.992106 14.5106 -0.0328008 11.7249 3.27798e-05C9.64418 -0.000452376 7.60433 0.566279 5.83345 1.63686C4.06256 2.70743 2.63046 4.23965 1.69727 6.06218L5.32684 8.82455C5.77077 7.50213 6.62703 6.34962 7.77491 5.5295C8.9228 4.70938 10.3044 4.26302 11.7249 4.25337Z"
                    fill="#EB4335"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_709_8846">
                    <rect
                      width="22"
                      height="22"
                      fill="white"
                      transform="translate(0.5)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>{" "}
              Sign in with Google
            </button>

            <button className="svg-btn btn btn-block d-flex align-items-center justify-content-center text-dark p-3 rounded border">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.9997 1.83331C5.93773 1.83331 1.83301 6.04119 1.83301 11.232C1.83301 15.3847 4.45954 18.9077 8.10178 20.1505C8.55988 20.2375 8.72811 19.9466 8.72811 19.6983C8.72811 19.4743 8.71956 18.7338 8.71567 17.9485C6.16541 18.517 5.6273 16.8395 5.6273 16.8395C5.21032 15.7532 4.60951 15.4644 4.60951 15.4644C3.77785 14.8811 4.6722 14.893 4.6722 14.893C5.59272 14.9593 6.07742 15.8615 6.07742 15.8615C6.89499 17.2984 8.22184 16.883 8.74493 16.6429C8.82718 16.0353 9.06478 15.6208 9.32694 15.3861C7.2909 15.1484 5.15051 14.3425 5.15051 10.7412C5.15051 9.71509 5.5086 8.87661 6.09503 8.21844C5.99984 7.98167 5.68611 7.02577 6.18382 5.73115C6.18382 5.73115 6.95358 5.47855 8.70532 6.69458C9.43648 6.48627 10.2207 6.3819 10.9997 6.37836C11.7787 6.3819 12.5635 6.48627 13.2961 6.69458C15.0457 5.47855 15.8145 5.73115 15.8145 5.73115C16.3134 7.02577 15.9995 7.98167 15.9043 8.21844C16.4921 8.87661 16.8477 9.715 16.8477 10.7412C16.8477 14.351 14.7033 15.146 12.662 15.3786C12.9909 15.6702 13.2838 16.2423 13.2838 17.1191C13.2838 18.3766 13.2732 19.3888 13.2732 19.6983C13.2732 19.9485 13.4382 20.2415 13.9028 20.1492C17.5431 18.905 20.1663 15.3833 20.1663 11.232C20.1663 6.04119 16.0621 1.83331 10.9997 1.83331Z"
                  fill="#15171A"
                ></path>
              </svg>
              Sign in with Github
            </button>

            <div className="position-relative text-center mt-4">
              <div
                className="position-absolute w-100"
                style={{
                  top: "50%",
                  height: "1px",
                  backgroundColor: "#e0e0e0",
                }}
              ></div>
              <span className="bg-white px-2 position-relative text-muted">
                Or sign in with email
              </span>
            </div>

            <div className="mt-4">
              <form>
                <div className="mb-4">
                  <label className="d-block font-weight-bold text-dark mb-2">
                    Email
                  </label>
                  <Input
                    value={formData.email}
                    onChange={handleInputChange}
                    name="email"
                    placeholder="Email Address"
                    style={inputStyle}
                  />
                  {errors.email && (
                    <span className="text-danger">{errors.email}</span>
                  )}
                </div>

                <div className="mb-4">
                  <label className="d-block font-weight-bold text-dark mb-2">
                    Password
                  </label>
                  <Input
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    name="password"
                    placeholder="Password"
                    style={inputStyle}
                  />
                  {errors.password && (
                    <span className="text-danger">{errors.password}</span>
                  )}
                </div>
                <div className="mb-4">
                  <label className="d-block font-weight-bold text-dark mb-2">
                    Confirm Password
                  </label>
                  <Input
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    style={inputStyle}
                  />
                  {errors.confirmPassword && (
                    <span className="text-danger">
                      {errors.confirmPassword}
                    </span>
                  )}
                </div>

                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="rememberMe"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="rememberMe"
                    >
                      Remember me
                    </label>
                  </div>
                  <a href="#" className="text-dark">
                    Forgot Password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="btn btn-dark btn-block text-white font-weight-bold"
                  onClick={handleProceed}
                >
                  Proceed
                </button>

                <p className="text-center mt-3">
                  Already have an accouint?
                  <a href="/login" className="text-dark ml-1">
                    Sign In
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <motion.div
          className="container mt-5"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h4 className="mb-4 font-weight-bold">Enter your details</h4>
          <form onSubmit={handleRegister}>
            <div className="row">
              {/* Left Column */}
              <div className="col-md-6">
                <div className="form-group">
                  <label>Title</label>
                  <Select
                    name="title"
                    placeholder="-- Select --"
                    style={inputStyle}
                    value={formData.title}
                    onChange={(value) =>
                      setFormData({ ...formData, title: value })
                    }
                  >
                    <Option value="Mr">Mr</Option>
                    <Option value="Ms">Ms</Option>
                    <Option value="Dr">Dr</Option>
                  </Select>
                </div>
                <div className="form-group">
                  <label>First Name *</label>
                  <Input
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    placeholder="Enter your first name"
                    style={inputStyle}
                  />
                  {errors.first_name && (
                    <div className="text-danger">{errors.first_name}</div>
                  )}
                </div>
                <div className="form-group">
                  <label>Middle</label>
                  <Input
                    name="middle"
                    placeholder="Enter your middle name"
                    value={formData.middle}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                </div>
                <div className="form-group">
                  <label>Last Name *</label>
                  <Input
                    name="last_name"
                    placeholder="Enter your last name"
                    value={formData.last_name}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                  {errors.last_name && (
                    <div className="text-danger">{errors.last_name}</div>
                  )}
                </div>
                <div className="form-group">
                  <label>Degree *</label>
                  <Select
                    name="degree"
                    placeholder="-- Select --"
                    style={inputStyle}
                    value={formData.degree}
                    onChange={(value) =>
                      setFormData({ ...formData, degree: value })
                    }
                  >
                    <Option value="Bachelors">Bachelors</Option>
                    <Option value="Masters">Masters</Option>
                    <Option value="PhD">PhD</Option>
                  </Select>
                </div>
                <div className="form-group">
                  <label>Specialty</label>
                  <Select
                    name="specialty"
                    placeholder="-- Select --"
                    style={inputStyle}
                    value={formData.specialty}
                    onChange={(value) =>
                      setFormData({ ...formData, specialty: value })
                    }
                  >
                    <Option value="Specialty1">Specialty 1</Option>
                    <Option value="Specialty2">Specialty 2</Option>
                  </Select>
                </div>
                <div className="form-group">
                  <label>Phone *</label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    style={inputStyle}
                  />
                  {errors.phone && (
                    <div className="text-danger">{errors.phone}</div>
                  )}
                </div>
                <div className="form-group">
                  <label>Country *</label>
                  <Select
                    placeholder="-- Select --"
                    style={inputStyle}
                    name="country"
                    value={formData.country}
                    onChange={(value) =>
                      setFormData({ ...formData, country: value })
                    }
                  >
                    <Option value="US">United States</Option>
                    <Option value="UK">United Kingdom</Option>
                  </Select>
                  {errors.country && (
                    <div className="text-danger">{errors.country}</div>
                  )}
                </div>
              </div>

              {/* Right Column */}
              <div className="col-md-6">
                <div className="form-group">
                  <label>ORCID *</label>
                  <Input
                    placeholder="XXXX-XXXX-XXXX-XXXX"
                    style={inputStyle}
                    name="orcid"
                    value={formData.orcid}
                    onChange={handleOrcidChange}
                    suffix={
                      <Tooltip title="Your ORCID ID">
                        <i className="fas fa-info-circle"></i>
                      </Tooltip>
                    }
                  />
                  {errors.orcid && (
                    <div className="text-danger">{errors.orcid}</div>
                  )}
                </div>

                <div className="form-group">
                  <label>Confirm Email *</label>
                  <Input
                    placeholder="Re-enter email address"
                    style={inputStyle}
                    name="confirm_email"
                    value={formData.confirm_email}
                    onChange={handleChange}
                  />
                  {errors.confirm_email && (
                    <div className="text-danger">{errors.confirm_email}</div>
                  )}
                </div>
                <div className="form-group">
                  <label>Alternative Email Address</label>
                  <Input
                    style={inputStyle}
                    name="alternative_email"
                    placeholder="Alternative Email"
                    value={formData.alternative_email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Username (At least 8 characters) *</label>
                  <Input
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    style={inputStyle}
                    name="username"
                  />
                  {errors.username && (
                    <div className="text-danger">{errors.username}</div>
                  )}
                </div>
                <div className="form-group">
                  <Checkbox
                    name="available_as_reviewer"
                    checked={formData.available_as_reviewer}
                    onChange={handleChange}
                  >
                    Available as Reviewer
                  </Checkbox>
                </div>
                <div className="form-group">
                  <Checkbox
                    name="receive_news"
                    checked={formData.receive_news}
                    onChange={handleChange}
                  >
                    Receive News
                  </Checkbox>
                </div>
                <div className="form-group">
                  <label>Comments</label>
                  <Input.TextArea
                    placeholder="Enter comments"
                    rows={3}
                    style={inputStyle}
                    value={formData.comments}
                    onChange={handleChange}
                    name="comments"
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-block mt-4"
              style={{ background: "#163bb5", height: "45px" }}
            >
              Sign Up
            </button>
          </form>
        </motion.div>
      )}
    </div>
  );
}

export default Signup;
