import React from 'react';
import {IoIosChatbubbles, IoIosCart} from 'react-icons/io'
import './main.css'

class Header extends React.Component {
   constructor(props){
      super(props);
      this.state = {
         toggle: false
      }
   }
   openNav = () => {
      if(this.state.toggle){
         console.log(document.getElementById("mySidebar").style.width)
         this.setState({
            toggle: false
         })
         document.getElementById("mySidebar").style.width = "0";
      }
      else{
         this.setState({
            toggle: true
         })
         console.log("hide")
         document.getElementById("mySidebar").style.width = "30vw";
      }
    }
   render() {
      let icon = <IoIosChatbubbles className="icon" size="3vh" onClick={this.openNav.bind(this)}/>
      if(this.state.toggle)
         icon = <IoIosCart className="icon" size="3vh" onClick={this.openNav.bind(this)}/>
      return (
         <div>
            {icon}
            <div className="header">
               <label>iCart</label>
            </div>
         </div>
      );
   }
}
export default Header;