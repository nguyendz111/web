document.getElementById("viewportwith").textContent = window.innerWidth + "px";


var nWindow;

document.querySelector("#openWindowBtn").addEventListener
("click", function(){
    nWindow = window.open();
    nWindow.document.write("<h1>this is new window</h1>");
    nWindow.document.write("<button id='closeWindown'>Open New Window</button>");
    nWindow.document.getElementById("closeWindown").addEventListener("mouseover", function(){
        nWindow.close();
    })
    // alert("h")

})