// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Footer = () => {
//   const navigate = useNavigate();
//   return (
//     <>
//       <div className="bg-purple-300 text-black w-full mx-auto max-w-screen p-3 md:flex md:items-center md:justify-between relative">
//         <span className="text-sm  sm:text-center font-bold">
//           © 2024 Event All Rights Reserved.
//         </span>
//         <ul className="flex flex-wrap items-center">
//           <li
//             className="hover:underline me-6 text-center"
//             onClick={() => navigate("/term&condition")}
//           >
//             Terms & Conditions
//           </li>
//           <li className="hover:underline me-6 text-center" onClick={() => navigate("/privacypolicy")}>Privacy Policy</li>
//           <li className="hover:underline me-6 text-center">Connect</li>
//         </ul>
//       </div>
//     </>
//   );
// };

// export default Footer;


// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/footer.css';
import { BsFacebook, BsInstagram, BsTwitterX } from 'react-icons/bs';
const Footer = () => {
  const footerContent = (
    <div className="footer-content">
      <div className="footer-links">
        <ul className="links-list">
          {/* <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li>
            <Link to="/faq">FAQs</Link>
          </li> */}
          <li>
            <Link to="/term&condition">Terms and Conditions</Link>
          </li>
          <li>
            <Link to="/privacypolicy">Privacy Policy</Link>
          </li>
          <li>
            mail:goldenglitz@gmail.com
          
          </li>
          <li>
            mobile:8838187018
          </li>
        </ul>
      </div>
      <div className="footer-social">
        <h3 >Follow Us On</h3>
        <ul className="social-icons">
          <li>
            <a href="https://www.facebook.com/planevent/" target="_blank" rel="noopener noreferrer">
            <BsFacebook />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/BizBash" target="_blank" rel="noopener noreferrer">
            <BsTwitterX />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/eventiaevents/?hl=en" target="_blank" rel="noopener noreferrer">
            <BsInstagram />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <footer className="footer">
      {footerContent}
      <p className="copyright">© {new Date().getFullYear()} GoldenGlitz. All Rights Reserved.</p>
   
    </footer>
  );
};

export default Footer;
