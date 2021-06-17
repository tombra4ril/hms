import { unmountComponentAtNode, render } from "react-dom";
import { act } from "react-dom/test-utils"
import NewInput from "../NewInput"

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div")
  document.body.appendChild(container)
})

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove()
  container = null
});

it("Renders NewInput.js component", () => {
  // displays text
  act(() => {
    render(<NewInput />, container)
  })
  expect(container.textContent).toBe("close")
  
  // check for input field and class
  act(() => {
    render(<NewInput />, container)
  })
  expect(container.querySelector("input").classList.contains("input")).toEqual(true)
  
  // check for label field and class
  act(() => {
    render(<NewInput />, container)
  })
  expect(container.querySelector("label").classList.contains("label")).toEqual(true)
})