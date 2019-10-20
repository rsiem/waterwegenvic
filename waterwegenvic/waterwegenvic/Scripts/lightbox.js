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
        alt = "<i class='fas fa-info'></i> Excess pesticides can increase the presence of Nitrate and Phosphate in the waterways."
    } else if (alt == "Detergent Bar") {
        alt = "<i class='fas fa-info'></i> Detergent bar can increase the toxic levels in freshwater and result in algal bloom."
    } else if (alt == "Oil") {
        alt = "<i class='fas fa-info'></i> The mixture of oil in the waters increases the toxicity levels of water and affects marine biodiversity."
    } else if (alt == "Chlorine") {
        alt = "<i class='fas fa-info'></i> Excess chlorine in waterways can cause chlorine poisoning leading and have a negative effect on both human and marine life."
    } else if (alt == "Fertilizers") {
        alt = "<i class='fas fa-info'></i> Fertilizer runoff increases the Nitrogen and Phosphorus contents in the waterways."
    } else if (alt == "Paint") {
        alt = "<i class='fas fa-info'></i> The mixtures of paints in waterways increases turbidity which also affects marine life."
    } else if (alt == "Detergent") {
        alt = "<i class='fas fa-info'></i> Detergents increase the number of Phosphates in waterways resulting in the algal bloom. As a result, the toxic content increases and the oxygen level depletes."
    } else if (alt == "Soaps") {
        alt = "<i class='fas fa-info'></i> Soaps increases the number of Nitrates in the waterways resulting in high toxicity of the water."
    }
    captionText.innerHTML = alt;
}