// eslint-disable-next-line 
import { useEffect } from "react";
// eslint-disable-next-line 
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
// eslint-disable-next-line 
// import { login, logout, selectUser } from "./features/userSlice";
import Feed from "./Feed";
// eslint-disable-next-line 
import { auth } from "./firebase";
import Header from "./Header";
// eslint-disable-next-line 
import Login from "./Login";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";

function App() {

  useEffect(() => {
    document.title = "LinkedIn Clone"; // Set the title when the component mounts
  }, []);

  // const userState = useSelector(selectUser);
  // const { user } = userState;
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   auth.onAuthStateChanged((userAuth) => {
  //     if (userAuth) {
  //       dispatch(
  //         login({
  //           email: userAuth.email,
  //           uid: userAuth.uid,
  //           displayName: userAuth.displayName,
  //           photoUrl: userAuth.photoURL,
  //         })
  //       );
  //     } else {
  //       dispatch(logout());
  //     }
  //   });

    //eslint-disable-next-line
  // }, []);

  return (
    <div className="app">
      <Header />

      
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets/>
        </div>
      
    </div>
  );
}

export default App;