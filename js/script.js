var data = [
        {name: 'adora',
         imgurl: 'images/adora.jpg',
         count: 2,
         nicknames: ['Adora','Dora Cat']},
        {name: 'beauty',
         imgurl: 'images/beauty.jpg',
         count: 1,
         nicknames: ['Betty', 'Betty Cat']},
        {name: 'calico',
         imgurl: 'images/calico.jpg',
         count: 3,
         nicknames: ['Kelly', 'Lico Cat']},
        {name: 'chewie',
         imgurl: 'images/chewie.jpg',
         count: 5,
         nicknames: ['Chevy', 'Chevy Cat']},
        {name: 'kate',
         imgurl: 'images/kate.jpg',
         count: 2,
         nicknames: ['Kate', 'Katty', 'Katty Cat']},
        {name: 'kitten',
         imgurl: 'images/kitten.jpg',
         count: 6,
         nicknames: ['Kity', 'Kitty Cat']},
        {name: 'poplinre',
         imgurl: 'images/poplinre.jpg',
         count: 1,
         nicknames: ['Pop', 'Lina']},
        {name: 'santaria',
         imgurl: 'images/santaria.jpg',
         count: 3,
         nicknames: ['Santa', 'Sarry']}
];

var Cat = function(data) {
    var self = this;
    this.clickCount = data.count;
    this.name = data.name;
    this.imgurl = data.imgurl;
    //this.imgAttribution = ko.observable(data.imgAttribution);

    this.title = function(){
        var clicks = self.clickCount;
        if (clicks < 10)
            return 'Newborn';
        else if(clicks<20)
            return 'Infant';
        else if(clicks<50)
            return 'Child';
        else if(clicks<100)
            return 'Teen';
        else if(clicks<200)
            return 'Adult';
        return 'Ninja';
    };

    this.incrementCounter = function() {
        self.clickCount += 1;
    };

    this.nicknames = data.nicknames;
};

var app = angular.module('myApp', []);

app.controller('catCtrl', function($scope) {

    $scope.catList = [];

    for(var i=0; i<data.length; i++) {
        //var cat = ko.observable();
        $scope.catList.push(new Cat(data[i]));
    }
    $scope.currentCat = $scope.catList[0];
    $scope.setCat = function(cat) {
        $scope.currentCat = cat;
        get();
    };

    function get() {
        $scope.currentName = $scope.currentCat.name;
        $scope.currentUrl = $scope.currentCat.imgurl;
        $scope.currentCount = $scope.currentCat.clickCount;
    }
    function set() {
        $scope.currentCat.name = $scope.currentName;
        $scope.currentCat.imgurl = $scope.currentUrl;
        $scope.currentCat.clickCount = $scope.currentCount;
    }

    $scope.incrementCounter = function() {
        $scope.currentCat.incrementCounter();
        $scope.currentCount = $scope.currentCat.clickCount;
    };

    $scope.show = false;
    $scope.showPanel = function() {
        $scope.show = true;
        get();
    };

    $scope.hide = function() {
        $scope.show = false;
    };

    $scope.save = function() {
        $scope.show = false;
        set();
    };
});
