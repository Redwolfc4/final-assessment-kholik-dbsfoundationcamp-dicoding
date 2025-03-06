// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// TODO: buatlah variabel yang menampung data orders
let orders = [];

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
  const order = {
    id: generateUniqueId(),
    customerName,
    items,
    totalPrice: items.reduce((total, item) => total + item.price, 0),
    status: "Menunggu",
  };
  orders.push(order);
}

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
  // cek id unique yang akan diubah
  const order = orders.find((order) => order.id === orderId);
  // cek order
  if (order) {
    order.status = status;
  }

  return;
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  const order = orders.filter((order) => order.status === "Selesai");
  return order.reduce((total, order) => total + order.totalPrice, 0);
}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  const order = orders.find((order) => order.id === id);
  if (order) {
    orders = orders.filter((order) => order.id !== id);
  }
}

export {
  orders,
  addOrder,
  updateOrderStatus,
  calculateTotalRevenue,
  deleteOrder,
};
