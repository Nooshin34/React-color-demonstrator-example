import React from 'react'

const Circle = ({selectedColor}) => {
  return (
    <div>
      <div className='demonstrator' style={{backgroundColor : selectedColor}}>
        Color Box
      </div>
    </div>
  )
}

export default Circle



