$(function () {
    // NUMBER OF CHILD ELEMENTS
    var elements = $("section");
    for (var i = 0; i < elements.length; i++) {
        console.log("section " + elements[i].getAttribute("id") + " have DIVs: " + elements[i].getElementsByTagName("div").length);
    };

    // SMOOTH-SCROLL NAVIGATION
    $(".navbar-nav").click(function () {
        $('html, body').animate({
            scrollTop: $("id").offset()
        }, 800);
    });

    // HIDING IMAGE END CHANGING COLOR
    $(".works-item a").click(function () {
        $(this).parents('.works-item').find("img").toggleClass('invisible');
        $(this).toggleClass('text-danger');
    });

    // USER INPUT VERIFICATION
    $(".social-list a").click(function (e) {
        var toVisit = prompt("Please, enter secret number to visit a link.");
        var secretNumber = $(this).attr('data-checknum');
        if (toVisit !== secretNumber) {
            alert("Sorry, wrong secret number!");
            e.preventDefault();
        }
    });

    // COLLAPSE A PARAGRAPH BY CLICKING ON THE TITLE
    $(".about-item > h2").click(function () {
        $(this).siblings('p').slideToggle(200);

    });

    $(".about-item p a").click(function (e) {
        e.preventDefault()
        $(this).addClass('hide');
        $(this).siblings('span').slideToggle(200)
    })

    // FORM VALIDATION
    $(".contacts-form").submit(function () {
        var $formName = $(this);
        if ($formName.find("input[name=name]").val().length < 4) {
            alert("Error: name should be at least 4 letters long");
            return false;
        }
        if ($formName.find("input[name=email]").val().match('@mail.ru$')) {
            alert("Error: Sorry, mail.ru is still blocked in Ukraine");
            return false;
        }
        if ($formName.find("textarea[name=text]").val().length < 10) {
            alert("Error: message should be at least 10 letters long");
            return false;
        }
    });
});