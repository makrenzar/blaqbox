import "boxicons";
import icon from "../../assets/favicon.png";
import prd1 from "../../assets/prd1.jpg";
import prd2 from "../../assets/prd2.jpg";
import prd3 from "../../assets/prd3.jpg";

function HomeSocmed() {
  const Items = [
    {
      id: 1,
      image: prd1,
      alt: "Post 1",
      text: (
        <>
          <p>
            ✨ Introducing the 𝐂𝐇𝐈𝐂𝐊𝐒 x 𝐆𝐄𝐓 𝐒𝐏𝐎𝐓𝐓𝐄𝐃 collection! 🌿 Handcrafted
            by talented 𝐍𝐞𝐠𝐫𝐨𝐬 𝐖𝐞𝐚𝐯𝐞𝐫𝐬 from 𝐊𝐚𝐛𝐚𝐧𝐤𝐚𝐥𝐚𝐧, each piece beautifully
            reflects local heritage and sustainable fashion. 🌍👗
          </p>
          <br />
          <p>
            Shop now at{" "}
            <a
              href="https://www.getspottedshop.com"
              className="text-blue-400 underline"
            >
              www.getspottedshop.com
            </a>{" "}
            or visit the Get Spotted store at Ayala Malls Capitol Central! 🛍️
          </p>
          <br />
          <p>
            #CHICKSxGetSpotted #SupportLocal #SustainableStyle #NegrosWeavers
            #KabankalanArtistry
          </p>
        </>
      ),
    },
    {
      id: 2,
      image: prd2,
      alt: "Post 2",
      text: (
        <>
          <p>𝐆𝐈𝐕𝐄𝐀𝐖𝐀𝐘 𝐀𝐋𝐄𝐑𝐓!! 𝐁𝐄𝐋𝐀 𝐁𝐞𝐚𝐮𝐭𝐲 𝐏𝐫𝐨𝐝𝐮𝐜𝐭𝐬💄</p>
          <br />
          <p>
            𝐘𝐂𝐂 𝐒𝐭𝐮𝐝𝐢𝐨𝐬 is giving 𝐘𝐎𝐔 a chance to win 𝐁𝐄𝐋𝐀 𝐛𝐲 𝐁𝐞𝐥𝐚 𝐏𝐚𝐝𝐢𝐥𝐥𝐚
            Beauty Set featuring: or visit the Get Spotted store at Ayala Malls
            Capitol Central! 🛍️
          </p>
          <br />
          <p>😊 𝐃𝐨𝐭 𝐏𝐞𝐫𝐟𝐞𝐜𝐭𝐢𝐨𝐧 𝐂𝐡𝐞𝐞𝐤 𝐓𝐢𝐧𝐭 💋 𝐂𝐨𝐥𝐨𝐫 𝐂𝐡𝐚𝐧𝐠𝐢𝐧𝐠 𝐋𝐢𝐩 𝐁𝐚𝐥𝐦</p>
          <br />
          <p>
            Enhance your natural glow with these must-have beauty essentials!
          </p>
          <br />
          <p>𝐇𝐨𝐰 𝐭𝐨 𝐉𝐨𝐢𝐧:📢</p>
        </>
      ),
    },
    {
      id: 3,
      image: prd3,
      alt: "Post 3",
      text: (
        <>
          <p className="leading-7">
            Unforgettable night at Stonehill Suites with Bacolod’s trendsetters!
            💖✨ Got an exclusive look at the BELA Makeup Collection by Bela
            Padilla, featuring her faves—the BELA Dot Perfection Cheek Tint and
            Color Changing Lip Balm. Effortless beauty made for all, even
            sensitive skin! 💄 Find BELA at Lopue’s, SM City Bacolod, and Ayala
            Capitol Central, or shop online via Shopee and TikTok! 🌟
            #BELAMakeup #EffortlessBeauty #BELAbyBelaPadilla
          </p>
        </>
      ),
    },

    {
        id: 1,
        image: prd1,
        alt: "Post 1",
        text: (
          <>
            <p>
              ✨ Introducing the 𝐂𝐇𝐈𝐂𝐊𝐒 x 𝐆𝐄𝐓 𝐒𝐏𝐎𝐓𝐓𝐄𝐃 collection! 🌿 Handcrafted
              by talented 𝐍𝐞𝐠𝐫𝐨𝐬 𝐖𝐞𝐚𝐯𝐞𝐫𝐬 from 𝐊𝐚𝐛𝐚𝐧𝐤𝐚𝐥𝐚𝐧, each piece beautifully
              reflects local heritage and sustainable fashion. 🌍👗
            </p>
            <br />
            <p>
              Shop now at{" "}
              <a
                href="https://www.getspottedshop.com"
                className="text-blue-400 underline"
              >
                www.getspottedshop.com
              </a>{" "}
              or visit the Get Spotted store at Ayala Malls Capitol Central! 🛍️
            </p>
            <br />
            <p>
              #CHICKSxGetSpotted #SupportLocal #SustainableStyle #NegrosWeavers
              #KabankalanArtistry
            </p>
          </>
        ),
      },
      {
        id: 2,
        image: prd2,
        alt: "Post 2",
        text: (
          <>
            <p>𝐆𝐈𝐕𝐄𝐀𝐖𝐀𝐘 𝐀𝐋𝐄𝐑𝐓!! 𝐁𝐄𝐋𝐀 𝐁𝐞𝐚𝐮𝐭𝐲 𝐏𝐫𝐨𝐝𝐮𝐜𝐭𝐬💄</p>
            <br />
            <p>
              𝐘𝐂𝐂 𝐒𝐭𝐮𝐝𝐢𝐨𝐬 is giving 𝐘𝐎𝐔 a chance to win 𝐁𝐄𝐋𝐀 𝐛𝐲 𝐁𝐞𝐥𝐚 𝐏𝐚𝐝𝐢𝐥𝐥𝐚
              Beauty Set featuring: or visit the Get Spotted store at Ayala Malls
              Capitol Central! 🛍️
            </p>
            <br />
            <p>😊 𝐃𝐨𝐭 𝐏𝐞𝐫𝐟𝐞𝐜𝐭𝐢𝐨𝐧 𝐂𝐡𝐞𝐞𝐤 𝐓𝐢𝐧𝐭 💋 𝐂𝐨𝐥𝐨𝐫 𝐂𝐡𝐚𝐧𝐠𝐢𝐧𝐠 𝐋𝐢𝐩 𝐁𝐚𝐥𝐦</p>
            <br />
            <p>
              Enhance your natural glow with these must-have beauty essentials!
            </p>
            <br />
            <p>𝐇𝐨𝐰 𝐭𝐨 𝐉𝐨𝐢𝐧:📢</p>
          </>
        ),
      },
      {
        id: 3,
        image: prd3,
        alt: "Post 3",
        text: (
          <>
            <p className="leading-7">
              Unforgettable night at Stonehill Suites with Bacolod’s trendsetters!
              💖✨ Got an exclusive look at the BELA Makeup Collection by Bela
              Padilla, featuring her faves—the BELA Dot Perfection Cheek Tint and
              Color Changing Lip Balm. Effortless beauty made for all, even
              sensitive skin! 💄 Find BELA at Lopue’s, SM City Bacolod, and Ayala
              Capitol Central, or shop online via Shopee and TikTok! 🌟
              #BELAMakeup #EffortlessBeauty #BELAbyBelaPadilla
            </p>
          </>
        ),
      },

      {
        id: 1,
        image: prd1,
        alt: "Post 1",
        text: (
          <>
            <p>
              ✨ Introducing the 𝐂𝐇𝐈𝐂𝐊𝐒 x 𝐆𝐄𝐓 𝐒𝐏𝐎𝐓𝐓𝐄𝐃 collection! 🌿 Handcrafted
              by talented 𝐍𝐞𝐠𝐫𝐨𝐬 𝐖𝐞𝐚𝐯𝐞𝐫𝐬 from 𝐊𝐚𝐛𝐚𝐧𝐤𝐚𝐥𝐚𝐧, each piece beautifully
              reflects local heritage and sustainable fashion. 🌍👗
            </p>
            <br />
            <p>
              Shop now at{" "}
              <a
                href="https://www.getspottedshop.com"
                className="text-blue-400 underline"
              >
                www.getspottedshop.com
              </a>{" "}
              or visit the Get Spotted store at Ayala Malls Capitol Central! 🛍️
            </p>
            <br />
            <p>
              #CHICKSxGetSpotted #SupportLocal #SustainableStyle #NegrosWeavers
              #KabankalanArtistry
            </p>
          </>
        ),
      },
      {
        id: 2,
        image: prd2,
        alt: "Post 2",
        text: (
          <>
            <p>𝐆𝐈𝐕𝐄𝐀𝐖𝐀𝐘 𝐀𝐋𝐄𝐑𝐓!! 𝐁𝐄𝐋𝐀 𝐁𝐞𝐚𝐮𝐭𝐲 𝐏𝐫𝐨𝐝𝐮𝐜𝐭𝐬💄</p>
            <br />
            <p>
              𝐘𝐂𝐂 𝐒𝐭𝐮𝐝𝐢𝐨𝐬 is giving 𝐘𝐎𝐔 a chance to win 𝐁𝐄𝐋𝐀 𝐛𝐲 𝐁𝐞𝐥𝐚 𝐏𝐚𝐝𝐢𝐥𝐥𝐚
              Beauty Set featuring: or visit the Get Spotted store at Ayala Malls
              Capitol Central! 🛍️
            </p>
            <br />
            <p>😊 𝐃𝐨𝐭 𝐏𝐞𝐫𝐟𝐞𝐜𝐭𝐢𝐨𝐧 𝐂𝐡𝐞𝐞𝐤 𝐓𝐢𝐧𝐭 💋 𝐂𝐨𝐥𝐨𝐫 𝐂𝐡𝐚𝐧𝐠𝐢𝐧𝐠 𝐋𝐢𝐩 𝐁𝐚𝐥𝐦</p>
            <br />
            <p>
              Enhance your natural glow with these must-have beauty essentials!
            </p>
            <br />
            <p>𝐇𝐨𝐰 𝐭𝐨 𝐉𝐨𝐢𝐧:📢</p>
          </>
        ),
      },
      {
        id: 3,
        image: prd3,
        alt: "Post 3",
        text: (
          <>
            <p className="leading-7">
              Unforgettable night at Stonehill Suites with Bacolod’s trendsetters!
              💖✨ Got an exclusive look at the BELA Makeup Collection by Bela
              Padilla, featuring her faves—the BELA Dot Perfection Cheek Tint and
              Color Changing Lip Balm. Effortless beauty made for all, even
              sensitive skin! 💄 Find BELA at Lopue’s, SM City Bacolod, and Ayala
              Capitol Central, or shop online via Shopee and TikTok! 🌟
              #BELAMakeup #EffortlessBeauty #BELAbyBelaPadilla
            </p>
          </>
        ),
      },

  ];
  return (
    <>
      {/* <div className="flex items-center space-x-8 max-w-7xl mx-auto">
        <div className="w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center">
      
          <span className="text-2xl">YCC</span>
        </div>
        <div>
          <h1 className="text-2xl font-bold">yccstudios24</h1>
          <p className="text-gray-400">8 posts · 13 followers · 2 following</p>
          <p className="mt-2">
            YCC Studios is the digital channel and multimedia arm of MediaBox,
            forming part of the Almana Group of Companies. YCC Studios is
            dedicated to creating entertaining digital content across various
            genres, catering to the diverse interests of its viewers.
          </p>
        </div>
      </div> */}
      <div className="bg-black mt-16">
        <div className=" justify-center items-center max-w-7xl mx-auto">
          <div className="flex flex-col items-start space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6 p-4 pt-32">
            <a href="/">
              <img src={icon} alt="logo" className="h-32" />
            </a>
            <div>
              <p
                className="font-display mb-2 text-2xl font-semibold text-white p-font"
                itemProp="author"
              >
                <a href="#" rel="author">
                  yccstudios24
                </a>
              </p>
              <div className="mb-4  text-gray-400">
                <p className="p-font text-lg">
                  8 posts 13 followers 2 following
                </p>
              </div>

              <div className="mb-4  text-gray-400">
                <p className="p-font max-w-md">
                  @yccstudios24 <br></br> YCC Studios is the digital channel and
                  multimedia arm of MediaBox, forming part of the Almana Group
                  of Companies. YCC Studios is dedicated to creating
                  entertaining digital content across various genres, catering
                  to the diverse interests of its viewers.
                </p>
              </div>
            </div>
            <div className="pl-96"></div>
            <div>
              <button className=" border border-white hover:bg-transparent hover:border-white px-6 py-1 rounded-lg text-center transition duration-300 ease-in-out">
                <span className="text-[#ffffff] transform transition-transform duration-300 ease-in-out hover:scale-90 flex items-center justify-center">
                  <box-icon
                    type="logo"
                    name="instagram"
                    color="#FFFFFF"
                  ></box-icon>{" "}
                  Follow
                </span>
              </button>
            </div>
          </div>
          <div className="h-[1px] max-w-7xl mx-auto flex items-center justify-center bg-gray-600"></div>
          <div className="flex flex-col md:grid md:grid-cols-3">
            {Items.map((item, index) => (
              <div key={index} className="relative overflow-hidden mt-16">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-96 h-96 max-w-7xl mx-auto"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 text-white opacity-0 transition-opacity duration-300 hover:opacity-100 w-96  p-4 whitespace-pre-wrap mx-auto cursor-pointer">
                  <p className="text-center p-font ">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default HomeSocmed;
