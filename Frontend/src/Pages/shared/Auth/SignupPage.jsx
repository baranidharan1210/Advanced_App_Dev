import Formheader from "../../../components/shared/Formheader";
import Signup from "../../../components/shared/Signup";

export default function SignupPage() {
  return (
    <>
      <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="border-purple-500 border-2 p-10 rounded-lg">
            <Formheader
              heading="Signup to create an account"
              paragraph="Already have an account? "
              linkName="Login"
              linkUrl="/login"
            />
            <Signup />
          </div>
        </div>
      </div>
    </>
  );
}
