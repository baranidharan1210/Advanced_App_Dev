import React, { useState } from 'react';
import '../../assets/css/gallery.css'; // Import your CSS file
// import HomeNavbar from '../components/homenavbar';
// import Footer from '../components/footer';

const imageUrls = [
  'https://www.vivaahcelebrations.com/wp-content/uploads/2020/08/14f55567-518a-43b0-9e0b-e536f775dbda-1024x682.jpg',
  'https://www.vivaahcelebrations.com/wp-content/uploads/2020/08/1c425aca-7843-4f64-bc03-05736485dc6a-1024x682.jpg',
  'https://www.vivaahcelebrations.com/wp-content/uploads/2022/08/58ef6ef9-bd40-439c-95f9-3910bbf10f69-1024x682.jpg',
  'https://www.vivaahcelebrations.com/wp-content/uploads/2020/08/Mariage-Indien-Vivaah-Weedings_Mehdi-393.jpg',
  'https://www.vivaahcelebrations.com/wp-content/uploads/2020/08/IMG_9415-1024x1012.jpg',
  "https://www.vivaahcelebrations.com/wp-content/uploads/2020/08/IMG_9417-1024x1015.jpg",
  "https://www.vivaahcelebrations.com/wp-content/uploads/2022/07/Screenshot-2022-07-27-at-00.34.02-1024x640.png",
  "https://www.vivaahcelebrations.com/wp-content/uploads/2020/08/IMG_9402-1024x1013.jpg",
  "https://www.vivaahcelebrations.com/wp-content/uploads/2020/08/IMG_9408-1024x1024.jpg",
  "https://www.vivaahcelebrations.com/wp-content/uploads/2020/08/IMG_9418-1024x1013.jpg",
  "https://www.vivaahcelebrations.com/wp-content/uploads/2020/08/IMG_9420-1024x803.jpg",
  "https://www.vivaahcelebrations.com/wp-content/uploads/2020/08/IMG_9464-1024x1007.jpg",
  "https://www.vivaahcelebrations.com/wp-content/uploads/2020/08/KunalGauri-Sangeet-15-1024x730.jpg",
  "https://www.vivaahcelebrations.com/wp-content/uploads/2020/08/IMG_9399-1024x914.jpg",
  "https://www.vivaahcelebrations.com/wp-content/uploads/2020/08/Mariage-Indien-Vivaah-Weedings_Mehdi-350-scaled.jpg",
  "https://www.vivaahcelebrations.com/wp-content/uploads/2022/03/Screenshot-2022-03-07-at-12.14.19-1024x658.png",


  // Add more image URLs here
];

function Gallery() {
  const [loadedImages, setLoadedImages] = useState(imageUrls);

  return (
    <div>
        {/* <HomeNavbar/> */}
    <div className="gallery p-[6%] bg-purple-100">
      {loadedImages.map((imageUrl, index) => (
        <div className="image-container" key={index}>
          <img src={imageUrl} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
    </div>
  );
}

export default Gallery;
