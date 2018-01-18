var products = [
    {
    url: "octopus-sticker.jpg",
    name: "OctoCutie",
    description: "OctoCutie is a removable, individually die-cut vinyl. Ideal for smooth flat surfaces like laptops, journals, windows, etc. 1/8th of an inch white border around each design.",
    availablility: "Available",
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
    description: "CactiCutie is a removable, individually die-cut vinyl. Ideal for smooth flat surfaces like laptops, journals, windows, etc. 1/8th of an inch white border around each design.",
    availablility: "Available",
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
    description: "PandaCutie is a removable, individually die-cut vinyl. Ideal for smooth flat surfaces like laptops, journals, windows, etc. 1/8th of an inch white border around each design.",
    availablility: "Available",
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
    description: "PumpkiCutie is a removable, individually die-cut vinyl. Ideal for smooth flat surfaces like laptops, journals, windows, etc. 1/8th of an inch white border around each design.",
    availablility: "Available",
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
    description: "TinkliCutie is a removable, individually die-cut vinyl. Ideal for smooth flat surfaces like laptops, journals, windows, etc. 1/8th of an inch white border around each design.",
    availablility: "Available",
    size: "1.5 in x 1.5 in",
    weight: "less than an ounce",
    expiration: "sticky side lasts forever",
    priceInd: "$1.00 ea",
    priceBus: "$0.97 ea",
    priceWhl: "$0.80 ea"
    },
    {
    url: "ram-sticker.jpg",
    name: "SheepiCutie",
    description: "SheepiCutie is a removable, individually die-cut vinyl. Ideal for smooth flat surfaces like laptops, journals, windows, etc. 1/8th of an inch white border around each design.",
    availablility: "Available",
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
                            <h3>Product description</h3>` + products[i].description +`</p>
                            <p><strong>` + products[i].availablility +`</strong></p>
                        </section>
                        <section class="card_section product_specs">
                            <h3>Specifications</h3>
                            <p><strong>Size:</strong> ` + products[i].size +`</p>
                            <p><strong>Weight:</strong> ` + products[i].weight +`</p>
                            <footer>The ` + products[i].expiration +`</footer>
                        </section>
                        <section class="card_section product_pricing">
                            <h3>Pricing</h3>
                            <p><strong>Individual Pricing:</strong> ` + products[i].priceInd +` </p>
                            <p><strong>Business Pricing:</strong> ` + products[i].priceBus +`</p>
                            <p><strong>Wholesale Pricing:</strong>` + products[i].priceWhl +` </p>
                        </section>
                    </article>`

    function addCard() {
        var card = document.getElementById("product_cards");
        card.innerHTML += cardContent;
    }

    addCard(products[i]);

}

console.log('All is well.');