import { useState } from "react";
import Input from "./Input";
import { loginFields } from "../../constants/AuthFields";
import Formextra from "./Formextra";
import FormAction from "./FormAction";
import { useNavigate } from "react-router";

const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Login() {
  const navigate = useNavigate();
  const [loginState, setLoginState] = useState(fieldsState);

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginState);

    if (
      loginState.email_address === "user@gmail.com" &&
      loginState.password === "user@9876"
    ) {
      navigate("/");
    } else if (
      loginState.email_address === "admin@gmail.com" &&
      loginState.password === "admin@9876"
    ) {
      navigate("/admin/dashboard");
    }
  };

  return (
    <form className="mt-8 space-y-6">
      <div className="-space-y-px">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={loginState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
      </div>
      <Formextra />
      <FormAction handleSubmit={handleSubmit} text="Login" />
    </form>
  );
}
