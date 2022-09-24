import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../Context/UserAuthContext";
import styles from "./login.module.css";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("./Home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className={styles.body}>
        <div id={styles.loginform}>
        <h2 id={styles.headerTitle}>IPL App Login</h2>
        {error && <div className={styles.alertTxt}>{error}</div>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className={styles.row} controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className={styles.row} controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div>
            <Button className={styles.loginBtn} type="Submit">
              Log In
            </Button>
          </div>
        </Form>
       
        <div id={styles.signupBtn}>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
      </div>
      
      </div>
    </>
  );
};

export default Login;