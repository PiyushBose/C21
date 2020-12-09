
// collision 
function isTouching(object1,object2){

    if(object1.x-object2.x <= object1.width/2 + object2.width/2&&
      object2.x-object1.x <= object1.width/2 + object2.width/2&&
      object1.y-object2.y <= object1.height/2 + object2.height/2&&
      object2.y-object1.y <= object1.height/2 + object2.height/2){
     
        return true;
  
    }
    else{
    
      return false;
    }
  
  }
  // bounceOff
  function bounceOff(fix,mov){
    if(fix.x-mov.x <= fix.width/2 + mov.width/2&&
      mov.x-fix.x <= fix.width/2 + mov.width/2){
          mov.velocityX = mov.velocityX * -1;
          fix.velocityX = fix.velocityX * -1;
      }
      
      if(fix.y-moving.y <= fix.height/2 + mov.height/2&&
      mov.y-fix.y <= fix.height/2 + mov.height/2){
           mov.velocityY *= -1;
           fix.velocityY *= -1;
      }
  }