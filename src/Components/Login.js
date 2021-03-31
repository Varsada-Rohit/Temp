import { Button, Container, Input, TextField } from "@material-ui/core";
import React from "react";
import Color from "../Config/Color";

export default function Login() {
  return (
    <div style={{ flexGrow: 1 }}>
      <Container
        maxWidth="xs"
        style={{
          textAlign: "center",
          backgroundColor: "#F4F4F4",
          border: "1px solid #e8e8e8",
        }}
      >
        <p style={{ fontSize: 25 }}>Login</p>
        {/* <br /> */}
        <p style={{ fontSize: 14 }}>Login with your mobile no.</p>
        <TextField
          variant="outlined"
          fullWidth
          placeholder="Enter mobile no."
          label="Phone"
        />
        <br />
        <Button
          style={{
            backgroundColor: Color.green,
            width: "100%",
            margin: "10px 0px",
            color: "white",
            padding: "18.5px 10px",
          }}
        >
          Login
        </Button>
      </Container>
    </div>
  );
}
