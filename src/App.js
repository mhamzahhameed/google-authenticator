import "./App.css";
import { signInWithGoogle } from "./Firebase";
function App() {
  return (
    <div className='App'>
      <button onClick={signInWithGoogle}>Sign in with Goolgle</button>
      <h1>Welcome To My Website Mr. {localStorage.getItem("name")}</h1>
      {/* <h1>{localStorage.getItem("email")}</h1>
      <img src={localStorage.getItem("photo")} alt="profile" /> */}
    </div>
  );
}

export default App;
