// // Example starter JavaScript for disabling form submissions if there are invalid fields
// (() => {
// 	"use strict";

// 	// Fetch all the forms we want to apply custom Bootstrap validation styles to
// 	const forms = document.querySelectorAll(".needs-validation");

// 	// Loop over them and prevent submission
// 	Array.from(forms).forEach((form) => {
// 		form.addEventListener(
// 			"submit",
// 			(event) => {
// 				if (!form.checkValidity()) {
// 					event.preventDefault();
// 					event.stopPropagation();
// 				} else {
// 					event.preventDefault(); // Prevent default submission

// 					// If form is valid, send data using fetch or any AJAX method
// 					const formData = new FormData(form);
// 					fetch('your-server-endpoint', {
// 						method: 'POST',
// 						body: formData
// 					})
// 					.then(response => response.json())
// 					.then(data => {
// 						console.log('Success:', data);
// 					})
// 					.catch((error) => {
// 						console.error('Error:', error);
// 					});
// 				}

// 				form.classList.add("was-validated");
// 			},
// 			false
// 		);
// 	});
// })();

(() => {
	"use strict";

	const forms = document.querySelectorAll('.needs-validation');

	Array.from(forms).forEach((form) => {
		form.addEventListener('submit', (event) => {
			const validateElements = form.querySelectorAll('.validate-this');

			let allValid = true;

			validateElements.forEach((element) => {
				if (!element.checkValidity()) {
					allValid = false;
					element.classList.add('is-invalid');
				} else {
					element.classList.remove('is-invalid');
					element.classList.add('is-valid');
				}
			});

			if (!allValid) {
				event.preventDefault();
				event.stopPropagation();
			} else {
				event.preventDefault(); // Prevent default submission

				// 서버에 데이터 전송 (예: fetch API 사용)
				// const formData = new FormData(form);
				// fetch('your-server-endpoint', {
				// 	method: 'POST',
				// 	body: formData
				// })
				// .then(response => response.json())
				// .then(data => {
				// 	console.log('Success:', data);
				// })
				// .catch((error) => {
				// 	console.error('Error:', error);
				// });

				form.classList.add('was-validated');
			}
		}, false);
	});
})();