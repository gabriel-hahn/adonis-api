'use strict'

class ForgotPassword {
  get validadeAll () {
    return true
  }

  get rules () {
    return {
      email: 'required|email',
      redirect_url: 'required|url'
    }
  }
}

module.exports = ForgotPassword
