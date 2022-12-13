let headerElement = document.querySelector("#my-header");
reportWindowSize();
window.addEventListener("resize", () =>{reportWindowSize()});

function reportWindowSize(){
    headerElement.textContent = `Width: ${window.innerWidth}, Height: ${window.innerHeight}.`;
}