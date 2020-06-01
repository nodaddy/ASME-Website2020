import React from 'react'
import './Home.css'
import SocialRec from './SocialRec'
import Navbar from './Navbar'
 class Home extends React.Component{
     render(){
         return(
             <div>
                 <SocialRec/>
                 <Navbar/> 
             </div>
         )
     }
 }
export default Home ;