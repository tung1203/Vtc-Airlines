//select from and to
document.querySelectorAll('.box-from-to .tab__title li a').forEach((value, key) => {
    value.addEventListener('click', (e) => {
        e.preventDefault();
        let removeE = value.parentNode.parentNode.getElementsByClassName('list-trip');
        for (let i = 0; i < removeE.length; i++) {
            removeE[i].classList.remove('active');
        }
        document.getElementsByClassName("list-trip")[key].classList.add('active');
        var archor = e.target.getAttribute("href");
        archor = archor.substr(1);
        var tabpane = document.getElementById(archor);
        let idParent = value.parentNode.parentNode.parentNode.id;
        let removeA = document.querySelectorAll('#' + idParent + ' .list-tab');
        for (let i = 0; i < removeA.length; i++) {
            removeA[i].classList.remove('active');
        }

        // debugger
        tabpane.classList.add('active');
    })
});
function removeActive(className) {
    let removeE = document.getElementsByClassName(className);
    for (let i = 0; i < removeE.length; i++) {
        removeE[i].classList.remove('active');
    }
}

//click to from
var ipFrom = document.getElementById('js-ipFrom');
var boxFrom = document.getElementById('js-box-from');

var ipTo = document.getElementById('js-ipTo');
var boxTo = document.getElementById('js-box-to');

var locationName = document.getElementsByClassName('locationName');

[ipFrom, boxFrom].forEach((value) => {
    value.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        document.getElementById('js-box-from').classList.add('active');
        document.getElementById('js-box-to').classList.remove('active');
    });
});
document.addEventListener('click', () => {
    document.getElementById('js-box-from').classList.remove('active');
    document.getElementById('js-box-to').classList.remove('active');
});
document.querySelectorAll('#js-ipFrom + .box-from-to .locationName').forEach((value) => {
    value.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        ipFrom.value = value.innerHTML;
        document.getElementById('js-box-from').classList.remove('active');

    })

});

[ipTo, boxTo].forEach((value) => {
    value.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        document.getElementById('js-box-to').classList.add('active');
        document.getElementById('js-box-from').classList.remove('active');
    });
});

document.querySelectorAll('#js-ipTo + .box-from-to .locationName').forEach((value) => {
    value.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        ipTo.value = value.innerHTML;
        document.getElementById('js-box-to').classList.remove('active');
    })
});

// $(document).click(function() {
//     document.getElementById('js-box-from').classList.remove('active');
// });
//
// $("#js-ipFrom, #js-box-from").click(function(event) {
//     document.getElementById('js-box-from').classList.add('active');
//     event.stopPropagation();
// });


$(document).ready(() => {
    $("#inputDateFrom").datepicker({ dateFormat: 'dd-mm-yy' }).val(new Date().toLocaleDateString('vi-VN', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
    }).split(' ').join('-'));

    $("#inputDateTo").datepicker({ dateFormat: 'dd-mm-yy' }).val(new Date().toLocaleDateString('vi-VN', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
    }).split(' ').join('-'));
});


