import { Container } from "@material-ui/core";
import React from "react";
import FormikForm from "./FormikForm";
import FormInput from "./FormInput";
import * as yup from "yup";
import FormSubmit from "./FormSubmit";

export default function Login() {
  const Schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required().min(8),
  });

  const handleSubmit = (values) => {
    console.log("Login", values);
  };

  return (
    <div style={{ flexGrow: 1, margin: "20px 0px" }}>
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
        <FormikForm
          initialValues={{ email: "", password: "" }}
          validationSchema={Schema}
          onSubmit={(values) => handleSubmit(values)}
        >
          <FormInput
            feildName="email"
            placeholder="email"
            variant="outlined"
            fullWidth
            label="Email"
          />
          <FormInput
            type="password"
            feildName="password"
            placeholder="Password"
            variant="outlined"
            fullWidth
            label="Password"
          />
          <FormSubmit>Login</FormSubmit>
        </FormikForm>

        <br />
      </Container>
    </div>
  );
}
