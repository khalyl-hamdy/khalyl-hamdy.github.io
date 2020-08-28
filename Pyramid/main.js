
let layers= prompt ('Give the number of your Pyramid layers?')

console.log ("number of layers: "+layers)
//isNaN() to check if the input is valid number 
if (isNaN(layers)){
  console.log("Please reaload and give a number")
} else {
  if (0<layers && layers<=25) {
    for (let i=0 ; i<layers ; i++){
        let spaces = ' '.repeat(layers-i)
        let pyramide= "#".repeat (2*i+1)
      console.log (spaces+pyramide)
    }
  }else {
    console.log ('Reload & Try a number greater than 0 less than 25 !')
  }
}
