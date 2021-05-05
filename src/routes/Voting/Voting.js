import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import { DogContext } from "../../helpers/DogContext";
import HandleVote from "../../helpers/HandleVote";

// Components
import Wrapper from "../../components/Shared/Wrapper";
import GoBack from "../../components/Shared/GoBack";
import LogItem from "./LogItem";
import ActionBtn from "./ActionBtn";
import Loader from "../../components/Shared/Loader";


const Voting = ({ like, fav, disl }) => {
  const { likeKey, disKey, logKey, activeKey } = useContext(DogContext);
  const [liked] = likeKey;
  const [disliked] = disKey;
  const [log] = logKey;
  const [active, setActive] = activeKey;
  const [randomDog, setRandomDog] = useState({});
  const [ loading, setLoading ] = useState();
  const { handleClick } = HandleVote();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axios(
        "https://api.thedogapi.com/v1/images/search"
      );
      setRandomDog(response.data[0]);
      setActive(false);
      setLoading(false);
    };
    fetchData();
  }, [liked, disliked]);

  const url = randomDog.url;

  let activePath;
  if (active) {
    activePath =
      "M8.07107 2C3.61354 2 0 5.61354 0 10.0711C0 12.2116 0.850339 14.2646 2.36396 15.7782L14.2929 27.7071C14.6834 28.0976 15.3166 28.0976 15.7071 27.7071L27.636 15.7782C29.1497 14.2646 30 12.2116 30 10.0711C30 5.61354 26.3865 2 21.9289 2C19.7884 2 17.7354 2.85034 16.2218 4.36396L15 5.58579L13.7782 4.36396C12.2646 2.85034 10.2116 2 8.07107 2Z";
  } else {
    activePath =
      "M8.07107 2C4.71811 2 2 4.71811 2 8.07107C2 9.68122 2.63963 11.2254 3.77817 12.364L15 23.5858L26.2218 12.364C27.3604 11.2254 28 9.68121 28 8.07107C28 4.71811 25.2819 2 21.9289 2C20.3188 2 18.7746 2.63963 17.636 3.77817L15.7071 5.70711C15.3166 6.09763 14.6834 6.09763 14.2929 5.70711L12.364 3.77818C11.2254 2.63963 9.68121 2 8.07107 2ZM0 8.07107C0 3.61354 3.61354 0 8.07107 0C10.2116 0 12.2646 0.850343 13.7782 2.36396L15 3.58579L16.2218 2.36396C17.7354 0.850341 19.7884 0 21.9289 0C26.3865 0 30 3.61354 30 8.07107C30 10.2116 29.1497 12.2646 27.636 13.7782L15.7071 25.7071C15.3166 26.0976 14.6834 26.0976 14.2929 25.7071L2.36396 13.7782C0.850339 12.2646 0 10.2116 0 8.07107Z";
  }

  return (
      <Wrapper>
        <GoBack btnContent="Voting" />
        { loading ? (
          <Loader />
        ) : (
          <Img src={url} alt={randomDog.name} />
        )}
        
        
        <Flexbox>
          <Actions>
            <div>
              <ActionBtn
                onClick={() => handleClick("like", randomDog)}
                like
                viewBox="0 0 30 30"
                path="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15ZM15 2C7.8203 2 2 7.8203 2 15C2 22.1797 7.8203 28 15 28C22.1797 28 28 22.1797 28 15C28 7.8203 22.1797 2 15 2ZM10 12H8V10H10V12ZM22 12H20V10H22V12ZM9.2 16.6L9.8 17.4C12.4 20.8667 17.6 20.8667 20.2 17.4L20.8 16.6L22.4 17.8L21.8 18.6C18.4 23.1333 11.6 23.1333 8.2 18.6L7.6 17.8L9.2 16.6Z"
              />

              <ActionBtn
                onClick={() => handleClick("fav", randomDog)}
                fav
                viewBox="0 0 30 26"
                path={activePath}
              />

              <ActionBtn 
                onClick={() => handleClick("dis", randomDog)}
                disl
                viewBox="0 0 30 30"
                path="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15ZM15 2C7.8203 2 2 7.8203 2 15C2 22.1797 7.8203 28 15 28C22.1797 28 28 22.1797 28 15C28 7.8203 22.1797 2 15 2ZM10 12H8V10H10V12ZM22 12H20V10H22V12ZM7.6 20.2L8.2 19.4C11.6 14.8667 18.4 14.8667 21.8 19.4L22.4 20.2L20.8 21.4L20.2 20.6C17.6 17.1333 12.4 17.1333 9.8 20.6L9.2 21.4L7.6 20.2Z"
              />
            </div>
          </Actions>

          <ActionLog>
            {log.map((item, index) => (
              <LogItem
                key={index}
                id={item.id}
                content={item.content}
                type={item.type}
                time={item.time}
              />
            ))}
          </ActionLog>
        </Flexbox>
      </Wrapper>
  );
};

export default Voting;


const Img = styled.img`
  border-radius: 20px;
  width: 100%;
  max-height: 35rem;
  object-fit: cover;
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const Flexbox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
`;

const Actions = styled.div` 
  margin-top: -42px;
  padding: 4px;
  background: ${(props) => props.theme.actionBtn};
  border-radius: 22px;

  div {
    display: flex;
    flex-direction: row;
    background: white;
    border-radius: 22px;
  }
`;

const ActionLog = styled.div`
  margin: 10px 0px;
  width: 100%;
`;
