# 🎮 JavaScript Runtime & Execution Model

A deep dive into JavaScript internals, execution contexts, memory allocation, prototype inheritance, and asynchronous architecture. This document serves as a conceptual foundation for understanding modern frontend and backend development.

## 💻 Runtime Architecture

JavaScript is a high-level, prototype-based programming language executed by specialized engines such as V8.

Modern engines perform several stages:

- Parsing source code
- Generating Abstract Syntax Trees
- Producing optimized machine code
- Executing code through Just-In-Time compilation

```text
Source Code
      │
      ▼
 Parser
      │
      ▼
 AST
      │
      ▼
 Optimized Machine Code
      │
      ▼
 Execution
```

JavaScript itself is language-only; capabilities such as networking, timers, and file access are provided by the surrounding runtime.

---

## 📽️ Execution Contexts

Every JavaScript program operates inside execution contexts.

### Global Context

Created when the application starts.

Responsibilities include:

- Creating global variables
- Creating global functions
- Establishing the scope chain

### Function Context

Generated whenever a function executes.

Each context contains:

- Local variables
- Function parameters
- Lexical environment
- `this` binding

---

## 💻 Call Stack Architecture

JavaScript uses a single-threaded execution model.

Function calls are managed through the Call Stack.

```text
Function C
Function B
Function A
Global Context
```

Functions enter the stack when invoked and leave when execution completes.

Only one operation can execute directly on the stack at a given moment.

---

## 📽️ Memory Architecture

Memory is divided into two major regions.

### Stack

Stores:

- Primitive values
- Function contexts
- Execution metadata

### Heap

Stores:

- Objects
- Arrays
- Functions
- Complex structures

Variables referencing objects contain only memory addresses pointing into the heap.

---

## 🎮 Prototype Inheritance

JavaScript inheritance is built upon prototypes.

Every object can inherit properties and methods from another object.

```text
Object
   │
   ▼
Prototype
   │
   ▼
Prototype
   │
   ▼
null
```

When a property is requested:

1. JavaScript checks the current object.
2. The engine traverses the prototype chain.
3. The search continues until the property is found or the chain ends.

---

## 💻 Closures & Lexical Scope

A closure is created whenever a function retains access to variables from its outer scope after that scope has finished execution.

```javascript
function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}
```

Closures enable:

- Data encapsulation
- State preservation
- Factory functions
- Advanced asynchronous patterns

---

## 📽️ Event Loop Architecture

JavaScript achieves concurrency through the Event Loop.

Core components:

- Call Stack
- Runtime APIs
- Task Queue
- Microtask Queue
- Event Loop

```text
Call Stack
      │
      ▼
Microtask Queue
      │
      ▼
Task Queue
```

Promise callbacks execute before regular queued tasks, giving microtasks higher priority.

---

## 🎮 Modern Development Philosophy

Modern JavaScript emphasizes:

- Component-based architecture
- Asynchronous programming
- Modular code organization
- Reusable abstractions
- Cross-platform execution

These principles allow JavaScript to power web applications, servers, desktop software, mobile applications, and cloud infrastructure from a unified language ecosystem.
