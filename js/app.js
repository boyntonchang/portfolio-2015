'use strict';

angular.module('app', ['ngAnimate'])
    .controller('slideCtrl', slideCtrl)
    .animation('.slide-animation', slideAnimation)


    .controller('designCtrl', designCtrl);
    
function slideCtrl($http) {
    var vm = this;

    $http.get('../works.json').success(function (response) {
        vm.slides = response.UIUX;
        console.log(vm.slides);
    });



    vm.currentIndex = 0;

    vm.setCurrentSlideIndex = function (index) {
        vm.currentIndex = index;
    };

    vm.isCurrentSlideIndex = function (index) {
        return vm.currentIndex === index;
    };

    vm.prevSlide = function () {
        vm.currentIndex = (vm.currentIndex < vm.slides.length - 1) ? ++vm.currentIndex : 0;
    };

    vm.nextSlide = function () {
        vm.currentIndex = (vm.currentIndex > 0) ? --vm.currentIndex: vm.slides.length - 1;
    };
};


function designCtrl($http) {
    var dm = this;

    $http.get('../works.json').success(function (response) {
     
        dm.slidesDesign = response.DESIGN;
        console.log(dm.slidesDesign);
    });



    dm.currentIndex = 0;

    dm.setCurrentSlideIndex = function (index) {
        dm.currentIndex = index;
    };

    dm.isCurrentSlideIndex = function (index) {
        return dm.currentIndex === index;
    };

    dm.prevSlide = function () {
        dm.currentIndex = (dm.currentIndex < dm.slidesDesign.length - 1) ? ++dm.currentIndex : 0;
    };

    dm.nextSlide = function () {
        dm.currentIndex = (dm.currentIndex > 0) ? --dm.currentIndex: dm.slidesDesign.length - 1;
    };
};

function slideAnimation() {
    return {
        addClass: function (element, className, done) {
            if (className == 'ng-hide') {
                TweenMax.to(element, 0.5, {
                    left: -element.parent().width(),
                    onComplete: done
                });
            } else {
                done();
            }
        },
        removeClass: function () {
            if (className == 'ng-hide') {
                element.removeClass('ng-hide');

                TweenMax.set(element, {
                    left: element.parent().width()
                });
                TweenMax.to(element, 0.5, {
                    left: 0,
                    onComplete: done
                });
            } else {
                done();
            }
        }
    }
};