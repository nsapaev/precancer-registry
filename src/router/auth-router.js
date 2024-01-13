import ConfirmMail from "../views/modules/authentication/confirm-mail";
import LockScreen from "../views/modules/authentication/lock-screen";
import RecoverPassword from "../views/modules/authentication/recover-password";
import RegisterPage from "../views/modules/authentication/register";
import LoginComponent from "../views/login/Login-component";

export const AuthRouter = [
    {
        path:'/login-page',
        element:<LoginComponent/>
    },
    {
        path:'/sign-up',
        element:<RegisterPage/>
    },
    {
        path:'/recover-password',
        element:<RecoverPassword/>
    },
    {
        path:'/confirm-mail',
        element:<ConfirmMail/>
    },
    {
        path:'/lock-screen',
        element:<LockScreen/>
    }
]