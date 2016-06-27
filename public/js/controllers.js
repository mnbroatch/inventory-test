"use strict;"


var app = angular.module('inventoryApp');

app.controller('mainController', function($scope,$http,Item) {

	$scope.items = [];
	$scope.newItem = {};
	$scope.editedItem = {};
	$scope.newItem.room = "bedroom";

	$scope.$watch('items', function(newItems){

		$scope.totalBathroomValue = newItems.reduce( (a,b) => {
			if (b.room == 'bathroom')
				return a + b.value;
			else return a;
		},0);

		$scope.totalBedroomValue = newItems.reduce( (a,b) => {
			if (b.room == 'bedroom')
				return a + b.value;
			else return a;
		},0);

		$scope.totalDungeonValue = newItems.reduce( (a,b) => {
			if (b.room == 'dungeon')
				return a + b.value;
			else return a;
		},0);

		$scope.totalValue = newItems.reduce( (a,b) => {
			return a + b.value;
		},0);
	}, true);


	Item.getAll()
	.then( function(items){
		if(items){
			items.forEach( item => {
				$scope.items.push(item);
			});
		}
	})
	.catch( err => {
		console.log(err);
	});

	$scope.addItem = function(item){
		console.log("item:",item);
		Item.addOne(item)
		.then( function(item){
			$scope.items.push(item);
		})
		.catch( err => {
			console.log(err);
		});
	}

	$scope.removeItem = function(index){
		Item.removeOne()
		.then( function(){
			$scope.items.splice(index,1);
		})
		.catch( err => {
			console.log(err);
		});
	}

	$scope.editItem = function(index){
		editedItem.id = $scope.items[index].id;
		//  would bind ng model of edit box to editedItem.value and .room and .name if i had time to implement those controls
		Item.edit(newItem)
		.then( function(){
			$scope.items[index];
		})
		.catch( err => {
			console.log(err);
		});
	}

});



