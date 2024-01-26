/* eslint-disable react/prop-types */
// import { useDispatch } from "react-redux";
// import { setPostCondition } from "../../../reducers/postSlice";
// import Logout from "./Logout";

export default function Header() {
  // const dispatch = useDispatch();

  // const posting = () => {
  //   dispatch(setPostCondition(true));
  // };


  return (
    <header className="bg-gray-50 dark:dark:bg-gray-800 dark:dark:text-gray-100 h-[15vh] max-sm:h-[9vh]">
      <div className="mx-auto max-sm:px-0 max-sm:py-0 max-w-[90vw] max-sm:pt-5 px-6 py-8 sm:px-6 lg:px-8">
        <div className="flex items-center sm:justify-between sm:gap-4">
          <div className="relative  sm:text-5xl max-sm:pl-0 max-sm:pt-0  font-sans font-extrabold text-2xl">
            Accomodation plus
          </div>
          <div className="flex flex-1 items-center justify-end gap-4 sm:gap-7 ">
            {/* <Logout /> */}
            {/* <button
              onClick={posting}
              className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
              type="button"
            >
              Create Post
            </button> */}
          </div>
        </div>
        <hr className="mt-5"/><hr />
      </div>
     
    </header>
  );
}
