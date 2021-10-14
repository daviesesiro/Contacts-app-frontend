import React, { ChangeEvent, FormEvent, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { FormGroup } from "../../components/Form";
import { CustomButton } from "../../components/CustomButton";
import { useLogin } from "../../utils/hooks/auth";
import { useAuthContext } from "../../Context.ts/AuthContext";
import { showSuccessToast } from "../../utils/toast";

const Login = () => {
  let history = useHistory();
  const { setAuth } = useAuthContext();

  let loginMutation = useLogin({
    onSuccess: (result: any) => {
      const { user, token } = result.data.data;
      localStorage.setItem("token", token);

      setAuth!({ user, token });
      showSuccessToast("Login Successful");
      history.push("/");
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    loginMutation.mutate(form);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value, name } = e.target;
    setForm((old) => ({ ...old, [name]: value }));
  };

  const [form, setForm] = useState({ email: "", password: "" });

  return (
    <div className="flex items-center justify-center max-w-screen-xl min-h-screen p-3 mx-auto">
      {/* Form container*/}
      <div className="w-full max-w-lg p-8 bg-gray-800 rounded-md shadow-lg">
        {/* Form heading */}
        <div className="mb-10 text-center">
          <h2 className="text-base text-gray-400 uppercase">Welcome Back</h2>
          <h1 className="text-2xl font-semibold text-center text-white">
            Login into your account
          </h1>
        </div>
        {/* Form */}
        <form onSubmit={handleSubmit}>
          <FormGroup
            onChange={handleInputChange}
            required
            className="mb-4"
            placeholder="Enter your email"
            name="email"
            type="text"
            label="Email"
            value={form.email}
          />
          <FormGroup
            onChange={handleInputChange}
            className="mb-4"
            value={form.password}
            placeholder="Enter your password"
            name="password"
            type="password"
            label="Password"
            required
          />

          <CustomButton className="w-full mt-5">Login</CustomButton>
          <p className="text-semibold mt-4 text-sm text-gray-400">
            Not register yet?
            <Link className="hover:text-gray-200 text-white" to="/register">
              {" "}
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
