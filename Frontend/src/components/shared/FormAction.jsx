import { useNavigate } from "react-router-dom";

export default function FormAction({
  handleSubmit,
  type = "Button",
  action = "submit",
  text,
}) {
  const navigate = useNavigate();
  return (
    <>
      {type === "Button" ? (
        <button
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 mt-10"
          onClick={handleSubmit}
        >
          {text}
        </button>
      ) : (
        <></>
      )}
    </>
  );
}
