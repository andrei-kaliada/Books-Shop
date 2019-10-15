import React from 'react';
import { connect } from 'react-redux';
import { setBooks } from './actions/books';
import axios from 'axios';
import Menu from '../src/components/Menu.jsx';
import { Container } from 'semantic-ui-react';
import BookCard from '../src/components/BookCard';



class App extends React.Component{

  componentWillMount(){
    const { setBooks } = this.props;
    axios.get('/books.json')
    .then( ({data}) => {
      setBooks( data );
    })
  }


  render(){

   const { books, isReady } = this.props;
    return(
    <>
      <Container>
        <Menu />
        <ul>
        {
          !isReady ? <b>Download...</b>:
          books.map(book => (
            <BookCard {...book}/>
          ))
        }
        </ul>
      </Container>
    </>  
    )
  }
}

const mapStateToProps = ({books}) => ({
  books:books.items,
  isReady:books.isReady,
});

const mapDispathToProps = (dispatch) => ({
  setBooks:(books) => dispatch(setBooks(books)),
})

export default connect(mapStateToProps, mapDispathToProps)(App);
