import React from 'react';
import Search from './Search';

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
          </div>
      )
  }

}


export default Main;
