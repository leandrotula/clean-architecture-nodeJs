const Presenter = require('../domain/boundaries/presenter')

class GenericPresenter extends Presenter {
  constructor(res) {
    this.res = res;
  }

  /**
   * Send a response to the client
   * 
   * @param {number} code 
   * @param {Object} request 
   */
  present(code, request) {
    this.res.status(code);
    this.res.send(request);
  }
}


module.exports = GenericPresenter;