const SignUp = () => {
  const submitForm = (e) => {
    e.preventDefault();

    let name = document.querySelector("#input-name").value;
    let username = document.querySelector("#input-username").value;
    let password = document.querySelector("#input-password").value;
  };

  return (
    <div className="sign-up-container">
      <h2>Sign Up to Twitter</h2>
      <input type="text" id="input-name" name="name" placeholder="Name"></input>
      <input
        type="text"
        id="input-username"
        name="username"
        placeholder="Username"
      ></input>
      <input
        type="password"
        id="input-password"
        name="password"
        placeholder="Password"
      ></input>
      <button onClick={submitForm}>Sign Up</button>
    </div>
  );
};
export default SignUp;
