import { Email, Facebook, Instagram, LinkedIn, Phone, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0 px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListedItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;`

  const ContactItem=styled.div`
  margin-bottom:20px;
  display:flex;
  align-items:center;
   `;
  const Payment=styled.img`
  width:50%
  `;


const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>MOYE MOYE.</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          officia voluptates deserunt facere magnam vel repellendus debitis
          aperiam, aut corporis, temporibus, magni nihil quis provident minus
          expedita at. Harum, beatae?
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="55ACFF">
            <LinkedIn />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListedItem>Home</ListedItem>
          <ListedItem>Cart</ListedItem>
          <ListedItem>Man Fashion</ListedItem>
          <ListedItem>Woman Fashion</ListedItem>
          <ListedItem>Accessories</ListedItem>
          <ListedItem>My Account</ListedItem>
          <ListedItem>Order Tracking</ListedItem>
          <ListedItem>WishList</ListedItem>
          <ListedItem>Term</ListedItem>
        </List>
      </Center>

      <Right>
        <Title>Contact</Title>
        <ContactItem> <Room style={{marginRight:"10px"}}/>622 South Canal , South Texas</ContactItem>
        <ContactItem> <Phone style={{marginRight:"10px"}}/>+1 435 89 76</ContactItem>
        <ContactItem> <Email style={{marginRight:"10px"}}/>contact@rn.dev</ContactItem>
      </Right>
      <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" alt="payment wali image"/>
      {/* https://i.ibb.co/Qfvn4z6/payment.png payment wali image; */}
    </Container>
  );
};

export default Footer;
