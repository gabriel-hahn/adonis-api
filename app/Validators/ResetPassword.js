'use strict'

class ResetPassword {
  get validadeAll () {
    return true
  }

  get rules () {
    return {
      token: 'required',
      password: 'required'
    }
  }
}

module.exports = ResetPassword
