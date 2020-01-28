function purchase() {
    window.location.href = "./order.html";
}

function order() {
    address = document.getElementById("address").value;
    postcode = document.getElementById("postcode").value;
    city = document.getElementById("city").value;

    full_address = address + ", " + postcode + " in " + city;

    alert("We will ship to " + full_address + "!");
}
