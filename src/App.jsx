import { useState } from 'react'
import { Routes, Route, Router } from 'react-router-dom'
import './App.css'
import Header from './assets/Home/Header'
import Footer from './assets/Home/Footer'
import MovieList from './assets/Home/Content/MovieList'
import MovieDetails from './assets/Home/Content/MovieDetails'
import CelebrityDetail from './assets/Home/Content/CelebrityDetail'
import TestForm from './assets/Home/Content/TestForm'
import Pagi from './assets/Home/Content/Pagi'
import HomePage from './assets/Home/Content/HomePage'
import { lazy, Suspense } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
// import '../public/css/fonts/add.css'
// import '../public/css/fonts/plugins.css'
// import '../public/css/fonts/style.css'
// import '../public/css/fonts'

const MovieDetailsPage = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./assets/Home/Content/MovieDetails")), 2000);
  });
});

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>

        <Route path='/movies' element={<MovieList />} />
        <Route path="/detail/:id" element={<MovieDetails />} />
        <Route path="/celebrity/:id" element={<CelebrityDetail />} />
        {/* <Route path='/details' element={<MovieDetails />} /> */}
        
        <Route path='/home' element={<HomePage />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/pagi' element={<Pagi />} />
        <Route path='/test-form' element={<TestForm />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App
