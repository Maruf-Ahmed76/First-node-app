var fs = require("fs");

function contentChanger(values, fileContent){
    for(var key in values){
        fileContent = fileContent.replace(`{{${key}}}`,values[key]);
    }
    return fileContent;
}

function vew(tamplate, values, response){
    var fileContent = fs.readFileSync(`./view/component/${tamplate}.html`,'utf8');
    fileContent = contentChanger(values,fileContent);
    response.write(fileContent);
}

module.exports.vew = vew;