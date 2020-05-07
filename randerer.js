var fs = require("fs");

function margeValues(values, fileContent){
    for(var key in values){
        fileContent = fileContent.replace(`{{${key}}}`,values[key]);
    }
    return fileContent;
}

function vew(tamplate, values, response){
    var fileContent = fs.readFileSync(`./view/${tamplate}.html`,"utf8");
    // Insert value into the content
    fileContent = margeValues(values,fileContent);
    // Write out the cntents to the response
    response.write(fileContent);
}

module.exports.vew = vew;