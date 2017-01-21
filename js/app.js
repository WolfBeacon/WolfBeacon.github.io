
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
     
 
lock.show( function(err, profile, id_token){
  if (!err) {
            console.log('profile',profile);
            console.log('id_token',profile);
            console.log('state',state);

            // Save the JWT token.
            localStorage.setItem('userToken', id_token);
            $('.website').hide();
            $('.momentum').show();
          }
        });

