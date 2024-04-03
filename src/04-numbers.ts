(() => {
  let productPrice = 100;
  productPrice = 200;
  console.log("🚀 ~ productPrice:", productPrice);

  let customerAge = 25;
  //customerAge = customerAge + "1"; // this is a error
  customerAge = customerAge + 1;

  let productInStock: number;
  console.log("🚀 ~ productInStock:", productInStock); // undefined
  productInStock = 0;

  let hex = 0xf00d;
  let binary = 0b1010;
})();
