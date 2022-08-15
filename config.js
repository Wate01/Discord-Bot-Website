import { BsFacebook, BsYoutube } from "react-icons/bs";
import { CgCrown } from "react-icons/cg";
import { FaDiscord } from "react-icons/fa";
import { MdAddModerator } from "react-icons/md";
import { SiProbot } from "react-icons/si";
import { TbMessage2Code } from "react-icons/tb";
const config = {
  name: "Lunar Bot",
  //BotName
  inviteLink:
    "https://discord.com/oauth2/authorize?client_id=947581576697495643&scope=bot%20applications.commands&permissions=2146958847",
  //BotInvite Link
  Features: [
    {
      name: "Moderacion",
      description:
        "Muchos comandos de moderacion faciles para tu servidor.",
      logo: <MdAddModerator className="h-10 w-10" />,
    },
    {
      name: "99% ",
      description:
        "99% completado",
      logo: <SiProbot className="h-10 w-10" />,
    },
    {
      name: "Developer",
      description:
        "Developer de todos los comandos de el 100% bde los comandos.",
      logo: <TbMessage2Code className="h-10 w-10" />,
    },
    {
      name: "Bot",
      description:
        "El mejor bot para tu servidor",
      logo: <CgCrown className="h-10 w-10" />,
    },
    // You can added more features if need add
  ],
  //Bot Features
  serverCount: 300, //-  - Your
  memberCount: 700, //--   - Bot
  executedCommand: 27000, //--  - Stats
  availableCommand: 400, //---   - Here
  //Do not change if you don't know about them
  faceBookLogo: (
    <BsFacebook className="h-10 w-10 text-[#4267B2] hover:scale-125 easeIn cursor-pointer" />
  ),
  discordLogo: (
    <FaDiscord className="h-10 w-10 text-[#738adb] hover:scale-125 easeIn cursor-pointer" />
  ),
  youTubeLogo: (
    <BsYoutube className="h-10 w-10 text-[#FF0000] hover:scale-125 easeIn cursor-pointer" />
  ),
  //----------------------------------------------------------------
  // Your social handle links
  githubLink: "https://github.com/mohitmimani",
  twitterLink: "https://twitter.com",
  mediumLink: "https://medium.com/",
  facebookLink: "https://facebook.com",
  discordLink: "https://discord.com",
  youtubeLink: "https://www.youtube.com/channel/UCfhRHeex9lU0ZAVJot6Z2ZQ",
};

export default config;
