var products = [
    {
    url: "octopus-sticker.jpg",
    name: "OctoCutie",
    description: "Octopus sticker",
    availablility: "available",
    size: "1.5 in x 1.5 in",
    weight: "less than an ounce",
    expiration: "sticky side lasts forever",
    priceInd: "$1.00 ea",
    priceBus: "$0.97 ea",
    priceWhl: "$0.80 ea"
    },
    {
    url: "cactus-sticker.jpg",
    name: "CactiCutie",
    description: "Cactus sticker",
    availablility: "available",
    size: "1.5 in x 1.5 in",
    weight: "less than an ounce",
    expiration: "sticky side lasts forever",
    priceInd: "$1.00 ea",
    priceBus: "$0.97 ea",
    priceWhl: "$0.80 ea"
    },
    {
    url: "panda-sticker.jpg",
    name: "PandaCutie",
    description: "Panda sticker",
    availablility: "available",
    size: "1.5 in x 1.5 in",
    weight: "less than an ounce",
    expiration: "sticky side lasts forever",
    priceInd: "$1.00 ea",
    priceBus: "$0.97 ea",
    priceWhl: "$0.80 ea"
    },
    {
    url: "pumpkin-sticker.jpg",
    name: "PumpkiCutie",
    description: "Pumpkin sticker",
    availablility: "available",
    size: "1.5 in x 1.5 in",
    weight: "less than an ounce",
    expiration: "sticky side lasts forever",
    priceInd: "$1.00 ea",
    priceBus: "$0.97 ea",
    priceWhl: "$0.80 ea"
    },
    {
    url: "star-sticker.jpg",
    name: "TinkliCutie",
    description: "Star sticker",
    availablility: "available",
    size: "1.5 in x 1.5 in",
    weight: "less than an ounce",
    expiration: "sticky side lasts forever",
    priceInd: "$1.00 ea",
    priceBus: "$0.97 ea",
    priceWhl: "$0.80 ea"
    },
    {
    url: "ram-sticker.jpg",
    name: "SheepishCutie",
    description: "Ram sticker",
    availablility: "available",
    size: "1.5 in x 1.5 in",
    weight: "less than an ounce",
    expiration: "sticky side lasts forever",
    priceInd: "$1.00 ea",
    priceBus: "$0.97 ea",
    priceWhl: "$0.80 ea"
    }
]

for (i=0; i<products.length; i++) {

    console.log(products[i]);

    cardContent = `<article class="card">
                        <header>
                            <h2>` + products[i].name +`</h2>
                        </header>
                        <section class="card_section product_description">
                            <img src="images/` + products[i].url +`" alt="#">
                            <p>Product description:` + products[i].description +`</p>
                            <p>Availability: ` + products[i].availablility +`</p>
                        </section>
                        <section class="card_section product_specs">
                            <h3>Specifications</h3>
                            <p>Size: ` + products[i].size +`</p>
                            <p>Weight: ` + products[i].weight +`</p>
                            <footer>The ` + products[i].expiration +`</footer>
                        </section>
                        <section class="card_section product_pricing">
                            <h3>Pricing</h3>
                            <p>Individual Pricing: ` + products[i].priceInd +` </p>
                            <p>Business Pricing: ` + products[i].priceBus +`</p>
                            <p>Wholesale Pricing:` + products[i].priceWhl +` </p>
                        </section>
                    </article>`

    function addCard() {
        var card = document.getElementById("product_cards");
        card.innerHTML += cardContent;
    }

    addCard(products[i]);

}

console.log('All is well.');