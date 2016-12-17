import React from 'react';
import Search from './Search';
import Message from './Message';
import { Col, Row, Grid } from 'react-bootstrap';

class Main extends React.Component {
  constructor(props){
    super(props);
  }
  componentWillMount(){
   console.log('Main Component Mounted')
  }

  render(){
    return (
          <Grid>
            <Row className="main-container">
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
