import React, {useState} from 'react';
import { useForm } from 'react-hook-form';

import { FormDiv } from './LoginForm.styles';

const LoginForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { register, handleSubmit, watch, errors, reset } = useForm();
  const onLogin = data => {
    
    console.log(data)
    reset()
  };
  const onSignup = data => console.log(data);

  // console.log(watch("details"));
  return (
    <>
    <FormDiv>
      {isLogin ? 
      <form onSubmit={isLogin ? handleSubmit(onLogin) : null}>
        <label htmlFor="details">Username or Email Address</label>
        
        <input type="text" name="details" id="details" ref={register({ required: true })} />
        
        {errors.details && <span>This field is required</span>}
        
        
        <label htmlFor="password">Password</label>
        
        <input type="password" name="password" id="password" ref={register({ required: true })} />
        
        {errors.password && <span>This field is required</span>}
        
        
        <button type="submit"> Login </button>
      </form> 
  :

      <form onSubmit={!isLogin ? handleSubmit(onLogin) : null}>
        <label htmlFor="fullName">Full Name</label>
        
        <input type="text" name="fullName" id="fullName" ref={register({ required: true })} />
        
        {errors.fullName && <span>Full Name is required</span>}
        
        
        <label htmlFor="userName">Username</label>
        
        <input type="text" name="userName" id="userName" ref={register()} />
        
        
        <label htmlFor="email">Email</label>
        
        <input type="text" name="email" id="email" ref={register({
          required: "Required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "invalid email address"
          }
        })} />
        
        {errors.email && <span>Email is not correct</span>}
        
        
        <label htmlFor="password">Password</label>
        
        <input type="password" name="password" id="password" ref={register({ required: true })} />
        
        {errors.password && <span>Password is required</span>}
        
        
        <label htmlFor="confirmpassword">Confirm Password</label>
        
        <input type="password" name="confirmpassword" id="confirmpassword" ref={register({
          required:true,
  validate: (value) => value === watch('password') || "Passwords don't match."
})} />
        
        {errors.confirmpassword && <span>Does not match password</span>}
        
        
        <button type="submit">Sign Up</button>
      </form>
}
    </FormDiv>
    <p style={{ cursor:'pointer', fontSize:'13px' }} onClick={()=>{setIsLogin(!isLogin)}}> {isLogin ? "Sign Up here" : "Login here"}  --></p>
    </>
  );
};

export default LoginForm;
