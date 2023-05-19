import axios from "axios";
import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";

import "../css/dashboard.css";

const Admin = () => {
  const [name, setName] = useState();

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      axios
        .get(`http://localhost:4000/user`, {
          headers: {
            token: token,
          },
        })
        .then(({ data }) => setName(data.nombre))
        .catch((error) => console.error(error));
    }
  }, [token]);

  return (
    <>
      <Dashboard />
      {/* <div className="content">
        <h3>Hola desde admin</h3>
        <div>
          <button onClick={() => navigate("/login")}>Login</button>
          <button onClick={() => navigate("/")}>Register</button>
        </div>
      </div> */}
    </>
  );
};

export default Admin;
