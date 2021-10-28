import { Header, SearchBox } from "..";

function HeaderContainer(props) {
  return (
    <div className="header_container">
      <Header />
      {props.showSearch === true ? (
        <>
          <SearchBox
            searchValue={props.searchQuery}
            onTextChange={props.onTextChange}
            onTypeChange={props.onTypeChange}
          />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default HeaderContainer;
