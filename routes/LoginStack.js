import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Login from "./../views/login";
import Register from "./../views/register";

const screens = {
    Login: {
        screen: Login,
    },
    Register: {
        screen: Register,
    },
};

const LoginStack = createStackNavigator(screens);

export default createAppContainer(LoginStack);
