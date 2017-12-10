// Framework
import { takeEvery, put } from 'redux-saga/effects';

// Actions
export const GET = 'TODOS/GET';
export const TOGGLE_TODO = 'TODOS/TOGGLE_TODO';
export const TOGGLE_VISIBILITY = 'TODOS/TOGGLE_VISIBILITY';
export const ROUTE = '@@router/LOCATION_CHANGE';

/*** Action Creators ***/
export const get = () => ({
  type: GET
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});

export const toggleVisibility = id => ({
  type: TOGGLE_VISIBILITY
});

const defaultTodos = [
  { id: Math.random(), title: 'example todo #1', done: false },
  { id: Math.random(), title: 'example todo #2', done: true },
  { id: Math.random(), title: 'example todo #3', done: false }
];

/*** Reducer ***/
export const DEFAULT_STATE = {
  todos: [],
  showDone: true
};

const toggleTodoState = (todos, id) => ({
  todos: todos.map(
    todo =>
      todo.id !== id
        ? todo
        : {
            ...todo,
            done: !todo.done
          }
  )
});

export default function TodoListReducer(
  state = DEFAULT_STATE,
  { type, id } = {}
) {
  const { todos, showDone } = state;
  switch (type) {
    case GET:
      return { ...state, todos: defaultTodos };
    case TOGGLE_TODO:
      return {
        ...state,
        ...toggleTodoState(todos, id)
      };
    case TOGGLE_VISIBILITY:
      return {
        ...state,
        showDone: !showDone
      };
    default:
      return state;
  }
}

/*** Sagas ***/
// Worker
export function* todosRouteStateWorker(action) {
  try {
    switch (action.payload.pathname) {
      case '/todos':
        yield put(get());
        break;
      default:
        break;
    }
  } catch (err) {
    yield console.log(err);
  }
}

// Watcher
export function* todosRouteSaga() {
  yield takeEvery(ROUTE, todosRouteStateWorker);
}
