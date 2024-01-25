// Import required modules and components
import PropTypes from "prop-types";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";

import DynamicForm from "./DynamicForm";
import { initialValuesFunction } from "./initialValuesFunction";
import { yupValidation } from "./yupValidation";
import { RegistrationAndLogin } from "../../../API/ApiServices";
import { ToasterWithLoading } from "../Toasters/ToasterWithLoading";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setloginTabCondition } from "../../../reducers/loginTabSlice";
function Login({ signUp }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialValues = initialValuesFunction(signUp);
  const validationSchema = yupValidation(signUp);

  const [apiCallInProgress, setApiCallInProgress] = useState(false);

  // Function to handle form submission
  const handleSubmit = (values) => {
    if (apiCallInProgress) {
      return; // Don't proceed if an API call is already in progress
    }

    setApiCallInProgress(true);
    // eslint-disable-next-line no-unused-vars
    const { confirmPassword, ...userData } = values;
    try {
      const apiPromise = new Promise((resolve, reject) => {
        RegistrationAndLogin(userData, signUp)
          .then((response) => {
            resolve(response);
            localStorage.setItem("Profile", JSON.stringify(response));
            if (!signUp) {
              navigate("/dashboard/home");
            } else {
              dispatch(setloginTabCondition(1));
            }
          })
          .catch((error) => {
            setApiCallInProgress(false);
            reject(error);
          });
      });

      // Handle errors in form submission
      ToasterWithLoading(
        apiPromise,
        "loading",
        signUp ? "Registered Successfully" : "Login Success"
      );
    } catch (err) {
      setApiCallInProgress(false);
    }
  };

  return (
    <>
      <div className=" bg-gray-100 flex  justify-center sm:py-0 py-0 min-h-screen max-h-screen overflow-y-auto  overflow-x-hidden">
        <div className="  w-1/4 max-xl:w-1/3 max-md:w-1/2 max-sm:w-full">
          <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
            <div className="px-5 py-7">
              <DynamicForm
                signUp={signUp}
                handleSubmit={handleSubmit}
                initialValues={initialValues}
                validationSchema={validationSchema}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Login.propTypes = {
  isOrganiser: PropTypes.any,
  setValue: PropTypes.func,
  signUp: PropTypes.string,
  value: PropTypes.number,
};

export default Login;
