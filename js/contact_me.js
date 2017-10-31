var $contactForm = $('#contactForm');
$contactForm.submit(function(e) {
    e.preventDefault();
    $.ajax({
        url: '//formspree.io/olearyconor17@gmail.com',
        method: 'POST',
        data: $(this).serialize(),
        dataType: 'json',
                success: function() {
          // Success message
          $('#success').html("<div class='alert alert-success'>");
          $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $('#success > .alert-success')
            .append("<strong>Your message has been sent. </strong>");
          $('#success > .alert-success')
            .append('</div>');
          //clear all fields
          $('#contactForm').trigger("reset");
        },
        error: function() {
          // Fail message
            $('#success').html("<div class='alert alert-success'>");
            $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                .append("</button>");
            $('#success > .alert-success')
                .append("<strong>Error. </strong>");
            $('#success > .alert-success')
                .append('</div>');
            //clear all fields
            $('#contactForm').trigger("reset");
        },
    });
});