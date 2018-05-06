import React from 'react';
import {StyleRoot} from 'radium';
import '../styles/ICOItem.css';
import NavigationBar from './NavigationBar'
import { Button, Form, FormGroup, Label, Input, FormText, Container, CustomInput} from 'reactstrap';



class PrepaymentPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }



    render () {
        return (

        <div>
        <NavigationBar />
        <div className="content">
            <Form>
                 <FormGroup tag="fieldset">
                  <legend>How much would you like to invest?</legend>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="radio1" />{' '}
                        $500 - $2500
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="radio1" />{' '}
                        $2501 - $10000 
                    </Label>
                  </FormGroup>
                    <FormGroup check>
                    <Label check>
                      <Input type="radio" name="radio1" />{' '}
                        $10001+ 
                    </Label>
                  </FormGroup>
                  <FormGroup>
                    <legend>Ethereum Return Address:</legend>
                      <Input type="name" name="name" id="email" placeholder="Ethereum Address" />
                      <p>This is optional. You can provide it later</p>
                  </FormGroup>
                  <FormGroup>
                    <legend>Wallet:</legend>
                  <Input type="select" name="select" id="exampleSelect">
                    <option>Ledger</option>
                    <option>Tether</option>
                    <option>My Ether Wallet</option>
                  </Input>                      
                  <p>Exchange wallets are not compatible.</p>
                  </FormGroup>
                  </FormGroup>
                <Button>Continue to Payment</Button> 
            </Form>
        </div>
        </div>
           )
    }
}

export default PrepaymentPage