import React from 'react';
import { Link } from 'react-router-dom';

const Summary = () => {
    return (
        <div className="mt-8 w-[500px]" style={{ fontFamily: "'Ubuntu', sans-serif" }}>
            <div className='mb-8'>
                <h2 className='text-4xl font-bold mb-2 text-neutral'>Finishing up</h2>
                <h4 className='text-[#B6B7BC] text-lg'>Double check everything looks OK before confirming.</h4>
            </div>

            <div className='bg-[#F8F9FE] p-5 rounded-lg'>
                <div className='flex justify-between items-center text-neutral font-semibold'>
                    <div>
                        <h3>Arcade (Monthly)</h3>
                        <button className='underline font-light text-blue-700'>Change</button>
                    </div>
                    <p>$9/mo</p>
                </div>
                <div className="divider"></div>
                <div className='flex justify-between items-center mb-5'>
                    <p className='text-[#B6B7BC] tracking-tight'>Online service</p>
                    <p className='text-neutral opacity-80'>+$1/mo</p>
                </div>
                <div className='flex justify-between items-center'>
                    <p className='text-[#B6B7BC] tracking-tight'>Large storage</p>
                    <p className='text-neutral opacity-80'>+$2/mo</p>
                </div>
            </div>

            <div className='flex justify-between items-center p-5'>
                <h4 className='text-[#B6B7BC] tracking-tight'>Total (per month)</h4>
                <h3 className='text-blue-700 text-lg font-bold'>+$12/mo</h3>
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
                    to="/confirmation"
                    type='submit'
                    className="rounded-md bg-[#174B88] hover:bg-[#938CFE] py-3 px-8 text-white"
                >
                    Confirm
                </Link>
            </div>
        </div>
    );
};

export default Summary;