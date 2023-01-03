import React, { useState } from 'react';
import arcadePlan from "../../../Assets/Images/icon-arcade.svg";
import advancedPlan from "../../../Assets/Images/icon-advanced.svg";
import proPlan from "../../../Assets/Images/icon-pro.svg";
import { Link } from 'react-router-dom';

const Plan = () => {
    const [checked, setChecked] = useState(false);


    const monthlyOrYearly = (e) => {
        if (e.target.checked) {
            setChecked(true)
        }
        else if (!e.target.checked) {
            setChecked(false)
        }
    }

    return (
        <div className="mt-8 w-[600px]" style={{ fontFamily: "'Ubuntu', sans-serif" }}>
            <div className='mb-8'>
                <h2 className='text-4xl font-bold mb-2 text-neutral'>Select your plan</h2>
                <h4 className='text-[#B6B7BC] text-lg'>You have the option of monthly or yearly billing.</h4>
            </div>


            <div className='flex justify-start gap-x-4'>

                <div class="flex border hover:border-[#6A64F1] cursor-pointer rounded-xl">
                    <div class="p-4 h-44 w-36 flex flex-col justify-between">
                        <div>
                            <img src={arcadePlan} alt="" />
                        </div>
                        <div class="">
                            <h2 class="text-lg font-semibold text-[#1d5da8]">Arcade</h2>
                            <div class="text-[#B6B7BC]">
                                {
                                    checked ?
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

                <div class="flex border hover:border-[#6A64F1] cursor-pointer rounded-xl">
                    <div class="p-4 h-44 w-36 flex flex-col justify-between">
                        <div>
                            <img src={advancedPlan} alt="" />
                        </div>
                        <div class="">
                            <h2 class="text-lg font-semibold text-[#1d5da8]">Advanced</h2>
                            <div class="text-[#B6B7BC]">
                                {
                                    checked ?
                                        <div>
                                            <p>$120/yr</p>
                                            <p className='text-sm text-[#1d5da8]'>2 Months free</p>
                                        </div>
                                        : <p>$9/mo</p>
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex border hover:border-[#6A64F1] cursor-pointer rounded-xl">
                    <div class="p-4 h-44 w-36 flex flex-col justify-between">
                        <div>
                            <img src={proPlan} alt="" />
                        </div>
                        <div class="">
                            <h2 class="text-lg font-semibold text-[#1d5da8]">Pro</h2>
                            <div class="text-[#B6B7BC]">
                                {
                                    checked ?
                                        <div>
                                            <p>$150/yr</p>
                                            <p className='text-sm text-[#1d5da8]'>2 Months free</p>
                                        </div>
                                        : <p>$9/mo</p>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="form-control w-[470px] mt-10 flex flex-row items-center justify-center bg-slate-50 rounded-lg font-semibold">
                <p className={`${!checked ? "text-neutral" : "text-[#B6B7BC]"}`}>Monthly</p>
                <label className="label cursor-pointer">
                    <input
                        onChange={monthlyOrYearly}
                        type="checkbox"
                        className="toggle bg-neutral" />
                </label>
                <p className={`${checked ? "text-neutral" : "text-[#B6B7BC]"}`}>Yearly</p>
            </div>


            <div className='flex items-end justify-between mt-20 w-[470px]'>
                <Link
                    to="/personal-info"
                    type='submit'
                    className="py-3 px-8 text-[#1d5da8] font-semibold text-lg"
                >
                    Go Back
                </Link>
                <Link
                    to="/plan"
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