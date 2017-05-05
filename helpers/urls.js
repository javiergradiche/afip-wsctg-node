'use strict';

const afip_urls = {
	// wsaa: 'https://wsaahomo.afip.gov.ar/ws/services/LoginCms?wsdl',
	// 	service: 'https://wswhomo.afip.gov.ar/{service}/service.asmx?wsdl' //wsfev1
	HOMO: {
		wsaa: 'https://wsaahomo.afip.gov.ar/ws/services/LoginCms?wsdl',
		service: 'https://fwshomo.afip.gov.ar/wsctg/services/CTGService_v4.0?wsdl' //wsfev1
	},
	PROD: {
		wsaa: 'https://wsaa.afip.gov.ar/ws/services/LoginCms?wsdl',
		service: 'https://servicios1.afip.gov.ar/{service}/service.asmx?WSDL' //wsfev1
	}
};

class AfipUrls {
	constructor() {
		this.urls = afip_urls.HOMO;
		
		// if(!process.env.HOMO) {
		// 	this.urls = afip_urls.PROD;
		// }
	}
	
	getWSAA() {
		return this.urls.wsaa;
	}
	
	getService(service) {
		return this.urls.service.replace('{service}', service);
	}
}

module.exports = new AfipUrls();
