$(function() {
    var data = [
        {name: 'adora', 
         imgurl: 'images/adora.jpg',
         count: 2},
        {name: 'beauty',
         imgurl: 'images/beauty.jpg',
         count: 1},
        {name: 'calico', 
         imgurl: 'images/calico.jpg',
         count: 3},
        {name: 'chewie', 
         imgurl: 'images/chewie.jpg',
         count: 5},
        {name: 'kate', 
         imgurl: 'images/kate.jpg',
         count: 2},
        {name: 'kitten', 
         imgurl: 'images/kitten.jpg',
         count: 6},
        {name: 'poplinre', 
         imgurl: 'images/poplinre.jpg',
         count: 1},
        {name: 'santaria', 
         imgurl: 'images/santaria.jpg',
         count: 3}
    ];
    
    var octopus = {
        currItem: 0,
        init: function() {
            listView.init();
            detailView.init();
            adminView.init();
        },
        get: function() {
            return data[this.currItem];
        },
        getAll: function() {
            return data;
        },
        set: function(curr) {
            this.currItem = curr;
        },
        click: function() {
            data[this.currItem].count += 1;
        },
        update: function(name, url, count) {
            var cat = this.get();
            cat.name = name;
            cat.imgurl = url;
            cat.count = parseInt(count);
        }
    };

    var listView = {
        init: function() {
            this.ulist = $('#cat-list');
            this.render();

            this.ulist.on('click', 'li', function( event ) {
                octopus.set($( this ).attr('id'));
                detailView.render();
            });
        },
        render: function() {
            this.ulist.html('');
            var _self = this;
            $.each(octopus.getAll(), function(i, cat) {
                var $li = $('<li />', { id: i});
                $li.append('<h3>' + cat.name + '</h3>');
                _self.ulist.append($li);
            });
        }
    };
    
    var detailView = {
        init: function() {
            var cat = octopus.get();

            $('#cat-detail').append('<h2 id="cat-name">'+ cat.name + '</h2>')
                .append('<img id="cat-img" src="images/' + cat.name + '.jpg" />')
                .append('<h2 id="cat-click" class="click">' + cat.count + '</h2>');
        
            this.catName = $('#cat-name');
            this.catClick = $('#cat-click');
            this.catImg = $('#cat-img');
            this.render();

            this.catImg.on('click', function() {
                octopus.click();
                detailView.render();
            });
        },

        render: function() {
            var cat = octopus.get();
            this.catName.html(cat.name);
            this.catClick.html(cat.count);
            this.catImg.attr('src',  cat.imgurl);
        }
    };
   
    var adminView = {
        init: function() {
            this.adminPanel = $('#admin-panel');
            this.catName = $('#cat_name');
            this.imgURL = $('#imgurl');
            this.catClicks = $('#cat_clicks');
            var _self = this;

            $('#admin-btn').on('click', function() {
                _self.adminPanel.show();
                adminView.render();
            });

            this.adminPanel.hide();

            $('#cancel-btn').on('click', function() {
                _self.adminPanel.hide();
            });

            $('#save-btn').on('click', function() {
                 octopus.update(_self.catName.val(), _self.imgURL.val(), _self.catClicks.val());
                 detailView.render();
                 listView.render();
                _self.adminPanel.hide();
            });
        },
        render: function() {
            var cat = octopus.get();
            this.catName.val(cat.name);
            this.imgURL.val(cat.imgurl);
            this.catClicks.val(cat.count);
        }
    }
   
    octopus.init();
});
