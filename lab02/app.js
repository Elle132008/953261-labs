// 953261 Lab 2 — Kad Café daily report
// Run:  npm start
import { menu } from "./data/menu.js";
import { orders } from "./data/orders.js";
import {
    menuLine,
    orderTotal,
    averageOrder,
    countAvailableItems
} from "./src/cafe.js";

console.log("=== Kad Café menu ===");
menu.forEach((item) => console.log(menuLine(item)));

console.log("\n=== Today's orders ===");
orders.forEach((order) => {
    const total = orderTotal(order, menu);
    console.log(`${order.id} ${order.customer} — ${total} THB`);
});

console.log("\n=== Summary ===");
const totalSales = orders.reduce((sum, order) => {
    return sum + orderTotal(order, menu);
}, 0);

const average = averageOrder(orders, menu);

console.log(`Number of orders: ${orders.length}`);
console.log(`Total sales: ${totalSales} THB`);
console.log(`Average order: ${average} THB`);

console.log("\n=== Extra information ===");
console.log(`Available menu items: ${countAvailableItems(menu)}`);