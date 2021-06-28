import React from 'react';
import NavBar from '../components/NavBar';
import FollowBar from '../components/FollowBar';
import './Home.css'

function Home(){
    return(
        <>
        <NavBar/>
        <div className='container'>
         <FollowBar /> 
         <div className='search'>
             hhhh
         </div>
        </div>
       
        </>
    );
}

export default Home;
