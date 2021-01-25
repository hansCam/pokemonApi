module.exports = function () {
    return {
      input: "specs/openapi.yml",
      operations: {
        codegen: {
          output: "src/generated",
          type: "fastify",
        },
      }
    }
  };
  