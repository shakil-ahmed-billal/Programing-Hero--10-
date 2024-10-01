const myScore = 60 ;
const friendScore = 30 ;


if (myScore >= 80){
    if(friendScore >= 80){
        console.log('go for a lunch');
    }
    else{
        if(friendScore >= 60){
            console.log('Good luck next time');
        }
        else{
            if(friendScore >= 40){
                console.log('keep your friend message unseen');
            }
            else{
                console.log('Block your Friend');
            }
        }
    }
}
else{
    console.log('Basai giya koste gumaiya porbo');
}