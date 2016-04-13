/**
 * Created by olivier on 13/04/2016.
 */

var nodemailer = require('nodemailer');

class Smtp {

    static checkSMTP(Account, callback) {
        console.log("In SMTP Check");

        var secure = Account["smtpSSL"] == "required";

        var smtpConfig = {
            host: Account["smtpServer"],
            port: Account["smtpPort"],
            secure: secure, // use SSL
            auth: {
                user: Account['smtpUsername'],
                pass: Account['smtpPassword']
            }
        };

        // create reusable transporter object using the default SMTP transport
        var transporter = nodemailer.createTransport(smtpConfig);


        transporter.verify(function(error, success) {
            if (error) {
                //console.log(error);
                callback(error);
            } else {
                //console.log('Server is ready to take our messages');
                callback(true);
            }
        });


    }

}

export default Smtp;