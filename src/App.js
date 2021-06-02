// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import './App.css';
// import Home from './pages/Home';
// import Login from './pages/Login';

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Switch>
//           <Route exact path='/' component={ Home }/>
//           <Route exact path='/login' component={ Login }/>
//         </Switch>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import store from './store';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Clients from './pages/Clients';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/clients" component={Clients} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
