// -- Successful Auth 
const mockSuccess = (value) => {

    return new Promise((resolve) => {
      setTimeout(() => resolve(value), 1000);
    });
  };
  
  // -- Failed Auth
  const mockFailure = (value) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => reject(value), 1000);
    });
  };

  // -- User Data 
  const userData = {user: 'Admin', pswd: '12345'}

  // -- Auth function
  export const login = (login, password, shouldSucceed = true) => {
    console.log(login, password);
    if (!shouldSucceed) 
    
      return mockFailure({ error: 500, message: 'Something went wrong!' });
    
    else if (login == userData.user && userData.pswd == userData.pswd) 
    
      return mockSuccess({ auth_token: 'successful_fake_token' });
    
    else  
      
      return mockFailure({ error: 500, message: 'Something went wrong!' });
  };
  