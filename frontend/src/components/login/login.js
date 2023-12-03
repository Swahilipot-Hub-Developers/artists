import Head from "next/head";
import axios from "axios";
import { useState } from "react";
import Router from "next/router";
import { setCookie } from "nookies";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "", // Change these as per your form fields
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/login",
        formData
      );

      if (response.status === 200) {
        // Successful login handling
        setErrorMessage("");
        const { token } = response.data;

        // Set the received token as a cookie
        setCookie(null, "token", token, {
          maxAge: 30 * 24 * 60 * 60, // Expiry in seconds (e.g., 30 days)
          path: "/",
          secure: true,
          sameSite: "strict",
        });

        setErrorMessage("");
        Router.push("/homepage");
      } else {
        // Handle other possible responses (e.g., invalid credentials)
        setErrorMessage("Invalid credentials. Please try again.");
        Router.push("/login");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage("Error during login. Please try again.");
    }
  };
  return (
    <>
      <Head>
        <title>Login</title>
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
                        <h4 className="mt-1 mb-5 pb-1">Sign In</h4>
                      </div>

                      <form onSubmit={handleLogin}>
                        <p>Please login to your account</p>

                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            id="username"
                            className="form-control"
                            placeholder="Username"
                            value={formData.username}
                            onChange={handleChange}
                          />
                          <label
                            className="form-label"
                            htmlFor="form2Example11"
                          >
                            Username
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
                          <label
                            className="form-label"
                            htmlFor="form2Example22"
                          >
                            Password
                          </label>
                        </div>

                        <div className="text-center pt-1 mb-3">
                          <button
                            className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-2"
                            type="submit"
                          >
                            Log in
                          </button>
                          <div className="d-flex justify-content-between align-items-center">
                            <a className="text-muted" href="#!">
                              Forgot password?
                            </a>
                            <a href="/signup" className="btn btn-link">
                              Create new account
                            </a>
                          </div>
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
                      <h4 className="mb-4">"Welcome Back"</h4>
                      <p className="small mb-0">
                        Immerse yourself in the vibrant world of art, celebrate
                        creativity in all its forms. Experience captivating
                        performances of dance, music, and poetry as we showcase
                        the rich tapestry of artistic expression within our
                        community. Prepare to be inspired and amazed.
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

export default LoginForm;
