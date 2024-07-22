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

	// Fetch the form we want to apply custom Bootstrap validation styles to
	const form = document.querySelectorAll(".needs-validation");

	form.addEventListener("submit", (event) => {
		// Fetch all the elements we want to apply validation to
		const validateElements = form.querySelectorAll(".validate-this");

		// Reset custom validation state
		form.classList.remove("was-validated");

		let allValid = true;

		// Loop over each validate element
		validateElements.forEach((element) => {
			if (!element.checkValidity()) {
				allValid = false;
				element.classList.add("is-invalid");
			} else {
				element.classList.remove("is-invalid");
				element.classList.add("is-valid");
			}
		});

		if (!allValid) {
			event.preventDefault();
			event.stopPropagation();
		} else {
			event.preventDefault(); // Prevent default submission

			// If all specified elements are valid, send data using fetch or any AJAX method
			const formData = new FormData(form);
			fetch('your-server-endpoint', {
				method: 'POST',
				body: formData
			})
			.then(response => response.json())
			.then(data => {
				console.log('Success:', data);
			})
			.catch((error) => {
				console.error('Error:', error);
			});

			// Optionally add "was-validated" class to the form to show validation styles
			form.classList.add("was-validated");
		}
	}, false);
})();