import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import PersonalInfo from "../Pages/PersonalInfo/PersonalInfo";
import Plan from "../Pages/Plan/Plan";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts />,
        children: [
            {
                path: "/",
                element: <PersonalInfo />
            },
            {
                path: "/personal-info",
                element: <PersonalInfo />
            },
            {
                path: "/plan",
                element: <Plan />
            },
        ]
    }
])