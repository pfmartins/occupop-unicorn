import React, { useState } from 'react'
import { Button, Form, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../assets/cmc.png'
import './Login.css'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [alertSucess, setAlertSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const resetForm = (evt) => {
    evt.preventDefault()
    setLoading(true)
    setAlertSuccess(false)
  }

  const fetchAuthResource = () => {
    setTimeout(() => {
      setLoading(false)
      setAlertSuccess(true)
    }, 1500)
  }

  const handleSubmit = (evt) => {
    resetForm(evt)
    fetchAuthResource()
  }

  const validateForm = () => email.length > 0

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__logo">
          <img src={logo} alt="logo clean my car" />
        </div>

        <div className="login__form">
          <div className="login__form-link login__form-link--need-help">
            <Link to="login" className="btn btn-link">
              Login
            </Link>
          </div>
          <Form onSubmit={handleSubmit}>
            <div className="login__form-title">
              Hey, before send check your notes! <br /> Maybe you dont forgot..
            </div>
            <div className="login__form-alert">
              {alertSucess && (
                <Alert variant="success">Email sended. Check your inbox.</Alert>
              )}
            </div>
            <Form.Group size="lg" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                autoFocus
                placeholder="Please, input your e-mail"
                autoComplete="username"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Button block size="lg" type="submit" disabled={!validateForm()}>
              {!loading && !alertSucess && 'Send'}
              {loading && <i className="fa fa-circle-o-notch fa-spin" />}
              {!loading && alertSucess && <i className="fa fa-check" />}
            </Button>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
