import React from 'react';

const SingleAddOns = ({ addOns, monthlyOrYearly }) => {

    console.log(addOns);

    


    return (
        <div className='flex justify-between items-center'>
            <p className='text-[#B6B7BC] tracking-tight'>{addOns}</p>

            {/* <p className='text-neutral opacity-80'>
                {
                    monthlyOrYearly ?
                        (addOns === "Online service" && 10 + "/yr") || (addOns === "Larger storage" && 20 + "/yr") || (addOns === "Customizable profile" && 20 + "/yr")

                        :
                        (addOns === "Online service" && 1 + "/mo") || (addOns === "Larger storage" && 2 + "/mo") || (addOns === "Customizable profile" && 2 + "/mo")
                }
            </p> */}
        </div>
    );
};

export default SingleAddOns;