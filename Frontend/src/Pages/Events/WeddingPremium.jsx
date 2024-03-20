// src/GoldenPackage.js
import React from 'react';
import '../../assets/css/mpremium.css';
import { Link } from 'react-router-dom';
// import HomeNavbar from '../components/homenavbar';
const cakesData = [
  {
    image: 'https://wedbook.in/wp-content/uploads/2022/03/Wedding-Stage-Decor-12.jpg',
    name:'',
},
{
    image: 'https://i.pinimg.com/originals/48/5c/9c/485c9cbcee7fb6ae1cd6a503a4ef3766.jpg',
    name:'',
   
  },
  {
    image: 'https://image.wedmegood.com/resized-nw/700X/wp-content/uploads/2019/04/ChanuDigvijay_Cocktail-6.jpg',
   
    name:'',
  
  },
  {
    image: 'https://i0.wp.com/www.tulipsevents.com/wp-content/uploads/2022/01/sleek-white-walima-stage-decorations-ideas-Tulips-Events-6.jpg?fit=1260%2C700&ssl=1',
    name:'',
    
},
{
    image: 'https://www.a2zeventssolutions.com/wp-content/uploads/2020/09/stages-designers-in-lahore-3-1024x683.jpg',
    name:'',
    
},
{
      image: 'https://wedbook.in/wp-content/uploads/2022/03/Wedding-Stage-Decor-12.jpg',
    // image: 'https://i.pinimg.com/550x/18/01/eb/bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee.jpg',
    name:'',
   
  },
];

function PremiumPackageMarriage() {
  return (
    <div className="golden-packagegg">
      {/* <HomeNavbar/> */}
      <h1 className="package-title">Premium Package for marriage</h1>
      <img
        src="https://www.vivaahcelebrations.com/wp-content/uploads/2020/08/IMG_9408-1024x1024.jpg"
        alt="Golden Package"
        className="golden-image"
      />
      <section className="package-description">
        <h2 className="section-title">Description</h2>
        <p className='zoro'>
        When it is an occasion of wedding, let us make the venue more sparkled by adding some beautiful fresh flowers and some brighter fabrics. Dance group or a live band can also cherish the evening. Just have a glimpse of our package below.
        </p>
      </section>

      <section className="package-includes">
        <h2 className="section-title">Premium Package Includes(Added premium features are highlighted)</h2>
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
          <span className='vip'>
          <li>Luxury Transportation: Arrangement</li>
          <li>High-End Photography and Videography</li>
          <li>Fireworks or Pyrotechnics</li>
          <li>Specialty Bar</li>
          <li>Customized Wedding Cake</li>
          <li>VIP Concierge Service</li>
          <li>Post-Wedding Brunch</li>
          </span>
        </ul>
        <h3 className='tamount'>Cost-Rs 3,00,000-4,99,999/-<span className='hhii'>(price varies based on decorations)</span></h3> 
      <Link to="/weddingform"> < button className='ttut'>Purchase </button></Link> 
        <p className='bitto'>   Gold wedding package includes mandap, car decoration, stage decoration, passage decoration, home decoration, entrance, flower booth. NFD provides the best wedding decoration service on Nepal.</p>

<p className='kitto'><b>NOTE:</b>
Customer needs to make a booking from our website
After going to the work area with some measurements then only the exact price can be given
</p>
       
      </section>
      <section className="cakes-section">
        <h2 className="section-title">Our Stage decorations </h2>
        <div className="cakes-images">
          {cakesData.map((cake, index) => (
            <div className="cake-imaged" key={index}>
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

export default PremiumPackageMarriage;
