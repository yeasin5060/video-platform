import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";
import Main from "./layout/main/Main";
import All from "./pages/all/All";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element = {<Main/>}>
          <Route path="/" element = {<All/>}/>
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
