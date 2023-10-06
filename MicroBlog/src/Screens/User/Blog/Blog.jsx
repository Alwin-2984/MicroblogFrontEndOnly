import PropTypes from "prop-types";
import Hamburgur from "../../Components/Hamburgur/Hamburgur";
 export default function Blog({ data, handleDelete, handleEdit }) {
  return (
    <div className="max-w-sm mx-auto group hover:no-underline focus:no-underline">
      <div className="flex flex-col justify-end w-full items-end">
        <Hamburgur
          handleDelete={() => handleDelete(data.id)}
          handleEdit={() => handleEdit(data.id)}
        />
      </div>
      <img
        role="presentation"
        className="object-cover w-full rounded h-44 "
        src={data.imageUrl}
        alt={data.title}
      />

      <div className="space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
          {data.title}
        </h3>
        <span className="text-xs ">{data.date}</span>
        <pre className="break-words whitespace-break-spaces">
          {data.content}
        </pre>
      </div>
    </div>
  );
}
Blog.propTypes = {
  data: PropTypes.shape({
    content: PropTypes.any,
    date: PropTypes.any,
    id: PropTypes.any,
    imageUrl: PropTypes.any,
    title: PropTypes.any,
  }),
  handleDelete: PropTypes.func,
  handleEdit: PropTypes.func,
};
