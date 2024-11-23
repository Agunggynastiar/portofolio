import { TypeAnimation } from 'react-type-animation'
import React from "react"

export default function Banner() {
  return (
    <div id="home" className="section container mx-auto max-w-[1200px] px-3 items-center ">
      <div className="w-full ">
        <div className="block text-center font-secondary font-black text-[30px]">
          Hello, I am
          <div>
            <TypeAnimation sequence={["Frontend Developer", 2000, "Content Creator", 2000, "Influencer", 2000]} wrapper="div" cursor={true} repeat={Infinity} className="ml-3 text-secondary" />
          </div>
        </div>
        <div className="max-w-[750px] text-center mx-auto mt-5  ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, tempora. Tenetur neque, magni explicabo ut ipsum incidunt hic nihil veniam pariatur minima, ducimus reiciendis repellat et adipisci veritatis dicta molestiae?
        </div>
      </div>
    </div>
  )
};
