import React from 'react'
import Progress from './Progress'

const Skill = () => {
  return (
    <div className="bg-dark pb-32 pt-32">
      <div className="container m-auto flex flex-col">
        <div className="flex flex-row">
          <div className="w-full xl:w-1/2">
            <h3 className="text-green font-medium font-rubik text-base uppercase">
              My Experience
            </h3>
            <h2 className="font-oswald text-white text-5xl font-semibold">
              EXPERIENCE AND <span className="text-green">SKILL</span>
            </h2>
          </div>
          <div className="w-full xl:w-1/2 ">
            <p className="border-l-2 border-green pl-10 font-rubik text-lg text-white">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Sint
              Ratione Reprehenderit, Error Qui Enim Sit Ex Provident
            </p>
          </div>
        </div>
        <div className="flex flex-row mt-16 gap-7">
          <div className="w-full xl:w-1/4">
            <div className="hover:bg-dark-light p-4">
              <h4 className="text-white font-medium uppercase text-sm font-rubik">
                2011 - 2014 (UI DESIGNER)
              </h4>
              <h3 className="text-green font-oswald font-semibold text-xl mt-3 mb-3">
                GOOGLE CORPORATION.
              </h3>
              <p className="text-white font-rubik font-normal text-base">
                All You Need To Do Your Best Work Together In One Package Works
                Seamlessly Computer
              </p>
            </div>
          </div>
          <div className="w-full xl:w-1/4">
            <div className="hover:bg-dark-light p-4">
              <h4 className="text-white font-medium uppercase text-sm font-rubik">
                2011 - 2014 (UI DESIGNER)
              </h4>
              <h3 className="text-green font-oswald font-semibold text-xl mt-3 mb-3">
                APPLE PRODUCT CO.
              </h3>
              <p className="text-white font-rubik font-normal text-base">
                All You Need To Do Your Best Work Together In One Package Works
                Seamlessly Computer
              </p>
            </div>
          </div>
          <div className="w-full xl:w-1/4">
            <div className="hover:bg-dark-light p-4">
              <h4 className="text-white font-medium uppercase text-sm font-rubik">
                2011 - 2014 (UI DESIGNER)
              </h4>
              <h3 className="text-green font-oswald font-semibold text-xl mt-3 mb-3">
                LEAD DESIGNER MUSICSOFT
              </h3>
              <p className="text-white font-rubik font-normal text-base">
                All You Need To Do Your Best Work Together In One Package Works
                Seamlessly Computer
              </p>
            </div>
          </div>
          <div className="w-full xl:w-1/4">
            <div className="hover:bg-dark-light p-4">
              <h4 className="text-white font-medium uppercase text-sm font-rubik">
                2011 - 2014 (UI DESIGNER)
              </h4>
              <h3 className="text-green font-oswald font-semibold text-xl mt-3 mb-3">
                LBRUNO MARS AS.
              </h3>
              <p className="text-white font-rubik font-normal text-base">
                All You Need To Do Your Best Work Together In One Package Works
                Seamlessly Computer
              </p>
            </div>
          </div>
        </div>
        <Progress />
      </div>
    </div>
  )
}

export default Skill
