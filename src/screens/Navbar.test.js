import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Navbar from "./Navbar";

Enzyme.configure({ adapter: new Adapter() });

test("render <Navbar /> without crashing", () => {
  const wrapper = shallow(<Navbar />);
  const navbarComponent = wrapper.find('[data-test="component-navbar"]');
  expect(navbarComponent.length).toBe(1);
});

test("displaying navbar brand title", () => {
  const wrapper = shallow(<Navbar />);
  const navbarBrandComponent = wrapper.find(
    '[data-test="component-navbar-brand"]'
  );
  expect(navbarBrandComponent.length).toBe(1);
});
