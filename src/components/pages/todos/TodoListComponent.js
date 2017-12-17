// Framework
import React from 'react';

// Components
import { Row, Col, ListGroup } from 'reactstrap';
import {
  TodoListContainer,
  FilterContainer,
  FilterToggle,
  TodoItem,
  TitleCol,
  CheckCol
} from './TodoList.style';
import FaCheckSquare from 'react-icons/lib/fa/check-square';
import FaSquareO from 'react-icons/lib/fa/square-o';

/**
 * Todo List page for the app!
 *
 * @param {Object} props All the properties passed to the React Component.
 * @returns {StatelessComponent} Stateless functional React component.
 */
const TodoListComponent = ({
  todos = [],
  showDone = true,
  toggleTodo = () => {},
  toggleVisibility = () => {}
}) => (
  <TodoListContainer fluid>
    <Row>
      <Col>
        <h3>Todos</h3>
        <br />
        <FilterContainer>
          <label>
            <span>Include Completed - </span>
            <FilterToggle
              defaultChecked={showDone}
              onChange={toggleVisibility}
            />
          </label>
        </FilterContainer>
        <ListGroup>
          {todos.map(({ id, title, done }) => (
            <TodoItem
              key={id}
              tag="button"
              action
              onClick={() => {
                toggleTodo(id);
              }}
            >
              <TitleCol>{title}</TitleCol>
              <CheckCol>{done ? <FaCheckSquare /> : <FaSquareO />}</CheckCol>
            </TodoItem>
          ))}
        </ListGroup>
      </Col>
    </Row>
  </TodoListContainer>
);

export default TodoListComponent;
