function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    var alt = dots[slideIndex - 1].alt;
    if (alt == "Pesticides") {
        alt = "Pesticides (e.g. fungicides, herbicides, and insecticides)"
    } else if (alt == "Detergent Bar") {
        alt = "Detergent Bar (e.g. Detergent powder, laundry detergent or dish detergent)"
    } else if (alt == "Oil") {
        alt = "Oil (Including canola oil, corn oil, cottonseed oil, olive oil, safflower oil, soybean oil, and sunflower oil.)"
    } else if (alt == "Chlorine") {
        alt = "Chlorine is used to manufacture household chlorine bleach, which whitens and disinfects clothes and disinfects kitchen and bathroom surfaces."
    }
    captionText.innerHTML = alt;
}