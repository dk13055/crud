import React from "react";
import {Container, TextField, Button} from "@mui/material";
import styles from "./styles/LoginPage.module.css";

function LoginPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // handle login logic here
  };

  return (
    <Container className={styles.container} maxWidth="xs">
      <h1>Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <TextField
          className={styles.textField}
          label="Email"
          variant="outlined"
          type="email"
          required
        />
        <TextField
          className={styles.textField}
          label="Password"
          variant="outlined"
          type="password"
          required
        />
        <Button
          className={styles.submitButton}
          variant="contained"
          color="primary"
          type="submit"
        >
          Login
        </Button>
      </form>
    </Container>
  );
}

export default LoginPage;
