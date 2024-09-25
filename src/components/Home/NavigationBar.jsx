import icon from "../../assets/blaqbox-logo.png";

function NavigationBar() {
  const Tabs = [
    { id: "home", name: "HOME" },
    { id: "about", name: "ABOUT US" },
    { id: "services", name: "SERVICES" },
    { id: "gallery", name: "GALLERY" },
    { id: "blogs", name: "BLOGS" },
    { id: "contact", name: "CONTACT" },
  ];
  return (
    <>
      <div className="main-h-screen  overflow-hidden">
        <div className="bg-transparent p-4">
          <nav className="sticky container  flex items-center justify-between max-w-screen-2xl mx-auto">
            <a href="/">
              <img src={icon} alt="logo" className="h-6" />
            </a>

            <div className="flex justify-center items-center gap-10 ">
              {Tabs.map((tab) => (
                <a
                  key={tab.id}
                  href={`#${tab.id}`}
                  className="text-sm text-[#ffffff] hover:text-[#C1272D] ease-in-out duration-500"
                >
                  {tab.name}
                </a>
              ))}
            </div>

            <div>
              <button className="bg-[#C1272D] border border-transparent hover:bg-transparent hover:border-white px-3 py-1 rounded-lg text-center transition duration-300 ease-in-out">
                <span className="text-[#ffffff] transform transition-transform duration-300 ease-in-out hover:scale-90 flex items-center justify-center">
                  avail now
                </span>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default NavigationBar;
