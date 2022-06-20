import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
  Link,
  useNavigate,
} from "react-router-dom";
import { forwardRef, useRef, useState } from "react";
import { Form, Schema, Button, ButtonToolbar } from "rsuite";
import { Admin } from "./Admin";
import { Home } from "./Home";
const { StringType, NumberType } = Schema.Types;

const model = Schema.Model({
  name: StringType().isRequired("This field is required."),
  email: StringType()
    .isEmail("Please enter a valid email address.")
    .isRequired("This field is required."),

  password: StringType().isRequired("This field is required."),
  verifyPassword: StringType()
    .addRule((value, data) => {
      console.log(data);

      if (value !== data.password) {
        return false;
      }

      return true;
    }, "The two passwords do not match")
    .isRequired("This field is required."),
});

const TextField = forwardRef((props, ref) => {
  const { name, label, accepter, ...rest } = props;
  return (
    <Form.Group controlId={`${name}-4`} ref={ref}>
      <Form.ControlLabel>{label} </Form.ControlLabel>
      <Form.Control name={name} accepter={accepter} {...rest} />
    </Form.Group>
  );
});

const Login = () => {
  const formRef = useRef();
  const [formError, setFormError] = useState({});
  const [formValue, setFormValue] = useState({
    name: "",
    password: "",
  });
  let Navigate = useNavigate();
  const handleSubmit = () => {
    if (formValue.name === "Володимир" && formValue.password === "123") {
      Navigate("../Admin");
    } else {
      // Navigate("/");
    }
    return;
  };
  console.log(formValue);

  return (
    <Form
      className="formstyle"
      ref={formRef}
      onChange={setFormValue}
      onCheck={setFormError}
      formValue={formValue}
      model={model}
    >
      <TextField name="name" label="Username" />
      <TextField
        name="password"
        label="Password"
        type="password"
        autoComplete="off"
      />

      <ButtonToolbar>
        <Button appearance="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </ButtonToolbar>
    </Form>
  );
};

export { Login };
