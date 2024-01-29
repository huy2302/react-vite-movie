import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { Button, Modal } from 'antd'
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import logo1 from "../../../public/images/logo1.png"
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";

const Header = () => {
    // trạng thái đăng nhập để ẩn login và show uname người dùng header
    const [isLogin, setIsLogin] = useState(false)

    // show toast khi đăng nhập thất bại
    const handleLoginToast = (strMessage) => {
        if (strMessage === "ERR_NETWORK") {
            toast.error("Connection failed, please check network connection.", {

            });
        } else if (strMessage === "ERR_BAD_REQUEST") {
            toast.error("Wrong login information, please try again.", {

            });
        } else {
            toast.success("Logged in successfully!", {

            });
        }
    };

    // Chứa dữ liệu người dùng trả về khi đăng nhập thành công 
    const [user, setUser] = useState({})
    const [formData, setFormData] = useState({
        username: '',
        password: 'none',

    });

    // Hàm xử lý sự kiện khi người dùng nhập vào các trường form
    const handleChange = (e) => {
        const { name, value } = e.target;
        const lowercaseValue = value.toLowerCase();
        setFormData({ ...formData, [name]: lowercaseValue });
    };

    // Hàm xử lý sự kiện khi form được gửi đi
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)
        try {
            const response = await axios.post('http://localhost:8080/user/login', formData);
            console.log('Server response:', response);
            setIsLogin(true)
            setUser(response.data)
            handleLoginToast("success")

            const userInfo = { username: response.data, isLogin: true };
            localStorage.setItem('userInfo', JSON.stringify(userInfo));

        } catch (error) {
            console.error(error.code)
            handleLoginToast(error.code)
            // setShowLoginErr(true)
            // setIsLogin(false)
        }
    };

    useEffect(() => {
        const storedUserInfo = localStorage.getItem('userInfo');
        if (storedUserInfo) {
            const parsedUserInfo = JSON.parse(storedUserInfo);
            console.log(parsedUserInfo)
            setUser(parsedUserInfo.username);
            setIsLogin(parsedUserInfo.isLogin);
        }

    }, []);

    // log out
    const history = useNavigate();
    const location = useLocation();

    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('You will be logged out');
    const showModal = () => {
        setOpen(true);
    };
    const handleLogout = () => {
        setModalText('You are logged out, the board will be closed in 2 seconds.');
        setConfirmLoading(true);
        setTimeout(() => {
            setIsLogin(false);
            setUser({});
            localStorage.removeItem('userInfo');
            setOpen(false);
            setConfirmLoading(false);
            // console.log(location);
            // if (location.pathname === '/movies/') {
            //     history('/home/');
            // } else {
            //     // Nếu không đang ở trang profile, làm mới trang hiện tại
            //     window.location.reload();
            // }
        }, 2000);
    };
    const handleCancel = () => {
        // console.log('Clicked cancel button');
        setOpen(false);
    };

    return (
        <>
            <ToastContainer />
            {/* <button ref={targetRef} style={{ display: 'none' }}></button> */}
            <div className="overlay">
                <div className="login-wrapper" id="login-content">
                    <div className="login-content">
                        <a href="#" className="close">x</a>
                        <h3>Login</h3>
                        <form onSubmit={handleSubmit} method="post" action="#">
                            <div className="row">
                                <label htmlFor="username">
                                    Username:
                                    <input
                                        type="text"
                                        name="username"
                                        id="username"
                                        placeholder="Username"
                                        // pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{8,20}$"
                                        required="required"
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>

                            <div className="row">
                                <label htmlFor="password">
                                    Password:
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="******"
                                        // pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                                        required="required"
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>
                            <div className="row">
                                <div className="remember">
                                    <div>
                                        <input type="checkbox" name="remember" value="Remember me" /><span>Remember me</span>
                                    </div>
                                    <a href="#">Forget password ?</a>
                                </div>
                            </div>
                            <div className="row">
                                <button type="submit">Login</button>
                            </div>
                        </form>
                        <div className="row">
                            <p>Or via social</p>
                            <div className="social-btn-2">
                                <a className="fb" href="#"><i className="ion-social-facebook"></i>Facebook</a>
                                <a className="tw" href="#"><i className="ion-social-twitter"></i>twitter</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="overlay">
                <div className="login-wrapper" id="signup-content">
                    <div className="login-content">
                        <a href="#" className="close">x</a>
                        <h3>sign up</h3>
                        <form method="post" action="#">
                            <div className="row">
                                <label htmlFor="username-2">
                                    Username:
                                    <input type="text" name="username" id="username-2" placeholder="Hugh Jackman" pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{8,20}$" required="required" />
                                </label>
                            </div>

                            <div className="row">
                                <label htmlFor="email-2">
                                    your email:
                                    <input type="password" name="email" id="email-2" placeholder="" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" required="required" />
                                </label>
                            </div>
                            <div className="row">
                                <label htmlFor="password-2">
                                    Password:
                                    <input type="password" name="password" id="password-2" placeholder="" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" required="required" />
                                </label>
                            </div>
                            <div className="row">
                                <label htmlFor="repassword-2">
                                    re-type Password:
                                    <input type="password" name="password" id="repassword-2" placeholder="" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" required="required" />
                                </label>
                            </div>
                            <div className="row">
                                <button type="submit">sign up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


            <header className="ht-header">
                <div className="container">
                    <nav className="navbar navbar-default navbar-custom">
                        <div className="navbar-header logo">
                            <div className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                <span className="sr-only">Toggle navigation</span>
                                <div id="nav-icon1">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                            <a href="index-2.html"><img className="logo" src={logo1} alt="" width="119" height="58" /></a>
                        </div>
                        <div className="collapse navbar-collapse flex-parent" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav flex-child-menu menu-left">
                                <li className="hidden">
                                    <a href="#page-top"></a>
                                </li>
                                <li className="dropdown first">
                                    <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown">
                                        Home <i className="fa fa-angle-down" aria-hidden="true"></i>
                                    </a>
                                    <ul className="dropdown-menu level1">
                                        <li><a href="index-2.html">Home 01</a></li>
                                        <li><a href="homev2.html">Home 02</a></li>
                                        <li><a href="homev3.html">Home 03</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown first">
                                    {/* <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                                        movies<i className="fa fa-angle-down" aria-hidden="true"></i>
                                    </a> */}
                                    <Link to={"/movies/"} className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                                    movies<i className="fa fa-angle-down" aria-hidden="true"></i>
                                    </Link>
                                    <ul className="dropdown-menu level1">
                                        <li className="dropdown">
                                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" >Movie grid<i className="ion-ios-arrow-forward"></i></a>
                                            <ul className="dropdown-menu level2">
                                                <li><a href="moviegrid.html">Movie grid</a></li>
                                                <li><a href="moviegridfw.html">movie grid full width</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="movielist.html">Movie list</a></li>
                                        <li><a href="moviesingle.html">Movie single</a></li>
                                        <li className="it-last"><a href="seriessingle.html">Series single</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown first">
                                    <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                                        celebrities <i className="fa fa-angle-down" aria-hidden="true"></i>
                                    </a>
                                    <ul className="dropdown-menu level1">
                                        <li><a href="celebritygrid01.html">celebrity grid 01</a></li>
                                        <li><a href="celebritygrid02.html">celebrity grid 02 </a></li>
                                        <li><a href="celebritylist.html">celebrity list</a></li>
                                        <li className="it-last"><a href="celebritysingle.html">celebrity single</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown first">
                                    <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                                        news <i className="fa fa-angle-down" aria-hidden="true"></i>
                                    </a>
                                    <ul className="dropdown-menu level1">
                                        <li><a href="bloglist.html">blog List</a></li>
                                        <li><a href="bloggrid.html">blog Grid</a></li>
                                        <li className="it-last"><a href="blogdetail.html">blog Detail</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown first">
                                    <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                                        community <i className="fa fa-angle-down" aria-hidden="true"></i>
                                    </a>
                                    <ul className="dropdown-menu level1">
                                        <li><a href="userfavoritegrid.html">user favorite grid</a></li>
                                        <li><a href="userfavoritelist.html">user favorite list</a></li>
                                        <li><a href="userprofile.html">user profile</a></li>
                                        <li className="it-last"><a href="userrate.html">user rate</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <ul className="nav navbar-nav flex-child-menu menu-right">
                                <li className="dropdown first">
                                    <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                                        pages <i className="fa fa-angle-down" aria-hidden="true"></i>
                                    </a>
                                    <ul className="dropdown-menu level1">
                                        <li><a href="landing.html">Landing</a></li>
                                        <li><a href="404.html">404 Page</a></li>
                                        <li className="it-last"><a href="comingsoon.html">Coming soon</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Help</a></li>

                                {/* <li className="loginLink"><a href="#">LOG In</a></li>
                                <li className="btn signupLink"><a href="#">sign up</a></li> */}
                                {
                                    isLogin && isLogin === true ? (
                                        <>
                                            <a className="btn btn-default dropdown-toggle lv1 " data-toggle="dropdown" data-hover="dropdown">
                                                <img className="img-avt" src={logo1} alt="Avatar" />
                                            </a>
                                            <ul className="dropdown-menu level1 dropdownhover-bottom ">
                                                <li><button >Profiles</button></li>
                                                <li>
                                                    {/* <button onClick={handleClickLogout}>Log out</button> */}
                                                    <button type="primary" onClick={showModal}>Log out</button>
                                                    {/* <Button type="primary" onClick={showModal}>
                                                    Log out
                                                    </Button> */}
                                                </li>
                                            </ul>
                                            <Modal
                                                title="Warning"
                                                open={open}
                                                onOk={(handleLogout)}
                                                confirmLoading={confirmLoading}
                                                onCancel={handleCancel}
                                            >
                                                <p>{modalText}</p>
                                            </Modal>
                                        </>
                                    ) : (
                                        <>
                                            <li className="loginLink"><a href="#">LOG In</a></li>
                                            <li className="btn signupLink"><a href="#">sign up</a></li>
                                        </>
                                    )
                                }
                            </ul>
                        </div>
                    </nav>

                    <div className="top-search">
                        <select>
                            <option value="united">TV show</option>
                            <option value="saab">Others</option>
                        </select>
                        <input type="text" placeholder="Search for a movie, TV Show or celebrity that you are looking for" />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;
