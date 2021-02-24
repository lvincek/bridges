const express = require('express')
const app = express();

app.use(express.static('./'));
app.use(express.static('html'));
app.use(express.static('images'))
app.use(express.static('style'))

app.listen(2002, function () {
    console.log('\nPort 2002 is open for business!');
});