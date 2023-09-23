#!/usr/bin/node
import { data } from './data.js';

function getChildAbilities(fatherAbility, motherAbility) {
    if (data[motherAbility] && data[motherAbility][fatherAbility]) {
      const abilities = ['S+', 'S', 'A+', 'A', 'B+', 'B', 'C+', 'C', 'D+', 'D'];
      const childAbilities = data[motherAbility][fatherAbility];
      const childAbilitiesWithNames = {};
  
      for (let i = 0; i < abilities.length; i++) {
        childAbilitiesWithNames[abilities[i]] = childAbilities[i];
      }
  
      return childAbilitiesWithNames;
    } else {
      return null; 
    }
}
  
  
// const fatherAbility = 'A';
// const motherAbility = 'S+';
const childAbilities = getChildAbilities("S+", "A");
  
if (childAbilities) {
    console.log("Child's Abilities:");
    for (const ability in childAbilities) {
      console.log(`${ability}: ${childAbilities[ability]}`);
    }
} else {
    console.log('Invalid input. Please check mother and father abilities.');
}




