import React, { useState } from 'react'

const ToList = () => {
    let [list, setList] = useState([])
    let [val, setVal] = useState('')
    console.log(val)
    function fun(e) {
        setVal(e.target.value)
    }
    function fun1() {
        setList([...list, val])
        setVal('')
    }
 function remove(id){
// console.log(id)
 let newList = list.filter((a,b)=>{
return b != id
})
// console.log(newList)
setList(newList)
}
    return (
        <div>ToList

            <input type="text" value={val} placeholder='write' onChange={fun} />
            <button onClick={fun1}>add</button>
            {/* <ul>
              <li>{list}</li>
               </ul> */}
            {list.map((a,b) => {

                return (
                    <>
                        <li key={b} onClick={()=>remove(b)}>{a}</li>
                    </>
                )
            })}


        </div>
    )
}

export default ToList