import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, render, mount } from 'enzyme';

configure({ adapter: new Adapter() });

global.shallow = shallow;
global.render = render;
global.mount = mount;

const {Response, Request, Headers, fetch} = require('whatwg-fetch');
global.Response = Response;
global.Request = Request;
global.Headers = Headers;
global.fetch = fetch;

// console.error = message => {
//   if (!/(React.createElement: type should not be null)/.test(message)) {
// 		throw new Error(message);
//   }
// };
