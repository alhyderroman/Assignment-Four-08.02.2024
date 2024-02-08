//Assignment 4
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

// const arr=deleteInvalids(["1",{num:2},NaN,'roman',false,0]);
// console.log(arr);

//problem-4:

function password(obj){
    const allKey=Object.keys(obj);
    const year=String(obj.birthYear);
    if(!allKey.includes('name','birthYear','siteName')||typeof obj.name!=='string'||typeof obj.birthYear!=='number'||
     year.length!==4 || typeof obj.siteName!=='string'){
       return `Invalid`;
    }
    else{
       const str1=obj.name;
       const str2=obj.birthYear;
       const str3=obj.siteName.slice(0,1).toUpperCase()+obj.siteName.slice(1);
       return str3+'#'+str1+'@'+str2;
    }
}


// console.log(password({name:"Kolimuddin",birthYear:1990,siteName:'Facebook'}));

//Problem-5
function monthlySavings(arr,livingCost){
    if(!Array.isArray(arr)||typeof livingCost!=='number'){
        console.log('Invalid Input')

    }
    else{
        let totalPayment=0;
        let taxDeduction=0;
        for(const element of arr){
            totalPayment=totalPayment+element;
            if(element>=3000){
                taxDeduction=taxDeduction+element*0.2;
            }
        }
        const savings=totalPayment-taxDeduction-livingCost;
        if(savings>=0){
            return savings;
        }
        else{
            return `earn more`
        }
        
        }
    }



// const total=monthlySavings(100,[900,2700,3400]);
// console.log(total);