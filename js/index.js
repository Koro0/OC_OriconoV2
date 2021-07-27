
fetch('http://localhost:3000/api/teddies')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    // Work with JSON data here
    console.log(data)
    shows(data);
  })
  .catch((err) => {
    // Do something for an error here
    console.log(err);
  })

//premier visite du site, creer le nombre dans le panier et actualiser la page
window.onload = verifPanier;

function verifPanier() {
  if(localStorage['number'] == null) {
      localStorage.setItem('number', 0);
      document.location.reload();
  }
  
};


function shows(data) {
  let ul = document.createElement('ul');
  ul.className = "justify-content-between row list-unstyled";
  for(i=0; i<data.length; i++) {
    let li = document.createElement('li');
    li.className ="col-lg-4 col-md-6 col-sm-6 col-xs-12";
    let articleImg = '<img class="imagesProd img-thumbnail img-responsive" src="' + data[i].imageUrl + '" alt="l\'image du produit">';
    let articleName = '<h3 class="artName text-center">' + data[i].name + '</h3>'; //nom des produits
    let articleDescrip = '<p class="description">' + data[i].description +'</p>'; //Descriptions des articles
    let articlePrice = '<p class="indexPrice text-right">' + data[i].price + ' €' + '</p>'; //Prix de chaque produits
    let articleCard = '<a class="prodLink text-dark" href="./pages/product.html?id=' + data[i]._id + '"> <div class="thumbnail"> ' + articleImg + articleName + '<div class="caption"' + articleDescrip + '</div>' + articlePrice + '</div>';
    
    li.innerHTML = articleCard;
    ul.appendChild(li);
  }
  
  articlesBox.appendChild(ul);
}

