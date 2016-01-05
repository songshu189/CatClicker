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
    this.clickCount = ko.observable(data.count);
    this.name = ko.observable(data.name);
    this.imgurl = ko.observable(data.imgurl);
    //this.imgAttribution = ko.observable(data.imgAttribution);

    this.title = ko.computed(function(){
        var clicks = this.clickCount();
        if (clicks < 10)
            return 'Newborn';
        else if(clicks<20)
            return 'Infant';
        else if(clicks<50)
            return 'Child';
        else if(clicks<100)
            return 'Teen';
        else if(clicks<200)
            return Adult;
        return 'Ninja';
    }, this);

    this.nicknames = ko.observableArray(data.nicknames);
};

var ViewModel = function() {
    var self = this;
    
    this.catList = ko.observableArray([]);

    for(var i=0; i<data.length; i++) {
        //var cat = ko.observable();
        this.catList().push(new Cat(data[i]));
    }

    this.currentCat = ko.observable(this.catList()[0]);

    this.setCurrent = function(data) {
        //console.log(this.currentCat);
        this.currentCat(data);

        //console.log(data);
    }
    this.incrementCounter = function() {
        this.currentCat().clickCount(this.currentCat().clickCount() + 1);
    };

    this.show = ko.observable(false);
    this.showPanel = function() {
        self.show(true);
    };
    
    this.hide = function() {
        self.show(false);
    };
    
    this.save = function() {
        self.show(false);
    }
};

ko.applyBindings(new ViewModel());