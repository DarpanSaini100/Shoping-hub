 
 function search() {
  // Get the value from the search input
  var searchInputValue = document.getElementById('searchInput').value;

  // Perform the search logic (replace this with your own logic)
  var searchResultPage;

  switch (searchInputValue.toLowerCase()) {
      case 'products':
          searchResultPage = 'allproduct.html';
          break;
      case 'women':
          searchResultPage = 'Women.html';
          break;
      case 'men':
          searchResultPage = 'Men.html';
          break;

          case 'kid':
            searchResultPage = 'Kid.html';
            break;
            
          case 'Contact':
            searchResultPage = 'Contact.html';
            break;

            case 'login':
            searchResultPage = 'Login.html';
            break;


      default:
          searchResultPage = 'notfound.html';
          break;
  }


  // Redirect to the appropriate page
  window.location.href = searchResultPage;
 }

 header.innerHTML = `
 <nav class="navbar navbar-expand-lg bg-body-tertiary" style="padding:0">
 <div class="container-fluid" id="topnav">
   <a href="index.html"><img class="logo" src="/logo/zoro.jpg"></a>
   <button class="navbar-toggler" style="background-color: white;" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <span class="navbar-toggler-icon"></span>
   </button>

   <div class="collapse navbar-collapse justify-content-around" id="navbarSupportedContent">

     <form class="d-flex" role="search" id="navsearch">
       <input
         class="form-control me-2"
         type="search"
         id="searchInput"
         placeholder="Search"
         aria-label="Search"
       />
       <button
         class="btn btn-outline-success"
         type="button"
         onclick="search()"
       >
         Search
       </button>
     </form>

     <div class="ml-auto">
       <a href="Login.html"><img class="logo" src="/logo/zoro1.jpg"></a>
       <a href="cart.html"><img    src="/logo/zoro2.png"></a>
     </div>

   </div>
 </div>
</nav>

  

<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid mx-auto">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="index.html">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="allproduct.html">All Products</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Women's
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="./Women.html">All </a></li>
            <li><a class="dropdown-item" href="./Dresseswomen.html">Dresses</a></li>
            <li><a class="dropdown-item" href="./pantswomen.html">Pants</a></li>
            <li><a class="dropdown-item" href="./skirt'swomen.html">Skirts</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Men's
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="./Men.html">All </a></li>
            <li><a class="dropdown-item" href="./shirtsmen.html">Shirts</a></li>
            <li><a class="dropdown-item" href="./pantsmen.html">Pants</a></li>
            <li><a class="dropdown-item" href="./hoodies.html">Hoodies</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Kid.html">Kids</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="Contect.html">Contact Us</a>
      </li>
      </ul>
    </div>
  </div>
</nav>

`;


