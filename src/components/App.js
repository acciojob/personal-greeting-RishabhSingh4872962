
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName] = useState("");
  return (
    <div>
        {/* Do not remove the main div */}
        <label htmlFor="name">Enter your name:</label><br/>
        <input id="name" value={name} onChange={(e)=>setName(e.target.value)} />
        <p hidden={name.length==0}>Hello {name}!</p>
    </div>
  )
}

export default App
