//import { Container } from '@mui/system'
//import {ArrowLeftOutlinedIcon} from '@mui/material';
//import {ArrowLeftOutlinedIcon} from '@mui/  material';
import {BiLeftArrow} from 'react-icons/bi'
import {BiRightArrow} from 'react-icons/bi'
//import {ArrowRightOutlinedIcon} from '@mui/material';
//import {KeyboardArrowLeftOutlinedIcon} from '@mui/material';
import   sliderItems  from '../sliderItems';
import styled from 'styled-components';
import useState from 'react';

const Container=styled.div`
    width:100%;
    height:100vh;
    display:flex;
    background-color: white;
    position: relative;
    overflow: hidden;
`;
const Arrow = styled.div`
     width:50px;
    height:50px;
    background-color: #fff7f7;
    border-radius: 50%;
    position: absolute;
    top: 0; 
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    cursor: pointer;
    opacity: 0.5;
    margin:auto;
    z-index: 2;
`;
    const Wrapper = styled.div`
    height:100%;
    display:flex; 
    //overflow: hidden;
    transform:translateX(${props=>props.slideIndex* -100}vw);
    `;

    const Slide = styled.div`
        width: 100vw;
        height: 100vh;
        display:flex;
        align-items: center;
        background-color: #${props =>props.bg};
    `;

    const ImgContainer = styled.div`
    flex: 1;
    `;
    const Image = styled.img`
        height: 80%;
         width: 70%;
        `;
    const InfoContainer = styled.div`
    padding:50px;
    flex:1;
    `;

    const Title = styled.h1`
    font-size:70px;
    `;
    const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight:500;
    letter-spacing: 3px;
    `;

    const Button = styled.button`
    padding: 10px;
    font-size:20px;
    background-color:transparent;
    cursor: pointer;
    `;

    
const Slider = () => {
    const [slideIndex, setSlideIndex]= useState(0);
    const handleClick =  (direction) => {
        if(direction==="left"){
             setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2);
        }else{
            setSlideIndex(slideIndex< 2 ? slideIndex+1 : 0);
        }

    };
  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")} >
            <BiLeftArrow></BiLeftArrow>
        </Arrow>
        <Wrapper slideIndex={slideIndex} >
                {sliderItems.map((item) =>(
            <Slide bg={item.bg}>
            <ImgContainer>
            <Image src={item.img} alt="hi" ></Image>
            </ImgContainer>
            <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Button>SHOP NOW</Button>
            </InfoContainer>
            </Slide>
          ))}
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <BiRightArrow></BiRightArrow>
        </Arrow>
        </Container>
  )
}

export default Slider