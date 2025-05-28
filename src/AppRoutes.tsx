import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

const AppRoutes : React.FC = () =>
{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;

// Normally I keep this all in App.tsx, but it's more scalable to keep it in AppRoutes.tsx as the project grows and we add new components to App.tsx.