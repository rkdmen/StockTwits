import React from 'react';
import Search from './Search';
import Message from './Message';

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
           <Search />
           <Message />
          </div>
      )
  }

}


export default Main;
