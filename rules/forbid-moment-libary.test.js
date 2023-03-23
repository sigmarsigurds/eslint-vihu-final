import { test } from "vitest";
import rule from "./forbid-moment-library";
import { RuleTester } from "eslint";

var ruleTester = new RuleTester({
  parserOptions: { ecmaVersion: 2022, sourceType: "module" },
});
test("forbid-moment-library", () => {
  ruleTester.run("forbid-moment-library", rule, {
    valid: [
      {
        code: 'import os from "os";',
      },
      {
        code: 'import fs from "fs";',
      },
    ],
    invalid: [
      {
        code: 'import moment from "moment";',
        errors: [{ message: "The use of moment library is not allowed" }],
      },
    ],
  });
});
