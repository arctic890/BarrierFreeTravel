import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";

import Landing from './components/views/landingPage/landing'
import Login from './components/views/loginPage/login'
import Register from './components/views/registerPage/register'
import Auth from './hoc/auth'
import NavBar from "./components/views/navBar/navBar";
import Footer from "./components/views/footer/footer";
import Favorite from "./components/views/favoritePage/favorite";
import Comment from "./components/views/commentPage/comment"
import Importcsv from "./components/views/importcsv";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.
//function AuthCheck()
//style={{ paddingTop: '61px', minHeight: 'calc(100vh - 80px)' }}

export default function BasicExample() {
  return (
    <Router>
      <NavBar />
      <div>
        <Routes>
            <Route exact path='/' element={Auth(Landing, null)} />
            <Route exact path='/login' element={Auth(Login, false)} />
            <Route exact path='/register' element={Auth(Register, false)} />
            <Route exact path='/favorite' element={Auth(Favorite, true)} />
            <Route exact path='/comment' element={Auth(Comment, true)} />
            <Route exact path='/importcsv' element={Auth(Importcsv, null)} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

