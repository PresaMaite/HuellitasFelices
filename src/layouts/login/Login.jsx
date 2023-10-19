import "./Login.css";
import logo from "./../../assets/images/LogoWhite.svg";
import btnIcon from "./../../assets/btnDecoration/arrowRight.svg";

import { Input } from "../../components/input/Input";
import { Btn } from "../../components/btn/Btn";
import { LoginFooter } from "../../components/loginFooter/LoginFooter";


export const Login = () => {
    return(
        <div className="loginBackground">
            <img src={logo} alt="Huellitas Felices" className="loginLogo" />

            <div className="formStyles">
                <div className="loginStyles">
                    <Input placeholder="usuario" type="text"/>
                    <Input placeholder="contraseña" type="password"/>
                </div>
                <p className="questAlign">¿Has olvidado la contraseña?</p>
            </div>

            <div className="btnContainer">
                <Btn text="LOGIN" icon={btnIcon} />
            </div>

            <LoginFooter text="¿No tienes cuenta? Regístrate" />

        </div>
    )
}
