import React, { useEffect } from 'react'
import { useState } from 'react'

const Balls = () => {


    const [index , setIndex] = useState(0)

    const [arr,setArr] = useState([1,2,3,4,5])

    const [num , setNum] = useState(0)

    const [store , setStore] = useState([])

    const handleChange = (e) => {
        setIndex(e.target.value)
    }

    // console.log(arr[index])

    useEffect(() => {
    let str = arr
    console.log(str)
    str.sort((a,b) => a-b)
    console.log(str)
    setArr(str)
    },[arr])

    const handleClick = () => {
        setNum(arr[index-1])
        setStore(state => [...state, arr[index-1]])
        setArr(arr.filter(item => item !== arr[index-1]))
    }
    

    console.log(store , " - " ,arr)


    const popTheBall = (numToBeRemoved) => {
        // remove the store[index-1] from the store and push into arr at index - 1
        console.log(numToBeRemoved)
        setStore(store.filter(item => item !== numToBeRemoved))
        setArr(state => [...state , numToBeRemoved])
    }



  return (
      <div>
          <div>
              <h1 className='heading'>Move Balls</h1>
          </div>
        <div className='App'>

            <div className='empty-container'>
            {/* if store includes 1,2,3,4,5 then render it accordingly */}
            {store.includes(1) ? <div className='first' onClick={() => popTheBall(1)}></div> : ""}
            {store.includes(2) ? <div className='second' onClick={() => popTheBall(2)}></div> : ""}
            {store.includes(3) ? <div className='third' onClick={() => popTheBall(3)}></div> : ""}
            {store.includes(4) ? <div className='fourth' onClick={() => popTheBall(4)}></div> : ""}
            {store.includes(5) ? <div className='fifth' onClick={() => popTheBall(5)}></div> : ""}
            </div>

            <div className='balls-container'>
            {/* if arr includes 1,2,3,4,5 then render it accordingly */}
            {!arr.includes(1) ? "" : <div className='first'></div>}
            {!arr.includes(2) ? "" : <div className='second'></div>}
            {!arr.includes(3) ? "" : <div className='third'></div>}
            {!arr.includes(4) ? "" : <div className='fourth'></div>}
            {!arr.includes(5) ? "" : <div className='fifth'></div>}
            </div>
        </div>
        <div className='input-container'>
          <input type="text" onChange={handleChange} value={index} />
          <button onClick={handleClick}>Shoot</button>
        </div>
    </div>    
  )
}

export default Balls