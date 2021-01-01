function bounceOff(object1, object2){
    if(object1.x-object2.x<=(object1.width+object2.width)/2
    && object2.x-object1.x<=(object1.width+object2.width)/2){
      object1.velocityX=-(object1.velocityX);
      object2.velocityX=-(object2.velocityX);
    }
    if(object1.y-object2.y<=(object1.height+object2.height)/2
    && object2.y-object1.y<=(object1.height+object2.height)/2){
      object1.velocityY=-(object1.velocityY);
      object2.velocityY=-(object2.velocityY);
    }
  }
  
  function isTouching(object1, object2){
    if(object1.x-object2.x<=(object1.width+object2.width)/2
    && object2.x-object1.x<=(object1.width+object2.width)/2
    && object2.y-object1.y<=(object1.height+object2.height)/2
    && object1.y-object2.y<=(object1.height+object2.height)/2){
     return true;
    }
    else{
      return false;
    }
  }