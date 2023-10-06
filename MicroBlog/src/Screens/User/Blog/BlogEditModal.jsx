import PropTypes from "prop-types";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import BlogAdd from "./BlogAdd";
import { BlogEditApi } from "../../../API/BlogListApi";
import GlobalToaster from "../../Components/Toasters/GlobalToaster";

export default function BlogEditModal({
  isOpen,
  closeModal,
  blogById,
  refetch,
}) {
  const [post, setPost] = useState(blogById);
  
  useEffect(() => {
    setPost(blogById);
  }, [blogById]);

  const handleSubmit = async (data) => {
    try {
      await BlogEditApi(data);
      GlobalToaster("Post updated Successfully", 405, ["success"], 3000);
      refetch();
      closeModal();
    } catch (error) {
      GlobalToaster("Something went wrong!", 405, ["error"], 3000);
    }
  };
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Edit Blog
                  </Dialog.Title>
                  <BlogAdd
                    handleSubmit={handleSubmit}
                    setPost={setPost}
                    post={post}
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

BlogEditModal.propTypes = {
  blogById: PropTypes.any,
  closeModal: PropTypes.any,
  handleSubmit: PropTypes.any,
  isOpen: PropTypes.any,
  openModal: PropTypes.any,
  refetch: PropTypes.func,
  setPost: PropTypes.any,
};
