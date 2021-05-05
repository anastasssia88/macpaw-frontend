import styled from "styled-components"

export const Masonry = styled.div`
    border-radius: 20px;
    width: 100%;
    height: auto;
    display: ${(props) => props.uploadOpen && "none"};
`;

export const Pattern = styled.div`
  padding: 0px 10px;

  @media (max-width: 768px) {
    padding: 0px;
  } 

  display: grid;
  grid-template-columns: repeat(3, 32%);
  grid-template-rows: repeat(3, auto);
  column-gap: 20px;
  row-gap: 20px;

  grid-template-areas:
    "one two three"
    "one four four"
    "five four four"
    "six seven eight"
    "nine nine eight"
    "nine nine ten";
  justify-content: space-evenly;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(10, auto);
    grid-template-areas:
    "one"
    "two"
    "three"
    "four"
    "five"
    "six"
    "seven"
    "eight"
    "nine"
    "ten";
  }
`; 

export const Img = styled.img`
  width: 100%;
  height: 100%;
  min-height: 120px;
  max-height: 300px;
  border-radius: 20px;
  object-fit: cover;

  position: relative;
  z-index: 1;

  opacity: 1;
  -webkit-transition: all 0.4s ease;  
  -moz-transition: all 0.4s ease;  
  -o-transition: all 0.4s ease; 
  transition: all 0.4s ease;
`;

export const Label = styled.div`
  display: none;

  svg {
    width: 20px;
    height: 20px;
    fill: #ff868e;
  }
`;

export const GridItemWithName = styled.div`
  width: 100%;
  max-height: 100%;
  max-height: ${(props) => props.index === 0 && "300px"};
  max-height: ${(props) => props.index === 3 && "300px"};
  max-height: ${(props) => props.index === 7 && "300px"};
  max-height: ${(props) => props.index === 8 && "300px"};
  
  color: white;
  border-radius: 20px;
  position: relative;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  opacity: 1;
  -webkit-transition: all 0.3s ease;  
  -moz-transition: all 0.3s ease;  
  -o-transition: all 0.3s ease; 
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(255, 134, 142, 0.6);
  }

  &:hover ${Label} {
    display: block;
    position: absolute;
    bottom: 10px;
    text-align: center;

    z-index: 100;
    padding: 10px 5px;
    margin-left: 10px;
    margin-right: 10px;

    font-size: 20px;
    text-align: center;
    border-radius: 10px;
    width: 93%;

    justify-self: center;
    background-color: ${(props) => props.theme.bgBreed};
    color: #ff868e;
  }

  &:hover ${Img} {
    opacity: 0.3;
  }

  grid-area: ${(props) => props.index === 0 && "one"};
  grid-area: ${(props) => props.index === 1 && "two"};
  grid-area: ${(props) => props.index === 2 && "three"};
  grid-area: ${(props) => props.index === 3 && "four"};
  grid-area: ${(props) => props.index === 4 && "five"};
  grid-area: ${(props) => props.index === 5 && "six"};
  grid-area: ${(props) => props.index === 6 && "seven"};
  grid-area: ${(props) => props.index === 7 && "eight"};
  grid-area: ${(props) => props.index === 8 && "nine"};
  grid-area: ${(props) => props.index === 9 && "ten"};
`;

export const GridItemWithLike = styled.div`
  width: 100%;
  height: 100%;
  max-height: 100%;
  max-height: ${(props) => props.index === 0 && "300px"};
  max-height: ${(props) => props.index === 3 && "300px"};
  max-height: ${(props) => props.index === 7 && "300px"};
  max-height: ${(props) => props.index === 8 && "300px"};

  color: white;
  border-radius: 20px;
  position: relative;
  cursor: pointer;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  opacity: 1;
  -webkit-transition: all 0.3s ease;  
  -moz-transition: all 0.3s ease;  
  -o-transition: all 0.3s ease; 
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(255, 134, 142, 0.6);
  }

  &:hover ${Label} {
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    z-index: 100;
    padding: 10px 5px;
    border-radius: 10px;

    background-color: ${(props) => props.theme.bgBreed};
    color: #ff868e;
  }

  &:hover ${Img} {
    opacity: 0.3;
  }

  grid-area: ${(props) => props.index === 0 && "one"};
  grid-area: ${(props) => props.index === 1 && "two"};
  grid-area: ${(props) => props.index === 2 && "three"};
  grid-area: ${(props) => props.index === 3 && "four"};
  grid-area: ${(props) => props.index === 4 && "five"};
  grid-area: ${(props) => props.index === 5 && "six"};
  grid-area: ${(props) => props.index === 6 && "seven"};
  grid-area: ${(props) => props.index === 7 && "eight"};
  grid-area: ${(props) => props.index === 8 && "nine"};
  grid-area: ${(props) => props.index === 9 && "ten"};
`;