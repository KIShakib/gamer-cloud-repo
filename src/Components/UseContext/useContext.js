import { createContext, useState } from "react";

export const UseContext = createContext();



const ContextProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState({});
    const [monthlyOrYearly, setMonthlyOrYearly] = useState(false);
    const [selectedAddOns, setSelectedAddOns] = useState([]);
    const [selectedPlan, setSelectedPlan] = useState({});



    const context = {
        userInfo,
        setUserInfo,
        monthlyOrYearly,
        setMonthlyOrYearly,
        selectedPlan,
        setSelectedPlan,
        selectedAddOns,
        setSelectedAddOns
    }

    return (
        <UseContext.Provider value={context}>
            {children}
        </UseContext.Provider>
    )
}


export default ContextProvider;
