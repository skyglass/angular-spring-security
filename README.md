Skyglass Security is a client-side security module for AngularJS.

'angular-spring-security' is a secured angular demo Single Page Application with protected urls, angular states, menu tabs and form actions, based on Angular JS, Skyglass Security, Angular UI-Router, angular-permission, uiBreadcrumbs directive (+ Spring Boot, Spring Security, Spring REST, Spring Data JPA on server-side)

1. Run mvn clean install or import 'angular-spring-security' maven project to your IDE
2. Run skyglass.demo.SkgApplication java class
3. Go to localhost:8080/{any_friendly_url}. All urls are 'friendly'. No more #anchors!
4. You will be redirected to login page with 'remember me' checkbox
5. Login 'admin', password: 'admin'
6. You will be redirected to {any_friendly_url} or 'Home' state.
7. All angular states are defined in js/modules/app.js file. Any state contains data.displayName property which is used by uiBreadcrumbs directive to automatically generate breadcrumbs. Any state contains data.permissions property which is used by angular-permission library to protect the state and redirect unauthorized user to 'No Permissions' page. See https://github.com/angular-ui/ui-router/wiki/nested-states-%26-nested-views for more details on angular-ui-router nested states & nested views.
8. 
