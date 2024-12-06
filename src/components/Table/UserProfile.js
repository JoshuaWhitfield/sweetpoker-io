import React, { useState, useEffect } from 'react'; 
import io from 'socket.io-client'; // Correct import

const socket = io('http://localhost:4000'); // Make sure to connect to your server

const UserProfile = ({ playerId, username, status }) => {
  const [chips, setChips] = useState(0);

  useEffect(() => {
    // Listen for updated chip amounts from the server
    socket.on('updateChips', (data) => {
      if (data.playerId === playerId) {
        setChips(data.chips);
      }
    });

    return () => {
      socket.off('updateChips');
    };
  }, [playerId]);

  return (
    <div className="user-profile" style={styles.userProfile}>
      <p style={styles.userName}>{username}</p>
      <p style={styles.userChips}>Chips: {chips}</p>
      <p style={styles.userChips}>{status}</p>
    </div>
  );
};

const styles = {
  userProfile: {
    marginLeft: '20px',
    zIndex: 3
  },
  userName: {
    margin: '15px 0px 0px 20px'
  },
  userChips: {
    margin: '0px 0px 20px 20px'
  }
}

export default UserProfile;
