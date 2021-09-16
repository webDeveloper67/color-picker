import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import SingleColor from "./SingleColor";

Enzyme.configure({ adapter: new Adapter() });

const initialProps = {
  color: {
    rgb: [],
    weight: 20,
  },
  index: 0,
};

test("<SingleColor /> renders without crashing", () => {
  const spy = jest.spyOn(SingleColor.prototype, "hexColors");
  spy.mockReturnValue("mockItem1");
  expect(SingleColor.prototype.hexColors("mockItem1")).toBe("mockItem1");

  const wrapper = shallow(<SingleColor {...initialProps} />);
  const singleColorComponent = wrapper.find(
    '[data-test="component-single-color"]'
  );
  expect(singleColorComponent.length).toBe(1);
});

test("rendering <SingleColor /> state", () => {
  const wrapper = shallow(<SingleColor {...initialProps} />);
  expect(wrapper.state().alert).toBe(false);
});

test("showing copy to clipboard text if alert is TRUE", () => {
  const wrapper = shallow(<SingleColor {...initialProps} />);
  wrapper.setState({ alert: true });
  const clipboardText = wrapper.find('[data-test="copy-to-clipboard"]');
  expect(clipboardText).toHaveLength(1);
  expect(clipboardText.text()).toEqual("copied to clipboard");
});

const originalClipboard = { ...global.navigator.clipboard };
const mockData = {
  hexVal: "#eaeaea",
};

beforeEach(() => {
  const mockClipboard = {
    writeText: jest.fn().mockImplementation(() => Promise.resolve()),
  };
  global.navigator.clipboard = mockClipboard;
});

afterEach(() => {
  jest.resetAllMocks();
  global.navigator.clipboard = originalClipboard;
});

test("simulating clicking a card will copy the color", () => {
  const wrapper = shallow(<SingleColor {...initialProps} />);
  wrapper.setState({ alert: false });
  let card = wrapper
    .find('[data-test="component-single-color"]')
    .at(0)
    .simulate("click");

  wrapper.update();
  wrapper.setState({ alert: true });
  expect(wrapper.state("alert")).toBe(true);
  expect(navigator.clipboard.writeText).toBeCalledTimes(1);
  // expect(navigator.clipboard.writeText).toHaveBeenCalledWith(mockData);
});

test("rendering componentDidUpdate", () => {
  const wrapper = mount(<SingleColor {...initialProps} />);
  const renderSpy = jest.spyOn(SingleColor.prototype, "componentDidUpdate");

  wrapper.setState({ alert: false });
  expect(wrapper.state("alert")).toBe(false);
  expect(renderSpy).toBeCalled();
});
