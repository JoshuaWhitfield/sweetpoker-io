import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import Table from './Table'; // Assuming Table component is in the same directory
import UserProfile from './UserProfile';

const socket = io('http://localhost:5000'); // Replace with your server URL

const PokerGame = ({ players, width, height }) => {
    const [currentStage, setCurrentStage] = useState('pre-flop');
    const [timer, setTimer] = useState(0);
    const [isTimerActive, setIsTimerActive] = useState(false);

    useEffect(() => {
        const stageDuration = 30000; // 30 seconds for each stage

        if (isTimerActive) {
            const interval = setInterval(() => {
                setTimer((prev) => {
                    if (prev <= 0) {
                        clearInterval(interval);
                        // Move to the next stage
                        handleStageChange();
                        return stageDuration;
                    }
                    return prev - 1000;
                });
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [isTimerActive]);

    const handleStageChange = () => {
        switch (currentStage) {
            case 'pre-flop':
                setCurrentStage('flop');
                break;
            case 'flop':
                setCurrentStage('turn');
                break;
            case 'turn':
                setCurrentStage('river');
                break;
            case 'river':
                setCurrentStage('pre-flop'); // Reset or end game
                break;
            default:
                setCurrentStage('pre-flop');
                break;
        }
        setTimer(30000); // Reset timer
    };

    const startGame = () => {
        setIsTimerActive(true);
        setTimer(30000); // Start with 30 seconds timer
    };

    useEffect(() => {
        socket.on('updateGameState', (gameState) => {
            // Handle game state update
            console.log('Game state updated:', gameState);
        });

        return () => socket.off('updateGameState');
    }, []);

    return (
        <Table width={width} height={height} />
    );
};

export default PokerGame;
