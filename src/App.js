import React, { Component } from 'react';
import './App.css';
import Person from './components/Person.js'
import Book from './components/Book'


//JSX


//Functional Component
// function App() {
//   return (
//     <div className="App">

//       <h1>Hello World</h1>
//       <Person />

//     </div>
//   );
//   // return React.createElement('div', { className: "App" }, React.createElement('h1', null, 'Hello World'), <Person />);
// }

//Class Component

class App extends Component {
  //State
  //
  state = {
    books: [
      { bookname: "1984", writer: "George Orwell" },
      { bookname: "The Da Vinci Code", writer: "Dan Brown" },
      { bookname: "The Alchemist", writer: "Paulo Coelho" }
    ],
    otherProp: "I am other prop"
  };
  // constructor() {
  //   super();
  //   this.state = {};
  // }
  changeBookState = (newBookName) => {
    //Wrong
    // this.state.books[0].bookname = '1074'

    this.setState({
      books: [
        { bookname: newBookName, writer: "George Orwell" },
        { bookname: "The Da Vinci Code", writer: "Dan Brown" },
        { bookname: "Metamorphosis", writer: "Franz Kafka" }
      ]
    });
  }

  changeWithInputField = (event) => {
    this.setState({
      books: [
        { bookname: event.target.value, writer: "George Orwell" },
        { bookname: "The Da Vinci Code", writer: "Dan Brown" },
        { bookname: "Metamorphosis", writer: "Franz Kafka" }
      ]
    });
  }
  render() {
    // let obj = new Component();
    // console.log(obj);
    const style = {
      border: "1px solid red",
      borderRadius: "5px",
      backgroundColor: "black",
      color: "white"
    }

    console.log(this.state)
    return (
      <div className="App">

        <h1 style={style}> Book List</h1>
        <button onClick={() => this.changeBookState("Nineteen Eighty Four")} >Change State</button>

        <input type="text" onChange={this.changeWithInputField} ></input>
        <Book
          bookname={this.state.books[0].bookname}
          writer={this.state.books[0].writer}
          inputName={this.changeWithInputField} />
        <Book
          bookname={this.state.books[1].bookname}
          writer={this.state.books[1].writer} />
        <Book
          bookname={this.state.books[2].bookname}
          writer={this.state.books[2].writer}
          change={this.changeBookState.bind(this, "Nineteen 84")} />

        {/* <Person name="Rahim" age="25" > I am some information about </Person>
        <Person name="Karim" age="28"> I am some information about </Person>
        <Person name="Rahman" age="35" />
        <Person name="Jamal" age="45" /> */}

      </div>
    );
  }
}




export default App;
