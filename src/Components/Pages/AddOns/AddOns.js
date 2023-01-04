import React from 'react';
import { Link } from 'react-router-dom';

const AddOns = () => {
    return (
        <div className="mt-8 w-[500px]" style={{ fontFamily: "'Ubuntu', sans-serif" }}>
            <div className='mb-8'>
                <h2 className='text-4xl font-bold mb-2 text-neutral'>Pick add-ons</h2>
                <h4 className='text-[#B6B7BC] text-lg'>Add-ons help enhance your gaming experience.</h4>
            </div>

            <div className="flex flex-col gap-y-4">
                <div className="w-full h-[84px] flex items-center px-7 border cursor-pointer rounded-lg border-[#6A64F1]">
                    <label className="cursor-pointer w-full">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-x-5">
                                <input type="checkbox" className="checkbox checkbox-info" />
                                <div>
                                    <h2 className="font-semibold text-neutral">Online service</h2>
                                    <p className='text-[#B6B7BC]'>Access to multiplayer game</p>
                                </div>
                            </div>
                            <div className="text-[#6A64F1]">
                                +1/mo
                            </div>
                        </div>
                    </label>
                </div>
                <div className="w-full h-[84px] flex items-center px-7 border cursor-pointer rounded-lg border-[#6A64F1]">
                    <label className="cursor-pointer w-full">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-x-5">
                                <input type="checkbox" className="checkbox checkbox-info" />
                                <div>
                                    <h2 className="font-semibold text-neutral">Larger storage</h2>
                                    <p className='text-[#B6B7BC]'>Extra 1TB of cloud save</p>
                                </div>
                            </div>
                            <div className="text-[#6A64F1]">
                                +2/mo
                            </div>
                        </div>
                    </label>
                </div>
                <div className="w-full h-[84px] flex items-center px-7 border cursor-pointer rounded-lg border-[#6A64F1]">
                    <label className="cursor-pointer w-full">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-x-5">
                                <input type="checkbox" className="checkbox checkbox-info" />
                                <div>
                                    <h2 className="font-semibold text-neutral">Customizable profile</h2>
                                    <p className='text-[#B6B7BC]'>Custom theme on your profile</p>
                                </div>
                            </div>
                            <div className="text-[#6A64F1]">
                                +2/mo
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