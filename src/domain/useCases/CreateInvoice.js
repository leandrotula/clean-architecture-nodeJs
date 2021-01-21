const Invoice = require('../entities/invoice');

class CreateInvoice {

  constructor(presenter, invoicePersistence) {
    this.presenter = presenter;
    this.invoicePersistence = invoicePersistence;
  }

  async execute(request) {
    const invoice = this.buildInvoice(request);  

    try {
      this.validate(invoice);

      await this.invoicePersistence.save(invoice);

      this.success(invoice);
    } catch (e) {
      this.badRequest(e);
    }
  }

  success(invoice) {
    const response = this.format(invoice);

    this.presenter.present(200, response);
  }

  validate(invoice) {
    invoice.validateAmount();
    invoice.validateDueDate();
    invoice.validateClientId();
  }

  badRequest(e) {
    const error = {
      status: 400,
      error: 'bad_request',
      message: e.message
    }

    this.presenter.present(400, error);
  }

  buildInvoice(request) {
    const id = this.generateId(request);
    const status = 'created';
    return new Invoice(id, request.clientId, request.amount, request.dueDate, status);
  }

  format(invoice) {
    return {
      id: invoice.id,
      client_id: invoice.clientId,
      expiration_info: [
        {
          date: invoice.dueDate,
          amount: invoice.amount
        }
      ],
      status: invoice.status,
      date_created: invoice.created,
      last_updated: invoice.updated,
    };
  }

  generateId(invoice) {
    return '';  
  }
}

module.exports = CreateInvoice;