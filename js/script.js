let products = [
    {name: "Iced latte", category: "Cold Coffee", price: 990},
    {name: "Green matcha", category: "Matcha", price: 1090},
    {name: "Bubble Tea", category: "Bubble Tea", price: 1290}
];
let editIndex = -1;
let selectedCategory = "All";
let currentImage = 0;

function checkField(id, correct, message) {
    let input = document.getElementById(id);
    let feedback = document.getElementById(id + "Feedback");

    if (correct) {
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
        feedback.innerHTML = "Correct";
        feedback.className = "field-feedback valid";
    } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        feedback.innerHTML = message;
        feedback.className = "field-feedback invalid";
    }
}

function checkPassword() {
    let password = document.getElementById("regPassword").value;
    let strength = document.getElementById("passwordStrengthText");
    let bar = document.getElementById("passwordStrengthBar");

    if (password.length === 0) {
        strength.innerHTML = "Enter a password";
        bar.style.width = "0%";
    } else if (password.length < 6) {
        strength.innerHTML = "Weak password";
        bar.style.width = "33%";
        bar.style.backgroundColor = "red";
    } else if (password.length < 10 || !/[0-9]/.test(password)) {
        strength.innerHTML = "Medium password";
        bar.style.width = "66%";
        bar.style.backgroundColor = "orange";
    } else {
        strength.innerHTML = "Strong password";
        bar.style.width = "100%";
        bar.style.backgroundColor = "green";
    }
}

function checkRegistration() {
    let name = document.getElementById("regName").value;
    let email = document.getElementById("regEmail").value;
    let password = document.getElementById("regPassword").value;
    let confirmPassword = document.getElementById("regConfirm").value;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    checkField("regName", name.trim() !== "", "Enter your name");
    checkField("regEmail", emailPattern.test(email), "Enter a valid email");
    checkField("regPassword", password.length >= 6, "Enter at least 6 characters");
    checkField("regConfirm", confirmPassword !== "" && password === confirmPassword, "Passwords do not match");

    if (name.trim() === "" || !emailPattern.test(email) || password.length < 6 || password !== confirmPassword) {
        document.getElementById("registrationFeedback").innerHTML = "Please check the fields";
        return false;
    }

    document.getElementById("registrationFeedback").innerHTML = "Registration form is valid";
    return true;
}

function checkContact() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.trim() === "" || !emailPattern.test(email) || message.trim() === "") {
        document.getElementById("contactFeedback").innerHTML = "Please fill in all fields correctly";
        return false;
    }

    document.getElementById("contactFeedback").innerHTML = "Message is valid";
    return true;
}

function filterMenu() {
    let search = $("#menuSearch").val().toLowerCase();
    let count = 0;

    $(".category-title").each(function() {
        let title = $(this);
        let category = title.text().trim();
        let list = title.next(".menu-list");
        let found = 0;

        list.find(".menu-row").each(function() {
            let name = $(this).text().toLowerCase();

            if ((selectedCategory === "All" || selectedCategory === category) && (name.indexOf(search) !== -1 || category.toLowerCase().indexOf(search) !== -1)) {
                $(this).show();
                found++;
                count++;
            } else {
                $(this).hide();
            }
        });

        if (found > 0) {
            title.show();
            list.show();
        } else {
            title.hide();
            list.hide();
        }
    });

    $("#searchCount").text(count + " drinks found");

    if (count === 0) {
        $("#noMenuResults").show();
    } else {
        $("#noMenuResults").hide();
    }
}

function showProducts() {
    let table = document.getElementById("inventoryRows");
    table.innerHTML = "";

    for (let i = 0; i < products.length; i++) {
        let row = document.createElement("tr");
        let name = document.createElement("td");
        let category = document.createElement("td");
        let price = document.createElement("td");
        let actions = document.createElement("td");
        let editButton = document.createElement("button");
        let deleteButton = document.createElement("button");

        name.textContent = products[i].name;
        category.textContent = products[i].category;
        price.textContent = products[i].price + " ₸";
        editButton.innerHTML = "Edit";
        deleteButton.innerHTML = "Delete";
        editButton.className = "btn btn-sm btn-outline-primary me-2";
        deleteButton.className = "btn btn-sm btn-outline-danger";

        editButton.onclick = function() {
            editProduct(i);
        };
        deleteButton.onclick = function() {
            deleteProduct(i);
        };

        actions.appendChild(editButton);
        actions.appendChild(deleteButton);
        row.appendChild(name);
        row.appendChild(category);
        row.appendChild(price);
        row.appendChild(actions);
        table.appendChild(row);
    }

    document.getElementById("inventoryCount").innerHTML = products.length + " products";
}

function saveProduct() {
    let name = document.getElementById("itemName").value;
    let category = document.getElementById("itemCategory").value;
    let price = Number(document.getElementById("itemPrice").value);

    if (name.trim() === "" || category === "" || price <= 0) {
        document.getElementById("inventoryFeedback").innerHTML = "Enter name, category and price";
        return;
    }

    let product = {name: name, category: category, price: price};

    if (editIndex === -1) {
        products.push(product);
        document.getElementById("inventoryFeedback").innerHTML = "Drink added";
    } else {
        products[editIndex] = product;
        document.getElementById("inventoryFeedback").innerHTML = "Drink updated";
    }

    showProducts();
    clearProductForm();
}

function editProduct(index) {
    editIndex = index;
    document.getElementById("itemName").value = products[index].name;
    document.getElementById("itemCategory").value = products[index].category;
    document.getElementById("itemPrice").value = products[index].price;
    document.getElementById("saveItem").innerHTML = "Save changes";
    $("#cancelEdit").show();
}

function deleteProduct(index) {
    if (confirm("Delete this drink?")) {
        products.splice(index, 1);
        showProducts();
        clearProductForm();
    }
}

function clearProductForm() {
    document.getElementById("inventoryForm").reset();
    editIndex = -1;
    document.getElementById("saveItem").innerHTML = "Add drink";
    $("#cancelEdit").hide();
}

function showImage() {
    let images = $("#interactiveGallery figure");
    let picture = images.eq(currentImage);

    $("#lightboxImage").attr("src", picture.find("img").attr("src"));
    $("#lightboxImage").attr("alt", picture.find("img").attr("alt"));
    $("#lightboxCaption").text(picture.find("figcaption").text());
    $("#lightboxCounter").text((currentImage + 1) + " / " + images.length);
}

function nextImage() {
    let count = $("#interactiveGallery figure").length;
    currentImage++;
    if (currentImage >= count) {
        currentImage = 0;
    }
    showImage();
}

function previousImage() {
    let count = $("#interactiveGallery figure").length;
    currentImage--;
    if (currentImage < 0) {
        currentImage = count - 1;
    }
    showImage();
}

$(document).ready(function() {
    if ($("#registerForm").length) {
        $("#regPassword").on("input", checkPassword);
        $("#registerForm input").on("input", checkRegistration);
        $("#registerForm").submit(function(event) {
            event.preventDefault();
            checkRegistration();
        });
    }

    if ($("#contactForm").length) {
        $("#contactForm").submit(function(event) {
            event.preventDefault();
            checkContact();
        });
    }

    if ($("#menuSearch").length) {
        $("#categoryFilters").append('<button type="button" class="filter-button active">All</button>');

        $(".category-title").each(function() {
            let category = $(this).text().trim();
            $("#categoryFilters").append('<button type="button" class="filter-button">' + category + '</button>');
            $("#itemCategory").append('<option>' + category + '</option>');
        });

        $("#menuSearch").on("input", filterMenu);
        $("#categoryFilters button").click(function() {
            selectedCategory = $(this).text();
            $("#categoryFilters button").removeClass("active");
            $(this).addClass("active");
            filterMenu();
        });

        $("#inventoryForm").submit(function(event) {
            event.preventDefault();
            saveProduct();
        });
        $("#cancelEdit").click(clearProductForm);
        $("#cancelEdit").hide();
        filterMenu();
        showProducts();
    }

    if ($("#interactiveGallery").length) {
        $("#interactiveGallery figure").click(function() {
            currentImage = $("#interactiveGallery figure").index(this);
            showImage();
            $("#galleryLightbox").removeAttr("hidden");
            $("#galleryLightbox").attr("aria-hidden", "false");
            $("#galleryLightbox").fadeIn(300);
        });
        $("#lightboxClose").click(function() {
            $("#galleryLightbox").fadeOut(300);
            $("#galleryLightbox").attr("aria-hidden", "true");
        });
        $("#lightboxNext").click(nextImage);
        $("#lightboxPrev").click(previousImage);
    }
});
