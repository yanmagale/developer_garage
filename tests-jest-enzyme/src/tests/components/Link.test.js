import React from "react";
import { mount } from "enzyme";
import Link from "../../components/Link";

describe("<Link> Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Link page="http://www.facebook.com">Facebook</Link>);
  });

  it("Render without crashing", () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it("Render with a content in DOM", () => {
    expect(wrapper.find("a")).toHaveLength(1);
  });

  it("Render Text content inside itself", () => {
    expect(wrapper.text()).toEqual("Facebook");
  });

  it("Received and Render a page prop", () => {
    expect(wrapper.prop("page")).toEqual("http://www.facebook.com");
  });

  it("Render UI behavior when hovered", () => {
    wrapper.find("a").simulate("mouseEnter");

    expect(wrapper.find("a").hasClass("hovered")).toBeTruthy();
  });

  it("Render initial UI class after mouseLeave", () => {
    wrapper.find("a").simulate("mouseLeave");

    expect(wrapper.find("a").hasClass("normal")).toBeTruthy();
  });
});
