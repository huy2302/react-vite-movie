import ReactPlayer from "react-player";
import { getMoviesByRated } from "../../Function/ApiFunction";
import { useState, useEffect } from "react";
import axios from "axios";

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Đưa state isLoading vào để quản lý trạng thái loading

    const getAllMovies = async () => {
        try {
            setIsLoading(true);
            const data = await getMoviesByRated();
            console.log(data)
            setMovies(data);
        } catch (error) {
            // Xử lý lỗi nếu cần
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getAllMovies();
    }, []);

    return (
        <>
            {
                isLoading ? (
                    <div id="preloader">
                        <img className="logo" src="images/logo1.png" alt="" width="119" height="58" />
                        <div id="status">
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                ) : (<></>)
            }

            <div className="slider movie-items">
                <div className="container">
                    <div className="row">
                        <div className="social-link">
                            <p>Follow us: </p>
                            <a href="#"><i className="ion-social-facebook"></i></a>
                            <a href="#"><i className="ion-social-twitter"></i></a>
                            <a href="#"><i className="ion-social-googleplus"></i></a>
                            <a href="#"><i className="ion-social-youtube"></i></a>
                        </div>
                        <div className="slick-multiItemSlider">
                            <div className="movie-item">
                                <div className="mv-img">
                                    <a href="#"><img src="images/uploads/slider1.jpg" alt="" width="285" height="437" /></a>
                                </div>
                                <div className="title-in">
                                    <div className="cate">
                                        <span className="blue"><a href="#">Sci-fi</a></span>
                                    </div>
                                    <h6><a href="#">Interstellar</a></h6>
                                    <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                                </div>
                            </div>
                            <div className="movie-item">
                                <div className="mv-img">
                                    <a href="#"><img src="images/uploads/slider2.jpg" alt="" width="285" height="437" /></a>
                                </div>
                                <div className="title-in">
                                    <div className="cate">
                                        <span className="yell"><a href="#">action</a></span>
                                    </div>
                                    <h6><a href="#">The revenant</a></h6>
                                    <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                                </div>
                            </div>
                            <div className="movie-item">
                                <div className="mv-img">
                                    <a href="#"><img src="images/uploads/slider3.jpg" alt="" width="285" height="437" /></a>
                                </div>
                                <div className="title-in">
                                    <div className="cate">
                                        <span className="green"><a href="#">comedy</a></span>
                                    </div>
                                    <h6><a href="#">Die hard</a></h6>
                                    <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                                </div>
                            </div>
                            <div className="movie-item">
                                <div className="mv-img">
                                    <a href="#"><img src="images/uploads/slider4.jpg" alt="" width="285" height="437" /></a>
                                </div>
                                <div className="title-in">
                                    <div className="cate">
                                        <span className="blue"><a href="#">Sci-fi</a></span> <span className="orange"><a href="#">advanture</a></span>
                                    </div>
                                    <h6><a href="#">The walk</a></h6>
                                    <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                                </div>
                            </div>
                            <div className="movie-item">
                                <div className="mv-img">
                                    <a href="#"><img src="images/uploads/slider1.jpg" alt="" width="285" height="437" /></a>
                                </div>
                                <div className="title-in">
                                    <div className="cate">
                                        <span className="blue"><a href="#">Sci-fi</a></span>
                                    </div>
                                    <h6><a href="#">Interstellar</a></h6>
                                    <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                                </div>
                            </div>
                            <div className="movie-item">
                                <div className="mv-img">
                                    <a href="#"><img src="images/uploads/slider2.jpg" alt="" width="285" height="437" /></a>
                                </div>
                                <div className="title-in">
                                    <div className="cate">
                                        <span className="yell"><a href="#">action</a></span>
                                    </div>
                                    <h6><a href="#">The revenant</a></h6>
                                    <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                                </div>
                            </div>
                            <div className="movie-item">
                                <div className="mv-img">
                                    <img src="images/uploads/slider3.jpg" alt="" width="285" height="437" />
                                </div>
                                <div className="title-in">
                                    <div className="cate">
                                        <span className="green"><a href="#">comedy</a></span>
                                    </div>
                                    <h6><a href="#">Die hard</a></h6>
                                    <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                                </div>
                            </div>
                            <div className="movie-item">
                                <div className="mv-img">
                                    <img src="images/uploads/slider4.jpg" alt="" width="285" height="437" />
                                </div>
                                <div className="title-in">
                                    <div className="cate">
                                        <span className="blue"><a href="#">Sci-fi</a></span> <span className="orange"><a href="#">advanture</a></span>
                                    </div>
                                    <h6><a href="#">The walk</a></h6>
                                    <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                                </div>
                            </div>
                            <div className="movie-item">
                                <div className="mv-img">
                                    <img src="images/uploads/slider3.jpg" alt="" width="285" height="437" />
                                </div>
                                <div className="title-in">
                                    <div className="cate">
                                        <span className="green"><a href="#">comedy</a></span>
                                    </div>
                                    <h6><a href="#">Die hard</a></h6>
                                    <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="movie-items">
                <div className="container">
                    <div className="row ipad-width">
                        <div className="col-md-8">
                            <div className="title-hd">
                                <h2>in theater</h2>
                                <a href="#" className="viewall">View all <i className="ion-ios-arrow-right"></i></a>
                            </div>
                            <div className="tabs">
                                <ul className="tab-links">
                                    <li className="active"><a href="#tab1">#Popular</a></li>
                                    <li><a href="#tab2"> #Coming soon</a></li>
                                    <li><a href="#tab3">  #Top rated  </a></li>
                                    <li><a href="#tab4"> #Most reviewed</a></li>
                                </ul>
                                <div className="tab-content">
                                    <div id="tab1" className="tab active">
                                        <div className="row">
                                            <div className="slick-multiItem">
                                                

                                                <div className="slide-it">
                                                    <div className="movie-item">
                                                        <div className="mv-img">
                                                            <img src="images/uploads/mv-item2.jpg" alt="" width="185" height="284" />
                                                        </div>
                                                        <div className="hvr-inner">
                                                            <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                        </div>
                                                        <div className="title-in">
                                                            <h6><a href="#">The revenant</a></h6>
                                                            <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slide-it">
                                                    <div className="movie-item">
                                                        <div className="mv-img">
                                                            <img src="images/uploads/mv-item3.jpg" alt="" width="185" height="284" />
                                                        </div>
                                                        <div className="hvr-inner">
                                                            <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                        </div>
                                                        <div className="title-in">
                                                            <h6><a href="#">Die hard</a></h6>
                                                            <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slide-it">
                                                    <div className="movie-item">
                                                        <div className="mv-img">
                                                            <img src="images/uploads/mv-item4.jpg" alt="" width="185" height="284" />
                                                        </div>
                                                        <div className="hvr-inner">
                                                            <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                        </div>
                                                        <div className="title-in">
                                                            <h6><a href="#">The walk</a></h6>
                                                            <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slide-it">
                                                    <div className="movie-item">
                                                        <div className="mv-img">
                                                            <img src="images/uploads/mv-item5.jpg" alt="" width="185" height="284" />
                                                        </div>
                                                        <div className="hvr-inner">
                                                            <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                        </div>
                                                        <div className="title-in">
                                                            <h6><a href="#">Interstellar</a></h6>
                                                            <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slide-it">
                                                    <div className="movie-item">
                                                        <div className="mv-img">
                                                            <img src="images/uploads/mv-item6.jpg" alt="" width="185" height="284" />
                                                        </div>
                                                        <div className="hvr-inner">
                                                            <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                        </div>
                                                        <div className="title-in">
                                                            <h6><a href="#">The revenant</a></h6>
                                                            <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slide-it">
                                                    <div className="movie-item">
                                                        <div className="mv-img">
                                                            <img src="images/uploads/mv-item7.jpg" alt="" width="185" height="284" />
                                                        </div>
                                                        <div className="hvr-inner">
                                                            <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                        </div>
                                                        <div className="title-in">
                                                            <h6><a href="#">Die hard</a></h6>
                                                            <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slide-it">
                                                    <div className="movie-item">
                                                        <div className="mv-img">
                                                            <img src="images/uploads/mv-item8.jpg" alt="" width="185" height="284" />
                                                        </div>
                                                        <div className="hvr-inner">
                                                            <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                        </div>
                                                        <div className="title-in">
                                                            <h6><a href="#">The walk</a></h6>
                                                            <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slide-it">
                                                    <div className="movie-item">
                                                        <div className="mv-img">
                                                            <img src="images/uploads/mv-item3.jpg" alt="" width="185" height="284" />
                                                        </div>
                                                        <div className="hvr-inner">
                                                            <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                        </div>
                                                        <div className="title-in">
                                                            <h6><a href="#">Die hard</a></h6>
                                                            <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="tab2" className="tab">
                                        <div className="row">
                                            <div className="slick-multiItem">
                                                <div className="slide-it">
                                                    <div className="movie-item">
                                                        <div className="mv-img">
                                                            <img src="images/uploads/mv-item5.jpg" alt="" width="185" height="284" />
                                                        </div>
                                                        <div className="hvr-inner">
                                                            <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                        </div>
                                                        <div className="title-in">
                                                            <h6><a href="#">Interstellar</a></h6>
                                                            <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slide-it">
                                                    <div className="movie-item">
                                                        <div className="mv-img">
                                                            <img src="images/uploads/mv-item6.jpg" alt="" width="185" height="284" />
                                                        </div>
                                                        <div className="hvr-inner">
                                                            <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                        </div>
                                                        <div className="title-in">
                                                            <h6><a href="#">The revenant</a></h6>
                                                            <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slide-it">
                                                    <div className="movie-item">
                                                        <div className="mv-img">
                                                            <img src="images/uploads/mv-item7.jpg" alt="" width="185" height="284" />
                                                        </div>
                                                        <div className="hvr-inner">
                                                            <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                        </div>
                                                        <div className="title-in">
                                                            <h6><a href="#">Die hard</a></h6>
                                                            <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slide-it">
                                                    <div className="movie-item">
                                                        <div className="mv-img">
                                                            <img src="images/uploads/mv-item8.jpg" alt="" width="185" height="284" />
                                                        </div>
                                                        <div className="hvr-inner">
                                                            <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                        </div>
                                                        <div className="title-in">
                                                            <h6><a href="#">The walk</a></h6>
                                                            <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slide-it">
                                                    <div className="movie-item">
                                                        <div className="mv-img">
                                                            <img src="images/uploads/mv-item3.jpg" alt="" width="185" height="284" />
                                                        </div>
                                                        <div className="hvr-inner">
                                                            <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                        </div>
                                                        <div className="title-in">
                                                            <h6><a href="#">Die hard</a></h6>
                                                            <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="tab3" className="tab">
                                        <div className="row">
                                            <div className="slick-multiItem">
                                                <div className="slide-it">
                                                    <div className="movie-item">
                                                        <div className="mv-img">
                                                            <img src="images/uploads/mv-item1.jpg" alt="" width="185" height="284" />
                                                        </div>
                                                        <div className="hvr-inner">
                                                            <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                        </div>
                                                        <div className="title-in">
                                                            <h6><a href="#">Interstellar</a></h6>
                                                            <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slide-it">
                                                    <div className="movie-item">
                                                        <div className="mv-img">
                                                            <img src="images/uploads/mv-item2.jpg" alt="" width="185" height="284" />
                                                        </div>
                                                        <div className="hvr-inner">
                                                            <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                        </div>
                                                        <div className="title-in">
                                                            <h6><a href="#">The revenant</a></h6>
                                                            <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slide-it">
                                                    <div className="movie-item">
                                                        <div className="mv-img">
                                                            <img src="images/uploads/mv-item3.jpg" alt="" width="185" height="284" />
                                                        </div>
                                                        <div className="hvr-inner">
                                                            <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                        </div>
                                                        <div className="title-in">
                                                            <h6><a href="#">Die hard</a></h6>
                                                            <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slide-it">
                                                    <div className="movie-item">
                                                        <div className="mv-img">
                                                            <img src="images/uploads/mv-item4.jpg" alt="" width="185" height="284" />
                                                        </div>
                                                        <div className="hvr-inner">
                                                            <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                        </div>
                                                        <div className="title-in">
                                                            <h6><a href="#">The walk</a></h6>
                                                            <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slide-it">
                                                    <div className="movie-item">
                                                        <div className="mv-img">
                                                            <img src="images/uploads/mv-item3.jpg" alt="" width="185" height="284" />
                                                        </div>
                                                        <div className="hvr-inner">
                                                            <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                        </div>
                                                        <div className="title-in">
                                                            <h6><a href="#">Die hard</a></h6>
                                                            <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="tab4" className="tab">
                                        <div className="row">
                                            <div className="slick-multiItem">
                                                <div className="slide-it">
                                                    <div className="movie-item">
                                                        <div className="mv-img">
                                                            <img src="images/uploads/mv-item5.jpg" alt="" width="185" height="284" />
                                                        </div>
                                                        <div className="hvr-inner">
                                                            <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                        </div>
                                                        <div className="title-in">
                                                            <h6><a href="#">Interstellar</a></h6>
                                                            <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slide-it">
                                                    <div className="movie-item">
                                                        <div className="mv-img">
                                                            <img src="images/uploads/mv-item6.jpg" alt="" width="185" height="284" />
                                                        </div>
                                                        <div className="hvr-inner">
                                                            <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                        </div>
                                                        <div className="title-in">
                                                            <h6><a href="#">The revenant</a></h6>
                                                            <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slide-it">
                                                    <div className="movie-item">
                                                        <div className="mv-img">
                                                            <img src="images/uploads/mv-item7.jpg" alt="" width="185" height="284" />
                                                        </div>
                                                        <div className="hvr-inner">
                                                            <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                        </div>
                                                        <div className="title-in">
                                                            <h6><a href="#">Die hard</a></h6>
                                                            <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slide-it">
                                                    <div className="movie-item">
                                                        <div className="mv-img">
                                                            <img src="images/uploads/mv-item8.jpg" alt="" width="185" height="284" />
                                                        </div>
                                                        <div className="hvr-inner">
                                                            <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                        </div>
                                                        <div className="title-in">
                                                            <h6><a href="#">The walk</a></h6>
                                                            <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slide-it">
                                                    <div className="movie-item">
                                                        <div className="mv-img">
                                                            <img src="images/uploads/mv-item3.jpg" alt="" width="185" height="284" />
                                                        </div>
                                                        <div className="hvr-inner">
                                                            <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                        </div>
                                                        <div className="title-in">
                                                            <h6><a href="#">Die hard</a></h6>
                                                            <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="title-hd">
                                <h2>on tv</h2>
                                <a href="#" className="viewall">View all <i className="ion-ios-arrow-right"></i></a>
                            </div>
                            <div className="tabs">
                                <ul className="tab-links-2">
                                    <li><a href="#tab21">#Popular</a></li>
                                    <li className="active"><a href="#tab22"> #Coming soon</a></li>
                                    <li><a href="#tab23">  #Top rated  </a></li>
                                    <li><a href="#tab24"> #Most reviewed</a></li>
                                </ul>
                                <div className="tab-content">
                                    <div id="tab21" className="tab">
                                        <div className="row">
                                            <div className="slick-multiItem">
                                                <div className="slide-it">
                                                    <div className="movie-item">
                                                        <div className="mv-img">
                                                            <img src="images/uploads/mv-item1.jpg" alt="" width="185" height="284" />
                                                        </div>
                                                        <div className="hvr-inner">
                                                            <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                        </div>
                                                        <div className="title-in">
                                                            <h6><a href="#">Interstellar</a></h6>
                                                            <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slide-it">
                                                    <div className="movie-item">
                                                        <div className="mv-img">
                                                            <img src="images/uploads/mv-item2.jpg" alt="" width="185" height="284" />
                                                        </div>
                                                        <div className="hvr-inner">
                                                            <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                        </div>
                                                        <div className="title-in">
                                                            <h6><a href="#">The revenant</a></h6>
                                                            <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slide-it">
                                                    <div className="movie-item">
                                                        <div className="mv-img">
                                                            <img src="images/uploads/mv-item3.jpg" alt="" width="185" height="284" />
                                                        </div>
                                                        <div className="hvr-inner">
                                                            <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                        </div>
                                                        <div className="title-in">
                                                            <h6><a href="#">Die hard</a></h6>
                                                            <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slide-it">
                                                    <div className="movie-item">
                                                        <div className="mv-img">
                                                            <img src="images/uploads/mv-item4.jpg" alt="" width="185" height="284" />
                                                        </div>
                                                        <div className="hvr-inner">
                                                            <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                        </div>
                                                        <div className="title-in">
                                                            <h6><a href="#">The walk</a></h6>
                                                            <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slide-it">
                                                    <div className="movie-item">
                                                        <div className="mv-img">
                                                            <img src="images/uploads/mv-item3.jpg" alt="" width="185" height="284" />
                                                        </div>
                                                        <div className="hvr-inner">
                                                            <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                        </div>
                                                        <div className="title-in">
                                                            <h6><a href="#">Die hard</a></h6>
                                                            <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="tab22" className="tab active">
                                        <div className="row">
                                            <div className="slick-multiItem">
                                                <div className="slide-it">
                                                    <div className="movie-item">
                                                        <div className="mv-img">
                                                            <img src="images/uploads/mv-item5.jpg" alt="" width="185" height="284" />
                                                        </div>
                                                        <div className="hvr-inner">
                                                            <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                        </div>
                                                        <div className="title-in">
                                                            <h6><a href="#">Interstellar</a></h6>
                                                            <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slide-it">
                                                    <div className="movie-item">
                                                        <div className="mv-img">
                                                            <img src="images/uploads/mv-item6.jpg" alt="" width="185" height="284" />
                                                        </div>
                                                        <div className="hvr-inner">
                                                            <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                        </div>
                                                        <div className="title-in">
                                                            <h6><a href="#">The revenant</a></h6>
                                                            <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slide-it">
                                                    <div className="movie-item">
                                                        <div className="mv-img">
                                                            <img src="images/uploads/mv-item7.jpg" alt="" width="185" height="284" />
                                                        </div>
                                                        <div className="hvr-inner">
                                                            <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                        </div>
                                                        <div className="title-in">
                                                            <h6><a href="#">Die hard</a></h6>
                                                            <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slide-it">
                                                    <div className="movie-item">
                                                        <div className="mv-img">
                                                            <img src="images/uploads/mv-item8.jpg" alt="" width="185" height="284" />
                                                        </div>
                                                        <div className="hvr-inner">
                                                            <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                        </div>
                                                        <div className="title-in">
                                                            <h6><a href="#">The walk</a></h6>
                                                            <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slide-it">
                                                    <div className="movie-item">
                                                        <div className="mv-img">
                                                            <img src="images/uploads/mv-item1.jpg" alt="" width="185" height="284" />
                                                        </div>
                                                        <div className="hvr-inner">
                                                            <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                        </div>
                                                        <div className="title-in">
                                                            <h6><a href="#">Interstellar</a></h6>
                                                            <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slide-it">
                                                    <div className="movie-item">
                                                        <div className="mv-img">
                                                            <img src="images/uploads/mv-item2.jpg" alt="" width="185" height="284" />
                                                        </div>
                                                        <div className="hvr-inner">
                                                            <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                        </div>
                                                        <div className="title-in">
                                                            <h6><a href="#">The revenant</a></h6>
                                                            <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slide-it">
                                                    <div className="movie-item">
                                                        <div className="mv-img">
                                                            <img src="images/uploads/mv-item3.jpg" alt="" width="185" height="284" />
                                                        </div>
                                                        <div className="hvr-inner">
                                                            <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                        </div>
                                                        <div className="title-in">
                                                            <h6><a href="#">Die hard</a></h6>
                                                            <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slide-it">
                                                    <div className="movie-item">
                                                        <div className="mv-img">
                                                            <img src="images/uploads/mv-item4.jpg" alt="" width="185" height="284" />
                                                        </div>
                                                        <div className="hvr-inner">
                                                            <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                        </div>
                                                        <div className="title-in">
                                                            <h6><a href="#">The walk</a></h6>
                                                            <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slide-it">
                                                    <div className="movie-item">
                                                        <div className="mv-img">
                                                            <img src="images/uploads/mv-item5.jpg" alt="" width="185" height="284" />
                                                        </div>
                                                        <div className="hvr-inner">
                                                            <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                        </div>
                                                        <div className="title-in">
                                                            <h6><a href="#">Interstellar</a></h6>
                                                            <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slide-it">
                                                    <div className="movie-item">
                                                        <div className="mv-img">
                                                            <img src="images/uploads/mv-item6.jpg" alt="" width="185" height="284" />
                                                        </div>
                                                        <div className="hvr-inner">
                                                            <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                        </div>
                                                        <div className="title-in">
                                                            <h6><a href="#">The revenant</a></h6>
                                                            <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="tab23" className="tab">
                                        <div className="row">
                                            <div className="slick-multiItem">
                                                <div className="slide-it">
                                                    <div className="movie-item">
                                                        <div className="mv-img">
                                                            <img src="images/uploads/mv-item1.jpg" alt="" width="185" height="284" />
                                                        </div>
                                                        <div className="hvr-inner">
                                                            <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                        </div>
                                                        <div className="title-in">
                                                            <h6><a href="#">Interstellar</a></h6>
                                                            <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slide-it">
                                                    <div className="movie-item">
                                                        <div className="mv-img">
                                                            <img src="images/uploads/mv-item2.jpg" alt="" width="185" height="284" />
                                                        </div>
                                                        <div className="hvr-inner">
                                                            <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                        </div>
                                                        <div className="title-in">
                                                            <h6><a href="#">The revenant</a></h6>
                                                            <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slide-it">
                                                    <div className="movie-item">
                                                        <div className="mv-img">
                                                            <img src="images/uploads/mv-item3.jpg" alt="" width="185" height="284" />
                                                        </div>
                                                        <div className="hvr-inner">
                                                            <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                        </div>
                                                        <div className="title-in">
                                                            <h6><a href="#">Die hard</a></h6>
                                                            <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slide-it">
                                                    <div className="movie-item">
                                                        <div className="mv-img">
                                                            <img src="images/uploads/mv-item4.jpg" alt="" width="185" height="284" />
                                                        </div>
                                                        <div className="hvr-inner">
                                                            <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                        </div>
                                                        <div className="title-in">
                                                            <h6><a href="#">The walk</a></h6>
                                                            <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slide-it">
                                                    <div className="movie-item">
                                                        <div className="mv-img">
                                                            <img src="images/uploads/mv-item5.jpg" alt="" width="185" height="284" />
                                                        </div>
                                                        <div className="hvr-inner">
                                                            <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                        </div>
                                                        <div className="title-in">
                                                            <h6><a href="#">Interstellar</a></h6>
                                                            <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slide-it">
                                                    <div className="movie-item">
                                                        <div className="mv-img">
                                                            <img src="images/uploads/mv-item6.jpg" alt="" width="185" height="284" />
                                                        </div>
                                                        <div className="hvr-inner">
                                                            <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                        </div>
                                                        <div className="title-in">
                                                            <h6><a href="#">The revenant</a></h6>
                                                            <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slide-it">
                                                    <div className="movie-item">
                                                        <div className="mv-img">
                                                            <img src="images/uploads/mv-item7.jpg" alt="" width="185" height="284" />
                                                        </div>
                                                        <div className="hvr-inner">
                                                            <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                        </div>
                                                        <div className="title-in">
                                                            <h6><a href="#">Die hard</a></h6>
                                                            <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slide-it">
                                                    <div className="movie-item">
                                                        <div className="mv-img">
                                                            <img src="images/uploads/mv-item8.jpg" alt="" width="185" height="284" />
                                                        </div>
                                                        <div className="hvr-inner">
                                                            <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                        </div>
                                                        <div className="title-in">
                                                            <h6><a href="#">The walk</a></h6>
                                                            <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slide-it">
                                                    <div className="movie-item">
                                                        <div className="mv-img">
                                                            <img src="images/uploads/mv-item3.jpg" alt="" width="185" height="284" />
                                                        </div>
                                                        <div className="hvr-inner">
                                                            <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                        </div>
                                                        <div className="title-in">
                                                            <h6><a href="#">Die hard</a></h6>
                                                            <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="tab24" className="tab">
                                        <div className="row">
                                            <div className="slick-multiItem">
                                                <div className="slide-it">
                                                    <div className="movie-item">
                                                        <div className="mv-img">
                                                            <img src="images/uploads/mv-item5.jpg" alt="" width="185" height="284" />
                                                        </div>
                                                        <div className="hvr-inner">
                                                            <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                        </div>
                                                        <div className="title-in">
                                                            <h6><a href="#">Interstellar</a></h6>
                                                            <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slide-it">
                                                    <div className="movie-item">
                                                        <div className="mv-img">
                                                            <img src="images/uploads/mv-item6.jpg" alt="" width="185" height="284" />
                                                        </div>
                                                        <div className="hvr-inner">
                                                            <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                        </div>
                                                        <div className="title-in">
                                                            <h6><a href="#">The revenant</a></h6>
                                                            <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slide-it">
                                                    <div className="movie-item">
                                                        <div className="mv-img">
                                                            <img src="images/uploads/mv-item7.jpg" alt="" width="185" height="284" />
                                                        </div>
                                                        <div className="hvr-inner">
                                                            <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                        </div>
                                                        <div className="title-in">
                                                            <h6><a href="#">Die hard</a></h6>
                                                            <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slide-it">
                                                    <div className="movie-item">
                                                        <div className="mv-img">
                                                            <img src="images/uploads/mv-item8.jpg" alt="" width="185" height="284" />
                                                        </div>
                                                        <div className="hvr-inner">
                                                            <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                        </div>
                                                        <div className="title-in">
                                                            <h6><a href="#">The walk</a></h6>
                                                            <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slide-it">
                                                    <div className="movie-item">
                                                        <div className="mv-img">
                                                            <img src="images/uploads/mv-item3.jpg" alt="" width="185" height="284" />
                                                        </div>
                                                        <div className="hvr-inner">
                                                            <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                        </div>
                                                        <div className="title-in">
                                                            <h6><a href="#">Die hard</a></h6>
                                                            <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="sidebar">
                                <div className="ads">
                                    <img src="images/uploads/ads2.png" alt="" width="336" height="296" />
                                </div>
                                <div className="celebrities">
                                    <h4 className="sb-title">Spotlight Celebrities</h4>
                                    <div className="celeb-item">
                                        <a href="#"><img src="images/uploads/ava1.jpg" alt="" width="70" height="70" /></a>
                                        <div className="celeb-author">
                                            <h6><a href="#">Samuel N. Jack</a></h6>
                                            <span>Actor</span>
                                        </div>
                                    </div>
                                    <div className="celeb-item">
                                        <a href="#"><img src="images/uploads/ava2.jpg" alt="" width="70" height="70" /></a>
                                        <div className="celeb-author">
                                            <h6><a href="#">Benjamin Carroll</a></h6>
                                            <span>Actor</span>
                                        </div>
                                    </div>
                                    <div className="celeb-item">
                                        <a href="#"><img src="images/uploads/ava3.jpg" alt="" width="70" height="70" /></a>
                                        <div className="celeb-author">
                                            <h6><a href="#">Beverly Griffin</a></h6>
                                            <span>Actor</span>
                                        </div>
                                    </div>
                                    <div className="celeb-item">
                                        <a href="#"><img src="images/uploads/ava4.jpg" alt="" width="70" height="70" /></a>
                                        <div className="celeb-author">
                                            <h6><a href="#">Justin Weaver</a></h6>
                                            <span>Actor</span>
                                        </div>
                                    </div>
                                    <a href="#" className="btn">See all celebrities<i className="ion-ios-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="latestnew">
                <div className="container">
                    <div className="row ipad-width">
                        <div className="col-md-8">
                            <div className="ads">
                                <img src="images/uploads/ads2.png" alt="" width="728" height="106" />
                            </div>
                            <div className="title-hd">
                                <h2>Latest news</h2>
                            </div>
                            <div className="tabs">
                                <ul className="tab-links-3">
                                    <li className="active"><a href="#tab31">#Movies </a></li>
                                    <li><a href="#tab32"> #TV Shows </a></li>
                                    <li><a href="#tab33">  # Celebs</a></li>
                                </ul>
                                <div className="tab-content">
                                    <div id="tab31" className="tab active">
                                        <div className="row">
                                            <div className="blog-item-style-1">
                                                <img src="images/uploads/blog-it1.jpg" alt="" width="170" height="250" />
                                                <div className="blog-it-infor">
                                                    <h3><a href="#">Brie Larson to play first female white house candidate Victoria Woodull in Amazon film</a></h3>
                                                    <span className="time">13 hours ago</span>
                                                    <p>Exclusive: <span>Amazon Studios </span>has acquired Victoria Woodhull, with Oscar winning Room star <span>Brie Larson</span> polsed to produce, and play the first female candidate for the presidency of the United States. Amazon bought it in a pitch package deal. <span> Ben Kopit</span>, who wrote the Warner Bros film <span>Libertine</span> that has...</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="tab32" className="tab">
                                        <div className="row">
                                            <div className="blog-item-style-1">
                                                <img src="images/uploads/blog-it2.jpg" alt="" width="170" height="250" />
                                                <div className="blog-it-infor">
                                                    <h3><a href="#">Tab 2</a></h3>
                                                    <span className="time">13 hours ago</span>
                                                    <p>Exclusive: <span>Amazon Studios </span>has acquired Victoria Woodhull, with Oscar winning Room star <span>Brie Larson</span> polsed to produce, and play the first female candidate for the presidency of the United States. Amazon bought it in a pitch package deal. <span> Ben Kopit</span>, who wrote the Warner Bros film <span>Libertine</span> that has...</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="tab33" className="tab">
                                        <div className="row">
                                            <div className="blog-item-style-1">
                                                <img src="images/uploads/blog-it1.jpg" alt="" width="170" height="250" />
                                                <div className="blog-it-infor">
                                                    <h3><a href="#">Tab 3</a></h3>
                                                    <span className="time">13 hours ago</span>
                                                    <p>Exclusive: <span>Amazon Studios </span>has acquired Victoria Woodhull, with Oscar winning Room star <span>Brie Larson</span> polsed to produce, and play the first female candidate for the presidency of the United States. Amazon bought it in a pitch package deal. <span> Ben Kopit</span>, who wrote the Warner Bros film <span>Libertine</span> that has...</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="morenew">
                                <div className="title-hd">
                                    <h3>More news on Blockbuster</h3>
                                    <a href="#" className="viewall">See all Movies news<i className="ion-ios-arrow-right"></i></a>
                                </div>
                                <div className="more-items">
                                    <div className="left">
                                        <div className="more-it">
                                            <h6><a href="#">Michael Shannon Frontrunner to play Cable in “Deadpool 2”</a></h6>
                                            <span className="time">13 hours ago</span>
                                        </div>
                                        <div className="more-it">
                                            <h6><a href="#">French cannibal horror “Raw” inspires L.A. theater to hand out “Barf Bags”</a></h6>

                                            <span className="time">13 hours ago</span>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="more-it">
                                            <h6><a href="#">Laura Dern in talks to join Justin Kelly’s biopic “JT Leroy”</a></h6>
                                            <span className="time">13 hours ago</span>
                                        </div>
                                        <div className="more-it">
                                            <h6><a href="#">China punishes more than 300 cinemas for box office cheating</a></h6>
                                            <span className="time">13 hours ago</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage;
