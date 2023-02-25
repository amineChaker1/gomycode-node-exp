/*the global object is a js object that we can use its methods whitout the need of 
calling it again ex(window.setTimeout you can wall timeOut withou window because
   window is a global object)*/

/* the global object in node is 'global' */

//console.log(global);
setTimeout(() => {
  console.log("hello ");
}, 3000);

//thus we cant access the methods we used to use in the window object like document
