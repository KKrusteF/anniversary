import React, {useState} from 'react';
import './App.css';
import confetti from 'canvas-confetti';
import videoBg from './background.mp4';
import catImg from './happy-anniversary-cat.png';

function App() {
    const [showCat, setShowCat] = useState(false);

    const handleClick = () => {
        setShowCat(true);
        triggerConfetti();
    };

    const triggerConfetti = () => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: {y: 0.6},
        });
    };

    return (
        <div className="App">
            <video src={videoBg} autoPlay loop muted id="videoBackground"/>
            {/*<video autoPlay loop muted id="videoBackground">*/}
            {/*    <source src="/background.mp4" type="video/mp4"/>*/}
            {/*    Your browser does not support the video tag.*/}
            {/*</video>*/}
            <main>
                <button onClick={handleClick}>Натисни ме, моля!</button>
                {showCat && (
                    <div id="catContainer" className="fade-in">
                        <img src={catImg} alt="Cat holding a Happy Anniversary card" id="catImage"/>
                        <p id="catMessage">Thank you for being mine</p>
                    </div>
                )}
            </main>
        </div>
    );
}

export default App;
