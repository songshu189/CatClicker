$('#cat').on('click', function() {
    var num = $('#clicks').text();
    $('#clicks').text(parseInt(num)+1);
});