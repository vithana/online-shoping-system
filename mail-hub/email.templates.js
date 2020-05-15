const templates = {};
const webUrl = "www.ourwebsite.com";

templates.newAccountCreated = function (username, password) {
    return `
			<p>Please use the following credentials to login to 
			    <a href="${webUrl}">${webUrl}</a>.
			</p>
			<p>
				<b>User Name:  ${username} </b>
			</p>
			<p>
				<b>Password: ${password} </b>
			</p>`;
};

module.exports = templates;
