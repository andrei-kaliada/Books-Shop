import Menu from '../components/Menu';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as menuActions from '../actions/menu';
import uniqBy from 'lodash/uniqBy';

const mapStateToProps = ({cart}) => ({
    totalPrice:cart.items.reduce((total,book) => total + book.price, 0),
    count:cart.items.length,
    items:uniqBy(cart.items, o => o.id),
  });
  
  const mapDispathToProps = dispatch => ({
    ...bindActionCreators(menuActions, dispatch),
  })
export default connect(mapStateToProps, mapDispathToProps)(Menu); 