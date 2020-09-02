import React from 'react';
import { FontAwesomeIcon } from 'react-fontawesome';
class SignOutIcon extends React.Component {
   render() {
           
         const userName=sessionStorage .getItem('UserName');
         console.log('User Name is :'+userName);
         return (   
         
            <div>
            <FontAwesomeIcon icon="check-square" />
            Your <FontAwesomeIcon icon="coffee" /> is hot and ready!
          </div>
      );
   }
}

export default SignOutIcon; 




