import { FormEvent, ChangeEvent, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { PrimaryButton } from "../../components/CustomButton";
import { FormGroup } from "../../components/Form";
import { useAuthContext } from "../../Context.ts/AuthContext";
import { useRegister } from "../../utils/hooks/auth";
import { showErrorToast, showSuccessToast } from "../../utils/toast";

const Register = () => {
  const history = useHistory();
  const { setAuth } = useAuthContext();

  const registerMutation = useRegister({
    onSuccess: (result: any) => {
      showSuccessToast("Registration successful");
      const { token, user } = result.data.data;

      localStorage.setItem("token", token);
      setAuth!({ user, token });

      history.push("/");
    },
    onError: (err: any) => {
      showErrorToast(err.response.data.data);
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    registerMutation.mutate(form);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;

    setForm((old) => ({ ...old, [name]: value }));
  };

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    password: "",
    email: "",
  });

  return (
    <div className="flex items-center justify-center max-w-screen-xl min-h-screen p-3 mx-auto">
      {/* Form container */}
      <div className="w-full max-w-lg p-8 bg-gray-800 rounded-md shadow-lg">
        {/* Form headings */}
        <div className="mb-10 text-center">
          <h2 className="text-base text-gray-400 uppercase">
            We'll be glad to have you
          </h2>
          <h1 className="text-2xl font-semibold text-center text-white">
            Create an account with us
          </h1>
        </div>
        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between space-x-4">
            <FormGroup
              onChange={handleInputChange}
              required
              className="mb-4"
              placeholder="John"
              name="firstName"
              type="text"
              label="First name"
              value={form.firstName}
            />
            <FormGroup
              onChange={handleInputChange}
              required
              className="mb-4"
              placeholder="Doe"
              name="lastName"
              type="text"
              label="Last name"
              value={form.lastName}
            />
          </div>

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

          <FormGroup
            onChange={handleInputChange}
            className="mb-4"
            value={form.email}
            placeholder="Enter your email"
            name="email"
            type="email"
            label="Email"
            required
          />

          <PrimaryButton
            isLoading={registerMutation.isLoading}
            className="w-full mt-5"
          >
            Register
          </PrimaryButton>
          <p className="text-semibold mt-4 text-sm text-gray-400">
            Already have an account?
            <Link className="hover:text-gray-200 text-white" to="/login">
              {" "}
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
