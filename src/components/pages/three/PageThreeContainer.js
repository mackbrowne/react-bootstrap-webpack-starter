// Framework
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Component to Contain
import PageThree from "./PageThreeComponent";

// Connect the STATE to the props fed into the component.
export const mapStateToProps = state => {
  return {};
};

// Connect ACTIONS to the props fed into the component.
export const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

// Create higher-order component which feeds in specified props.
const PageThreeContainer = connect(mapStateToProps, mapDispatchToProps)(
  PageThree
);

export default PageThreeContainer;
