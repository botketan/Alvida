const ProfileList = (props) => {
    const profiles=props.profiles
    return(
        <div className="profile-container-wrapper">
            {
                profiles.map(
                    (profile)=>(
                        <div className="profile-container" key={profile.Rno}>
                            <h2 className="name">{profile.Name}</h2>
                            <h2 className="rno">{profile.Rno}</h2>
                            <h2 className="branch">{profile.Branch}</h2> 
                        
                        </div>
                    )
                )
            }
        </div>
    );
}
 
export default ProfileList;