import Header from './common/components/Header'
import Footer from './common/components/Footer'
import MainPage from './pages/MainPage'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Catalog from "./pages/Catalog.tsx";
import Login from "./pages/Login.tsx";
import Registration from "./pages/Registration.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage/>,
    },
    {
        path: "/catalog",
        element: <Catalog/>,
    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/registration",
        element: <Registration/>,
    },
]);

function App() {
    return (
        <>
            <Header/>
            <RouterProvider router={router}/>
            <Footer/>
        </>
    )
}

export default App
