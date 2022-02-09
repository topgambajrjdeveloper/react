export default function Profile() {
  return (
    <div>
      <a href="#">
        <img
          src="assets/images/avatars/avatar-2.jpg"
          className="header-avatar"
          alt=""
        />
      </a>
      <div
        uk-drop="mode: click;offset:9"
        className="header_dropdown profile_dropdown border-t"
      >
        <ul>
          <li>
            <a href="#"> Account setting </a>{" "}
          </li>
          <li>
            <a href="#"> Payments </a>{" "}
          </li>
          <li>
            <a href="#"> Help </a>{" "}
          </li>
          <li>
            <a href="form-login.html"> Log Out</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
