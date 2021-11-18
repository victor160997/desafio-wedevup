import styled from "styled-components";

export const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #143E40;
  min-height: 100vh;
  height: max-content;
`;

export const FormFilterStyle = styled.form`
  margin: 30px 0 1vw 0;
  display: flex;
  font-size: 25px;
  label {
    display: flex;
    flex-direction: column;
    margin: 15px;
    box-shadow: 0 5px 15px black;
    padding: 10px;
    span {
      color: white;
      text-shadow: 2px 0 5px rgba(3, 152, 158, 0.7) , -2px 0 5px rgba(3, 152, 158, 0.7) , 0 2px 5px rgba(3, 152, 158, 0.7) , 0
        -2px 5px rgba(3, 152, 158, 0.7) , 1px 1px 5px rgba(3, 152, 158, 0.7) , -1px -1px 5px rgba(3, 152, 158, 0.7) , 1px -1px 5px rgba(3, 152, 158, 0.7) , -1px
        1px 5px rgba(3, 152, 158, 0.7);
    }
  }
  select {
    background-color: transparent;
    margin-top: 8px;
    padding: 5px;
    border: 0;
    box-shadow: 0 5px 15px black;
    color: white;
    option {
      color: white;
      background-color: black;
    }
  }
`;

export const CarList = styled.div`
  display: flex;
  margin-top: 25px;
  @media screen and (max-width: 770px) {
    margin-top: 5px;
  }
`;

export const AllCards = styled.div`
  display: flex;
  justify-content: center;
  width: 90vw;
  max-width: 2000px;
  height: max-content;
  margin: 0 25px 25px 25px;
  flex-wrap: wrap;
  box-shadow: 0 5px 15px black;
  overflow: hidden;
  background-color: rgba(0, 194, 203, 0.8);
  @media screen and (max-width: 770px) {
    width: 100vw;
    overflow: auto;
  }
`;

export const MoveAllCards = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: max-content;
  transition: all ease 0.25s;
`;

export const Card = styled.div`
  box-shadow: 0 5px 15px black;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  transform: scale(0.9);
  background-color: black;
  max-height: 500px;
  border-radius: 10px 10px 0 0;
  transition: all ease 0.25s;
  cursor: pointer;
  :hover {
    transform: scale(1);
  }
  /* img {
    width: 550px;
    border-radius: 10px 10px 0 0;
  } */
  h1 {
    color: white;
    text-shadow: 2px 0 5px rgba(3, 152, 158, 0.7) , -2px 0 5px rgba(3, 152, 158, 0.7) , 0 2px 5px rgba(3, 152, 158, 0.7) , 0
      -2px 5px rgba(3, 152, 158, 0.7) , 1px 1px 5px rgba(3, 152, 158, 0.7) , -1px -1px 5px rgba(3, 152, 158, 0.7) , 1px -1px 5px rgba(3, 152, 158, 0.7) , -1px
      1px 5px rgba(3, 152, 158, 0.7);
    margin: 15px 5px 15px 5px;
    @media screen and (max-width: 770px) {
      font-size: 25px;
    }
  }
  span {
    margin: 5px 10px;
    font-size: 20px;
    color: #f7fff7;
    @media screen and (max-width: 770px) {
      font-size: 18px;
    }
  }
`;

export const DivImageCar = styled.div`
  border-radius: 10px 10px 0 0;
  width: 550px;
  height: 300px;
  background-image: url(${ ({ img }) => `${img}`});
  background-size: cover;
  div {
    width: 100%;
    height: 130%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 25%, transparent 75%);
  }
  @media screen and (max-width: 770px) {
    width: 250px;
    height: 200px;
  }
`;

export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MovieRight = styled.div`
  svg {
    box-shadow: 0 5px 15px black;
    position: absolute;
    width: 5vw;
    height: 470px;
    background-color: rgba(0, 0, 0, 0.6);
    /* margin-left: -55px; */
    right: 0;
    z-index: 99;
    opacity: 1;
    cursor: pointer;
    transition: all ease 0.25s;
  }
  svg:hover {
    background-color: rgba(0, 0, 0, 0.9);
  }
  @media screen and (max-width: 770px) {
    display: none;
  }
`;

export const MovieLeft = styled.div`
  svg {
    box-shadow: 0 5px 15px black;
    position: absolute;
    width: 5vw;
    height: 470px;
    background-color: rgba(0, 0, 0, 0.6);
    /* margin-left: -55px; */
    left: 0;
    z-index: 99;
    opacity: 1;
    cursor: pointer;
    transition: all ease 0.25s;
  }
  svg:hover {
    background-color: rgba(0, 0, 0, 0.9);
  }
  @media screen and (max-width: 770px) {
    display: none;
  }
`;
