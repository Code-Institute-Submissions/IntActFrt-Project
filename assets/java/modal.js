emailjs.init("user_AhXjjZf5ek9tU9Xzxz0OY");
	  function sendEmail(e) {
      e.preventDefault();
      name = document.getElementById('user').value;
      email = document.getElementById('email').value;
      message = document.getElementById('message').value;
      console.log(name, email, message);
      var templateParams = {
		to_name: name,
		from_name: 'Website name',
		message: message,
		to_email: email
  };
	emailjs.send("service_czabzhr","template_tpvx4ae", templateParams).then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
  
     
   $('#myModal').modal("show");

        
    }, function(error) {
      console.log('FAILED...', error);
    });
  }
  