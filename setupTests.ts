import "@testing-library/jest-dom/extend-expect";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "whatwg-fetch";

configure({ adapter: new Adapter() });
jest.setTimeout(30000);
