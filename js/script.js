let numberOfOrders = 0;

const manageOrder = () => {

    numberOfOrders++;
    let todaysDate = new Date();
    let orderId = `PB${todaysDate.getFullYear()}${todaysDate.getMonth()+1}${todaysDate.getDate()}00${numberOfOrders}`;

    if(numberOfOrders>9){
        orderId = `PB${todaysDate.getFullYear()}${todaysDate.getMonth()+1}${todaysDate.getDate()}0${numberOfOrders}`;
    }

    createOrderCard(orderId);
    
    manageOrderStatus(orderId);

}

