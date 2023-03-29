function scuberGreetingForFeet(distance){
  let charge
  if (distance <= '400'){
    charge = 'This one is on me!'
    return charge 
  } else if (distance > '2000'){
    charge = 'I will gladly take your thirty bucks.'
    return charge
  } else if (distance > '2500'){
    charge = 'No can do'
    return charge
  }
    
  }

  /*function scuberGreetingForFeet(distance){
    let charge
    if (distance >= '2000'){
      charge = 'I will gladly take your thirty bucks.'
      return charge 
    }
      
    }*/



function ternaryCheckCity(city){
  
  city = NYC? 'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(tip){
  let response;
  if(tip==='generous'){
    response='Thank you so much.'
  } else if(tip!=='generous'){
    response='Thank you.'
  } else response='Bye'
}