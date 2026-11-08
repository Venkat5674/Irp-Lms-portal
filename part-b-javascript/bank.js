"use strict";

// ============================================================================
// PART 1: Types & Coercion
// ============================================================================

/**
 * Validates a user-supplied deposit/withdrawal amount.
 * Prevents unintended JavaScript type coercion and validates numeric bounds.
 *
 * @param {unknown} input - Raw value input by the user.
 * @returns {number} - Validated positive number.
 * @throws {Error} - Explanatory error message if validation fails.
 */
function parseAmount(input) {
  // 1. Check for missing or uninitialized values (prevents null coercing to 0)
  if (input === null || input === undefined) {
    throw new Error("Amount is required.");
  }

  // 2. Reject unsupported data types (only strings and numbers allowed)
  if (typeof input !== "string" && typeof input !== "number") {
    throw new Error("Invalid type: Amount must be a string or number.");
  }

  // 3. Remove surrounding whitespace if the value is a string
  let cleanValue = input;
  if (typeof cleanValue === "string") {
    cleanValue = cleanValue.trim();
  }

  // 4. Guard against empty string (Number("") erroneously coerces to 0)
  if (cleanValue === "") {
    throw new Error("Amount cannot be empty.");
  }

  // 5. Explicitly convert to number and check for NaN (catches malformed strings)
  const numericAmount = Number(cleanValue);
  if (Number.isNaN(numericAmount)) {
    throw new Error("Invalid number: Unable to parse numeric value.");
  }

  // 6. Ensure the transaction amount is strictly positive
  if (numericAmount <= 0) {
    throw new Error("Amount must be greater than zero.");
  }

  // 7. Return verified positive number
  return numericAmount;
}

// Mandatory Comments explaining JavaScript Type Coercion:
// "5" + 2 results in "52" because the '+' operator triggers string concatenation if either operand is a string.
// "5" - 2 results in 3 because the '-' operator only operates on numbers, coercing the string "5" into number 5.
// typeof null === "object" is a historic bug in the original 1995 JS engine where values had 32-bit type tags;
// null was represented as the NULL pointer (0x00), which matched the object type tag (000).

// Testing Part 1: Calling parseAmount inside try/catch blocks without direct logging in parseAmount
const testInputs = ["500", " 250 ", "", "abc", null, undefined, "12.5.3"];

console.log("=== PART 1: Types & Coercion Test Results ===");
for (let j = 0; j < testInputs.length; j++) {
  const currentInput = testInputs[j];
  try {
    const verified = parseAmount(currentInput);
    console.log(`Input: ${JSON.stringify(currentInput)} -> Success: ${verified}`);
  } catch (error) {
    console.log(`Input: ${JSON.stringify(currentInput)} -> Error: ${error.message}`);
  }
}

// ============================================================================
// PART 2: Scoping & Hoisting
// ============================================================================

// Step 1: Main Declarations
// 'const' is used for BANK_NAME because the bank name is an immutable identifier that must not be reassigned.
const BANK_NAME = "JS National Bank";

// 'let' is used for transactionCounter because it tracks state and will be mutated/incremented over time.
let transactionCounter = 0;

console.log("\n=== PART 2: Scoping, Hoisting & TDZ ===");

// // HOISTING DEMO
// 1. var Hoisting: The declaration is hoisted to the top and initialized to undefined in the creation phase.
console.log("1. Hoisted var before declaration:", hoistedVar); // prints undefined
var hoistedVar = "Welcome to " + BANK_NAME;

// 2. let Hoisting & TDZ: let is hoisted into the Temporal Dead Zone (TDZ); accessing it throws ReferenceError.
try {
  console.log(hoistedLet);
} catch (error) {
  console.log("2. Caught let TDZ ReferenceError:", error.message);
}
let hoistedLet = "Secure Vault Balance: $1,000,000";

// 3. Function Declaration Hoisting: The entire function definition is hoisted during the creation phase.
console.log("3. Function declaration called before definition:", announce());
function announce() {
  return "Welcome to " + BANK_NAME + "! System is operational.";
}

// 4. Function Expression Hoisting: The variable 'notify' is hoisted as undefined, so invoking it causes a TypeError.
try {
  notify();
} catch (error) {
  console.log("4. Caught function expression TypeError:", error.message);
}
var notify = function() {
  return "Account alert dispatched.";
};

// Execution Context Lifecycle Explanation:
// In the Creation Phase, the JS engine allocates memory: function declarations are fully registered,
// var variables are allocated with 'undefined', and let/const are allocated in an uninitialized state (TDZ).
// In the Execution Phase, code is evaluated line-by-line, resolving assignments and function calls.

// Step 3: The Asynchronous Loop Bug
// var loop: 'i' is shared across the entire function/global scope.
// By the time the asynchronous callbacks run, the loop has completed and 'i' has the final value 3.
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log("var loop:", i);
  }, 50);
}

// let loop: 'let' creates a new lexical binding for 'i' for every single iteration.
// Each setTimeout callback preserves a closure over its own distinct iteration value (0, 1, 2).
for (let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log("let loop:", i);
  }, 100);
}
