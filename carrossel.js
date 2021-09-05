var img = document.getElementById('img')
var count = 1
function next(){''   
    if(count < 4){
       count++;
       img.src = `images/${count}.jpg`
    } else {
       count = 1;
       img.src = `images/${count}.jpg`
    }      
}

function prev(){  
    if(count <= 1){
        count = 5;
    }
    count--
    img.src = `images/${count}.jpg`  
}

function cor(){
    switch(count){
        case 1:
            document.body.style.backgroundColor="#f8c291"
            document.getElementById('h1').style.color = "#000"
            break
        case 2:
            document.body.style.backgroundColor="#f9ca24"
            document.getElementById('h1').style.color = "#000"
            break
        case 3:
            document.body.style.backgroundColor="#4b6584"
            document.getElementById('h1').style.color = "#000"
            break
        case 4:
            document.body.style.backgroundColor="#130f40"
            document.getElementById('h1').style.color = "#fff"
            break
    }
}