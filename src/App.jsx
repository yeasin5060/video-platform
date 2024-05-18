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


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
          <Route element = {<Main/>}>
            <Route path="/" element = {<All/>}/>
          </Route>
          <Route path="signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
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
