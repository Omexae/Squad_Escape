<template>
     <h2>Login Page</h2><br>    
            <div class="login">    
            <form id="login" method="get" action="login.php">    
                <label><b>User Name     
                </b>    
                </label>    
                <input type="text" name="Uname" id="Uname" placeholder="Username">    
                <br><br>    
                <label><b>Password     
                </b>    
                </label>    
                <input type="Password" name="Pass" id="Pass" placeholder="Password">    
                <br><br>
                 <label><b>Confirm Password     
                </b>    
                </label>    
                <input type="CPassword" name="CPass" id="CPass" placeholder="Confirm password">    
                <br><br>        
                <input type="button" name="CreateAccount" id="createacc" value="Sign in">       
                <br><br>       
                Forgot <a href="#">Password</a>    
            </form>     
            </div>    
</template>

<script>
export default {
  name: "CreateAccount",
};
</script>

<style>
.login{  
        width: 382px;  
        overflow: hidden;  
        margin: auto;  
        margin: 20 0 0 450px;  
        padding: 80px;  
        background: #020059;  
        border-radius: 15px ;  
          
}  
h2{  
    text-align: center;  
    color: #020059;  
    padding: 20px;  
}  
label{  
    color: #08ffd1;  
    font-size: 17px;  
}  
#Uname{  
    width: 300px;  
    height: 30px;  
    border: none;  
    border-radius: 3px;  
    padding-left: 8px;  
}  
#Pass, #CPass{  
    width: 300px;  
    height: 30px;  
    border: none;  
    border-radius: 3px;  
    padding-left: 8px;  
      
}  
#createacc{  
    width: 300px;  
    height: 30px;  
    border: none;  
    border-radius: 17px;  
    padding-left: 7px;  
    color: blue;  
  
  
}  
span{  
    color: white;  
    font-size: 17px;  
}  
a{  
    float: right;  
    background-color: grey;  
}  
</style>