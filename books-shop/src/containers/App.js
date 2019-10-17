import { connect } from 'react-redux';
import { setBooks } from '../actions/books';
import App from '../components/App';


const mapStateToProps = ({books, cart}) => ({
    books:books.items,
    isReady:books.isReady,
    cart:cart.items,
  });
  
  const mapDispathToProps = (dispatch) => ({
    setBooks:(books) => dispatch(setBooks(books)),
  })

  export default connect(mapStateToProps, mapDispathToProps)(App);