var checkbox = document.querySelector('input[type="checkbox"]');

var myModal = document.getElementById('staticBackdrop');

checkbox.addEventListener('change', ischecked);

document.addEventListener('DOMContentLoaded', function () {
  changeLanguage("en")
  checkbox.checked=true;
  modal.show()
});

function ischecked(){
  if (checkbox.checked) {
    checkbox.value="en"
    console.log('en');
  } else {
    checkbox.value="es"
    console.log('es');
  }
}

function changeLanguage(languageCode) {
  Array.from(document.getElementsByClassName('lang')).forEach(function (elem) {
    if (elem.classList.contains('lang-' + languageCode)) {
      elem.style.display = 'initial';
    }
    else {
      elem.style.display = 'none';
    }
  });
}

// select handler
const selector = document.getElementById('langSelector');
selector.addEventListener('change', function (evt) {
    changeLanguage(this.value);
});

var modal = bootstrap.Modal.getOrCreateInstance(myModal)