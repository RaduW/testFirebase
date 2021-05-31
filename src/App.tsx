import React from 'react';
import './App.css';
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCIit9BemX0JlggU7vY5RDrH8svziMCDis",
    authDomain: "testfirebase-bba09.firebaseapp.com",
    projectId: "testfirebase-bba09",
    storageBucket: "testfirebase-bba09.appspot.com",
    messagingSenderId: "173212418194",
    appId: "1:173212418194:web:35dc5d3b88335b35dfe64b"
};

firebase.initializeApp(firebaseConfig)

function App() {
    let elements = [];
    for (let i = 0; i < 50; ++i) {
        elements.push(PictureFrame())
    }
    return (
        <div className="App">
            <div className="Spacer"></div>
            <header className="App-header">
                {elements}
            </header>
            <div className="Spacer"></div>
        </div>
    );
}

function PictureFrame() {
    return (
        <div className="PictureWrapper">
            <div className="PictureFrame">

            </div>
        </div>
    )
}

export default App;
