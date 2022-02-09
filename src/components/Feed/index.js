import PostHeader from "../PostHeader";
import PostAction from "./PostAction";
import ImagePost from "../ImagePost";
import BoxComent from "../Comments";

export default function Feed() {
  return (
    <div className="bg-white shadow rounded-md dark:bg-gray-900 -mx-2 lg:mx-0">
      {/* post header*/}
      <div className="flex justify-between items-center px-4 py-3">
        <PostHeader />
        {/*PostAction*/}
        <PostAction />
      </div>
      {/*ImagePost*/}
      <ImagePost />
      {/* BoxComment */}
      <BoxComent />
    </div>
  );
}
