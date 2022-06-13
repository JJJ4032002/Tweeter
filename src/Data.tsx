import profile from "./assets/Icons/profile.svg";
import bookmark from "./assets/Icons/bookmark.svg";
import home from "./assets/Icons/home.svg";
import messages from "./assets/Icons/messages.svg";
import notifications from "./assets/Icons/notifications.svg";
import search from "./assets/Icons/search.svg";
import settings from "./assets/Icons/settings.svg";
import { v4 as uuidv4 } from "uuid";

const sideBarOptions = [
  { imgSrc: profile, OptionName: "Profile", key: uuidv4() },
  { imgSrc: bookmark, OptionName: "Bookmarks", key: uuidv4() },
];
const RightSectionMobileData = [
  { imgSrc: home, key: uuidv4() },
  { imgSrc: search, key: uuidv4() },
  { imgSrc: notifications, key: uuidv4() },
  { imgSrc: messages, key: uuidv4() },
];
const LeftSectionMobileLData = [
  { imgSrc: home, key: uuidv4() },
  { imgSrc: search, key: uuidv4() },
  { imgSrc: notifications, key: uuidv4() },
  { imgSrc: messages, key: uuidv4() },
  { imgSrc: profile, key: uuidv4() },
  { imgSrc: settings, key: uuidv4() },
];
const LeftSectionMobileMData = [
  { imgSrc: home, key: uuidv4(), text: "Home" },
  { imgSrc: search, key: uuidv4(), text: "Search" },
  { imgSrc: notifications, key: uuidv4(), text: "Notifications" },
  { imgSrc: messages, key: uuidv4(), text: "Messages" },
  { imgSrc: profile, key: uuidv4(), text: "Profile" },
  { imgSrc: settings, key: uuidv4(), text: "Settings" },
];

export {
  sideBarOptions,
  RightSectionMobileData,
  LeftSectionMobileLData,
  LeftSectionMobileMData,
};
