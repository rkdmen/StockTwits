import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Test extends React.Component {
    constructor(props){
    super(props);
  }
     componentWillMount(){
        console.log('Test Component Mounted')
    }

  render(){
    return (
          <div className="world">
            <p>Testing Stock</p>
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

export default connect(null, mapDispatchToProps)(Test);
