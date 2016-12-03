define([
    'angular',
    'controllers',
    'directives',
    'filters',
    'services',
    'configurations',
    'templates',
    'thirdparty',
    'componentsModule',
    'resource',
    'utilsModule',
    'skgSecurity',    
    'route',
	'uirouter',
	'uiroutertabs',
	
    'messageService',
	
    'indexCtrl',
    'loginCtrl',
    'permissionsCtrl',
    
	'userServices',
	'configServices',
	'homeCtrl',
	'tabsCtrl',
	'messageCtrl',
	'adminCtrl',
	'adminWriteCtrl',
	'adminReadCtrl',
	'adminChangesCtrl',
	'adminSecurityCtrl',
    'btnTitleDirective',
    
    'multipleDialogCtrl'
], function(angular) {

    return angular.module('skyglass', [
            'skyglass.controllers',
            'skyglass.directives',
            'skyglass.filters',
            'skyglass.services',
            'skyglass.configs',
            'skyglass.templates',
            'skyglass.thirdparty',	
            'skyglass.utils',  
            'skyglass.security',
             'skyglass.components', 

    		'ui.router',
    		'ui.bootstrap',
    		'ui.router.tabs',		
    		'angularUtils.directives.uiBreadcrumbs'
        ])
        .config(['$stateProvider', '$httpProvider', '$locationProvider', '$urlRouterProvider', 
                   '$securityConfigProvider', '$securityServiceProvider', '$windowProvider',
                   
            function($stateProvider, $httpProvider, $locationProvider, $urlRouterProvider, 
            		$securityConfigProvider, $securityServiceProvider, $windowProvider) {
		            
					$securityServiceProvider.rememberMeAuthenticate($windowProvider.$get().location.pathname);

					$locationProvider.html5Mode(true);
					
					$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
					
					$urlRouterProvider.otherwise(function($injector){
						  $injector.invoke(['$state', function($state) {
						    $state.go($securityConfigProvider.Config.homeState);
						  }]);
					}); 
					
				
					$stateProvider
					
					   .state('skyglass', {
					        url: '/skyglass',
					        abstract: true,
					        resolve: {
					          skgConfig: function(configService){
					        	  return configService.query().$promise;
					          },
					          // has to be resolved by any child state
					          Something: function($http) {
					              // real delay
					              //return $http.get('http://httpbin.org/delay/5');
					        	  return true;
						      }						      
					        }

					    })
				        
				        .state($securityConfigProvider.Config.noPermissionsState, {
				            url: $securityConfigProvider.Config.noPermissionsPath,
				            views: {
				                "mainView@": {
				                    templateUrl: "js/app/permissions/permissions.html",
				                    controller : 'permissionsCtrl'
				                }
				            },
		                    data: {
		                    	displayName: 'No Permissions'      	
						    }				            
				        }) 
							    
					    .state($securityConfigProvider.Config.homeState, {
					      url: $securityConfigProvider.Config.homePath,
					      views: {
					        'mainView@': {
					          templateUrl: 'js/app/home/home.html',
					          controller: 'homeCtrl'
					        }
					      },
		                  data: {
		                	  displayName: 'Home',
		                      permissions: {
	                            only: ['authenticated'],
	                            redirectTo: 'skyglass.permissions'
		                      }
						  }					    
					    })					    
						
				        .state('skyglass.tabs', {
				            url: '/tabs',
				            views: {
				                "mainView@": {
				                    abstract :true,
				                    templateUrl: "js/app/tabs/tabs.html",
				                    controller : 'tabsCtrl',
				                    resolve: {
			                            text: function ($http) {
			                                return $http.get(
			                                		"js/lorem.ipsum"/*your rest service*/,
			                                		{transformResponse: undefined})
			                                		.then(function (result) {
			                                    return result.data;
			                                });
			                            }
				                    } //resolve elements useful only for the ENTIRE sub-section
				                }
				            },
		                    data: {
		                    	displayName: 'Tabs',
			                    permissions: {
		                    	  only: ['authenticated'],
		                    	  redirectTo: 'skyglass.permissions'
				                }		                    	
						    }				            
				        })	
				        
				        
				    /*START FIRST TAB*/
				        .state('skyglass.tabs.first', {
				            url: '/first',
				            views: {
				                "tabs@skyglass.tabs": {
				                    abstract: true,
				                    templateUrl: "js/app/tabs/tabs-first.html",
				                    controller: function ($scope) {
				                        //Controller in the abstract state is used only to set "global" elements for the state and the sub-states
				                        $scope.voice = "Internal sub-menu";
				                        $scope.menu = [
				                            {state: 'skyglass.tabs.first.firstTabSub1', name: 'Menu voice 1'},
				                            {state: 'skyglass.tabs.first.firstTabSub2', name: 'Menu voice 2'}
				                        ];
				                    },
				                    resolve: {}
				                }
				            },
		                    data: {
		                    	displayName: 'Menu Tab',
			                    permissions: {
			                    	only: ['authenticated']
				                }		                    	
						    }				            
				        })
				        .state('skyglass.tabs.first.firstTabSub1', {
				            url : '/firstTabSub1',
				            views:{
				            "firstTabMenuContent@skyglass.tabs.first": {
				                template: "<h5>First Tab's Menu Voice 1</h5>{{text}}",
				                controller: function ($scope) {
				                    //In this view we are going to show some text $scope.text, resolved in the parent abstract state
				                    //this is a good idea ONLY because we are going to use the same text, the same $scope.text, in the sibling view
				                }
				            }		            
				            },
		                    data: {
		                    	displayName: 'Menu Voice 1',
			                    permissions: {
			                    	only: ['authenticated']
				                }		                    	
						    }				            
				        })
				        .state('skyglass.tabs.first.firstTabSub2', {
				            url : '/firstTabSub2',
				            views:{
				            "firstTabMenuContent@skyglass.tabs.first": {
				                template: "<h5>Second Tab's Menu Voice 2</h5>{{text}}",
				                controller: function ($scope) {
				                    //In this view we are going to show some text $scope.text, resolved in the parent abstract state
				                    //this is a good idea ONLY because we are going to use the same text, the same $scope.text, in the sibling view
				                }
				            }
				            },
		                    data: {
		                    	displayName: 'Menu Voice 2',
			                    permissions: {
			                    	only: ['authenticated']
				                }		                    	
						    }				            
				        })
				    /*END FIRST TAB*/
				        
				    /*START SECOND TAB*/
				        .state('skyglass.tabs.second', {
				            url: '/second',
				            views: {
				                "tabs@skyglass.tabs": {
				                    abstract: true,
				                    templateUrl: "js/app/tabs/tabs-second.html",
				                    controller: function ($scope) {
				                        //Controller in the abstract state is used only to set "global" elements for the state and the sub-states
				                        $scope.voice = "Contextual views with parallel contents";
				                    },
				                    resolve: {}
				                }
				            },
		                    data: {
		                    	displayName: false,
			                    permissions: {
			                    	  only: ['adminAuditorWriter'],
			                    	  redirectTo: 'skyglass.permissions'
						        }		                    	
						    }				            
				        })
				        .state('skyglass.tabs.second.content',{
				            url:'/content',
				            views:{
				                "left_inside_secondTab@skyglass.tabs.second":{
				                    templateUrl: "js/app/tabs/tabs-second-left.html",
				                    controller: function ($scope) {
				                    },
				                    resolve: {}
				                },
				                "right_inside_secondTab@skyglass.tabs.second":{
				                    template: "Content in the right column of content tab",
				                    controller: function ($scope) {
				                    },
				                    resolve: {}
				                }
				            },
		                    data: {
		                    	displayName: 'Content Tab',
			                    permissions: {
			                    	  only: ['adminAuditorWriter'],
			                    	  redirectTo: 'skyglass.permissions'
						        }			                    	
						    }					            
				        })
				        .state('skyglass.tabs.second.content.replace',{
				            url:'/replace',
				            views:{
				                "left_inside_secondTab@skyglass.tabs.second":{
				                    templateUrl: "js/app/tabs/tabs-second-left-replace.html",
				                    controller: function ($scope) {
				                    },
				                    resolve: {}
				                }
				            },
		                    data: {
		                    	displayName: 'Replace',
			                    permissions: {
			                    	  only: ['adminAuditorWriter'],
			                    	  redirectTo: 'skyglass.permissions'
						        }			                    	
						    }				            
				        })
				    /*END SECOND TAB*/
				
				    /*END TABS*/	
				        
				    /*START CONTENT*/
				        .state('skyglass.content', {
				            url: '/content',
				            views: {
				                "mainView@": {
				                    template: "<div id='container'><h1>{{voice}}</h1>{{text}}</div>",
				                    controller: function($scope, text) {
				                        //Controller i the abstract state is used only to set "global" elements for the state and the sub-states
				                        $scope.voice = "Content example";
				                        $scope.text = text;
				                    },
				                    resolve: { //pre-resolve elements for the state
				                        text: function($http) {
				                            return $http.get(
				                            		"js/lorem.ipsum"/*your rest service*/,
				                            		{transformResponse: undefined})
				                            		.then(function (result) {
				                                return result.data;
				                            });
				                        }
				                    }
				                }
				            },
		                    data: {
		                    	displayName: 'Content',
			                    permissions: {
		                    	  only: ['authenticated'],
		                    	  redirectTo: 'skyglass.permissions'
					            }			                    	
						    }				            
				        })
				    /*END CONTENT*/				        
					  

					    
					    // this is a demonstration of how abstract states can be handled by this
					    // directive. See the docs for a detailed explanation.					    
				        .state('skyglass.users', {
				            url: '/users',
				            abstract: true,
				            views: {
				                "mainView@": {
				                    abstract :true
				                }
				            },
						    data: {
						        proxy: 'skyglass.users.list'
						    }				        
				        })						    
				    
					    
					    .state('skyglass.users.list', {
					      url: '/list',
					      views: {
					        'mainView@': {
						       templateUrl: 'js/app/users/users-list.html',
					        }
					      },
					      data: {
						    displayName: 'Users',
		                    permissions: {
	                    	  only: ['authenticated'],
	                    	  redirectTo: 'skyglass.permissions'
					        }							     
					      }
					    })
					    
					    .state('skyglass.users.detail', {
					      url: '/:id',
					      views: {
					        'mainView@': {
							  templateUrl: 'js/app/users/users-detail.html',
					          controller: function($scope, userName) {
					            $scope.userName = userName;
					          }
					        }
					      },
					      data: {
					        displayName: '{{ userName | uppercase }}',
		                    permissions: {
	                    	  only: ['authenticated'],
	                    	  redirectTo: 'skyglass.permissions'
						    }						        
					      },
					      resolve: {
					        userName: function($stateParams, userService) {
					          return userService.getUserName($stateParams.id)
					        },
					        userImage: function($stateParams, userService) {
					          return userService.getUserImage($stateParams.id)
					        }
					      }
					    })
					    
					    .state('skyglass.users.detail.image', {
					      views: {
					        'mainView@': {
							  templateUrl: 'js/app/users/users-image.html',
					          controller: function($scope, $state, userImage) {
					            $scope.src = userImage;
					            $scope.parent = {
					              name: $state.$current.parent.self.name,
					              params: $state.params
					            };
					          }
					        }
					      },
					      data: {
					        displayName: false,
		                    permissions: {
	                    	  only: ['authenticated'],
	                    	  redirectTo: 'skyglass.permissions'
						    }						        
					      }
					    })	
					    
					    .state('skyglass.message', {
				            url: '/message',
				            views: {
				                "mainView@": {
									templateUrl : 'js/app/message/message.html',
									controller : 'messageCtrl',
				                }
				            },
						    data: {
						    	displayName: 'Message',
			                    permissions: {
			                    	  only: ['authenticated'],
			                    	  redirectTo: 'skyglass.permissions'
								}					    	
						    }
					    })	
					    
					    .state($securityConfigProvider.Config.loginState, {
				            url: $securityConfigProvider.Config.loginPath,
				            views: {
				                "mainView@": {
									templateUrl : 'js/app/login/login.html',
									controller : 'loginCtrl',
				                }
				            },
						    data: {
						    	displayName: 'Login'
						    }
					    })
					    
					    .state('skyglass.admin', {
						      url: '/admin',
						      views: {
						        'mainView@': {
						          templateUrl: 'js/app/admin/admin.html',
						          controller: 'adminCtrl'
						        }
						      },
			                  data: {
			                	  displayName: 'Admin',
			                	  //proxyLink: 'skyglass.admin.write'
			                	  proxyLink: '{{ proxyLink }}',
				                  permissions: {
			                    	  only: ['admin'],
			                    	  redirectTo: 'skyglass.permissions'
								  }		                	  
							  },
			                  resolve: {
			                	  proxyLink: function($securityMenuConfig){
			                		  return $securityMenuConfig.defaultAdminState();
			                	  },
			                	  greeting: function($http, $q) {
			                		  var dfd = $q.defer()
			                          $http.get('/resource/').success(function(data) {
			                        	  dfd.resolve(data);
					            	  })
					            	  return dfd.promise;
			                      }
			                  }
						})		
						
					    .state('skyglass.admin.read', {
						      url: '/read',
						      views: {
						        'admin@skyglass.admin': {
						          templateUrl: 'js/app/admin/admin-read.html',
						          controller: 'adminReadCtrl'
						        }
						      },
			                  data: {
			                	  displayName: 'Read',
				                  permissions: {
			                    	  only: ['adminReader'],
			                    	  redirectTo: 'skyglass.permissions'
								  }				                	  
							  }					    
						})	
						
					    .state('skyglass.admin.write', {
						      url: '/write',
						      views: {
						        'admin@skyglass.admin': {
						          templateUrl: 'js/app/admin/admin-write.html',
						          controller: 'adminWriteCtrl'
						        }
						      },
			                  data: {
			                	  displayName: 'Write',
				                  permissions: {
			                    	  only: ['adminWriter'],
			                    	  redirectTo: 'skyglass.permissions'			                    	  
								  }				                	  
							  }					    
						})	
						
					    .state('skyglass.admin.changes', {
						      url: '/changes',
						      views: {
						        'admin@skyglass.admin': {
						          templateUrl: 'js/app/admin/admin-changes.html',
						          controller: 'adminChangesCtrl'
						        }
						      },
			                  data: {
			                	  displayName: 'Changes',
				                  permissions: {
			                    	  only: ['admin'],
			                    	  redirectTo: 'skyglass.permissions'	
								  }					                	  
							  }					    
						})
						
		                .state('skyglass.admin.security', {
		                    url: '/security',
		                    views: {
		                        'admin@skyglass.admin': {
		                            templateUrl: 'js/app/admin/security/admin-security.html',
		                            controller: 'adminSecurityCtrl',
		                        }
		                    },
		                    data: {
		                        displayName: 'Security',
		                        proxyLink: 'skyglass.admin.security.users',
		                        permissions: {
		                            only: ['adminSecurity'],
			                    	redirectTo: 'skyglass.permissions'
		                        }		                        
		                    }
		                }) 
		                
		                .state('skyglass.admin.security.users', {
		                    url: '/users',
		                    views: {
		                        'security@skyglass.admin.security': {
		                            templateUrl: 'js/app/admin/security/users/security-users.html',
		                            controller: 'adminSecurityUsersCtrl'
		                        }
		                    },
		                    data: {
		                    	displayName: 'Users',
		                        permissions: {
		                            only: ['adminSecurity'],
			                    	redirectTo: 'skyglass.permissions'
		                        }			                    	
		                    }
		                }) 	
		                
		                .state('skyglass.admin.security.roles', {
		                    url: '/roles',
		                    views: {
		                        'security@skyglass.admin.security': {
		                            templateUrl: 'js/app/admin/security/roles/security-roles.html',
		                            controller: 'adminSecurityRolesCtrl'
		                        }
		                    },
		                    data: {
		                    	displayName: 'Roles',
		                        permissions: {
		                            only: ['adminSecurity'],
			                    	redirectTo: 'skyglass.permissions'
		                        }			                    	
		                    }
		                }) 	
		                
		                .state('skyglass.admin.security.tokens', {
		                    url: '/tokens',
		                    views: {
		                        'security@skyglass.admin.security': {
		                            templateUrl: 'js/app/admin/security/tokens/security-tokens.html',
		                            controller: 'adminSecurityTokensCtrl'
		                        }
		                    },
		                    data: {
		                    	displayName: 'Tokens',
		                        permissions: {
		                            only: ['adminSecurity'],
			                    	redirectTo: 'skyglass.permissions'
		                        }			                    	
		                    }
		                }) 		                

				}])
				
				.run(function($rootScope, $log, $state, $securityService, $location) {
					  // Initialize auth module with the home page and login/logout path
					  // respectively
					  $securityService.start();		  
					  
					  $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
						  $log.debug(error);
						  console.log(error);
					  });		  

				});
    
});