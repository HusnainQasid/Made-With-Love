const createNav = () => {
    let nav = document.querySelector('.navbar');
    nav.innerHTML = `
    <div class="nav">
        <img src="dark-logo.png" class="brand-logo" alt="Brand Logo">
        <div class="nav-items">
            <div class="search">
                <input type="text" class="search-box" placeholder="Search brand, products">
                <button class="searchbtn" onclick="search.html">Search</button>
            </div>
            <a href="#"><img src="user.png" alt="User"></a>
            <a href="#"><img src="cart.png" alt="Cart"></a>
        </div>
    </div>
    <ul class="links-container">
        <li class="list-items"><a href="index.html" class="link">Home</a></li>
        <li class="list-items"><a href="product.html" class="link">Products</a></li>
        <li class="list-items"><a href="aboutus.html" class="link">About</a></li>
        <li class="list-items"><a href="search.html" class="link">Recent</a></li>
    </ul>
    `;
}
createNav();

