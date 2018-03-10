
ApiV1.addRoute('register', {}, {
	post: function(){
		var user = this.bodyParams;
		if(!user.email || user.email.length < 4){
			return {
				statusCode: 400,
				body: {'status': 'error', 'message': 'Ungültige Email'}
			}
		}
		if(!user.username || user.username.length < 4){
			return {
				statusCode: 400,
				body: {'status': 'error', 'message': 'Username zu kurz'}
			}
		} 
		if(!user.password || user.password.length < 6){
			return {
				statusCode: 400,
				body: {'status': 'error', 'message': 'Passwort zu kurz'}
			}
		}
		if(Users.findOne({'username': user.username})){
			return {
				statusCode: 400,
				body: {'status': 'error', 'message': 'Username existiert bereits'}
			}
		}
		if(Accounts.findUserByEmail(user.email)) {
			return {
				statusCode: 400,
				body: {'status': 'error', 'message': 'Email existiert bereits'}
			}
		}		
		var userId = Accounts.createUser({'username': user.username, 'email': user.email, 'password': user.password, profile: {'avatar': user.avatar}});
		Accounts.sendVerificationEmail(userId);
		return {
			statusCode: 200,
			body: {'status':'success', 'message': 'Du kannst dich jetzt einloggen'}
		}
	}
});

ApiV1.addRoute('forgotpassword/:email', {}, {
	get: {
		authRequired: false,
		action: function(){
			var user = Accounts.findUserByEmail(this.urlParams.email);
			if(user){
				console.log('sending mail to ' + user);
				Accounts.sendResetPasswordEmail(user._id);
				return {
					statusCode: 200,
					body: {'status': 'success', 'message': 'Email wurde gesendet'}
				}
			} else {
				return {
					statusCode: 400,
					body: {'status': 'error', 'message': 'Username zu kurz'}
				}
			}
		}
	}
});

ApiV1.addRoute('tokenvalid', {}, {
	get: {
		authRequired: true,
		action: function(){
			return {
				statusCode: 200,
				body: {'status': 'success', 'message': 'This token is valid'}
			}
		}
	}
});


/*

How auth works under the hood. When the /login endpoint is called, then we check if the password and user match.
If they do, we generate a login token 

Accounts._generateStampedLoginToken() which gives us simply gives us

{ token: Random.secret(), when: new Date }

We now add this to the user's list of tokens by calling

Accounts._insertLoginToken(userId, stampedToken) which does nothing but 

this.users.update({'_id': 'userid'}, {
	$addToSet: {
		"services.resume.loginTokens": hashedToken
	}
});

*/
