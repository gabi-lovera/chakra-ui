import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./Card.css";

export default function Card() {
  const [products, setProducts] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    Axios.get(`http://localhost:3001/product/byid/${id}`).then((response) => {
      setProducts(response.data[0]);
    });
    Axios.get(`http://localhost:3001/commets/byProductId/${id}`).then(
      (response) => {
        setCommets(response.data);
      }
    );
  }, []);

  return (
    <div className="div-card">
     
    </div>
  );
}