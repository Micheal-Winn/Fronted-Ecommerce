import React, {Fragment, useEffect, useRef, useState} from 'react'
import {Face, LockOpen, MailOutline} from "@mui/icons-material";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import profilePng from '../../images/profilepng.png'
import {loginUser, registerUser} from "../../features/UserFetching/userSlice";
const LoginSignUp = ({  location }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    // eslint-disable-next-line no-use-before-define
    const {Authenticated}= useSelector(state => state.user)
    const loginTab = useRef(null);
    const registerTab = useRef(null);
    const switcherTab = useRef(null);

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    });

    const { name, email, password } = user;

    const [avatar, setAvatar] = useState(profilePng);
    const [avatarPreview, setAvatarPreview] = useState(profilePng);

    const loginSubmit = (e) => {
        e.preventDefault();
         dispatch(loginUser({loginEmail,loginPassword}));
    };

    const registerSubmit = (e) => {
        e.preventDefault();

        // const myForm = new FormData();
        //
        // myForm.append("name", name);
        // myForm.append("email", email);
        // myForm.append("password", password);
        // myForm.append("avatar", avatar);
        // console.log(myForm.get('name'))
        // dispatch(registerUser(myForm))

        dispatch(registerUser({name,email,password}))
    }
    ;

    const registerDataChange = (e) => {
        if (e.target.name === "avatar") {
            const file = e.target.files[0]
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend=()=>{
                setAvatar(reader.result)
                setAvatarPreview(reader.result)
            }


        } else {
            setUser({ ...user, [e.target.name]: e.target.value });
        }
    };

    // const redirect = location.search ? location.search.split("=")[1] : "/account";

    useEffect(() => {
            if (Authenticated) {
                navigate('/account');
            }
        }, [dispatch,navigate, Authenticated]);

        const switchTabs = (e, tab) => {
            if (tab === "login") {
                switcherTab.current.classList.add("shiftToNeutral");
                switcherTab.current.classList.remove("shiftToRight");

                registerTab.current.classList.remove("shiftToNeutralForm");
                loginTab.current.classList.remove("shiftToLeft");
            }
            if (tab === "register") {
                switcherTab.current.classList.add("shiftToRight");
                switcherTab.current.classList.remove("shiftToNeutral");

                registerTab.current.classList.add("shiftToNeutralForm");
                loginTab.current.classList.add("shiftToLeft");
            }
        };

        return (

            <Fragment>
                <div className="LoginSignUpContainer">
                    <div className="LoginSignUpBox">
                        <div>
                            <div className="login_signUp_toggle">
                                <p onClick={(e) => switchTabs(e, "login")}>LOGIN</p>
                                <p onClick={(e) => switchTabs(e, "register")}>REGISTER</p>
                            </div>
                            <button ref={switcherTab}></button>
                        </div>
                        <form className="loginForm" ref={loginTab} onSubmit={loginSubmit}>
                            <div className="loginEmail">
                                <MailOutline/>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    required
                                    value={loginEmail}
                                    onChange={(e) => setLoginEmail(e.target.value)}
                                />
                            </div>
                            <div className="loginPassword">
                                <LockOpen/>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    required
                                    value={loginPassword}
                                    onChange={(e) => setLoginPassword(e.target.value)}
                                />
                            </div>
                            <Link to="/password/forgot">Forget Password ?</Link>
                            <input type="submit" value="Login" className="loginBtn"/>
                        </form>
                        <form
                            className="signUpForm"
                            ref={registerTab}
                            encType="multipart/form-data"
                            onSubmit={registerSubmit}
                        >
                            <div className="signUpName">
                                <Face/>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    required
                                    name="name"
                                    value={name}
                                    onChange={registerDataChange}
                                />
                            </div>
                            <div className="signUpEmail">
                                <MailOutline/>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    required
                                    name="email"
                                    value={email}
                                    onChange={registerDataChange}
                                />
                            </div>
                            <div className="signUpPassword">
                                <LockOpen/>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    required
                                    name="password"
                                    value={password}
                                    onChange={registerDataChange}
                                />
                            </div>

                            <div id="registerImage">
                                <img className={'mr-1'} src={avatarPreview} alt="Avatar Preview"/>
                                <input
                                    type="file"
                                    name="avatar"
                                    accept="image/*"
                                    onChange={registerDataChange}
                                />
                            </div>
                            <input type="submit" value="Register" className="signUpBtn"/>
                        </form>
                    </div>
                </div>
            </Fragment>

        );

}

export default LoginSignUp;