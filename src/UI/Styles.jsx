import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 500px;
  margin: auto;
  margin-top: 100px;
  color: #fff;
   img {
    margin-top: 60px;
    width: 300px;
   }
`;
export const Form = styled.form`
  display: flex;
  width: 400px;
  font-family: "Lato", sans-serif;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50x;
  border-radius: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  gap: 10px;
`;
export const Input = styled.input`
  margin-top: 20px;
  background-color: transparent;
  margin-bottom: 10px;
  padding: 10px;
  border-color: #ff8484;
  border-radius: 50px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  font-size: 16px;
  margin-left: 10px;
  color: #fff;
`;
export const Button = styled.button`
  padding: 10px 40px;
  background-color: #F64545;
  color: #fff;
  border: 1px #fff;
  border-radius: 50px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 30px;
  transition: ease-out 0.3s;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  &:hover {
    background-color: #FC1212;
  }
  @media (hover: none) {
    button:hover {
      background-color: #FC1212;
    }
`;
export const ButtonMostrar = styled.button`
  margin-top: 20px;
  padding: 10px;
  margin-left: 5px;
  background-color: #F64545;
  color: #fff;
  border: none;
  border-radius: 80px;
  cursor: pointer;
  transition: ease-out 0.3s;
  &:hover {
    background-color: #FC1212;
  }
  @media (hover: none) {
    button:hover {
      background-color: #FC1212;
    }
`;
export const P = styled.p`
  margin-top: 20px;
  justify-content: center;
  text-align: center;
`;
export const Label = styled.label`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (min-width: 768px) {
    width: 48%;
  }
`;
export const VideoBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
  object-fit: cover;

  video {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -1;
    transform: translateX(-50%) translateY(-50%);
  }
`;
export const DashboardContainer = styled.div`
  font-family: "Lato", sans-serif;
  color: #fff;
`;
export const Header = styled.header`
  display: flex;
  margin: 20px;
  align-items: flex-start;
  height: 100px;

  h1 {
    margin-left: 30px;
    margin-right: auto;
    color: #fc1212;
    text-shadow: 1px 1px 0px #fff;
  }
`;

export const Title = styled.h1`
  text-align: center;
  margin-top: 50px;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  margin-top: 50px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  border-radius: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: right;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  height: 250px;
  border-radius: 25px;
  background-color: #f64545;
`;

export const InfoImage = styled.img`
  width: 100%;
  max-width: 100px;
  margin-bottom: 40px;
`;
 export const TextInfo = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: 13px;
 margin-bottom: 40px;
 color: #102550;
 font-weight: bold;

`
export const TextContainer = styled.div`
 display: flex;
 flex-direction: row;
 gap: 100px;
 .weight {
  background-color: #FC1212;
  padding: 10px;
  border-radius: 50px;
 }
 .height {
  padding: 10px;
 }
`
export const InfoAbilities = styled.div`
display: flex;
flex-direction: row;
gap: 30px;
margin-right: auto;
background-color: #f64545;
border-radius: 25px;
width: 300px;
height: 200px;
font-size: 13px;
color: #102550;
p{
margin-left: 5px;
}
img{
  width: 100px;
}

`
export const InfoList = styled.ul`
  padding: 0;
`;

export const InfoListItem = styled.li`
  margin-bottom: 8px;
  margin-left: -20px;
  margin-right: 40px;
  list-style: none;
  color: #FFF26C;
  text-shadow: 1px 1px 0px #000;
`;
export const CardsContainer = styled.div`
  border: none;
  border-radius: 50px;
  padding: 16px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  background-color: #fc1212;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  img {
    width: 100%;
    max-width: 120px;
    height: auto;
    margin-bottom: 16px;
  }

  h3 {
    margin: 0;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
`;
export const MidCard = styled.div`
  background-color: #f64545;
  padding: 20px;
  border-radius: 50px;
`;
export const HeaderAvatar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f64545;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  border-radius: 50px;
  .avatar {
    cursor: pointer;

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  .dropdown {
    position: relative;
    display: inline-block;

    .dropdown-content {
      position: absolute;
      top: 50px;
      right: 0;
      background-color: #f64545;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      z-index: 1;
      display: flex;
      flex-direction: column;
      border-radius: 12px;

      a {
        margin-left: 10px;
        color: inherit;
        text-decoration: none;
      }
      button {
        background-color: #f9f9f9;
        border: none;
        cursor: pointer;
        padding: 10px;
        text-align: left;
        transition: all 0.2s ease-in-out;

        &:hover {
          background-color: #f64545;
        }
      }
    }
  }
`;
export const ListPage = styled.ul`
display: flex;
margin-top: 40px;
margin-bottom: 40px;
flex-direction: row;
justify-content: center;
list-style: none;
gap: 5px;
margin-right: 32px;
`;
export const ButtonPage = styled.button`
  border-radius: 50%;
  padding: 8px;
  width: 32px;
  border: none; 
  background-color: #FC1212;
  color: #fff;
`;
