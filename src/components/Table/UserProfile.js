const UserProfile = ({ player }) => (
    <div className="user-profile" style={styles.userProfile}>
        {/*<img src={player.profilePicture} alt={`${player.username}'s profile`} className="profile-pic" />*/}
        <p style={styles.userName}>{player.username}</p>
        <p style={styles.userChips}>{player.chips}</p> {/* || <p>{player.status}</p> */}
    </div>
);
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