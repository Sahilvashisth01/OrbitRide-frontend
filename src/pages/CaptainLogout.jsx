import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CaptainLogout = () => {
  const token = localStorage.getItem("captain-token");
  const navigate = useNavigate();

  useEffect(() => {
    const logoutCaptain = async () => {
      try {
        await axios.get(`${import.meta.env.VITE_API_URL}/captains/logout`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } catch (err) {
        console.error("Captain logout failed:", err.response?.data || err.message);
      } finally {
        // ✅ Always clear token and redirect
        localStorage.removeItem("captain-token");
        navigate("/captain-login");
      }
    };

    logoutCaptain();
  }, [navigate, token]);

  return <div>Logging out...</div>;
};

export default CaptainLogout;
