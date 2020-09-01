import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import LoginForm from "../components/login/Login.jsx";
Enzyme.configure({ adapter: new EnzymeAdapter() });

const findByTestAttr = (wrapper, val) => {
  const wrapper = shallow(<LoginForm/>);
  return wrapper.find("[data-test='component-app']");
};
