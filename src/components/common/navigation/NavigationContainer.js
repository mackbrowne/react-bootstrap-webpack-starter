// Framework
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Component to Contain
import Navigation from './NavigationComponent';
import { toggleNavbar } from '../../../actions/ui/navbar';
import { logout } from '../../../actions/auth/auth';

// Connect the STATE to the props fed into the component.
export const mapStateToProps = ({
  auth: { user: { name, company, website }, isLoggedIn },
  navbar: { isOpen }
}) => {
  return {
    isLoggedIn,
    name,
    company,
    website,
    isOpen
  };
};

// Connect ACTIONS to the props fed into the component.
export const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      toggle: toggleNavbar,
      logout
    },
    dispatch
  );
};

// Create higher-order component which feeds in specified props.
const NavigationContainer = connect(mapStateToProps, mapDispatchToProps)(
  Navigation
);

export default NavigationContainer;
