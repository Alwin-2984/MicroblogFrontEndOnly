import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchBlogListApi = async () => {
  const res = await axios.get("http://localhost:3000/blogs");

  return res.data;
};

const fetchBlogApiById = async (id) => {
  const res = await axios.get(`http://localhost:3000/blogs/${id}`);
  return res.data;
};

const BlogAddApi = async (formdata) => {
  const res = await axios.post(`http://localhost:3000/blogs`, formdata);
  return res.data;
};

const useBlogListApi = () => {
  return useQuery(["blogList"], fetchBlogListApi);
};

const BlogDeleteApi = async (id) => {
  await axios.delete(`http://localhost:3000/blogs/${id}`);

  return;
};

const BlogEditApi = async (data) => {
  await axios.put(`http://localhost:3000/blogs/${data.id}`, data);

  return;
};

export {
  fetchBlogListApi,
  useBlogListApi,
  fetchBlogApiById,
  BlogAddApi,
  BlogDeleteApi,
  BlogEditApi,
};
