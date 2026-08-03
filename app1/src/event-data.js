import React from 'react';
export function EventData2() {
    const onclickstartstep = (ev) => {
        let t = ev.target.innerText
        let s = (t === 'Start') ? 'Stop' : 'Start'
        ev.target.innerText = s
    }
    const onclickAdd = (ev) => {
        let t = ev.target.innerText
        let r = eval(t)
        alert(`${t} = ${r}`)
    }
    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button onClick={(ev) => onclickstartstep(ev)}>Start</button><br/><br/>
            <button onClick={(ev) => onclickAdd(ev)}>10+20</button>
            <button onClick={(ev) => onclickAdd(ev)}>30*40</button>
        </div>
    )
}