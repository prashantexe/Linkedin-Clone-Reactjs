import React from 'react';
import { useDispatch, useSelector} from "react-redux";
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import {selectUser} from "./features/counter/userSlice";
import Feed from "./Feed";
import Login from "./Login";
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect (() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        // user is logged in
      } else{
        // user is logged out
        dispatch(logout());
      }
    })
  }, [])



  return (
    <div className="app">
      <Header />

    {!user ? (
      <Login />
    ): (

      <div className='app__body'>
        <Sidebar />
        <Feed />
      </div>
    )}
    </div>
  );
}

export default App;
