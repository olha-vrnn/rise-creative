$(document).ready(function(){

    $('.ready-to-use-slider').slick({
        adaptiveHeight: true,
        slidesToShow: 2,
        speed: 1000,
        infinite: false,
        responsive: [
            {
            breakpoint: 670,
            settings: {
                arrows: false,
            }
            },
            {
            breakpoint: 620,
            settings: {
                slidesToShow: 1,
                arrows: false,
            }
            },
            {
            breakpoint: 420,
            settings: {
                slidesToShow: 1,
                arrows: false,
                infinite: true,
            }
            },
        ]
    });

    $('.testimonial-slider').slick({
        centerMode: true,
        slidesToShow: 3,
        arrows: false,
        speed: 1000,
        dots: true,
        variableWidth:true,
    });
})

document.getElementById('burger-menu-btn-open').addEventListener('click', () => {
    document.querySelector('.burger-menu-list').style.display = 'block';
    document.getElementById('burger-menu-btn-open').style.display = 'none';
    document.getElementById('burger-menu-btn-close').style.display = 'flex';
});

document.getElementById('burger-menu-btn-close').addEventListener('click', () => {
    document.querySelector('.burger-menu-list').style.display = 'none';
    document.getElementById('burger-menu-btn-open').style.display = 'flex';
    document.getElementById('burger-menu-btn-close').style.display = 'none';
});

