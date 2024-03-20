// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { toast, ToastContainer } from 'react-toastify'; // Import toast
// import 'react-toastify/dist/ReactToastify.css'; // Import the default style
// import '../../assets/css/weddingreg.css';

// function RegisteredUser() {
//   const [weddingData, setWeddingData] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const authToken = localStorage.getItem('authToken');
//     console.log('Authorization Token:', authToken);

//     const fetchWeddingData = async () => {
//       try {
//         const response = await axios.get('http://localhost:8080/api/v1/user/getwedding', {
//           headers: {
//             Authorization: `Bearer ${authToken}`,
//           },
//         });

//         console.log('Response status:', response.status);

//         if (response.status !== 200) {
//           throw new Error(`Failed to fetch wedding details: ${response.status}`);
//         }

//         const data = response.data;
//         setWeddingData(data);
//       } catch (error) {
//         setError(`Error fetching wedding details: ${error.message}`);
//       }
//     };

//     if (authToken) {
//       fetchWeddingData();
//     }
//   }, []);

//   const handleDelete = async (id) => {
//     // Ask for confirmation
//     const confirmDelete = window.confirm('Are you sure you want to delete this record?');

//     if (!confirmDelete) {
//       // If the user cancels the deletion, do nothing
//       return;
//     }

//     try {
//       const authToken = localStorage.getItem('authToken');
//       console.log('Sending DELETE request to the backend...');
//       await axios.delete(`http://localhost:8080/api/v1/user/deletewedding?id=${id}`, {
//         headers: {
//           Authorization: `Bearer ${authToken}`,
//         },
//       });

//       // Update the local state after successful deletion
//       setWeddingData(weddingData.filter((item) => item.id !== id));

//       // Notify wedding event deletion success
//       toast.success('Wedding event successfully deleted!', { position: 'bottom-right', autoClose: 3000 });
//     } catch (error) {
//       if (error.response && error.response.status === 403) {
//         console.error('Authorization error: You may not have permission to delete this record.');
//       } else {
//         console.error(`Error deleting wedding details: ${error.message}`);
//       }
//     }
//   };

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div className="wedding-details-container">
//       <h2>Wedding Details</h2>

//       <Link to="/admindashboard" className="back-button">
//         Back to Admin Dashboard
//       </Link>

//       <table className="wedding-details-table">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Mobile Number</th>
//             <th>Event Place</th>
//             <th>Event Time</th>
//             <th>Package selected</th>
//             <th>Event Date</th>
//             <th>Photography</th>
//             <th>Dining Options</th>
//             <th>Furniture Type</th>
//             <th>Music Event</th>
//             <th>Dance Event</th>
//             <th>Drone Photography</th>
//             <th>Address</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {weddingData.map((wedding) => (
//             <tr key={wedding.id}>
//               <td>{wedding.firstName} {wedding.lastName}</td>
//               <td>{wedding.email}</td>
//               <td>{wedding.mobileNumber}</td>
//               <td>{wedding.eventPlace}</td>
//               <td>{wedding.eventTime}</td>
//               <td>{wedding.packageSelected}</td>
//               <td>{wedding.eventDate}</td>
//               <td>{wedding.photography ? 'Yes' : 'No'}</td>
//               <td>{wedding.diningOptions}</td>
//               <td>{wedding.furnitureType}</td>
//               <td>{wedding.musicEvent ? 'Yes' : 'No'}</td>
//               <td>{wedding.danceEvent ? 'Yes' : 'No'}</td>
//               <td>{wedding.dronePhotography ? 'Yes' : 'No'}</td>
//               <td>{wedding.address}</td>
//               <td>
//                 <button className="delete-button" onClick={() => handleDelete(wedding.id)}>
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {/* Add ToastContainer for notifications */}
//       <ToastContainer />
//     </div>
//   );
// }

// export default RegisteredUser;
