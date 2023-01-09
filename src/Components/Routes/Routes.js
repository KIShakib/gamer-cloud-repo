import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import AddOns from "../Pages/AddOns/AddOns";
import Confirmation from "../Pages/Confirmation/Confirmation";
import PersonalInfo from "../Pages/PersonalInfo/PersonalInfo";
import Plan from "../Pages/Plan/Plan";
import Summary from "../Pages/Summary/Summary";

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
                path: "/plan",
                element: <Plan />
            },
            {
                path: "/add-ons",
                element: <AddOns />
            },
            {
                path: "/summary",
                element: <Summary />
            },
            {
                path: "/confirmation",
                element: <Confirmation />
            },
        ]
    }
])