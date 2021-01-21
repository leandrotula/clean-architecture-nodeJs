/**
 * @typedef {import('../entities/Invoice')} Invoice
 */
class InvoicePersistence {

  /**
   * 
   * @param {Invoice} invoice 
   */
  async save(invoice) {
    throw Error('Method not implemented');
  }

}

module.exports = InvoicePersistence;