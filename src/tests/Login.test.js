import { fireEvent, render, waitFor } from "@testing-library/react-native"
import LoginScreen from "../screens/loginScreen"
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "../redux/store";
import App from "../../App";
import { createStackNavigator } from "@react-navigation/stack";
import SignUp from "../screens/signUpScreen";
import { act } from "react-test-renderer";
jest.useFakeTimers()

//this groups related tes cases together
describe("LoginScreen Component", () => {


    it('Renders the login screen', () => {
        const { getByText, getByLabelText, getByPlaceholderText } = render(
            <Provider store={store}>
                <NavigationContainer>
                    <LoginScreen />
                </NavigationContainer>

            </Provider>

        );

        // Assert that the login screen contains certain elements
        expect(getByText('Login')).toBeTruthy();
        expect(getByText('Email')).toBeTruthy();
        expect(getByText('Password')).toBeTruthy();
        expect(getByText('Login')).toBeTruthy();
    });

    it('Allows the user to enter their email and password', () => {
        const { getByText, getByTestId } = render(
            <Provider store={store}>
                <NavigationContainer>
                    <LoginScreen />
                </NavigationContainer>
            </Provider>

        );
        const emailInput = getByTestId('loginEmail');
        const passwordInput = getByTestId('loginPassword');

        fireEvent.changeText(emailInput, 'testuser@example.com');
        fireEvent.changeText(passwordInput, 'password123');

        expect(emailInput.props.value).toBe('testuser@example.com');
        expect(passwordInput.props.value).toBe('password123');
    });

    it("Handles the login action correctly",async() => {
        const { getByText, getByPlaceholderText, getByTestId } = render(
            <Provider store={store}>
                <NavigationContainer>
                    <LoginScreen />
                </NavigationContainer>
            </Provider>

        );
        const emailInput = getByTestId('loginEmail');
        const passwordInput = getByTestId('loginPassword');
        const loginButton = getByTestId("loginButton");

        // Mock your authentication function (useAuth) to ensure it returns the expected result
        jest.mock("../apis/auth", () => ({
            hangleLogin: (formData) => {
                // You can simulate success or failure based on formData
                if (formData.email === "test@example.com" && formData.password === "password123") {
                    return { success: true };
                } else {
                    return { success: false };
                }
            },
        }));

        fireEvent.changeText(emailInput, "test@example.com");
        fireEvent.changeText(passwordInput, "password123");
        await waitFor(() => {fireEvent.press(loginButton)
            expect("DashboardStack")
        })
        

    });

    it("Navigates to the sign-up screen", async () => {

        const Stack = createStackNavigator()
        const { getByText, getByTestId } = render(
            <Provider store={store}>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="login">
                        <Stack.Screen name='Login' component={LoginScreen} />
                        <Stack.Screen name='Sign-Up' component={SignUp} />
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>);
        const signUpLink = getByTestId("register");

        await waitFor(() => fireEvent.press(signUpLink));

    });

    

})

