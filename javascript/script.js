// Countdown Timer
var timer;
var compareDate = new Date();
compareDate.setDate(compareDate.getDate() + 7);

timer = setInterval(function () {
    timeBetweenDates(compareDate);
}, 1000);

function timeBetweenDates(toDate) {
    var dateEntered = toDate;
    var now = new Date();
    var difference = dateEntered.getTime() - now.getTime();

    if (difference <= 0) {
        clearInterval(timer);
    } else {

        var seconds = Math.floor(difference / 1000);
        var minutes = Math.floor(seconds / 60);
        var hours = Math.floor(minutes / 60);
        var days = Math.floor(hours / 24);

        hours %= 24;
        minutes %= 60;
        seconds %= 60;

        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;
    }
}


// hide show div
var div = document.getElementById('cart');
var display = 1;

function hideShowdiv() {
    if (display == 1) {
        div.style.display = 'block';
        display = 0;
    }
    else {
        div.style.display = 'none';
        display = 1;
    }

    // hide cart on scroll
    window.onscroll = () => {
        div.style.display = 'none';
    }

}

//  contact form validation
function validateForm() {
    var fname = document.forms["contactForm"]["firstname"].value;
    var lname = document.forms["contactForm"]["lastname"].value;
    var email = document.forms["contactForm"]["email"].value;
    var message = document.forms["contactForm"]["message"].value;


    if (fname == "" || lname == "" || message == "" || email == "") {
        alert("Empty field found. Please fill the form.")
    } else {
        alert("Thank You! Your feedback is much appreciated.")
    }
}


 // Add to Cart button alert dialog
 function cartAlert() {
        alert("Product successfully added to your shopping cart.");
}

// Subscription alert dialog
function subsAlert() {
    var Subscribe = document.forms["subsForm"]["Subscribe"].value;

            if (Subscribe == "") {
                alert("Empty field found. Please enter your email address.")
            } else {
                alert("Thank you for subscribing.");
            }
}


 //auto hide nav-bar
        /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function () {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("scroll-behaviour").style.top = "0";
            } else {
                document.getElementById("scroll-behaviour").style.top = "-80px";
            }
            prevScrollpos = currentScrollPos;
        }

