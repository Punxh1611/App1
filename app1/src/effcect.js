import React, { use, useEffect, useState } from "react";

function Effect() {
    const [count,setCount] = useState(0)
    const [name,setName] = useState("John Wick")

    useEffect(()=>{
        document.title=`You clicked ${count} times`
    },[count])

    return(
        <center>
            <div>
                <h1>{count}</h1>
                <h3>{name}</h3>
                <button onClick={()=>setCount(count+1)}>Increase</button>
                <button onClick={()=> setCount(count-1)}>Decrease</button>
                <button onClick={()=>setName("Jack Wick")}>Change name</button>
            </div>
        </center>
    )
}
export default Effect