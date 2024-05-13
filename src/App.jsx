import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";
import Main from "./layout/main/Main";
import All from "./pages/all/All";
import Gamings from "./pages/gaming/Gamings";
import Musics from "./pages/music/Musics";
import Lofi from "./pages/lofi/Lofi";
import Login from "./user-signup&login/login/Login";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
          <Route element = {<Main/>}>
            <Route path="/" element = {<All/>}/>
            <Route path="/gaming" element = {<Gamings/>}/>
            <Route path="/music" element = {<Musics/>}/>
            <Route path="/lofi" element = {<Lofi/>}/>
          </Route>
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
