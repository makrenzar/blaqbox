// import bqblogo1 from "../../assets/blaqbox-logo.png";
import bqblogo2 from "../../assets/main color.png";

function HomePartners() {
  const images = [bqblogo2, bqblogo2, ];

  return (
    <>
      <div className="bg-black">
        {/* <div className="flex items-center justify-center mt-16">
          <p className="title-font text-2xl text-white mt-5">partners</p>
        </div> */}
        <div className="relative flex overflow-hidden mt-16">
          <div className="flex py-16 whitespace-nowrap hover-stop cursor-pointer">
            <div className="animate-marquee">
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Marquee Item ${index + 1}`}
                  className="mx-4 w-60 h-auto"
                />
              ))}

              {images.map((src, index) => (
                <img
                  key={`duplicate-${index}`}
                  src={src}
                  alt={`Marquee Item ${index + 1}`}
                  className="mx-4 w-60 h-auto"
                />
              ))}

              {images.map((src, index) => (
                <img
                  key={`duplicate-${index}`}
                  src={src}
                  alt={`Marquee Item ${index + 1}`}
                  className="mx-4 w-60 h-auto"
                />
              ))}

              {images.map((src, index) => (
                <img
                  key={`duplicate-${index}`}
                  src={src}
                  alt={`Marquee Item ${index + 1}`}
                  className="mx-4 w-60 h-auto"
                />
              ))}

              {images.map((src, index) => (
                <img
                  key={`duplicate-${index}`}
                  src={src}
                  alt={`Marquee Item ${index + 1}`}
                  className="mx-4 w-60 h-auto"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePartners;
