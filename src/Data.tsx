import profile from "./assets/Icons/profile.svg";
import bookmark from "./assets/Icons/bookmark.svg";
import home from "./assets/Icons/home.svg";
import messages from "./assets/Icons/messages.svg";
import notifications from "./assets/Icons/notifications.svg";
import search from "./assets/Icons/search.svg";
import settings from "./assets/Icons/settings.svg";

const sideBarOptions = [
  { imgSrc: profile, OptionName: "Profile" },
  { imgSrc: bookmark, OptionName: "Bookmarks" },
];
const RightSectionMobileData = [
  { imgSrc: home },
  { imgSrc: search },
  { imgSrc: notifications },
  { imgSrc: messages },
];
const LeftSectionMobileLData = [
  ...RightSectionMobileData,
  { imgSrc: profile },
  { imgSrc: settings },
];

export { sideBarOptions, RightSectionMobileData, LeftSectionMobileLData };
