import "./Login.css";
import logo from "./../../assets/images/LogoWhite.svg";
import btnIcon from "./../../assets/btnDecoration/arrowRight.svg";

import { Input } from "../../components/input/Input";
import { Btn } from "../../components/btn/Btn";


export const Login = () => {
    return(
        <div className="layoutBackground">
            <img src={logo} alt="" />

            <div className="loginStyles">
                <Input/>
                <Input/>
            </div>
            <p>¿Has olvidado la contraseña?</p>

            <div className="btnContainer">
                <Btn text="LOGIN" icon={btnIcon} />
            </div>

        </div>
    )
}
