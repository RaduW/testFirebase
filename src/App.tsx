import React from 'react';
import './App.css';

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
