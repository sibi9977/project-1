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