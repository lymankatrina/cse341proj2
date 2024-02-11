const options = {
  openapi: "3.0.0",
  autoHeaders: true,
  autoQuery: true,
  autoBody: true
};
const swaggerAutogen = require('swagger-autogen')(options);

const doc = {
  info: {
    version: '',
    title: 'Pets and Owners API',
    description:
      'This is a simple REST API developed by for a school project assignment',
    contact: {
      name: 'KatrinaLyman',
      url: 'https://github.com/lymankatrina/'
    },
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Local Host'
    },
    {
      url: 'https://katrina341.onrender.com',
      description: 'Render website'
    }
  ],
  tags: [],
  components: {
    schemas: {
      
    }
  }
};

const outputFile = './swagger-output.json';
const routes = ['./routes/index.js'];

swaggerAutogen(outputFile, routes, doc);