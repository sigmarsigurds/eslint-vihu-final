module.exports = {
  meta: {},
  create(context) {
    return {
      ImportDeclaration(node) {
        if (node.source.value === "moment") {
          context.report({
            node,
            message: "The use of moment library is not allowed",
          });
        }
      },
    };
  },
};
