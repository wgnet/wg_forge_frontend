import Table from './components/table.js';

import orders from '../data/orders.json';
import users from '../data/users.json';
import companies from '../data/companies.json';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default (function () {
  const app = document.getElementById('app');

  const container = document.createElement('div');
  container.classList.add('container-fluid');
  app.appendChild(container);

  const table = new Table([
    'Transaction ID',
    'User Info',
    'Order Date',
    'Order Amount',
    'Card Number',
    'Card Type',
    'Location'
  ], container);

  orders.forEach(v => {
    table.addRow(v);
  });
}());
