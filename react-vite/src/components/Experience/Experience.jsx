import React from 'react'
import PropTypes from 'prop-types'

const Experience = ({ item }) => {
    const { } = item;
    return (
        <div className='bg-slate-900 p-5 flex flex-row gap-10 rounded-md'>
            <div className='w-[30%] relative'>
                <div className='absolute top-0 bottom-0 z-40 flex flex-col justify-center p-5'>
                    <h1 className='text-white text-2xl font-medium font-rubik'>{item.job.position}</h1>
                    <h3 className='text-white text-sm font-normal font-rubik py-2'>{item.job.job_type}</h3>
                    <h2 className='text-white text-lg font-medium font-rubik'>{item.job.year}</h2>
                </div>
                <img className='opacity-20' src={item.job.src} alt="" />
            </div>
            <div className='w-[70%] flex flex-col justify-center'>
                <h1 className='text-white text-2xl font-medium font-rubik'>{item.job.company.about}</h1>
                <h1 className='text-white text-base font-normal font-rubik mt-4'>{item.job.company.info}</h1>
            </div>
        </div>
    )
}

Experience.propTypes = {
    item: PropTypes.object
}

export default Experience