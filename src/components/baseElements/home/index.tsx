import { STRINGS } from "../../../constants/strings";
import header from "../../../assets/home-header.jpeg";
import { RiUserSmileFill } from "react-icons/ri";
import {
  GiAlarmClock,
  GiBookCover,
  GiMedicalDrip,
  GiToothbrush,
} from "react-icons/gi";
import { FaBaby } from "react-icons/fa";
import { MdLocalPharmacy, MdFamilyRestroom } from "react-icons/md";

export const Home = () => (
  <div className="flex flex-col lato">
    <div className="flex flex-col xs:flex-row shadow-inner justify-apart">
      <img
        alt="three teeth in a line with some dentist tools, laid on a blue medical tablecloth"
        src={header}
        className="flex w-full max-h-[20rem] object-cover object-bottom"
      />

      <h1
        className={
          "flex mt-[1rem] drop-shadow-xl uppercase tracking-[1.5rem] xs:mt-0 lg:top-[22%] xs:top-[18%] xs:absolute self-center break-words max-w-[50%] xs:max-w-[30%] mx-[2rem] xs:ml-[4rem] font-bold tracking-wider text-teal-800 text-4xl z-10"
        }
      >
        {STRINGS.companyName}
      </h1>
    </div>

    <div className="flex flex-col lg:flex-row flex-1 mx-[10rem] lg:space-x-[6rem] flex-row py-[4rem] lg:justify-evenly">
      <div className="flex flex-col items-center justify-center flex-1 space-y-4">
        <GiBookCover className="drop-shadow-xl" color="#2dd4bf" size={60} />
        <p className="flex flex-1 text-neutral-900 text-lg text-center tracking-normal">{`Our team of expert dentists and hygienists use the latest tech to provide you with the best care possible.`}</p>
      </div>
      <div className="flex flex-col items-center justify-center flex-1 space-y-4">
        <GiMedicalDrip className="drop-shadow-xl" color="#2dd4bf" size={60} />
        <p className="flex flex-1 pt-[2rem] lg:pt-0 text-neutral-900 text-lg text-center tracking-normal">{`We understand that visiting the dentist can be stressful. We strive to create a welcoming and comfortable environment for our patients.`}</p>
      </div>
      <div className="flex flex-col items-center justify-center flex-1 space-y-4">
        <GiAlarmClock className="drop-shadow-xl" color="#2dd4bf" size={60} />
        <p className="flex flex-1 pt-[2rem] lg:pt-0 text-neutral-900 text-lg text-center tracking-normal">{`Don't wait any longer to take care of your dental health - schedule an appointment with us today.`}</p>
      </div>
    </div>

    <div className="flex flex-1 flex-col items-center space-y-[1rem] md:flex-row md:self-center md:space-x-[3%] md:space-y-0 mx-[2rem] mb-[4rem]">
      <div className="flex shadow-lg w-[9rem] h-[8rem] flex-col bg-white border-[0.5px] px-2 py-3 rounded-lg items-center justify-center">
        <RiUserSmileFill color="#01606F" size={30} />
        <label className="text-primary font-semibold text-center mt-4">{`Cosmetic Dentistry`}</label>
      </div>

      <div className="flex shadow-lg w-[9rem] h-[8rem] flex-col bg-white border-[0.5px] px-2 py-3 rounded-lg items-center justify-center">
        <FaBaby color="#01606F" size="30" />
        <label className="text-primary font-semibold text-center mt-4">{`Children's Dentistry`}</label>
      </div>

      <div className="flex shadow-lg w-[9rem] h-[8rem] flex-col bg-white border-[0.5px] px-2 py-3 rounded-lg items-center justify-center">
        <MdFamilyRestroom color="#01606F" size="30" />
        <label className="text-primary font-semibold text-center mt-4">{`Family Dentistry`}</label>
      </div>

      <div className="flex shadow-lg w-[9rem] h-[8rem] flex-col bg-white border-[0.5px] px-2 py-3 rounded-lg items-center justify-center">
        <MdLocalPharmacy color="#01606F" size="30" />
        <label className="text-primary font-semibold text-center mt-4">{`NHS Dentistry`}</label>
      </div>

      <div className="flex shadow-lg w-[9rem] h-[8rem] flex-col bg-white border-[0.5px] px-2 py-3 rounded-lg items-center justify-center">
        <GiToothbrush color="#01606F" size="30" />
        <label className="text-primary font-semibold text-center mt-4">{`Preventative Dentistry`}</label>
      </div>
    </div>

    <span className="h-[0.5px] pt-10 border-b-[0.5px] border-teal-800 w-full w-[80%] self-center" />

    <div className="flex flex-row my-20 px-40 space-x-10">
      <div className="flex w-[40%] flex-col">
        <p className="flex self-start font-medium uppercase tracking-wider text-teal-800 text-xs">
          Lorem ipsum dolor sit amet
        </p>
        <h1
          className={
            "flex mt-1 drop-shadow-xl capitalize font-bold tracking-wider text-teal-800 text-2xl"
          }
        >
          Choose a Treatment and get started today
        </h1>
      </div>

      <div className="flex flex-col space-y-2">
        <p className="flex self-start font-medium tracking-wider text-neutral-900 text-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="flex self-start font-medium tracking-wider text-neutral-900 text-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="flex self-start font-medium tracking-wider text-neutral-900 text-md">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>

        <p className="flex self-start font-semibold drop-shadow tracking-wider pt-10 text-teal-800 text-md">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </p>
      </div>
    </div>
  </div>
);
