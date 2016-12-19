import React from 'react';
import Search from './Search';
import Message from './Message';
import { Col, Row, Grid } from 'react-bootstrap';

class Main extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
          <Grid className="main-container">
            <Row>
              <Col xs={12} md={4}>
                <Search />
              </Col>
              <Col xs={12} md={8}>
                <Message />
              </Col>
            </Row>
          </Grid>
      )
  }
}


export default Main;
