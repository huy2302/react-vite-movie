import { useState, useEffect } from "react";
import axios from "axios";
import { getAllWithPaginate } from "../../Function/ApiFunction";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const MovieList = () => {
    const handleTabClick = (status) => {
        if (status) {
            setMovieListStatus(true)
        } else {
            setMovieListStatus(false)
        }
    };

    const [movieList, setMovieList] = useState([

    ])
    const [movieListStatus, setMovieListStatus] = useState(true)
    const [statusNotFound, setStatusNotFound] = useState(false)
    // const itemsPerPage = 2; // Số lượng mục trên mỗi trang
    // const [currentPage, setCurrentPage] = useState(1);

    // const indexOfLastItem = currentPage * itemsPerPage;
    // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    // const [currentItems, setCurrentItems] = useState([]);

    // Chuyển trang
    // const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const renderYears = () => {
        const result = []
        for (let i = 1990; i <= 2024; i++) {
            result.push(<option key={i} value={i}>{i}</option>)
        }
        return result
    }

    const getAlls = async () => {
        let data = await getAllWithPaginate()
        return data
    }
    useEffect(() => {
        // setIsLoading(true)
        getAlls().then((data) => {
            setMovieList(data)
        }).catch((e) => {
            // setError(error.message)
            // setIsLoading(false)
        })
    }, [])

    // form search
    const [formData, setFormData] = useState({
        movieName: '',
        genres: 'none',
        ratingRange: '10',
        releaseYearStart: '',
        releaseYearEnd: '',

    });

    // Hàm xử lý sự kiện khi người dùng nhập vào các trường form
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Hàm xử lý sự kiện khi form được gửi đi
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)
        try {
            const response = await axios.post('http://localhost:8080/movie/search', formData);
            console.log('Server response:', response.data);
            setMovieList(response.data)
            setStatusNotFound(false)
        } catch (error) {
            console.error('Error sending form data:', error);
            setMovieList([])
            setStatusNotFound(true)
        }
    };

    return (
        <>
            <div className="hero common-hero">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="hero-ct">
                                <h1> blog listing - list</h1>
                                <ul className="breadcumb">
                                    <li className="active"><a href="#">Home</a></li>
                                    <li> <span className="ion-ios-arrow-right"></span> blog listing</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-single movie_list">
                <div className="container">
                    <div className="row ipad-width2">
                        <div className="col-md-8 col-sm-12 col-xs-12">
                            <div className="topbar-filter">
                                <p>Found <span>1,608 movies</span> in total</p>
                                <label>Sort by:</label>
                                <select>
                                    <option value="popularity">Popularity Descending</option>
                                    <option value="popularity">Popularity Ascending</option>
                                    <option value="rating">Rating Descending</option>
                                    <option value="rating">Rating Ascending</option>
                                    <option value="date">Release date Descending</option>
                                    <option value="date">Release date Ascending</option>
                                </select>

                                {
                                    <a
                                        key={0}
                                        className={movieListStatus == true ? `list active` : `list`}
                                        onClick={() => handleTabClick(true)}
                                    >
                                        <i className={`ion-ios-list-outline`}></i>
                                    </a>
                                }
                                {
                                    <a
                                        key={1}
                                        className={movieListStatus == false ? `grid active` : `grid`}
                                        onClick={() => handleTabClick(false)}
                                    >
                                        <i className={`ion-grid`}></i>
                                    </a>
                                }
                            </div>
                            <div className={statusNotFound == true ? `middle-content middle-content-active` : `middle-content middle-content-none`}>
                                <img src="images/uploads/err-img.png" alt="" />
                                <h1>There are no results matching your search request</h1>
                            </div>
                            {
                                movieListStatus ?
                                    <div className="flex-wrap-movielist">
                                        {
                                            movieList.data && movieList.data.length > 0
                                            && movieList.data.map((item, index) => {
                                                return (
                                                    <div key={index} className="movie-item-style-2 movie-item-style-1">
                                                        <img src={item.poster} alt="" />
                                                        <div className="hvr-inner">
                                                            {/* <a href={item.}> Read more <i className="ion-android-arrow-dropright"></i> </a> */}
                                                            <Link to={`/detail/${item.movie_id}`}>Read more <i className="ion-android-arrow-dropright"></i></Link>
                                                        </div>
                                                        <div className="mv-item-infor">
                                                            <h6>
                                                                <Link to={`/detail/${item.movie_id}`}>{item.name}</Link>
                                                            </h6>
                                                            <p className="rate"><i className="ion-android-star"></i><span>{item.rated}</span> /10</p>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }

                                    </div>

                                    :

                                    <div className="movie-list">
                                        {
                                            movieList.data && movieList.data.length > 0
                                            && movieList.data.map((item, index) => {
                                                return (
                                                    <div key={index} className="movie-item-style-2">
                                                        <img src={item.poster} alt="" />
                                                        <div className="mv-item-infor">
                                                            <h6><a href="moviesingle.html">{item.name} <span>({item.released})</span></a></h6>
                                                            <p className="rate"><i className="ion-android-star"></i><span>{item.rated}</span> /10</p>
                                                            <p className="describe">Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity...</p>
                                                            <p className="run-time"> Run Time: {item.runtime}    .     <span>MMPA: PG-13 </span>    .     <span>Release: {item.year}</span></p>
                                                            <p>Director: <a href="#">Joss Whedon</a></p>
                                                            <p>Stars: {
                                                                item.actors && item.actors.length > 0 && item.actors.map((actor, i) => {
                                                                    return (
                                                                        <a href="#">{actor.name}, </a>
                                                                    )
                                                                })
                                                            }</p>
                                                        </div>
                                                    </div>
                                                )
                                            })

                                        }
                                    </div>
                            }
                            <div className="topbar-filter">
                                <label>Movies per page:</label>
                                <select>
                                    <option value="range">5 Movies</option>
                                    <option value="saab">10 Movies</option>
                                </select>
                                <div className="pagination2 pagination-movie">
                                    <span>Page 1 of 2:</span>

                                    {/* <a className="active" href="#">1</a>
                                    <a href="#">2</a> */}
                                    <a href="#"><i className="ion-arrow-left-b"></i></a>
                                    <input className="input-paginate" type="text" value={1} />
                                    <a href="#"><i className="ion-arrow-right-b"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12 col-xs-12">
                            <div className="sidebar">
                                <div className="searh-form">
                                    <h4 className="sb-title">Search for movie</h4>
                                    <form onSubmit={handleSubmit} className="form-style-1" >
                                        <div className="row">
                                            <div className="col-md-12 form-it">
                                                <label>Movie name</label>
                                                <input
                                                    type="text"
                                                    name="movieName"
                                                    placeholder="Enter keywords"
                                                    value={formData.movieName}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-md-12 form-it">
                                                <label>Genres & Subgenres</label>
                                                <div className="group-ip">
                                                    <select
                                                        name="genres" multiple=""
                                                        className="ui fluid dropdown"
                                                        value={formData.genres}
                                                        onChange={handleChange}
                                                    >
                                                        <option value="none">Enter to filter genres</option>
                                                        <option value="action">Action</option>
                                                        <option value="chill">Chill</option>
                                                        <option value="Action3">Action 3</option>
                                                        <option value="Action4">Action 4</option>
                                                        <option value="Action5">Action 5</option>
                                                    </select>
                                                </div>

                                            </div>
                                            <div className="col-md-12 form-it">
                                                <label>Rating Range</label>

                                                <select
                                                    name="ratingRange"
                                                    value={formData.ratingRange}
                                                    onChange={handleChange}
                                                >
                                                    <option value="10">Rating</option>
                                                    <option value="9">9 - 10</option>
                                                    <option value="7">7 - 9</option>
                                                    <option value="5">5-7</option>
                                                    <option value="0">Less than 5</option>
                                                </select>

                                            </div>
                                            <div className="col-md-12 form-it">
                                                <label>Release Year</label>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <select
                                                            name="releaseYearStart"
                                                            value={formData.releaseYearStart}
                                                            onChange={handleChange}
                                                        >
                                                            <option value="0">From</option>
                                                            
                                                            {renderYears()}
                                                        </select>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <select
                                                            name="releaseYearEnd"
                                                            value={formData.releaseYearEnd}
                                                            onChange={handleChange}
                                                        >
                                                            <option value="0">To</option>
                                                            
                                                            {renderYears()}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12 ">
                                                {/* <a href="" className="submit"></a> */}
                                                <button className="submit" type="submit">Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieList;
