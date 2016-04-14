/**
 * Created by olivier on 14/04/2016.
 */

var fs = require('fs');

class HandleJSON {
    static addAccount(fieldValues, callback) {
        var configFile = fs.readFileSync('.config.json');
        var configContent = JSON.parse(configFile);
        var name = fieldValues['email'];
        configContent.accounts[name] = fieldValues;
        var configJSON = JSON.stringify(configContent, null, 4);
        fs.writeFile('.config.json', configJSON, (err)=> {
            if(err){
                callback(err);
            } else {
                callback(1);
            }
        });
    }
}
export default HandleJSON;