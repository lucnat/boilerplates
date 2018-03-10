import { FB } from 'fb';

$FB = function () {
    if (Meteor.isClient) {
        throw new Meteor.Error(500, "Cannot run on client.");
    }

    var args = Array.prototype.slice.call(arguments);
    if (args.length === 0) {
        return;
    }
    var path = args[0];
    var i = 1;
    // Concatenate strings together in args
    while (_.isString(args[i])) {
        path = path + "/" + args[i];
        i++;
    }


    if (_.isUndefined(path)) {
        throw new Meteor.Error(500, 'No Facebook API path provided.');
    }

    var fbResponse = Meteor.sync(function (done) {
        FB.napi.apply(FB, [path].concat(args.splice(i)).concat([done]));
    });

    if (fbResponse.error !== null) {
        console.error(fbResponse.error.stack);
        throw new Meteor.Error(500, "Facebook API error.", {error: fbResponse.error, request: args});
    }

    return fbResponse.result;
};

function facebookLoginWithAccessToken(accessToken, email, name) {
    check(accessToken, String);

    var serviceData = {
        accessToken: accessToken
    };

    facebookAppID = "312310255868775";
    facebookAppSecret = "d79b13fa42247feddf759a250be81908";

    // Confirm that your accessToken is you
    try {
        var tokenInfo = $FB('debug_token', {
            input_token: accessToken,
            access_token: facebookAppID + '|' + facebookAppSecret
        });
    } catch (e) {
        throw new Meteor.Error(500, 'Facebook login failed. An API error occurred.');
    }

    if (!tokenInfo.data.is_valid) {
        throw new Meteor.Error(503, 'This access token is not valid.');
    }

    if (tokenInfo.data.app_id !== facebookAppID) {
        throw new Meteor.Error(503, 'This token is not for this app.');
    }

    // Force the user id to be the access token's user id
    serviceData.id = tokenInfo.data.user_id;

    // Returns a token you can use to login
    var loginResult = Accounts.updateOrCreateUserFromExternalService('facebook', serviceData, {name: name, email: email});

    var stampedLoginToken = Accounts._generateStampedLoginToken();

    Accounts._insertLoginToken(loginResult.userId, stampedLoginToken);


    // Login the user
    // this.setUserId(loginResult.userId);

    // Return the token and the user id
    return {
        statusCode: 200,
        body: {
            data: {
                userId: loginResult.userId,
                authToken: stampedLoginToken.token
            }
        }
    };
}


ApiV1.addRoute('facebooklogin', {authRequired: false}, {
    post: {
        action: function () {
            var accessToken = this.bodyParams.accessToken || this.urlParams.accessToken;
            var email = this.bodyParams.email;
            var name = this.bodyParams.name;
            if (accessToken) {
                return facebookLoginWithAccessToken(accessToken, email, name)
            }
            return {
                statusCode: 400,
                body: {
                    status: "fail",
                    message: "Unable to Post to FB Login. Values Received: accessToken: " + accessToken + ", email: " + email + ", name: " + name
                }
            };
        }
    }
});
