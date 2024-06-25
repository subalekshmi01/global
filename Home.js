import React from 'react'
import imagecankado from '../Images/logo.png'

import './Home.css'

const Home = ({ numbers }) => {
  const allEven = numbers.every((num) => num % 2 === 0);



  return (
    <div className='cankadoimage1'>
      {/* <img src={imagecankado} alt="cankado"/><br/>
      <h1 className='cankadoheading'>CANKADO</h1><br/> */}
      <div>
        <p>All numbers are even: {allEven.toString()}</p>
      </div>
    </div>   
  )
}

export default Home
// function Home() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((result) => {
//         console.log(result.data);
//         setPosts(result.data);
//       })
//       .catch((error) => console.log(error));
//   }, []);

//   return (
//     <div>
//       {posts.map((data) => {
//         return (
//           <div key={data.id}>
//             <h4>{data.name}</h4>
//             <p>{data.city}</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// }



// export default Home;
