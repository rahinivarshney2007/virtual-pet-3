function addfeed(){

   dog.scale=0.15
    foodS++
    database.ref("/").update({
    food:foodS

})
    

 
    
}

function feed(){
    if(foodS>0){
        foodS=foodS-1;
       }
    //foodS--
    database.ref("/").update({
        food:foodS
    })
    dog.addImage(dogImg1)
}