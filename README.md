# Recipe Book - Angular Course Project (Udemy)

This project was produced by Udemy. Throughout the course, we analyzed the core concepts of Angular to understand the reasoning and theory behind each one!  Once the foundations of these concepts were discussed, we put them in practical use by building a full-featured Angular application to help solidify this analysis.  I want to state formally that this application was NOT designed by myself, but simply implemented given guidelines from Udemy.  I found this application to be extremely insightful for my personal knowledge of this technology, and believe it will give me a sound understanding for future projects.

Live website: https://ng-recipe-book-9fafe.firebaseapp.com/

## Course Concepts

The following is a list of the concepts that were outlined by this course:

* Components & Databinding
    * String interpolation
    * Property Binding
    * Event Binding
    * Two Way Binding

* Directives
    * Built-in attribute directives (`ngStyle`, `ngClass`)
    * Creating custom attribute directives
    * Built-in structural directives (`*ngFor`, `*ngIf`)
    * Creating custom structural directives

* Services & Dependeny Injection
    * Understanding the hierarchical structure of injecting services
    * Creating custom services
    * Injecting services into other services

* Routing
    * Setting up static routes
    * Navigation with `routerLink`
    * Absolute vs relative paths
    * Navigating programmatically with the `router`
    * Passing and fetching route parameters
    * Passing and fetching query parameters and fragments
    * Declaring child routes
    * Redirecting and wildcard routes
    * Outsourcing the route configuration
    * Protecting routes with guards (`canActivate`, `canActivateChild`, `canDeactivate`)
    * Passing data to a route statically or through `resolve`
    * Location strategies

* Observables
    * Building custom observables
    * Implementing OnDestroy to avoid memory leaks
    * Subjects

* Forms
    * Implementing the template-driven approach
    * Implementing the reactive approach 
    * Using validation and creating custom validation
    * Default values
    * Grouping form controls 

* Pipes
    * Using built-in pipes (`uppercase`, `date`)
    * Parameterizing pipes
    * Chaining multiple pipes
    * Creating a custom pipe
    * Pure and impure pipes
    * Understanding the `async` pipe

* HTTP Requests
    * Sending GET, POST, PUT requests (firebase)
    * Adjusting request headers
    * Transforming response with observable operators (`map`)
    * Error handling
    
* Authentication & Route Protection
    * JWT
    * Integrated Authentication within a firebase system
    * Route protection with redirection

* Modules & Optimization
    * Feature and shared modules
    * Registering routes within a feature module
    * Lazy loading specific routes
    * Restructuring services to use the child injector
    * Ahead-of-Time vs Just-in-Time compilation
    * Preloading lazy loaded routes

* Deployment
    * Deployment preparations
    * Deploying a SPA application to firebase

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
