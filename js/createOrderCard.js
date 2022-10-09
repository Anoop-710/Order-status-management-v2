const createOrderCard = (orderId) => {
    let colDiv = document.createElement('div');                      
    let cardDiv = document.createElement('div');                      //Here card Div is the child of parent row
    let cardHeaderDiv = document.createElement('div');
    let orderIdSpan = document.createElement('span');
    let cancelButtonI = document.createElement('i');
    let cardBodyDiv = document.createElement('div');
    //let cardTitle = document.createElement('h5');
    let billTable = document.createElement('table');
    let billTableBody = document.createElement('tbody');
    let billTableRow1 = document.createElement('tr')
    let billTableRow1Data1 = document.createElement('td');
    let billTableRow1Data2 = document.createElement('td');
    let billTableRow1Data3 = document.createElement('td');

    let billTableRow2 = document.createElement('tr')
    let billTableRow2Data1 = document.createElement('td');
    let billTableRow2Data2 = document.createElement('td');
    let billTableRow2Data3 = document.createElement('td');

    let billTableRow3 = document.createElement('tr')
    let billTableRow3Data1 = document.createElement('td');
    let billTableRow3Data2 = document.createElement('td');
    let billTableRow3Data3 = document.createElement('td');
    //let cardText = document.createElement('p');
    let orderStatusSpan = document.createElement('span'); 
    let cardFooterDiv = document.createElement('div');
    
    
    colDiv.classList = 'col-md-3';                                    //Extract classes from html elements
    cardDiv.classList = 'card text-center';
    cancelButtonI.classList = 'fa-regular fa-circle-xmark cancel-btn';
    cardHeaderDiv.classList = 'card-header';
    cardBodyDiv.classList = 'card-body';
    //cardTitle.classList = 'card-title';
    billTable.classList = 'table';

   
    //cardText.classList = 'card-Text';
    orderStatusSpan.classList = 'badge rounded-pill bg-success';
    cardFooterDiv.classList = 'card-footer';
    
    let largePizzaCost = Math.ceil(Math.random()*10)+15;
    let mediumPizzaCost = Math.ceil(Math.random()*10)+10;

    billTableRow1Data1.innerText = '1';
    billTableRow2Data1.innerText = '2';
    billTableRow3Data1.innerText = 'Total';

    billTableRow1Data2.innerText = 'Large pizza';
    billTableRow2Data2.innerText = 'Medium pizza';
    billTableRow3Data2.innerText = `$${largePizzaCost+mediumPizzaCost}`;

    

    billTableRow1Data3.innerText = `$${largePizzaCost}`;
    billTableRow2Data3.innerText = `$${mediumPizzaCost}`;

    billTableRow3Data1.colSpan = '2';
    orderIdSpan.innerHTML = `Order No. ${orderId}`
    //cardTitle.innerHTML = `Bill Amount: $${Math.ceil(Math.random()*52)}`;
    
    //cardText.innerHTML = 'Large Pizza - 2 Nos <br> Medium Pizza - 3 Nos';
    orderStatusSpan.innerText = 'Order placed';
    orderStatusSpan.id = orderId;       //to manage status order
    cardFooterDiv.innerText = new Date().toLocaleString("en-US",{
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });
    
    
    cancelButtonI.addEventListener('click', ()=>{
        colDiv.style.display = 'none';
        document.getElementById('order-alert').style.display = 'block';

        setTimeout(()=>{
            document.getElementById('order-alert').style.display = 'none';
        },5000)
    })


    billTableRow1.append(billTableRow1Data1, billTableRow1Data2, billTableRow1Data3);
    billTableRow2.append(billTableRow2Data1, billTableRow2Data2, billTableRow2Data3);
    billTableRow3.append(billTableRow3Data1, billTableRow3Data2);
    billTableBody.append(billTableRow1, billTableRow2, billTableRow3);
    billTable.appendChild(billTableBody);
    cardBodyDiv.appendChild(billTable);
    //cardBodyDiv.appendChild(cardTitle);
    //cardBodyDiv.appendChild(cardText);
    cardDiv.appendChild(cardHeaderDiv);
    cardBodyDiv.appendChild(orderStatusSpan);
   
    cardHeaderDiv.appendChild(orderIdSpan);
    cardHeaderDiv.appendChild(cancelButtonI);
    cardDiv.appendChild(cardBodyDiv); 
    cardDiv.appendChild(cardFooterDiv);
    colDiv.appendChild(cardDiv);                                       //To append cardDiv as child of colDiv
    document.getElementById('order-cards-wrapper').appendChild(colDiv);
}