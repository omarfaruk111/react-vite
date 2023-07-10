import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
const Progress = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap gap-y-10 pt-32">
        <div className="w-full xl:w-1/5 m-auto flex flex-col items-center">
          <CircularProgressbar className="w-1/2" value={99} text={`${99}%`} />
          <h2 className="text-white text-center font-oswald font-semibold text-xl mt-4">
            HTML
          </h2>
        </div>
        <div className="w-full xl:w-1/5 m-auto flex flex-col items-center">
          <CircularProgressbar className="w-1/2" value={90} text={`${90}%`} />
          <h2 className="text-white text-center font-oswald font-semibold text-xl mt-4">
            Tailwind
          </h2>
        </div>
        <div className="w-full xl:w-1/5 m-auto flex flex-col items-center">
          <CircularProgressbar className="w-1/2" value={80} text={`${80}%`} />
          <h2 className="text-white text-center font-oswald font-semibold text-xl mt-4">
            JavaScript
          </h2>
        </div>
        <div className="w-full xl:w-1/5 m-auto flex flex-col items-center">
          <CircularProgressbar className="w-1/2" value={85} text={`${85}%`} />
          <h2 className="text-white text-center font-oswald font-semibold text-xl mt-4">
            React
          </h2>
        </div>
        <div className="w-full xl:w-1/5 m-auto flex flex-col items-center">
          <CircularProgressbar className="w-1/2" value={80} text={`${80}%`} />
          <h2 className="text-white text-center font-oswald font-semibold text-xl mt-4">
            Next JS
          </h2>
        </div>
        <div className="w-full xl:w-1/5 m-auto flex flex-col items-center">
          <CircularProgressbar className="w-1/2" value={80} text={`${70}%`} />
          <h2 className="text-white text-center font-oswald font-semibold text-xl mt-4">
            Node
          </h2>
        </div>
        <div className="w-full xl:w-1/5 m-auto flex flex-col items-center">
          <CircularProgressbar className="w-1/2" value={80} text={`${75}%`} />
          <h2 className="text-white text-center font-oswald font-semibold text-xl mt-4">
            MongoDB
          </h2>
        </div>
        <div className="w-full xl:w-1/5 m-auto flex flex-col items-center">
          <CircularProgressbar className="w-1/2" value={89} text={`${89}%`} />
          <h2 className="text-white text-center font-oswald font-semibold text-xl mt-4">
            PHP
          </h2>
        </div>
        <div className="w-full xl:w-1/5 m-auto flex flex-col items-center">
          <CircularProgressbar className="w-1/2" value={70} text={`${70}%`} />
          <h2 className="text-white text-center font-oswald font-semibold text-xl mt-4">
            MYSQL
          </h2>
        </div>
        <div className="w-full xl:w-1/5 m-auto flex flex-col items-center">
          <CircularProgressbar className="w-1/2" value={90} text={`${90}%`} />
          <h2 className="text-white text-center font-oswald font-semibold text-xl mt-4">
            Wordpress
          </h2>
        </div>
      </div>
    </>
  )
}

export default Progress
