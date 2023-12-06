import { useState, useEffect } from "react";
import { parseCookies } from "nookies";
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

    // Fetch user data when the component mounts
    if (token) {
      fetchUserData(token)
        .then((data) => {
          setUserData(data);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      // If token is not available, redirect to login page
      Router.push("/login");
      return;
    }
  }, []);

  return (
    <div>
      {userData ? (
        <div>
          <h1>Welcome, {userData.username}!</h1>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default HomePage;
