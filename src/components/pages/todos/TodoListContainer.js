// Framework
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import { toggleTodo, toggleVisibility } from '../../../actions/todos/todoList';

// Selectors
import { visibleTodoSelector } from './TodoListSelectors';

// Component to Contain
import TodoListComponent from './TodoListComponent';

// Connect the STATE to the props fed into the component.
export const mapStateToProps = ({ todos: { todos, showDone } }) => {
  return {
    todos: visibleTodoSelector({ todos, showDone }),
    showDone
  };
};

// Connect ACTIONS to the props fed into the component.
export const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      toggleTodo,
      toggleVisibility
    },
    dispatch
  );
};

// Create higher-order component which feeds in specified props.
const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(
  TodoListComponent
);

export default TodoListContainer;
