import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import useDynamicTitle from '../../Hooks/useDynamicTitle';
import { UseContext } from '../../UseContext/useContext';

const AddOns = () => {

    useDynamicTitle("Add-ons")

    const { monthlyOrYearly, selectedAddOns, setSelectedAddOns } = useContext(UseContext);


    const handleSelectedAddOns = value => {
        const addOns = [...selectedAddOns, value];
        setSelectedAddOns(addOns);
        console.log(addOns);
    }


    const onlineService = {
        name: "Online service",
        monthly: 1,
        yearly: 10
    }
    const largerStorage = {
        name: "Larger storage",
        monthly: 2,
        yearly: 20
    }
    const customizableProfile = {
        name: "Customizable profile",
        monthly: 2,
        yearly: 20
    }

    return (
        <div className="lg:mt-8 lg:m-0 lg:w-[500px] lg:shadow-none shadow lg:p-0 p-4 -mt-14 lg:rounded-none rounded-xl bg-white" style={{ fontFamily: "'Ubuntu', sans-serif" }}>
            <div className='mb-8'>
                <h2 className='text-4xl font-bold mb-2 text-neutral'>Pick add-ons</h2>
                <h4 className='text-[#B6B7BC] text-lg'>Add-ons help enhance your gaming experience.</h4>
            </div>

            <div className="flex flex-col gap-y-4">

                <div className="w-full h-[84px] flex items-center lg:px-7 px-3 border cursor-pointer rounded-lg border-[#6A64F1]">
                    <label className="cursor-pointer w-full">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-x-5">
                                <input
                                    onClick={() => handleSelectedAddOns(onlineService)}
                                    value="Online service"
                                    type="checkbox" className="checkbox checkbox-info" />
                                <div>
                                    <h2 className="font-semibold text-neutral">Online service</h2>
                                    <p className='text-[#B6B7BC] lg:text-base text-sm'>Access to multiplayer game</p>
                                </div>
                            </div>
                            <div className="text-[#6A64F1]">
                                {
                                    monthlyOrYearly ? "+10/yr" : "+1/mo"
                                }
                            </div>
                        </div>
                    </label>
                </div>

                <div className="w-full h-[84px] flex items-center lg:px-7 px-3 border cursor-pointer rounded-lg border-[#6A64F1]">
                    <label className="cursor-pointer w-full">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-x-5">
                                <input
                                    onClick={() => handleSelectedAddOns(largerStorage)}
                                    value="Larger storage"
                                    type="checkbox" className="checkbox checkbox-info" />
                                <div>
                                    <h2 className="font-semibold text-neutral">Larger storage</h2>
                                    <p className='text-[#B6B7BC] lg:text-base text-sm'>Extra 1TB of cloud save</p>
                                </div>
                            </div>
                            <div className="text-[#6A64F1]">
                                {
                                    monthlyOrYearly ? "+20/yr" : "+2/mo"
                                }
                            </div>
                        </div>
                    </label>
                </div>

                <div className="w-full h-[84px] flex items-center lg:px-7 px-3 border cursor-pointer rounded-lg border-[#6A64F1]">
                    <label className="cursor-pointer w-full">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-x-5">
                                <input
                                    onClick={() => handleSelectedAddOns(customizableProfile)}
                                    value="Customizable profile"
                                    type="checkbox" className="checkbox checkbox-info" />
                                <div>
                                    <h2 className="font-semibold text-neutral">Customizable profile</h2>
                                    <p className='text-[#B6B7BC] lg:text-base text-sm'>Custom theme on your profile</p>
                                </div>
                            </div>
                            <div className="text-[#6A64F1]">
                                {
                                    monthlyOrYearly ? "+20/yr" : "+2/mo"
                                }
                            </div>
                        </div>
                    </label>
                </div>
            </div>

            <div className='flex items-end justify-between mt-[70px] w-full'>
                <Link
                    to="/plan"
                    type='submit'
                    className="py-3 text-[#B6B7BC] hover:text-[#1d5da8] font-semibold text-lg"
                >
                    Go Back
                </Link>
                <Link
                    to="/summary"
                    type='submit'
                    className="rounded-md bg-[#174B88] py-3 px-8 text-white"
                >
                    Next Step
                </Link>
            </div>
        </div>
    );
};

export default AddOns;