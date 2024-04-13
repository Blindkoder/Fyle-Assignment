document.getElementById("openModalBtn").addEventListener("click", function(event) {
    var input = document.getElementById("dropbtn");
    var errorIcon = document.getElementById('errorIcon1');
    if (input.value) {
      calculateTaxMain();
    } else {
      errorIcon.style.display = 'inline';
      input.classList.add('error');
      event.preventDefault();
      errorIcon.classList.add("show");
   
    }
});

function calculateTaxMain() {
    var gross_income = 0;
    var extra_income = 0;
    var deductions = 0;
    gross_income = Number(document.getElementById('income').value);
    extra_income = Number(document.getElementById('ex-income').value);
    age = Number(document.getElementById('dropbtn').value);
    deductions = Number(document.getElementById('deductions').value);
    var tax = 0;
    var taxlable_income = (gross_income + extra_income - deductions);

    if (taxlable_income <= 800000) {
        tax = 0;
    } else if (age < 40) {
        tax = ((taxlable_income - 800000) * 0.3);
    } else if (age >= 40 && age < 60) {
        tax = ((taxlable_income - 800000) * 0.4);
    } else if (age >= 60) {
        tax = ((taxlable_income - 800000) * 0.1);
    }
    var net_income = taxlable_income - tax.toFixed(2);
   

    console.log(net_income);
    // Function to open the modal with dynamic content
 
    function openModalWithContent(content) {
        var modal = document.getElementById('myModal');
        var modalContent = document.getElementById('modalContent');
        modalContent.innerHTML = content; // Set the content inside the modal
        modal.style.display = "block"; // Display the modal
    }

    // Get the button that opens the modal
    var btn = document.getElementById("openModalBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal with content
  
        var content = `<h1>Your overall income will be</h1><h2>${net_income}</h2><h3>after tax deductions</h3>`;
        openModalWithContent(content);
    

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        var modal = document.getElementById('myModal');
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        var modal = document.getElementById('myModal');
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }




}


$(document).ready(function () {
    $('.input-container input').on('input', function () {
        var inputValue = $(this).val().trim();
        var errorIconContainer = $(this).siblings('.error-icon');

        // Your validation logic here
        if (/^\d+$/.test(inputValue)) {
            errorIconContainer.hide(); // Show error icon if input is empty
        } else {
            errorIconContainer.show(); // Hide error icon if input is not empty
        }
    });

    $('.help-icon').hover(function () {
        var tooltipText = $(this).attr('title');
        $(this).attr('title', ''); // Remove title attribute to prevent default browser tooltip
        $('<div class="tooltip"></div>').text(tooltipText).appendTo('body').fadeIn('slow');
    }, function () {
        $(this).attr('title', $(this).text()); // Restore title attribute
        $('.tooltip').remove();
        // });
    }).mousemove(function (e) {
        var mousex = e.pageX + 20; // Get the current mouse x position
        var mousey = e.pageY + 10; // Get the current mouse y position
        $('.tooltip').css({ top: mousey, left: mousex });
    });


});


document.addEventListener('DOMContentLoaded', function () {
    var infoIcon = document.getElementById('infoIcon');
    var tooltip = document.getElementById('tooltip');

    // Show tooltip on mouseover
    infoIcon.addEventListener('mouseover', function () {
        tooltip.style.visibility = 'visible';
    });

    // Hide tooltip on mouseout
    infoIcon.addEventListener('mouseout', function () {
        tooltip.style.visibility = 'hidden';
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var infoIcon = document.getElementById('infoIcon1');
    var tooltip = document.getElementById('tooltip1');

    // Show tooltip on mouseover
    infoIcon.addEventListener('mouseover', function () {
        tooltip.style.visibility = 'visible';
    });

    // Hide tooltip on mouseout
    infoIcon.addEventListener('mouseout', function () {
        tooltip.style.visibility = 'hidden';
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var infoIcon = document.getElementById('infoIcon2');
    var tooltip = document.getElementById('tooltip2');

    // Show tooltip on mouseover
    infoIcon.addEventListener('mouseover', function () {
        tooltip.style.visibility = 'visible';
    });

    // Hide tooltip on mouseout
    infoIcon.addEventListener('mouseout', function () {
        tooltip.style.visibility = 'hidden';
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var infoIcon = document.getElementById('infoIcon3');
    var tooltip = document.getElementById('tooltip3');

    // Show tooltip on mouseover
    infoIcon.addEventListener('mouseover', function () {
        tooltip.style.visibility = 'visible';
    });

    // Hide tooltip on mouseout
    infoIcon.addEventListener('mouseout', function () {
        tooltip.style.visibility = 'hidden';
    });
});