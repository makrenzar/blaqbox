function HomeAbout() {

  const Tabs = [
    { name: "#projects" },
    { name: "#experience" },
    { name: "#reach me out" },
  ];
  return (
    <>
      <div className="main-h-screen  overflow-hidden">
        <div className="w-96 mx-auto mt-28">
          <div className="text-center flex justify-between mt-24">
            <p className="p-font text-[#333333] font-light">Photography</p>
            <p className="p-font text-[#333333] font-light">|</p>
            <p className="p-font text-[#333333] font-light">
              Creative Development
            </p>
            <p className="p-font text-[#333333] font-light">|</p>
            <p className="p-font text-[#333333] font-light">Videography</p>
          </div>
        </div>
        <div className="max-w-2xl mx-auto mt-4">
          <div className="text-center">
            <p className="title-font text-[50px] text-[#333333] ">
              About YCC Studios
            </p>
          </div>

          <div className="text-center">
            <p className="p-font font-light leading-loose text-[#333333]">
              {" "}
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click to add your own
              content and make changes to the font.
            </p>
          </div>

          <div className="text-center">
            <a href="" className="p-font font-normal leading-loose text-[#333333] transform transition-transform duration-300 ease-in-out hover:scale-105 flex items-center justify-center w-[8rem] mx-auto" >
              More Info ...
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeAbout;
