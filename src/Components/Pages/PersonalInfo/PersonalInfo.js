import React from 'react';
import { Link } from 'react-router-dom';


const PersonalInfo = () => {

    const handlePersonalInfo = e => {
        e.preventDefault();
    }

    return (
        <div className="mt-8 w-[500px]" style={{ fontFamily: "'Ubuntu', sans-serif" }}>
            <div className='mb-8'>
                <h2 className='text-4xl font-bold mb-2 text-neutral'>Personal Info</h2>
                <h4 className='text-[#B6B7BC] text-lg'>Please provide your name, email address, and phone number.</h4>
            </div>
            <div className="">
                <form
                    className='flex flex-col gap-y-2 text-[#1d5da8]'
                    onSubmit={handlePersonalInfo}
                >
                    <div className="mb-5">
                        <label
                            htmlFor="name"
                            className="mb-1 block text-base font-medium text-[#07074D]"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-lg tracking-widest text-[#174B88] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="email"
                            className="mb-1 block text-base font-medium text-[#07074D]"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email Address"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-lg text-[#174B88 outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="name"
                            className="mb-1 block text-base font-medium text-[#07074D]"
                        >
                            <div className='flex justify-between '>
                                <p>Phone Number</p>
                                <p className='text-red-600'>This field is required</p>
                            </div>
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="e.g +1 234 456 789"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-lg text-[#174B88 outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div className='flex items-end justify-end'>
                        <Link
                            to="/plan"
                            type='submit'
                            className="rounded-md bg-[#174B88] py-3 px-8 text-white"
                        >
                            Next Step
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PersonalInfo;