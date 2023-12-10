import styled from "styled-components";
import { ArrowLeftRounded  , ArrowRightRounded} from "@material-ui/icons";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position:relative;
`;

const Arrow=styled.div`
width:50px;
height:50px;
background-color:#fff7f7;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
position:absolute;
top:0;
bottom:0;
left:${props=> props.direction==="left" && "10px"};
right:${props=> props.direction==="right" && "10px"};
margin:auto;
cursor:pointer;
opacity:0.5;
`


const Wrapper=styled.div`
height:100`

const Slide=styled.div`
 width:100vw;
 height:100vh
 display:flex
 align-items:center`;
const ImageContainer=styled.div`
height:100%;
flex:1;`;
const Image=styled.img`
height;80%;
`
const InfoContainer=styled.div`
flex:1;
padding:50px
`;
const Title=styled.h1`
`
const Descreption=styled.p``;
const Button=styled.button``

const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeftRounded />
      </Arrow>
      <Wrapper>
        <Slide>
        <ImageContainer>
          <Image src="https://i.ibb.co/XsdmR2c/1.png"/>
        </ImageContainer>
        <InfoContainer>
          <Title/>
          <Descreption/>
          <Button/>
        </InfoContainer>
        </Slide>

      </Wrapper>
      <Arrow direction="right">
        <ArrowRightRounded />
      </Arrow>
    </Container>
  );
};

export default Slider;

/*echo "# new-app" >> README.md
  git init
  git add README.md
  git commit -m "first commit"
  git branch -M main
  git remote add origin https://github.com/Ryaaan4321/new-app.git
  git push -u origin main


…or push an existing repository from the command line

  git remote add origin https://github.com/Ryaaan4321/new-app.git
  git branch -M main
  git push -u origin main

*/