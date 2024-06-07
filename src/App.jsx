import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";
import Main from "./layout/main/Main";
import All from "./pages/all/All";
import Login from "./user-signup&login/login/Login";
import Signup from "./user-signup&login/signup/Signup";
import Singlevideodetails from "./pages/singlevideodetails/Singlevideodetails";
import Errorpage from "./pages/errorpage/Errorpage";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
          <Route element = {<Main/>}>
            <Route path="home" element = {<All/>}/>
            <Route path="/:id" element = {<Singlevideodetails/>}/>
          </Route>
          <Route path="signup" element={<Signup/>}/>
          <Route path="/" element={<Login/>}/>
          <Route path="*" element = {<Errorpage/>}/>
      </Route>
    )
  );
  return (
    <RouterProvider
    router={router}
  />
  )
}

export default App
