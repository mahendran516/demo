import { useState } from "react";

function Randomnum()
{
  const [num,setnum]=useState("")
  function Change()
  {
    var random=Math.floor(Math.random()*10)+1
    setnum(random)
  }
return(
  <div>
<h1>{num}</h1>
<button onClick={Change}>RandomNumber</button>
  </div>
  
)

}
export default Randomnum