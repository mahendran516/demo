import { useState } from "react";

const FormName = () => {
const[name, setName] = useState ("")
const handleChange = (e) => {
    setName(e.target.value);
};
return(
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleChange}
      />
     <h1>Your Name : {name}</h1>
    </div>
);
};

export default FormName;