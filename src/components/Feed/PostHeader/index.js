export default function PostHeader() {
  return (
    <div className="flex flex-1 items-center space-x-4">
      <a href="#">
        <div className="bg-gradient-to-tr from-yellow-600 to-pink-600 p-0.5 rounded-full">
          <img
            src="assets/images/avatars/avatar-2.jpg"
            className="bg-gray-200 border border-white rounded-full w-8 h-8"
            alt=""
          />
        </div>
      </a>
      <span className="block capitalize font-semibold dark:text-gray-100">
        Johnson smith{" "}
      </span>
    </div>
  );
}
