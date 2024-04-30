import { IoMdClose } from "react-icons/io";

type Props = {
  closeDrawer: () => void;
  showDrawer: boolean;
};

export const ContactUs = (props: Props) => {
  const { showDrawer, closeDrawer } = props;

  if (!showDrawer) {
    return null;
  }

  return (
    <aside
      className={`fixed top-0 right-0 z-40 h-screen py-[3rem] p-[2rem] transform overflow-auto ease-in-out transition-all duration-300 bg-primary w-80 ${
        showDrawer ? "translate-x-0" : "-translate-x-full"
      }`}
      aria-labelledby="drawer-label"
    >
      <button
        onClick={closeDrawer}
        type="button"
        className="text-white bg-transparent rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center"
      >
        <IoMdClose size={24} />
      </button>

      <div className="flex flex-col gap-[1rem] w-full h-full">
        <div className="flex flex-col w-full gap-1">
          <label className="text-sm">
            Enter Subject <span className="text-red-500">*</span>
          </label>
          <input
            className="flex placeholder:text-white rounded-[4px] placeholder:text-sm p-[1rem] drop-shadow-xl bg-[#4f868f] w-full h-[48px] rounded-[8px] focus:outline-[0.5px] focus:outline-[#96D1CF]"
            type="text"
            placeholder="Start typing here"
          />
        </div>

        <div className="flex flex-col w-full gap-1">
          <label className="text-sm">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            className="flex placeholder:text-white rounded-[4px] placeholder:text-sm p-[1rem] drop-shadow-xl bg-[#4f868f] w-full h-[48px] rounded-[8px] focus:outline-[0.5px] focus:outline-[#96D1CF]"
            type="text"
          />
        </div>

        <div className="flex flex-col w-full gap-1">
          <label className="text-sm">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            className="flex placeholder:text-white rounded-[4px] placeholder:text-sm p-[1rem] drop-shadow-xl bg-[#4f868f] w-full h-[48px] rounded-[8px] focus:outline-[0.5px] focus:outline-[#96D1CF]"
            type="text"
          />
        </div>

        <div className="flex flex-col w-full gap-1">
          <label className="text-sm">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            className="flex placeholder:text-white rounded-[4px] placeholder:text-sm p-[1rem] drop-shadow-xl bg-[#4f868f] w-full h-[48px] rounded-[8px] focus:outline-[0.5px] focus:outline-[#96D1CF]"
            type="text"
          />
        </div>

        <div className="flex flex-col w-full gap-1">
          <label className="text-sm">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            rows={5}
            draggable={false}
            className="flex h-[200px] rounded-[4px] max-h-[200px] placeholder:text-white placeholder:text-sm p-[1rem] drop-shadow-xl bg-[#4f868f] w-full rounded-[8px] focus:outline-[0.5px] focus:outline-[#96D1CF]"
          />
        </div>

        <button
          className="flex hover:bg-gray-100 items-center justify-center self-center w-[80px] h-[38px] rounded-[4px] bg-[white] text-primary"
          onClick={() => alert("submitted!")}
        >
          Submit
        </button>
      </div>
    </aside>
  );
};
