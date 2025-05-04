const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Konfigurasi Swagger
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'CSMS API Documentation',
    version: '1.0.0',
    description: 'API documentation for CSMS project',
  },
  servers: [
    {
      url: 'http://localhost:3000/api', // Ganti dengan URL API Anda
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./routes/*.js'], // Path ke file router Anda
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = { swaggerUi, swaggerSpec };