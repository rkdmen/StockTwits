import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Main extends React.Component {
    constructor(props){
    super(props);
  }
     componentWillMount(){
        console.log('Main Component Mounted')
    }

  render(){
    return (
          <div>
            <p>Main</p>
          </div>
      )
  }

}

function mapStateToProps(state){
  return {};
}

//binds action and container
function mapDispatchToProps(dispatch){
  return bindActionCreators({  }, dispatch);
}

export default connect(null, mapDispatchToProps)(Main);
