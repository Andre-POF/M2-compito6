let myH1 = () => {
    let mainTitle = document.getElementById("companyName");
    mainTitle.innerText = "Qualcos'altro!";
}

myH1();

let myBody = () => {
    let main = document.getElementById("mainBody");
    main.style.backgroundColor = "green";
}

//myBody();

let addressChange = () => {
    let add1 = document.getElementById("address");
    add1.innerText = "Via dei campi di calcetto. 81002, Napoli - IT";
}

addressChange();

let addClass = () => {
    let productLink = document.getElementsByTagName("a");
    for (let i = 0; i<productLink.length; i++) {
        productLink[i].classList.add("newClass");
    }  
}

addClass();

let visible = () => {
    let images = document.getElementsByTagName("img");
    for (let i = 0; i<images.length; i++) {
        images[i].classList.toggle("onOff");
    }
}

visible();



let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

let changeColor = () => {
    let allPrices = document.getElementsByClassName("price");
    // console.log(allPrices);
    for (let i = 0; i<allPrices.length; i ++) {
        allPrices[i].style.color = randomColor;
    }
}

changeColor();





