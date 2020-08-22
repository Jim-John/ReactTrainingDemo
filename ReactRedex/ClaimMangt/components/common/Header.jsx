import React from 'react';
import { Navbar, Nav, NavDropdown, Form,  FormControl, Button, Table} from 'react-bootstrap';
import {userSelector} from 'react-redux';
import {connect} from 'react-redux';
class HeaderLogin extends React.Component {
   render() {
          const userName=this.props.loggedUsername;
          const loggedIndate=this.props.loggedIndate;
          const today = new Date();
     
          const time = today.getDate()+ '-'  + (today.getMonth() + 1) + '-' + today.getFullYear() + ' '  + today.getHours() + ':' + today.getMinutes();   
         return (   
         
         <header>
        <Navbar expand="lg" variant="dark" bg="dark">
        <div className="col-4"></div>
        <div className="col-6">
        <Navbar.Brand >Claims Managment System</Navbar.Brand>
        </div>
        {
         userName!=''?
         <div >
            <div id="loggedInUser" className="text-success">Logged In:{userName} </div>
            <div id="datetime"    className="text-success">Date :{time}</div>
         </div>
         :''
        }
        </Navbar>
      </header>
      );
   }
}

const mapStateToProps = state => 
{
console.log('App state loggedinuser', state);
return {loggedUsername: state.loggedInNameReducer};
}

export default connect(mapStateToProps)(HeaderLogin); 





