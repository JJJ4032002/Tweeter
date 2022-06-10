import search from "../../../assets/Icons/search.svg";
import { SearchBarBlock } from "./SearchBlockCss";
import { TrendingText } from "./RightSectionComponentsCss";

function SearchBar() {
  return (
    <SearchBarBlock>
      <img src={search} alt="" />
      <TrendingText>Search Tweeter</TrendingText>
    </SearchBarBlock>
  );
}

export default SearchBar;
