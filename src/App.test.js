import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import App from "./App";
import SingleColor from "./components/SingleColor";

Enzyme.configure({ adapter: new Adapter() });

test("renders without crashing", () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find('[data-test="component-app"]');
  expect(appComponent.length).toBe(1);
});

test("render Navbar Component", () => {
  const wrapper = shallow(<App />);
  const navComponent = wrapper.find('[data-test="component-navbar"]');
  expect(navComponent.length).toBe(1);
});

test("rendering <App /> state", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.state().color).toEqual(expect.any(String));
  expect(wrapper.state().error).toBe(false);
  expect(wrapper.state().colorList).toEqual(expect.any(Array));
});

test("submiting form", () => {
  const wrapper = mount(<App />);

  const formEventMocked = { preventDefault: jest.fn() };
  wrapper.find("form").simulate("submit", formEventMocked);
  expect(formEventMocked.preventDefault).toBeCalledTimes(1);
  expect(wrapper.update().state().colorList).not.toBe([]);
});

test("Updates the count state after submiting", () => {
  const wrapper = shallow(<App />);
  const input = wrapper.find('[data-test="onchange-count-state"]');
  input.simulate("change", { target: { value: "#333" } });
  expect(wrapper.state().color).toEqual("#333"); // SUCCESS
});
