import React from 'react';
import { connect } from 'react-redux';
import { setBooks } from './actions/books';

const newBooks = [
  {
      id:1,
      title:'Harry Potter',
    }
]


class App extends React.Component{

  render(){
    console.log(this.props);
    const { books } = this.props.books;
    const { setBooks } = this.props;

    const addNewBook = () => {
      setBooks(newBooks);
    }
    
    return (
      <>
        <h1>{books[0].title}</h1>
        <button onClick={addNewBook}>Click on me</button>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  books:state.books,
});

const mapDispathToProps = (dispatch) => ({
  setBooks:(books) => dispatch(setBooks(books)),
})

export default connect(mapStateToProps, mapDispathToProps)(App);
