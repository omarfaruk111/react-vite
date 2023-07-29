import React, { useState } from 'react'
import Tabs from "./Tabs";
import Items from "./Items";
import Data from "./Data";

const Gallery = () => {
    const [data, setData] = useState(Data);
    const categoryData = Data.map((value)=>{
          return value.category
     });
    const tabsData= ["all", ...new Set(categoryData)];
    
    const filterCategory=(category) =>{
        if(category=="all"){
            setData(Data);
            return;
        }
       const filteredData =  Data.filter((value)=>{
           return value.category == category;
       })
       setData(filteredData);
    }

  return (
    <>
        <div className='bg-secondary'>
            <div className="container bg-secondary m-auto">
                <Tabs filterCategory={filterCategory} tabsData={tabsData}/>
                <Items data={data} />
            </div>
        </div>
    </>
  )
}

export default Gallery