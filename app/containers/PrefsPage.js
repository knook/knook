import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Prefs from '../components/Prefs';

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch);
}

export default Prefs;
