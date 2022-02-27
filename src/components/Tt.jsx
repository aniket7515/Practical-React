import React from 'react'
import Tippy from '@tippy.js/react'
import '../App.css'
import 'tippy.js/dist/tippy.css'

const ColoredTooltip=()=>{
    return <span style={{color:"yellow"}}>Colored Component</span>
}




const Tt = () => {
  return (
    <div>
        Tool tip
        <div>
        <Tippy content='Basic Tooltip'>
        <button>Hover</button>

        </Tippy>

        </div>

        <div style={{paddingBottom:"20px"}}>
            <Tippy content={<span style={{color:'orange'}}>Colored</span>}>
                <button >Hover</button>
            </Tippy>
        </div>
        
        
        <div style={{paddingBottom:"20px"}}>
            <Tippy content={<ColoredTooltip/>}>
                <button >Hover</button>
            </Tippy>
        </div>
    </div>
  )
}

export default Tt