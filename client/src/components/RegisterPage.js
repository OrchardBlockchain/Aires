import React from 'react';
import {StyleRoot} from 'radium';
import { Button, Form, FormGroup, Label, Input, FormText, Container} from 'reactstrap';

class RegisterPage extends React.Component {

    render () {
        return (

    <div className="login-div">
      <Form>
        <FormGroup>
          <Input type="name" name="name" id="email" placeholder="Full Name" />
        </FormGroup>
        <FormGroup>
          <Label for="birthday">Date of Birth</Label>
          <Input type="date" name="birthday" id="birthday" placeholder="date placeholder" />
        </FormGroup>        <FormGroup>
          <Input type="email" name="email" id="email" placeholder="Email" />
        </FormGroup>
        <FormGroup>
          <Input type="password" name="password" id="password" placeholder="Password" />
        </FormGroup>   
        <FormGroup>
          <Input type="password" name="confirmPassword" id="confirmPassword" placeholder="ConfirmPassword" />
        </FormGroup>    
        <Button>Register</Button> 
        </Form>
        </div>
           )
    }
}

export default RegisterPage