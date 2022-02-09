import { Route, Outlet, Link } from "react-router-dom";

export default function Logo() {
  return (
    <div id="logo" className=" uk-hidden@s">
      <a href="home.html">
        <img src="assets/images/logo-mobile.png" alt="" />
        <img
          src="assets/images/logo-mobile-light.png"
          className="logo_inverse"
          alt=""
        />
      </a>
    </div>
  );
}
