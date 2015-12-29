$(function() {
    var data = [
        {name:'poplinre', count:2},
        {name:'chewie', count: 3},
        {name:'adora', count: 5},
        {name:'beauty', count: 3},
        {name:'calico', count: 6}];
        
    var octopus = {
        currItem: 0,
        init: function() {
            view.init();
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
        }
    };

    var view = {
        init: function() {
            var $ulist = $('#cat-list');
            $.each(octopus.getAll(), function(i, cat) {
                var $li = $('<li />', { id: i});
                $li.append('<h3>' + cat.name + '</h3>');
                $ulist.append($li);
            });

            $ulist.on('click', 'li', function( event ) {
                octopus.set($( this ).attr('id'));
                view.render();
            });
            
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
                view.render();
            });
        },

        render: function() {
            var cat = octopus.get();
            this.catName.html(cat.name);
            this.catClick.html(cat.count);
            this.catImg.attr('src',  'images/' + cat.name + '.jpg');
        }
    };

    octopus.init();
});