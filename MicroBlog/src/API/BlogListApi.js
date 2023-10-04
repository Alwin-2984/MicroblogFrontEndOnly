import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchBlogListApi = async () => {
  const res = await axios.get("http://localhost:3000/blogs");

  return res.data;
};

const UserApi = async () => {
  const res = await axios.get("http://localhost:3000/users");

  return res.data;
};

const useBlogListApi = () => {
  return useQuery(["blogList"], fetchBlogListApi);
};

const useUser = () => {
  return useQuery(["User"], UserApi);
};

export { fetchBlogListApi, useBlogListApi, useUser };
