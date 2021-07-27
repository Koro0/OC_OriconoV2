fetch('http://localhost:3000/api/teddies')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
   //ork with JSON data here
    showsOrder(data)
    
  })
  .catch((err) => {
   //o something for an error here
    console.log(err);
  })  
/*
function showsOrder(data) {
  let articleOrder = document.getElementById("articleOrders");
  let table = document.createElement('table');
  table.className = 'row';
  let orders = JSON.parse(localStorage["products"]);
  let divSomme = document.createElement('div');
  divSomme.className = "totalAllArticle";
  let totalAllArticle = 0;
  if(localStorage["number"] > 0) {
    for(j=0; j<orders.length; j++) { //parcourir dans le tableau les articles recuper sur le localStorage
      for(i=0; i<data.length; i++) { //Parcourir tous les articles du "backend"
        if(orders[j].id == data[i]._id) { 
          let tr = document.createElement('tr'); //creer balise tr
          let deleteArticle = document.createElement('i'); //creer la balise <i>
          deleteArticle.className = "fas fa-trash-alt"; //attribuer la classe 
          //l'image des articles
          let articleImg = '<a class="prodOrder" href="./product.html?id=' + data[i]._id + '"><img class="imgOrder" src="' + data[i].imageUrl + '" alt="l\'image du produit"/></a>';
          //nom des articles
          let articleName = '<a class="prodOrder" href="./product.html?id=' + data[i]._id + '"><h2 class="artNameOrder">' + data[i].name + '</h2></a>'; 
          //Prix des articles
          let articlePrice = '<p class="artPricesOrder"> Prix Unitaire : ' + data[i].price + ' €' + '</p>';
          //quantités sur chaque articles
          let quantite = "<p> Quantité :" + orders[j].quantite + "</p>";
          //Prix total des articles
          let sommeArticle = "<p> Total : " + orders[j].quantite * data[i].price + " € </p>";
          let articleColor = "<p> Option : " + orders[j].option + "</p>";
          totalAllArticle += orders[j].quantite * data[i].price;
          tr.innerHTML =  articleImg  + articleName + articleColor + articlePrice + quantite + sommeArticle;
          table.appendChild(tr);
          tr.appendChild(deleteArticle); //ajout du logo corbeille
          let temp = j;
          deleteArticle.addEventListener('click', deleteArticleInOrder);
      }
    }
  }
};*/


// affichier tous les produits du panier
function showsOrder(data) {
  let articleOrder = document.getElementById("articleOrders");
  let ul = document.createElement('ul');
  ul.className = "ArtOrdersUl list-unstyled";
  let orders = JSON.parse(localStorage["products"]);
  let liSomme = document.createElement('div');
  liSomme.className = "totalAllArticle";
  let totalAllArticle = 0;

  if(localStorage["number"] > 0) {
    for(j=0; j<orders.length; j++) { //parcourir dans le tableau les articles recuper sur le localStorage
      for(i=0; i<data.length; i++) { //Parcourir tous les articles du "backend"
        if(orders[j].id == data[i]._id) {  
          let li = document.createElement('li'); //creer balise li
          li.className = "ArtOrdersLi";//Attribuer une classe "ArtOrdersLi"
          let deleteArticle = document.createElement('i'); //creer la balise <i>
          deleteArticle.className = "fas fa-trash-alt"; //attribuer la classe 
          //l'image des articles
          let articleImg = '<a class="prodOrder" href="./product.html?id=' + data[i]._id + '"><img class="imgOrder" src="' + data[i].imageUrl + '" alt="l\'image du produit"/></a>';
          //nom des articles
          let articleName = '<a class="prodOrder" href="./product.html?id=' + data[i]._id + '"><h2 class="artNameOrder">' + data[i].name + '</h2></a>'; 
          //Prix des articles
          let articlePrice = '<p class="artPricesOrder"> Prix Unitaire : ' + data[i].price + ' €' + '</p>';
          //quantités sur chaque articles
          let quantite = "<p> Quantité :" + orders[j].quantite + "</p>";
          //Prix total des articles
          let sommeArticle = "<p> Total : " + orders[j].quantite * data[i].price + " € </p>";

          let articleColor = "<p> Option : " + orders[j].option + "</p>";
            
          totalAllArticle += orders[j].quantite * data[i].price;

          li.innerHTML = articleImg  + articleName + articleColor + articlePrice + quantite + sommeArticle;
          ul.appendChild(li)
          li.appendChild(deleteArticle) //ajout du logo corbeille
          //console.log(j, orders[j]);
          let temp = j;
          deleteArticle.addEventListener('click', deleteArticleInOrder);
        } 
      }
    }
  } else {
    let aucunArticle = '<h2 id="none"> Aucun produit ';
    aucunArticle +=  "n'a était ajouter </h2>";
    let div = document.createElement('div');
    div.innerHTML  = aucunArticle;
    articleOrder.appendChild(div);
  }
  liSomme.innerHTML = "Prix total des produits : " + totalAllArticle + " €";
  ul.appendChild(liSomme);

  //ajout de la valeur total des articles dans le panier sur LocalStorage
  localStorage.setItem("totalPriceInBasket", totalAllArticle); 
    
  //afficher le nombre d'article dans le panier
  document.getElementsByClassName("basketCard").innerHTML = JSON.parse(localStorage["number"]); 

  articleOrder.appendChild(ul);
};

  let valid = document.getElementById("validCommand");
  

  function deleteArticleInOrder() {
    orders.splice(temp, 1);upression du produit dans le tableau
    localStorage.setItem("id", JSON.stringify(orders)); //actualiser le contenu dans le localStorage
    localStorage.setItem("number", orders.length);ctualiser le nombre des produits 
    
    document.location.reload();// rafraichir/actualiser la page
  };
/*
//creation de clé de commande
function makeid(length) { 
  let result           = '';
  let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let charactersLength = characters.length;
  for (i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
    return result;
*/


document.querySelector('form').setAttribute('action', ajaxPost);

///////////////////recuperer les inputs du formulaire///////////
const firstName = document.getElementById('cusFirstName');
const lastName = document.getElementById('cusLastName');
const userAddress = document.getElementById('cusAddress');
const userCity = document.getElementById('cusLive');
const userEmail = document.getElementById('cusEmail');
const formValid = document.getElementById('validCommand');
console.log(userCity.value);
let contact = [];

// function sendPost() {
//   var req = new XMLHttpRequest();
//a requête est asynchrone lorsque le 3ème paramètre vaut true ou est absent
//   req.open("POST", "http://localhost:3000/api/order");
//  estion de l'événement indiquant la fin de la requête
//   req.addEventListener("load", function () {
//      ffiche la réponse reçue pour la requête
//       console.log(req.responseText);
//   });
//     req.send(); 
    
// }


  /////////////////////////////Event sur click butt valider achat du formulaire/////////////////
  formValid.addEventListener('click', validForm);

  ///////////////////////////function verification des champs du formulaire///////////////////////////////////
  function validForm(event) {
    //si le champ firstName est vide
    if (firstName.validity.valueMissing) {
      event.preventDefault();
      var error = document.getElementById('errorFirstName');
      error.textContent = "Merci de saisir votre Prénom";
      error.style.color = 'red';
    } else {
      document.getElementById('errorFirstName').textContent = "";
    }
    //si last name est vide
    if (lastName.validity.valueMissing) {
      event.preventDefault();
      var error = document.getElementById('errorLastName');
      error.textContent = "Merci de saisir votre Nom";
      error.style.color = 'red';
    } else {
      document.getElementById('errorLastName').textContent = "";
    }
    //si l'adresse est vide
    if (userAddress.validity.valueMissing) {
      event.preventDefault();
      var error = document.getElementById('errorAddress');
      error.textContent = "Merci de saisir votre adresse";
      error.style.color = 'red';
    } else {
      document.getElementById('errorAddress').textContent = "";
    }
    //si la ville est vide
    if (userCity.validity.valueMissing) {
      event.preventDefault();
      var error = document.getElementById('errorCity');
      error.textContent = "Merci de saisir votre ville";
      error.style.color = 'red';
    } else {
      document.getElementById('errorCity').textContent = "";
    }
    //si le champ mail est vide
    if (userEmail.validity.valueMissing) {
      event.preventDefault();
      var error = document.getElementById('errorEmail');
      error.textContent = "Merci de saisir votre email";
      error.style.color = 'red';
    } else {
      document.getElementById('errorEmail').textContent = "";
    }

    contact.push({
      "firstName " : firstName.value, 
      "lastName " : lastName.value,
      "address " : userAddress.value,
      "city" : userCity.value,
      "email" : userEmail.value
    })
    
  }; 

  


/////////////////////////// Verifier le champ Email//////////////////
/*
userEmail.addEventListener('blur', function (e) {
  var errMsgEmail;
  var regexEmail = /.+@+.\..+/;
  //correspond aux chaines de la forme aaa@qq.cc
  if (!regexEmail.test(e.target.value)) {
    errMsgEmail = "Merci de remplir correctement votre Email";
  }
  var errorEmail = document.getElementById('errorEmail');
  errorEmail.textContent = errMsgEmail;
  errorEmail.style.color = "red";
})
*/