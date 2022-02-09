import {} from "";
export default function BoxComent() {
  return (
    <div className="border-t pt-4 space-y-4 dark:border-gray-600">
      <div className="flex">
        <div className="w-10 h-10 rounded-full relative flex-shrink-0">
          <img
            src="assets/images/avatars/avatar-1.jpg"
            alt=""
            className="absolute h-full rounded-full w-full"
          />
        </div>
        <div className="text-gray-700 py-2 px-3 rounded-md bg-gray-100 h-full relative lg:ml-5 ml-2 lg:mr-20  dark:bg-gray-800 dark:text-gray-100">
          <p className="leading-6">
            In ut odio libero vulputate <urna className="i uil-heart" />{" "}
            <i className="uil-grin-tongue-wink"> </i>{" "}
          </p>
          <div className="absolute w-3 h-3 top-3 -left-1 bg-gray-100 transform rotate-45 dark:bg-gray-800" />
        </div>
      </div>
      <div className="flex">
        <div className="w-10 h-10 rounded-full relative flex-shrink-0">
          <img
            src="assets/images/avatars/avatar-1.jpg"
            alt=""
            className="absolute h-full rounded-full w-full"
          />
        </div>
        <div className="text-gray-700 py-2 px-3 rounded-md bg-gray-100 h-full relative lg:ml-5 ml-2 lg:mr-20  dark:bg-gray-800 dark:text-gray-100">
          <p className="leading-6">
            Nam liber tempor cum soluta nobis eleifend option{" "}
            <i className="uil-grin-tongue-wink-alt" />
          </p>
          <div className="absolute w-3 h-3 top-3 -left-1 bg-gray-100 transform rotate-45 dark:bg-gray-800" />
        </div>
      </div>
    </div>
  );
}
