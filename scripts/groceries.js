// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products

var products = [
  {
    name: "Brocoli",
    vegetarian: true,
    glutenFree: true,
    organic: true,
    price: 1.99,
  },
  {
    name: "Pain",
    vegetarian: true,
    glutenFree: false,
    organic: false,
    price: 2.35,
  },
  {
    name: "Saumon",
    vegetarian: false,
    glutenFree: true,
    organic: true,
    price: 10.99,
  },
  {
    name: "Riz",
    vegetarian: true,
    glutenFree: false,
    organic: false,
    price: 12.35,
  },
  {
    name: "Lait",
    vegetarian: true,
    glutenFree: true,
    organic: true,
    price: 4.53,
  },
  {
    name: "Banana",
    vegetarian: true,
    glutenFree: true,
    organic: false,
    price: 2.49,
  },
  {
    name: "Chia",
    vegetarian: true,
    glutenFree: true,
    organic: true,
    price: 3.99,
  },
  {
    name: "Patate",
    vegetarian: true,
    glutenFree: false,
    organic: true,
    price: 4.78,
  },
  {
    name: "Biscotti",
    vegetarian: false,
    glutenFree: true,
    organic: false,
    price: 4.99,
  },
  {
    name: "Maïs",
    vegetarian: true,
    glutenFree: true,
    organic: true,
    price: 2.79,
  },
  {
    name: "Craquelins",
    vegetarian: false,
    glutenFree: true,
    organic: false,
    price: 5.49,
  },
  {
    name: "Pâtes",
    vegetarian: true,
    glutenFree: true,
    organic: true,
    price: 3.99,
  },
];

// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
  let reduced_product = [];
  for (let i = 0; i < prods.length; i += 1) {
    if (restriction == "Vegetarian" && prods[i].vegetarian == true) {
      reduced_product.push(prods[i]);
    } else if (restriction == "GlutenFree" && prods[i].glutenFree == true) {
      reduced_product.push(prods[i]);
    } else if (restriction == "Organique" && prods[i].organic == true) {
      reduced_product.push(prods[i]);
    } else if (restriction == "Non-organique" && prods[i].glutenFree != true) {
      reduced_product.push(prods[i]);
    } else if (restriction == "None") {
      reduced_product.push(prods[i]);
    }
  }

  // Sort products based on price, if the list of product is not empty
  if (reduced_product.length > 0) {
    reduced_product.sort(function (a, b) {
      return a.price - b.price;
    });
  }

  return reduced_product;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
  totalPrice = 0;
  var chosenProductsNames = [];

  console.log("chosenProducts before processing", chosenProducts);
  for (let i = 0; i < chosenProducts.length; i += 1) {
    //Processing the chosenProducts array
    if (chosenProducts) {
      console.log(i, chosenProducts[i]);
      var productName = chosenProducts[i].split(" ");
      console.log("Name is", productName[0]);
      chosenProductsNames.push(productName[0]);
      console.log("Processed array is", chosenProductsNames);
    }
  }

  console.log("After processing array is", chosenProductsNames);
  for (let i = 0; i < products.length; i += 1) {
    console.log(
      "is selected element in product",
      chosenProductsNames.indexOf(products[i].name) > -1
    );
    if (chosenProductsNames.indexOf(products[i].name) > -1) {
      totalPrice += products[i].price;
    }
  }

  return totalPrice;
}
