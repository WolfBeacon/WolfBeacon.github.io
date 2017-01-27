/*! Last updated: 2016-05-31 */ ! function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = "function" == typeof require && require;
                if (!u && a) return a(o, !0);
                if (i) return i(o, !0);
                var f = new Error("Cannot find module '" + o + "'");
                throw f.code = "MODULE_NOT_FOUND", f
            }
            var l = n[o] = {
                exports: {}
            };
            t[o][0].call(l.exports, function(e) {
                var n = t[o][1][e];
                return s(n ? n : e)
            }, l, l.exports, e, t, n, r)
        }
        return n[o].exports
    }
    for (var i = "function" == typeof require && require, o = 0; o < r.length; o++) s(r[o]);
    return s
}({
    1: [function(require, module, exports) {
        function default_1(app) {
            app.constant("currentUser", {
                id: null,
                token: null,
                tokenExpiry: null,
                tokenRefresh: null
            }), app.constant("instanceConfiguration", {
                clientId: "",
                clientSecret: "",
                analyticsAppID: "",
                dataEndpoint: "",
                subscriberAppDomain: "",
                registrationAppDomain: "",
                perUserPrice: 12
            }), app.constant("staticUrls", {
                plansPricingPage: "https://www.paypr.co.nz/pricing",
                benefitsPage: "https://www.paypr.co.nz/features",
                blogPage: "https://www.paypr.co.nz/blog",
                subscriberTermsPage: "https://www.paypr.co.nz/subscriber-terms-conditions",
                mobileTermsPage: "https://www.paypr.co.nz/mobile-application-end-user-terms",
                privacyPage: "https://www.paypr.co.nz/privacy",
                faqs: "https://www.paypr.co.nz/frequently-asked-questions",
                xeroLoginUrl: "https://login.xero.com",
                xeroAddUsersUrl: "https://xero.com",
                appStoreUrl: "https://itunes.apple.com/us/app/paypr/id1112322794?ls=1&mt=8",
                playStoreUrl: "http://play.google.com/store/apps/details?id=nz.co.paymark.paypr",
                registerUrlHash: "/#/sign-up",
                forgotUrlHash: "/#/reset-password",
                loginUrlHash: "/#/login",
                registerFormUrl: "/handler/register/",
                resetFormUrl: "/handler/forgot/reset/",
                inviteFormUrl: "/handler/invite/accept/"
            })
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = default_1
    }, {}],
    2: [function(require, module, exports) {
        function default_1(app) {
            app.filter("camelcaseToHuman", function() {
                return function(input) {
                    return "string" != typeof input ? "" : input.replace(/([a-z\d])([A-Z])/g, "$1-$2").toLowerCase()
                }
            }), app.filter("userFilter", function() {
                return function(users, searchText) {
                    var matching = [],
                        inputText = searchText.toLowerCase();
                    for (var k in users)(users[k].firstName.toLowerCase().indexOf(inputText) > -1 || users[k].lastName.toLowerCase().indexOf(inputText) > -1 || users[k].email.toLowerCase().indexOf(inputText) > -1 || "" === searchText) && matching.push(users[k]);
                    return matching
                }
            })
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = default_1
    }, {}],
    3: [function(require, module, exports) {
        var sessionService_ts_1 = require("../services/sessionService.ts"),
            authService_ts_1 = require("../services/authService.ts"),
            requestManager_ts_1 = require("../services/requestManager.ts"),
            helpService_ts_1 = require("../services/helpService.ts"),
            notificationService_ts_1 = require("../services/notificationService.ts"),
            validationService_ts_1 = require("../services/validationService.ts"),
            utilService_ts_1 = require("../services/utilService.ts"),
            redirectService_ts_1 = require("../services/redirectService.ts"),
            routingService_ts_1 = require("../services/routingService.ts"),
            xeroAuthService_ts_1 = require("../services/xeroAuthService.ts"),
            billingService_ts_1 = require("../services/billingService.ts"),
            analyticsService_ts_1 = require("../services/analyticsService.ts"),
            configLoader_ts_1 = require("../services/configLoader.ts"),
            memberService_ts_1 = require("../dataServices/memberService.ts"),
            organisationService_ts_1 = require("../dataServices/organisationService.ts"),
            userService_ts_1 = require("../dataServices/userService.ts"),
            xeroUserService_ts_1 = require("../dataServices/xeroUserService.ts"),
            invoiceService_ts_1 = require("../dataServices/invoiceService.ts"),
            form_ts_1 = require("../directives/form.ts"),
            formFields_ts_1 = require("../directives/formFields.ts"),
            staticSref_ts_1 = require("../directives/staticSref.ts"),
            steps_ts_1 = require("../directives/steps.ts"),
            loadingOverlay_ts_1 = require("../directives/loadingOverlay.ts"),
            modal_ts_1 = require("../directives/modal.ts"),
            tab_ts_1 = require("../directives/tab.ts"),
            collapse_ts_1 = require("../directives/collapse.ts"),
            help_ts_1 = require("../directives/help.ts"),
            navbarCollapse_ts_1 = require("../directives/navbarCollapse.ts"),
            dismissiblePanel_ts_1 = require("../directives/dismissiblePanel.ts"),
            alertMessage_ts_1 = require("../directives/alertMessage.ts"),
            confirmDialog_ts_1 = require("../directives/confirmDialog.ts"),
            login_ts_1 = require("../controllers/login.ts"),
            forgotPassword_ts_1 = require("../controllers/forgotPassword.ts"),
            account_ts_1 = require("../controllers/account.ts"),
            onboarding_ts_1 = require("../controllers/onboarding.ts"),
            billing_ts_1 = require("../controllers/billing.ts"),
            xero_ts_1 = require("../controllers/xero.ts"),
            dashboard_ts_1 = require("../controllers/dashboard.ts"),
            billingAndSubscription_ts_1 = require("../controllers/billingAndSubscription.ts"),
            modal_ts_2 = require("../controllers/modal.ts"),
            getPaypr_ts_1 = require("../controllers/getPaypr.ts"),
            config_ts_1 = require("./config.ts"),
            filters_ts_1 = require("./filters.ts"),
            app = angular.module("paypr", ["ui.router", "paypr_templates", "ngRetina", "ngPromiseExtras"]);
        app.constant("applicationName", "subscriberApp"), app.factory("SessionService", sessionService_ts_1["default"].SessionService.getService), app.factory("AuthService", authService_ts_1["default"].AuthService.getService), app.factory("ConfigInterceptor", requestManager_ts_1["default"].ConfigInterceptor.getInterceptor), app.factory("ErrorInterceptor", requestManager_ts_1["default"].ErrorInterceptor.getInterceptor), app.service("HttpManager", requestManager_ts_1["default"].HttpManager), app.service("HelpService", helpService_ts_1["default"].HelpService.getService), app.service("NotificationService", notificationService_ts_1["default"].NotificationService.getService), app.service("ValidationService", validationService_ts_1["default"].ValidationService.getService), app.service("UtilService", utilService_ts_1["default"].UtilService.getService), app.service("RedirectService", redirectService_ts_1["default"].RedirectService.getService), app.service("RoutingService", routingService_ts_1["default"].RoutingService.getService), app.service("XeroAuthService", xeroAuthService_ts_1["default"].XeroAuthService.getService), app.service("BillingService", billingService_ts_1["default"].BillingService.getService), app.service("AnalyticsService", analyticsService_ts_1["default"].AnalyticsService.getService), app.service("ConfigLoader", configLoader_ts_1["default"].Loader), app.factory("MemberModel", memberService_ts_1["default"].MemberModel.getFactory), app.service("MemberCollection", memberService_ts_1["default"].MemberCollection.getService), app.factory("OrganisationModel", organisationService_ts_1["default"].OrganisationModel.getFactory), app.service("OrganisationCollection", organisationService_ts_1["default"].OrganisationCollection.getService), app.factory("UserModel", userService_ts_1["default"].UserModel.getFactory), app.service("UserCollection", userService_ts_1["default"].UserCollection.getService), app.factory("XeroUserModel", xeroUserService_ts_1["default"].XeroUserModel.getFactory), app.service("XeroUserCollection", xeroUserService_ts_1["default"].XeroUserCollection.getService), app.factory("InvoiceModel", invoiceService_ts_1["default"].InvoiceModel.getFactory), app.service("InvoiceCollection", invoiceService_ts_1["default"].InvoiceCollection.getService), app.directive("feedbackButton", form_ts_1["default"].feedbackButton), app.directive("managedForm", form_ts_1["default"].managedForm), app.directive("inputField", formFields_ts_1["default"].inputField), app.directive("selectField", formFields_ts_1["default"].selectField), app.directive("staticSref", staticSref_ts_1["default"].staticSref), app.directive("stepCounter", steps_ts_1["default"].stepCounter), app.directive("loadingOverlay", loadingOverlay_ts_1["default"].overlay), app.directive("modalView", modal_ts_1["default"].modalView), app.directive("tabView", tab_ts_1["default"].tabView), app.directive("collapseView", collapse_ts_1["default"].collapseView), app.directive("helpTrigger", help_ts_1["default"].helpTrigger), app.directive("navbarCollapse", navbarCollapse_ts_1["default"].navbarCollapse), app.directive("dismissiblePanel", dismissiblePanel_ts_1["default"].dismissiblePanel), app.directive("alertMessage", alertMessage_ts_1["default"].alertMessage), app.directive("confirmDialog", confirmDialog_ts_1["default"].confirmDialog), app.controller("LoginController", login_ts_1["default"].LoginController), app.controller("ForgotPasswordController", forgotPassword_ts_1["default"].ForgotPasswordController), app.controller("LogoutController", account_ts_1["default"].LogoutController), app.controller("XeroConnectController", xero_ts_1["default"].ConnectController), app.controller("XeroCallbackController", xero_ts_1["default"].CallbackController), app.controller("BillingController", billing_ts_1["default"].BillingController), app.controller("BillingCallbackController", billing_ts_1["default"].CallbackController), app.controller("OnboardingErrorController", onboarding_ts_1["default"].ErrorController), app.controller("GetPayprController", getPaypr_ts_1["default"].GetController), app.controller("AdminDashboardController", dashboard_ts_1["default"].DashboardController), app.controller("AdminMyAccountController", account_ts_1["default"].MyAccountController), app.controller("AdminBillingAndSubscriptionController", billingAndSubscription_ts_1["default"].BillingAndSubscriptionController), app.controller("InviteModalController", modal_ts_2["default"].InviteModalController), app.controller("ShareModalController", modal_ts_2["default"].ShareModalController), config_ts_1["default"](app), filters_ts_1["default"](app), Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = app
    }, {
        "../controllers/account.ts": 4,
        "../controllers/billing.ts": 5,
        "../controllers/billingAndSubscription.ts": 6,
        "../controllers/dashboard.ts": 7,
        "../controllers/forgotPassword.ts": 8,
        "../controllers/getPaypr.ts": 9,
        "../controllers/login.ts": 10,
        "../controllers/modal.ts": 11,
        "../controllers/onboarding.ts": 12,
        "../controllers/xero.ts": 13,
        "../dataServices/invoiceService.ts": 15,
        "../dataServices/memberService.ts": 16,
        "../dataServices/organisationService.ts": 17,
        "../dataServices/userService.ts": 18,
        "../dataServices/xeroUserService.ts": 19,
        "../directives/alertMessage.ts": 20,
        "../directives/collapse.ts": 21,
        "../directives/confirmDialog.ts": 22,
        "../directives/dismissiblePanel.ts": 23,
        "../directives/form.ts": 24,
        "../directives/formFields.ts": 25,
        "../directives/help.ts": 26,
        "../directives/loadingOverlay.ts": 27,
        "../directives/modal.ts": 28,
        "../directives/navbarCollapse.ts": 29,
        "../directives/staticSref.ts": 30,
        "../directives/steps.ts": 31,
        "../directives/tab.ts": 32,
        "../services/analyticsService.ts": 33,
        "../services/authService.ts": 34,
        "../services/billingService.ts": 35,
        "../services/configLoader.ts": 36,
        "../services/helpService.ts": 37,
        "../services/notificationService.ts": 38,
        "../services/redirectService.ts": 39,
        "../services/requestManager.ts": 40,
        "../services/routingService.ts": 41,
        "../services/sessionService.ts": 42,
        "../services/utilService.ts": 43,
        "../services/validationService.ts": 44,
        "../services/xeroAuthService.ts": 45,
        "./config.ts": 1,
        "./filters.ts": 2
    }],
    4: [function(require, module, exports) {
        var AccountControllerModule;
        ! function(AccountControllerModule) {
            var MyAccountController = function() {
                function MyAccountController($q, $state, $scope, $rootScope, $location, AuthService, UtilService) {
                    this.$q = $q, this.$state = $state, this.$scope = $scope, this.$rootScope = $rootScope, this.AuthService = AuthService, this.UtilService = UtilService, this.$scope.actions = this, this.$scope.activeTab = "profile", this.$scope.passwordVisible = !1, this.$rootScope.activeMenuItem = "myAccount", this.loadData()
                }
                return MyAccountController.prototype.loadData = function() {
                    var self = this;
                    this.AuthService.getUser().then(function(userResult) {
                        self.$scope.profileModel = userResult
                    })["catch"](function(err) {
                        self.showError("We were unable to load your account details. Please refresh and try again.")
                    })
                }, MyAccountController.prototype.showPassword = function() {
                    this.$scope.passwordVisible = !0
                }, MyAccountController.prototype.profile = function() {
                    var self = this,
                        promise = this.$q.defer(),
                        promiseList = [self.$scope.profileModel.saveMe()];
                    return self.$scope.profileModel.password.length && promiseList.push(self.$scope.profileModel.saveMyPassword(self.$scope.profileModel.password)), this.$q.allSettled(promiseList).then(function(promiseResult) {
                        for (var i = 0; i < promiseResult.length; i++)
                            if ("fulfilled" !== promiseResult[i].state) return promiseResult[i].reason.displayUiError = !0, void promise.reject(promiseResult[i].reason);
                        promise.resolve(!0)
                    })["catch"](function(err) {
                        promise.reject(err)
                    }), promise.promise
                }, MyAccountController.prototype.validationRules = function() {
                    return {
                        currentPassword: {
                            required: !0,
                            minlength: 8,
                            maxlength: 256,
                            strongPassword: !0
                        },
                        confirmPassword: {
                            required: !0,
                            equalTo: "#formPassword"
                        }
                    }
                }, MyAccountController.prototype.showError = function(message) {
                    this.$rootScope.pendingState || "payprAdmin.myAccount" != this.$state.current.name || this.UtilService.setErrorMessage(message)
                }, MyAccountController.$inject = ["$q", "$state", "$scope", "$rootScope", "$location", "AuthService", "UtilService"], MyAccountController
            }();
            AccountControllerModule.MyAccountController = MyAccountController;
            var LogoutController = function() {
                function LogoutController($scope, AuthService) {
                    this.$scope = $scope, this.AuthService = AuthService, this.AuthService.logout()
                }
                return LogoutController.$inject = ["$scope", "AuthService"], LogoutController
            }();
            AccountControllerModule.LogoutController = LogoutController
        }(AccountControllerModule || (AccountControllerModule = {})), Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = AccountControllerModule
    }, {}],
    5: [function(require, module, exports) {
        var BillingControllerModule;
        ! function(BillingControllerModule) {
            var BillingController = function() {
                function BillingController($q, $scope, BillingService, UtilService) {
                    this.$q = $q, this.$scope = $scope, this.BillingService = BillingService, this.UtilService = UtilService, this.$scope.actions = this
                }
                return BillingController.prototype.redirect = function($event, redirect) {
                    void 0 === redirect && (redirect = !0);
                    var self = this;
                    return this.BillingService.authorizeBilling(!0, {
                        redirect: redirect
                    })["catch"](function() {
                        $($event.currentTarget).triggerHandler("restore"), self.UtilService.setErrorMessage("We were unable to redirect you to our billing service. Please try again.")
                    })
                }, BillingController.$inject = ["$q", "$scope", "BillingService", "UtilService"], BillingController
            }();
            BillingControllerModule.BillingController = BillingController;
            var CallbackController = function() {
                function CallbackController($scope, $q, $state, UtilService, BillingService, RedirectService, AnalyticsService) {
                    this.$scope = $scope, this.$q = $q, this.$state = $state, this.UtilService = UtilService, this.BillingService = BillingService, this.RedirectService = RedirectService, this.AnalyticsService = AnalyticsService, this.$scope.actions = this, this.$scope.reintegrate = this.$state.current.data && this.$state.current.data.reintegrate ? !0 : !1, this.redirect()
                }
                return CallbackController.prototype.redirect = function() {
                    var self = this;
                    self.BillingService.validBilling(!1).then(function(valid) {
                        valid ? (self.AnalyticsService.set("Payment", !0), self.AnalyticsService.set("PaymentDate"), self.AnalyticsService.track("PaymentDate"), self.$scope.reintegrate ? self.RedirectService.nextOnboardingStep(7, {
                            reintegrate: !0
                        }) : self.RedirectService.nextOnboardingStep(7)) : self.RedirectService.nextOnboardingStep(-1, {
                            billingError: !0
                        })
                    })["catch"](function(err) {
                        self.RedirectService.nextOnboardingStep(-1, {
                            billingError: !0
                        })
                    })["finally"](function() {
                        self.UtilService.setLoadingState("hide")
                    })
                }, CallbackController.$inject = ["$scope", "$q", "$state", "UtilService", "BillingService", "RedirectService", "AnalyticsService"], CallbackController
            }();
            BillingControllerModule.CallbackController = CallbackController
        }(BillingControllerModule || (BillingControllerModule = {})), Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = BillingControllerModule
    }, {}],
    6: [function(require, module, exports) {
        var BillingAndSubscriptionControllerModule;
        ! function(BillingAndSubscriptionControllerModule) {
            var BillingAndSubscriptionController = function() {
                function BillingAndSubscriptionController($q, $scope, $rootScope, $location, UserCollection, InvoiceCollection, BillingService) {
                    this.$q = $q, this.$scope = $scope, this.$rootScope = $rootScope, this.UserCollection = UserCollection, this.InvoiceCollection = InvoiceCollection, this.BillingService = BillingService, this.$scope.actions = this, this.$rootScope.activeMenuItem = "billingAndSubscription", this.$scope.activeTab = "overview", this.getUserCount(), this.getNextBilling(), this.getInvoices(), this.getAdmins()
                }
                return BillingAndSubscriptionController.prototype.getUserCount = function() {
                    var self = this;
                    this.UserCollection.getUserCount().then(function(countResult) {
                        self.$scope.usersCount = countResult, self.$scope.usersCountFormatted = countResult + " User" + (1 === countResult ? "" : "s"), self.$scope.billingTotal = countResult * self.BillingService.getPerUserPrice()
                    })
                }, BillingAndSubscriptionController.prototype.getNextBilling = function() {
                    var self = this;
                    self.BillingService.getNextBillingDate().then(function(date) {
                        self.$scope.nextBillingDate = date
                    })
                }, BillingAndSubscriptionController.prototype.getInvoices = function() {
                    this.$scope.invoices = []
                }, BillingAndSubscriptionController.prototype.getAdmins = function() {
                    var self = this;
                    this.UserCollection.getAdminNames().then(function(adminNames) {
                        self.$scope.adminsUsers = adminNames
                    })
                }, BillingAndSubscriptionController.$inject = ["$q", "$scope", "$rootScope", "$location", "UserCollection", "InvoiceCollection", "BillingService"], BillingAndSubscriptionController
            }();
            BillingAndSubscriptionControllerModule.BillingAndSubscriptionController = BillingAndSubscriptionController
        }(BillingAndSubscriptionControllerModule || (BillingAndSubscriptionControllerModule = {})), Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = BillingAndSubscriptionControllerModule
    }, {}],
    7: [function(require, module, exports) {
        var DashboardControllerModule;
        ! function(DashboardControllerModule) {
            var DashboardController = function() {
                function DashboardController($q, $state, $scope, $rootScope, UserCollection, XeroUserCollection, MemberCollection, XeroAuthService, BillingService, UtilService, AnalyticsService, instanceConfiguration) {
                    this.$q = $q, this.$state = $state, this.$scope = $scope, this.$rootScope = $rootScope, this.UserCollection = UserCollection, this.XeroUserCollection = XeroUserCollection, this.MemberCollection = MemberCollection, this.XeroAuthService = XeroAuthService, this.BillingService = BillingService, this.UtilService = UtilService, this.AnalyticsService = AnalyticsService, this.instanceConfiguration = instanceConfiguration, this.$scope.actions = this, this.$scope.multipleAdmins = !1, this.$scope.searchText = "", this.$scope.subscribers = [], this.$scope.inactive = [], this.$scope.perUserPrice = this.instanceConfiguration.perUserPrice, this.$scope.showBillingConnect = !1, this.$rootScope.activeMenuItem = "dashboard", this.setSubscribers(), this.setInactive(), this.hasMultipleAdmins(), this.setBanners()
                }
                return DashboardController.prototype.setSubscribers = function() {
                    var users, self = this;
                    this.UserCollection.fetchAll().then(function(usersResult) {
                        return users = usersResult, self.MemberCollection.fetchAll()
                    }).then(function(memberResults) {
                        self.$scope.subscribers = users
                    })["catch"](function(err) {
                        self.showError("We were unable to load your active members.")
                    })
                }, DashboardController.prototype.setInactive = function() {
                    var self = this;
                    this.XeroUserCollection.getInactiveUsers().then(function(inactiveUsersResult) {
                        self.$scope.inactive = inactiveUsersResult, self.AnalyticsService.set("XeroUsers", self.XeroUserCollection.size())
                    })["catch"](function(err) {
                        err.status && 401 === err.status || self.showError("We were unable to load your Xero users.")
                    })
                }, DashboardController.prototype.hasMultipleAdmins = function() {
                    var self = this;
                    this.MemberCollection.hasMultipleAdmins().then(function(result) {
                        self.$scope.multipleAdmins = result
                    })
                }, DashboardController.prototype.setBanners = function() {
                    var self = this;
                    this.XeroAuthService.checkAuthorization().then(function(authorized) {
                        self.$rootScope.xeroAuthorized = authorized, self.XeroAuthService.getOrgName().then(function(name) {
                            self.$scope.xeroCompanyName = name
                        })
                    }), this.BillingService.validBilling().then(function(valid) {
                        self.$rootScope.billingAuthorized = valid, valid || self.BillingService.canConnectBilling().then(function(result) {
                            self.$scope.showBillingConnect = result
                        })
                    })
                }, DashboardController.prototype.triggerRoleChange = function(user) {
                    var self = this,
                        confirmString = "Are you sure you want to change " + user.firstName + " " + user.roleChangesString + "?",
                        closeCallback = function() {
                            setTimeout(function() {
                                self.$scope.$apply(function() {
                                    user.updatedMembershipRole = user.membershipRole
                                })
                            }, 0)
                        };
                    $("#role-update-" + user.id).triggerHandler("confirm", [confirmString, closeCallback])
                }, DashboardController.prototype.changeRole = function($event, userId) {
                    var self = this,
                        user = null,
                        membership = null,
                        defaultRole = "EXPENSE_SUBMITTER",
                        originalRole = null;
                    return this.UserCollection.fetch(userId).then(function(userResult) {
                        return user = userResult, user.getMembership()
                    }).then(function(membershipResult) {
                        return membership = membershipResult, originalRole = membership.role, user.setMembershipRole(membership.updatedRole || defaultRole)
                    }).then(function(changeRoleResult) {
                        return self.hasMultipleAdmins(), changeRoleResult
                    })["catch"](function(err) {
                        return membership.set("updatedRole", originalRole), self.hasMultipleAdmins(), err
                    })
                }, DashboardController.prototype.revokeAccess = function($event, userId) {
                    var self = this;
                    return this.UserCollection.fetch(userId).then(function(user) {
                        return self.removeUser(user)
                    }).then(function() {
                        return !0
                    })
                }, DashboardController.prototype.invite = function($event, xeroUserKey) {
                    return this.XeroUserCollection.inviteUserByKey(xeroUserKey)
                }, DashboardController.prototype.resendInvite = function($event, user) {
                    var self = this;
                    return this.UserCollection.resendInvite(user.id).then(function() {
                        $($event.currentTarget).triggerHandler("successRestore")
                    })["catch"](function(err) {
                        self.showError("We were unable to resent the invite. Please try again."), $($event.currentTarget).triggerHandler("originalRestore")
                    })
                }, DashboardController.prototype.cancelInvite = function($event, user) {
                    var self = this;
                    return this.removeUser(user).then(function() {
                        return !0
                    })["catch"](function(err) {
                        return self.showError("We were unable to cancel the invite. Please try again."), err
                    })["finally"](function() {
                        $($event.currentTarget).triggerHandler("restore")
                    })
                }, DashboardController.prototype.removeUser = function(user) {
                    var self = this;
                    return this.UserCollection.revokeUserAccess(user.id).then(function() {
                        return self.AnalyticsService.track("DeletedUsers"), self.setInactive(), !0
                    })
                }, DashboardController.prototype.reintergrate = function($event) {
                    $event.preventDefault();
                    var self = this;
                    this.XeroAuthService.authorizeXero(!0, {
                        reintegrate: !0
                    })["catch"](function(err) {
                        self.showError("We were unable to reintegrate with Xero. Please try again.")
                    })
                }, DashboardController.prototype.setupBilling = function($event) {
                    $event.preventDefault();
                    var self = this;
                    this.BillingService.authorizeBilling()["catch"](function(err) {
                        self.showError("We were unable to setup your billing. Please try again.")
                    })
                }, DashboardController.prototype.showError = function(message) {
                    this.$rootScope.pendingState || "payprAdmin.dashboard" != this.$state.current.name || this.UtilService.setErrorMessage(message)
                }, DashboardController.$inject = ["$q", "$state", "$scope", "$rootScope", "UserCollection", "XeroUserCollection", "MemberCollection", "XeroAuthService", "BillingService", "UtilService", "AnalyticsService", "instanceConfiguration"], DashboardController
            }();
            DashboardControllerModule.DashboardController = DashboardController
        }(DashboardControllerModule || (DashboardControllerModule = {})), Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = DashboardControllerModule
    }, {}],
    8: [function(require, module, exports) {
        var ForgotPasswordControllerModule;
        ! function(ForgotPasswordControllerModule) {
            var ForgotPasswordController = function() {
                function ForgotPasswordController($q, $scope, HttpManager, SessionService, UtilService) {
                    this.$q = $q, this.$scope = $scope, this.HttpManager = HttpManager, this.SessionService = SessionService, this.UtilService = UtilService, this.$scope.actions = this, this.$scope.forgotModel = {
                        email: ""
                    }, this.$scope.resetSuccess = !1
                }
                return ForgotPasswordController.prototype.forgot = function() {
                    var _this = this,
                        self = this,
                        authUrl = "/bearer/",
                        forgotUrl = "/identity/user/password/reset",
                        data = {
                            grant_type: "client_credentials"
                        },
                        requestConfig = {
                            useForgotPasswordAuth: !0
                        };
                    return this.$scope.resetSuccess = !1, this.HttpManager.post(authUrl, data, requestConfig).then(function(authorizeResult) {
                        var authorizeData = authorizeResult.data;
                        return authorizeData && "approved" === authorizeData.status ? (self.SessionService.setAuthData(authorizeData.access_token, authorizeData.issued_at, authorizeData.expires_in, null), self.HttpManager.post(forgotUrl, self.$scope.forgotModel)) : _this.$q.reject(new Error("Authorization failed."))
                    }).then(function(forgotResult) {
                        self.$scope.resetSuccess = !0
                    })["catch"](function(err) {
                        self.UtilService.setErrorMessage("We were unable to reset your password. Please try again.")
                    })["finally"](function() {
                        self.SessionService.reset()
                    })
                }, ForgotPasswordController.prototype.validationRules = function() {
                    return {
                        email: {
                            required: !0,
                            email: !0
                        }
                    }
                }, ForgotPasswordController.$inject = ["$q", "$scope", "HttpManager", "SessionService", "UtilService"], ForgotPasswordController
            }();
            ForgotPasswordControllerModule.ForgotPasswordController = ForgotPasswordController
        }(ForgotPasswordControllerModule || (ForgotPasswordControllerModule = {})), Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = ForgotPasswordControllerModule
    }, {}],
    9: [function(require, module, exports) {
        var GetPayprControllerModule;
        ! function(GetPayprControllerModule) {
            var GetController = function() {
                function GetController($scope, $rootScope, staticUrls) {
                    this.$scope = $scope, this.$rootScope = $rootScope, this.staticUrls = staticUrls, this.$rootScope.setupContainerGrid = "col-md-12", this.$scope.appStoreUrl = this.staticUrls.appStoreUrl, this.$scope.playStoreUrl = this.staticUrls.playStoreUrl
                }
                return GetController.$inject = ["$scope", "$rootScope", "staticUrls"], GetController
            }();
            GetPayprControllerModule.GetController = GetController
        }(GetPayprControllerModule || (GetPayprControllerModule = {})), Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = GetPayprControllerModule
    }, {}],
    10: [function(require, module, exports) {
        var LoginControllerModule;
        ! function(LoginControllerModule) {
            var LoginController = function() {
                function LoginController($q, $scope, $state, $stateParams, AuthService, AnalyticsService, UtilService, RedirectService) {
                    this.$q = $q, this.$scope = $scope, this.$state = $state, this.$stateParams = $stateParams, this.AuthService = AuthService, this.AnalyticsService = AnalyticsService, this.UtilService = UtilService, this.RedirectService = RedirectService, this.$scope.loggedOut = $stateParams.loggedOut || !1, this.$scope.loginRequired = $stateParams.loginRequired || !1, this.$scope.actions = this, this.$scope.loginFailed = !1, this.$scope.invalidMembership = !1, this.$scope.LoginModel = {
                        email: "",
                        password: "",
                        grant_type: "password"
                    }
                }
                return LoginController.prototype.login = function($event, redirect) {
                    void 0 === redirect && (redirect = !0);
                    var self = this,
                        promise = this.AuthService.loginViaCredentials(this.$scope.LoginModel.email, this.$scope.LoginModel.password, redirect);
                    return self.$scope.loginFailed = !1, self.$scope.invalidMembership = !1, promise.then(function(res) {
                        self.AnalyticsService.track("WebSessions"), self.AnalyticsService.set("LastSeen")
                    })["catch"](function(err) {
                        "membershipNotFound" === err.name ? self.RedirectService.nextOnboardingStep(1) : (self.AuthService.logout(!1), "userNotFound" === err.name ? self.$scope.loginFailed = !0 : "invalidMembershipType" === err.name && (self.$scope.loginFailed = !0, self.$scope.invalidMembership = !0), self.UtilService.setLoadingState("hide"), $($event.currentTarget).triggerHandler("submitComplete"))
                    }), promise
                }, LoginController.prototype.validationRules = function() {
                    return {
                        email: {
                            email: !0,
                            required: !0
                        },
                        password: {
                            required: !0
                        }
                    }
                }, LoginController.$inject = ["$q", "$scope", "$state", "$stateParams", "AuthService", "AnalyticsService", "UtilService", "RedirectService"], LoginController
            }();
            LoginControllerModule.LoginController = LoginController
        }(LoginControllerModule || (LoginControllerModule = {})), Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = LoginControllerModule
    }, {}],
    11: [function(require, module, exports) {
        var ModalControllerModule;
        ! function(ModalControllerModule) {
            var InviteModalController = function() {
                function InviteModalController($q, $scope, $stateParams, UserCollection, XeroUserCollection) {
                    this.$q = $q, this.$scope = $scope, this.$stateParams = $stateParams, this.UserCollection = UserCollection, this.XeroUserCollection = XeroUserCollection, this.$scope.actions = this, this.$scope.invited = !1, this.$scope.invitedCount = 0, this.$scope.failedCount = 0, this.$scope.totalInviteCount = 0, this.$scope.failedInvites = [], this.$scope.selectedUsersIds = {}, this.$scope.checkboxesSelected = $stateParams.selected || !1, this.setCheckboxesValues()
                }
                return InviteModalController.prototype.setCheckboxesValues = function() {
                    var self = this;
                    if (this.$scope.checkboxesSelected) var watcher = self.$scope.$watch("inviteMembers", function(newValue) {
                        if (newValue) {
                            for (var k in self.$scope.inviteMembers) self.$scope.selectedUsersIds[self.$scope.inviteMembers[k].key] = !0;
                            watcher()
                        }
                    })
                }, InviteModalController.prototype.inviteSelected = function($event) {
                    var self = this,
                        promise = this.$q.defer(),
                        selectedUsers = [],
                        submitBtn = $($event.currentTarget);
                    for (var k in this.$scope.selectedUsersIds)
                        if (this.$scope.selectedUsersIds[k]) {
                            var user = this.XeroUserCollection.getInMemoryByKey(k);
                            user && selectedUsers.push(user)
                        }
                    return 0 === selectedUsers.length ? (promise.resolve(!0), promise.promise) : (submitBtn.triggerHandler("feedback"), this.XeroUserCollection.inviteUsers(selectedUsers).then(function(invitedResults) {
                        for (var k in invitedResults) {
                            invitedResults[k] === !0 ? self.$scope.invitedCount++ : self.$scope.failedCount++;
                            for (var u in self.$scope.inviteMembers) self.$scope.inviteMembers[u].email === k && invitedResults[k] === !1 && self.$scope.failedInvites.push(self.$scope.inviteMembers[u])
                        }
                        submitBtn.triggerHandler("originalRestore"), promise.resolve(!0)
                    })["catch"](function(err) {
                        submitBtn.triggerHandler("restore"), promise.reject(err)
                    })["finally"](function() {
                        self.$scope.totalInviteCount = self.$scope.invitedCount + self.$scope.failedCount, self.$scope.invited = !0
                    }), promise.promise)
                }, InviteModalController.prototype.toggleCheckboxes = function($event) {
                    if (this.$scope.checkboxesSelected = !this.$scope.checkboxesSelected, this.$scope.selectedUsersIds = {}, this.$scope.checkboxesSelected)
                        for (var k in this.$scope.inviteMembers) this.$scope.selectedUsersIds[this.$scope.inviteMembers[k].key] = !0
                }, InviteModalController.$inject = ["$q", "$scope", "$stateParams", "UserCollection", "XeroUserCollection"], InviteModalController
            }();
            ModalControllerModule.InviteModalController = InviteModalController;
            var ShareModalController = function() {
                function ShareModalController($scope, $state, NotificationService) {
                    this.$scope = $scope, this.$state = $state, this.NotificationService = NotificationService, this.$scope.actions = this, this.$scope.shareType = this.$state.current.data && this.$state.current.data.type ? this.$state.current.data.type : "share", this.$scope.shareModel = {
                        email: "",
                        firstName: "",
                        message: ""
                    }, "tellAfriend" === this.$scope.shareType && delete this.$scope.shareModel.message
                }
                return ShareModalController.prototype.share = function() {
                    return this.NotificationService[this.$scope.shareType](this.$scope.shareModel)
                }, ShareModalController.prototype.validationRules = function() {
                    var rules = {
                        email: {
                            required: !0,
                            email: !0
                        },
                        firstName: {
                            required: !0
                        },
                        message: {
                            required: !0
                        }
                    };
                    return "tellAfriend" === this.$scope.shareType && delete rules.message, rules
                }, ShareModalController.$inject = ["$scope", "$state", "NotificationService"], ShareModalController
            }();
            ModalControllerModule.ShareModalController = ShareModalController
        }(ModalControllerModule || (ModalControllerModule = {})), Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = ModalControllerModule
    }, {}],
    12: [function(require, module, exports) {
        var OnboardingControllerModule;
        ! function(OnboardingControllerModule) {
            var ErrorController = function() {
                function ErrorController($scope, $rootScope, $stateParams, XeroAuthService, BillingService, UtilService) {
                    this.$scope = $scope, this.$rootScope = $rootScope, this.$stateParams = $stateParams, this.XeroAuthService = XeroAuthService, this.BillingService = BillingService, this.UtilService = UtilService, this.$scope.actions = this,
                        this.$scope.xeroError = this.$stateParams.xeroError === !0, this.$scope.xeroDemoCompany = this.$stateParams.xeroDemoCompany === !0, this.$scope.billingError = this.$stateParams.billingError === !0, this.$scope.genericError = this.$scope.xeroError || this.$scope.xeroDemoCompany || this.$scope.billingError ? !1 : !0, this.$rootScope.setupContainerGrid = null
                }
                return ErrorController.prototype.retryXero = function($event, redirect) {
                    void 0 === redirect && (redirect = !0);
                    var self = this;
                    this.XeroAuthService.authorizeXero(!0, {
                        redirect: redirect
                    })["catch"](function(err) {
                        self.UtilService.setErrorMessage("We were unable to connect to Xero. Please try again.")
                    })
                }, ErrorController.prototype.retryBilling = function($event, redirect) {
                    void 0 === redirect && (redirect = !0);
                    var self = this;
                    this.BillingService.authorizeBilling(!0, {
                        redirect: redirect
                    })["catch"](function(err) {
                        self.UtilService.setErrorMessage("We were unable to redirect you to our billing service. Please try again.")
                    })
                }, ErrorController.$inject = ["$scope", "$rootScope", "$stateParams", "XeroAuthService", "BillingService", "UtilService"], ErrorController
            }();
            OnboardingControllerModule.ErrorController = ErrorController
        }(OnboardingControllerModule || (OnboardingControllerModule = {})), Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = OnboardingControllerModule
    }, {}],
    13: [function(require, module, exports) {
        var XeroControllerModule;
        ! function(XeroControllerModule) {
            var ConnectController = function() {
                function ConnectController($scope, $rootScope, XeroAuthService, UtilService, AnalyticsService) {
                    this.$scope = $scope, this.$rootScope = $rootScope, this.XeroAuthService = XeroAuthService, this.UtilService = UtilService, this.AnalyticsService = AnalyticsService, this.$scope.actions = this, this.$rootScope.setupContainerGrid = null, this.AnalyticsService.setOnce("AccountCreated"), this.AnalyticsService.track("AccountCreated")
                }
                return ConnectController.prototype.authorize = function($event, redirect) {
                    void 0 === redirect && (redirect = !0);
                    var self = this;
                    this.XeroAuthService.authorizeXero(!0, {
                        redirect: redirect
                    })["catch"](function(err) {
                        $($event.currentTarget).triggerHandler("restore"), self.UtilService.setErrorMessage("We were unable to connect to Xero. Please try again.")
                    })
                }, ConnectController.$inject = ["$scope", "$rootScope", "XeroAuthService", "UtilService", "AnalyticsService"], ConnectController
            }();
            XeroControllerModule.ConnectController = ConnectController;
            var CallbackController = function() {
                function CallbackController($scope, $q, $state, UtilService, XeroUserCollection, XeroAuthService, RedirectService, AnalyticsService) {
                    this.$scope = $scope, this.$q = $q, this.$state = $state, this.UtilService = UtilService, this.XeroUserCollection = XeroUserCollection, this.XeroAuthService = XeroAuthService, this.RedirectService = RedirectService, this.AnalyticsService = AnalyticsService, this.$scope.actions = this, this.$scope.reintegrate = this.$state.current.data && this.$state.current.data.reintegrate ? !0 : !1, this.redirect()
                }
                return CallbackController.prototype.redirect = function() {
                    var self = this;
                    self.checkCallbackData().then(function(checkResult) {
                        self.AnalyticsService.set("XeroIntegration", !0), self.AnalyticsService.set("XeroDate"), self.AnalyticsService.track("XeroDate"), self.$scope.reintegrate ? self.RedirectService.nextOnboardingStep(7, {
                            reintegrate: !0
                        }) : self.RedirectService.nextOnboardingStep(4)
                    })["catch"](function(err) {
                        "demoCompany" === err.name ? self.RedirectService.nextOnboardingStep(-1, {
                            xeroDemoCompany: !0
                        }) : self.RedirectService.nextOnboardingStep(-1, {
                            xeroError: !0
                        })
                    })["finally"](function() {
                        self.UtilService.setLoadingState("hide")
                    })
                }, CallbackController.prototype.checkCallbackData = function() {
                    var self = this;
                    return self.XeroAuthService.getAuthorizationData(!0).then(function(result) {
                        return result.IsDemoCompany && result.IsDemoCompany === !0 ? self.$q.reject(self.UtilService.namedError("The users organisation is a demo company", "demoCompany")) : self.XeroAuthService.checkAuthorization()
                    })
                }, CallbackController.$inject = ["$scope", "$q", "$state", "UtilService", "XeroUserCollection", "XeroAuthService", "RedirectService", "AnalyticsService"], CallbackController
            }();
            XeroControllerModule.CallbackController = CallbackController
        }(XeroControllerModule || (XeroControllerModule = {})), Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = XeroControllerModule
    }, {}],
    14: [function(require, module, exports) {
        var BaseDataServiceModule;
        ! function(BaseDataServiceModule) {
            var BaseModel = function() {
                function BaseModel(initData) {
                    this.setDefaults(), this.fill(initData), this.afterCreate()
                }
                return BaseModel.prototype.setDefaults = function() {
                    if (this.constructor.defaults)
                        for (var key in this.constructor.defaults) this.set(key, this.constructor.defaults[key].defaultValue)
                }, BaseModel.prototype.afterCreate = function() {}, BaseModel.prototype.afterSave = function() {}, BaseModel.prototype.afterDestroy = function() {}, BaseModel.prototype.fill = function(data) {
                    if (data)
                        for (var key in data) "links" !== key && this.set(key, data[key])
                }, BaseModel.prototype.get = function(key) {
                    return this[key]
                }, BaseModel.prototype.set = function(key, value) {
                    if ("object" == typeof this.constructor.defaults && "undefined" != typeof this.constructor.defaults[key])
                        if (null === value) value = null;
                        else switch (this.constructor.defaults[key].dataType) {
                            case "string":
                                value = value.toString();
                                break;
                            case "int":
                                value = parseInt(value);
                                break;
                            case "float":
                                value = parseFloat(value);
                                break;
                            case "bool":
                            case "boolean":
                                value = value === !0 || "true" === value || 1 === value || "1" === value ? !0 : !1;
                                break;
                            case "timestamp":
                            case "date":
                            case "datestamp":
                                value = "current_timestamp" === value ? new Date : new Date(value)
                        }
                        this[key] = value
                }, BaseModel.prototype.unset = function(key) {
                    this.hasOwnProperty(key) && delete this[key]
                }, BaseModel.prototype.getEndpoint = function(id) {
                    return "number" == typeof id || "string" == typeof id ? this.constructor.endpointUrl + id : this.isNew() || id === !1 ? this.constructor.endpointUrl : this.constructor.endpointUrl + this[this.getIdKey()]
                }, BaseModel.prototype.fetch = function(id) {
                    var self = this;
                    return this.getHttp().get(this.getEndpoint(id)).then(function(result) {
                        return self.fill(result.data), self.getQ().resolve(self)
                    })
                }, BaseModel.prototype.save = function(options) {
                    var self = this,
                        id = options && "undefined" != typeof options.idKey ? options.idKey : null,
                        data = options && "undefined" != typeof options.data ? options.data : this.toDefinedProperties(),
                        optionsMethod = options && "string" == typeof options.method && ["get", "post", "put", "delete"].indexOf(options.method.toLowerCase()) >= 0 ? options.method.toLowerCase() : null,
                        method = optionsMethod ? optionsMethod : this.isNew() ? "post" : "put",
                        endpoint = this.getEndpoint(id);
                    return this.getHttp()[method](endpoint, data).then(function(result) {
                        return self.fill(result.data), self.afterSave(), self.getQ().resolve(self)
                    })
                }, BaseModel.prototype.destroy = function() {
                    var self = this;
                    return this.isNew() ? (this.setDefaults(), this.afterDestroy(), this.getQ().resolve(!0)) : this.getHttp()["delete"](this.getEndpoint()).then(function(result) {
                        return self.setDefaults(), self.afterDestroy(), self.getQ().resolve(!0)
                    })
                }, BaseModel.prototype.isNew = function() {
                    return "number" == typeof this[this.getIdKey()] || "string" == typeof this[this.getIdKey()] ? !1 : !0
                }, BaseModel.prototype.toObject = function() {
                    var data = {};
                    for (var k in this) this.hasOwnProperty(k) && (data[k] = this[k] instanceof Date ? this[k].toJSON() : this[k]);
                    return data
                }, BaseModel.prototype.toDefinedProperties = function() {
                    var data = {};
                    if (this.constructor.defaults) {
                        for (var k in this.constructor.defaults) "undefined" != typeof this[k] && (data[k] = this[k]);
                        return data
                    }
                    return []
                }, BaseModel.prototype.getValidationRules = function(extendedRules) {
                    var rules = this.constructor.getValidationRules();
                    if ("object" == typeof extendedRules)
                        for (var k in extendedRules) rules[k] = extendedRules[k];
                    return rules
                }, BaseModel.prototype.getHttp = function() {
                    return this.constructor.HttpManager
                }, BaseModel.prototype.getQ = function() {
                    return this.constructor.$q
                }, BaseModel.prototype.getIdKey = function() {
                    return this.constructor.idKey || "id"
                }, BaseModel.setBaseInjectors = function(HttpManager, $q) {
                    this.HttpManager || (this.HttpManager = HttpManager), this.$q || (this.$q = $q)
                }, BaseModel.getValidationRules = function() {
                    if (!this.validationRules && (this.validationRules = {}, this.defaults))
                        for (var k in this.defaults) this.defaults[k].validation && (this.validationRules[k] = this.defaults[k].validation);
                    return this.validationRules
                }, BaseModel.idKey = "id", BaseModel.$inject = ["HttpManager", "$q"], BaseModel
            }();
            BaseDataServiceModule.BaseModel = BaseModel;
            var BaseCollection = function() {
                function BaseCollection(model) {
                    this._items = [], this._ttlIndex = [], this.setFetched(!1), model && (this._modelClass = model)
                }
                return BaseCollection.prototype._existsAt = function(id) {
                    var idKey = this.getIdKey();
                    for (var k in this._items)
                        if (("number" == typeof this._items[k][idKey] || "string" == typeof this._items[k][idKey]) && this._items[k][idKey] == id) return k;
                    return !1
                }, BaseCollection.prototype._getInMemoryById = function(id) {
                    var index = this._existsAt(id);
                    return index !== !1 ? this._items[index] : !1
                }, BaseCollection.prototype._removeInMemoryById = function(id) {
                    var exists = this._existsAt(id);
                    exists && this._removeItem(exists)
                }, BaseCollection.prototype._addItem = function(model) {
                    var exists = this._existsAt(model[this.getIdKey()]),
                        isModel = model instanceof this._modelClass;
                    return exists !== !1 ? this._items[exists].fill(isModel ? model.toObject() : model) : exists = this._items.push(isModel ? model : new this._modelClass(model)) - 1, this.constructor.ttl && (this._ttlIndex[exists] = (new Date).getTime() + 1e3 * this.constructor.ttl), exists
                }, BaseCollection.prototype._removeItem = function(index) {
                    this._items[index] && this._items.splice(index, 1), this.constructor.ttl && this._ttlIndex[index] && this._ttlIndex.splice(index, 1)
                }, BaseCollection.prototype._purgeExpired = function() {
                    if (this.constructor.ttl) {
                        for (var purged = 0, currentTime = (new Date).getTime(), l = this._ttlIndex.length; l--;) this._ttlIndex[l] < currentTime && (this._removeItem(l), purged++);
                        return purged > 0 && this.setFetched(!1), purged
                    }
                    return 0
                }, BaseCollection.prototype.length = function() {
                    return this._items.length
                }, BaseCollection.prototype.size = function() {
                    return this.length()
                }, BaseCollection.prototype.reset = function() {
                    this._items = [], this._ttlIndex = [], this.setFetched(!1)
                }, BaseCollection.prototype.setFetched = function(fetched) {
                    this._fetched = fetched
                }, BaseCollection.prototype.fetchAll = function(refresh, queryParams) {
                    this._purgeExpired();
                    var self = this,
                        endpoint = this.getEndpoint(),
                        markAsFetched = !0;
                    if ("object" == typeof queryParams && (endpoint += (-1 === endpoint.indexOf("?") ? "?" : "&") + $.param(queryParams), markAsFetched = !1, refresh = !0), this._fetched === !0 && refresh !== !0) return this.getQ().resolve(self._items);
                    var defered = this.getQ().defer();
                    return this.getHttp().get(endpoint, {
                        cache: !1
                    }).then(function(results) {
                        self._fetched = self._fetched ? !0 : markAsFetched;
                        for (var k in results.data) self._addItem(results.data[k]);
                        defered.resolve(self._items)
                    })["catch"](function(err) {
                        defered.reject(err)
                    }), defered.promise
                }, BaseCollection.prototype.fetch = function(id, refresh) {
                    this._purgeExpired();
                    var self = this,
                        exists = this._existsAt(id);
                    if (refresh !== !0 && exists !== !1) return this.getQ().resolve(self._items[exists]);
                    var model = exists !== !1 ? this._items[exists] : new this._modelClass;
                    return model.fetch(id).then(function(result) {
                        var index = self._addItem(result);
                        return self.getQ().resolve(self._items[index])
                    })
                }, BaseCollection.prototype.create = function(data) {
                    var model = new this._modelClass(data);
                    return this._addItem(model), model
                }, BaseCollection.prototype.modelInstance = function(data) {
                    return new this._modelClass(data)
                }, BaseCollection.prototype.destroy = function(id) {
                    var self = this,
                        exists = this._existsAt(id);
                    return exists !== !1 ? this._items[exists].destroy().then(function(result) {
                        return self._removeItem(exists), self.getQ().resolve(result)
                    }) : this.getQ().reject(new Error("Could not find model with that ID."))
                }, BaseCollection.prototype.add = function(model) {
                    return this._addItem(model)
                }, BaseCollection.prototype.filter = function(filters) {
                    if ("object" != typeof filters) return [];
                    var subset = [];
                    for (var k in this._items) {
                        var matchesFilter = !1;
                        for (var i in filters) matchesFilter = "undefined" != typeof this._items[k][i] && this._items[k][i] == filters[i] ? !0 : !1;
                        matchesFilter === !0 && subset.push(this._items[k])
                    }
                    return subset
                }, BaseCollection.prototype.findFirst = function(key, value) {
                    var items, filterOptions = {};
                    return filterOptions[key] = value, items = this.filter(filterOptions), items[0] ? items[0] : null
                }, BaseCollection.prototype.fetchAllOrdered = function(orderKey, refresh, queryParams) {
                    void 0 === orderKey && (orderKey = null);
                    var self = this;
                    return "string" != typeof orderKey && (orderKey = this.getIdKey()), this.fetchAll(refresh, queryParams).then(function(fetchedResult) {
                        var sorted = [];
                        if (fetchedResult.length > 0) {
                            var isString = "string" == typeof fetchedResult[0][orderKey],
                                isNumber = isNaN(fetchedResult[0][orderKey]) === !1;
                            sorted = fetchedResult.sort(function(a, b) {
                                var aOrder = isNumber && isString ? parseInt(a[orderKey]) : isString ? a[orderKey].toLowerCase() : a[orderKey],
                                    bOrder = isNumber && isString ? parseInt(b[orderKey]) : isString ? b[orderKey].toLowerCase() : b[orderKey];
                                return bOrder > aOrder ? -1 : aOrder > bOrder ? 1 : 0
                            })
                        }
                        return self.getQ().resolve(sorted)
                    })
                }, BaseCollection.prototype.pagedModels = function(pageNumber, sortBy, perPage) {
                    void 0 === sortBy && (sortBy = null), void 0 === perPage && (perPage = 10);
                    var self = this;
                    return this.fetchAllOrdered(sortBy).then(function(orderedModelsResult) {
                        var modelCount = orderedModelsResult.length,
                            startCount = (pageNumber - 1) * perPage,
                            pagedResult = [];
                        if (modelCount >= startCount)
                            for (var i = startCount; startCount + perPage > i; i++) "object" == typeof orderedModelsResult[i] && pagedResult.push(orderedModelsResult[i]);
                        return self.getQ().resolve(pagedResult)
                    })
                }, BaseCollection.prototype.pageCount = function(perPage) {
                    void 0 === perPage && (perPage = 10);
                    var self = this;
                    return this.fetchAll().then(function(fetchResult) {
                        return self.getQ().resolve(Math.ceil(fetchResult.length / perPage))
                    })
                }, BaseCollection.prototype.getEndpoint = function() {
                    return this.constructor.endpointUrl
                }, BaseCollection.prototype.getHttp = function() {
                    return this.constructor.HttpManager
                }, BaseCollection.prototype.getQ = function() {
                    return this.constructor.$q
                }, BaseCollection.prototype.getIdKey = function() {
                    return this.constructor.idKey || "id"
                }, BaseCollection.setBaseInjectors = function(HttpManager, $q) {
                    this.HttpManager || (this.HttpManager = HttpManager), this.$q || (this.$q = $q)
                }, BaseCollection.idKey = "id", BaseCollection.$inject = ["HttpManager", "$q", "$timeout"], BaseCollection
            }();
            BaseDataServiceModule.BaseCollection = BaseCollection
        }(BaseDataServiceModule || (BaseDataServiceModule = {})), Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = BaseDataServiceModule
    }, {}],
    15: [function(require, module, exports) {
        var InvoiceServiceModule, __extends = this && this.__extends || function(d, b) {
                function __() {
                    this.constructor = d
                }
                for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
                d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __)
            },
            baseDataService_ts_1 = require("./baseDataService.ts");
        ! function(InvoiceServiceModule) {
            var InvoiceModel = function(_super) {
                function InvoiceModel() {
                    _super.apply(this, arguments)
                }
                return __extends(InvoiceModel, _super), InvoiceModel.getFactory = function(HttpManager, $q) {
                    return InvoiceModel.setBaseInjectors(HttpManager, $q), InvoiceModel
                }, InvoiceModel.endpointUrl = "/identity/invoice/", InvoiceModel.defaults = {
                    id: {
                        dataType: "string",
                        defaultValue: null
                    },
                    date: {
                        dataType: "timestamp",
                        defaultValue: "current_timestamp"
                    },
                    description: {
                        dataType: "string",
                        defaultValue: null,
                        validation: {
                            required: !0
                        }
                    },
                    charge: {
                        dataType: "float",
                        defaultValue: null,
                        validation: {
                            required: !0
                        }
                    },
                    credit: {
                        dataType: "boolean",
                        defaultValue: !1,
                        validation: {
                            required: !0
                        }
                    },
                    creationTime: {
                        dataType: "date",
                        defaultValue: "current_timestamp"
                    },
                    modificationTime: {
                        dataType: "date",
                        defaultValue: "current_timestamp"
                    }
                }, InvoiceModel
            }(baseDataService_ts_1["default"].BaseModel);
            InvoiceServiceModule.InvoiceModel = InvoiceModel;
            var InvoiceCollection = function(_super) {
                function InvoiceCollection() {
                    _super.apply(this, arguments)
                }
                return __extends(InvoiceCollection, _super), InvoiceCollection.getService = function(HttpManager, $q, InvoiceModel) {
                    return InvoiceCollection.setBaseInjectors(HttpManager, $q), new InvoiceCollection(InvoiceModel)
                }, InvoiceCollection.endpointUrl = "/identity/invoice/", InvoiceCollection.$inject = ["HttpManager", "$q", "InvoiceModel"], InvoiceCollection.ttl = 3600, InvoiceCollection
            }(baseDataService_ts_1["default"].BaseCollection);
            InvoiceServiceModule.InvoiceCollection = InvoiceCollection
        }(InvoiceServiceModule || (InvoiceServiceModule = {})), Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = InvoiceServiceModule
    }, {
        "./baseDataService.ts": 14
    }],
    16: [function(require, module, exports) {
        var MemberServiceModule, __extends = this && this.__extends || function(d, b) {
                function __() {
                    this.constructor = d
                }
                for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
                d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __)
            },
            baseDataService_ts_1 = require("./baseDataService.ts");
        ! function(MemberServiceModule) {
            var MemberModel = function(_super) {
                function MemberModel() {
                    _super.apply(this, arguments)
                }
                return __extends(MemberModel, _super), MemberModel.prototype.saveRole = function() {
                    return this.save({
                        data: {
                            role: this.updatedRole
                        }
                    })
                }, MemberModel.prototype.getRoleChangesString = function() {
                    var fromRole = "EXPENSE_SUBMITTER" === this.role ? "a member" : "an admin",
                        toRole = "EXPENSE_SUBMITTER" === this.updatedRole ? "a member" : "an admin";
                    return "from " + fromRole + " to " + toRole
                }, MemberModel.prototype.afterCreate = function() {
                    this.updatedRole = this.role
                }, MemberModel.prototype.afterSave = function() {
                    this.updatedRole = this.role
                }, MemberModel.getFactory = function(HttpManager, $q) {
                    return MemberModel.setBaseInjectors(HttpManager, $q), MemberModel
                }, MemberModel.endpointUrl = "/identity/member/", MemberModel.defaults = {
                    id: {
                        dataType: "string",
                        defaultValue: null
                    },
                    userId: {
                        dataType: "string",
                        defaultValue: null,
                        validation: {
                            required: !0
                        }
                    },
                    organisationId: {
                        dataType: "string",
                        defaultValue: null,
                        validation: {
                            required: !0
                        }
                    },
                    role: {
                        dataType: "string",
                        defaultValue: "EXPENSE_SUBMITTER",
                        validation: {
                            required: !0
                        }
                    },
                    creationTime: {
                        dataType: "date",
                        defaultValue: "current_timestamp"
                    },
                    modificationTime: {
                        dataType: "date",
                        defaultValue: "current_timestamp"
                    }
                }, MemberModel
            }(baseDataService_ts_1["default"].BaseModel);
            MemberServiceModule.MemberModel = MemberModel;
            var MemberCollection = function(_super) {
                function MemberCollection() {
                    _super.apply(this, arguments)
                }
                return __extends(MemberCollection, _super), MemberCollection.prototype.getUserMembership = function(userId) {
                    var self = this;
                    return this.fetchAll().then(function(members) {
                        var filtered = self.filter({
                            userId: userId
                        });
                        if (1 === filtered.length) return self.getQ().resolve(filtered[0]);
                        var err = new Error("No membership found");
                        return err.name = "NoMembershipFound", self.getQ().reject(err)
                    })
                }, MemberCollection.prototype.hasMultipleAdmins = function() {
                    var self = this,
                        adminCount = 0;
                    return this.fetchAll().then(function(membersResult) {
                        for (var k in membersResult) "EXPENSE_SUBSCRIBER" === membersResult[k].role && adminCount++;
                        return self.getQ().resolve(adminCount > 1)
                    })
                }, MemberCollection.prototype.getAdminMemberships = function() {
                    var self = this,
                        admins = [];
                    return this.fetchAll().then(function(membersResult) {
                        for (var k in membersResult) "EXPENSE_SUBSCRIBER" === membersResult[k].role && admins.push(membersResult[k]);
                        return self.getQ().resolve(admins)
                    })
                }, MemberCollection.prototype.setUserRole = function(userId, role) {
                    var self = this,
                        multipleAdmins = !1;
                    return role.toUpperCase(), this.hasMultipleAdmins().then(function(adminsResult) {
                        return multipleAdmins = adminsResult, self.getUserMembership(userId)
                    }).then(function(membershipResult) {
                        return membershipResult.role === role ? self.getQ().resolve(membershipResult) : "EXPENSE_SUBSCRIBER" === membershipResult.role && "EXPENSE_SUBSCRIBER" !== role && multipleAdmins === !1 ? self.getQ().reject(new Error("You cannot change the only admin")) : (membershipResult.set("role", role.toUpperCase()), membershipResult.saveRole())
                    })
                }, MemberCollection.prototype.canRevokeUserAccess = function(userId) {
                    var self = this,
                        multipleAdmins = !1;
                    return this.hasMultipleAdmins().then(function(adminsResult) {
                        return multipleAdmins = adminsResult, self.getUserMembership(userId)
                    }).then(function(membershipResult) {
                        return "EXPENSE_SUBSCRIBER" === membershipResult.role && multipleAdmins === !1 ? self.getQ().reject(new Error("Cannot revoke access to the only admin user.")) : self.getQ().resolve(!0)
                    })
                }, MemberCollection.prototype.revokeUserAccess = function(userId) {
                    var self = this;
                    return this.canRevokeUserAccess(userId).then(function(canRevoke) {
                        return self.removeUserMembership(userId), self.getQ().resolve(canRevoke)
                    })
                }, MemberCollection.prototype.removeUserMembership = function(userId) {
                    var membership = this.findFirst("userId", userId);
                    if (membership) {
                        var itemsIndex = this._existsAt(membership.id);
                        if (itemsIndex) return this._removeItem(itemsIndex), !0
                    }
                    return !1
                }, MemberCollection.getService = function(HttpManager, $q, MemberModel) {
                    return MemberCollection.setBaseInjectors(HttpManager, $q), new MemberCollection(MemberModel)
                }, MemberCollection.endpointUrl = "/identity/member/", MemberCollection.$inject = ["HttpManager", "$q", "MemberModel"], MemberCollection.ttl = 3600, MemberCollection
            }(baseDataService_ts_1["default"].BaseCollection);
            MemberServiceModule.MemberCollection = MemberCollection
        }(MemberServiceModule || (MemberServiceModule = {})), Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = MemberServiceModule
    }, {
        "./baseDataService.ts": 14
    }],
    17: [function(require, module, exports) {
        var OrganisationServiceModule, __extends = this && this.__extends || function(d, b) {
                function __() {
                    this.constructor = d
                }
                for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
                d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __)
            },
            baseDataService_ts_1 = require("./baseDataService.ts");
        ! function(OrganisationServiceModule) {
            var OrganisationModel = function(_super) {
                function OrganisationModel() {
                    _super.apply(this, arguments)
                }
                return __extends(OrganisationModel, _super), OrganisationModel.prototype.saveCurrentOrganisation = function(options) {
                    return options || (options = {}), this.save(options)
                }, OrganisationModel.getFactory = function(HttpManager, $q) {
                    return OrganisationModel.setBaseInjectors(HttpManager, $q), OrganisationModel
                }, OrganisationModel.endpointUrl = "/identity/organisation/", OrganisationModel.defaults = {
                    id: {
                        dataType: "string",
                        defaultValue: null
                    },
                    name: {
                        dataType: "string",
                        defaultValue: "",
                        validation: {
                            required: !0,
                            maxlength: 255
                        }
                    },
                    legalName: {
                        dataType: "string",
                        defaultValue: "",
                        validation: {
                            required: !0
                        }
                    },
                    status: {
                        dataType: "string",
                        defaultValue: "ACTIVE",
                        validation: {
                            required: !0
                        }
                    },
                    creationTime: {
                        dataType: "date",
                        defaultValue: "current_timestamp"
                    },
                    modificationTime: {
                        dataType: "date",
                        defaultValue: "current_timestamp"
                    }
                }, OrganisationModel
            }(baseDataService_ts_1["default"].BaseModel);
            OrganisationServiceModule.OrganisationModel = OrganisationModel;
            var OrganisationCollection = function(_super) {
                function OrganisationCollection() {
                    _super.apply(this, arguments), this.currentOrganisationId = null
                }
                return __extends(OrganisationCollection, _super), OrganisationCollection.prototype.getCurrentOrganisation = function(organisationId) {
                    var _this = this;
                    void 0 === organisationId && (organisationId = null);
                    var promise, self = this;
                    if (organisationId) promise = this.fetch(organisationId);
                    else if (this.currentOrganisationId) {
                        this._purgeExpired();
                        var model = this._getInMemoryById(this.currentOrganisationId);
                        model ? (this.currentOrganisationId = model.id, promise = this.getQ().resolve(model)) : this.currentOrganisationId = null
                    }
                    return promise || (promise = this.getHttp().get(this.getEndpoint()).then(function(result) {
                        var index = _this._addItem(result.data),
                            model = _this._items[index];
                        return model ? (_this.currentOrganisationId = model.id, _this.getQ().resolve(model)) : _this.getQ().reject(!1)
                    })), promise["catch"](function(err) {
                        var orgErr = self.constructor.UtilService.namedError("Organisation not found.", "OrganisationNotFound");
                        return self.getQ().reject(orgErr)
                    }), promise
                }, OrganisationCollection.getService = function(HttpManager, $q, OrganisationModel, UtilService) {
                    return OrganisationCollection.setBaseInjectors(HttpManager, $q), OrganisationCollection.UtilService || (OrganisationCollection.UtilService = UtilService), new OrganisationCollection(OrganisationModel)
                }, OrganisationCollection.endpointUrl = "/identity/organisation/", OrganisationCollection.$inject = ["HttpManager", "$q", "OrganisationModel", "UtilService"], OrganisationCollection.ttl = 3600, OrganisationCollection
            }(baseDataService_ts_1["default"].BaseCollection);
            OrganisationServiceModule.OrganisationCollection = OrganisationCollection
        }(OrganisationServiceModule || (OrganisationServiceModule = {})), Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = OrganisationServiceModule
    }, {
        "./baseDataService.ts": 14
    }],
    18: [function(require, module, exports) {
        var UserServiceModule, __extends = this && this.__extends || function(d, b) {
                function __() {
                    this.constructor = d
                }
                for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
                d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __)
            },
            baseDataService_ts_1 = require("./baseDataService.ts");
        ! function(UserServiceModule) {
            var UserModel = function(_super) {
                function UserModel() {
                    _super.apply(this, arguments)
                }
                return __extends(UserModel, _super), UserModel.prototype.afterCreate = function() {
                    this.clearPasswordValues()
                }, UserModel.prototype.afterSave = function() {
                    this.clearPasswordValues()
                }, UserModel.prototype.saveMe = function(options) {
                    return options || (options = {}), options.idKey = "me/", this.email = "string" == typeof this.email ? this.email.toLowerCase() : this.email, this.save(options)
                }, UserModel.prototype.saveMyPassword = function(password, options) {
                    return options || (options = {}), options.idKey = "me/password/", options.data = {
                        currentPassword: this.currentPassword,
                        newPassword: this.password,
                        confirmPassword: this.confirmPassword
                    }, this.save(options)
                }, UserModel.prototype.clearPasswordValues = function() {
                    this.unset("currentPassword"), this.set("password", ""), this.unset("confirmPassword"), this.unset("newPassword")
                }, UserModel.prototype.setMembershipRole = function(role) {
                    return this.constructor.MemberCollection.setUserRole(this.id, role)
                }, UserModel.prototype.getMembership = function() {
                    return this.constructor.MemberCollection.getUserMembership(this.get("id"))
                }, UserModel.prototype.getCachedMembership = function() {
                    var roles = this.constructor.MemberCollection.filter({
                        userId: this.id
                    });
                    return roles[0] ? roles[0] : null
                }, UserModel.prototype.fullName = function() {
                    return this.firstName + " " + this.lastName
                }, Object.defineProperty(UserModel.prototype, "membershipRole", {
                    get: function() {
                        var membership = this.getCachedMembership();
                        return membership ? membership.role : null
                    },
                    set: function(role) {
                        var membership = this.getCachedMembership();
                        membership && (membership.role = role)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(UserModel.prototype, "updatedMembershipRole", {
                    get: function() {
                        var membership = this.getCachedMembership();
                        return membership ? membership.updatedRole : null
                    },
                    set: function(role) {
                        var membership = this.getCachedMembership();
                        membership && (membership.updatedRole = role)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(UserModel.prototype, "roleChangesString", {
                    get: function() {
                        var membership = this.getCachedMembership();
                        return membership ? membership.getRoleChangesString() : null
                    },
                    set: function(role) {},
                    enumerable: !0,
                    configurable: !0
                }), UserModel.getFactory = function(HttpManager, $q, MemberCollection) {
                    return UserModel.setBaseInjectors(HttpManager, $q), UserModel.MemberCollection || (UserModel.MemberCollection = MemberCollection), UserModel
                }, UserModel.endpointUrl = "/identity/user/", UserModel.defaults = {
                    id: {
                        dataType: "string",
                        defaultValue: null
                    },
                    firstName: {
                        dataType: "string",
                        defaultValue: "",
                        validation: {
                            required: !0,
                            maxlength: 255
                        }
                    },
                    lastName: {
                        dataType: "string",
                        defaultValue: "",
                        validation: {
                            required: !0,
                            maxlength: 255
                        }
                    },
                    email: {
                        dataType: "string",
                        defaultValue: "",
                        validation: {
                            required: !0,
                            email: !0,
                            strongEmail: !0,
                            maxlength: 500
                        }
                    },
                    status: {
                        dataType: "string",
                        defaultValue: "OK",
                        validation: {
                            required: !0
                        }
                    },
                    password: {
                        dataType: "string",
                        defaultValue: "",
                        validation: {
                            required: !0,
                            minlength: 8,
                            maxlength: 256,
                            strongPassword: !0
                        }
                    },
                    creationTime: {
                        dataType: "date",
                        defaultValue: "current_timestamp"
                    },
                    modificationTime: {
                        dataType: "date",
                        defaultValue: "current_timestamp"
                    }
                }, UserModel.$inject = ["HttpManager", "$q", "MemberCollection"], UserModel
            }(baseDataService_ts_1["default"].BaseModel);
            UserServiceModule.UserModel = UserModel;
            var UserCollection = function(_super) {
                function UserCollection() {
                    _super.apply(this, arguments)
                }
                return __extends(UserCollection, _super), UserCollection.prototype.getMe = function(currentUserId) {
                    this._purgeExpired();
                    var self = this;
                    if (currentUserId) {
                        var inMemeory = this._existsAt(currentUserId);
                        if (inMemeory) return this.getQ().resolve(this._items[inMemeory])
                    }
                    return this.fetch("me").then(function(user) {
                        return user && self.constructor.SessionService.setUserId(user.id), self.getQ().resolve(user)
                    })
                }, UserCollection.prototype.getActiveCount = function() {
                    var self = this;
                    return this._fetched === !0 ? self.getQ().resolve(self.filter({
                        status: "OK"
                    }).length) : this.fetchAll().then(function() {
                        return self.getQ().resolve(self.filter({
                            status: "OK"
                        }).length)
                    })
                }, UserCollection.prototype.getUserCount = function() {
                    var self = this;
                    return this._fetched === !0 ? self.getQ().resolve(self.size()) : this.fetchAll().then(function() {
                        return self.getQ().resolve(self.size())
                    })
                }, UserCollection.prototype.revokeUserAccess = function(userId) {
                    var self = this;
                    return this.constructor.MemberCollection.canRevokeUserAccess(userId).then(function(canRevoke) {
                        return self.destroy(userId)
                    }).then(function(destroyed) {
                        return self.constructor.MemberCollection.removeUserMembership(userId), self.getQ().resolve(destroyed)
                    })
                }, UserCollection.prototype.resendInvite = function(userId) {
                    var self = this,
                        user = this._getInMemoryById(userId),
                        xeroUserCollection = this.constructor.$injector.get("XeroUserCollection");
                    if (!user || "LOCKED" !== user.status) return this.getQ().resolve(!0);
                    var xeroUser = xeroUserCollection.getInMemoryByEmail(user.email);
                    if (!xeroUser) return this.getQ().reject(new Error("Xero user not found."));
                    var membership = user.getCachedMembership(),
                        inviteDetails = {
                            firstName: user.firstName,
                            lastName: user.lastName,
                            email: user.email
                        };
                    return this.getHttp()["delete"](user.getEndpoint()).then(function() {
                        return self.getHttp().post(xeroUserCollection.constructor.inviteUrl, inviteDetails)
                    }).then(function(inviteResult) {
                        return user.id = inviteResult.data.userId, membership.id = inviteResult.data.memberId, self.getQ().resolve(!0)
                    })
                }, UserCollection.prototype.cancelUserInvite = function(userId) {
                    var _this = this,
                        self = this;
                    return this.fetch(userId).then(function(userResult) {
                        return "LOCKED" !== userResult.status ? self.getQ().reject(new Error("You can only cancel an invite for a locked user.")) : self.destroy(userId)
                    }).then(function(destroyResult) {
                        return _this.constructor.MemberCollection.removeUserMembership(userId), self.getQ().resolve(destroyResult)
                    })
                }, UserCollection.prototype.userExists = function(email) {
                    var self = this,
                        promise = this.getQ().defer();
                    return this.fetchAll().then(function(usersResult) {
                        var user = self.findFirst("email", email);
                        promise.resolve(user ? user : !1)
                    })["catch"](function(err) {
                        promise.reject(err)
                    }), promise.promise
                }, UserCollection.prototype.getAdmins = function() {
                    var _this = this,
                        self = this,
                        users = [];
                    return self.fetchAll().then(function(usersResult) {
                        return _this.constructor.MemberCollection.getAdminMemberships()
                    }).then(function(adminMembershipsResult) {
                        for (var i = 0; i < adminMembershipsResult.length; i++) users.push(self._getInMemoryById(adminMembershipsResult[i].userId));
                        return self.getQ().resolve(users)
                    })
                }, UserCollection.prototype.getAdminNames = function() {
                    var self = this;
                    return this.getAdmins().then(function(admins) {
                        var names = "",
                            adminCount = admins.length;
                        if (1 === adminCount) names = admins.pop().firstName;
                        else if (adminCount > 1) {
                            var lastAdmin = admins.pop(),
                                firstAdmins = admins.map(function(i) {
                                    return i.firstName
                                }).join(", ");
                            names = firstAdmins + " and " + lastAdmin.firstName
                        }
                        return self.getQ().resolve(names)
                    })
                }, UserCollection.getService = function(HttpManager, $q, $injector, UserModel, SessionService, MemberCollection, NotificationService) {
                    return UserCollection.setBaseInjectors(HttpManager, $q), UserCollection.$injector || (UserCollection.$injector = $injector), UserCollection.SessionService || (UserCollection.SessionService = SessionService), UserCollection.MemberCollection || (UserCollection.MemberCollection = MemberCollection), UserCollection.NotificationService || (UserCollection.NotificationService = NotificationService), new UserCollection(UserModel)
                }, UserCollection.endpointUrl = "/identity/user/", UserCollection.$inject = ["HttpManager", "$q", "$injector", "UserModel", "SessionService", "MemberCollection", "NotificationService"], UserCollection.ttl = 3600, UserCollection
            }(baseDataService_ts_1["default"].BaseCollection);
            UserServiceModule.UserCollection = UserCollection;
        }(UserServiceModule || (UserServiceModule = {})), Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = UserServiceModule
    }, {
        "./baseDataService.ts": 14
    }],
    19: [function(require, module, exports) {
        var XeroUserServiceModule, __extends = this && this.__extends || function(d, b) {
                function __() {
                    this.constructor = d
                }
                for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
                d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __)
            },
            baseDataService_ts_1 = require("./baseDataService.ts");
        ! function(XeroUserServiceModule) {
            var XeroUserModel = function(_super) {
                function XeroUserModel() {
                    _super.apply(this, arguments)
                }
                return __extends(XeroUserModel, _super), XeroUserModel.prototype.afterCreate = function() {
                    this.key || (this.key = "_" + Math.random().toString(36).substr(2, 6) + Math.random().toString(36).substr(5, 6))
                }, XeroUserModel.getFactory = function(HttpManager, $q) {
                    return XeroUserModel.setBaseInjectors(HttpManager, $q), XeroUserModel
                }, XeroUserModel.endpointUrl = "/accounting/user/", XeroUserModel.idKey = "email", XeroUserModel.defaults = {
                    email: {
                        dataType: "string",
                        defaultValue: "",
                        validation: {
                            required: !0
                        }
                    },
                    firstName: {
                        dataType: "string",
                        defaultValue: "",
                        validation: {
                            required: !0
                        }
                    },
                    lastName: {
                        dataType: "string",
                        defaultValue: "",
                        validation: {
                            required: !0
                        }
                    },
                    key: {
                        dataType: "string",
                        defaultValue: null
                    },
                    invited: {
                        dataType: "boolean",
                        defaultValue: !1
                    }
                }, XeroUserModel
            }(baseDataService_ts_1["default"].BaseModel);
            XeroUserServiceModule.XeroUserModel = XeroUserModel;
            var XeroUserCollection = function(_super) {
                function XeroUserCollection() {
                    _super.apply(this, arguments)
                }
                return __extends(XeroUserCollection, _super), XeroUserCollection.prototype.getInMemoryByKey = function(key) {
                    for (var k in this._items)
                        if ("string" == typeof this._items[k].key && this._items[k].key == key) return this._items[k];
                    return null
                }, XeroUserCollection.prototype.getInMemoryByEmail = function(email) {
                    for (var k in this._items)
                        if ("string" == typeof this._items[k].email && this._items[k].email == email) return this._items[k];
                    return null
                }, XeroUserCollection.prototype.getInactiveUsers = function() {
                    var users, xeroUsers, self = this,
                        inactiveUsers = [];
                    return this.constructor.UserCollection.fetchAll().then(function(usersResult) {
                        return users = usersResult, self.fetchAll()
                    }).then(function(xeroUsersResult) {
                        xeroUsers = xeroUsersResult;
                        for (var i in xeroUsers) {
                            var xeroEmail = xeroUsers[i].email.toLowerCase(),
                                userFound = !1;
                            for (var u in users)
                                if (users[u].email.toLowerCase() === xeroEmail) {
                                    userFound = !0;
                                    break
                                }
                            userFound === !1 && (xeroUsers[i].invited = !1, inactiveUsers.push(xeroUsers[i]))
                        }
                        return self.constructor.$q.resolve(inactiveUsers)
                    })
                }, XeroUserCollection.prototype.inviteUserByKey = function(xeroUserKey, markAsInvited) {
                    void 0 === markAsInvited && (markAsInvited = !0);
                    var xeroUser = this.getInMemoryByKey(xeroUserKey);
                    if (!xeroUser) {
                        var err = this.constructor.UtilService.namedError("Xero user not found.", "xeroUserNotFound");
                        return this.constructor.$q.reject(err)
                    }
                    return this.inviteUser(xeroUser, markAsInvited)
                }, XeroUserCollection.prototype.inviteUser = function(xeroUser, markAsInvited) {
                    void 0 === markAsInvited && (markAsInvited = !0);
                    var self = this,
                        promise = this.constructor.$q.defer(),
                        userDetails = {
                            firstName: xeroUser.firstName,
                            lastName: xeroUser.lastName,
                            email: xeroUser.email.toLowerCase()
                        },
                        memberDetails = {
                            role: "EXPENSE_SUBMITTER"
                        };
                    return self.constructor.OrganisationCollection.getCurrentOrganisation().then(function(organisationResult) {
                        return memberDetails.organisationId = organisationResult.id, self.constructor.UserCollection.userExists(userDetails.email)
                    }).then(function(userExistsResult) {
                        if (userExistsResult === !1) return self.getHttp().post(self.constructor.inviteUrl, userDetails);
                        userDetails = userExistsResult;
                        var err = self.constructor.UtilService.namedError("User already exists.", "userExists");
                        return self.constructor.$q.reject(err)
                    }).then(function(inviteResult) {
                        return userDetails.id = inviteResult.data.userId, userDetails.status = "LOCKED", memberDetails.id = inviteResult.data.memberId, memberDetails.userId = userDetails.id, userDetails = self.constructor.UserCollection.create(userDetails), memberDetails = self.constructor.MemberCollection.create(memberDetails), markAsInvited && (xeroUser.invited = !0), self.constructor.AnalyticsService.track("InviteSent"), promise.resolve(userDetails)
                    })["catch"](function(err) {
                        "userExists" === err.name ? promise.resolve(userDetails) : promise.reject(err)
                    }), promise.promise
                }, XeroUserCollection.prototype.inviteUsers = function(users) {
                    var self = this,
                        promiseList = [],
                        promiseListResults = {};
                    for (var k in users) promiseList.push(self.inviteUser(users[k], !1));
                    return this.getQ().allSettled(promiseList).then(function(promiseResults) {
                        for (var k in promiseResults) {
                            var invited = "fulfilled" === promiseResults[k].state;
                            users[k].invited = invited, promiseListResults[users[k].email] = invited
                        }
                        return self.getQ().resolve(promiseListResults)
                    })
                }, XeroUserCollection.getAuthService = function() {
                    return this.AuthService || (this.AuthService = this.$injector.get("AuthService")), this.AuthService
                }, XeroUserCollection.getService = function(HttpManager, $q, $injector, XeroUserModel, UserCollection, MemberCollection, OrganisationCollection, UtilService, AnalyticsService) {
                    return XeroUserCollection.setBaseInjectors(HttpManager, $q), XeroUserCollection.$injector || (XeroUserCollection.$injector = $injector), XeroUserCollection.UserCollection || (XeroUserCollection.UserCollection = UserCollection), XeroUserCollection.MemberCollection || (XeroUserCollection.MemberCollection = MemberCollection), XeroUserCollection.OrganisationCollection || (XeroUserCollection.OrganisationCollection = OrganisationCollection), XeroUserCollection.UtilService || (XeroUserCollection.UtilService = UtilService), XeroUserCollection.AnalyticsService || (XeroUserCollection.AnalyticsService = AnalyticsService), new XeroUserCollection(XeroUserModel)
                }, XeroUserCollection.inviteUrl = "/identity/invite", XeroUserCollection.endpointUrl = "/accounting/user/", XeroUserCollection.$inject = ["HttpManager", "$q", "$injector", "XeroUserModel", "UserCollection", "MemberCollection", "OrganisationCollection", "UtilService", "AanlyticsService"], XeroUserCollection.ttl = 3600, XeroUserCollection.idKey = "email", XeroUserCollection
            }(baseDataService_ts_1["default"].BaseCollection);
            XeroUserServiceModule.XeroUserCollection = XeroUserCollection
        }(XeroUserServiceModule || (XeroUserServiceModule = {})), Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = XeroUserServiceModule
    }, {
        "./baseDataService.ts": 14
    }],
    20: [function(require, module, exports) {
        var AlertMessageDirectiveModule;
        ! function(AlertMessageDirectiveModule) {
            function alertMessage(UtilService) {
                return {
                    restrict: "A",
                    template: "<div class='message-wrapper'></div>",
                    link: function($scope, element, attrs) {
                        var messageLength = 2500,
                            timeout = null;
                        element.addClass("alert-message"), attrs.$observe("message", function(newValue, oldValue) {
                            "" !== newValue && newValue !== oldValue && (element.find(".message-wrapper").text(newValue).addClass("visible"), timeout && clearTimeout(timeout), timeout = setTimeout(function() {
                                element.find(".message-wrapper").text("").removeClass("visible"), UtilService.setErrorMessage(""), timeout = null
                            }, messageLength))
                        })
                    }
                }
            }
            AlertMessageDirectiveModule.alertMessage = alertMessage
        }(AlertMessageDirectiveModule || (AlertMessageDirectiveModule = {})), Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = AlertMessageDirectiveModule
    }, {}],
    21: [function(require, module, exports) {
        var CollapseDirectiveModule;
        ! function(CollapseDirectiveModule) {
            function collapseView() {
                return {
                    restrict: "A",
                    link: function($scope, element, attrs) {
                        element.collapse({
                            toggle: !1
                        }).on("show.bs.collapse", function(e) {
                            $(e.target).prev(".panel-body").addClass("active")
                        }).on("hide.bs.collapse", function(e) {
                            $(e.target).prev(".panel-body").removeClass("active")
                        })
                    }
                }
            }
            CollapseDirectiveModule.collapseView = collapseView
        }(CollapseDirectiveModule || (CollapseDirectiveModule = {})), Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = CollapseDirectiveModule
    }, {}],
    22: [function(require, module, exports) {
        var ConfirmDialogDirectiveModule;
        ! function(ConfirmDialogDirectiveModule) {
            function confirmDialog($templateCache, $compile, $timeout, UtilService) {
                return {
                    restrict: "A",
                    link: function($scope, element, attrs) {
                        var buildConfirmModal = function(event, contentString, closeCallback) {
                            event.preventDefault();
                            var templateString = $templateCache.get("/modals/confirm.html"),
                                successfulConfirm = !1,
                                options = {
                                    keyboard: !1
                                },
                                confirmData = attrs.confirmData;
                            $scope.content = contentString || attrs.confirmContent || "Are you sure you want to do that?", $scope.subContent = attrs.confirmSubContent || null, $scope.dialogError = null, $timeout(function() {
                                $scope.$apply(function() {
                                    var el = $compile(templateString)($scope),
                                        closeModal = function() {
                                            $timeout(function() {
                                                el.modal("hide")
                                            }, 0)
                                        };
                                    $("body").append(el), el.modal(options).on("hidden.bs.modal", function(e) {
                                        el.remove()
                                    }), el.modal(options).on("hide.bs.modal", function(e) {
                                        closeCallback && successfulConfirm === !1 && closeCallback()
                                    }), $scope.confirm = function(confirmEvent) {
                                        $scope.dialogError = null, "function" == typeof $scope.actions[attrs.confirmDialog] ? ($(confirmEvent.currentTarget).triggerHandler("feedback"), $scope.actions[attrs.confirmDialog].apply($scope.actions, [confirmEvent, confirmData]).then(function() {
                                            successfulConfirm = !0, closeModal()
                                        })["catch"](function(err) {
                                            var serverError = err.data && err.data.error ? err.data.error : null;
                                            $scope.dialogError = "An error occured: " + (serverError || err.message || "Please try again.")
                                        })["finally"](function() {
                                            $(confirmEvent.currentTarget).triggerHandler("restore")
                                        })) : closeModal()
                                    }
                                })
                            }, 0)
                        };
                        attrs.confirmTrigger ? element.on(attrs.confirmTrigger, buildConfirmModal) : element.on("click", buildConfirmModal)
                    }
                }
            }
            ConfirmDialogDirectiveModule.confirmDialog = confirmDialog
        }(ConfirmDialogDirectiveModule || (ConfirmDialogDirectiveModule = {})), Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = ConfirmDialogDirectiveModule
    }, {}],
    23: [function(require, module, exports) {
        var DismissiblePanelDirectiveModule;
        ! function(DismissiblePanelDirectiveModule) {
            function dismissiblePanel(UtilService) {
                return {
                    restrict: "A",
                    link: function($scope, element, attrs) {
                        if ("" !== attrs.dismissiblePanel) {
                            var dismissBtn = angular.element('<button type="button" class="panel-close">&times;</button>'),
                                dismissibleName = "dismissible::" + attrs.dismissiblePanel,
                                dismissPreference = UtilService.getPreference(dismissibleName);
                            dismissPreference ? (dismissBtn.on("click", function(event) {
                                element.addClass("animated fadeOut"), element.slideUp(), UtilService.setPreference(dismissibleName, !1)
                            }), element.append(dismissBtn)) : element.hide()
                        }
                    }
                }
            }
            DismissiblePanelDirectiveModule.dismissiblePanel = dismissiblePanel
        }(DismissiblePanelDirectiveModule || (DismissiblePanelDirectiveModule = {})), Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = DismissiblePanelDirectiveModule
    }, {}],
    24: [function(require, module, exports) {
        var FormDirectiveModule;
        ! function(FormDirectiveModule) {
            function managedForm(ValidationService, UtilService) {
                return {
                    restrict: "A",
                    link: function($scope, element, attrs) {
                        var formFunction = attrs.managedForm,
                            formModel = attrs.managedFormModel,
                            submits = element.find("button[type=submit]"),
                            dirtyChecking = null,
                            frontendValidationPassed = !0,
                            extendedRules = "function" == typeof $scope.actions.validationRules ? $scope.actions.validationRules(formModel) : null,
                            useModelValidation = null,
                            rules = extendedRules,
                            buildRules = function() {
                                useModelValidation = "string" == typeof formModel && ("object" == typeof $scope[formModel] || "function" == typeof $scope[formModel]) && "undefined" != typeof $scope[formModel].getValidationRules, rules = useModelValidation ? $scope[formModel].getValidationRules(extendedRules) : extendedRules
                            };
                        if ("undefined" == typeof $scope[formModel]) var watchListener = $scope.$watch(formModel, function(model) {
                            model && (buildRules(), watchListener())
                        });
                        else buildRules();
                        "string" == typeof attrs.managedFormDirtyChecking && (dirtyChecking = attrs.managedFormDirtyChecking.split(",")), ("undefined" == typeof attrs.validateOn || "string" == typeof attrs.validateOn && "blur" === attrs.validateOn) && (element.addClass("validate-on"), element.on("blur", "input", rules, function(event) {
                            ValidationService.validField($(event.target), rules)
                        })), element.on("submit", function($event) {
                            if ($event.preventDefault(), submits.each(function() {
                                    $(this).triggerHandler("feedback")
                                }), (extendedRules || useModelValidation) && (frontendValidationPassed = ValidationService.validForm($(element), rules), frontendValidationPassed || element.triggerHandler("submitComplete")), formFunction && frontendValidationPassed) {
                                var successful = !0;
                                $scope.actions[formFunction]($event)["catch"](function(err) {
                                    if (successful = !1, !attrs.managedErrors)
                                        if (err.data && "validation" === err.data.error) {
                                            var firstError = err.data.messages && err.data.messages[0] ? err.data.messages[0] + ". " : "",
                                                errorString = "A error occured. " + firstError + "Please try again.";
                                            UtilService.setErrorMessage(errorString)
                                        } else err.data && "object" == typeof err.data.fault ? UtilService.setErrorMessage(err.data.fault.faultstring) : err.data && "string" == typeof err.data.error ? UtilService.setErrorMessage("An error occurred. " + err.data.error) : err.displayUiError && UtilService.setErrorMessage("An error occurred. Please try again.")
                                })["finally"](function() {
                                    successful && dirtyChecking && setTimeout(function() {
                                        element.triggerHandler("startDirtyChecking")
                                    }, 500), element.triggerHandler("submitComplete", [successful])
                                })
                            }
                        }), element.on("submitComplete", function(event, success) {
                            submits.each(function() {
                                $(this).triggerHandler(success && success === !0 ? "successRestore" : "restore")
                            })
                        }), element.on("startDirtyChecking", function() {
                            var watchers = [],
                                onChange = function(newVal, oldVal) {
                                    for (var k in watchers) watchers[k]();
                                    submits.each(function() {
                                        $(this).triggerHandler("originalRestore")
                                    })
                                };
                            for (var k in dirtyChecking) watchers.push($scope.$watch(dirtyChecking[k], onChange, !0))
                        })
                    }
                }
            }

            function feedbackButton(AnalyticsService) {
                return {
                    restrict: "A",
                    link: function($scope, element, attrs) {
                        var analyticsCode = "string" == typeof attrs.tracking ? attrs.tracking : null,
                            runFeedback = function(event) {
                                element.data("original") || element.data("original", element.text()), element.data("original-width") || element.data("original-width", element.width()), element.addClass("loading").removeClass("successful"), element.attr("disabled", "disabled")
                            },
                            runRestore = function(event) {
                                setTimeout(function() {
                                    var original = element.data("original");
                                    if (analyticsCode && "successRestore" === event.type && AnalyticsService.track(analyticsCode), "undefined" == typeof attrs.feedbackNoSuccess || "true" !== attrs.feedbackNoSuccess || "successRestore" !== event.type) {
                                        if ("originalRestore" === event.type) original && element.removeClass("loading successful").html(original);
                                        else {
                                            var restoreString = "",
                                                successIcon = '<span class="btn-icon"><span class="display-icon ' + ("undefined" != typeof attrs.feedbackSuccessIcon && "true" !== attrs.feedbackSuccessIcon ? attrs.feedbackSuccessIcon : "paypr-icon-tick") + '"></span></span>';
                                            "undefined" != typeof attrs.feedbackSuccessIcon && "true" === attrs.feedbackSuccessIcon && "successRestore" === event.type ? (restoreString = successIcon, element.width(element.data("original-width"))) : restoreString = "string" == typeof attrs.feedbackSuccessText && "successRestore" === event.type ? successIcon + attrs.feedbackSuccessText : ("successRestore" === event.type ? successIcon : "") + original, "successRestore" === event.type && element.addClass("successful"), element.removeClass("loading").html(restoreString)
                                        }("undefined" == typeof attrs.feedbackKeepDisabled || "undefined" != typeof attrs.feedbackKeepDisabled && "true" === attrs.feedbackKeepDisabled && "successRestore" !== event.type) && element.removeAttr("disabled")
                                    }
                                }, 0)
                            };
                        element.on(attrs.feedbackClick ? "click" : "feedback", runFeedback), element.on("originalRestore", runRestore), element.on("successRestore", runRestore), element.on("restore", runRestore)
                    }
                }
            }
            FormDirectiveModule.managedForm = managedForm, FormDirectiveModule.feedbackButton = feedbackButton
        }(FormDirectiveModule || (FormDirectiveModule = {})), Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = FormDirectiveModule
    }, {}],
    25: [function(require, module, exports) {
        var FormFieldsDirectiveModule;
        ! function(FormFieldsDirectiveModule) {
            function inputField($compile) {
                return {
                    restrict: "A",
                    link: function($scope, element, attrs) {
                        var type = attrs.inputField,
                            tagType = "textarea" === type ? type : "input",
                            name = attrs.name,
                            functionalName = name.charAt(0).toUpperCase() + name.slice(1),
                            label = attrs.label,
                            model = attrs.model,
                            note = attrs.note,
                            templateString = '<div class="form-group"><label for="form' + functionalName + '" class="control-label">' + label + "</label><" + tagType + ' name="' + name + '" id="form' + functionalName + '" class="form-control" type="' + type + '" ng-model="' + model + '" /><span class="invalid-field paypr-icon-cross"></span><span class="valid-field paypr-icon-tick"></span>' + (note ? '<em class="lite">' + note + "</em>" : "") + "</div>",
                            el = $compile(templateString)($scope),
                            inputEl = el.find("#form" + functionalName);
                        if (element.append(el), model) var watchListener = $scope.$watch(model, function(a, b) {
                            inputEl.val().length > 0 && (el.addClass("dirty"), watchListener())
                        });
                        "string" == typeof attrs.disabled && "true" === attrs.disabled && inputEl.attr("disabled", "disabled"), inputEl.on("blur focus", function(e) {
                            "focus" === e.type ? (el.addClass("dirty"), el.addClass("focused")) : "blur" === e.type && 0 === inputEl.val().length ? (el.removeClass("dirty"), el.removeClass("focused")) : "blur" === e.type && el.removeClass("focused")
                        })
                    }
                }
            }

            function selectField($compile) {
                return {
                    restrict: "A",
                    link: function($scope, element, attrs) {
                        var name = attrs.name,
                            functionalName = name.charAt(0).toUpperCase() + name.slice(1),
                            templateString = '<div class="form-group"><label for="form' + functionalName + '" class="control-label">' + attrs.label + '</label><select name="' + name + '" id="form' + functionalName + '" class="form-control" ng-model="' + attrs.model + '" ng-options="' + attrs.options + '"><option value=""></option></select></div>',
                            el = $compile(templateString)($scope),
                            selectEl = el.find("#form" + functionalName);
                        element.append(el), selectEl.on("blur focus change", function(e) {
                            "focus" === e.type ? el.addClass("dirty") : "blur" === e.type && 0 === selectEl.val().length && el.removeClass("dirty")
                        })
                    }
                }
            }
            FormFieldsDirectiveModule.inputField = inputField, FormFieldsDirectiveModule.selectField = selectField
        }(FormFieldsDirectiveModule || (FormFieldsDirectiveModule = {})), Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = FormFieldsDirectiveModule
    }, {}],
    26: [function(require, module, exports) {
        var HelpDirectiveModule;
        ! function(HelpDirectiveModule) {
            function helpTrigger($templateCache, $compile, $timeout, HelpService) {
                return {
                    restrict: "A",
                    link: function($scope, element, attrs) {
                        var buildHelpModal = function(event) {
                            event.preventDefault();
                            var templateString = $templateCache.get("/modals/help.html"),
                                content = HelpService.get(attrs.helpTrigger),
                                options = {
                                    keyboard: !1
                                };
                            content && $timeout(function() {
                                $scope.$apply(function() {
                                    $scope.helpTitle = content.title, $scope.helpBody = content.body;
                                    var el = $compile(templateString)($scope);
                                    element.after(el), el.modal(options).on("hidden.bs.modal", function(e) {
                                        el.remove()
                                    })
                                })
                            }, 0)
                        };
                        element.on("click", buildHelpModal)
                    }
                }
            }
            HelpDirectiveModule.helpTrigger = helpTrigger
        }(HelpDirectiveModule || (HelpDirectiveModule = {})), Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = HelpDirectiveModule
    }, {}],
    27: [function(require, module, exports) {
        var LoadingOverlayDirectiveModule;
        ! function(LoadingOverlayDirectiveModule) {
            function overlay() {
                return {
                    restrict: "A",
                    template: "",
                    link: function($scope, element, attrs) {
                        var api = {
                            hideTimeout: null,
                            hideTimeoutThreshold: 2e4,
                            setHideTimeout: function() {
                                api.hideTimeout || (api.hideTimeout = setTimeout(function() {
                                    element.removeClass("in"), setTimeout(function() {
                                        element.removeClass("locked")
                                    }, 250)
                                }, api.hideTimeoutThreshold))
                            },
                            clearHideTimeout: function() {
                                api.hideTimeout && (clearTimeout(api.hideTimeout), api.hideTimeout = null)
                            },
                            applyState: function(state) {
                                switch ("hide" === state ? api.clearHideTimeout() : api.setHideTimeout(), state) {
                                    case "display":
                                        element.addClass("in locked no-animate"), setTimeout(function() {
                                            element.removeClass("no-animate")
                                        }, 250);
                                        break;
                                    case "hide":
                                        element.removeClass("in"), setTimeout(function() {
                                            element.removeClass("locked")
                                        }, 250);
                                        break;
                                    case "show":
                                        element.addClass("locked"), setTimeout(function() {
                                            element.addClass("in")
                                        }, 50)
                                }
                            }
                        };
                        element.addClass("loading-overlay-container"), attrs.$observe("state", function(newValue, oldValue) {
                            "" !== newValue && newValue !== oldValue && api.applyState(newValue)
                        })
                    }
                }
            }
            LoadingOverlayDirectiveModule.overlay = overlay
        }(LoadingOverlayDirectiveModule || (LoadingOverlayDirectiveModule = {})), Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = LoadingOverlayDirectiveModule
    }, {}],
    28: [function(require, module, exports) {
        var ModalDirectiveModule;
        ! function(ModalDirectiveModule) {
            function modalView($window, $state, $rootScope) {
                return {
                    restrict: "A",
                    link: function($scope, element, attrs) {
                        var options = {
                            keyboard: !1
                        };
                        element.modal(options).on("hidden.bs.modal", function(e) {
                            if ($rootScope.lastState) {
                                var lastStateGroup = $rootScope.lastState.substr(0, $rootScope.lastState.indexOf(".")),
                                    toStateGroup = $state.current.name.substr(0, $state.current.name.indexOf("."));
                                lastStateGroup === toStateGroup ? $state.go($rootScope.lastState) : element.modal("hide")
                            } else element.modal("hide")
                        })
                    }
                }
            }
            ModalDirectiveModule.modalView = modalView
        }(ModalDirectiveModule || (ModalDirectiveModule = {})), Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = ModalDirectiveModule
    }, {}],
    29: [function(require, module, exports) {
        var NavbarCollapseDirectiveModule;
        ! function(NavbarCollapseDirectiveModule) {
            function navbarCollapse() {
                return {
                    restrict: "A",
                    link: function($scope, element, attrs) {
                        element.on("click", function(e) {
                            $(e.target).is("a") && $(this).collapse("hide")
                        })
                    }
                }
            }
            NavbarCollapseDirectiveModule.navbarCollapse = navbarCollapse
        }(NavbarCollapseDirectiveModule || (NavbarCollapseDirectiveModule = {})), Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = NavbarCollapseDirectiveModule
    }, {}],
    30: [function(require, module, exports) {
        var StaticSrefDirectiveModule;
        ! function(StaticSrefDirectiveModule) {
            function staticSref(instanceConfiguration, staticUrls) {
                return {
                    restrict: "A",
                    link: function($scope, element, attrs) {
                        var path, domain, setUrl = function() {
                                "string" == typeof staticUrls[attrs.staticSref] && (path = staticUrls[attrs.staticSref], element.attr("href", domain ? domain + path : path))
                            },
                            domainLoadWatcher = function(domainType) {
                                var tries = 0,
                                    timeout = setInterval(function() {
                                        tries++, tries >= 10 && clearInterval(timeout), "string" == typeof instanceConfiguration[domainType] && "" !== instanceConfiguration[domainType] && (domain = instanceConfiguration[domainType], setUrl(), clearInterval(timeout))
                                    }, 300)
                            };
                        "string" == typeof attrs.staticSrefApp && ("subscriber" === attrs.staticSrefApp ? domainLoadWatcher("subscriberAppDomain") : "registration" === attrs.staticSrefApp && domainLoadWatcher("registrationAppDomain")), setUrl()
                    }
                }
            }
            StaticSrefDirectiveModule.staticSref = staticSref
        }(StaticSrefDirectiveModule || (StaticSrefDirectiveModule = {})), Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = StaticSrefDirectiveModule
    }, {}],
    31: [function(require, module, exports) {
        var StepsDirectiveModule;
        ! function(StepsDirectiveModule) {
            function stepCounter($rootElement) {
                return {
                    restrict: "A",
                    template: '<div class="step-container"><div class="step step-1"></div><div class="step step-2"></div><div class="step step-3"></div><div class="step step-4"></div><div class="step step-5"></div></div>',
                    link: function($scope, element, attrs) {
                        var active = "string" == typeof attrs.active ? parseInt(attrs.active) : 1;
                        element.addClass("step-counter"), "string" == typeof attrs["class"] && element.addClass(attrs["class"]);
                        for (var i = 1; active >= i; i++) element.find(".step-" + i).addClass("active")
                    }
                }
            }
            StepsDirectiveModule.stepCounter = stepCounter
        }(StepsDirectiveModule || (StepsDirectiveModule = {})), Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = StepsDirectiveModule
    }, {}],
    32: [function(require, module, exports) {
        var TabDirectiveModule;
        ! function(TabDirectiveModule) {
            function tabView() {
                return {
                    restrict: "A",
                    link: function($scope, element, attrs) {
                        element.find(".nav a").on("click", function(e) {
                            e.preventDefault(), $(this).tab("show")
                        })
                    }
                }
            }
            TabDirectiveModule.tabView = tabView
        }(TabDirectiveModule || (TabDirectiveModule = {})), Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = TabDirectiveModule
    }, {}],
    33: [function(require, module, exports) {
        var AnalyticsServiceModule;
        ! function(AnalyticsServiceModule) {
            var AnalyticsService = function() {
                function AnalyticsService($window) {
                    this.$window = $window, this.trackingEnabled = !0, this.profileData = {}
                }
                return AnalyticsService.prototype.setAppId = function(id) {
                    this.trackingEnabled && this.$window.mixpanel.init(id)
                }, AnalyticsService.prototype.setProfileData = function(profile) {
                    if (this.trackingEnabled) {
                        for (var k in profile) switch (k) {
                            case "ID":
                                this.profileData.UserID = profile[k];
                                break;
                            case "Email":
                                this.profileData.$email = profile[k];
                                break;
                            case "FirstName":
                                this.profileData.$first_name = profile[k];
                                break;
                            case "LastName":
                                this.profileData.$last_name = profile[k];
                                break;
                            default:
                                this.profileData[k] = profile[k]
                        }
                        "string" == typeof profile.ID && (this.$window.mixpanel.identify(profile.ID), this.$window.mixpanel.alias(profile.ID)), this.$window.mixpanel.people.set(this.profileData)
                    }
                }, AnalyticsService.prototype.clearProfileData = function() {
                    this.trackingEnabled && (this.$window.mixpanel.identify(null), this.$window.mixpanel.people.set({}), this.profileData = {})
                }, AnalyticsService.prototype.track = function(trackingCode, extraData) {
                    this.trackingEnabled && this.$window.mixpanel.track(trackingCode, extraData)
                }, AnalyticsService.prototype.register = function(trackingCode, value) {
                    if (this.trackingEnabled) {
                        var data = {};
                        data[trackingCode] = value || (new Date).toISOString(), this.$window.mixpanel.register(data)
                    }
                }, AnalyticsService.prototype.registerOnce = function(trackingCode, value) {
                    if (this.trackingEnabled) {
                        var data = {};
                        data[trackingCode] = value || (new Date).toISOString(), this.$window.mixpanel.register_once(data)
                    }
                }, AnalyticsService.prototype.set = function(trackingCode, value) {
                    if (this.trackingEnabled) {
                        var finalValue = value || (new Date).toISOString();
                        this.$window.mixpanel.people.set(trackingCode, finalValue)
                    }
                }, AnalyticsService.prototype.setOnce = function(trackingCode, value) {
                    if (this.trackingEnabled) {
                        var finalValue = value || (new Date).toISOString();
                        this.$window.mixpanel.people.set_once(trackingCode, finalValue)
                    }
                }, AnalyticsService.getService = function($window) {
                    return new AnalyticsService($window)
                }, AnalyticsService.$inject = ["$window"], AnalyticsService
            }();
            AnalyticsServiceModule.AnalyticsService = AnalyticsService
        }(AnalyticsServiceModule || (AnalyticsServiceModule = {})), Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = AnalyticsServiceModule
    }, {}],
    34: [function(require, module, exports) {
        var AuthServiceModule;
        ! function(AuthServiceModule) {
            var AuthService = function() {
                function AuthService($q, $rootScope, $state, $window, UserCollection, MemberCollection, OrganisationCollection, XeroUserCollection, InvoiceCollection, XeroAuthService, BillingService, SessionService, UtilService, RedirectService, AnalyticsService, instanceConfiguration) {
                    this.$q = $q, this.$rootScope = $rootScope, this.$state = $state, this.$window = $window, this.UserCollection = UserCollection, this.MemberCollection = MemberCollection, this.OrganisationCollection = OrganisationCollection, this.XeroUserCollection = XeroUserCollection, this.InvoiceCollection = InvoiceCollection, this.XeroAuthService = XeroAuthService, this.BillingService = BillingService, this.SessionService = SessionService, this.UtilService = UtilService, this.RedirectService = RedirectService, this.AnalyticsService = AnalyticsService, this.instanceConfiguration = instanceConfiguration, this.loginUrl = "/bearer/", this.afterLoginState = "payprAdmin.dashboard", this.afterLogoutState = "payprPublic.login", this.loadInitData = !0, this.SessionService.setSessionData()
                }
                return AuthService.prototype.loginViaCredentials = function(email, password, redirect) {
                    void 0 === redirect && (redirect = !0);
                    var self = this,
                        loginResult = null;
                    return this.login({
                        grant_type: "password",
                        username: email.toLowerCase(),
                        password: password
                    }, redirect).then(function(result) {
                        return loginResult = result, self.getUser()
                    }).then(function(user) {
                        return user && !user.getCachedMembership() ? self.$q.reject(self.UtilService.namedError("No membership found", "membershipNotFound")) : (redirect === !0 && self.UtilService.setLoadingState("show"), self.$q.resolve(loginResult))
                    })
                }, AuthService.prototype.loginViaAuthCode = function(code, redirect) {
                    void 0 === redirect && (redirect = !0);
                    var clientId = this.instanceConfiguration.clientId;
                    return this.login({
                        grant_type: "authorization_code",
                        code: code,
                        client_id: clientId
                    }, redirect)
                }, AuthService.prototype.login = function(data, redirect) {
                    void 0 === redirect && (redirect = !0);
                    var self = this,
                        defered = this.$q.defer(),
                        loginResult = null,
                        userResult = null,
                        memberResult = null,
                        redirectState = null;
                    return this.UserCollection.getHttp().post(this.loginUrl, data, {
                        useLoginAuth: !0
                    }).then(function(loginDataResult) {
                        return loginResult = loginDataResult.data, loginResult.status && "approved" === loginResult.status ? (self.SessionService.setToken(loginResult.access_token), self.getUser()) : self.$q.reject(self.UtilService.namedError("User not found", "userNotFound"))
                    }).then(function(userDataResult) {
                        return userResult = userDataResult, self.MemberCollection.fetchAll(!0).then(function(membersResult) {
                            if (membersResult.length > 0) {
                                for (var k in membersResult)
                                    if (membersResult[k].userId === userResult.id) {
                                        memberResult = membersResult[k];
                                        break
                                    }
                            } else memberResult = null;
                            return memberResult && "EXPENSE_SUBSCRIBER" === memberResult.role ? self.$q.resolve(redirect ? self.afterLoginState : null) : memberResult && "EXPENSE_SUBSCRIBER" !== memberResult.role ? self.$q.reject(self.UtilService.namedError("Invalid membership type", "invalidMembershipType")) : self.$q.resolve(null)
                        })
                    }).then(function(redirectToState) {
                        return redirectState = redirectToState, null === memberResult ? self.$q.resolve(null) : self.OrganisationCollection.getCurrentOrganisation().then(function(organisationResult) {
                            return self.$q.resolve(organisationResult)
                        })["catch"](function() {
                            return self.$q.resolve(null)
                        })
                    }).then(function(organisation) {
                        self.SessionService.setUserId(userResult.id), self.SessionService.setAuthData(loginResult.access_token, loginResult.issued_at, loginResult.expires_in, loginResult.refresh_token), self.UserCollection.create(userResult), self.AnalyticsService.setProfileData({
                            ID: userResult.id,
                            Email: userResult.email,
                            FirstName: userResult.firstName,
                            LastName: userResult.lastName,
                            UserRole: memberResult ? memberResult.role : "",
                            XeroCompanyName: organisation ? organisation.name : "",
                            CompanyID: organisation ? organisation.id : ""
                        }), defered.resolve(!0), redirectState && self.$state.go(redirectState)
                    })["catch"](function(err) {
                        "invalidMembershipType" !== err.name && (err.name = "userNotFound"), self.logout(!1), defered.reject(err)
                    }), defered.promise
                }, AuthService.prototype.refreshToken = function() {
                    var self = this,
                        refreshToken = self.SessionService.getTokenRefresh();
                    if (refreshToken) {
                        var postData = {
                                grant_type: "refresh_token",
                                refresh_token: refreshToken
                            },
                            authMethod = {
                                useLoginAuth: !0
                            };
                        return this.UserCollection.getHttp().post(this.loginUrl, postData, authMethod).then(function(result) {
                            return "approved" === result.status ? (self.SessionService.setAuthData(result.access_token, result.issued_at, result.expires_in, result.refresh_token), self.$q.resolve(result.access_token)) : self.$q.resolve(self.UtilService.namedError("No refresh token invalid.", "RefreshTokenInvalid"))
                        })
                    }
                    return self.$q.reject(self.UtilService.namedError("No refresh token set.", "NoRefreshToken"))
                }, AuthService.prototype.logout = function(redirect) {
                    var self = this;
                    return this.UtilService.disableErrorMessages(), this.SessionService.reset(), this.UserCollection.reset(), this.MemberCollection.reset(), this.OrganisationCollection.reset(), this.XeroUserCollection.reset(), this.InvoiceCollection.reset(), this.BillingService.reset(), this.XeroAuthService.reset(), this.UtilService.removePreferences(), this.AnalyticsService.clearProfileData(), this.$rootScope.currentUserProfile = null, ("undefined" == typeof redirect || redirect === !0) && (this.UtilService.setLoadingState("show"), setTimeout(function() {
                        self.$state.go(self.afterLogoutState)
                    }, 400)), !0
                }, AuthService.prototype.getUser = function() {
                    var userId = this.SessionService.getUserId(),
                        userToken = this.SessionService.getToken();
                    return userId || userToken ? this.UserCollection.getMe(userId || null) : this.$q.reject(new Error("No user logged in. Auth details provided."))
                }, AuthService.prototype.getMembership = function() {
                    return this.getUser().then(function(userResult) {
                        return userResult.getMembership()
                    })
                }, AuthService.prototype.cachedAuthCheck = function() {
                    return this.SessionService.isLoggedIn()
                }, AuthService.prototype.authCheck = function(loadData) {
                    var self = this,
                        promise = this.$q.defer(),
                        authCode = self.UtilService.getSearchParam("code"),
                        scope = self.UtilService.getSearchParam("scope"),
                        user = null,
                        membershipExists = null;
                    return this.$q.resolve(!0).then(function() {
                        return authCode && "autologin" === scope ? (self.UtilService.removeSearchParam("code"), self.UtilService.removeSearchParam("scope"), self.UtilService.setLoadingState("display"), self.loginViaAuthCode(authCode, !1).then(function() {
                            return self.getUser()
                        })) : self.getUser()
                    }).then(function(userResult) {
                        return user = userResult, user ? self.getMembership()["catch"](function(err) {
                            return "NoMembershipFound" === err.name ? self.$q.resolve(null) : self.$q.reject(err)
                        }) : self.$q.resolve(null)
                    }).then(function(membership) {
                        return membershipExists = membership ? !0 : !1, user ? (self.$rootScope.currentUserProfile = user, "undefined" != typeof loadData && loadData !== !0 || !membershipExists ? self.$q.resolve(!0) : self.initData().then(function() {
                            return self.$q.resolve(!0)
                        })["catch"](function() {
                            return self.$q.resolve(!0)
                        })) : self.$q.resolve(!1)
                    }).then(function(result) {
                        result && authCode && (membershipExists === !1 ? (self.AnalyticsService.setOnce("CompanyCreated"), self.AnalyticsService.track("CompanyCreated"), self.RedirectService.nextOnboardingStep(1)) : self.$state.go(self.afterLoginState)), authCode && self.UtilService.setLoadingState("hide"), promise.resolve(result)
                    })["catch"](function(err) {
                        promise.resolve(!1), authCode && self.UtilService.setLoadingState("hide")
                    }), promise.promise
                }, AuthService.prototype.initData = function() {
                    if (this.loadInitData === !1) return this.$q.resolve({
                        users: [],
                        members: [],
                        organisation: [],
                        xeroUsers: [],
                        xeroAuthorized: !1,
                        billingAuthorized: !1
                    });
                    var self = this,
                        promiseList = [this.UserCollection.fetchAll(), this.MemberCollection.fetchAll(), this.XeroUserCollection.fetchAll(), this.XeroAuthService.checkAuthorization(), this.BillingService.validBilling()];
                    return this.$q.allSettled(promiseList).then(function(promisesResults) {
                        return self.$q.resolve({
                            users: promisesResults[0].value,
                            members: promisesResults[1].value,
                            xeroUsers: promisesResults[2].value,
                            xeroAuthorized: promisesResults[3].value,
                            billingAuthorized: promisesResults[4].value
                        })
                    })["catch"](function() {
                        return self.$q.resolve(!0)
                    })
                }, AuthService.getService = function($q, $rootScope, $state, $window, UserCollection, MemberCollection, OrganisationCollection, XeroUserCollection, InvoiceCollection, XeroAuthService, BillingService, SessionService, UtilService, RedirectService, AnalyticsService, instanceConfiguration) {
                    return new AuthService($q, $rootScope, $state, $window, UserCollection, MemberCollection, OrganisationCollection, XeroUserCollection, InvoiceCollection, XeroAuthService, BillingService, SessionService, UtilService, RedirectService, AnalyticsService, instanceConfiguration)
                }, AuthService.$inject = ["$q", "$rootScope", "$state", "$window", "currentUser", "UserCollection", "MemberCollection", "OrganisationCollection", "XeroUserCollection", "InvoiceCollection", "XeroAuthService", "BillingService", "SessionService", "UtilService", "RedirectService", "instanceConfiguration"], AuthService
            }();
            AuthServiceModule.AuthService = AuthService
        }(AuthServiceModule || (AuthServiceModule = {})), Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = AuthServiceModule
    }, {}],
    35: [function(require, module, exports) {
        var BillingServiceModule;
        ! function(BillingServiceModule) {
            var BillingService = function() {
                function BillingService($q, HttpManager, RedirectService, instanceConfiguration) {
                    this.$q = $q, this.HttpManager = HttpManager, this.RedirectService = RedirectService, this.instanceConfiguration = instanceConfiguration, this.billingUrl = "/commerce/billingagreement/", this.validSubscriptionStatus = "ACTIVE", this.validSubscription = null, this.billingData = null, this.isBillingSetup = null
                }
                return BillingService.prototype.getBillingUrl = function() {
                    var self = this;
                    return this.HttpManager.post(this.billingUrl).then(function(result) {
                        return self.$q.resolve(result.data.redirectUrl)
                    })
                }, BillingService.prototype.getBillingData = function(returnCached) {
                    void 0 === returnCached && (returnCached = !0);
                    var self = this;
                    return returnCached === !0 && null !== this.billingData ? self.$q.resolve(this.billingData) : this.HttpManager.get(this.billingUrl).then(function(result) {
                        return self.validSubscription = result.data.contractStatus === self.validSubscriptionStatus, self.billingData = result.data, self.isBillingSetup = !0, self.$q.resolve(self.billingData)
                    })["catch"](function(err) {
                        return self.billingData = null, self.validSubscription = !1, self.isBillingSetup = 404 === err.status ? !1 : !0, self.$q.resolve(self.billingData)
                    })
                }, BillingService.prototype.authorizeBilling = function(viaOnboarding, options) {
                    void 0 === viaOnboarding && (viaOnboarding = !1), void 0 === options && (options = {});
                    var resolvedUrl, self = this;
                    return this.getBillingUrl().then(function(redirectUrl) {
                        return viaOnboarding ? (options.url = redirectUrl, resolvedUrl = self.RedirectService.nextOnboardingStep(5, options)) : resolvedUrl = self.RedirectService.billingRedirect(redirectUrl, options.redirect), self.$q.resolve(resolvedUrl)
                    })
                }, BillingService.prototype.validBilling = function(returnCached) {
                    void 0 === returnCached && (returnCached = !1);
                    var self = this;
                    return this.getBillingData(returnCached).then(function(billingResult) {
                        return self.$q.resolve(self.validSubscription)
                    })
                }, BillingService.prototype.getNextBillingDate = function() {
                    var self = this;
                    return this.getBillingData(!0).then(function(billingResult) {
                        var nextBillingDate = null;
                        if (billingResult && "number" == typeof billingResult.billingAnniversary) {
                            var currentDate = new Date,
                                currentYear = currentDate.getFullYear(),
                                currentMonth = currentDate.getMonth(),
                                currentDay = currentDate.getDate();
                            currentDay >= billingResult.billingAnniversary && (currentMonth += 1), nextBillingDate = new Date(currentYear, currentMonth, billingResult.billingAnniversary)
                        }
                        return self.$q.resolve(nextBillingDate)
                    })
                }, BillingService.prototype.canConnectBilling = function() {
                    var self = this;
                    return null !== self.isBillingSetup ? self.$q.resolve(self.isBillingSetup) : this.getBillingData().then(function() {
                        return self.$q.resolve(self.isBillingSetup)
                    })
                }, BillingService.prototype.getPerUserPrice = function() {
                    return this.instanceConfiguration.perUserPrice
                }, BillingService.prototype.reset = function() {
                    this.validSubscription = null, this.billingData = null
                }, BillingService.getService = function($q, HttpManager, RedirectService, instanceConfiguration) {
                    return new BillingService($q, HttpManager, RedirectService, instanceConfiguration)
                }, BillingService.$inject = ["$q", "HttpManager", "RedirectService", "instanceConfiguration"], BillingService
            }();
            BillingServiceModule.BillingService = BillingService
        }(BillingServiceModule || (BillingServiceModule = {})), Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = BillingServiceModule
    }, {}],
    36: [function(require, module, exports) {
        var ConfigLoaderModule;
        ! function(ConfigLoaderModule) {
            function Loader($q, HttpManager, ConfigInterceptor, AnalyticsService, instanceConfiguration, applicationName) {
                var configFile = "registrationApp" === applicationName ? "/handler/config.json" : "/config.json",
                    loaded = !1,
                    buildConfigError = function(err, message) {
                        return err || (err = new Error("Configuration error.")), err.name = "configurationError", message && (err.message = message), err
                    };
                return function() {
                    if (loaded === !0) return $q.resolve(!0);
                    var defer = $q.defer();
                    return HttpManager.get(configFile).then(function(result) {
                        if ("object" != typeof result.data) return $q.reject(buildConfigError());
                        loaded = !0;
                        for (var key in instanceConfiguration) result.data[key] && (instanceConfiguration[key] = result.data[key]);
                        "" !== instanceConfiguration.dataEndpoint && ConfigInterceptor.setDomain(instanceConfiguration.dataEndpoint), "" !== instanceConfiguration.analyticsAppID && AnalyticsService.setAppId(instanceConfiguration.analyticsAppID), defer.resolve(!0)
                    })["catch"](function(err) {
                        if (404 === err.status) var configErr = buildConfigError(err, "Configuration not found.");
                        else var configErr = buildConfigError(err, "Configuration could not be loaded.");
                        defer.reject(configErr)
                    }), defer.promise
                }
            }
            ConfigLoaderModule.Loader = Loader
        }(ConfigLoaderModule || (ConfigLoaderModule = {})), Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = ConfigLoaderModule
    }, {}],
    37: [function(require, module, exports) {
        var HelpServiceModule;
        ! function(HelpServiceModule) {
            var HelpService = function() {
                function HelpService() {
                    this._items = [{
                        key: "xeroAdmin",
                        title: "Not a Xero admin?",
                        body: "Invite a member of your organisation who has standard or adviser Xero user access to be able to integrate Paypr with Xero."
                    }, {
                        key: "xeroConflict",
                        title: "Xero conflict",
                        body: "There is some sort of xero conflict."
                    }, {
                        key: "alreadyMember",
                        title: "Already Paypr member",
                        body: "This user is already a member."
                    }]
                }
                return HelpService.prototype.get = function(helpKey) {
                    for (var i = 0; i < this._items.length; i++)
                        if (this._items[i].key === helpKey) return this._items[i];
                    return null
                }, HelpService.getService = function() {
                    return new HelpService
                }, HelpService
            }();
            HelpServiceModule.HelpService = HelpService
        }(HelpServiceModule || (HelpServiceModule = {})), Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = HelpServiceModule
    }, {}],
    38: [function(require, module, exports) {
        var NotificationServiceModule;
        ! function(NotificationServiceModule) {
            var NotificationService = function() {
                function NotificationService($q, HttpManager) {
                    this.$q = $q, this.HttpManager = HttpManager
                }
                return NotificationService.prototype.share = function(data) {
                    var promise = this.$q.defer();
                    return setTimeout(function() {
                        promise.resolve(!0)
                    }, 250), promise.promise
                }, NotificationService.getService = function($q, HttpManager) {
                    return new NotificationService($q, HttpManager)
                }, NotificationService.$inject = ["$q", "HttpManager"], NotificationService
            }();
            NotificationServiceModule.NotificationService = NotificationService
        }(NotificationServiceModule || (NotificationServiceModule = {})), Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = NotificationServiceModule
    }, {}],
    39: [function(require, module, exports) {
        var RedirectServiceModule;
        ! function(RedirectServiceModule) {
            var RedirectService = function() {
                function RedirectService($q, $window, $location, $state, currentUser, staticUrls, UtilService) {
                    this.$q = $q, this.$window = $window, this.$location = $location, this.$state = $state, this.currentUser = currentUser, this.staticUrls = staticUrls, this.UtilService = UtilService
                }
                return RedirectService.prototype.xeroRedirect = function(redirectUrl, redirect) {
                    return void 0 === redirect && (redirect = !0), redirect && (this.$window.location.href = redirectUrl), redirectUrl
                }, RedirectService.prototype.billingRedirect = function(redirectUrl, redirect) {
                    return void 0 === redirect && (redirect = !0), redirect && (this.$window.location.href = redirectUrl), redirectUrl
                }, RedirectService.prototype.redirectToState = function(stateName, stateParams) {
                    return void 0 === stateParams && (stateParams = {}), this.$state.get(stateName) ? (this.$state.go(stateName, stateParams), !0) : !1
                }, RedirectService.prototype.nextOnboardingStep = function(stepNumber, options) {
                    void 0 === options && (options = {});
                    var redirectLocation;
                    if (-1 === stepNumber) redirectLocation = "payprOnboarding.onboardingError", this.UtilService.setPreference("onboardingScreen", redirectLocation), this.redirectToState(redirectLocation, options);
                    else if (1 === stepNumber) redirectLocation = "payprOnboarding.xeroConnect", this.UtilService.setPreference("onboardingScreen", redirectLocation), this.redirectToState(redirectLocation, options);
                    else if (2 === stepNumber) {
                        var url = options.url,
                            redirect = !options || "undefined" != typeof options.redirect && options.redirect !== !0 ? !1 : !0,
                            nextOnboardingScreen = options && options.reintegrate === !0 ? "payprOnboarding.reintegrateXeroCallback" : "payprOnboarding.xeroCallback";
                        if (!url) throw this.UtilService.namedError("The redirect URL is invalid.", "redirectUrlInvalid");
                        this.UtilService.setPreference("onboardingScreen", nextOnboardingScreen), redirectLocation = this.xeroRedirect(url, redirect)
                    } else if (4 === stepNumber) redirectLocation = "payprOnboarding.payment", this.UtilService.setPreference("onboardingScreen", redirectLocation), this.redirectToState(redirectLocation, options);
                    else if (5 === stepNumber) {
                        var url = options.url,
                            redirect = !options || "undefined" != typeof options.redirect && options.redirect !== !0 ? !1 : !0,
                            nextOnboardingScreen = options && options.reintegrate === !0 ? "payprOnboarding.reintegrateBillingCallback" : "payprOnboarding.billingCallback";
                        if (!url) throw this.UtilService.namedError("The redirect URL is invalid.", "redirectUrlInvalid");
                        this.UtilService.setPreference("onboardingScreen", nextOnboardingScreen), redirectLocation = this.billingRedirect(url, redirect)
                    } else {
                        if (7 !== stepNumber) throw new Error("Onboarding set does not exist. Please specify a number of -1 or between 1 and 7.");
                        redirectLocation = "payprAdmin.dashboard", options.reintegrate || this.UtilService.setPreference("dismissible::welcomeBanner", !0), this.UtilService.removePreference("onboardingScreen"), this.redirectToState(redirectLocation, options)
                    }
                    return redirectLocation
                }, RedirectService.getService = function($q, $window, $location, $state, currentUser, staticUrls, UtilService) {
                    return new RedirectService($q, $window, $location, $state, currentUser, staticUrls, UtilService)
                }, RedirectService.$inject = ["$q", "$window", "$location", "$state", "currentUser", "staticUrls", "UtilService"], RedirectService
            }();
            RedirectServiceModule.RedirectService = RedirectService
        }(RedirectServiceModule || (RedirectServiceModule = {})), Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = RedirectServiceModule
    }, {}],
    40: [function(require, module, exports) {
        var RequestManagerModule;
        ! function(RequestManagerModule) {
            var ConfigInterceptor = function() {
                function ConfigInterceptor() {}
                return ConfigInterceptor.getInterceptor = function($q, UtilService, currentUser, instanceConfiguration) {
                    var domain = null;
                    return {
                        setDomain: function(domainPrefix) {
                            domain = domainPrefix
                        },
                        request: function(config) {
                            if (-1 === config.url.indexOf("."))
                                if (domain && (config.url = domain + config.url), config.useForgotPasswordAuth) config.headers.Authorization = "Basic " + UtilService.base64encode(instanceConfiguration.clientId + ":" + instanceConfiguration.clientSecret), config.headers["Content-Type"] = "application/x-www-form-urlencoded", config.data = UtilService.serializeObject(config.data);
                                else if (config.useLoginAuth) config.headers.Authorization = "Basic " + UtilService.base64encode(instanceConfiguration.clientId + ":" + instanceConfiguration.clientSecret), config.headers["Content-Type"] = "application/x-www-form-urlencoded", config.data = UtilService.serializeObject(config.data);
                            else if (config.headers.Authorization = "Bearer " + currentUser.token, config.headers["Content-Type"] = "application/vnd.paymark_api+json;version=2.0", config.headers.Accept = "application/vnd.paymark_api+json;version=2.0", "POST" !== config.method && "PUT" !== config.method || config.data || (config.data = ""), currentUser.token && currentUser.tokenExpiry) {
                                var timestamp = (new Date).getTime(),
                                    tokenExpiry = currentUser.tokenExpiry - 6e5;
                                if (timestamp >= tokenExpiry) {
                                    var error = UtilService.namedError("The token has expired.", "tokenExpired");
                                    return error.config = config, $q.reject(error)
                                }
                            }
                            return config
                        },
                        response: function(response) {
                            return response
                        }
                    }
                }, ConfigInterceptor.$inject = ["$q", "UtilService", "currentUser", "instanceConfiguration"], ConfigInterceptor
            }();
            RequestManagerModule.ConfigInterceptor = ConfigInterceptor;
            var ErrorInterceptor = function() {
                function ErrorInterceptor() {}
                return ErrorInterceptor.getInterceptor = function($q, $injector) {
                    var _this = this,
                        getAuthService = function() {
                            return _this.AuthService || (_this.AuthService = $injector.get("AuthService")), _this.AuthService
                        };
                    return {
                        requestError: function(rejection) {
                            return rejection.name && "tokenExpired" === rejection.name ? getAuthService().refreshToken().then(function(refreshedAccessToken) {
                                return rejection.config.headers.Authorization = "Bearer " + refreshedAccessToken, $q.resolve(rejection.config)
                            }) : $q.reject(rejection)
                        },
                        responseError: function(rejection) {
                            return $q.reject(rejection)
                        }
                    }
                }, ErrorInterceptor.$inject = ["$q", "$injector"], ErrorInterceptor.AuthService = null, ErrorInterceptor
            }();
            RequestManagerModule.ErrorInterceptor = ErrorInterceptor;
            var HttpManager = function() {
                function HttpManager($q, $http) {
                    this.$q = $q, this.$http = $http, this.deferredRefreshRequest = null, this.outstandingRefreshRequest = !1
                }
                return HttpManager.prototype.get = function() {
                    for (var args = [], _i = 0; _i < arguments.length; _i++) args[_i - 0] = arguments[_i];
                    return this._makeRequest("get", args)
                }, HttpManager.prototype.post = function() {
                    for (var args = [], _i = 0; _i < arguments.length; _i++) args[_i - 0] = arguments[_i];
                    return this._makeRequest("post", args)
                }, HttpManager.prototype.put = function() {
                    for (var args = [], _i = 0; _i < arguments.length; _i++) args[_i - 0] = arguments[_i];
                    return this._makeRequest("put", args)
                }, HttpManager.prototype["delete"] = function() {
                    for (var args = [], _i = 0; _i < arguments.length; _i++) args[_i - 0] = arguments[_i];
                    return this._makeRequest("delete", args)
                }, HttpManager.prototype.jsonp = function() {
                    for (var args = [], _i = 0; _i < arguments.length; _i++) args[_i - 0] = arguments[_i];
                    return this._makeRequest("jsonp", args)
                }, HttpManager.prototype._isRefreshTokenRequest = function(method, url, data) {
                    return "post" === method && url && "/bearer/" === url && data && data.grant_type && "refresh_token" === data.grant_type ? !0 : !1
                }, HttpManager.prototype._makeRequest = function(type, args) {
                    var self = this;
                    return self._isRefreshTokenRequest(type, args[0], args[1]) ? (self.outstandingRefreshRequest === !1 && (self.outstandingRefreshRequest = !0, self.deferredRefreshRequest = self.$q.defer(), self.$http[type].apply(self, args).then(function(result) {
                        return self.outstandingRefreshRequest = !1, self.deferredRefreshRequest.resolve(result.data)
                    })["catch"](function(err) {
                        return self.outstandingRefreshRequest = !1, self.deferredRefreshRequest.reject(err)
                    })), self.deferredRefreshRequest.promise) : self.$http[type].apply(self, args)
                }, HttpManager.$inject = ["$q", "$http"], HttpManager
            }();
            RequestManagerModule.HttpManager = HttpManager
        }(RequestManagerModule || (RequestManagerModule = {})), Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = RequestManagerModule
    }, {}],
    41: [function(require, module, exports) {
        var RoutingServiceModule;
        ! function(RoutingServiceModule) {
            var RoutingService = function() {
                function RoutingService($rootScope, $state, AuthService, UtilService) {
                    this.$rootScope = $rootScope, this.$state = $state, this.AuthService = AuthService, this.UtilService = UtilService, this.stateSuccessWatcher = null, this.stateChangeWatcher = null
                }
                return RoutingService.prototype.protectRoutes = function() {
                    this.stateSuccessWatcher && this.stateSuccessWatcher(), this.stateChangeWatcher && this.stateChangeWatcher(), this.redirectAuthRoutes(), this.redirectOnboardingRoutes()
                }, RoutingService.prototype.redirectAuthRoutes = function() {
                    var self = this;
                    this.stateSuccessWatcher = this.$rootScope.$on("$stateChangeSuccess", function(event, toState, toParams, fromState, fromParams) {
                        var authCheck = self.getAuthCheck(),
                            requiresAuth = "boolean" == typeof self.$state.$current.requiresAuth ? self.$state.$current.requiresAuth : !1;
                        if (self.$rootScope.lastState = fromState.name, self.$rootScope.pendingState = null, null === authCheck)("payprAdmin." === toState.name.substr(0, 11) || "payprOnboarding." === toState.name.substr(0, 16)) && (self.AuthService.logout(), self.$state.go("payprPublic.login"));
                        else if (requiresAuth === !0 && authCheck === !1) self.AuthService.logout(), self.$state.go("payprPublic.login", {
                            loginRequired: !0
                        });
                        else if (requiresAuth === !1 && authCheck === !0 && "payprAdmin.logout" !== toState.name) {
                            var onboarding = self.UtilService.getPreference("onboardingScreen");
                            onboarding ? self.$state.go(onboarding) : self.$state.go("payprAdmin.dashboard")
                        }
                        "payprAdmin.logout" !== toState.name && self.UtilService.setLoadingState("hide")
                    })
                }, RoutingService.prototype.redirectOnboardingRoutes = function() {
                    var self = this;
                    this.stateChangeWatcher = this.$rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
                        var onboarding = self.UtilService.getPreference("onboardingScreen");
                        self.$rootScope.pendingState = toState.name, "string" == typeof onboarding && toState.name.substr(0, onboarding.length) !== onboarding.substr(0, onboarding.length) && "payprAdmin.logout" !== toState.name ? (event.preventDefault(), self.AuthService.cachedAuthCheck() ? self.$state.go(onboarding) : self.AuthService.logout()) : "string" != typeof onboarding && "payprOnboarding." === toState.name.substr(0, 16) && "payprOnboarding.getPaypr" !== toState.name && (event.preventDefault(), self.$state.go("payprAdmin.dashboard"))
                    })
                }, RoutingService.prototype.disableStateChanges = function() {
                    this.stateChangeWatcher && this.stateChangeWatcher(), this.UtilService.setLoadingState("hide"), this.stateChangeWatcher = this.$rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
                        event.preventDefault()
                    })
                }, RoutingService.prototype.getAuthCheck = function() {
                    return "boolean" == typeof this.$state.$current.locals.globals.authCheck ? this.$state.$current.locals.globals.authCheck ? !0 : !1 : null
                }, RoutingService.getService = function($rootScope, $state, AuthService, UtilService) {
                    return new RoutingService($rootScope, $state, AuthService, UtilService)
                }, RoutingService.$inject = ["$rootScope", "$state", "AuthService", "UtilService"], RoutingService
            }();
            RoutingServiceModule.RoutingService = RoutingService
        }(RoutingServiceModule || (RoutingServiceModule = {})), Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = RoutingServiceModule
    }, {}],
    42: [function(require, module, exports) {
        var SessionServiceModule;
        ! function(SessionServiceModule) {
            var SessionService = function() {
                function SessionService(currentUser, UtilService) {
                    this.currentUser = currentUser, this.UtilService = UtilService, this.sessionStorageName = "payprSession", this.sessionStorageExpiry = 86400, this.userIdKey = "userId", this.accessTokenKey = "tokenAccess", this.accessTokenExpiryKey = "tokenExpiry", this.accessTokenRefreshKey = "tokenRefresh"
                }
                return SessionService.prototype.isLoggedIn = function() {
                    return this.getUserId() ? !0 : !1
                }, SessionService.prototype.getUserId = function() {
                    if (!this.currentUser.id) {
                        var storageId = this.UtilService.getIndexedStorageValue(this.sessionStorageName, this.userIdKey);
                        this.currentUser.id = "string" == typeof storageId ? storageId : null
                    }
                    return this.currentUser.id
                }, SessionService.prototype.setUserId = function(id) {
                    id = "string" == typeof id && "" !== id ? id + "" : null, this.UtilService.setIndexedStorageValue(this.sessionStorageName, this.userIdKey, id, this.sessionStorageExpiry), this.currentUser.id = id
                }, SessionService.prototype.getToken = function() {
                    if (!this.currentUser.token) {
                        var storageToken = this.UtilService.getIndexedStorageValue(this.sessionStorageName, this.accessTokenKey);
                        this.currentUser.token = "string" == typeof storageToken && "" !== storageToken ? storageToken : null
                    }
                    return this.currentUser.token
                }, SessionService.prototype.setToken = function(token) {
                    token = "string" == typeof token && "" !== token ? token + "" : null, this.UtilService.setIndexedStorageValue(this.sessionStorageName, this.accessTokenKey, token, this.sessionStorageExpiry), this.currentUser.token = token
                }, SessionService.prototype.getTokenExpiry = function() {
                    if (!this.currentUser.tokenExpiry) {
                        var storageExpiry = this.UtilService.getIndexedStorageValue(this.sessionStorageName, this.accessTokenExpiryKey);
                        this.currentUser.tokenExpiry = "number" != typeof storageExpiry || isNaN(storageExpiry) ? null : storageExpiry
                    }
                    return this.currentUser.tokenExpiry
                }, SessionService.prototype.setTokenExpiry = function(expiry) {
                    expiry = "number" == typeof expiry ? expiry : null, this.UtilService.setIndexedStorageValue(this.sessionStorageName, this.accessTokenExpiryKey, expiry, this.sessionStorageExpiry), this.currentUser.tokenExpiry = expiry
                }, SessionService.prototype.getTokenRefresh = function() {
                    if (!this.currentUser.tokenRefresh) {
                        var storageRefresh = this.UtilService.getIndexedStorageValue(this.sessionStorageName, this.accessTokenRefreshKey);
                        this.currentUser.tokenRefresh = "string" == typeof storageRefresh ? storageRefresh : null
                    }
                    return this.currentUser.tokenRefresh
                }, SessionService.prototype.setTokenRefresh = function(refresh) {
                    refresh = "string" == typeof refresh && "" !== refresh ? refresh + "" : null, this.UtilService.setIndexedStorageValue(this.sessionStorageName, this.accessTokenRefreshKey, refresh, this.sessionStorageExpiry), this.currentUser.tokenRefresh = refresh
                }, SessionService.prototype.setSessionData = function() {
                    this.currentUser.id = this.getUserId(), this.currentUser.token = this.getToken(), this.currentUser.tokenExpiry = this.getTokenExpiry(), this.currentUser.tokenRefresh = this.getTokenRefresh()
                }, SessionService.prototype.setAuthData = function(accessToken, issuedAt, expiresIn, refreshToken) {
                    var tokenExpiry = parseInt(issuedAt) + 1e3 * parseInt(expiresIn);
                    this.setToken(accessToken), this.setTokenExpiry(tokenExpiry), this.setTokenRefresh(refreshToken), this.setSessionData()
                }, SessionService.prototype.reset = function() {
                    this.currentUser.id = null, this.currentUser.token = null, this.currentUser.tokenExpiry = null, this.currentUser.tokenRefresh = null, this.UtilService.removeStorageValue(this.sessionStorageName)
                }, SessionService.getService = function(currentUser, UtilService) {
                    return new SessionService(currentUser, UtilService)
                }, SessionService.$inject = ["currentUser", "UtilService"], SessionService
            }();
            SessionServiceModule.SessionService = SessionService
        }(SessionServiceModule || (SessionServiceModule = {})), Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = SessionServiceModule
    }, {}],
    43: [function(require, module, exports) {
        var UtilServiceModule;
        ! function(UtilServiceModule) {
            var UtilService = function() {
                function UtilService($q, $window, $rootScope) {
                    this.$q = $q, this.$window = $window, this.$rootScope = $rootScope, this.preferenceStorageName = "payprPreference", this.preferenceStorageExpiry = 63072e4, this.storageType = "local", this.searchParams = {}, this.disableMessages = !1
                }
                return UtilService.prototype.namedError = function(error, name) {
                    var err = new Error(error);
                    return err.name = name, err
                }, UtilService.prototype.addBrowserClass = function(userAgent) {
                    var browserClass = null,
                        agent = userAgent || this.$window.navigator.userAgent; - 1 !== agent.indexOf("MSIE 10.") ? browserClass = "ie-ten" : -1 !== agent.indexOf("MSIE 9.") ? browserClass = "ie-nine" : -1 !== agent.indexOf("MSIE 8.") ? browserClass = "ie-eight" : -1 !== agent.indexOf("MSIE 7.") && (browserClass = "ie-seven"), browserClass && (angular.element("body").addClass("incompatible " + browserClass), this.$window.location.hash = "/browser-update")
                }, UtilService.prototype.setLoadingState = function(state) {
                    var self = this,
                        fn = function() {
                            self.$rootScope.$apply(function() {
                                self.$rootScope.loadingState = state
                            })
                        };
                    setTimeout(fn, "hide" === state ? 350 : 0)
                }, UtilService.prototype.disableErrorMessages = function(disableTimeout) {
                    void 0 === disableTimeout && (disableTimeout = 1e3);
                    var self = this;
                    this.disableMessages = !0, setTimeout(function() {
                        self.disableMessages = !1
                    }, disableTimeout)
                }, UtilService.prototype.setErrorMessage = function(message) {
                    var _this = this,
                        self = this,
                        fn = function() {
                            self.$rootScope.$apply(function() {
                                _this.$rootScope.alertMessage = message
                            })
                        };
                    this.disableMessages === !1 && setTimeout(fn, 0)
                }, UtilService.prototype.setCookie = function(name, value, expiry) {
                    var expires = "";
                    if (expiry) {
                        var date = new Date;
                        date.setTime(date.getTime() + 1e3 * expiry), expires = "; expires=" + date.toGMTString()
                    }
                    document.cookie = name + "=" + this.base64encode(value) + expires + "; path=/"
                }, UtilService.prototype.getCookie = function(cookieName) {
                    if ("undefined" != typeof cookieName && document.cookie.length > 0) {
                        var cookieStart = document.cookie.indexOf(cookieName + "=");
                        if (-1 !== cookieStart) {
                            cookieStart = cookieStart + cookieName.length + 1;
                            var cookieEnd = document.cookie.indexOf(";", cookieStart); - 1 === cookieEnd && (cookieEnd = document.cookie.length);
                            var value = decodeURI(document.cookie.substring(cookieStart, cookieEnd));
                            if ("" !== value) return this.base64decode(value)
                        }
                    }
                    return null
                }, UtilService.prototype.removeCookie = function(cookieName) {
                    this.setCookie(cookieName, "", -3600)
                }, UtilService.prototype.setLocalStorage = function(localStorageKey, value, expiry) {
                    var date = new Date,
                        expirySeconds = "number" == typeof expiry ? expiry : 31536e3,
                        expiryTimestamp = date.setTime(date.getTime() + 1e3 * expirySeconds),
                        storageValue = this.base64encode(value + "::::" + expiryTimestamp);
                    this.$window.localStorage.setItem(localStorageKey, storageValue)
                }, UtilService.prototype.getLocalStorage = function(localStorageKey) {
                    var storageValue = this.$window.localStorage.getItem(localStorageKey);
                    if (!storageValue) return null;
                    var decodedValue = this.base64decode(storageValue),
                        expiryPosition = decodedValue.lastIndexOf("::::");
                    if (-1 === expiryPosition) return decodedValue;
                    var value = decodedValue.substr(0, expiryPosition),
                        expiry = parseInt(decodedValue.substr(-(decodedValue.length - (expiryPosition + 4))));
                    return isNaN(expiry) ? value : (new Date).getTime() > expiry ? (this.removeLocalStorage(localStorageKey), null) : value
                }, UtilService.prototype.removeLocalStorage = function(localStorageKey) {
                    this.$window.localStorage.removeItem(localStorageKey)
                }, UtilService.prototype.getStorageValue = function(storageName) {
                    return "cookie" === this.storageType ? this.getCookie(storageName) : this.getLocalStorage(storageName)
                }, UtilService.prototype.setStorageValue = function(storageName, value, expiry) {
                    "cookie" === this.storageType ? this.setCookie(storageName, value, expiry) : this.setLocalStorage(storageName, value, expiry)
                }, UtilService.prototype.removeStorageValue = function(storageName) {
                    "cookie" === this.storageType ? this.removeCookie(storageName) : this.removeLocalStorage(storageName)
                }, UtilService.prototype.getIndexedStorageValue = function(storageName, name) {
                    var existingStorage = this.getStorageValue(storageName);
                    if (existingStorage) {
                        var storageData = JSON.parse(existingStorage),
                            data = "string" == typeof storageData ? JSON.parse(storageData) : storageData;
                        if ("object" == typeof data && "undefined" != typeof data[name]) return data[name]
                    }
                    return null
                }, UtilService.prototype.setIndexedStorageValue = function(storageName, name, value, expiry) {
                    var existingStorage = this.getStorageValue(storageName),
                        storageData = null !== existingStorage ? JSON.parse(existingStorage) : {},
                        data = "string" == typeof storageData ? JSON.parse(storageData) : storageData;
                    null === value ? "undefined" != typeof data[name] && delete data[name] : data[name] = value, this.setStorageValue(storageName, JSON.stringify(data), expiry)
                }, UtilService.prototype.removeIndexedStorageValue = function(storageName, name, expiry) {
                    this.setIndexedStorageValue(storageName, name, null, expiry)
                }, UtilService.prototype.getPreference = function(name) {
                    return this.getIndexedStorageValue(this.preferenceStorageName, name)
                }, UtilService.prototype.setPreference = function(name, value) {
                    return this.setIndexedStorageValue(this.preferenceStorageName, name, value, this.preferenceStorageExpiry)
                }, UtilService.prototype.removePreference = function(name) {
                    this.setPreference(name, null)
                }, UtilService.prototype.removePreferences = function() {
                    this.removeStorageValue(this.preferenceStorageName)
                }, UtilService.prototype.parseQuerystring = function() {
                    for (var queryString = this.$window.location.search.substring(1), vars = queryString.split("&"), queryStringAsObject = {}, i = 0; i < vars.length; i++) {
                        var pair = vars[i].split("=");
                        queryStringAsObject[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1])
                    }
                    return queryStringAsObject
                }, UtilService.prototype.storeSearchParams = function() {
                    this.searchParams = this.parseQuerystring()
                }, UtilService.prototype.getSearchParams = function() {
                    return this.searchParams
                }, UtilService.prototype.getSearchParam = function(paramKey) {
                    return this.searchParams[paramKey] ? this.searchParams[paramKey] : null
                }, UtilService.prototype.removeSearchParam = function(paramKey) {
                    this.searchParams[paramKey] && delete this.searchParams[paramKey]
                }, UtilService.prototype.base64encode = function(value) {
                    return null === value ? value : btoa(value)
                }, UtilService.prototype.base64decode = function(value) {
                    return null === value ? value : atob(value)
                }, UtilService.prototype.postDataToUrl = function(url, data, method, submit, delay) {
                    void 0 === method && (method = "POST"), void 0 === submit && (submit = !0), void 0 === delay && (delay = 150);
                    var form = angular.element("<form>", {
                        action: url,
                        method: method,
                        target: "_top"
                    });
                    for (var key in data) form.append(angular.element("<input>", {
                        name: key,
                        value: data[key],
                        type: "hidden"
                    }));
                    return angular.element("body").append(form), submit && setTimeout(function() {
                        form.submit()
                    }, delay), this.$q.defer().promise
                }, UtilService.prototype.serializeObject = function(obj) {
                    if (obj) {
                        var str = [];
                        for (var p in obj) obj.hasOwnProperty(p) && str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                        return str.join("&")
                    }
                    return ""
                }, UtilService.prototype.randomString = function(length, includeSpecialChars) {
                    void 0 === includeSpecialChars && (includeSpecialChars = !0);
                    var text = "",
                        possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                    includeSpecialChars === !0 && (possible += "!@#$%^&*()_");
                    for (var i = 0; length > i; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));
                    return text
                }, UtilService.prototype.bytesInString = function(str) {
                    for (var s = str.length, i = str.length - 1; i >= 0; i--) {
                        var code = str.charCodeAt(i);
                        code > 127 && 2047 >= code ? s++ : code > 2047 && 65535 >= code && (s += 2), code >= 56320 && 57343 >= code && i--
                    }
                    return s
                }, UtilService.prototype.createFakeUserDetails = function(createId) {
                    void 0 === createId && (createId = !1);
                    var firstNames = ["Jeri", "Ardelia", "Haydee", "Karly", "Edmund", "Jarred", "Leda", "Arnette", "Mayme", "Deneen", "Shakira", "Randy", "Theodora", "Jacqui", "Adela", "Ernestina", "Neal", "Annice", "Donnetta", "Leonida", "Marlin", "Mackenzie", "Willene", "Leann", "Karie", "Jefferson", "Suzi", "Consuela", "Mary", "Denis", "Leigh", "Emma", "Ngoc", "Mistie", "Nan", "Jeromy", "Marilynn", "Bethany", "Wenona", "Armandina", "Teddy", "Adeline", "Diamond", "Siobhan", "Ardella", "Monet", "Dagmar", "Eleonore", "Onie", "Raeann"],
                        lastNames = ["SMITH", "JOHNSON", "WILLIAMS", "BROWN", "JONES", "MILLER", "DAVIS", "GARCIA", "RODRIGUEZ", "WILSON", "MARTINEZ", "ANDERSON", "TAYLOR", "THOMAS", "HERNANDEZ", "MOORE", "MARTIN", "JACKSON", "THOMPSON", "WHITE", "LOPEZ", "LEE", "GONZALEZ", "HARRIS", "CLARK", "LEWIS", "ROBINSON", "WALKER", "PEREZ", "HALL", "YOUNG", "ALLEN", "SANCHEZ", "WRIGHT", "KING", "SCOTT", "GREEN", "BAKER", "ADAMS", "NELSON", "HILL", "RAMIREZ", "CAMPBELL", "MITCHELL", "ROBERTS", "CARTER", "PHILLIPS", "EVANS", "TURNER", "TORRES"],
                        companyNames = ["Acme, inc.", "Widget Corp", "123 Warehousing", "Demo Company", "Smith and Co.", "Foo Bars", "ABC Telecom", "Fake Brothers", "QWERTY Logistics", "Demo, inc.", "Sample Company", "Sample, inc", "Acme Corp", "Allied Biscuit", "Ankh-Sto Associates", "Extensive Enterprise", "Galaxy Corp", "Globo-Chem", "Mr. Sparkle", "Globex Corporation", "LexCorp", "LuthorCorp", "North Central Positronics", "Omni Consimer Products", "Praxis Corporation", "Sombra Corporation", "Sto Plains Holdings", "Tessier-Ashpool", "Wayne Enterprises", "Wentworth Industries", "ZiffCorp", "Bluth Company", "Strickland Propane", "Thatherton Fuels", "Three Waters", "Water and Power", "Western Gas & Electric", "Mammoth Pictures", "Mooby Corp", "Gringotts", "Thrift Bank", "Flowers By Irene", "The Legitimate Businessmens Club", "Osato Chemicals", "Transworld Consortium", "Universal Export", "United Fried Chicken", "Virtucon", "Kumatsu Motors", "Keedsler Motors", "Powell Motors", "Industrial Automation", "Sirius Cybernetics Corporation", "U.S. Robotics and Mechanical Men", "Colonial Movers", "Corellian Engineering Corporation", "Incom Corporation", "General Products", "Leeding Engines Ltd.", "Blammo", "Input, Inc.", "Mainway Toys", "Videlectrix", "Zevo Toys", "Ajax", "Axis Chemical Co.", "Barrytron", "Carrys Candles", "Cogswell Cogs", "Spacely Sprockets", "General Forge and Foundry", "Duff Brewing Company", "Dunder Mifflin", "General Services Corporation", "Monarch Playing Card Co.", "Krustyco", "Initech", "Roboto Industries", "Primatech", "Sonky Rubber Goods", "St. Anky Beer", "Stay Puft Corporation", "Vandelay Industries", "Wernham Hogg", "Gadgetron", "Burleigh and Stronginthearm", "BLAND Corporation", "Nordyne Defense Dynamics", "Petrox Oil Company", "Roxxon", "McMahon and Tate", "Sixty Second Avenue", "Charles Townsend Agency", "Spade and Archer", "Megadodo Publications", "Rouster and Sideways", "C.H. Lavatory and Sons", "Globo Gym American Corp", "The New Firm", "SpringShield", "Compuglobalhypermeganet", "Data Systems", "Gizmonic Institute", "Initrode", "Taggart Transcontinental", "Atlantic Northern", "Niagular", "Plow King", "Big Kahuna Burger", "Big T Burgers and Fries", "Chez Quis", "Chotchkies", "The Frying Dutchman", "Klimpys", "The Krusty Krab", "Monks Diner", "Milliways", "Minuteman Cafe", "Taco Grande", "Tip Top Cafe", "Moes Tavern", "Central Perk", "Chasers"],
                        id = Math.floor(999999 + 999999999 * Math.random()),
                        firstName = firstNames[Math.floor(Math.random() * firstNames.length)].toLowerCase(),
                        lastName = lastNames[Math.floor(Math.random() * lastNames.length)].toLowerCase(),
                        company = companyNames[Math.floor(Math.random() * companyNames.length)],
                        email = (firstName + "." + lastName + "@" + company.replace(/[0-9-.&, ]/g, "") + ".com").toLowerCase(),
                        password = this.randomString(10, !0);
                    return {
                        id: createId ? id : null,
                        firstName: firstName.charAt(0).toUpperCase() + firstName.slice(1),
                        lastName: lastName.charAt(0).toUpperCase() + lastName.slice(1),
                        email: email,
                        organisation: company,
                        password: password,
                        confirmPassword: password,
                        terms: !0
                    }
                }, UtilService.getService = function($q, $window, $rootScope) {
                    return new UtilService($q, $window, $rootScope)
                }, UtilService.$inject = ["$q", "$window", "$rootScope"], UtilService
            }();
            UtilServiceModule.UtilService = UtilService
        }(UtilServiceModule || (UtilServiceModule = {})), Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = UtilServiceModule
    }, {}],
    44: [function(require, module, exports) {
        var ValidationServiceModule;
        ! function(ValidationServiceModule) {
            var ValidationService = function() {
                function ValidationService(UtilService) {
                    this.UtilService = UtilService;
                    var dataValidationMessage = function(params, element) {
                        return element.getAttribute("data-validation-message")
                    };
                    jQuery.validator.addMethod("strongPassword", this.strongPasswordRule.bind(this), dataValidationMessage), jQuery.validator.addMethod("strongEmail", this.strongEmailRule.bind(this), "Enter a valid email address."), jQuery.extend(jQuery.validator.messages, {
                        accept: "Enter a value with a valid extension.",
                        creditcard: "Enter a valid credit card number.",
                        date: "Enter a valid date.",
                        dateISO: "Enter a valid date (ISO).",
                        digits: "Enter only digits.",
                        email: "Required",
                        equalTo: "This field doesn't match.",
                        max: jQuery.validator.format("Enter no more than {0} characters."),
                        maxlength: jQuery.validator.format("Enter no more than {0} characters."),
                        min: jQuery.validator.format("Enter a value greater than or equal to {0}."),
                        minlength: jQuery.validator.format("Enter at least {0} characters."),
                        number: "Enter a valid number.",
                        range: jQuery.validator.format("Enter a value between {0} and {1}."),
                        rangelength: jQuery.validator.format("Enter a value between {0} and {1} characters long."),
                        remote: "Fix this field.",
                        required: "This field is required.",
                        url: "Enter a valid URL."
                    })
                }
                return ValidationService.prototype._validatorOptions = function(rules, extendedOptions) {
                    var options = {
                        rules: rules,
                        ignore: ":hidden:not(.always-validate)",
                        errorElement: "span",
                        errorClass: "input-error",
                        errorPlacement: function(error, element) {
                            element.is(":radio") || element.is(":checkbox") ? error.insertAfter(element.siblings("label")) : (error.insertAfter(element), setTimeout(function() {
                                error.addClass("show")
                            }, 0))
                        }
                    };
                    if ("object" == typeof extendedOptions)
                        for (var k in extendedOptions) options[k] = extendedOptions[k];
                    return options
                }, ValidationService.prototype._fieldFeedback = function(field, valid, rules) {
                    var self = this,
                        container = field.closest(".form-group"),
                        fieldId = field.attr("id");
                    container.hasClass("validated") || field.on("keyup", function() {
                        self.validField(field, rules)
                    });
                    for (var k in rules) "string" == typeof rules[k].equalTo && rules[k].equalTo === fieldId && self.validField($("#form" + (k.charAt(0).toUpperCase() + k.slice(1))), rules);
                    container.removeClass(valid ? "invalid" : "valid").addClass(valid ? "validated valid" : "validated invalid")
                }, ValidationService.prototype.validForm = function(form, rules) {
                    var self = this,
                        validator = form.validate(this._validatorOptions(rules, {
                            invalidHandler: function(event, validator) {
                                for (var k in validator.errorList) {
                                    var field = $(validator.errorList[k].element);
                                    self._fieldFeedback(field, !1, rules)
                                }
                                for (var k in validator.successList) {
                                    var field = $(validator.successList[k].element);
                                    self._fieldFeedback(field, !0, rules)
                                }
                            }
                        }));
                    return validator.form() ? !0 : !1
                }, ValidationService.prototype.validField = function(field, rules) {
                    var validateOptions = this._validatorOptions(rules),
                        validator = field.closest("form").validate(validateOptions),
                        valid = validator.element(field);
                    return this._fieldFeedback(field, valid, rules), valid
                }, ValidationService.prototype.strongPasswordRule = function(value, element, params) {
                    var tests = {
                            lowercase: /[a-z]+/,
                            uppercase: /[A-Z]+/,
                            number: /[0-9]+/,
                            special: /[!"#$%&'()*+,-.\/:;<=>?@[\]^_`{|}~]+/
                        },
                        minChars = 8,
                        matches = [],
                        pass = !0;
                    for (var k in tests) tests[k].test(value) && matches.push(k);
                    if (pass = matches.length >= 3 && value.length >= minChars, !pass)
                        if (value.length < minChars) element.setAttribute("data-validation-message", "Enter at least " + minChars + " characters.");
                        else {
                            var unused = [];
                            for (var k in tests) - 1 === matches.indexOf(k) && unused.push(k);
                            var lastUnused = unused.shift(),
                                message = "";
                            message = "number" === lastUnused || "special" === lastUnused ? "Please use a number." : "Please us a " + lastUnused + " character.", element.setAttribute("data-validation-message", message)
                        }
                    return pass ? !0 : !1
                }, ValidationService.prototype.strongEmailRule = function(value, element, params) {
                    var containsAt = value.indexOf("@") > -1;
                    if (containsAt === !1) return !1;
                    var localPart = value.split("@").shift(),
                        domainPart = value.substr(localPart.length + 1, value.length),
                        validLocal = this.UtilService.bytesInString(localPart) <= 64,
                        validDomain = this.UtilService.bytesInString(domainPart) <= 255;
                    return validLocal === !1 || validDomain === !1 ? !1 : !0
                }, ValidationService.getService = function(UtilService) {
                    return new ValidationService(UtilService)
                }, ValidationService.$inject = ["UtilService"], ValidationService
            }();
            ValidationServiceModule.ValidationService = ValidationService
        }(ValidationServiceModule || (ValidationServiceModule = {})), Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = ValidationServiceModule
    }, {}],
    45: [function(require, module, exports) {
        var XeroAuthServiceModule;
        ! function(XeroAuthServiceModule) {
            var XeroAuthService = function() {
                function XeroAuthService($q, HttpManager, RedirectService) {
                    this.$q = $q, this.HttpManager = HttpManager, this.RedirectService = RedirectService, this.authorizeUrl = "/xero/oauth/authorisation/", this.authorizedStatus = "ACTIVE", this.authorized = null, this.authorisationData = null
                }
                return XeroAuthService.prototype.checkAuthorization = function(returnCached) {
                    void 0 === returnCached && (returnCached = !1);
                    var self = this;
                    return returnCached === !0 && null !== this.authorized ? self.$q.resolve(this.authorized) : this.HttpManager.get(this.authorizeUrl).then(function(result) {
                        return self.authorized = result.data.organisationStatus === self.authorizedStatus, self.authorisationData = result.data, self.$q.resolve(self.authorized)
                    })
                }, XeroAuthService.prototype.getAuthorizationData = function(returnCached) {
                    void 0 === returnCached && (returnCached = !1);
                    var self = this;
                    return this.checkAuthorization(returnCached).then(function(result) {
                        return result === !0 ? self.authorisationData : self.authorized
                    })
                }, XeroAuthService.prototype.getAuthorizeUrl = function() {
                    var self = this;
                    return this.HttpManager.post(this.authorizeUrl).then(function(result) {
                        return result.data && result.data.authorisationUrl ? self.$q.resolve(result.data.authorisationUrl) : self.$q.reject(new Error("Could not get authorisation Url."))
                    })
                }, XeroAuthService.prototype.authorizeXero = function(viaOnboarding, options) {
                    void 0 === viaOnboarding && (viaOnboarding = !1), void 0 === options && (options = {});
                    var self = this;
                    return this.getAuthorizeUrl().then(function(redirectUrl) {
                        return viaOnboarding ? (options.url = redirectUrl, redirectUrl = self.RedirectService.nextOnboardingStep(2, options)) : redirectUrl = self.RedirectService.xeroRedirect(redirectUrl, options.redirect), self.$q.resolve(redirectUrl)
                    })
                }, XeroAuthService.prototype.getOrgName = function() {
                    var self = this;
                    return this.getAuthorizationData().then(function(result) {
                        return self.$q.resolve(result.name || null)
                    })
                }, XeroAuthService.prototype.reset = function() {
                    this.authorized = null, this.authorisationData = null
                }, XeroAuthService.getService = function($q, HttpManager, RedirectService) {
                    return new XeroAuthService($q, HttpManager, RedirectService)
                }, XeroAuthService.$inject = ["$q", "HttpManager", "RedirectService"], XeroAuthService
            }();
            XeroAuthServiceModule.XeroAuthService = XeroAuthService
        }(XeroAuthServiceModule || (XeroAuthServiceModule = {})), Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = XeroAuthServiceModule
    }, {}],
    46: [function(require, module, exports) {
        var subscriberApp_ts_1 = require("./bootstrap/subscriberApp.ts");
        subscriberApp_ts_1["default"].provider("$PayprState", ["$stateProvider", function($stateProvider) {
            var self = this;
            return this.state = $stateProvider.state, this.decorator = $stateProvider.decorator, this.$get = $stateProvider.$get, this.multiState = function(stateNames, state) {
                for (var i = 0; i < stateNames.length; i++) {
                    var stateParams = angular.copy(state);
                    self.state(stateNames[i], stateParams)
                }
            }, this
        }]), subscriberApp_ts_1["default"].authResolver = function($q, ConfigLoader, UtilService, AuthService) {
            var defered = $q.defer();
            return ConfigLoader().then(function() {
                return AuthService.authCheck()
            }).then(function(loggedin) {
                defered.resolve(loggedin)
            })["catch"](function(err) {
                "configurationError" === err.name && UtilService.setErrorMessage(err.message), defered.resolve(!1)
            }), defered.promise
        }, subscriberApp_ts_1["default"].displayLoadingState = function(UtilService) {
            return UtilService.setLoadingState("display"), !0
        }, subscriberApp_ts_1["default"].config(["$httpProvider", "$PayprStateProvider", "$urlRouterProvider", function($httpProvider, $stateProvider, $urlRouterProvider) {
            $httpProvider.interceptors.push("ConfigInterceptor"), $httpProvider.interceptors.push("ErrorInterceptor"), $urlRouterProvider.otherwise(function($injector, $location) {
                var utilSerivice = $injector.get("UtilService"),
                    state = $injector.get("$state"),
                    onboarding = utilSerivice.getPreference("onboardingScreen");
                return onboarding ? state.get(onboarding).url : "/login"
            }), $stateProvider.state("payprPublic", {
                url: "",
                "abstract": !0,
                templateUrl: "/layout/defaultTemplate.html",
                resolve: {
                    authCheck: subscriberApp_ts_1["default"].authResolver
                }
            }).state("payprOnboarding", {
                url: "",
                "abstract": !0,
                templateUrl: "/layout/setupTemplate.html",
                resolve: {
                    authCheck: subscriberApp_ts_1["default"].authResolver
                }
            }).state("payprAdmin", {
                url: "",
                "abstract": !0,
                templateUrl: "/layout/adminTemplate.html",
                resolve: {
                    authCheck: subscriberApp_ts_1["default"].authResolver
                }
            }).state("payprError", {
                url: "",
                "abstract": !0,
                templateUrl: "/layout/setupTemplate.html"
            }), $stateProvider.state("payprPublic.login", {
                url: "/login",
                requiresAuth: !1,
                params: {
                    loggedOut: !1,
                    loginRequired: !1
                },
                views: {
                    "": {
                        templateUrl: "/auth/login.html",
                        controller: "LoginController"
                    },
                    footerView: {
                        template: 'Don\'t have an account? <a class="text-medium" static-sref="registerUrlHash" static-sref-app="registration">Sign up for Paypr</a>'
                    }
                }
            }).state("payprPublic.forgotPassword", {
                url: "/forgot-password",
                requiresAuth: !1,
                views: {
                    "": {
                        templateUrl: "/auth/forgotPassword.html",
                        controller: "ForgotPasswordController"
                    }
                }
            }).state("payprError.browserUpdate", {
                url: "/browser-update",
                requiresAuth: null,
                views: {
                    "": {
                        controller: function(RoutingService) {
                            RoutingService.disableStateChanges()
                        },
                        templateUrl: "/pages/browserUpdate.html"
                    }
                }
            }), $stateProvider.state("payprOnboarding.xeroConnect", {
                url: "/connect-to-xero",
                controller: "XeroConnectController",
                templateUrl: "/setup/connect.html",
                requiresAuth: !0
            }).state("payprOnboarding.onboardingError", {
                url: "/error",
                requiresAuth: !0,
                params: {
                    xeroError: !1,
                    xeroDemoCompany: !1,
                    billingError: !1
                },
                views: {
                    "": {
                        templateUrl: "/setup/error.html",
                        controller: "OnboardingErrorController"
                    },
                    footerView: {
                        template: 'Experiencing problems? <a class="text-medium" ui-sref="payprAdmin.logout" target="blank">Logout to start again</a>'
                    }
                }
            }).state("payprOnboarding.getPaypr", {
                url: "/get-paypr",
                requiresAuth: !0,
                views: {
                    "": {
                        templateUrl: "/pages/getPaypr.html",
                        controller: "GetPayprController"
                    },
                    benefitView: {
                        templateUrl: "/pages/benefit.html"
                    }
                }
            }).state("payprOnboarding.payment", {
                url: "/payment",
                controller: "BillingController",
                templateUrl: "/setup/payment.html",
                requiresAuth: !0
            }).state("payprOnboarding.xeroCallback", {
                url: "/xero-callback",
                requiresAuth: !0,
                views: {
                    "@payprOnboarding.xeroCallback": {
                        template: "",
                        controller: "XeroCallbackController"
                    },
                    "@": {
                        templateUrl: "/layout/emptyTemplate.html"
                    }
                },
                resolve: {
                    loader: subscriberApp_ts_1["default"].displayLoadingState
                }
            }).state("payprOnboarding.reintegrateXeroCallback", {
                url: "/reintegrate-xero-callback",
                requiresAuth: !0,
                data: {
                    reintegrate: !0
                },
                views: {
                    "@payprOnboarding.reintegrateXeroCallback": {
                        template: "",
                        controller: "XeroCallbackController"
                    },
                    "@": {
                        templateUrl: "/layout/emptyTemplate.html"
                    }
                },
                resolve: {
                    loader: subscriberApp_ts_1["default"].displayLoadingState
                }
            }).state("payprOnboarding.billingCallback", {
                url: "/billing-callback",
                requiresAuth: !0,
                views: {
                    "@payprOnboarding.billingCallback": {
                        template: "",
                        controller: "BillingCallbackController"
                    },
                    "@": {
                        templateUrl: "/layout/emptyTemplate.html"
                    }
                },
                resolve: {
                    loader: subscriberApp_ts_1["default"].displayLoadingState
                }
            }).state("payprOnboarding.reintegrateBillingCallback", {
                url: "/reintegrate-billing-callback",
                requiresAuth: !0,
                data: {
                    reintegrate: !0
                },
                views: {
                    "@payprOnboarding.billingCallback": {
                        template: "",
                        controller: "BillingCallbackController"
                    },
                    "@": {
                        templateUrl: "/layout/emptyTemplate.html"
                    }
                },
                resolve: {
                    loader: subscriberApp_ts_1["default"].displayLoadingState
                }
            }), $stateProvider.state("payprAdmin.dashboard", {
                url: "/dashboard",
                controller: "AdminDashboardController",
                templateUrl: "/admin/dashboard.html",
                requiresAuth: !0
            }).state("payprAdmin.dashboard.invite", {
                url: "/invite-members",
                requiresAuth: !0,
                params: {
                    selected: !1
                },
                views: {
                    inviteModal: {
                        templateUrl: "/modals/invite.html",
                        controller: "InviteModalController"
                    }
                }
            }).state("payprAdmin.myAccount", {
                url: "/my-account",
                templateUrl: "/admin/myAccount.html",
                controller: "AdminMyAccountController",
                requiresAuth: !0
            }).state("payprAdmin.billingAndSubscription", {
                url: "/billing-and-subscription",
                templateUrl: "/admin/billingAndSubscription.html",
                controller: "AdminBillingAndSubscriptionController",
                requiresAuth: !0
            }), $stateProvider.state("payprAdmin.logout", {
                url: "/logout",
                template: "",
                controller: "LogoutController",
                requiresAuth: null
            })
        }]), subscriberApp_ts_1["default"].run(["RoutingService", "UtilService", function(RoutingService, UtilService) {
            RoutingService.protectRoutes(), UtilService.storeSearchParams(), UtilService.addBrowserClass(), UtilService.setLoadingState("display")
        }])
    }, {
        "./bootstrap/subscriberApp.ts": 3
    }]
}, {}, [46]);