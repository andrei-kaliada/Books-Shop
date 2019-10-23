import BookCard from '../components/BookCard';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as menuActions from '../actions/cart';

const mapStateToProps = ({cart}, {id}) => ({
    addedCount:cart.items.reduce(
        (count,book) => {
         return  count + (book.id === id ? 1 : 0) 
        },0
    )
  });
  
  const mapDispathToProps = dispatch => ({
    ...bindActionCreators(menuActions, dispatch),
  })
export default connect(mapStateToProps, mapDispathToProps)(BookCard);