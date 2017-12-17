// Framework
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Component to Contain
import PrivateRouteComponent from './PrivateRouteComponent';

// Connect the STATE to the props fed into the component.
export const mapStateToProps = ({ auth: { isLoggedIn } }) => {
  return {
    isLoggedIn
  };
};

// Connect ACTIONS to the props fed into the component.
export const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

// Create higher-order component which feeds in specified props.
const PrivateRouteContainer = connect(mapStateToProps, mapDispatchToProps)(
  PrivateRouteComponent
);

export default PrivateRouteContainer;
