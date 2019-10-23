import React from 'react';
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import BookCard from '../containers/Cart';
import { Card } from 'semantic-ui-react';
import Filter from '../containers/Filter';
import Menu from '../containers/Menu';



class App extends React.Component{

  componentWillMount(){
    const { setBooks } = this.props;
    axios.get('/books.json')
    .then( ({data}) => {
      setBooks( data );
    })
  }

  render(){

   const { books, isReady , cart } = this.props;

   console.log(cart);
    return(
    <>
      <Container>
        <Menu />
        <Filter />
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
