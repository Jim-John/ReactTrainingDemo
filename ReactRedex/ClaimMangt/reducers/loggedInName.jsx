
const loggedUsername='';
const loggedInNameReducer=(state=loggedUsername,action) =>{
    console.log('Sate '+state +' Action '+action.type+' loggged in name ' +
    action.loggedUsername+'actino '+JSON.stringify(action)
    );
    switch (action.type) 

    {
       case 'LOGGEDIN_USER': 
                            state=action.loggedInNameReducer;
                            break;
              
    }
    return state;
}
export default loggedInNameReducer;