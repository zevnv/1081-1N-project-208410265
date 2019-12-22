function changeNav(index) {

    var p = document.getElementById("section");
    
    switch (index) {
    
    case 1:
    
    p.innerHTML = '<iframe width=100% height=100% src="./Intro.html">';
    
    p.style.backgroundColor = "Yellow";
    
    break;
    
    case 2:
    
    p.innerHTML = '<iframe width=100% height=100% src="./PokemonTable.html">';
    
    p.style.backgroundColor = "azure";
    
    break;
    
    case 3:
    
    p.innerHTML = '<iframe width=100% height=100% src="./ImageGallery.html">';
    
    p.style.backgroundColor = "cornflowerblue";
    
    break;
    
    case 4:
    
    p.innerHTML =
    
    '<iframe width=100% height=100% src="./Blog.html">';
    
    p.style.backgroundColor = "Yellow";
    
    break;
    
    case 5:
    
    p.innerHTML = '<iframe width=100% height=100% src="div.html">';
    
    p.style.backgroundColor = "azure";
    
    break;
    
    case 6:
    
    p.innerHTML = '<iframe width=100% height=100% src="./tku60.html">';
    
    p.style.backgroundColor = "azure";
    
    break;
    
    }
    
    }