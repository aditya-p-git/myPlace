# myPlace
Blogging App (minimalist theme)

1. Current status of Project -
    i) Backend -
      . Backend API's facilitating CRUD operations are working. Using these API's User logins can be authenticated and Blog posts can be create, retreived, edited and           deleted.
      
    ii) Frontend -
       . User logins and new User registrations and be done.
       . Pending functionalities (to be released in next build) 
          . Integrations of Blog reading and editing pages with Backend API's are pending. Currently Blogs are displaying hardcoded data.
          . Form validations.
          . Logout button.
          
2. User/testing manual - 
    To test backend APIs on Postman use -
      i) To register new user -  https://myblogplace.herokuapp.com/api/users/
          Hit this API by sending a POST request with 'name', 'email' and 'password', url-encoded in Body.
         Response -  'id','name' 'email' and 'Authentication token' shall be received in response.
          
      ii) To login use - https://myblogplace.herokuapp.com/api/users/login
          Hit this API by sending a POST request with 'name', 'email' and 'password', url-encoded in Body.
         Response -  'id','name' 'email' and 'Authentication token' shall be received in response.
          
      iii) To get blogs of a particular user - https://myblogplace.herokuapp.com/api/blogs/
       Hit this API by GET request (authentication token received while Login shall also be attached)
       Response - All blogs pertenaning to a particular user can be received.
            
          
