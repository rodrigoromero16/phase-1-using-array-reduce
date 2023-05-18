const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const reducer = (accumulator, num) => {
    let  total = num
    return accumulator+= total
}

let totalBatteries = batteryBatches.reduce(reducer,0)
// Code your solution here
