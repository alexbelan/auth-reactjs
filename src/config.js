import LocationScreen from "./components/screens/LocationScreen";
import LoginScreen from "./components/screens/LoginScreen";
import NumberPhoneScreen from "./components/screens/NumberPhoneScreen";

export const screens = [
    {
        title: "Логин и пароль",
        component: <LoginScreen />
    },
    {
        title: "Где проживаете",
        component: <LocationScreen />
    },
    {
        title: "Номер телефона",
        component: <NumberPhoneScreen />
    },
]