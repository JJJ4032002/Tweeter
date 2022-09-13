import search from "../../../../../assets/Icons/search.svg";
import { TrendingText } from "../LayoutsCss";
import { SearchWrapper } from "./SearchCss";

function Search() {
  return (
    <SearchWrapper>
      <img src={search} alt="" />
      <TrendingText>Search Tweeter</TrendingText>
    </SearchWrapper>
  );
}

export default Search;
