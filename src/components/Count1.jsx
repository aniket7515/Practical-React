import React from 'react'
import CountUp from 'react-countup'
import '../App.css'

const Count1 = () => {
  return (
    <div>
       
        <CountUp end={200} />
        <br/>
        <CountUp end={200} duration={5} />
        <br/>
        <CountUp start={500} end={1000} duration={5} />
    </div>
  )
}

export default Count1