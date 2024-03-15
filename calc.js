const billInput=document.getElementById('billTotalInput')
const tipInput=document.getElementById('tipInput')
const numberOfPeopleDiv=document.getElementById('numberOfPeople')
const perPersonTotaldiv=document.getElementById('perPersonTotal')

let  numberOfPeople=Number(numberOfPeopleDiv.innerText)

const calculateBill=()=>{
    const bill=Number(billInput.value)
    const tipPercentage=Number(tipInput.value)/100
    const tipAmount=bill*tipPercentage
    const  total=bill+tipAmount
    const perPersonTotal=total/numberOfPeople
    perPersonTotaldiv.innerText=`$${perPersonTotal.toFixed(2)}`

}

const increasePeople=()=>{
    numberOfPeople+=1
    numberOfPeopleDiv.innerText=numberOfPeople
    calculateBill()
}

const decreasePeople=()=>{

 if(numberOfPeople<=1){
    alert('hey you cannot have less than one person')
    return
 }
    numberOfPeople-=1
    numberOfPeopleDiv.innerText=numberOfPeople
    calculateBill()
}