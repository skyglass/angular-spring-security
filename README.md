#Skyglass Security is a client-side security module for AngularJS.

#'angular-spring-security' is a secured angular demo Single Page Application with protected urls, angular states, menu tabs and form actions, based on Angular JS, Skyglass Security, Angular UI-Router, angular-permission, uiBreadcrumbs directive (+ server side: Spring Boot, Spring Security, Spring REST, Spring Data JPA)

1. Run 'mvn clean install' or import 'angular-spring-security' maven project to your IDE
2. Run skyglass.demo.SkgApplication java class
3. Go to localhost:8080/{any_friendly_url}. All urls are 'friendly'. No more #anchors!
4. You will be redirected to login page with 'remember me' checkbox
5. Login 'admin', password: 'admin'
6. You will be redirected to {any_friendly_url} or 'Home' state.
7. All angular states are defined in 'js/modules/app.js' file. Any state may have 'data.displayName' property which is used by uiBreadcrumbs directive to automatically generate breadcrumbs. Any state may have 'data.permissions' property which is used by angular-permission library to protect the angular state and redirect unauthorized user to 'No Permissions' page. Define your own states in this file to enable state protection and breadcrumbs auto generation in your own application. See https://github.com/angular-ui/ui-router/wiki/nested-states-%26-nested-views for more details on angular-ui-router nested states & nested views.
8. Go to 'js/security/config'. It is a config folder for Skyglass Security module. All files in this folder should be changed to enable Skyglass Security in your own Application.
- 'js/security/config/security.config.js' contains basic settings like 'loginPath', 'authenticateUrl', 'logoutUrl' and so on
- 'js/security/config/security.state.permissions.js' contains USER_ROLES constants and PERMISSIONS properties. Change these objects to define your own permissions. USER_ROLES correspond to role names on server. PERMISSIONS properties are used by 'security.menu.config.js' to protect menu tabs and by 'security.state.permissions.js' to protect angular states
- 'js/security/config/security.menu.config.js' contains menu tabs configuration. Any menu tab may have 'permission' property (or array of properties) to define authorization rules. Unauthorized user won't be able to see protected tab. Names of menu tab 'permission' properties are defined in PERMISSIONS object of 'security.state.permissions.js' file.
- 'js/security/config/security.state.permissions.js' sets permissions for 'angular-permission'. These permissions are used to protect angular states. Unauthorized user won't be able to go to protected state and will be redirected to 'No Permissions' state. 
