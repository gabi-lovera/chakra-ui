import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import "./Product.css";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [commets, setCommets] = useState([]);
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

  return <div className="div-card"></div>;
}
