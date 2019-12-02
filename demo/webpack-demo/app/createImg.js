let smallImg = document.createElement('img');
smallImg.src = require('./../images/nx-small.png'); // 必须 require 进来
document.body.appendChild(smallImg);

let bigImg = document.createElement('img');
bigImg.src = require('./../images/nx-big.png');
document.body.appendChild(bigImg);
