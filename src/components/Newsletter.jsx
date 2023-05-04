import React from 'react';




const Newsletter = () => {
    return (
        <div className='w-full py-16 text-white px-4'>
            <div className='max-width-[1240] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2 my-4'>
                <h1 className='md:text-4xl sm:text-4xl text-2xl font-bold py-2'>Want tips & tricks to optimize your workflow</h1>
                <p>Sign up for our newsletter and stay upto date</p>
                </div>

                <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='w-full flex p-3 rounded-md text-black' type='email' placeholder='Enter Email' />
                    <button className='text-black bg-[#00df9a] w-[200px] rounded-md font-medium my-6 ml-4 px-6 py-3'>Notify Me</button>
                </div>
                <p>We care about your data, Read our <span className='text-[#00df9a]'>privacy policy.</span></p>
                </div>
            </div>
        </div>
    )
}

export default Newsletter;