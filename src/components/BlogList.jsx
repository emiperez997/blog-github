import { BlogPost } from "./BlogPost.jsx";
import { Pagination } from "./Pagination.jsx";
import { useState } from "preact/hooks";

export function BlogList({ posts }) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(posts.length / 2);

  const limit = 4;

  const getPaginatedPosts = () => {
    const offset = (currentPage - 1) * limit;
    return posts.slice(offset, offset + limit);
  };

  const paginatedPosts = getPaginatedPosts();

  return (
    <>
      <ul class="flex flex-col w-full justify-center items-center p-5 gap-5">
        {paginatedPosts.map((post) => {
          const { title, pubDate: date, description } = post.data;

          return (
            <BlogPost
              title={title}
              date={date}
              description={description}
              url={post.slug}
            />
          );
        })}
      </ul>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      )}
    </>
  );
}
