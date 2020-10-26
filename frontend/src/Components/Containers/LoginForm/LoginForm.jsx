import React, {useState, useEffect} from 'react';
import { useMutation, useLazyQuery } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { logInQuery, signUpMutation } from '../../../graphql/queries';

import Button from '../../Components/Button/Button';
import { FormDiv } from './LoginForm.styles';

const LoginForm = ({handleGetUser}) => {
  const [isLogin, setIsLogin] = useState(true);
  const [getUser, { loading:queryLoading, data:queryData, error:queryError }] = useLazyQuery(logInQuery);
  const [registerUser, {loading:mutationLoading, data:mutationData, error:mutationError}] = useMutation(signUpMutation);

  let loading, data, error
  isLogin ? 
  (loading = queryLoading, data=queryData, error=queryError) 
  : 
  (loading = mutationLoading, data=mutationData, error=mutationError)
  

  if(data?.access_token) {
    const token = data.access_token;
    localStorage.setItem('access_token', token);
    handleGetUser(token);
  }

  const { register, handleSubmit, watch, errors, reset } = useForm();

  const onLogin = async details => {    
    await getUser({ variables: { details } })
    reset()
  };
  const onSignup = async data => {
    const {email, password, userName, fullName} = data;
    await registerUser({ variables: {input:{email, password, userName, fullName}} });
    reset()
  };

  return (
    <>
    <FormDiv>
  {error ? <span>{error.message}</span> : null }
  {loading ? <p>Loading ...</p> : null}
      {isLogin ? 
      <form onSubmit={isLogin ? handleSubmit(onLogin) : null}>
        <label htmlFor="details">Username or Email Address</label>
        
        <input disabled={ loading } type="text" name="details" id="details" ref={register({ required: true })} />
        
        {errors.details && <span>This field is required</span>}
        
        
        <label htmlFor="password">Password</label>
        
        <input disabled={ loading } type="password" name="password" id="password" ref={register({ required: true })} />
        
        {errors.password && <span>This field is required</span>}
        
        <Button type="submit" text="Login" />
        
      </form> 
  :

      <form onSubmit={!isLogin ? handleSubmit(onSignup) : null}>
        <label htmlFor="fullName">Full Name</label>
        
        <input disabled={ loading } type="text" name="fullName" id="fullName" ref={register({ required: true })} />
        
        {errors.fullName && <span>Full Name is required</span>}
        
        
        <label htmlFor="userName">Username</label>
        
        <input disabled={ loading } type="text" name="userName" id="userName" ref={register()} />
        
        
        <label htmlFor="email">Email</label>
        
        <input disabled={ loading } type="text" name="email" id="email" ref={register({
          required: "Required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "invalid email address"
          }
        })} />
        
        {errors.email && <span>Email is not correct</span>}
        
        
        <label htmlFor="password">Password</label>
        
        <input disabled={ loading } type="password" name="password" id="password" ref={register({ required: true })} />
        
        {errors.password && <span>Password is required</span>}
        
        
        <label htmlFor="confirmpassword">Confirm Password</label>
        
        <input disabled={ loading } type="password" name="confirmpassword" id="confirmpassword" ref={register({
          required:true,
  validate: (value) => value === watch('password') || "Passwords don't match."
})} />
        
        {errors.confirmpassword && <span>Does not match password</span>}
        
        
        <Button type="submit" text="Sign Up" />
      </form>
}
    </FormDiv>
    <p style={{ cursor:'pointer', fontSize:'13px', marginTop:"25px" }} onClick={()=>{setIsLogin(!isLogin)}}> {isLogin ? "Sign Up here" : "Login here"}  --></p>
    </>
  );
};

export default LoginForm;
