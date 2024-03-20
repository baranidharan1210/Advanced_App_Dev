import React from "react";
import Formheader from "../../../components/shared/Formheader";
import Login from "../../../components/shared/Login";

const LoginPage = () => {
  return (
    <>
      <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="border-amber-500 border-2 p-10 rounded-lg">
            <Formheader
              heading="Login to your account"
              paragraph="Don't have an account yet? "
              linkName="Signup"
              linkUrl="/signup"
            />
            <Login />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
