import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { LoginValidations } from "./Validations";
function Signin(props) {
  const initialValues = {
    email:"",
    password:""
  }

  return (
    <div style={styles.formContainer}>
      <h1 style={styles.title}>Login</h1>
      <Formik style={styles.form}
        initialValues={initialValues}
        validationSchema={LoginValidations()}
        onSubmit={props.handleSubmit}
      >
        {(props)=>(
          <Form>
          <Field
            type="email"
            name="email"
            placeholder="Email"
            style={styles.input}
            required
          />
          <Field
            type="password"
            name="password"
            placeholder="Password"
            style={styles.input}
            required
          />
          <p style={styles.loginText}>
            <a href="#" style={styles.link1}>
              Forgot password?
            </a>
          </p>
          <button type="submit" style={styles.signupButton}>
            LOGIN
          </button>
          <p style={styles.loginText}>
            Dont't have an account?{" "}
            <a href="#" style={styles.link}>
              Signup
            </a>
          </p>
        </Form>
        )}
      </Formik>
    </div>
  );
}

// CSS-in-JS styles
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#fff",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  header: {
    backgroundColor: "#0078D4",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#fff",
  },
  logo: {
    fontSize: "1.5em",
    fontWeight: "bold",
  },
  button: {
    marginLeft: "10px",
    padding: "8px 16px",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#fff",
    color: "#0078D4",
    fontWeight: "bold",
    cursor: "pointer",
  },
  formContainer: {
    margin: "50px auto",
    width: "400px",
    padding: "20px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "2em",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    width:"350px",
    margin: "10px 0",
    padding: "10px",
    fontSize: "1em",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  signupButton: {
    padding: "10px",
    fontSize: "1em",
    backgroundColor: "#0078D4",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  loginText: {
    textAlign: "center",
    marginTop: "10px",
  },
  link1: {
    color: "#0078D4",
    textDecoration: "none",
    fontWeight: "bold",
    marginLeft: "260px",
  },
  link: {
    color: "#0078D4",
    textDecoration: "none",
    fontWeight: "bold",
  },
  footer: {
    padding: "10px 0",
    textAlign: "center",
    backgroundColor: "#f1f1f1",
  },
  copyright: {
    marginTop: "10px",
    fontSize: "0.9em",
    color: "#555",
  },
};

export default Signin;
