const ProfilePicture = ({ imageUrl }) => {
    if (imageUrl === undefined) {
        return (
            <div className='pfp'></div>
        )
    }

    return (
        <img className='pfp2' src={imageUrl}/>
    )
}

export default ProfilePicture