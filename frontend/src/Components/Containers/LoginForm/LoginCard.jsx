import React from 'react';

const LoginCard = ({isLogin, errors, handleSubmit, onLogin}) => (
  <form onSubmit={isLogin ? handleSubmit(onLogin) : null}>
        <label htmlFor="details">Username or Email Address</label>
        
        <input type="text" name="details" id="details" ref={register({ required: true })} />
        
        {errors.details && <span>This field is required</span>}
        
        
        <label htmlFor="password">Password</label>
        
        <input type="password" name="password" id="password" ref={register({ required: true })} />
        
        {errors.password && <span>This field is required</span>}
        
        
        <button type="submit"> Login </button>
      </form> 
 
)

export default LoginCard;
