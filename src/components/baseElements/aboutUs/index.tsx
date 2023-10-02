import header from "../../../assets/about-us-header.jpg";
import employee1 from "../../../assets/employee1.jpg";
import employee2 from "../../../assets/employee2.jpg";
import employee3 from "../../../assets/employee3.jpg";

export const AboutUs = () => (
  <div className="flex flex-col lato">
    <img
      alt="dentist dressed with specialist glasses and tools, getting ready to attend to a patient"
      src={header}
      className="flex w-full max-h-[20rem] object-cover object-top"
    />

    <div className="flex flex-col px-40 py-20 space-y-10">
      <div className="flex flex-col">
        <p className="flex capitalize self-start font-medium tracking-wider text-teal-800 text-sm">
          Family-run dentist clinic in South Wales
        </p>
        <h1 className="flex self-start font-medium tracking-wider text-teal-800 text-6xl">
          Your smile makes a lasting impression
        </h1>
      </div>

      <div className="flex flex-col space-y-2">
        <p className="flex self-start font-medium tracking-wider text-teal-800 text-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p className="flex self-start font-medium tracking-wider text-teal-800 text-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="flex self-start font-medium tracking-wider text-teal-800 text-md">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>

        <p className="flex self-start font-medium tracking-wider pt-5 text-teal-800 text-md">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </p>
      </div>

      <span className="h-[0.5px] pt-10 border-b-[0.5px] border-teal-800 w-full w-[80%] self-center" />

      <div className="flex flex-col pt-10 w-full space-y-10">
        <h1 className="flex self-start font-medium tracking-wider text-teal-800 text-6xl">
          Meet the team
        </h1>
        <div className="flex flex-row w-full justify-evenly space-x-5">
          <div className="flex flex-col justify-center text-center space-y-4">
            <img
              alt="clinic owner"
              src={employee1}
              className="flex w-[200px] drop-shadow h-[200px] object-cover object-middle rounded-full"
            />
            <div className="flex flex-col space-y-2 justify-center items-center text-center">
              <label className="text-slate-700 uppercase font-medium tracking-wider">
                Naya Jackson
              </label>
              <label className="text-teal-800 uppercase font-bold tracking-wider text-xs">
                Clinic owner
              </label>
            </div>
          </div>

          <div className="flex flex-col justify-center text-center space-y-4">
            <img
              alt="apprentice"
              src={employee2}
              className="flex w-[200px] drop-shadow h-[200px] object-cover object-middle rounded-full"
            />
            <div className="flex flex-col space-y-2 justify-center text-center">
              <label className="text-slate-700 uppercase font-medium tracking-wider">
                Mabel Doute
              </label>
              <label className="text-teal-800 uppercase font-bold tracking-wider text-xs">
                Dentistry Appentice
              </label>
            </div>
          </div>

          <div className="flex flex-col justify-center text-center space-y-4">
            <img
              alt="dentist"
              src={employee3}
              className="flex w-[200px] drop-shadow h-[200px] object-cover object-middle rounded-full"
            />
            <div className="flex flex-col space-y-2 justify-center text-center">
              <label className="text-slate-700 uppercase font-medium tracking-wider">
                Vic Dunst
              </label>
              <label className="text-teal-800 uppercase font-bold tracking-wider text-xs">
                Dentist
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
