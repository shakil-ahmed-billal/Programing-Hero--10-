//option 1 ; direct set on the html

// Option 2 : one click function
function makeRed() {
  document.body.style.backgroundColor = "red";
}

//option 3 : one click funtion
function makeRed() {
  document.body.style.backgroundColor = "red";
}
const makeBlueButton = document.getElementById("make-blue");
makeBlueButton.onclick = makeBlue;
function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

// option 3 anther onclick
const purple = document.getElementById("make-purple");
purple.onclick = function makePurple() {
  document.body.style.backgroundColor = "purple";
};


//option 4: addeventlistener 
const pinkButton = document.getElementById('make-pink');
        pinkButton.addEventListener('click', makePink)
        function makePink(){
            document.body.style.backgroundColor = 'pink';
        }

//option 4 anathe:
const makeGreen = document.getElementById('make-green')
        makeGreen.addEventListener('click',function makeGreen(){
            document.body.style.backgroundColor = 'green'
        })


//option 4 final.....!importent
document.getElementById('make-goldenrod').addEventListener('click',function(){
    document.body.style.backgroundColor = 'goldenrod'
})