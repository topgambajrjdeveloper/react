import UploadPost from "./UploadPost";
import Messages from "./Messages";
import Notification from "./Notification";
import Profile from "./Profile";

export default function RightSide() {
  return (
    <>
      <div className="right-side lg:pr-4">
        {/* upload */}
        <UploadPost />
        {/* Notification */}
        <Notification />
        {/* Messages */}
        <Messages />
        {/* profile */}
        <Profile />
      </div>
    </>
  );
}
