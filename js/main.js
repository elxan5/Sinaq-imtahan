$(document).ready(function() {
    $(".tlt").textillate({ in : {
            effect: 'rollIn',
            delay: 25
        },
        out: {
            effect: 'rollOut',
            delay: 1000,
            sync: true
        },
        loop: true
    });
})
