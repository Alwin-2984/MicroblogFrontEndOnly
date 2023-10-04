// Import required modules and components
import PropTypes from "prop-types";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";

import DynamicForm from "./DynamicForm";
import { initialValuesFunction } from "./initialValuesFunction";
import { yupValidation } from "./yupValidation";
import GlobalToaster from "../Toasters/GlobalToaster";
import axios from "axios";
function Login({ signUp }) {
  const navigate = useNavigate();
  const initialValues = initialValuesFunction(signUp);
  const validationSchema = yupValidation(signUp);

  // we can redirect with signup condition for login and register here but i can't create custom json-server routs for some reason so i cant create registar and login saparately so i leave it like this
  const handleSubmit = async (data) => {
    try {
      const response = await axios.post(`http://localhost:3000/users`, data);
      localStorage.setItem("Profile", JSON.stringify(response));
      GlobalToaster("Login Successfully", 405, ["success"], 3000);
      navigate("/dashboard/home");
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <>
      <div className=" bg-gray-100 flex  justify-center sm:py-0 py-0 min-h-screen max-h-screen overflow-y-auto  overflow-x-hidden">
        <div className="  w-1/4 max-xl:w-1/3 max-md:w-1/2 max-sm:w-full">
          <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
            <div className="px-5 py-7">
              <div className="font-bold text-center text-2xl mb-3">
                <div className="logo">
                  <h3 className="font-semibold text-xl text-gray-600">
                    Micro
                    <span className="font-semibold text-xl text-violet-700">
                      Blog
                    </span>
                  </h3>
                </div>
              </div>
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
