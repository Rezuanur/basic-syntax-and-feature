import React, { Component } from 'react'


let Person = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Number : {parseInt(Math.random() * 100)} </h1>
            <h3>Name: {props.name} and Age {props.age} years</h3>
            <h4>Information: {props.children} {props.name} </h4>
            <Nested></Nested>
        </div>
    );
}
function Nested() {
    return (
        <div>
            <h3>This is a nested Component of Person Component</h3>
        </div>
    );
}

//props is a property of Component

// class Person extends Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         //console.log(this.props);
//         return (
//             <div>
//                 <h1>Number : {parseInt(Math.random() * 100)} </h1>
//                 <h3>Name: {this.props.name} and Age {this.props.age} years</h3>
//                 <h4>Information: {this.props.children} {this.props.name} </h4>
//                 {/* <Nested></Nested> */}

//             </div>);
//     }
// }
export default Person;