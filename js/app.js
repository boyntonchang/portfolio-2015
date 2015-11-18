'use strict';

angular.module('app', ['ngAnimate', 'ngTouch'])
 .controller('designCtrl', designCtrl)
.animation('.slide-animation', slideAnimation);


//
//function slideCtrl($http) {
// var vm = this;
//
// $http.get('../works.json').success(function (response) {
//  vm.slides = response.UIUX;
//  console.log(vm.slides);
// });
//
//};


function designCtrl($http) {
console.log('dm.slides');
 var dm = this;

 $http.get('../works.json').success(function (response) {

  dm.slidesDesign = response.DESIGN;
console.log(dm.slidesDesign);
 });



 dm.direction = 'left';
 dm.currentIndex = 0;

 dm.setCurrentSlideIndex = function (index) {
  dm.direction = (index > dm.currentIndex) ? 'left' : 'right';
  dm.currentIndex = index;
 };

 dm.isCurrentSlideIndex = function (index) {
  return dm.currentIndex === index;
 };

 dm.prevSlide = function () {
  dm.direction = 'left';
  dm.currentIndex = (dm.currentIndex < dm.slidesDesign.length - 1) ? ++dm.currentIndex : 0;
 };

 dm.nextSlide = function () {
  dm.direction = 'right';
  dm.currentIndex = (dm.currentIndex > 0) ? --dm.currentIndex : dm.slidesDesign.length - 1;
 };
}


function slideAnimation() {

 return {

  addClass: function (element, className, done) {
   var scope = element.scope();

   if (className == 'ng-hide') {
    var finishPoint = element.parent().width();
    if (scope.direction !== 'right') {
     finishPoint = -finishPoint;
    }


    TweenMax.to(element, 0.5, {
     left: finishPoint,
     onComplete: done
    });
   } else {
    done();
   }
  },
  removeClass: function (element, className, done) {
   var scope = element.scope();

   if (className == 'ng-hide') {
    element.removeClass('ng-hide');

    var startPoint = element.parent().width();
    if (scope.direction === 'right') {
     startPoint = -startPoint;
    }

    TweenMax.set(element, {
     left: startPoint
    });
    TweenMax.to(element, 0.5, {
     left: 0,
     onComplete: done
    });
   } else {
    done();
   }
  }
 };
};
//angular.module("CombineModule", ["designApp"]);