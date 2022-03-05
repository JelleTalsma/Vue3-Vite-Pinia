module.exports = {
  trailingComma: "es5", // Trailing commas where valid in ES5 (objects, arrays, etc.). No trailing commas in type parameters in TypeScript.
  tabWidth: 2, // Specify the number of spaces per indentation-level.
  semi: false, // Add a semicolon at the end of every statement.
  quoteProps: "consistent", // If at least one property in an object requires quotes, quote all properties.
  singleQuote: true, // If the number of quotes outweighs the other quote, the quote which is less used will be used to format the string.
  bracketSpacing: true, // Example: { foo: bar }.
  bracketLine: false, // Put the > of a multi-line HTML (HTML, JSX, Vue, Angular) element at the end of the last line instead of being alone on the next line (does not apply to self closing elements).
  arrowParens: "always", // Always include parens. Example: (x) => x
};
