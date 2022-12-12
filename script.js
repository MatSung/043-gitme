let headerElement = document.querySelector("#my-header");
headerElement.textContent = `Width: ${window.innerWidth}, Height: ${window.innerHeight}.`;

window.addEventListener("resize", () =>{reportWindowSize()});

function reportWindowSize(){
    headerElement.textContent = `Width: ${window.innerWidth}, Height: ${window.innerHeight}.`;
}