import LocationScreen from "./components/screens/LocationScreen";
import LoginScreen from "./components/screens/LoginScreen";
import NumberPhoneScreen from "./components/screens/NumberPhoneScreen";

export const screens = [
    {
        title: "Логин и пароль",
        component: (props) => <LoginScreen {...props} />
    },
    {
        title: "Где проживаете",
        component: (props) => <LocationScreen {...props} />
    },
    {
        title: "Номер телефона",
        component: (props) => <NumberPhoneScreen {...props} />
    },
]

export const fieldsBase = {
    login: "",
    email: "",
    password: "",
    repeatPassword: "",
    сountry: "",
    city: "",
    street: "",
    hom: "",
    number: ""
}