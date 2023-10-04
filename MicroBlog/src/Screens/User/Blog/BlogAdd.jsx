import PropTypes from "prop-types";
import { useState } from "react";

const BlogAdd = ({ handleSubmit, setPost, post }) => {
  const handleChange = (event) => {
    setPost({
      ...post,
      [event.target.name]: event.target.value,
    });
  };
  const [imagePreview, setimagePreview] = useState();

  const imageHandle = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setPost({
        ...post,
        imageUrl: reader.result, // Store the Base64 data URL of the selected image
      });
    };
    reader.onload = () => {
      setimagePreview(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file); // Read the selected image as a data URL
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSubmit(post);
    setimagePreview();
  };

  return (
    <div className="relative">
      <div id="topOfPage" className="w-full  overflow-y-scroll">
        <div>
          <form className="flex gap-3 flex-col">
            <input
              type="text"
              name="title"
              value={post?.title}
              onChange={handleChange}
              className="focus:outline-none block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
              placeholder="Write a title..."
              required
            />
            <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
              <div className="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
                <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x dark:divide-gray-600">
                  <div className="flex items-center space-x-1 sm:pr-4">
                    <input
                      type="file"
                      onChange={imageHandle}
                      id="file-upload"
                      className="hidden"
                    />

                    <label
                      htmlFor="file-upload"
                      className="cursor-pointer py-2 px-4 rounded-md"
                    >
                      <svg
                        className="w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 20"
                      >
                        <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                      </svg>
                    </label>
                    <button
                      type="button"
                      className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                    >
                      <svg
                        className="w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM13.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm3.5 9.5A5.5 5.5 0 0 1 4.6 11h10.81A5.5 5.5 0 0 1 10 15.5Z" />
                      </svg>
                      <span className="sr-only">Add emoji</span>
                    </button>
                  </div>
                  <div className="flex flex-wrap items-center space-x-1 sm:pl-4">
                    <button
                      type="button"
                      className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                    >
                      <svg
                        className="w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 21 18"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9.5 3h9.563M9.5 9h9.563M9.5 15h9.563M1.5 13a2 2 0 1 1 3.321 1.5L1.5 17h5m-5-15 2-1v6m-2 0h4"
                        />
                      </svg>
                      <span className="sr-only">Add list</span>
                    </button>
                  </div>
                </div>

                <div
                  id="tooltip-fullscreen"
                  role="tooltip"
                  className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                >
                  Show full screen
                  <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>
              <div className="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
                <label htmlFor="editor" className="sr-only">
                  Publish post
                </label>

                <textarea
                  value={post?.content}
                  name="content"
                  onChange={handleChange}
                  id="editor"
                  aria-multiline
                  rows="8"
                  className=" focus:outline-none block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                  placeholder="Write an article..."
                  required
                />
              </div>
            </div>
            {imagePreview && (
              <div className="w-full flex justify-center">
                <img
                  className="object-cover  rounded h-44 dark:dark:bg-gray-500"
                  src={imagePreview}
                />
              </div>
            )}

            <button
              onClick={handleFormSubmit}
              type="submit"
              className="w-32 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
            >
              Publish post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

BlogAdd.propTypes = {
  handleDescription: PropTypes.any,
  handleSubmit: PropTypes.func,
  handleTitle: PropTypes.any,
  post: PropTypes.any,
  setPost: PropTypes.func,
};

export default BlogAdd;
