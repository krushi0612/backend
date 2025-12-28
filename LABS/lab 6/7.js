const fs = require('fs');
fs.readdir('documents/', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    for (const files of data) {
        console.log(data);
    }
});