import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./components/utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";


const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children: [
    {
      path: "/",
      element: <MainContainer />
    },
    {
      path: "watch",
      element: <WatchPage />
    }
  ]
}])
function App() {
  return (
    <Provider store={store} >
      {/* now we have to add functionality for onclick sidebar-> */}
      <div>
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  )
}

export default App
