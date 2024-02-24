import axios from "axios";
import styles from "../login/login.module.css";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../context/AuthProvider";


const Login = ({ onLogin }) => {
  const { handleToken } = useContext(MyContext);
  const Navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const [errorStatus, setErrorStatus] = useState("");

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const loginData = async (values) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_BASE_URL}/login/`,
        values,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      localStorage.setItem("token", response.data.tokens.access);
     
      handleToken();
      onLogin(response.data.tokens.access);
      Navigate("/");
    } catch (error) {
      console.error("Error sending data:", error);
      setErrorStatus(error.response);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginData(userInfo);
    setUserInfo({ email: "", password: "" });
  };

  return (
    <div className={styles.main}>
      <div className={styles.form_container}>
        <p className={styles.title}>Login</p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.input_group}>
            <label htmlFor="username">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
              autoComplete="off"
              value={userInfo.email}
              onChange={handleChange}
            />
          </div>
          <div className={styles.input_group}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Your Password"
              autoComplete="off"
              value={userInfo.password}
              onChange={handleChange}
            />
          </div>
          <button className={styles.sign} onClick={handleSubmit}>
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
