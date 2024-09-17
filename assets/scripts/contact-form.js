fetch('config.json')
    .then(response => response.json())
    .then(config => {
        emailjs.init(config.user_id);

        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();

            const form = event.target;

            emailjs.sendForm(config.service_id, config.template_id, form)
                .then((response) => {
                    alert('Message sent successfully!');
                    form.reset();
                    location.reload();
                })
                .catch((error) => {
                    alert('Failed to send the message. Please try again later.');
                    console.error('Error:', error);
                });
        });
    })
    .catch(error => {
        console.error('Error loading configuration:', error);
    });