import PropTypes from "prop-types";
import { Formik, Form } from "formik"; // Import necessary modules
import { useState } from "react";
import { PiEyeLight, PiEyeSlashLight } from "react-icons/pi";
import { FormField } from "../../Components/Login/FormField";
import { useDispatch } from "react-redux";
import { setloginTabCondition } from "../../../reducers/loginTabSlice";

/**
 * Renders a form using Formik with email and password fields.
 * @param {Object} props - Component properties.
 * @param {Object} props.initialValues - Initial values for the form fields.
 * @param {Object} props.validationSchema - Validation schema for the form fields.
 * @param {function} props.handleSubmit - The form submission handler.
 * @returns {JSX.Element} - Rendered form component.
 */
export function LoginForm({ initialValues, validationSchema, handleSubmit }) {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Sign in</h1>
        <p className="text-sm dark:text-gray-400">
          Sign in to access your account
        </p>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="space-y-4">
          <div>
            <div>
              <label className="block mb-2 text-sm">Email address</label>
              <FormField
                placeholder="leroy@jenkins.com"
                name="email"
                type="email"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm">Password</label>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline dark:text-gray-400"
                >
                  Forgot password?
                </a>
              </div>
              <div className="relative w-full">
                <div className="absolute right-0 top-4  flex items-center  px-2">
                  {show ? (
                    <PiEyeLight onClick={() => setShow(!show)} />
                  ) : (
                    <PiEyeSlashLight onClick={() => setShow(!show)} />
                  )}
                </div>
                <FormField
                  name="password"
                  placeholder="*****"
                  type={show ? "text" : "password"}
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
              >
                <span className="inline-block mr-2">Login</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
            <p className="px-6 text-sm text-center dark:text-gray-400">
              Dont have an account yet?
              <a
                onClick={() => dispatch(setloginTabCondition(0))}
                href="#"
                className="hover:underline dark:text-violet-400"
              >
                Sign up
              </a>
              .
            </p>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.any,
  initialValues: PropTypes.any,
  validationSchema: PropTypes.any,
};
