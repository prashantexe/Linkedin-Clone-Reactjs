import React from 'react';
import { useDispatch, useSelector} from "react-redux";
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import {login, logout, selectUser} from "./features/counter/userSlice";
import Feed from "./Feed";
import Login from "./Login";
import { auth } from './firebase';
import { useEffect }from 'react';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect (() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        // user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        })
        );
      } else{
        // user is logged out
        dispatch(logout());
      }
    });
  }, []);



  return (
    <div className="app">
      <Header />

      <div className='app__body'>
        <Sidebar />
        {/* Sidebar */}
        <Feed />
        {/* Feed */}
      </div>
    
    </div>
  );
}

export default App;