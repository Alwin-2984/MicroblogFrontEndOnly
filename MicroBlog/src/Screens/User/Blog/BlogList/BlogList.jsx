import Blog from "../Blog";
import {
  BlogAddApi,
  BlogDeleteApi,
  fetchBlogApiById,
  useBlogListApi,
} from "../../../../API/BlogListApi";
import GlobalToaster from "../../../Components/Toasters/GlobalToaster";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BlogAdd from "../BlogAdd";
import BlogEditModal from "../BlogEditModal";

const BlogList = () => {
  const [post, setPost] = useState({
    title: "",
    content: "",
    date: "",
    imageUrl: "",
  });

  const [blogById, setBlogById] = useState(undefined);

  let [isOpen, setIsOpen] = useState(false);

  const isPosting = useSelector((state) => state.search.searchData);

  const { isLoading, error, data, refetch } = useBlogListApi();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  useEffect(() => {
    error && GlobalToaster("Something went wrong", 405, ["error"], 3000);
  }, [error]);

  const handleSubmit = async (data) => {
    const date = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);
    const formdata = { ...data, date: formattedDate };
    try {
      // Send a DELETE request to your API endpoint with the ID of the item to delete
      await BlogAddApi(formdata);
      GlobalToaster("Posted Successfully", 405, ["success"], 3000);
      // Refetch the data to update the UI
      setPost({
        title: "",
        content: "",
        date: "",
        imageUrl: "",
      });
      refetch();
    } catch (error) {
      GlobalToaster("Somethins went wrong!", 405, ["error"], 3000);
    }
  };

  const handleDelete = async (id) => {
    try {
      await BlogDeleteApi(id);
      GlobalToaster("Deleted Successfully", 405, ["success"], 3000);
      refetch();
    } catch (error) {
      GlobalToaster("Somethins went wrong!", 405, ["error"], 3000);

    }
  };

  const handleEdit = async (id) => {
    const blogById = await fetchBlogApiById(id); // Use a function to fetch data with an ID
    setBlogById(blogById);
    openModal();
    console.log(id);
  };

  return (
    <>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <div className="relative h-[85vh]">
          <div
            id="topOfPage"
            className="dark:dark:bg-gray-800 w-screen h-full overflow-y-scroll "
          >
            <div className="dark:dark:bg-gray-800 h-full">
              <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12 h-full">
                {isPosting && (
                  <BlogAdd
                    handleSubmit={handleSubmit}
                    setPost={setPost}
                    post={post}
                  />
                )}
                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {data?.map((post, index) => (
                    <div className="p-2 rounded-md bg-slate-50" key={index}>
                      <Blog
                        data={post}
                        handleDelete={handleDelete}
                        handleEdit={handleEdit}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <BlogEditModal
        isOpen={isOpen}
        closeModal={closeModal}
        blogById={blogById}
        refetch={refetch}
      />
    </>
  );
};

export default BlogList;
