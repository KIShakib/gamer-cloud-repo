import React from 'react';
import successImage from "../../../Assets/Images/icon-thank-you.svg";

const Confirmation = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-y-6 w-[500px]'>
            <img src={successImage} alt="" />
            <div style={{ fontFamily: "'Ubuntu', sans-serif" }}>
                <h2 className='text-4xl font-bold mb-2 text-neutral text-center'>Thank you!</h2>
                <h4 className='text-[#B6B7BC] text-lg text-center'>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at khubaibulislam2001@gmail.com.</h4>
            </div>
        </div>
    );
};

export default Confirmation;