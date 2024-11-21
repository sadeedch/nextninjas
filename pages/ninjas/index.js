import styles from '../../styles/Jobs.module.css'
import React, { useState, useEffect } from 'react';

const Ninjas = () => {
  // State to hold the fetched data
  const [ninjas, setNinjas] = useState([]);
  const [loading, setLoading] = useState(true);  // State for loading status
  const [error, setError] = useState(null);     // State for error handling

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchNinjas = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        setNinjas(data);
        setLoading(false);  // Data is loaded, set loading to false
      } catch (err) {
        setError(err.message);
        setLoading(false);  // In case of error, stop loading
      }
    };

    fetchNinjas(); // Call the function to fetch data
  }, []); // Empty dependency array means it runs only once on mount

  // Show loading state
  if (loading) {
    return <h1>Loading...</h1>;
  }

  // Show error message if there was an error fetching data
  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <div>
      <h1>All Ninjas</h1>
      {ninjas.map(ninja => (
        <div key={ninja.id}>
          <a className={styles.single}>
            <h3>{ninja.name}</h3>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Ninjas;





// export const getStaticProps = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   const data = await res.json();

//   return {
//     props: { ninjas: data }
//   }
// }

// const Ninjas = ({ ninjas }) => {
//   console.log(ninjas)

//   return (
//     <div>
//       <h1>All Ninjas</h1>
//       {ninjas.map(ninja => (
//         <div key={ninja.id}>
//           <a >
//             <h3>{ ninja.name }</h3>
//           </a>
//         </div>
//       ))}
//     </div>
//   );
// }
 
// export default Ninjas;