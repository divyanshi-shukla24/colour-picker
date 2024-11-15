import { useState } from 'react'
import './App.css'

function App() {
  const [selectedColor, setSelectedColor] = useState('#ffffff')

  // Colors and their names
  const colors = [
    { name: 'Red', hex: '#FF0000' },
    { name: 'Green', hex: '#00FF00' },
    { name: 'Blue', hex: '#0000FF' },
    { name: 'Yellow', hex: '#FFFF00' },
    { name: 'Purple', hex: '#800080' },
    { name: 'Orange', hex: '#FFA500' }
  ]

  const handleColorClick = (color) => {
    setSelectedColor(color.hex)
    document.body.style.backgroundColor = color.hex
  }

  return (
    <div className="App">
      <h1>Click to Change Background Color</h1>
      {/* Color Picker directly visible */}
      <div className="color-picker">
        <div className="color-boxes">
          {colors.map((color) => (
            <div
              key={color.hex}
              className="color-box"
              style={{ backgroundColor: color.hex }}
              onClick={() => handleColorClick(color)}
            >
              <span className="color-name">{color.name}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Optional: Display selected color */}
      <div className="selected-color">
        <p>Selected Color: {selectedColor}</p>
      </div>
    </div>
  )
}

export default App