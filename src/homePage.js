import React, { Component } from 'react';


const authService = new AuthService();
class HomePage extends Component {
  constructor(props)  {
    super(props);
    this.state = {
      title:'Sample'
    };
    

  }

  

  render() {
    return (<div>
                
                  {this.props.children }
                 
            </div>
    );
  }

  componentDidMount() {
    console.log(this.props.children);
  }
}

export default HomePage;
