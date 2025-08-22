// SHOW MENU
// // SWIPER CATEGORIES
// var swiperCategories = new Swiper(".categories__container", {
//     spaceBetween: 24,
//     loop: true,
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },

//     breakpoints: {
//         640: {
//           slidesPerView: 2,
//           spaceBetween: 20,
//         },
//         768: {
//           slidesPerView: 4,
//           spaceBetween: 40,
//         },
//         1400: {
//           slidesPerView: 6,
//           spaceBetween: 24,
//         },
//       },
//   });

 
      function showMessage() {
            const email = document.getElementsByName('email').value.trim();
                
            
            const contactForm = document.querySelector('.email');  
            contactForm.addEventListener('submit',function(event){
                event.preventDefault(); //stop the default form submission
                const form = event.target;
                const formData = new FormData(form); //Gathers all form data
                const formMessageDiv = document.getElementById('formMessage');
                formMessageDiv.textContent = 'Sending...';

                fetch('send_email.php',{
                    method: 'POST',
                    body: formData
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.text();
                })

                .then(data => {
                    formMessageDiv.textContent = 'Message sent successfully!';
                    formMessageDiv.style.color ='green';
                    form.reset();
                    console.log(data);
                    
                })

                .catch(error =>{
                    formMessageDiv.textContent = 'Error sending message. Please try again.';
                    formMessageDiv.style.color = 'red';
                    console.error('Fetch error:',error); 
                });
                
                

            });
                if (!email.includes("@") || !email.includes(".")){
                        alert('Please enter a valid email address.');
                        return false;
                    }
                    alert('Thank you for your order.')
                    return true;

                       }

    