import React from 'react'
import {asmeLogo} from '../../assets/'
import './index.css'
class Navbar extends React.Component {
    render(){
        return(
            <div>
                <div className="container-fluid navBorder">
                    <div className="row">
                        <div className="col-sm-2"><img id="mainLogo" src={asmeLogo}/></div>
                        
                       
                        <div className="col-sm-10">
                            <div className="row" id="subNavbar">
                            <div className="col-sm-1" id="subNavGradient">
                               <table>
                                   <tr>
                                       {/*inline CSS to be transferred to .CSS file*/}
                                       <td style={{backgroundColor:"rgb(141, 221, 243)",}}><button className="subNavCol2">.</button></td>
                                   </tr>
                               </table>
                               </div>
                               <div className="col-sm-11">
                               <table>
                                   <tr>
                                       <td className="subNavCol"><button className="subNavButton">About Us</button></td>
                                       <td className="subNavCol"><button className="subNavButton">Events</button></td>
                                       <td className="subNavCol"><button className="subNavButton">Participation</button></td>
                                       <td className="subNavCol"><button className="subNavButton">Blog</button></td>

                                       <td className="subNavCol"><button className="subNavButton">Gallery</button></td>

                                       <td className="subNavCol"><button className="subNavButton">Resources</button></td>

                                       <td className="subNavCol"><button className="subNavButton">Team</button></td>

                                       <td className="subNavCol"><button className="subNavButton">Contact Us</button></td>


                                   </tr>
                               </table>
                               </div>
                                
                            </div>
                        </div>
                      

                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;