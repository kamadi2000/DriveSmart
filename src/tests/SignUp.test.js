import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import SignUp from "../screens/signUpScreen"; 
import { Provider } from "react-redux";
import store from "../redux/store";
import { NavigationContainer } from "@react-navigation/native";
jest.useFakeTimers()

describe("SignUp Component", () => {
  it("Renders the sign-up form", () => {
    const { getByText, getByTestId } = render(
        <Provider store={store}>
            <NavigationContainer>
                <SignUp />
            </NavigationContainer>
        </Provider>
    );

    expect(getByText("Sign up")).toBeTruthy();
    expect(getByTestId("Name")).toBeTruthy();
    expect(getByTestId("Email")).toBeTruthy();
    expect(getByTestId("Password")).toBeTruthy();
    expect(getByTestId("Re-enter password")).toBeTruthy();
  })

  it("Allows the user to enter name, email, and password", () => {
    const { getByPlaceholderText, getByTestId } = render(
        <Provider store={store}>
            <NavigationContainer>
                <SignUp />
            </NavigationContainer>
        </Provider>);
    const nameInput = getByTestId("Name");
    const emailInput = getByTestId("Email");
    const passwordInput = getByTestId("Password");
    const reEnterPasswordInput = getByTestId("Re-enter password");

    fireEvent.changeText(nameInput, "John Doe");
    fireEvent.changeText(emailInput, "test@example.com");
    fireEvent.changeText(passwordInput, "password123");
    fireEvent.changeText(reEnterPasswordInput, "password123");

    expect(nameInput.props.value).toBe("John Doe");
    expect(emailInput.props.value).toBe("test@example.com");
    expect(passwordInput.props.value).toBe("password123");
    expect(reEnterPasswordInput.props.value).toBe("password123");
  });
});