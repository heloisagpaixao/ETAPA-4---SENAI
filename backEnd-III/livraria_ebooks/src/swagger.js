// Importamos a biblioteca e já a executamos chamando ()
const swaggerAutogen = require("swagger-autogen")();

// Definimos as informações básicas da nossa API
const doc = {
  info: {
    title: "Livraria E-books API",
    description:
      "Documentação automática da API da Livraria utilizando Swagger Autogen",
    version: "1.0.0",
  },
  host: "localhost:3000",
  schemes: ["http"],

  // Configuramos que nossa API usa Token JWT. Isso fará o botão de "Cadeado" (Authorize) aparecer na tela!
  securityDefinitions: {
    bearerAuth: {
      type: "http",
      scheme: "bearer",
      bearerFormat: "JWT",
    },
  },
};

// Onde o arquivo JSON mágico será salvo
const outputFile = "./swagger_output.json";

// Ele vai ler o index.js de rotas, que por sua vez importa todas as outras!
const endpointsFiles = ["./src/routes/index.js"];

// Mandamos o robô trabalhar!
swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  console.log("Documentação do Swagger gerada com sucesso!");
});
