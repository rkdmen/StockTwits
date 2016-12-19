import React from 'react';
import Search from './Search';
import Message from './Message';
import UserMessage from './UserMessage';

import { Col, Row, Grid } from 'react-bootstrap';

class Main extends React.Component {
  render(){
    return (
          <Grid className="main-container">
            <Row>
              <Col xs={12} md={4}>
                <Search />
                <div className='hideForMobile'>
                  <UserMessage />
                </div>

              </Col>
              <Col xs={12} md={8}>
                <Message />
                <div className='hideForDesktop'>
                  <UserMessage />
                </div>
              </Col>
            </Row>
          </Grid>
      )
  }
}


export default Main;
