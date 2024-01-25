import PropTypes from "prop-types";
import { Formik, Form, Field, ErrorMessage } from "formik"; // Import necessary modules
import { useState } from "react";
import { PiEyeLight, PiEyeSlashLight } from "react-icons/pi";
import { FormField } from "../../Components/Login/FormField";

// Custom component for rendering select fields with labels and error messages
const SelectField = ({ label, name, options, ...rest }) => (
  <div className="min-h-[100px]">
    <label className="font-semibold text-sm text-gray-600 pb-1 block select-none">
      {label}
    </label>
    <Field
      name={name}
      as="select"
      className="border rounded-lg px-3 py-2 mt-1 mb-2 text-sm w-full"
      {...rest}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </Field>
    <ErrorMessage
      name={name}
      component="div"
      className="text-red-500 text-sm"
    />
  </div>
);

SelectField.propTypes = {
  label: PropTypes.any,
  name: PropTypes.any,
  options: PropTypes.shape({
    map: PropTypes.func,
  }),
};

// Main form rendering function using Formik
export function RegistrationForm({
  initialValues,
  validationSchema,
  handleSubmit,
}) {
  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="flex flex-col max-w-md p-3 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
      <div className="mb-4 text-center">
        <h1 className="my-2 text-4xl font-bold">Sign Up</h1>
        <p className="text-sm dark:text-gray-400">
          Sign up to create your account
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
              <label className="block mb-2 text-sm">Name</label>
              <FormField
                placeholder="Alwin k c"
                name="name"
                type="text"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
              />
            </div>
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
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm">Confirm Password</label>
              </div>
              <div className="relative w-full">
                <div className="absolute right-0 top-4  flex items-center  px-2">
                  {showConfirm ? (
                    <PiEyeLight onClick={() => setShowConfirm(!showConfirm)} />
                  ) : (
                    <PiEyeSlashLight
                      onClick={() => setShowConfirm(!showConfirm)}
                    />
                  )}
                </div>
                <FormField
                  name="confirmPassword"
                  placeholder="*****"
                  type={showConfirm ? "text" : "password"}
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
          </div>
        </Form>
      </Formik>
    </div>
  );
}

RegistrationForm.propTypes = {
  handleSubmit: PropTypes.any,
  initialValues: PropTypes.any,
  validationSchema: PropTypes.any,
};
