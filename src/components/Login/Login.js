import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App'
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: '',
    error: '',
    success: false
  })
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email }
        setLoggedInUser(signedInUser);
        history.replace(from)
      }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log(errorMessage)
      });
  }
  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === 'email') {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);

    }
    if (e.target.name == 'password') {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);

    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newUser && user.email && user.password) {
      console.log("create account", newUser, user.email,user.password)

      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then((userCredential) => {
          const newUserInfo = { ...userCredential.user };
          // console.log(newUserInfo)
          newUserInfo.error = '';
          newUserInfo.success = true;
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
          console.log(newUserInfo)
          history.replace(from);
        })
  
        .catch((error) => {
          const newUserInfo = { ...user }
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
          var errorMessage = error.message;
          console.log(errorMessage)
        });
    }

    if (!newUser && user.email && user.password) {
      console.log("LogIn account", newUser, user.email,user.password)
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then((userCredential) => {
          const newUserInfo = { ...userCredential.user };
          newUserInfo.error = '';
          newUserInfo.success = true;
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
          console.log(newUserInfo)
          history.replace(from);
        })

        .catch((error) => {
          const newUserInfo = { ...user }
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
          var errorMessage = error.message;
          console.log(errorMessage)
        });
    }
    
  }
  return (
    <div>
      <h1>This is Login</h1>

      <div>

        <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />
        <label htmlFor="newUser"> New User? Please Sign up here</label>
        

        <form onSubmit={handleSubmit}>

          {newUser && <input type="text" onBlur={handleBlur} name="name" placeholder="Enter your name" />}
          <br />
          <input type="text" onBlur={handleBlur} name="email" placeholder="Email" required />
          <br />
          <input type="password" onBlur={handleBlur} name="password" placeholder="Password" required />
          <br />
          <input type="submit" value={newUser ? "Register" : "SignIn"} />
        </form>
        <p style={{ color: 'red' }}>{user.error}</p>
        {
          user.success && <p style={{ color: 'green' }}>User {newUser ? "created" : "Logged In"} successfully</p>
        }
      </div>
      <div>
        <button onClick={handleGoogleSignIn}>Google SignIn</button>
      </div>

    </div>


  );
};

export default Login;
