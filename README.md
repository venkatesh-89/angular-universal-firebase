# AngularUniversalFirebase

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.9.

### Building your app

- `ng build --prod && ng run angular-universal-firebase:server`
- `cp -a functions/dist/browser/. public/`
- `mv public/index.html public/index2.html`

### Deploying to 'angular-universal-fireba-35bf1'
- `firebase deploy`

```
i  deploying functions, hosting
i  functions: ensuring necessary APIs are enabled...
✔  functions: all necessary APIs are enabled
i  functions: preparing functions directory for uploading...
i  functions: packaged functions (148.26 KB) for uploading
✔  functions: functions folder uploaded successfully
i  hosting[angular-universal-fireba-35bf1]: beginning deploy...
i  hosting[angular-universal-fireba-35bf1]: found 8 files in public
✔  hosting[angular-universal-fireba-35bf1]: file upload complete
i  functions: updating Node.js 6 function ssr(us-central1)...
✔  functions[ssr(us-central1)]: Successful update operation.
i  hosting[angular-universal-fireba-35bf1]: finalizing version...
✔  hosting[angular-universal-fireba-35bf1]: version finalized
i  hosting[angular-universal-fireba-35bf1]: releasing new version...
✔  hosting[angular-universal-fireba-35bf1]: release complete

✔  Deploy complete!
```

- Please note that it can take up to 30 seconds for your updated functions to propagate.
- Hosting URL (Demo): https://angular-universal-fireba-35bf1.firebaseapp.com

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
