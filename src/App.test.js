import React from "react";
import * as rtl from "@testing-library/react"; // why we importing as * // Becasue testing library react has no deafult export we just want to import everthing
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import { exportAllDeclaration } from "@babel/types";
// Function that is going to run after every  single one of our tests runs. whatever prarameter pass to this function
afterEach(rtl.cleanup);

test("Renders the App", () => {
  const wrapper = rtl.render(<App />); // we are passing our component to render  in memory //
  wrapper.debug(wrapper.queryByText("The Dog Website"));
  wrapper.debug(wrapper.queryByPlaceholderText("Image Count")); // and will let us look at our component how JSX structured and it's got render// go to into your terminal and run npm test
  const element = wrapper.getByText("The Dog Website");
  expect(element).toBeVisible();
});
