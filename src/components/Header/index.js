import Logo from "./Logo";
import Search from "./Search";
import RightSide from "./RightSide";

export default function Header() {
  return (
    <header>
      <div className="header_inner">
        <div className="left-side">
          {/* Logo */}
          <Logo />
          <div
            className="triger"
            uk-toggle="target: #wrapper ; cls: sidebar-active"
          >
            <i className="uil-bars" />
          </div>
          {/*Search*/}
          <Search />
        </div>
        {/*RightSide*/}
        <RightSide />
      </div>
    </header>
  );
}
