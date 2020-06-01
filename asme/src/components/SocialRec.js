import React from 'react'
import './SocialRec.css'

 class SocialRec extends React.Component{
     render(){
         return(
             <div>
                 <div className="container-fluid">
                     <div className="row" id="socialRec" align="left">
                         <div className="col-sm-3">facebook/asme</div>
                         <div className="col-sm-3">instagram/asme</div>
                         <div className="col-sm-3">twitter/asme</div>
                         <div className="col-sm-3"></div>

                     </div>
                 </div>
             </div>
         )
     }
 }
export default SocialRec ;