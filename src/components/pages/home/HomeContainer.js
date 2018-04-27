// Framework
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Component to Contain
import Home from './HomeComponent';

// Actions
import {
  nextPage,
  getNoMorePLaces,
  getPlaces
} from '../../../actions/ui/places';

// Connect the STATE to the props fed into the component.
export const mapStateToProps = state => ({
  places: getPlaces(state),
  noMorePlaces: getNoMorePLaces(state)
});

// Connect ACTIONS to the props fed into the component.
export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      nextPage
    },
    dispatch
  );

// Create higher-order component which feeds in specified props.
const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
