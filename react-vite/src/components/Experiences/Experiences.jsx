import React, { useState, useEffect } from 'react'
import Experience from '../Experience/Experience';
const Experiences = () => {
    const [experience, setExperience] = useState([]);
    useEffect(() => {
        fetch('experience.json')
            .then(res => res.json())
            .then(data => setExperience(data))
    }, [])

    return (
        <div className='flex flex-row mt-16 gap-7 md:flex-wrap'>
            {experience.map(item => <Experience key={item.id} item={item} />)}
        </div>
    )
}

export default Experiences