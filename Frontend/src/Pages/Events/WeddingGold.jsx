// src/GoldenPackage.js
import React from "react";
import "../../assets/css/mgold.css";
import { Link } from "react-router-dom";
// import HomeNavbar from '../components/homenavbar';
const cakesData = [
  {
    image:
      "https://assets-news.housing.com/news/wp-content/uploads/2022/01/11220447/wedding-stage-decoration-shutterstock_1193416354-1200x700-compressed.jpg",
    name: "",
  },
  {
    image: "https://nfdonline.com/wp-content/uploads/2021/11/IMG_6183.jpg",
    name: "",
  },
  {
    image: "https://chinchincelebration.com/wp-content/uploads/2019/12/c4.jpg",
    name: "",
  },
  {
    image:
      "https://chinchincelebration.com/wp-content/uploads/2019/12/WhatsApp-Image-2019-06-17-at-03.32.03-1.jpeg",
    name: "",
  },
  {
    // image: 'https://5.imimg.com/data5/PK/CZ/ON/SELLER-4174837/bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee.jpg',
    image:
      "https://assets-news.housing.com/news/wp-content/uploads/2022/01/11220447/wedding-stage-decoration-shutterstock_1193416354-1200x700-compressed.jpg",
    name: "",
  },
  {
    image:
      "https://i.pinimg.com/564x/fc/19/21/fc1921c0df157aea7a1a4c0f8e33d3ec.jpg",
    name: "",
  },
];

function GoldenPackageMarriage() {
  return (
    <div className="golden-packageqq pt-[6%]">
      {/* <HomeNavbar/> */}
      <h1 className="package-title">Golden Package for marriage</h1>
      <img
        src="https://www.vivaahcelebrations.com/wp-content/uploads/2020/08/IMG_9396-1024x857.jpg"
        alt="Golden Package"
        className="golden-image"
      />
      <section className="package-description">
        <h2 className="section-title">Description</h2>
        <p className="zoro">
          When it is an occasion of wedding, let us make the venue more sparkled
          by adding some beautiful fresh flowers and some brighter fabrics.
          Dance group or a live band can also cherish the evening. Just have a
          glimpse of our package below.
        </p>
      </section>

      <section className="package-includes">
        <h2 className="section-title">Golden Package Includes</h2>
        <ul className="includes-list">
          <li>Entrance</li>
          <li>Stage Backdrop</li>
          <li>Entance Decoration</li>
          <li>Flower Booth</li>
          <li>Passage</li>
          <li>Home Decoration</li>
          <li>Car decoration</li>
          <li>Lawn Decoration</li>
          <li>Flower Chaddar</li>
        </ul>
        <h3 className="tamount">
          Cost-Rs 1,68,999-1,99,999/-
          <span className="hhii">(price varies based on decorations)</span>
        </h3>
        <Link to="/weddingform">
          {" "}
          <button className="hiking">Purchase </button>{" "}
        </Link>
        <span className="hhiii">
          Make a booking payment of ₹10000 in advance
        </span>
        <p className="bitto">
          {" "}
          Gold wedding package includes mandap, car decoration, stage
          decoration, passage decoration, home decoration, entrance, flower
          booth. Dream Maker provides the best wedding decoration service on
          India.
        </p>

        <p className="kitto">
          <b>NOTE:</b>
          Customer needs to make a booking from our website After going to the
          work area with some measurements then only the exact price can be
          given
        </p>
      </section>
      <section className="cakes-section">
        <h2 className="section-title">Our Stage decorations </h2>
        <div className="cakes-images">
          {cakesData.map((cake, index) => (
            <div className="cake-imagee" key={index}>
              <img
                src={cake.image}
                alt={cake.name}
                className="cake-img"
                // Add a class for specific styling and hover effect
              />
              <div className="cake-text">{cake.name}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default GoldenPackageMarriage;
