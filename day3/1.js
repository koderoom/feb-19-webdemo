console.log("Hello Script!!!");

let counter = 0;

/** Change the background of header */
function changeHeaderBackground() {
    let colorList = ['gold', 'pink'];

    let color;
    if(counter % 2) {
        color = colorList[0];
    } else {
        color = colorList[1];
    }

    let div1 = document.getElementById("div1");
    div1.style.background = color;
    
    // UPDAT THE CHILD NODE COLOR/ FONT SIZE
    let chidl1 = div1.children[0];
    chidl1.style.color = 'black';
    chidl1.style.fontFamily = 'cursive';

    counter++;
}

function addMoreBlock() {
    console.log("Hello Function");
}