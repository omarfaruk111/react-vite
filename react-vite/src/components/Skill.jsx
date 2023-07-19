import React from 'react'
import Progress from './Progress'

const Skill = () => {
  return (
    <div className="bg-secondary pb-32 pt-32 lg:pl-4 lg:pr-4">
      <div className="container m-auto flex flex-col">

      <div className="flex flex-col text-center">
          <h3 className="font-medium font-rubik text-base uppercase text-subTColor">
            My Experience
          </h3>
          <h2 className="font-oswald text-white text-5xl font-semibold sm:text-3xl">
            EXPERIENCE AND <span className="bg-clip-text text-transparent bg-gradient-to-r from-gradientColor1 to-gradientColor2">SKILL</span>
          </h2>
          <p className="pt-5 font-rubik text-lg text-white">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Sint Ratione Reprehenderit, Error Qui Enim Sit Ex Provident
          </p>
      </div>

        <div className="flex flex-row mt-16 gap-7 md:flex-wrap">
          <div className="w-full xl:w-1/4 md:w-1/3 sm:w-full">
            <div className="hover:bg-secondary-light p-4">
              <h4 className="text-white font-medium uppercase text-sm font-rubik">
                2011 - 2014 (UI DESIGNER)
              </h4>
              <h3 className="text-praimary font-oswald font-semibold text-xl mt-3 mb-3">
                GOOGLE CORPORATION.
              </h3>
              <p className="text-white font-rubik font-normal text-base">
                All You Need To Do Your Best Work Together In One Package Works
                Seamlessly Computer
              </p>
            </div>
          </div>
          <div className="w-full xl:w-1/4 md:w-1/3 sm:w-full">
            <div className="hover:bg-secondary-light p-4">
              <h4 className="text-white font-medium uppercase text-sm font-rubik">
                2011 - 2014 (UI DESIGNER)
              </h4>
              <h3 className="text-praimary font-oswald font-semibold text-xl mt-3 mb-3">
                APPLE PRODUCT CO.
              </h3>
              <p className="text-white font-rubik font-normal text-base">
                All You Need To Do Your Best Work Together In One Package Works
                Seamlessly Computer
              </p>
            </div>
          </div>
          <div className="w-full xl:w-1/4 md:w-1/3 sm:w-full">
            <div className="hover:bg-secondary-light p-4">
              <h4 className="text-white font-medium uppercase text-sm font-rubik">
                2011 - 2014 (UI DESIGNER)
              </h4>
              <h3 className="text-praimary font-oswald font-semibold text-xl mt-3 mb-3">
                LEAD DESIGNER MUSICSOFT
              </h3>
              <p className="text-white font-rubik font-normal text-base">
                All You Need To Do Your Best Work Together In One Package Works
                Seamlessly Computer
              </p>
            </div>
          </div>
          <div className="w-full xl:w-1/4 md:w-1/3 sm:w-full">
            <div className="hover:bg-secondary-light p-4">
              <h4 className="text-white font-medium uppercase text-sm font-rubik">
                2011 - 2014 (UI DESIGNER)
              </h4>
              <h3 className="text-praimary font-oswald font-semibold text-xl mt-3 mb-3">
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
