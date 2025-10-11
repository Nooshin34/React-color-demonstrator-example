import React from 'react'

const ColorInput = ({selectedColor , setSelectedColor}) => {
  const handleChange = (e) => {
    setSelectedColor(e.target.value);
  };
  return (
    <div>
      <input type="text" name="colorName" className="input" placeholder="color" value={selectedColor} onChange={handleChange}></input>
    </div>
  )
}

export default ColorInput