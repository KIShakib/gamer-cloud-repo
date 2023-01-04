import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UseContext } from '../../UseContext/useContext';


const PersonalInfo = () => {
    const navigate = useNavigate();

    const { userInfo, setUserInfo } = useContext(UseContext);

    const handlePersonalInfo = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const user = {
            name,
            email,
            phone
        }
        setUserInfo(user)
        navigate("/plan")
    }

    return (
        <div className="lg:mt-8 lg:m-0 lg:w-[500px] lg:shadow-none shadow lg:p-0 p-4 -mt-14 lg:rounded-none rounded-xl bg-white" style={{ fontFamily: "'Ubuntu', sans-serif" }}>
            <div className='mb-8'>
                <h2 className='text-4xl font-bold mb-2 text-neutral'>Personal Info</h2>
                <h4 className='text-[#B6B7BC] text-lg'>Please provide your name, email address, and phone number.</h4>
            </div>
            <div className="">
                <form
                    onSubmit={handlePersonalInfo}
                    className='flex flex-col gap-y-2 text-[#1d5da8]'
                >
                    <div className="mb-5">
                        <label
                            htmlFor="name"
                            className="mb-1 block text-base font-medium text-[#07074D]"
                        >
                            Name
                        </label>
                        <input
                            required
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
                            required
                            type="email"
                            name="email"
                            placeholder="Your Email Address"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-lg text-[#174B88 outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="phone"
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
                            required
                            placeholder="e.g +1 234 456 789"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-lg text-[#174B88 outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div className='flex items-end justify-end'>
                        {/* <input
                            className="rounded-md bg-[#174B88] py-3 px-8 text-white"
                            type="submit" name="" id="" value="Next Step" /> */}
                        {/* <Link
                            to="/plan"
                            className="rounded-md bg-[#174B88] py-3 px-8 text-white"
                        >
                        </Link> */}
                        <button type='submit' className="rounded-md bg-[#174B88] py-3 px-8 text-white">Next Step</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PersonalInfo;