import React from 'react'

const Tabs = ({filterCategory, tabsData}) => {
  return (
    <div className='flex flex-row justify-center gap-5 pb-6'>
        {
            tabsData.map((category, index)=>{
                return (
                    <button type="button" className="text-white text-base font-rubik font-medium uppercase bg-gradient-236 from-gradientColor1 to-gradientColor2 pt-3 pl-6 pb-3 pr-6 rounded" onClick={()=> filterCategory(category)} key={index}>{category}</button>
                )
            })
            }
    </div>
  )
}

export default Tabs