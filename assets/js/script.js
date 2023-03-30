fetch("./header.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("header").innerHTML = data;
    });

fetch("./footer.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("footer").innerHTML = data;
    });
function showImage() {
    (this)
    document.getElementById('liveimg').style.display = 'inline-block';
    document.getElementById('demoimg').style.display = 'none';
    $('.sec1-btn-2').removeClass('demoactive');
    $('.sec1-btn-1').removeClass('liveactive');
}
function showImage1() {
    document.getElementById('demoimg').style.display = 'inline-block';
    document.getElementById('liveimg').style.display = 'none';
    $('.sec1-btn-2').addClass('demoactive');
    $('.sec1-btn-1').addClass('liveactive');
}

// function myFunction1(val1) {
//     document.getElementById("demo1").innerHTML = val1;
// }
// function myFunction2(val2) {
//     document.getElementById("demo2").innerHTML = val2;
// }
// function myFunction3(val3) {
//     document.getElementById("demo3").innerHTML = val3;
// }
// function myFunction4(val4) {
//     document.getElementById("demo4").innerHTML = val4;
// }
// function myFunction5(val5) {
//     document.getElementById("demo5").innerHTML = val5;
// }

function calculate (x , y, z, s) {

let kmPerYear = document.getElementById("kmdriven");
let kmOutput = document.getElementById("myAvgKM");

    kmOutput.innerHTML = kmPerYear.value;
    let a = kmPerYear.value;
    
    
let avgKM = document.getElementById("avgkm");
let avgKMOutput = document.getElementById("myAvgKPL");

    avgKMOutput.innerHTML = avgKM.value;
    let b = avgKM.value;
    
    

let avgPrice = document.getElementById("priceValue");
let priceOutput = document.getElementById("price");
    priceOutput.innerHTML = avgPrice.value;
    let c = avgPrice.value;

let perprice = document.getElementById("priceaaaa");
let peroutput = document.getElementById("prices");
    peroutput.innerHTML = perprice.value;
        let d = perprice.value;


    x = 1;
    y = 1;
    z = 1;
    s = 1;
    let total = eval(a * x + b * y + c * z + d * s);
      
      document.getElementById("savings").innerHTML = `$ ${total}`;
      
    }
