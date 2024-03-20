import { Link } from "react-router-dom";

export default function Formheader({ heading, paragraph, linkName, linkUrl }) {
  return (
    <div className="mb-10">
      <div className="flex justify-center">{/* image */}</div>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        {heading}
      </h2>
      <p className="text-center text-sm text-gray-600 mt-5">
        {paragraph}{" "}
        <Link
          to={linkUrl}
          className="font-medium text-amber-600 hover:text-amber-500"
        >
          {linkName}
        </Link>
      </p>
    </div>
  );
}
