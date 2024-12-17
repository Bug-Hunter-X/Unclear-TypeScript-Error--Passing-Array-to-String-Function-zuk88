# Unclear TypeScript Error: Passing Array to String Function

This repository demonstrates a scenario where TypeScript's error message is not very helpful when an array is passed to a function expecting a string.

## The Problem

The `greeter` function expects a string argument but receives an array. TypeScript reports an error, but the error message isn't very descriptive about the type mismatch, particularly for beginners.

## How to reproduce
1. Clone this repository.
2. Compile the `bug.ts` file using the TypeScript compiler (tsc bug.ts).
3. Observe the error message.  It may not clearly indicate that the problem is the array type being passed to a function expecting a string.

## Solution
The `bugSolution.ts` file demonstrates how to fix the issue by either correctly passing a string argument or by modifying the function's signature to accommodate an array of strings and properly handling it. 