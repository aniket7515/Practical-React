import React,{useState} from 'react'
import { ChromePicker } from 'react-color'
import '../App.css'

const Cpicker = () => {
    const [color,setColor]= useState('#fff')
    const [showColorPicker , setShowColorPicker] = useState(false)

  return (
    <div>
        <button onClick={() => setShowColorPicker(showColorPicker => !showColorPicker)}>{showColorPicker ? 'Close color picker' : 'Pick a Color'}</button>

        {
            showColorPicker && (
                <ChromePicker 
                  color={color} 
                  onChange={updatedColor=> setColor(updatedColor.hex)}

                
                />
            )
        }



        {/* <ChromePicker  color={color} onChange={updatedColor=> setColor(updatedColor)}/> */}
        <h2>You picked {color}</h2>
    </div>
  )
}

export default Cpicker