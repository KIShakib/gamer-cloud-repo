import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { UseContext } from '../../UseContext/useContext';

const Summary = () => {
    const { userInfo, setUserInfo, monthlyOrYearly, selectedPlan, selectedAddOns } = useContext(UseContext);
    // console.log(selectedAddOns);

    let addOnCost = 0;

    if (monthlyOrYearly) {
        const yearlyAddOn = selectedAddOns?.map(addOns => addOns.yearly);
        console.log(yearlyAddOn);
        const initialValue = 0;
        const sumWithInitial = yearlyAddOn.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            initialValue
        );
        console.log(sumWithInitial);
        addOnCost = sumWithInitial;
    }
    else {
        const monthlyAddOn = selectedAddOns?.map(addOns => addOns.monthly);
        console.log(monthlyAddOn);
        const initialValue = 0;
        const sumWithInitial = monthlyAddOn.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            initialValue
        );
        console.log(sumWithInitial);
        addOnCost = sumWithInitial;
    }



    return (
        <div className="lg:mt-8 lg:m-0 lg:w-[500px] lg:shadow-none shadow lg:p-0 p-4 -mt-14 lg:rounded-none rounded-xl bg-white" style={{ fontFamily: "'Ubuntu', sans-serif" }}>
            <div className='mb-8'>
                <h2 className='text-4xl font-bold mb-2 text-neutral'>Finishing up</h2>
                <h4 className='text-[#B6B7BC] text-lg'>Double check everything looks OK before confirming.</h4>
            </div>

            <div className='bg-[#F8F9FE] p-5 rounded-lg'>
                <div className='flex justify-between items-center text-neutral font-semibold'>
                    <div>
                        <h3>
                            {selectedPlan.name} {`${monthlyOrYearly ? "(Yearly)" : "(Monthly)"}`}
                        </h3>
                        <button className='underline font-light text-blue-700'>Change</button>
                    </div>
                    <p>
                        {monthlyOrYearly ? "$" + selectedPlan.yearly + "/yr" : "$" + selectedPlan.monthly + "/mo"}
                    </p>
                </div>
                <div className="divider"></div>
                {
                    selectedAddOns?.map(addOns => {
                        return <div className='flex justify-between items-center'>
                            <p className='text-[#B6B7BC] tracking-tight'>{addOns.name}</p>
                            <p className='text-neutral opacity-80'>
                                {
                                    monthlyOrYearly ?
                                        (addOns.name === "Online service" && 10 + "/yr") || (addOns.name === "Larger storage" && 20 + "/yr") || (addOns.name === "Customizable profile" && 20 + "/yr")

                                        :
                                        (addOns.name === "Online service" && 1 + "/mo") || (addOns.name === "Larger storage" && 2 + "/mo") || (addOns.name === "Customizable profile" && 2 + "/mo")
                                }
                            </p>
                        </div>
                    }
                    )
                }
            </div>

            <div className='flex justify-between items-center p-5'>
                <h4 className='text-[#B6B7BC] tracking-tight'>Total {monthlyOrYearly ? "(per year)" : "(per month)"}</h4>
                <h3 className='text-blue-700 text-lg font-bold'>
                    {
                        monthlyOrYearly ? "$" + (selectedPlan.yearly + addOnCost) + "/yr" : "$" + (selectedPlan.monthly + addOnCost) + "/mo"
                    }
                </h3>
            </div>

            <div className='flex items-end justify-between mt-[82px] w-full'>
                <Link
                    to="/add-ons"
                    type='submit'
                    className="py-3 text-[#B6B7BC] hover:text-[#1d5da8] font-semibold text-lg"
                >
                    Go Back
                </Link>
                <Link
                    onClick={() => toast.success('Subscription confirmed')}
                    to="/confirmation"
                    type='submit'
                    className="rounded-md bg-[#174B88] hover:bg-[#938CFE] py-3 px-8 text-white"
                >
                    Confirm
                </Link>
            </div>
        </div >
    );
};

export default Summary;