import React, { useState } from "react";
import BookForm from "./components/BookForm";
import PostList from "./components/PostList";

function App() {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [qty, setQty] = useState("");
  const [price, setPrice] = useState("");
  const [order, setOrder] = useState("");
  const [id, setId] = useState("");

  return (
    <div className="App">
      <PostList
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
        data={data}
        setData={setData}
        id={id}
        setId={setId}
      />
      <BookForm
        data={data}
        setData={setData}
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
        setId={setId}
      />
    </div>
  );
}
export default App;
