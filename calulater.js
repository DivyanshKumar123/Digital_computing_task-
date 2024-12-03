
  // var input = document.getElementById("input");
  // input.value = input.value + num;
  // }
  

  // function calculate() {
  //   var input = document.getElementById("input");

  //   try {
  //     input.value = eval(input.value);
  //   } catch (e) {
  //     input.value = "Error";
  //   }
  // }

  // function clearInput() {
  //   document.getElementById("input").value = "";
  // }

    function addNumber(num) {
        var input = document.getElementById('input');
        input.value += num;
    }

    function calculate() {
        var input = document.getElementById('input');
        try {
            input.value = eval(input.value);
        } catch (e) {
            input.value = 'Error';
        }
    }

    function clearInput() {
        var input = document.getElementById('input');
        input.value = '';
    }

    document.querySelectorAll('.button button').forEach(button => {
        if (button.textContent === '=') {
            button.addEventListener('click', calculate);
        } else if (button.textContent === 'c') {
            button.addEventListener('click', clearInput);
        } else {
            button.addEventListener('click', function() {
                addNumber(this.textContent);
            });
        }
    });



