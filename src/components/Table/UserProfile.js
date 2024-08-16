const UserProfile = ({ player }) => (
    <div className="user-profile">
        <img src={player.profilePicture} alt={`${player.username}'s profile`} className="profile-pic" />
        <p>{player.username}</p>
        <p>{player.chipAmount}</p> {/* || <p>{player.status}</p> */}
    </div>
);

export default UserProfile;