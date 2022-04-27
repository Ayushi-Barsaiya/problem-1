import React, { useState } from 'react'

const CharCount = () => {

    const [data, setData] = useState([])
    const [print, setPrint] = useState(false)

    const count = (value) => {
        //  ------shorter method for result------
        //    const result = [...value].reduce((a, e) => { a[e] = a[e] ? a[e] + 1 : 1; return a }, [])
        //  console.log(result)    
        const x = [...value.toUpperCase()]
        let result = []
        let newArray = []
        for (let i = 0; i < x.length; i++) {
            newArray[i] = 1;
            for (let j = i + 1; j < x.length; j++) {
                if (x[i] === x[j]) {
                    newArray[i]++;
                    x[j] = '0';
                }
            }
        }

        for (let i = 0; i < newArray.length; i++) {
            if (x[i] !== ' ' && x[i] !== '0') {
                result[i] = " " + x[i] + " : " + newArray[i];
            }
        }

        return result
    }
    const getData = (e) => {
        setData(e.target.value)
        setPrint(false)
    }

    return (
        <div>
            <input type="text" value={data} onChange={getData} />
            <button onClick={() => setPrint(true)}>CLICK!</button>
            {print ? (<h5>{count(data)}</h5>) : null}
        </div>
    )
}

export default CharCount