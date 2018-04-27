import { takeEvery, put, select, call } from 'redux-saga/effects';

// Api
import { fetchPlaces } from '../../api/places';

// Actions
export const NEXT_PAGE = 'PAGE/NEXT_PAGE';
export const LOAD_PLACES = 'PAGE/LOAD_PLACES';
export const NO_MORE_PLACES = 'PAGE/NO_MORE_PLACES';

// Action Creators
export const nextPage = () => ({
  type: NEXT_PAGE
});

export const loadPlaces = places => ({
  type: LOAD_PLACES,
  places
});

export const noMorePlaces = () => ({
  type: NO_MORE_PLACES
});

// Selectors
export const getPage = state => state.places.page;
export const getPlaces = state => state.places.places;
export const getNoMorePLaces = state => state.places.noMorePlaces;

export const DEFAULT_STATE = {
  page: 0,
  places: [],
  noMorePlaces: false
};

// Reducer
const PlacesReducer = (state = DEFAULT_STATE, { type, places }) => {
  switch (type) {
    case NEXT_PAGE:
      return {
        ...state,
        page: state.page + 1
      };
    case LOAD_PLACES:
      return {
        ...state,
        places: [...state.places, ...places]
      };
    case NO_MORE_PLACES:
      return {
        ...state,
        noMorePlaces: true
      };
    default:
      return state;
  }
};

/*** Sagas ***/
// Worker
export function* pageAsyncStateWorker(action) {
  try {
    const page = yield select(getPage);
    const { data } = yield call(fetchPlaces, page);
    yield put(loadPlaces(data));
  } catch (err) {
    yield put(noMorePlaces());
  }
}

// Watcher
export function* pageSaga() {
  yield takeEvery(NEXT_PAGE, pageAsyncStateWorker);
}

export default PlacesReducer;
