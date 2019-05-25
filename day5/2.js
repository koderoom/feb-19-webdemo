
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

    parentBlock.prepend(newBlock);

    // clear the box;
    $("#postid").val("");
}


/** POSTING AN IMAGE */
function postImage() {
    console.log("POST IMAGE LOGIC");

    let fileElement = document.querySelector("#fileId1");
    let uploadFile = fileElement.files[0];

    // MAKE A PROPER URL WITH THE UPLOADED IMAGE
    let uploadFileAsURL = URL.createObjectURL(uploadFile);


    // TEMP OPERATION : CHANGE THE EXISTING IAMGE
    /*let imgElem = document.querySelector("img");
    imgElem.src = uploadFileAsURL;*/

    let imgRef = document.querySelector("#imgRefBlockId");
    let newImgBlock = imgRef.cloneNode(true);

    // chagne the source of image :: new block
    newImgBlock.children[0].children[0].src = uploadFileAsURL;

    // Attach the new block with parent;
    let parent = document.querySelector("#blockParent");
    parent.insertBefore(newImgBlock, parent.firstChild);
}


/** POST VIDEO */
function postVideo() {
    console.log("POST VIDEO LOGIC");

    let fileElement = document.querySelector("#fileId2");
    let videoFile = fileElement.files[0];

    let videoFileAsURL = URL.createObjectURL(videoFile);

    // CREAT DYNAMIC BLOCK :: USING REFERNCE VIDEO BLOCK
    let refBlock = document.querySelector("#videoRefBlockId");
    let newBlock = refBlock.cloneNode(true);

    newBlock.children[0].children[0].children[0].src = videoFileAsURL;


    // APPEND TO THE PARENT BLOCK
    let parent = document.querySelector("#blockParent");
    parent.insertBefore(newBlock, parent.firstChild);

}