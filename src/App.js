// import { useState } from "react";

// const Counter = () =>{
//   const [count, setCount] = useState(0);
//   const[isvisible, setIsvisible] = useState(true);

  
//   const increment = ()=>{
//    setCount(count + 1);
//   };
//   const toggle = () =>{
//     setIsvisible(!isvisible);
//   };

//   return(
//     <div>
//       <button onClick={toggle}>
//         {isvisible ? 'Show Counter' : 'Hide Counter'}
//       </button>
//       {isvisible && (
//         <div>
//           <p>Counter: {count}</p>
//           <button onClick={increment}>Increment</button>
//         </div>

//       )}
//     </div>
//   );

// };

// export default Counter;