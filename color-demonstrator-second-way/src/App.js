import './App.css'; 
import ColorInput from './ColorInput';
import Circle from './Circle';
import { useState } from 'react';

function App() {
  const [selectedColor, setSelectedColor] = useState("");
  return (
    <div className='container'>
      <Circle selectedColor = {selectedColor}/>
      <ColorInput selectedColor = {selectedColor} setSelectedColor={setSelectedColor}/>
    </div>
  );
}

export default App;
