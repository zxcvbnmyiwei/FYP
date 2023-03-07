// import React, {useContext} from 'react'
// import AuthContext from '../context/AuthContext'

// const LoginPage = () => {
//   let {loginUser} = useContext(AuthContext)
//   return (
//     <div>
//         <form onSubmit={loginUser}>
//             <input type="text" name="username" placeholder="Enter Username" />
//             <input type="text" name="password" placeholder="Enter Password" />
//             <input type="submit" />
//         </form>
//     </div>
//   )
// }

// export default LoginPage

import AuthContext from '../context/AuthContext'
import React, {useContext, useState} from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import "./LoginPage.css"
import CollectionCreateForm from "./RegisterForm"
import axios from "axios";

const LoginForm = () => {
  let {loginUser} = useContext(AuthContext)
  const [open, setOpen] = useState(false);

  const onCreate = async (values) => {
    console.log(values)
    const { data } = await axios.post("https://cyiwei.online/register/", values);
    console.log(data)
    
  };

  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div style={{display:"flex",  margin:"20px"}}>
    <Form style={{display:"flex", flexDirection:"column",width: "60vw", justifyContent:"center"}}
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={loginUser}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item 
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button type="primary" danger style={{marginLeft:"16px"}} onClick={() => {
                setOpen(true);
            }}>
          Register
        </Button>
        <CollectionCreateForm
            open={open}
            onCreate={onCreate}
            onCancel={() => {
                setOpen(false);
            }}
        />
      </Form.Item>
    </Form>
    </div>
  );
};
export default LoginForm;