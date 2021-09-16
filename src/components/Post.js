import React from "react";
import { Card, Button } from "react-bootstrap";

function Post({
  data,
  book,
  setData,
  setId,
  id,
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
  const deleteHandler = () => {
    console.log(book.id);
    setData(data.filter((list) => list.id !== book.id));
  };

  const fillHandler = (id) => {
    let index = data.findIndex((x) => x.id === id);
    setTitle(data[index].title);
    setAuthor(data[index].author);
    setQty(data[index].qty);
    setPrice(data[index].price);
    setOrder(data[index].order);
  };

  return (
    <div className="post">
      <Card style={{ width: "18rem" }} className="mb-2">
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>Author:{book.author}</Card.Text>
          <Card.Text>Quantity:{book.qty}</Card.Text>
          <Card.Text>Price:{book.price}</Card.Text>
          <Card.Text>ISBN#:{book.order}</Card.Text>
          <Button onClick={() => fillHandler(book.id)} variant="primary">
            Edit
          </Button>
          <Button onClick={deleteHandler} variant="danger">
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Post;
