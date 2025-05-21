import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./Redux/store.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import SignUp from "./Pages/SignUp.jsx";
import SignIn from "./Pages/SignIn.jsx";
import { ToastContainer } from "react-toastify";
import PrivateRoute from "./Components/PrivateRoute.jsx";
import Profile from "./Pages/Profile.jsx";
import PrivateRouteLoggedIn from "./Components/PrivateRouteLoggedIn.jsx";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="" element={<PrivateRoute />}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Route>
        <Route path="" element={<PrivateRouteLoggedIn />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Provider>
  </BrowserRouter>
);
