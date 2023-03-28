import { STRINGS } from "../../../constants/strings";
import { BsLinkedin, BsFacebook, BsInstagram } from "react-icons/bs";

export const Footer = () => {
  return (
    <div className="flex flex-col flex-1 w-full bg-secondary justify-center items-center py-[2rem]">
      <p className="font-medium text-[20px] break-words italic mx-[4rem] mb-[2rem]">
        {STRINGS.footerSlogan}
      </p>

      <div className="flex flex-row w-full xs:w-3/4 lg:w-1/2 justify-evenly items-center">
        <div className="flex flex-col">
          <label className="text-[18px] font-semibold">{`Address`}</label>
          <p className="text-[18px]">{STRINGS.companyAddress.streetNumber}</p>
          <p className="text-[18px]">{STRINGS.companyAddress.street}</p>
          <p className="text-[18px]">{STRINGS.companyAddress.town}</p>
          <p className="text-[18px]">{STRINGS.companyAddress.country}</p>
        </div>

        <div className="flex flex-col">
          <label className="flex text-[18px] font-semibold mb-1">{`Follow us`}</label>
          <div className="flex flex-row space-x-1">
            <BsLinkedin color="white" size={24} />
            <BsFacebook color="white" size={24} />
            <BsInstagram color="white" size={26} />
          </div>
        </div>
      </div>

      <p className="mt-[2rem] mr-[2rem] font-semibold text-[14px] self-end">
        {`Want a website like this?`}
        <span className="text-white text-[18px]">{`⬇`}</span>
      </p>
      <a
        href={`https://abbeys--portfolio.web.app/`}
        className="mt-1 mr-[2rem] bg-white py-1 italic px-2 shadow-lg rounded-md text-secondary font-semibold text-[14px] self-end border-primary"
      >{`Yes please!`}</a>
      <span className="mt-1 border-t-[2px] border-secondary w-[4rem] h-1 rounded-lg bg-primary self-end mr-[3rem]" />
      <p className="mt-1 mr-[2rem] font-semibold text-[14px] self-end">{`Author: A.R. (2023)`}</p>
    </div>
  );
};
