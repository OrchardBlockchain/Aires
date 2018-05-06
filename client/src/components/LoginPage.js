import React from 'react';
import {StyleRoot} from 'radium';
import { Button, Form, FormGroup, Label, Input, FormText, Container} from 'reactstrap';

class LoginPage extends React.Component {

    render () {
        return (

    <div className="login-div">
      <Form>
        <FormGroup>
          <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
        </FormGroup>
        <FormGroup>
          <Input type="password" name="password" id="examplePassword" placeholder="Password" />
        </FormGroup>    
        <Button>Login</Button> 
        </Form>
        <a href="/register">Create Account</a> 
        </div>
           )
    }
}

export default LoginPage