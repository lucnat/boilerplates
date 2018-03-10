
ApiV1 = new Restivus({
	version: 'v1',
	useDefaultAuth: true,
	prettyJson: true,
	auth: {
		token: "services.resume.loginTokens.hashedToken",
		user: function(){
			var token = '';
			if(this.request.headers['x-auth-token']){
				token = Accounts._hashLoginToken(this.request.headers['x-auth-token']);
			}
			return {
				userId: this.request.headers['x-user-id'] || '',
				token: token 
			}
		}
	},
});
