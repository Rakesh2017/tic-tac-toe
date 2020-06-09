import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import winningStates from './winning-states.js'
import SplitText from 'react-pose-text';
import Game from './index.js'
import './index.css'
import Button from '@material-ui/core/Button';
import { Chart } from "react-google-charts";


const SquareBox = () => {

    // game state
    let [currentState, setState] = useState("O");
    let [playCount_O, setPlayCount_O] = useState(0);
    let [playCount_X, setPlayCount_X] = useState(0);
    let [winnerName, setWinnerName] = useState(" ");
    const playEnteries = [];

    // game count
    const [count, setCount] = useState(0);

    // toggling state
    function toggleState() {
        if (currentState === "O") setState("X");
        else setState("O");
    }

    // function set winner stacks
    function setWinnerStacks() {

        const b1 = document.getElementById("box-" + playEnteries.pop());
        const b2 = document.getElementById("box-" + playEnteries.pop());
        const b3 = document.getElementById("box-" + playEnteries.pop());

        for (var i = 1; i <= 9; i++) {
            if (i == b1 || i == b2 || i == b3) {
                continue;
            } else document.getElementById("box-" + i).className = 'square-box-disabled '
        }

        b1.className = 'square-box-winner'
        setTimeout(() => {
            b2.className = 'square-box-winner'
        }, 200);
        setTimeout(() => {
            b3.className = 'square-box-winner'
        }, 400);
        setTimeout(() => {
            b3.className = 'square-box-winner-d'
        }, 600);
        setTimeout(() => {
            b2.className = 'square-box-winner-d'
        }, 800);
        setTimeout(() => {
            b1.className = 'square-box-winner-d'
        }, 1000);
    }

    // checking if player wins
    function checkWinner() {

        let terminator = false;

        for (var parentKey in winningStates) {
            for (var childKey in winningStates[parentKey]) {

                // checking O
                if (document.getElementById("box-" + winningStates[parentKey][childKey]).innerHTML === "O") {
                    setPlayCount_O(playCount_O++);
                    playEnteries.push(winningStates[parentKey][childKey]);

                    if (playCount_O === 3) {
                        console.log("O wins");
                        terminator = true;
                        setWinnerStacks();
                        setWinnerName(winnerName = "O WINS")
                        document.getElementById("reset-icon").className = 'fas-enabled fas fa-redo-alt'
                        break;
                    }
                }

                // checking X
                if (document.getElementById("box-" + winningStates[parentKey][childKey]).innerHTML === "X") {
                    setPlayCount_X(playCount_X++);
                    playEnteries.push(winningStates[parentKey][childKey]);

                    if (playCount_X === 3) {
                        console.log("X wins");
                        terminator = true;
                        setWinnerStacks();
                        setWinnerName(winnerName = "X WINS")
                        break;
                    }
                }

            }
            // resetting counter
            setPlayCount_O(playCount_O = 0)
            setPlayCount_X(playCount_X = 0)
            // terminating loop on getting winnner
            if (terminator) {
                break;
            }

        }
    }


    // reset game
    function resetGame() {

        document.getElementById("reset-icon").className = 'fas-disabled fas fa-redo-alt'
        document.getElementById("winner-id").focus();

        setState("O");
        setPlayCount_O(0);
        setPlayCount_X(0);
        setWinnerName(" ");

        for (var i = 1; i <= 9; i++) {
            document.getElementById("box-" + i).innerHTML = " ";
            document.getElementById("box-" + i).className = 'square-box'
        }

        console.log("Game reset");
    }

    // handling game buttons click
    function handlePadClick(boxIndex) {

        switch (boxIndex) {

            case 1: document.getElementById("box-1").innerHTML = currentState;
                document.getElementById("box-1").className = 'square-box-disabled'
                toggleState();
                break;
            case 2: document.getElementById("box-2").innerHTML = currentState;
                document.getElementById("box-2").className = 'square-box-disabled'
                toggleState();
                break;
            case 3: document.getElementById("box-3").innerHTML = currentState;
                document.getElementById("box-3").className = 'square-box-disabled'
                toggleState();
                break;
            case 4: document.getElementById("box-4").innerHTML = currentState;
                document.getElementById("box-4").className = 'square-box-disabled'
                toggleState();
                break;
            case 5: document.getElementById("box-5").innerHTML = currentState;
                document.getElementById("box-5").className = 'square-box-disabled'
                toggleState();
                break;
            case 6: document.getElementById("box-6").innerHTML = currentState;
                document.getElementById("box-6").className = 'square-box-disabled'
                toggleState();
                break;
            case 7: document.getElementById("box-7").innerHTML = currentState;
                document.getElementById("box-7").className = 'square-box-disabled'
                toggleState();
                break;
            case 8: document.getElementById("box-8").innerHTML = currentState;
                document.getElementById("box-8").className = 'square-box-disabled'
                toggleState();
                break;
            case 9: document.getElementById("box-9").innerHTML = currentState;
                document.getElementById("box-9").className = 'square-box-disabled'
                toggleState();
                break;
            default: console.log("No Such Move");
        }

        console.log(count);
        if (count > 3) {
            checkWinner();
            console.log("Time to decide winner");
        }
        setCount(count + 1);

    }

    const charPoses = {
        exit: { opacity: 0, y: 20 },
        enter: {
            opacity: 1,
            y: 0,
            delay: ({ charIndex }) => charIndex * 50
        }
    };


    return (
        <div className="game-parent-container">

            <div className="game-options-buttons-container">
                <p>Play with computer</p>
                <div className="computer-buttons-container">
                    <Button variant="contained" color="primary">
                        Beginner
                    </Button>
                    <Button variant="contained" color="primary">
                        Advanced
                    </Button>
                </div>
                <Button variant="contained" color="secondary">
                    Play With Friend
                </Button>
            </div>

            <div className="box-icon-container">
                <div className="game-box-container">
                    <button className="square-box" id="box-1" onClick={() => handlePadClick(1)}></button>
                    <button className="square-box" id="box-2" onClick={() => handlePadClick(2)}></button>
                    <button className="square-box" id="box-3" onClick={() => handlePadClick(3)}></button>

                    <button className="square-box" id="box-4" onClick={() => handlePadClick(4)}></button>
                    <button className="square-box" id="box-5" onClick={() => handlePadClick(5)}></button>
                    <button className="square-box" id="box-6" onClick={() => handlePadClick(6)}></button>

                    <button className="square-box" id="box-7" onClick={() => handlePadClick(7)}></button>
                    <button className="square-box" id="box-8" onClick={() => handlePadClick(8)}></button>
                    <button className="square-box" id="box-9" onClick={() => handlePadClick(9)}></button>

                </div>
                <i id="reset-icon" className="fas-disabled fas fa-redo-alt" onClick={() => resetGame()}></i>
            </div>
            <div className="winner" id="winner-id">
                <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                    {winnerName}
                </SplitText>
            </div>

            <Chart className="piechart"
                width={'500px'}
                height={'300px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Task', 'Wins'],
                    ['O', 2],
                    ['X', 6]
                ]}
                options={{
                    title: 'Win Propotions',
                }}
                rootProps={{ 'data-testid': '1' }}
            />

        </div >

    )
}


export default SquareBox