import Filter from '../components/Filter';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as filterActions from '../actions/filter';

const mapStateToProps = ({books}) => ({
    filterBy:books.filterBy
  });
  
  const mapDispathToProps = dispatch => ({
    ...bindActionCreators(filterActions, dispatch),
  })
export default connect(mapStateToProps, mapDispathToProps)(Filter);
