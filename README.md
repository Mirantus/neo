# Neo
Boilerplate application for creating SPA with Typescript, React and Redux. Also powered by Webpack, React Router, Redux Form.

## Features
Application provides next features:

**Authorization**
- Registration
- Login
- Logout
- Profile page
- Restore password
- Change password

**Items**
- List of items
- Item page (text, date)

**Items administration** (for authored users)
- Create item
- Update item
- Delete item

## How to install
Run commands in command line

```
git clone https://github.com/Mirantus/neo.git
cd neo.git
npm install
```

## How to run
Run next command to start application for development
```
npm run start
```

Or run to start application for production
```
npm run build
```

## Quality tools

###ESLint
Used for linting Typescript code. You can find rules in .eslintrc.js file.

###Prettier
Used for automatic formatting Typescript code. It runs on pre-commit hook.

###Unit tests
Unit tests used for testing clear functions (reducers, utils, simple React components).
It uses Jest and matching inline snapshots for React components. Placed near file for testing with name *.spec.js.
These tests runs automatically on pre-push hook. But you can run manually:
```
npm run test
```

###Integration tests
Integration tests used for testing whole application from user side. They cover main features of application.
These tests powered by React Testing Library and placed in "tests" directory. You can run manually:
```
npm run test:integration
``` 

## See also
Backend for this application you can find here https://github.com/Mirantus/neo-api