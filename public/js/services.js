"use strict;"

angular.module('inventoryApp')
.service('Item', function($http){


	this.getAll = () => {
		return $http({
			method:'GET',
			url: '/items'
		})
		.then( res => {
			if (res.data.length)
				return res.data;
		})
		.catch(err => {
			console.log('err: ', err);
		});
	}

	this.addOne = (item) => {
		return $http({
			method:'POST',
			url: '/items',
			data: item
		})
		.then( res => {
			if (res.data){
				return res.data;
			}
		})
		.catch(err => {console.log('err: ', err)});
	}

	this.removeOne = (item) => {
		return $http({
			method:'DELETE',
			url: '/items/' + item.id
		});
	}

	this.edit = (item) => {
		return $http({
			method:'PUT',
			url: '/items/' + item.id,
			data: item
		})
		.then( res => {
			if (res.data){
				return res.data;
			}
		})
		.catch(err => {console.log('err: ', err)});
	}



});




