//problem 1
function calculateMoney(ticketSale){
const perTicketPrice=120;
const payToGuard=500;
const numberOfStaff=8;
const lunchCostPerStaff=50;
const totalCost=payToGuard+numberOfStaff*lunchCostPerStaff;

if(typeof ticketSale!=='number'||ticketSale<0){
    return `number of ticket sale should be non-negative integer.`;
}
else{
    const totalTicketSale=ticketSale*perTicketPrice;
    const profit=totalTicketSale-totalCost;
    return profit;
}
}

// const p=calculateMoney(-130);
// console.log(p);

//problem 2
function checkName(name){
    if(typeof name!=='string'){
        return `Name should be a string.`
    }
    else {
        const names=name.toLowerCase(name).split('');
        const l=names.length-1;
        if(names[l]==='a'||names[l]==='y'||names[l]==='i'||names[l]==='e'||names[l]==='o'||names[l]==='u'||names[l]==='w'){
            return `Good name.`;
        }
        else{
            return `Bad name.`;
        }

    }
}
// const nam=checkName(['Rashed']);
// console.log(nam);

//problem 3
function deleteInvalids(array){
    if(!Array.isArray(array)){
        return `Provide an array.`
    }
    else{
        const arr=[];
        for(const element of array){
            if(typeof element=='number' && isNaN(element)===false){
                arr.push(element);
            }
        }
        return arr;
    }
}

const arr=deleteInvalids(["1",{num:2},NaN,'roman',false,0]);
console.log(arr);