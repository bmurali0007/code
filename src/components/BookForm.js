import React from "react";
import { Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
function BookForm({
  data,
  setData,
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
  id,
  setId,
}) {
  function submitHandler() {
    setData([
      ...data,
      {
        title: title,
        author: author,
        qty: qty,
        price: price,
        order: order,
        id: uuidv4(),
      },
    ]);
    setTitle("");
    setAuthor("");
    setQty("");
    setPrice("");
    setOrder("");
    console.log(data);
  }

  return (
    <div>
      <h4 style={{ textAlign: "center" }}>Book Form</h4>
      <div class="form-group">
        <label for="inputdefault">Title</label>
        <input
          value={title}
          class="form-control"
          id="inputdefault"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div class="form-group">
        <label for="inputdefault">Author</label>
        <input
          value={author}
          class="form-control"
          id="inputdefault"
          type="text"
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div class="form-group">
        <label for="inputdefault">Quantity</label>
        <input
          value={qty}
          class="form-control"
          id="inputdefault"
          type="text"
          onChange={(e) => setQty(e.target.value)}
        />
      </div>
      <div class="form-group">
        <label for="inputdefault">Price</label>
        <input
          value={price}
          class="form-control"
          id="inputdefault"
          type="text"
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div class="form-group">
        <label for="inputdefault">ISBN#</label>
        <input
          value={order}
          class="form-control"
          id="inputdefault"
          type="text"
          onChange={(e) => setOrder(e.target.value)}
        />
      </div>
      <Button onClick={submitHandler}>Save</Button>
    </div>
  );
}

export default BookForm;
