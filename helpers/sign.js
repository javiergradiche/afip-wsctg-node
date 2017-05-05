var util = require('util');
var spawn = require('child_process').execSync;

// Expose methods.
exports.sign = sign;

/**
 * Sign a file.
 *
 * @param {object} options Options
 * @param {string} options.key Key path
 * @param {string} options.cert Cert path
 * @param {string} [options.password] Key password
 * @returns {Promise} result Result
 */

function sign(options) {
    return new Promise(function (resolve, reject) {
        options = options || {};

        if (!options.content)
            reject('Invalid content.');

        if (!options.key)
            reject('Invalid key.');

        if (!options.cert)
            reject('Invalid certificate.');

        var command = util.format(
            'echo "%s" | openssl smime -sign -signer %s -inkey %s -outform DER -nodetach',
			options.content.replace(/["']/g, '\\"'),
            options.cert,
            options.key
        );

        if (options.password)
            command += util.format(' -passin pass:%s', options.password);

		//console.info(command);

        var child = spawn(command);
		
		var enc = child.toString('base64');

        resolve(enc);
    });
}
