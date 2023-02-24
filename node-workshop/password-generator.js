import generator from "generate-password";
export var password = generator.generate({
  length: 10,
  numbers: true,
});

console.log(password);
