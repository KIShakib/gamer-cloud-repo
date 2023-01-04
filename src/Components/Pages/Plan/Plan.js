import React, { useContext } from 'react';
import arcadePlan from "../../../Assets/Images/icon-arcade.svg";
import advancedPlan from "../../../Assets/Images/icon-advanced.svg";
import proPlan from "../../../Assets/Images/icon-pro.svg";
import { Link } from 'react-router-dom';
import { UseContext } from '../../UseContext/useContext';

const Plan = () => {
    const { monthlyOrYearly, setMonthlyOrYearly, setSelectedPlan } = useContext(UseContext);

    // const handleSelectedPlan = (plan) => {
    //     setSelectedPlan(plan)
    // }


    const handleMonthlyOrYearly = (e) => {
        if (e.target.checked) {
            setMonthlyOrYearly(true)
        }
        else if (!e.target.checked) {
            setMonthlyOrYearly(false)
        }
    }

    return (
        <div className="lg:mt-8 lg:m-0 lg:w-[500px] lg:shadow-none shadow lg:p-0 p-4 -mt-14 lg:rounded-none rounded-xl bg-white" style={{ fontFamily: "'Ubuntu', sans-serif" }}>
            <div className='mb-8'>
                <h2 className='text-4xl font-bold mb-2 text-neutral'>Select your plan</h2>
                <h4 className='text-[#B6B7BC] text-lg'>You have the option of monthly or yearly billing.</h4>
            </div>


            <div className='lg:flex justify-start flex flex-col gap-x-8 gap-y-5'>

                <label className="relative cursor-pointer">
                    <input
                        onClick={() => setSelectedPlan({ name: "Arcade", monthly: 9, yearly: 90 })}
                        type="radio"
                        value="arcadePlan"
                        className="peer sr-only" name="plan" />
                    <div className="flex border hover:border-[#6A64F1] cursor-pointer rounded-xl overflow-hidden bg-white  ring ring-transparent transition-all active:scale-95 peer-checked:ring-blue-500 peer-checked:bg-slate-100">
                        <div className="p-4 lg:h-44 lg:w-36 flex lg:flex-col lg:justify-between items-center lg:gap-0 gap-x-5">
                            <div>
                                <img src={arcadePlan} alt="" />
                            </div>
                            <div className="">
                                <h2 className="text-lg font-semibold text-[#1d5da8]">Arcade</h2>
                                <div className="text-[#B6B7BC]">
                                    {
                                        monthlyOrYearly ?
                                            <div>
                                                <p>$90/yr</p>
                                                <p className='text-sm text-[#1d5da8]'>2 Months free</p>
                                            </div>
                                            : <p>$9/mo</p>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </label>

                <label className="relative cursor-pointer">
                    <input
                        onClick={() => setSelectedPlan({ name: "Advanced", monthly: 12, yearly: 120 })}
                        type="radio"
                        value="advancedPlan" className="peer sr-only" name="plan" />
                    <div className="flex border hover:border-[#6A64F1] cursor-pointer rounded-xl overflow-hidden bg-white  ring ring-transparent transition-all active:scale-95 peer-checked:ring-blue-500 peer-checked:bg-slate-100">
                        <div className="p-4 lg:h-44 lg:w-36 flex lg:flex-col lg:justify-between items-center lg:gap-0 gap-x-5">
                            <div>
                                <img src={advancedPlan} alt="" />
                            </div>
                            <div className="">
                                <h2 className="text-lg font-semibold text-[#1d5da8]">Advanced</h2>
                                <div className="text-[#B6B7BC]">
                                    {
                                        monthlyOrYearly ?
                                            <div>
                                                <p>$120/yr</p>
                                                <p className='text-sm text-[#1d5da8]'>2 Months free</p>
                                            </div>
                                            : <p>$12/mo</p>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </label>

                <label className="relative cursor-pointer">
                    <input
                        onClick={() => setSelectedPlan({ name: "Pro", monthly: 15, yearly: 150 })}
                        type="radio"
                        value="proPlan" className="peer sr-only" name="plan" />
                    <div className="flex border hover:border-[#6A64F1] cursor-pointer rounded-xl overflow-hidden bg-white  ring ring-transparent transition-all active:scale-95 peer-checked:ring-blue-500 peer-checked:bg-slate-100">
                        <div className="p-4 lg:h-44 lg:w-36 flex lg:flex-col lg:justify-between items-center lg:gap-0 gap-x-5">
                            <div>
                                <img src={proPlan} alt="" />
                            </div>
                            <div className="">
                                <h2 className="text-lg font-semibold text-[#1d5da8]">Pro</h2>
                                <div className="text-[#B6B7BC]">
                                    {
                                        monthlyOrYearly ?
                                            <div>
                                                <p>$150/yr</p>
                                                <p className='text-sm text-[#1d5da8]'>2 Months free</p>
                                            </div>
                                            : <p>$15/mo</p>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </label>

            </div>

            <div className="form-control w-full mt-10 flex flex-row items-center justify-center bg-slate-50 rounded-lg font-semibold">
                <p className={`${!monthlyOrYearly ? "text-neutral" : "text-[#B6B7BC]"}`}>Monthly</p>
                <label className="label cursor-pointer">
                    <input
                        onChange={handleMonthlyOrYearly}
                        type="checkbox"
                        className="toggle bg-neutral" />
                </label>
                <p className={`${monthlyOrYearly ? "text-neutral" : "text-[#B6B7BC]"}`}>Yearly</p>
            </div>


            <div className='flex items-end justify-between mt-24 w-full'>
                <Link
                    to="/personal-info"
                    type='submit'
                    className="py-3 text-[#B6B7BC] hover:text-[#1d5da8] font-semibold text-lg"
                >
                    Go Back
                </Link>
                <Link
                    to="/add-ons"
                    type='submit'
                    className="rounded-md bg-[#174B88] py-3 px-8 text-white"
                >
                    Next Step
                </Link>
            </div>
        </div>
    );
};

export default Plan;