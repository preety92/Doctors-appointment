import React from 'react';
import {Form,Input,message} from 'antd';
import axios from 'axios'
import '../styles/RegisterStyles.scss';
import {Link,useNavigate} from 'react-router-dom';
import { UseDispatch, useDispatch } from 'react-redux';
import { showLoading,hideLoading } from '../redux/features/alertSlice';

const Register = () => {
const navigate=useNavigate();
const dispatch=useDispatch();
  const onfinishHandler=async (values)=>{
    try {
      dispatch(showLoading());
    const res=await axios.post('/api/v1/user/register',values);
    dispatch(hideLoading());
    if (res.data.success){
      message.success('Register successfully')
      navigate('/login')
    }else{
      message.error('something went wrong');
    }
     
    } catch (error) {
      dispatch(hideLoading());
      console.log(error)
      message.error('something went wrong')
    }
  };
  return (
    <>
    <div className='form-container'>
<Form layout="vertical" onFinish={onfinishHandler} className='register-form'>
  <h3 className='text-center'>Register Form</h3>
<Form.Item label="Name" name="name">
  <Input type="text" required/>
</Form.Item>
<Form.Item label="Email" name="email">
  <Input type="email" required/>
</Form.Item>
<Form.Item label="Password" name="password">
  <Input type="password" required/>
</Form.Item>
<Link to="/login" className='m-2'>Already user Login here</Link>
<button className='btn btn-primary' type="submit">Register</button>
</Form>
    </div>
    </>
  )
}

export default Register;