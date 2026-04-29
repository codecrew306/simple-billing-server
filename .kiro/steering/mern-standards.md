---
inclusion: always
description: Standardized rules for MERN development with Repository/Service architecture.
---

# MERN Architectural Standards

## 1. Directory & Layer Structure
- **Controller Layer**: Handle HTTP inputs, status codes, and response formatting only.
- **Service Layer**: House all business logic, validation, and orchestration.
- **Repository Layer**: Handle all DB-specific operations (Mongoose queries). 
- **Models**: Standard Mongoose schemas.
- **Scalability**: Organize by feature/module (e.g., `/features/users/services/`).

## 2. Coding Principles
- **Clean Code**: Prioritize readability over cleverness.
- **Variable Naming**: Use descriptive, human-readable names (e.g., `isAccountVerified` instead of `chk`).
- **Function Names**: Use `verbNoun` patterns (e.g., `getUserById`, `updateOrderTotal`).
- **Short Comments**: Use only single-line `//` comments. Keep them brief and high-level.
- **Async Logic**: Use `async/await` and centralized error handling (try-catch or wrappers).

## 3. Formatting Rules
- Use ES6 modules (`import`/`export`).
- Use arrow functions for handlers and logic blocks.
- One logic block per line; no nested ternary operators.

## 4. Example Pattern
// Repository: Pure DB logic
export const findUserByEmail = async (email) => await User.findOne({ email });

// Service: Business logic
export const authenticateUser = async (data) => {
  const user = await UserRepository.findUserByEmail(data.email);
  // Perform password check and logic
  return user;
};