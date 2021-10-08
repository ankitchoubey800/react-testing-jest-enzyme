import React from "react";
import { shallow } from "enzyme";
import Header from "./index";
import { findByTestAttribute } from "../../../utils/index";

const setUp = (props = {}) => {
  //this is called shallow rendering where you get the exact component
  const component = shallow(<Header {...props} />);
  return component;
};

describe("Header Component", () => {
  let component;
  //beforeEach function runs before running all test functions
  beforeEach(() => {
    component = setUp();
  });

  it("Check if headerComponent is used in one element only in <Header/> Component", () => {
    //console.log(component.debug());
    const wrapper = findByTestAttribute(component, "headerComponent");
    expect(wrapper.length).toBe(1);
  });

  it("Check if logoIMG is used in one element only in <Header/> Component", () => {
    const wrapper = findByTestAttribute(component, "logoIMG");
    expect(wrapper.length).toBe(1);
  });
});
