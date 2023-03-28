import { STRINGS } from "../../../constants/strings";
import header from "../../../assets/home-header.jpeg";
import { RiUserSmileFill } from "react-icons/ri";
import { GiToothbrush } from "react-icons/gi";
import { FaBaby } from "react-icons/fa";
import { MdLocalPharmacy, MdFamilyRestroom } from "react-icons/md";

export const Home = () => (
  <div className="flex flex-col">
    <div className="flex flex-col xs:flex-row justify-apart">
      <img
        alt="three teeth in a line with some dentist tools, laid on a blue medical tablecloth"
        src={header}
        className="flex w-full max-h-[20rem] object-cover object-bottom"
      />

      <h1
        className={
          "font-mukta flex mt-[1rem] xs:mt-0 lg:top-[22%] xs:top-[18%] xs:absolute self-center break-words max-w-[50%] xs:max-w-[30%] mx-[2rem] xs:ml-[4rem] font-semibold tracking-wider text-teal-800 text-5xl z-10"
        }
      >
        {STRINGS.companyName}
      </h1>
    </div>

    <div className="flex flex-col lg:flex-row flex-1 mx-[10rem] lg:space-x-[6rem] flex-row py-[4rem] lg:justify-evenly">
      <p className="flex flex-1 text-black text-lg text-justify tracking-normal">{`Our team of expert dentists and hygienists uses the latest technology and techniques to provide you with the best care possible.`}</p>

      <p className="flex flex-1 pt-[2rem] lg:pt-0 text-black text-lg text-justify tracking-normal">{`Don't wait any longer to take care of your dental health - schedule an appointment with us today!`}</p>

      <p className="flex flex-1 pt-[2rem] lg:pt-0 text-black text-lg text-justify tracking-normal">{`We understand that visiting the dentist can be stressful. We strive to create a welcoming and comfortable environment for our patients.`}</p>
    </div>

    <div className="flex flex-1 flex-col items-center space-y-[1rem] md:flex-row md:self-center md:space-x-[3%] md:space-y-0 mx-[2rem] md:ml-[7rem] mb-[2rem]">
      <div className="flex shadow-lg w-[9rem] h-[8rem] flex-col bg-white border-[1.5px] px-2 py-3 rounded-lg items-center justify-center">
        <RiUserSmileFill color="#01606F" size={30} />
        <label className="text-primary font-semibold text-center mt-4">{`Cosmetic Dentistry`}</label>
      </div>

      <div className="flex shadow-lg w-[9rem] h-[8rem] flex-col bg-white border-[1.5px] px-2 py-3 rounded-lg items-center justify-center">
        <FaBaby color="#01606F" size="30" />
        <label className="text-primary font-semibold text-center mt-4">{`Children's Dentistry`}</label>
      </div>

      <div className="flex shadow-lg w-[9rem] h-[8rem] flex-col bg-white border-[1.5px] px-2 py-3 rounded-lg items-center justify-center">
        <MdFamilyRestroom color="#01606F" size="30" />
        <label className="text-primary font-semibold text-center mt-4">{`Family Dentistry`}</label>
      </div>

      <div className="flex shadow-lg w-[9rem] h-[8rem] flex-col bg-white border-[1.5px] px-2 py-3 rounded-lg items-center justify-center">
        <MdLocalPharmacy color="#01606F" size="30" />
        <label className="text-primary font-semibold text-center mt-4">{`NHS Dentistry`}</label>
      </div>

      <div className="flex shadow-lg w-[9rem] h-[8rem] flex-col bg-white border-[1.5px] px-2 py-3 rounded-lg items-center justify-center">
        <GiToothbrush color="#01606F" size="30" />
        <label className="text-primary font-semibold text-center mt-4">{`Preventative Dentistry`}</label>
      </div>
    </div>
  </div>
);
