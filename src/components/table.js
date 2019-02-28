export default class Table {

  constructor(headers, container) {
    this.el = document.createElement('table');
    this.el.className = 'table table-striped';

    const headerRow = this.el.createTHead().insertRow();
    for (let i = 0; i < headers.length; i++) {
      headerRow.insertCell().textContent = headers[i];
    }

    this.tbody = document.createElement('tbody');
    this.el.appendChild(this.tbody);

    container.appendChild(this.el);
  }

  addRow(order) {
    const newRow = this.tbody.insertRow();
    newRow.setAttribute('id', `order_${order.id}`);

    const orderDate = new Date(+order.created_at * 1000);
    const printDate = orderDate.toLocaleString().replace(',', '');

    const printCardNumber = order.card_number.split('').fill('*', 2, -4).join('');

    newRow.insertAdjacentHTML('beforeend', `
      <td>${order.transaction_id}</td>
      <td class="user_data">${order.user_id}</td>
      <td>${printDate}</td>
      <td>$${order.total}</td>
      <td>${printCardNumber}</td>
      <td>${order.card_type}</td>
      <td>${order.order_country} (${order.order_ip})</td>
    `);
  }
}
