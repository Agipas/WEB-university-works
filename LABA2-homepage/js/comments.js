$(document).ready(function() {
    $('button').click(function() {
        var comment = $('.commentBox').val();
        $('<li>').text(comment).prependTo('.comments');
        $('button').attr('disabled', 'true');
        $('.counter').text('140');
        $('.commentBox').val('');
        var name = $('.Name').val();
        $('<strong><h1>').text(comment).prependTo('.comments');

        $('button').attr('disabled', 'true');
        $('.counter').text('140');
        $('.commentBox').val('');
        $('.Name').val('');
        var Date = $('.Date').val();
        $('<strong><h1>').text(comment).prependTo('.comments');

        $('button').attr('disabled', 'true');
        $('.counter').text('140');
        $('.commentBox').val('');
        $('.Date').val('');

    });

    $('.commentBox').keyup(function() {
        var commentLength = $(this).val().length;
        var charLeft = 140 - commentLength;
        $('.counter').text(charLeft);

        if (commentLength == 0) {
            $('button').attr('disabled', 'true');
        } else if (commentLength > 140) {
            $('button').attr('disabled', 'true');
        } else {
            $('button').removeAttr('disabled', 'true');
        }
    });

    $('button').attr('disabled', 'true');

});