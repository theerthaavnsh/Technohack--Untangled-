let text = "We are here to untangle your mind!o"
let count = 0;


function type(){
    let heading = document.querySelector("#heading");
    heading.innerHTML += text[count]
    count++
    if(count+1 === text.length){
        heading.innerHTML =""
        count=0
    }
    setTimeout(type, 200);
}

type();