  (function(){
            emailjs.init("YOUR_USER_ID");
        })();

        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();
            emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
                .then(function() {
                    alert('Your message has been sent!');
                }, function(error) {
                    alert('Failed to send the message. Please try again.');
                });
        });
    
