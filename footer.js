const createFooter = () => {
    let footer = document.querySelector('.footer');
    footer.innerHTML = `
        <div class="footer-content">
            <img src="light-logo.png" class="logo" alt="Company Logo">
            <div class="footer-ul-container">
              <ul class="category">
                <li class="category-title">Type 1</li>
                <li><a href="#" class="footer-link">Starters</a></li>
                <li><a href="#" class="footer-link">Spicy</a></li>
                <li><a href="#" class="footer-link">Dessert</a></li>
                <li><a href="#" class="footer-link">Healthy</a></li>
                <li><a href="#" class="footer-link">Veg</a></li>
                <li><a href="#" class="footer-link">Non-Veg</a></li>
              </ul>
              <ul class="category">
                <li class="category-title">Type 2</li>
                <li><a href="#" class="footer-link">Appetizers</a></li>
                <li><a href="#" class="footer-link">Beverages</a></li>
                <li><a href="#" class="footer-link">Desserts</a></li>
                <li><a href="#" class="footer-link">Gluten-Free</a></li>
                <li><a href="#" class="footer-link">Organic</a></li>
                <li><a href="#" class="footer-link">Non-Veg</a></li>
              </ul>
            </div>
        </div>
        <p class="footer-title">About Company</p>
        <p class="info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sequi sed hic numquam doloremque accusantium
            veniam quibusdam deleniti maiores corporis. Debitis minus dolorum cupiditate, molestias neque labore nesciunt
            ab temporibus.
        </p>
        <address class="info2">
            Support Emails: <a href="mailto:help@madewithlove.com">help@madewithlove.com</a>, 
            <a href="mailto:customersupport@madewithlove.com">customersupport@madewithlove.com</a><br>
            Telephone: <a href="tel:18009098787">180-0909-8787</a>, <a href="tel:180089896565">1800-8989-6565</a>
        </address>
        <div class="footer-social">
            <div>
                <a href="#" class="social-link">Terms & Services</a>
                <a href="#" class="social-link">Privacy Policy</a>
            </div>
            <div>
                <a href="#" class="social-link">Instagram</a>
                <a href="#" class="social-link">Facebook</a>
                <a href="#" class="social-link">Twitter</a>
            </div>
        </div>`;
};
createFooter();
