// import React from 'react';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

// class Login extends React.Component{
//   render(){
//     const { user } = this.props;
//     return(
//       <>
//         <form action="">
//           <section>
//             <label htmlFor="e-mail">Usuário/E-mail
//               <input type="text" name="" id="e-mail"/>
//             </label>
//             <label htmlFor="password">Senha
//               <input type="email" name="" id="password"/>
//             </label>
//           </section>
//           <button type='button' onClick={ () => user }>Entrar</button>
//         </form>
//         <Link to='/'>voltar</Link>
//       </>

//     );
//   }
// }

// const mapDispatchToProps = (dispatch) => ({ // escrever dados / alterar na store
//   userAction: (user) => dispatch(
//     user(),
//   ),
// });


// export default connect(null, mapDispatchToProps)(Login);

import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  render() {
    const { email, password } = this.state;
    return (
      <div>
        <div>
          <input
            type="text"
            onChange={e => this.setState({ email: e.target.value })}
            placeholder="email"
          />
          <input
            type="password"
            onChange={e => this.setState({ password: e.target.value })}
            placeholder="senha"
          />
        </div>
        <Link
          to="/clients"
          onClick={() => this.props.login({ email, password })}>
          Entre
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: e => dispatch(login(e))});

export default connect(null, mapDispatchToProps)(Login);