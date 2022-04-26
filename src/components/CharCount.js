import React, { useState } from 'react'

const CharCount = () => {

    const [data, setData] = useState([])
    const [print, setPrint] = useState(false)

    const count= (value)=>{
       const result = [...value].reduce((a, e) => { a[e] = a[e] ? a[e] + 1 : 1; return a }, [])
        setPrint(false)
        console.log(result, typeof(result))
        return true
        //console.log(result, typeof(result))
}
   const getData=(e)=>{
    setData(e.target.value)
    setPrint(false)
   }

  return (
    <div>
        <input type="text" value={data} onChange={getData}/>
        <button onClick={()=>setPrint(true)}>CLICK!</button>
    {
     print ? count(data)?<div>{data}</div>:"":""
    }
    </div>
  )
}

export default CharCount