const moment = require('moment');

class Invoice {
  constructor(id, clientId, amount, dueDate, status, customerName, customerId) {
    this.id = id;
    this.clientId = clientId;
    this.amount = amount;
    this.dueDate = dueDate;
    this.status = status;
    this.customerName = customerName;
    this.customerId = customerId;
    this.created = moment().format();
    this.updated = moment().format();
  }

  /**
   * Validate if the amount of the invoice is correct
   * 
   * @throws Error
   */
  validateAmount() {
    if (!this.amount) {
      throw Error('Invalid amount');
    }
  }

  /**
   * Validate if the due_date of the invoice is correct
   * 
   * @throws Error
   */
  validateDueDate() {
    if (!request.dueDate) {
      throw Error('Invalid due_date');
    }
  }

  /**
   * Validate if the client_id of the invoice is correct
   * 
   * @throws Error
   */
  validateClientId() {
    if (!request.clientId) {
      throw Error('Invalid clientId');
    }
  }
}

module.exports = Invoice;