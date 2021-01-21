const InvoiceRepository = require('../repositories/invoiceRepository');
const CreateInvoice = require('../domain/useCases/CreateInvoice');
const GenericPresenter = require('../presenters/genericPresenter');

class InvoiceController {

  /**
   * 
   * @param {*} req 
   * @param {*} res 
   */
  post(req, res) {
    const createInvoice = this.buildCreateInvoice(res);

    createInvoice.execute(req.body)
  }

  /**
   * 
   * @param {*} res 
   */
  buildCreateInvoice(res) {
    const persistence = new InvoiceRepository();
    const presenter = new GenericPresenter(res);
    
    return new CreateInvoice(presenter, persistence);
  }

}


module.exports = InvoiceController;