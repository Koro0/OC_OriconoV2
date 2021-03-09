let container = document.getElementById("recuCde");

let commandUrl = new URL(window.location.href);
let commandId = commandUrl.searchParams.get("id");


document.addEventListener('DOMContentLoaded', function() {
    
    container.innerHTML = "C fait";
});
