const InvoicePersistence = require('../domain/gateways/invoicePersistence');

class InvoiceRepository extends InvoicePersistence {

  /**
   * Save an invoice in the db
   * 
   * @param {Invoice} invoice 
   */
  async save(invoice) {
    console.log(JSON.stringify(invoice));
  }

}

module.exports = InvoiceRepository;