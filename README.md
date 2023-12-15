# Cypress Test Project

## Overview

This project contains end-to-end tests written using Cypress for Weel Tech Challenge. It covers a range of test scenarios including form validations, user authentication, and UI interactions to ensure the application works as expected.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

What you need to install the software:
Node.js
npm (usually comes with Node.js)
Cypress

## Installing

A step-by-step guide to get a development env running:
Clone repo
cd your-project-directory

Install dependencies:
npm install

## Running

Open Cypress Test Runner:
npx cypress open

To run tests headlessly:
npx cypress run

## Test Structure

cypress/e2e/ - Contains test files.
cypress/fixtures/ - Contains test data used in tests.
cypress/support/ - Contains reusable code like custom commands.
cypress/support/pageObjects - Contains reusable page objects for locator/element storage

## Built With

Cypress - The testing framework used
Node.js
Chance.js - For generating random data

## License

This project is licensed under the MIT License.

## Acknowledgments

Hat tip to anyone whose code was used