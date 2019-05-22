

let counter = 0;
setInterval(()=> {
    let img1 = document.getElementById('img1');
    
    if(counter % 2 == 0) {
        img1.style.borderColor = 'gold';
    } else {
        img1.style.borderColor = 'forestgreen';
    }
    
    counter++;
}, 1000)