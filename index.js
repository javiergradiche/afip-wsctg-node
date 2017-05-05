"use strict";



var _ = require('lodash'),
	soap = require('soap'),
	WSAA = require('./helpers/wsaa'),
	AfipURLs = require('./helpers/urls');

var  service = 'wsctg';

module.exports = class AfipClient {
	describeWsdl() {
		return new Promise((resolve, reject) => {
			WSAA.generateToken(service).then((tokens) => {
				this._createClientForService(service).then((client) => {
					resolve(client.wsdl.definitions.descriptions.types);
				});
			}).catch((err) => {
				reject(err);
			});
		});
	}
  generateToken(a,b) { 
    return a + b 
  }
  createCTG(a,b) { 
    return a - b 
  }
	_createClientForService(service) {
		return new Promise((resolve, reject) => {
			soap.createClient(AfipURLs.getService(service), (err, client) => {
				if (err && !client) {
					reject(err);
				} else {
					resolve(client);
				}
			});
		});
	}   
}