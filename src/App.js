import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import Property from './Component/Property'
import { IoIosPeople, IoMdBed } from "react-icons/io";
import { FaChild, FaBed } from "react-icons/fa";
import { MdPerson } from "react-icons/md";


function App(props) {
  return (

    <div className="container">
      <div>
      <IoIosPeople size={20} /><p>Choose the number of people</p>
      <Property name="rooms" value={props.rooms} handleClick={(e) => (e.target.name === 'dec' ? props.decRoom() : props.incRoom())} ><FaBed size={20} /></Property>
      <hr />
      <Property name="adults" value={props.adults} handleClick={(e) => (e.target.name === 'dec' ? props.decAdult() : props.incAdult())} ><MdPerson size={20} /></Property>
      <hr />
      <Property name="children" value={props.children} handleClick={(e) => (e.target.name === 'dec' ? props.decChild() : props.incChild())} ><FaChild size={20}/></Property>
      {/* <div className="d-flex flex-row">
        <p>Rooms</p>
        <button onClick={props.decRoom}>-</button>
        <p>{props.rooms}</p>
        <button onClick={props.incRoom}>+</button>
      </div>
      <div className="d-flex flex-row">
        <p>Adults</p>
        <button onClick={props.decAdult}>-</button>
        <p>{props.adults}</p>
        <button onClick={props.incAdult}>+</button>
      </div>
      <div className="d-flex flex-row">
        <p>Children</p>
        <button onClick={props.decChild}>-</button>
        <p>{props.children}</p>
        <button onClick={props.incChild}>+</button>
      </div> */}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    rooms: state.rooms,
    adults: state.adults,
    children: state.children,
  }

}
const mapdispatchToProps = (dispatch) => {
  return {
    incRoom: () => {console.log('im here');return dispatch({ type: 'INC_ROOM' })},
    decRoom: () => dispatch({ type: 'DEC_ROOM' }),
    incAdult: () => dispatch({ type: 'INC_ADULT' }),
    decAdult: () => dispatch({ type: 'DEC_ADULT' }),
    incChild: () => dispatch({ type: 'INC_CHILD' }),
    decChild: () => dispatch({ type: 'DEC_CHILD' }),
  }

}
export default connect(mapStateToProps, mapdispatchToProps)(App);
