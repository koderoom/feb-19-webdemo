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
    
    let superContainer = document.getElementById('parent');
    let parentContainer = superContainer.children[1];

    let refBlock = parentContainer.children[0];

    let newBlock = refBlock.cloneNode(true);
    let d1 = new Date();
    newBlock.innerHTML = d1.toUTCString();

    // ADDING NEW OBJECT AS CHILD TO PARENT CONTAINER
    
    // ADD TO THE END 
    // parentContainer.appendChild(newBlock);

    // ADD TO THE BEGIN
    parentContainer.insertBefore(newBlock, parentContainer.firstChild);
}

function addMoreBlock1() {
    
    let superContainer = document.getElementById('parent');
    let parentContainer = superContainer.children[1];

    // NEW OBJECT;
    /*let newObject = `
        <div class="make-center beautify" style="margin:2px; background: tomato; height: 150px; border-radius: 5px;">
            CDAC
        </div>
    `;*/

    let newObject  = document.createElement('div');
    newObject.setAttribute("class", "make-center beautify")
    newObject.setAttribute("style", "margin:2px; background: tomato; height: 150px; border-radius: 5px;");
    newObject.innerHTML = "CDAC";


    // ADDING NEW OBJECT AS CHILD TO PARENT CONTAINER
    parentContainer.appendChild(newObject);
}

/** NORMAL DOCUMENT OBJECT  */
function postHere() {
    let superContainer = document.getElementById('parent');
    let parentContainer = superContainer.children[1];

    let refBlock = parentContainer.children[0];
    let newBlock = refBlock.cloneNode(true);

    // READ INPUT
    let postId = document.getElementById('postid');
    let postValue = postId.value;

    // ADD VALUE TO NEW BLOCK
    newBlock.innerHTML = postValue;

    // ATTACH TO PARENT
    parentContainer.insertBefore(newBlock, parentContainer.firstChild);

    // AFTER ALL DONE
    postId.value = "";

}


function postHereUsingJQuery() {
    let parentBlock = $("#parent").children().first().next();

    let refBlock = parentBlock.children().first();
    let newBlock = refBlock.clone(true);

    newBlock.html("NEW BLOCK");

    parentBlock.append(newBlock);
}