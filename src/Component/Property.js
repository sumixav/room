import React from 'react'

const Property = (props) => {
    return (
        <div className="d-flex flex-row align-items-center justify-space-around">
           {props.children}
            <div>{props.name}</div>
            <div className="inc-dec">
            <button  className="btn btn-danger rnd" name='dec' onClick={props.handleClick}>-</button>
            <div className="text">{props.value}</div>
            <button  className="btn btn-primary rnd" name='inc' onClick={props.handleClick}>+</button>
            </div>
        </div>
    )
}

export default Property
