import { STRINGS } from "../../../constants/strings";
import header from "../../../assets/home-header.jpeg";

export const Home = () => (
  <div className="flex flex-col">
    <div className="flex flex-col xs:flex-row justify-apart">
      <img
        alt="three teeth in a line with some dentist tools, laid on a blue medical tablecloth"
        src={header}
        className="flex w-full max-h-[20rem] object-cover object-bottom"
      />

      <h1 className="flex mt-[1rem] xs:mt-0 xs:top-[24%] xs:absolute self-center break-words max-w-[50%] xs:max-w-[30%] mx-[2rem] xs:ml-[4rem] font-semibold tracking-wider text-teal-800 text-5xl z-10">
        {STRINGS.companyName}
      </h1>
    </div>
  </div>
);
