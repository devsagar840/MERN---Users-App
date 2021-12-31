import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./component/login";
import Reg from "./component/reg";
import React from "react";
import Nav from "./component/nav";
import Logout from "./component/logout";


const Rroute = () => {
    return (
        <div>

            <BrowserRouter>
                <div>
                    <Nav />
                    <Routes>
                        <Route path="/" element={< Login />} />
                        <Route path="/logout" element={< Logout />} />
                        <Route path="/reg" element={<Reg />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default Rroute;
