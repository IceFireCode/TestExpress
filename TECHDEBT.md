# TestExpress Technical Debt

This document tracks known technical debt in the TestExpress project. Use this as a reference to identify areas that require improvement, prioritization, or refactoring.

## :bookmark: Labels

[ ] Use wrapper value classes for `km` and `mileage` etc to avoid primitive obsession
[ ] Use constants or enums for string values like 'km', 'kWh' etc
[ ] CarModel should be split into separate interfaces for Gasoline and Electric vehicles
[ ] Consider using a factory pattern for creating car instances
[ ] Implement a repository pattern for vehicle storage and retrieval