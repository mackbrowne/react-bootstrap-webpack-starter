// Framework
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Component to Contain
import Login from './LoginComponent';

// Actions
import { setInputValue } from '../../../actions/ui/input';
import { dismissError, login } from '../../../actions/auth/auth';

// Connect the STATE to the props fed into the component.
export const mapStateToProps = ({ input: { email }, auth: { error } }) => ({
  email,
  error
});

// Connect ACTIONS to the props fed into the component.
export const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setInputValue, login, dismissError }, dispatch);
};

// Create higher-order component which feeds in specified props.
const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;
