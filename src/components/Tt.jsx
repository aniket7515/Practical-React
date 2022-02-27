import React from 'react'
import Tippy from '@tippy.js/react'
import '../App.css'
import 'tippy.js/dist/tippy.css'

const Tt = () => {
  return (
    <div>
        Tool tip
        <Tippy content='Basic Tooltip'>
        <button>Hover</button>

        </Tippy>
        
    </div>
  )
}

export default Tt