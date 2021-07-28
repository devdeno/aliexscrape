import AliexScrape from 'aliexscrape';
var AliexScrape = require('aliexscrape');

AliexScrape('32853590425') // 32853590425 is a productId
    .then(response => console.log(response))
    .catch(error => console.log(error));
