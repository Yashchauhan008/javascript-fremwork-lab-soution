import React, { useEffect, useState } from 'react'

const UseEffectDemo = () => {
    const [data,setData]=useState(0)  
    useEffect(()=>{
        console.log("use effect worked only first time load")
    },[])

    useEffect(()=>{
        console.log("use effect when state of data is changed")
    },[data])
    console.log("every time")
    return (
    <>
    <button onClick={()=>setData(data+1)}>click</button>
    </>
  )
}

export default UseEffectDemo