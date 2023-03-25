import styled from "styled-components";
import Card from '../components/Card';
import Dashboard from '../pages/Dashboard';

export const Container = styled.div`
display: flex;
align-items: center;
max-width: 500px;
margin: auto;
color: #fff;
`
export const Form = styled.form`
  display: flex;
  width: 400px;
  font-family: 'Lato', sans-serif;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
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
  border-color: #FF8484;
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
 font-family: 'Lato', sans-serif;
 color: #fff;

`
 export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
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
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
`;

export const InfoImage = styled.img`
  width: 100%;
  max-width: 200px;
`;

export const InfoList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const InfoListItem = styled.li`
  margin-bottom: 8px;
`;
export const CardsContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 50px;
  padding: 16px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  background-color: #FC1212;
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
  background-color: #F64545;
  padding: 20px;
  border-radius: 50px;
`