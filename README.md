#Skyglass Security - client-side security module for AngularJS.

* angular-spring-security is a secured angular + spring demo project with protected urls, angular states, menu tabs and actions, based on Angular JS, Skyglass Security, Angular UI-Router, angular-permission, uiBreadcrumbs directive, Spring Boot, Spring Security, Spring REST, Spring Data JPA and HSQLDB

#angular-spring-security installation

* Run 'mvn clean install' or import 'angular-spring-security' maven project to your IDE

#angular-spring-security Configuration


* All angular states are defined in 'src/main/resources/static/js/modules/app.js' file. Any non-abstract state shoud have 'data.displayName' property which is used by uiBreadcrumbs directive to automatically generate breadcrumbs. Any non-abstract state may have 'data.permissions' property which is used by angular-permission library to protect the angular state and redirect unauthorized user to 'No Permissions' page. Define your own states in this file to enable state protection and breadcrumbs auto generation in your own application. See https://github.com/angular-ui/ui-router/wiki/nested-states-%26-nested-views for more details on angular-ui-router nested states & nested views.

#Skyglass Security Configuration

* 'src/main/resources/static/security' - Skyglass Security Module folder
* 'src/main/resources/static/js/security/config' - Skyglass Security Config folder. All files in this folder should be changed to enable Skyglass Security in your own Application.
* 'src/main/resources/static/js/security/config/security.config.js' contains basic settings like 'loginPath', 'authenticateUrl', 'rememberMeAuthenticateUrl', 'logoutUrl' and so on
* 'src/main/resources/static/js/security/config/security.permissions.js' contains USER_ROLES constants and PERMISSIONS properties. Change these objects to define your own permissions. USER_ROLES correspond to role names on server. PERMISSIONS properties are used by 'security.menu.config.js' to protect menu tabs and by 'security.state.permissions.js' to protect angular states
* 'src/main/resources/static/js/security/config/security.menu.config.js' contains menu tabs configuration. Any menu tab may have 'permission' property (or array of properties) to define authorization rules. Unauthorized user won't be able to see protected tab. Names of menu tab 'permission' properties are defined in PERMISSIONS object of 'security.state.permissions.js' file.
- 'src/main/resources/static/js/security/config/security.state.permissions.js' sets permissions for 'angular-permission'. These permissions are used to protect angular states. Unauthorized user won't be able to go to protected state and will be redirected to 'No Permissions' state. 

#Skyglass Security API
* $securitySession.permissions - returns permissions defined in security.permission.js file
* $securityMenuConfig[{menuName}].tabs - returns tabs defined in security.menu.config.js file
* $securityMenuConfig[{menuName}].{property} - returns any other property defined in security.menu.config.js file
* $securityMenuConfig.defaultAdminState() - returns dynamic state which depends on user permissions. For example, for user 'admin' it would be 'skyglass.admin.write' state, but for user 'audit' it would be 'skyglass.admin.read' state.

#Skyglass Security UI
2. Run skyglass.demo.SkgApplication java class
3. Go to localhost:8080/{any_friendly_url}. All urls are 'friendly'. No more #anchors!
4. You will be redirected to login page with 'remember me' checkbox
5. Login 'admin', password: 'admin'
6. You will be redirected to {any_friendly_url} or 'Home' state.
