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
      className={`fixed top-0 right-0 z-40 h-screen p-4 transform overflow-auto ease-in-out transition-all duration-300 bg-primary w-80 ${
        showDrawer ? "translate-x-0" : "-translate-x-full"
      }`}
      aria-labelledby="drawer-label"
    >
      <h5 className="inline-flex items-center mb-4 text-base font-semibold text-white">
        Contact Us Form
      </h5>

      <button
        onClick={closeDrawer}
        type="button"
        className="text-white bg-transparent rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center"
      >
        Close
      </button>

      <div className="grid grid-cols-2 gap-4">
        <p>form here</p>
      </div>
    </aside>
  );
};
