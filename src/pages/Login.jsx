import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Login extends React.Component{
  render(){
    const { user } = this.props;
    return(
      <>
        <form action="">
          <section>
            <label htmlFor="e-mail">Usuário/E-mail
              <input type="text" name="" id="e-mail"/>
            </label>
            <label htmlFor="password">Senha
              <input type="email" name="" id="password"/>
            </label>
          </section>
          <button type='button' onClick={ () => user }>Entrar</button>
        </form>
        <Link to='/'>voltar</Link>
      </>

    );
  }
}

const mapDispatchToProps = (dispatch) => ({ // escrever dados / alterar na store
  userAction: (user) => dispatch(
    user(),
  ),
});


export default connect(null, mapDispatchToProps)(Login);
