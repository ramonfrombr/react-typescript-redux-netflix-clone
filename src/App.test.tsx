import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import HomeScreen from "./screens/HomeScreen";

test("renders Netflix string", () => {
  const { getByText } = render(
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );

  expect(getByText(/Netflix/i)).toBeInTheDocument();
});
