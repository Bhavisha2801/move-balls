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
        <div className='App'>

            <div className='empty-container'>
            {/* if store includes 1,2,3,4,5 then render it accordingly */}
            {store.includes(1) ? <div className='first' onClick={() => popTheBall(1)}>1</div> : ""}
            {store.includes(2) ? <div className='second' onClick={() => popTheBall(2)}>2</div> : ""}
            {store.includes(3) ? <div className='third' onClick={() => popTheBall(3)}>3</div> : ""}
            {store.includes(4) ? <div className='fourth' onClick={() => popTheBall(4)}>4</div> : ""}
            {store.includes(5) ? <div className='fifth' onClick={() => popTheBall(5)}>5</div> : ""}
            </div>

            <div className='balls-container'>
            {/* if arr includes 1,2,3,4,5 then render it accordingly */}
            {!arr.includes(1) ? "" : <div className='first'>1</div>}
            {!arr.includes(2) ? "" : <div className='second'>2</div>}
            {!arr.includes(3) ? "" : <div className='third'>3</div>}
            {!arr.includes(4) ? "" : <div className='fourth'>4</div>}
            {!arr.includes(5) ? "" : <div className='fifth'>5</div>}
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