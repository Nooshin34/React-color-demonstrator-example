import "./App.css";
import { useState } from "react";

function App() {
  const [selectedColor , setSelectedColor] = useState("");

  const handleChange = (e) => {
    setSelectedColor(e.target.value);
  };

  return (
    <div className="container">
      <div className="demonstrator" style={{backgroundColor : selectedColor}}>Color Box</div>
      <input type="text" name="colorName" className="input" placeholder="color" value={selectedColor} onChange={handleChange}></input>
    </div>
  );
}

export default App;
