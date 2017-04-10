# Change Log / Updates / Changes / Implementation

2017 April 10

> ## Update Angular2 to Angular4
Update steps: 
1. `git checkout master`
1. `git pull` to fetch the latest changes from git remote `master`
1. Run below: 
```nodejs
npm install @angular/{common,compiler,compiler-cli,core,forms,http,platform-browser,platform-browser-dynamic,platform-server,router,animations}@latest typescript@latest --save
```

> Install Firebase / AngularFire2 
```javascript
    apiKey: "AIzaSyAIfSELgFMaaq-oMb9FibFDoudrxoGD4J0",
    authDomain: "rrparty-e70c9.firebaseapp.com",
    databaseURL: "https://rrparty-e70c9.firebaseio.com",
    projectId: "rrparty-e70c9",
    storageBucket: "rrparty-e70c9.appspot.com",
    messagingSenderId: "603949233939"
```

> Add signup/login component
*   Only Google authentication (for now)