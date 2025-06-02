let isBlack = false;

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("change", function() {
    if(themeToggle.checked) {
      document.body.style.backgroundColor = '#1E1E1E'; // колір body
      document.querySelectorAll('.inputLine').forEach(function(input) {
          input.style.backgroundColor = '#1E1E1E'; // колір фону полей вводу
          input.style.color = '#fff'; // колір полей вводу
      });
      document.querySelectorAll('.tin1').forEach(function(label) {
        label.style.color = '#fff'; // колір полей підказок
      }); 
      document.querySelectorAll('.current2').forEach(function(a) {
        a.style.color = '#fff'; // колір реєстрація
      }); 
      document.querySelectorAll('.reg').forEach(function(h1) {
         h1.style.color = '#fff'; // колір реєстрація заголовок
      }); 
      document.querySelectorAll('.submit-btn').forEach(function(button) {
        button.style.color = '#fff'; // колір тексту кнопки
        button.style.backgroundColor = 'gray'; // колір фону кнопки
      }); 
      document.querySelectorAll('.header').forEach(function(section) {
      section.style.background = 'linear-gradient(to right, #B7BDC2, #525557)'; // колір фону хедера
      }); 
      document.querySelectorAll('.description').forEach(function(div) {
        div.style.background = 'linear-gradient(to right, #B7BDC2, #525557)'; // колір фону середина
      });
      document.querySelectorAll('.foot').forEach(function(div) {
        div.style.background = 'linear-gradient(to right, #B7BDC2, #525557)'; // колір фону футтер
      });  
      document.querySelectorAll('.product-image').forEach(function(div) {
        div.style.border = '1px solid #fff'; // колір реєстрація заголовок
      }); 
      document.querySelectorAll('.product-title').forEach(function(div) {
        div.style.color = '#fff'; // колір реєстрація заголовок
      }); 
      document.querySelectorAll('.product-info').forEach(function(div) {
        div.style.color = '#fff'; // колір реєстрація заголовок
      }); 
      document.querySelectorAll('.wishlist').forEach(function(div) {
        div.style.color = '#fff'; // колір реєстрація заголовок
      }); 
      document.querySelectorAll('.t4').forEach(function(b) {
        b.style.color = '#fff'; // колір реєстрація заголовок
      }); 
      document.querySelectorAll('.ut4').forEach(function(a) {
        a.style.color = '#fff'; // колір реєстрація заголовок
      }); 
      document.querySelectorAll('.pric').forEach(function(span) {
        span.style.color = '#fff'; // колір реєстрація заголовок
      }); 
      document.querySelectorAll('.current1').forEach(function(div) {
        div.style.color = '#fff'; // колір реєстрація заголовок
      }); 
      document.querySelectorAll('.sidebar-filter').forEach(function(div) {
        div.style.color = '#fff'; // колір реєстрація заголовок
      }); 
      document.querySelectorAll('.separator').forEach(function(span) {
        span.style.color = '#fff'; // колір реєстрація заголовок
      }); 
      document.querySelectorAll('.wr').forEach(function(div) {
        div.style.color = '#fff'; // колір реєстрація заголовок
      }); 
        isBlack = true;
        themeLabel.textContent = 'Темна версія';
    } else {
        document.body.style.backgroundColor = '#fff'; // колір body
        document.querySelectorAll('.inputLine').forEach(function(input) {
          input.style.backgroundColor = '#fff'; // колір фону полей вводу
          input.style.color = '#000'; // колір полей вводу
      });
      document.querySelectorAll('.tin1').forEach(function(label) {
        label.style.color = '#000'; // колір полей підказок
      }); 
      document.querySelectorAll('.current2').forEach(function(a) {
        a.style.color = '#000'; // колір реєстрація
      }); 
      document.querySelectorAll('.reg').forEach(function(h1) {
         h1.style.color = '#000'; // колір реєстрація заголовок
      }); 
      document.querySelectorAll('.submit-btn').forEach(function(button) {
        button.style.color = '#000'; // колір тексту кнопки
        button.style.backgroundColor = 'lightgray'; // колір фону кнопки
      }); 
      document.querySelectorAll('.header').forEach(function(section) {
      section.style.background = 'linear-gradient(to right, #DADFE2, #787A7C)'; // колір фону хедера
      }); 
      document.querySelectorAll('.description').forEach(function(div) {
      div.style.background = 'linear-gradient(to right, #DADFE2, #787A7C)'; // колір фону хедера
      });
      document.querySelectorAll('.foot').forEach(function(div) {
        div.style.background = 'linear-gradient(to right, #DADFE2, #787A7C)'; // колір фону футтер
      });   
      document.querySelectorAll('.product-image').forEach(function(div) {
        div.style.border = '1px solid #000'; // колір реєстрація заголовок
      }); 
      document.querySelectorAll('.product-title').forEach(function(div) {
        div.style.color = '#000'; // колір реєстрація заголовок
      }); 
      document.querySelectorAll('.product-info').forEach(function(div) {
        div.style.color = '#000'; // колір реєстрація заголовок
      });
      document.querySelectorAll('.wishlist').forEach(function(div) {
        div.style.color = '#000'; // колір реєстрація заголовок
      });
      document.querySelectorAll('.t4').forEach(function(b) {
        b.style.color = '#000'; // колір реєстрація заголовок
      }); 
      document.querySelectorAll('.ut4').forEach(function(a) {
        a.style.color = '#000'; // колір реєстрація заголовок
      }); 
      document.querySelectorAll('.pric').forEach(function(span) {
        span.style.color = '#000'; // колір реєстрація заголовок
      }); 
      document.querySelectorAll('.sidebar-filter').forEach(function(div) {
        div.style.color = '#000'; // колір реєстрація заголовок
      }); 
      document.querySelectorAll('.current1').forEach(function(div) {
        div.style.color = '#000'; // колір реєстрація заголовок
      }); 
      document.querySelectorAll('.separator').forEach(function(span) {
        span.style.color = '#000'; // колір реєстрація заголовок
      }); 
      document.querySelectorAll('.wr').forEach(function(div) {
        div.style.color = '#000'; // колір реєстрація заголовок
      }); 
        themeLabel.textContent = 'Світла версія';
        isBlack = false;
    }
})









const minRange = document.getElementById('min-range');
const maxRange = document.getElementById('max-range');
const sliderTrack = document.querySelector('.slider-track');

function updateTrack() {
  const min = parseInt(minRange.value);
  const max = parseInt(maxRange.value);
  const total = parseInt(minRange.max);
  
  const left = (min / total) * 100;
  const right = (max / total) * 100;
  
 
}

// Обмеження: ліва не може бути правіше правої
minRange.addEventListener('input', () => {
  if (parseInt(minRange.value) >= parseInt(maxRange.value)) {
    minRange.value = maxRange.value - 1;
  }
  updateTrack();
});

// Обмеження: права не може бути лівіше лівої
maxRange.addEventListener('input', () => {
  if (parseInt(maxRange.value) <= parseInt(minRange.value)) {
    maxRange.value = parseInt(minRange.value) + 1;
  }
  updateTrack();
});

// Початковий виклик
updateTrack();



document.querySelectorAll('.toggle-image').forEach(img => {
  img.addEventListener('click', () => {

    const currentSrc = img.getAttribute('src'); 
    const altSrc = img.getAttribute('data-alt');

    // Поміняємо місцями src і data-alt
    img.setAttribute('src', altSrc);
    img.setAttribute('data-alt', currentSrc);
  });
});






let currentLanguage = 'ua'; // Початкова мова

// Завантаження JSON файлу з перекладами
function loadLanguage(language) {
  fetch(`lang/${language}.json`)
    .then(response => response.json())
    .then(data => {
      // Заміна тексту для кожного елемента з атрибутом data-i18n
      document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (data[key]) {
          if (element.tagName.toLowerCase() === 'input' || element.tagName.toLowerCase() === 'textarea') {
            element.placeholder = data[key]; // Заміна placeholder
          } else {
            element.innerText = data[key]; // Заміна тексту
          }
        }
      });
    })
    .catch(error => console.log('Error loading language file:', error));
}

// Функція для зміни мови
function changeLanguage(language) {
  currentLanguage = language; // Оновлюємо поточну мову
  loadLanguage(language); // Завантажуємо відповідний JSON файл
}

// Завантажуємо мову при старті сторінки
window.onload = () => {
  loadLanguage(currentLanguage);
};