$(document).ready(function () {
    $('#loadData').click(function () {
        $.ajax({
            url: 'data.json', // URL to fetch JSON data
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                // Parse and display JSON data
                var content = '<ul>';
                $.each(data, function (key, value) {
                    content += '<li>' + key + ': ' + value + '</li>';
                });
                content += '</ul>';
                $('#content').html(content);
            },
            error: function (xhr, status, error) {
                $('#content').html('<p>Error loading data: ' + error + '</p>');
            }
        });
    });
});
