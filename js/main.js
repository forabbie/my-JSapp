// import {boom} from './greet.js'
import boom from './greet.js'
import {goodMorning, goodAfternoon } from './greetings.js'

window.addEventListener("load", () => {
  
  const person = {
    first_name: "Jade",
    last_name: "West",
    email: "jade@philippinedev.com"
  }
  console.log(boom(person))
  console.log(goodMorning(person))
  console.log(goodAfternoon(person))
});
