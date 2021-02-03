const lowerBtn = document.querySelector('.lowerBtn')
const upperBtn = document.querySelector('.upperBtn')
const output = document.querySelector('.result')
const textVal = document.querySelector('textarea')
const refreshBtn = document.querySelector('.refresh')

lowerBtn.addEventListener('click', () => convertToLower())
upperBtn.addEventListener('click', () => convertToUpper())
refreshBtn.addEventListener('click', () => refreshPage())

function convertToLower(){
   const val = textVal.value
   let strArr = val.toLowerCase().split(' ')

   for(let i=0; i < strArr.length; i++){
      strArr[i] = strArr[i].substring(0, 1)
      .toLowerCase() + 
      strArr[i].substring(1).toLowerCase()
   }
   const result = strArr.join(' ')

   output.innerHTML += result
   
}

function convertToUpper(){
   const val = textVal.value
   let strArr = val.toLowerCase().split(' ')

   for(let i=0; i < strArr.length; i++){
      strArr[i] = strArr[i].substring(0, 1)
      .toUpperCase() + 
      strArr[i].substring(1).toUpperCase()
   }

   const result = strArr.join(' ')

   output.innerHTML += result
}

function refreshPage(){
   output.innerHTML = ''
   textVal.value = ''
}