import { useState, useEffect } from "react";
import { parseCookies } from "nookies"; // Import parseCookies from nookies
import Router from "next/router";

const fetchUserData = async (token) => {
  const response = await fetch("http://127.0.0.1:8000/api/artist/dashboard", {
    method: "GET",
    headers: {
      Authorization: `Token ${token}`, // Pass authentication token
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch user data");
  }

  return await response.json();
};

const HomePage = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Retrieve the token from the cookie
    const cookies = parseCookies();
    const token = cookies.token || ""; // Access the 'token' cookie

    // console.log('Token from cookie:', token);

    // Fetch user data when the component mounts
    if (token) {
      fetchUserData(token)
        .then((data) => {
          setUserData(data); // Set user data in state
        })
        .catch((error) => {
          console.error(error);
          // Handle error (e.g., redirect to login page)
        });
    } else {
      // If token is not available, redirect to login page
      Router.push("/login"); // Replace with your login page route
      return; // Stop further execution
    }
  }, []);

  return (
    <div>
      {userData ? (
        <div>
          <h1>{userData.message}!</h1>
          {/* Display user-specific content */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default HomePage;
