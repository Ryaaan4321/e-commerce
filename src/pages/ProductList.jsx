import styled from "styled-components";
import Navbar from "../components/Navbar.jsx";
import Announcement from "../components/Announcement.jsx";
import Products from "../components/Products.jsx";
import Newsletter from "../components/Newsletter.jsx";
import Footer from "../components/Footer.jsx";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
`;
const FilerText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right:20px;
`;
const Select=styled.select`
padding:10px;
margin-right:20px;  

`;
const Option =styled.option` `;

const ProductList = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilerText>Filter products: </FilerText>
          <Select>
            <Option disabled selected>
                Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>


          <Select>
            <Option disabled selected>
                Size
            </Option>
            <Option>Xs</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>Xl</Option>
          </Select>
        </Filter>
        <Filter>
          <FilerText>Sort Products:</FilerText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      hello hello everyone
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
