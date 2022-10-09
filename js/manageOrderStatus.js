let manageOrderStatus = async (orderId)=>{
    //Part 1 - defining promises with functions
    let requiredStatusSpan = document.getElementById(orderId);
    
const chefReceivedOrder = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            requiredStatusSpan.innerText = 'Chef started preparing';
            resolve();
        }, 2000);
    })   
}

const pizzaSauceAdded = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            requiredStatusSpan.innerText = 'Pizza Sauce added';
            resolve();
        },10000);
    })
}

const firstLayerOfCheeseAdded = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            requiredStatusSpan.innerText = 'First layer of cheese added';
            resolve();
        },5000)
    })
}

const toppingsAdded = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            requiredStatusSpan.innerText = "toppings added";
            resolve();
        }, 12000);
    })    
}

const secondLayerOfCheeseAdded = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            requiredStatusSpan.innerText = 'Second layer of cheese added';
            resolve();
        }, 5000);  
    })
}

const pizzaBaked = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            requiredStatusSpan.innerText = 'Pizza baked!';
            resolve();
        }, 15000);
    })   
}

const oreganoAddedAndPacked = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            requiredStatusSpan.innerText = 'Oregano added and packed';
            resolve();
        }, 8000);
    })   
}

const packageReceivedAtCounter = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            requiredStatusSpan.innerText = 'Package received at counter';
            resolve();
        }, 2000);
    })
}


//part 2 - handling promises

    
    chefReceivedOrder()
    .then(pizzaSauceAdded)
    .then(firstLayerOfCheeseAdded)
    .then(toppingsAdded)
    .then(secondLayerOfCheeseAdded)
    .then(pizzaBaked)
    .then(oreganoAddedAndPacked)
    .then(packageReceivedAtCounter)
    .then(()=>{
        console.log('The order is ready!');
    }).catch((err)=> console.error(err));


}