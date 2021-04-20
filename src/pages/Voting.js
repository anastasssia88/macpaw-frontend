import React, { useEffect, useState, useContext } from 'react'
import styled from 'styled-components';
import axios from 'axios'
import {DogContext} from '../../src/DogContext'

// Components
import Search from '../layout/Search' 
import Layout from '../layout/Layout'
import GoBack from '../components/GoBack'
import UserAction from '../components/UserAction'


const Voting = ({ like, fav, disl }) => { 
    // Shared state
    const { likeKey, favKey, disKey } = useContext( DogContext )
    const [ liked, addToLiked ] = likeKey
    const [ favorites, addToFav] = favKey
    const [ disliked, addToDisliked ] = disKey

    // Local state with data from dog's api
    const [ randomDog, setRandomDog ] = useState({})
    const [ active, setActive ] = useState(false)
    const [ log, setLog ] = useState([]) 


    // Fetching data from dogapi on changes in state liked, disliked
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios('https://api.thedogapi.com/v1/images/search');
            setRandomDog(response.data[0])
            setActive(false)
            };
        fetchData(randomDog)
    }, [liked, disliked]);

    const url = randomDog.url
    const id = randomDog.id

    // Setting favorite icon filled/not filled
    let path
    if (active) { 
        path = <path d="M8.07107 2C3.61354 2 0 5.61354 0 10.0711C0 12.2116 0.850339 14.2646 2.36396 15.7782L14.2929 27.7071C14.6834 28.0976 15.3166 28.0976 15.7071 27.7071L27.636 15.7782C29.1497 14.2646 30 12.2116 30 10.0711C30 5.61354 26.3865 2 21.9289 2C19.7884 2 17.7354 2.85034 16.2218 4.36396L15 5.58579L13.7782 4.36396C12.2646 2.85034 10.2116 2 8.07107 2Z" fill="#FFFFFF"></path>
    } else {
        path = <path d="M8.07107 2C4.71811 2 2 4.71811 2 8.07107C2 9.68122 2.63963 11.2254 3.77817 12.364L15 23.5858L26.2218 12.364C27.3604 11.2254 28 9.68121 28 8.07107C28 4.71811 25.2819 2 21.9289 2C20.3188 2 18.7746 2.63963 17.636 3.77817L15.7071 5.70711C15.3166 6.09763 14.6834 6.09763 14.2929 5.70711L12.364 3.77818C11.2254 2.63963 9.68121 2 8.07107 2ZM0 8.07107C0 3.61354 3.61354 0 8.07107 0C10.2116 0 12.2646 0.850343 13.7782 2.36396L15 3.58579L16.2218 2.36396C17.7354 0.850341 19.7884 0 21.9289 0C26.3865 0 30 3.61354 30 8.07107C30 10.2116 29.1497 12.2646 27.636 13.7782L15.7071 25.7071C15.3166 26.0976 14.6834 26.0976 14.2929 25.7071L2.36396 13.7782C0.850339 12.2646 0 10.2116 0 8.07107Z" fill="#FFFFFF"></path>
    }

    // Handling click events

    const getTime = () => {
        let h = new Date().getHours();
        let m = new Date().getMinutes();
        h = (h<10) ? '0' + h : h;
        m = (m<10) ? '0' + m : m;
        let time = h + ':' + m;
        return time
    }

    const handleClick = (type, randomDog) => {
        let time = getTime()
        if (type === "like") {
            addToLiked(prevLiked => [...prevLiked, randomDog])
            setLog(prevLog => [...prevLog, { id: randomDog.id, content: "was added to Likes", type: "like", time: time }])
        } else if (type === "dis") {
            addToDisliked(prevLog => [...prevLog, randomDog])
            setLog(prevLog => [...prevLog, { id: randomDog.id, content: "was added to Dislikes", type: "dis", time: time}])
        } else {
            if (favorites.indexOf(randomDog) === -1) {
                setActive(true)
                addToFav(prevFavorites => [...prevFavorites, randomDog])
                setLog(prevLog => [...prevLog, { id: randomDog.id, content: "was added to Favorites", type: "fav", time: time }])
            } else {
                setActive(false)
                favorites.pop()
                setLog(prevLog => [...prevLog, { id: randomDog.id, content: "was removed from Favourites", type: "", time: time}])
            }
        }
    }

    

    return (
        <Layout flexCol> 
            <Search />
            <Wrapper>
                <GoBack btnContent="Voting" />
                <Img src={url} alt="this is dog" />

                <Flexbox>
                    <Actions>
                        <ActionBtn like onClick={() => handleClick("like", randomDog)} >
                            <SVG like viewBox="0 0 30 30"> 
                                <path d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15ZM15 2C7.8203 2 2 7.8203 2 15C2 22.1797 7.8203 28 15 28C22.1797 28 28 22.1797 28 15C28 7.8203 22.1797 2 15 2ZM10 12H8V10H10V12ZM22 12H20V10H22V12ZM9.2 16.6L9.8 17.4C12.4 20.8667 17.6 20.8667 20.2 17.4L20.8 16.6L22.4 17.8L21.8 18.6C18.4 23.1333 11.6 23.1333 8.2 18.6L7.6 17.8L9.2 16.6Z"></path>
                            </SVG >
                        </ActionBtn>
                        <ActionBtn fav onClick={() => handleClick("fav", randomDog)} >
                            <SVG viewBox="0 0 30 26"> 
                                { path }
                            </SVG>
                        </ActionBtn>
                        <ActionBtn disl onClick={() => handleClick("dis", randomDog)} >
                            <SVG viewBox="0 0 30 30"> 
                                <path d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15ZM15 2C7.8203 2 2 7.8203 2 15C2 22.1797 7.8203 28 15 28C22.1797 28 28 22.1797 28 15C28 7.8203 22.1797 2 15 2ZM10 12H8V10H10V12ZM22 12H20V10H22V12ZM7.6 20.2L8.2 19.4C11.6 14.8667 18.4 14.8667 21.8 19.4L22.4 20.2L20.8 21.4L20.2 20.6C17.6 17.1333 12.4 17.1333 9.8 20.6L9.2 21.4L7.6 20.2Z"></path>
                            </SVG>
                        </ActionBtn>
                    </Actions>
                    
                    <ActionLog>
                        { log.map( item => <UserAction 
                            key={item.id} 
                            id={item.id} 
                            content={item.content} 
                            type={item.type} 
                            time={item.time} 
                        />) }
                    </ActionLog>

                </Flexbox>
            </Wrapper>
        </Layout>
    )
}

export default Voting

const Wrapper = styled.div`
    background: ${props => props.theme.bgBox};
    border-radius: 20px;
    width: 100%;
    height: 100%;
    padding: 20px;
`

const Img = styled.img`
    border-radius: 20px;
    width: 100%;
    max-height: 30rem;
    object-fit: cover;
`

const Flexbox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Actions = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: -42px;
    padding: 3px;
    background: ${props => props.theme.bgBox};
    border-radius: 22px;
`

const SVG = styled.svg`
        width: 30px;
        height: 30px;
        fill: white;
        transition: all 0.3s ease;
`

const ActionBtn = styled.button`
    width: 80px;
    height: 80px;
    border: none;
    margin: ${props => props.fav && "0px 3px" };

    background: ${ props => props.like && "#97EAB9" };
    background: ${ props => props.fav && "#FF868E" };
    background: ${ props => props.disl && "#FFD280" };

    border-top-left-radius: ${ props => props.like && "20px" };
    border-bottom-left-radius:  ${ props => props.like && "20px" };
    border-top-right-radius: ${ props => props.disl && "20px" };
    border-bottom-right-radius:  ${ props => props.disl && "20px" };

    border-radius: ${ props => props.disl && "#97EAB9" };

    transition: all 0.3s ease;

    &:hover{
        background: ${ props => props.like && "rgba(151, 234, 185, 0.3)" };
        background: ${ props => props.fav && "rgba(255, 134, 142, 0.3)" };
        background: ${ props => props.disl && "rgba(255, 210, 128, 0.3)" };
    }

    &:hover ${SVG} {
        fill: ${props => props.like && "#97EAB9"};
        fill: ${props => props.fav && "#FF868E"};
        fill: ${props => props.disl && "#FFD280"};
    }
`

const ActionLog = styled.div`
    margin: 10px 0px;
    width: 100%;
`