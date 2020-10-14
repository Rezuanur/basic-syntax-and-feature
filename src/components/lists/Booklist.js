import React from 'react';

import Book from '../representational/Book';

const Booklist = (props) => {
    return (
        props.books.map((book, index) => {

            return (
                <Book bookname={book.bookname}
                    writer={book.writer}
                    delete={() => props.deleteBookState(index)}
                    key={book.id}
                    inputName={(event) => props.changeWithInputField(event, index)} />
            );

        })
    )
};

export default Booklist
