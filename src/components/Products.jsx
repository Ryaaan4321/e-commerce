import { useLocation } from "react-router";
import { popularProducts } from "../data";
import { useState } from "react";
import Product from "./Product";
import styled from "styled-components";
import { useEffect } from "react";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filterdProducts, setFilterdProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/backend/products?category=${cat}`
            : "http://localhost:5000/backend/products"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilterdProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [cat, filters]);

  useEffect(()=>{
    if(sort="newest"){
      setFilterdProducts(prev=>
        [...prev].sort((a,b)=>a.createdAt-b.createdAt)
        );
    }
    else if((sort=="asc")){
      setFilterdProducts((prev)=>
      [...prev].sort((a,b)=>a.price-b.price)
      );
    }
    else {
      setFilterdProducts((prev)=>
      [...prev].sort((a,b)=>b.price-a.price)
      );
    }
  },[sort]);

  return (
    <Container>
      {cat ? filterdProducts.map((item) => (
        <Product item={item} key={item.id} />
      )): products
      .slice(0,8)
      .map((item)=>(
        <Product item={item} key={item.id}/>
      )) 
      }
    </Container>
  );
};

export default Products;
