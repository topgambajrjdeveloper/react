export default function Messages() {
  retutn(
    <div>
      <a href="#" className="header-links-item">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
          />
        </svg>
      </a>
      <div uk-drop="mode: click;offset: 4" className="header_dropdown">
        <h4 className="-mt-5 -mx-5 bg-gradient-to-t from-gray-100 to-gray-50 border-b font-bold px-6 py-3">
          Messages{" "}
        </h4>
        <ul className="dropdown_scrollbar" data-simplebar>
          <li>
            <a href="#">
              <div className="drop_avatar">
                {" "}
                <img src="assets/images/avatars/avatar-1.jpg" alt="" />
              </div>
              <div className="drop_content">
                <strong> John menathon </strong> <time> 6:43 PM</time>
                <p> Lorem ipsum dolor sit amet, consectetur </p>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="drop_avatar">
                {" "}
                <img src="assets/images/avatars/avatar-2.jpg" alt="" />
              </div>
              <div className="drop_content">
                <strong> Zara Ali </strong> <time>12:43 PM</time>
                <p> Sediam nonummy nibh euismod tincidunt laoreet dolore</p>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="drop_avatar">
                {" "}
                <img src="assets/images/avatars/avatar-3.jpg" alt="" />
              </div>
              <div className="drop_content">
                <strong> Mohamed Ali </strong> <time> Wed </time>
                <p> Lorem ipsum dolor sit amet, consectetur </p>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="drop_avatar">
                {" "}
                <img src="assets/images/avatars/avatar-1.jpg" alt="" />
              </div>
              <div className="drop_content">
                <strong> John menathon </strong> <time> Sun</time>
                <p>
                  {" "}
                  Namliber tempor cumsoluta nobis eleifend option adipiscing{" "}
                </p>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="drop_avatar">
                {" "}
                <img src="assets/images/avatars/avatar-2.jpg" alt="" />
              </div>
              <div className="drop_content">
                <strong> Zara Ali </strong> <time> Fri</time>
                <p> Lorem ipsum dolor sit amet, consectetur </p>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="drop_avatar">
                {" "}
                <img src="assets/images/avatars/avatar-3.jpg" alt="" />
              </div>
              <div className="drop_content">
                <strong> Mohamed Ali </strong> <time>1 Week ago</time>
                <p> Sediam nonummy nibh euismod tincidunt laoreet dolore</p>
              </div>
            </a>
          </li>
        </ul>
        <a href="#" className="see-all">
          See all
        </a>
      </div>
    </div>
  );
}
