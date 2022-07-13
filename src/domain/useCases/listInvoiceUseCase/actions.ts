import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  // View actions
  listInvoice: ['refresh'],
  // Reducer
  listInvoiceRequest: null,
  listInvoiceSuccess: null,
  listInvoiceFailure: ['error'],
});

export { Creators, Types };
