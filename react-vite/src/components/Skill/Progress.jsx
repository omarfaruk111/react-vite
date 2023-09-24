import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
const Progress = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap gap-y-10 pt-32 md:pt-24 sm:pt-20">
        <div className="w-1/5 sm:w-1/2 m-auto flex flex-col items-center">
          <CircularProgressbar className="w-1/2" value={80} text={`${80}%`} />
          <h2 className="text-white text-center font-oswald font-semibold text-xl mt-4">
            JavaScript
          </h2>
        </div>
        <div className="w-1/5 sm:w-1/2 m-auto flex flex-col items-center">
          <CircularProgressbar className="w-1/2" value={85} text={`${85}%`} />
          <h2 className="text-white text-center font-oswald font-semibold text-xl mt-4">
            React
          </h2>
        </div>
        <div className="w-1/5 sm:w-1/2 m-auto flex flex-col items-center">
          <CircularProgressbar className="w-1/2" value={80} text={`${80}%`} />
          <h2 className="text-white text-center font-oswald font-semibold text-xl mt-4">
            Next JS
          </h2>
        </div>
        <div className="w-1/5 sm:w-1/2 m-auto flex flex-col items-center">
          <CircularProgressbar className="w-1/2" value={80} text={`${70}%`} />
          <h2 className="text-white text-center font-oswald font-semibold text-xl mt-4">
            Node
          </h2>
        </div>
        <div className="w-1/5 sm:w-1/2 m-auto flex flex-col items-center">
          <CircularProgressbar className="w-1/2" value={80} text={`${75}%`} />
          <h2 className="text-white text-center font-oswald font-semibold text-xl mt-4">
            MongoDB
          </h2>
        </div>

      </div>
    </>
  )
}

export default Progress