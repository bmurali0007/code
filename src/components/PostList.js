import React from "react";
import Post from "./Post";

function PostList({
  data,
  setData,
  id,
  setId,
  title,
  setTitle,
  author,
  setAuthor,
  qty,
  setQty,
  price,
  setPrice,
  order,
  setOrder,
}) {
  return (
    <div>
      <div className="post" style={{display: 'flex', flexDirection: 'row'}}>
        {data.map((book) => (
          <Post
            title={title}
            setTitle={setTitle}
            author={author}
            setAuthor={setAuthor}
            qty={qty}
            setQty={setQty}
            price={price}
            setPrice={setPrice}
            order={order}
            setOrder={setOrder}
            id={id}
            data={data}
            setData={setData}
            book={book}
            setId={setId}
          />
        ))}
      </div>
    </div>
  );
}

export default PostList;
