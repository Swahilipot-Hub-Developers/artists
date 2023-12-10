import Head from "next/head";
import { useState } from "react";
import axios from "axios";
import Router from "next/router";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    lastName: "",
    email: "",
    password: "",
    password2: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/signup",
        formData
      );

      if (response.status === 200) {
        // Successful signup, handle token or session information here
        const data = response.data;
        console.log(data);
        // Store token/session info securely (localStorage, cookies, etc.)
        setSuccessMessage("Registration successful!"); // Set success message
        setErrorMessage(""); // Clear any previous error message
        setFormData({
          // Clear form fields after successful registration
          username: "",
          lastName: "",
          email: "",
          password: "",
          password2: "",
        });
        // Clear success message after 3 seconds
        setTimeout(() => {
          setSuccessMessage("");
        }, 2000);

        // Redirect to a dashboard or profile page after successful login
        Router.push("/login");
      } else {
        // Handle error response
        console.error("Signup failed:", response.data);
        setErrorMessage("Signup failed. Please try again.");
        setSuccessMessage("");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      if (error.response && error.response.status === 400) {
        setErrorMessage("A user with that username already exists.");
      } else {
        setErrorMessage("Signup failed. Please try again.");
      }
    }
  };

  return (
    <>
      <Head>
        <title>SignUp</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8sh+WyZ5eJRM63Xs9E9KGdVXTt4u"
          crossOrigin="anonymous"
        />
      </Head>

      <section
        className="h-100 gradient-form"
        style={{ backgroundColor: "#eee" }}
      >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center">
                        <img
                          src="/logo/logo.png"
                          style={{ width: "185px" }}
                          alt="logo"
                        />
                        <h4 className="mt-1 mb-5 pb-1">
                          Join Swahilipot Hub Artists
                        </h4>
                      </div>

                      <form onSubmit={handleSubmit}>
                        <p>Create Your Account Here</p>

                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            id="username"
                            className="form-control"
                            placeholder="Username"
                            value={formData.username}
                            onChange={handleChange}
                          />
                          <label className="form-label" htmlFor="username">
                            Username
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            id="lastName"
                            className="form-control"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                          />
                          <label className="form-label" htmlFor="lastName">
                            Last Name
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="email"
                            className="form-control"
                            placeholder="Email address"
                            value={formData.email}
                            onChange={handleChange}
                          />
                          <label className="form-label" htmlFor="email">
                            Email
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="password"
                            className="form-control"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                          />
                          <label className="form-label" htmlFor="password">
                            Password
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="password2"
                            className="form-control"
                            placeholder="Confirm Password"
                            value={formData.password2}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="form-check mb-4">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="termsCheckbox"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="termsCheckbox"
                          >
                            I agree to the{" "}
                            <a href="#terms">terms and conditions</a>
                          </label>
                        </div>

                        {/* Input fields... */}
                        {/* Success and error messages */}
                        {successMessage && (
                          <div className="alert alert-success">
                            {successMessage}
                          </div>
                        )}
                        {errorMessage && (
                          <div className="alert alert-danger">
                            {errorMessage}
                          </div>
                        )}

                        <div className="text-center pt-1 mb-3">
                          <button
                            className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-2"
                            type="submit"
                          >
                            Sign Up
                          </button>
                        </div>

                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2">Already have an account?</p>
                          <a href="/auth/login" className="btn btn-outline-danger">
                            Log In
                          </a>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div
                    className="col-lg-6 d-flex align-items-center gradient-custom-2"
                    style={{
                      background: "linear-gradient(to right, #4A90E2, #1E467A)",
                    }}
                  >
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4 className="mb-4">
                        "Unlock Your Canvas, Create Your Profile: Where Art
                        Meets Identity."
                      </h4>
                      <p className="small mb-0">
                        "Embark on a Journey Across All Artistic Horizons!
                        Unleash the full spectrum of your creativity, where each
                        creation becomes a chapter in your visual autobiography.
                        Connect with a community that appreciates the vast
                        tapestry of artistic expression, and be part of a
                        platform that celebrates the beauty in every
                        brushstroke, photograph, lyric, or sculpture. Your
                        artistic odyssey awaits—sign up today and let your
                        creativity thrive in a space where all forms of art find
                        their voice and resonate in a harmonious symphony of
                        self-expression."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUpForm;
