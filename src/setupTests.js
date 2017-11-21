import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// TODO: mock some libraries here, this was left here intentionally
// TODO: this snippet can be deleted after a few libraries have been mocked
// const localStorageMock = {
//   getItem: jest.fn(),
//   setItem: jest.fn(),
//   clear: jest.fn()
// };
// global.localStorage = localStorageMock
