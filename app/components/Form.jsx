import React from 'react'

const Form = () => {
    return (
        <div className='max-w-[1240px] m-auto p-4'>
            <h1 className='text-2xl font-bold text-center p-4'>Subscribe to the Newsletter</h1>
            <form className='max-w-[600px] m-auto'>
                <input className='border shadow-lg p-3 w-full my-2' type="text" placeholder='Subject' />
                <button className='border shadow-lg p-3 w-full mt-2'>Submit</button>
            </form>
        </div>
    )
}

export default Form