import React, { Component } from 'react';
import Booklist from './lists/Booklist';
import booklist from '../Assets/books'


class MainComponent extends Component {
    state = {
        books: booklist,
        showBooks: true
    }
    deleteBookState = (index) => {
        const books = [...this.state.books];
        books.splice(index, 1);
        this.setState({
            books: books
        })
    }

    changeWithInputField = (event, index) => {
        const book = {
            ...this.state.books[index]
        }
        book.bookname = event.target.value;
        const books = [...this.state.books];
        books[index] = book;
        this.setState({ books: books });
    }

    toggleBooks = () => {
        this.setState({ showBooks: !this.state.showBooks })
    }


    render() {

        const style = {
            border: "1px solid red",
            borderRadius: "5px",
            backgroundColor: "black",
            color: "white"
        }

        //const booksState = this.state.books;

        let books = null;
        if (this.state.showBooks) {
            books = <Booklist
                books={this.state.books}
                deleteBookState={this.deleteBookState}
                changeWithInputField={this.changeWithInputField} />

        }

        //console.log("bookastate", booksState);
        console.log(books);
        return (
            <div className="App">

                <h1 style={style}> Book List</h1>
                <button onClick={this.toggleBooks} >Toggle  Books</button>
                {books}
            </div>
        );
    }
}
export default MainComponent