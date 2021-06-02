import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component{
  render(){
    return(
      <>
        <header>
          <h1>Minha Página Incial</h1>
        </header>
        <Link to='/login'>página de login</Link>
      </>
    );
  }
}

export default Home;
