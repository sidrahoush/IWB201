function toggleDetails(id) {
    $("#" + id).fadeToggle();
}

function showForm() {
    $("#orderForm").slideDown();
}

function validateForm() {
    const name = document.getElementById("name").value.trim();
    const bank = document.getElementById("bank").value.trim();
    const date = document.getElementById("date").value.trim();
    const phone = document.getElementById("phone").value.trim();

    const nameRegex = /^[A-Za-z]+\s+[A-Za-z]+$/;
    const bankRegex = /^\d{6}$/;
    const dateRegex = /^\d{2}-\d{2}-\d{4}$/;
    const phoneRegex = /^(09[3-6]|09[8-9])\d{7}$/;

    if (!bankRegex.test(bank)) {
        alert("Bank account number must be exactly 6 digits.");
        return false;
    }
    if (name && !nameRegex.test(name)) {
        alert("Full name must be in English with first and last name separated by a single space.");
        return false;
    }
    if (date && !dateRegex.test(date)) {
        alert("Date must be in the format dd-mm-yyyy.");
        return false;
    }
    if (phone && !phoneRegex.test(phone)) {
        alert("Invalid mobile number. It must start with 093-096 or 098-099 and be 10 digits long.");
        return false;
    }

    calculateTotal();
    return false;
}

function calculateTotal() {
    const prices = document.querySelectorAll(".price");
    const checks = document.querySelectorAll(".check");
    let total = 0;
    for (let i = 0; i < checks.length; i++) {
        if (checks[i].checked) {
            total += parseInt(prices[i].innerText, 10);
        }
    }
    const tax = Math.round(total * 0.1);
    const finalAmount = total + tax;
    alert(
        "Total Amount: " + total + " SYP\n" +
        "Tax (10%): " + tax + " SYP\n" +
        "Final Amount: " + finalAmount + " SYP"
    );
}