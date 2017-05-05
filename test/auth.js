var assert = require('assert');
var AfipClient = require('../index.js')
var xml2js = require('xml2js');

describe('Auth', function(){

	it('Describe del wsdl', function(done){
		afipClient = new AfipClient();
		res = afipClient.describeWsdl().then(function(res){
    	assert.equal(res.dummyReturnType.appserver, 'xsd:string');
			done();
		});
	});

});