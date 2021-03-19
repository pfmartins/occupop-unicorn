import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import logo from '../assets/cmc.png'
import './Login.css'
import NeedHelp from '../components/NeedHelp'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [showHelp, setShowHelp] = useState(false)
  const [alertSucess, setAlertSuccess] = useState(false)
  const [alertError, setAlertError] = useState(false)
  const [loginData] = useState({ user: 'paulo@email.com', pass: 'oluap' })

  useEffect(() => {
    localStorage.setItem('_cmc_login_data', JSON.stringify(loginData))
  }, [loginData])

  const validateForm = () => email.length > 0 && password.length > 0

  const executeAuth = (formData) => {
    const { emailForm, passwordForm } = formData
    const { user, pass } = JSON.parse(localStorage.getItem('_cmc_login_data'))
    return !(emailForm.value === user && passwordForm.value === pass)
  }

  const resetForm = (evt) => {
    evt.preventDefault()
    setLoading(true)
    setAlertSuccess(false)
    setAlertError(false)
  }

  const fetchAuthResource = (hasError) => {
    setTimeout(() => {
      setLoading(false)

      if (hasError) {
        setAlertError(true)
        return
      }

      setAlertSuccess(true)
    }, 1500)
  }

  const handleSubmit = (evt) => {
    resetForm(evt)
    fetchAuthResource(executeAuth(evt.target))
  }

  const onShowHelp = (show) => setShowHelp(show)
  const onCloseShowHelp = () => setShowHelp(false)

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__logo">
          <img src={logo} alt="logo clean my car" />
          <p>
            India&apos;s first waterless <br />
            car cleaning company
          </p>
        </div>

        <div className="login__form">
          <div
            onClick={() => onShowHelp(true)}
            className="login__form-link login__form-link--need-help"
          >
            Need help?
          </div>
          <Form onSubmit={handleSubmit}>
            <div className="login__form-title">Log in</div>
            <div className="login__form-alert">
              {alertSucess && (
                <Alert variant="success">Login successful, welcome!</Alert>
              )}
              {alertError && (
                <Alert variant="danger">
                  Ops, something went wrong. <br />
                  Check email and password fields.
                </Alert>
              )}
            </div>
            <Form.Group size="lg" controlId="email">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                autoFocus
                placeholder="joseph@email.com"
                autoComplete="username"
                type="email"
                name="emailForm"
                value={email}
                data-testid="input-email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={password}
                autoComplete="current-password"
                name="passwordForm"
                data-testid="input-pass"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div
                onClick={() => onShowHelp(true)}
                className="login__form-link login__form-link--forgot-pass"
              >
                <Link to="forgot-password" className="btn btn-link">
                  Forgot password?
                </Link>
              </div>
            </Form.Group>
            <Button
              data-testid="login-button"
              block
              size="lg"
              type="submit"
              disabled={!validateForm()}
            >
              {!loading && !alertSucess && 'Login'}
              {loading && <i className="fa fa-circle-o-notch fa-spin" />}
              {!loading && alertSucess && <i className="fa fa-check" />}
            </Button>
          </Form>
        </div>
      </div>

      <NeedHelp show={showHelp} onClose={onCloseShowHelp} />
    </div>
  )
}

export default Login
