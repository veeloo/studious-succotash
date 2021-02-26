import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Login from "../views/Login";
import Register from "../views/Register";

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
