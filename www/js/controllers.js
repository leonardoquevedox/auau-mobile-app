angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
	$scope.listeners =  [
		{
			profilePic: 'img/ionic.png',
			name: 'Jane Osbourne',
			listeningNow: 'The Strokes - You Only Live Once'	
		},
		{
			profilePic: 'img/ionic.png',
			name: 'Mellany Braga',
			listeningNow: 'The Districts - Rocking Chair'	
		},
		{
			profilePic: 'img/ionic.png',
			name: 'Julia Bratzfield',
			listeningNow: 'MGMT - Time To Pretend'	
		},
		{
			profilePic: 'img/ionic.png',
			name: 'Jack Bellington',
			listeningNow: 'Queen - Love Of My Life'	
		},
		{
			profilePic: 'img/ionic.png',
			name: 'Joe Whatshisname',
			listeningNow: 'John Cocker - Loving Hands'	
		},
		{
			profilePic: 'img/ionic.png',
			name: 'Monica Johnson',
			listeningNow: 'Johny Cash - Hurt'	
		},
		{
			profilePic: 'img/ionic.png',
			name: 'John Berminger',
			listeningNow: 'Arctic Monkeys - Dancing Shoes'	
		},
	]
})

.controller('ChatsCtrl', function($scope, Chats) {
	$scope.chats = Chats.all();
	$scope.remove = function(chat) {
		Chats.remove(chat);
	}
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
	$scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
	$scope.settings = {
		enableFriends: true
	};
});
