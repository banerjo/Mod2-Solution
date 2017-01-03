(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListService', ShoppingListService);

ToBuyController.$inject = ['ShoppingListService'];
function ToBuyController(ShoppingListService) {

  var itemAdder = this;

  itemAdder.items = ShoppingListService.getItems();

   itemAdder.addItem = function (itemIndex) {
      ShoppingListService.addItem(itemIndex);

     itemAdder.length = ShoppingListService.getLength();

     if (itemAdder.length==0){
       itemAdder.empty = 'true';

     }
  }
}

AlreadyBoughtController.$inject = ['ShoppingListService'];
function AlreadyBoughtController(ShoppingListService) {
  var showList = this;

  showList.items = ShoppingListService.getItems1();

  showList.removeItem = function (itemIndex) {

    ShoppingListService.removeItem(itemIndex);
  };

}

function ShoppingListService() {
  var service = this;

  // List of shopping items
  var items = [
    {name: 'temp', quantity: 10},
    {name: 'bisc', quantity: 20},
    {name: 'sabon', quantity: 100},
    {name: 'fruits', quantity: 50},
    {name: 'budhi', quantity: 1000}

  ];

  var newitems =[

];




  service.addItem = function (itemIndex) {

    var item = {
      name: items[itemIndex].name,
      quantity: items[itemIndex].quantity
    };

    newitems.push(item);

console.log('array 2', newitems.length);
  items.splice(itemIndex,1);
console.log('array 1', items.length);

  };

  service.removeItem = function (itemIdex) {
    items.splice(itemIdex, 1);
  };

  service.getItems = function () {
    return items;
  };

  service.getItems1 = function () {
    return newitems;
  };


  service.getLength = function () {

    return items.length;


  };
  service.getLen = function () {

    return newitems.length;

  };

}

})();
