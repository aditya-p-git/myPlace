# myPlace
Blogging App (minimalist theme)

1. Current status of Project - 

    i) Backend -
    
        . Backend API's facilitating CRUD operations are working. Using these API's User logins can be authenticated and Blog posts 
        can be create, retreived, edited and deleted.
      
    ii) Frontend -
    
       . User logins and new User registrations can be done using front-end.
       
       . Pending functionalities (to be released in next build) 
       
          . Integrations of Blog reading and editing pages with Backend API's are pending. 
            Currently Blogs are displaying hardcoded data.
          
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
      
            Hit this API by GET request 
            (User authentication token received while Login shall also be attached as a bearear token while testing this feature)
       
            Response - All blogs pertenaning to a particular user can be received.
       
       
      iv) To post blogs as a particular user - https://myblogplace.herokuapp.com/api/blogs/
      
            Hit this API by sending a POST request with 'text' 'email' and 'password', url-encoded in Body. 
            (User authentication token received while Login shall also be attached as a bearear token while testing this feature)
       
            Response - All blogs pertenaning to a particular user can be received.      
      
      v) To edit blog as a particular user - https://myblogplace.herokuapp.com/api/blogs/id
      
         Hit this API by sending a PUT request with 'text', url-encoded in Body. 
         (User authentication token received while Login shall also be attached as a bearear token while testing this feature)
      
        Note - 'id' in url mentioned above is id of blog which is to be deleted.
       
        Response - Blog id along with edited blog text shall be received. 
       
     vi) To delete blogs as a particular user - https://myblogplace.herokuapp.com/api/blogs/id
      
         Hit this API by sending a DELETE request with 
         (User authentication token received while Login shall also be attached as a bearear token while testing this feature).
      
        Note - 'id' in url mentioned above is id of blog which is to be deleted.
       
       Response - Blog id of deleted blog post shall be received.
       
       
