import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./home"
import { Details } from "./details"


export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/details" element={<Details />}/>
            </Routes>
        </BrowserRouter>
    )
}