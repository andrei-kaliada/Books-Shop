import React from 'react';
import axios from 'axios';
import Menu from './Menu';
import { Container } from 'semantic-ui-react';
import BookCard from './BookCard';
import { Card } from 'semantic-ui-react';



class App extends React.Component{

  componentWillMount(){
    const { setBooks } = this.props;
    axios.get('/books.json')
    .then( ({data}) => {
      setBooks( data );
    })
  }

  render(){

   const { books, isReady , cart} = this.props;

   console.log(cart);
    return(
    <>
      <Container>
        <Menu />
        <Card.Group itemsPerRow={4}>
          {
            !isReady ? <b>Download...</b>:
            books.map(book => (
              <BookCard key={book.id} {...book}/>
            ))
          }
        </Card.Group>
      </Container>
    </>  
    )
  }
}



export default App;
