import { createSelector } from 'reselect';

const todoSelector = ({ todos }) => todos;
const visibilitySelector = ({ showDone }) => showDone;

export const visibleTodoSelector = createSelector(
  todoSelector,
  visibilitySelector,
  (todos, visible) => (visible ? todos : todos.filter(({ done }) => !done))
);
