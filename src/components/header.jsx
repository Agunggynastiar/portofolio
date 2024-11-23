import { BsInstagram, BsYoutube } from "react-icons/bs"

export default function Header() {
  return (
    <div className="container mx-auto max-w-[1200px] px-3 relative lg:absolute left-0 right-0">
      <div className="flex justify-between py-5 items-center" data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="500" data-aos-delay="0">
        <div className="text-gradient font-secondary">
          <a href="/">
            <h1 className="text-[30px] leading-none font-bold">AGUNG</h1>
            <h4 className="font-normal leading-none">GYNASTIAR</h4>
          </a>
        </div>
        <div className="flex items-center space-x-3" data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-duration="500" data-aos-delay="0">
          <a href="/">
            <BsInstagram />
          </a>
          <a href="/">
            <BsYoutube />
          </a>
        </div>
      </div>
    </div>
  )
}
