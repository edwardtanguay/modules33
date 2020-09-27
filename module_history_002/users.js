function usersWrapper() {
	var users = ['Jim', 'John', 'Joe'];

	function getUsers() {
		return users;
	}
	APP.getUsers = getUsers;
}

usersWrapper();