      var auth0 = new Auth0({
        domain: 'wolf-beacon.auth0.com',
        clientID: '4Yp5JVVkqMjbtN6RuEh09il75ssVNTkQ',
        redirectURL: 'http://www.eonjohn.com/wolfbeacon',
        responseType: 'token'
    });
   var options = {
            "icon": "htv_logo-01.png",
             "primaryColor": "#37adcb",
            "foregroundColor": "#edf5e1",
            "responseType": "token",
            "autoclose": true,
            "container": "login-box",
            "focusInput": false,
            "popup": false,
            "socialBigButtons": true,
            "dict": { "title": "WolfBeacon" },
            "authParams": { "scope": "openid profile offline_access" },
            "connections": ["facebook", "twitter"]
        };

                var lock = new Auth0Lock('4Yp5JVVkqMjbtN6RuEh09il75ssVNTkQ', 'wolf-beacon.auth0.com', options);
     
 
lock.show({}, function(err, profile, id_token){
  if(err){
    console.log('error logging in', err);
    return;
  }
    $('.website').hide();
        $('.momentum').show();  
});