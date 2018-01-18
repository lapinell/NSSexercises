for (i=0; i<products.length; i++) {

    console.log(products[i]);

    cardContent = `<article class="card">
                        <header>
                            <h2>Product Title</h2>
                        </header>
                        <section class="card_section product_description">
                            <img src="image/#" alt="#">
                            <p>Product description:</p>
                            <p>Availability: #</p>
                        </section>
                        <section class="card_section product_specs">
                            <h3>Specifications</h3>
                            <p>Size: #</p>
                            <p>Weight: #</p>
                            <footer>The product specifications become invalid ...</footer>
                        </section>
                        <section class="card_section product_pricing">
                            <h3>Pricing</h3>
                            <p>Individual Pricing: </p>
                            <p>Business Pricing: </p>
                            <p>Wholesale Pricing: </p>
                        </section>
                    </article>`

    function addCard() {
        var card = document.getElementbyID('product_cards');
        card.innerHTML += cardContent;
    }

    addCard(products[i]);

}

console.log('All is well.');