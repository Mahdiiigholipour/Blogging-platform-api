const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const PORT = require("./index");

module.exports = function configSwagger(app) {
  const swaggerDocumet = swaggerJSDoc({
    swaggerDefinition: {
      openapi: "3.0.1",
      info: {
        title: "Blog APIs documention",
        description:
          "This is swagger documention for personal-blog web service",
        version: "1.0.0",
      },
    },
    apis: [process.cwd() + "/src/documention/*.swagger.js"],
  });

  const swagger = swaggerUi.setup(swaggerDocumet);

  app.use("/documents", swaggerUi.serve, swagger);

  console.log(`swagger documention in http://localhost:${PORT}`);
};
