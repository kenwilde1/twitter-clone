const Profile = (props) => {
  return (
    <div className="profile-container">
      <h1>Profile</h1>
      <p>{props.name}</p>
    </div>
  );
};
export default Profile;
