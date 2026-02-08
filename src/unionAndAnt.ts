let subs: number | string = '1M'

let apiRequestStatus: 'pending' | 'success' | 'error' = "pending" 
apiRequestStatus = "success"

let airlineseat: 'aisle' | 'window' | 'middle' = 'middle';
airlineseat = 'window'

const orders = ['12', '20', '28', '42'];

// let currentorder; // showing type any -> any type me ts off
let currentorder: string | undefined;

for (let order of orders) {
    if (order === "28") {
        currentorder = order;
        break;
    }
    currentorder = '11'
}

// currentorder = 42 // because we can do not because its is of any type

console.log(currentorder) // showing type string | undefined