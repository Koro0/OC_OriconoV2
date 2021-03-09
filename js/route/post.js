let products = JSON.parse(localStorage['products']);
console.log(products);
// Exécute un appel AJAX Post
// Prend en paramètres l'URL cible et la fonction callback appelée en cas de succès
function ajaxPost(url, callback) {
    var req = new XMLHttpRequest();
    req.open("POST"," http://localhost:3000/api/order");
    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) {
            // Appelle la fonction callback en lui passant la réponse de la requête
            callback(req.responseText)
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function () {
        console.error("Erreur réseau avec l'URL " + url);
    });
    req.send(JSON.stringify(contact, products));
}
