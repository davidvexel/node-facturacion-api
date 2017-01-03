/**
 * Sistema de facturación simple con node y factura.com API
 *
 *
 */
 console.log(config.get('API.secretkey'));

import request from 'request';
import bodyParser from 'body-parser';
import Promise from 'bluebird';
import config from 'config';
import Slack from 'node-slack';

const slack = new Slack( config.get( 'Slack.webhook' ) );

const requestData = {
  "rfc": "XAXX010101000",
  "items": [
    {
      "cantidad": 1,
      "unidad": "Servicio",
      "concept": "Servicios Web Profesionales",
      "precio": config.get('Invoice.amount'),
      "subtotal": config.get('Invoice.amount')
    },
  ],
  "numerocuenta": config.get('Invoice.account'),
  "formapago": config.get('Invoice.payment'),
  "metodopago": config.get('Invoice.paymentmethod'),
  "currencie": "MXN",
  "iva": true,
  "num_order": 1234,
  "seriefactura": "F",
  "descuento": 0,
  "fecha_cfdi": "",
  "send_email": 1,
  "invoice_comments":"Comentarios para agregar a la factura PDF"
}

// Make the request
request({
  method: 'POST',
  url: 'https://factura.com/api/v1/invoice/create',
  headers: {
    'Content-Type': 'application/json',
    'F-API-KEY': config.get('API.apikey'),
    'F-SECRET-KEY': config.get('API.secretkey')
  },
  body: JSON.stringify( requestData ),
}, function (error, response, body) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', JSON.stringify(response.headers));
  console.log('Response:', body);
  if( '200' === response.statusCode ) {
    slack.send({
      text: 'Factura enviada',
      channel: config.get('Slack.channel')
    });
  }
});
