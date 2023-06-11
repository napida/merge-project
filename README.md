# merge-project
This project includes a TypeScript function for merging two sorted arrays with unit tests.
## setup dependency 
1. Clone the repository to your local machine:
 ```
git clone https://github.com/napida/merge-project.git
```
2. Navigate to the project directory:
```bash
 cd merge-project
```
3. Initialize a new Node.js project:
```
npm init -y
```
4.  Install the dependencies:
```
npm install --save-dev typescript jest ts-jest @types/jest
 ```
5. Initialize a new TypeScript configuration file:
```
npx tsc --init
```
6. Initialize a new Jest configuration file for TypeScript:
```
npx ts-jest config:init
```
## execute code and unit test
1. Add a test script to package.json:
```
"scripts": {
    "test": "jest"
} 
```
2. Run the Jest tests with:
```
npm test
```
