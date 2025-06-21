import Pages from "./components/Pages.jsx"
import Login from "./components/Login.jsx";
import AfterLogin from "./components/AfterLogin.jsx";
function App(){
  let login =false;
  return login ? <Login/> : <AfterLogin/>
  }
export default App;