import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Login from './views/Login'
import ForgotPassword from './views/ForgotPassword'

function App() {
  return (
    <div data-testid="app-container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/login" />} />
          <Route path="/login" exact component={Login} />
          <Route path="/forgot-password" exact component={ForgotPassword} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
