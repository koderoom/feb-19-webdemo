
/** POST USING DOCUMENT OBJECT */
function postHere() {
    let parent = document.querySelector("#blockParent");

    let refBlock = parent.children[0];

    let newBlock = refBlock.cloneNode(true);

    // READ INPUT
    let postElement = document.querySelector("#postid");
    let postValue = postElement.value;

    // ADD THE VALUE TO NEW BLOCK
    newBlock.children[0].innerHTML = postValue;

    // ADDING NEW BLOCK
    parent.insertBefore(newBlock, parent.firstChild);

    // clear the box;
    postElement.value = "";
}


function postHereUsingJQuery() {
    let parentBlock = $("#blockParent");

    // GET FIRST CHILD :: REF BLOCK
    let refBlock = parentBlock.children().first();

    // CREATE NEW BLOCK
    let newBlock = refBlock.clone(true);
    let postValue = $("#postid").val();
    newBlock.children().first().html(postValue);

    parentBlock.append(newBlock);

    // clear the box;
    $("#postid").val("");
}