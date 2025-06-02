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
      document.querySelectorAll('.current1').forEach(function(a) {
        a.style.color = '#fff'; // колір реєстрація
      }); 
      document.querySelectorAll('.separator').forEach(function(span) {
        span.style.color = '#fff'; // колір реєстрація
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
      document.querySelectorAll('.current1').forEach(function(a) {
        a.style.color = '#000'; // колір реєстрація
      }); 
      document.querySelectorAll('.separator').forEach(function(span) {
        span.style.color = '#000'; // колір реєстрація
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
        themeLabel.textContent = 'Світла версія';
        isBlack = false;
    }
})


// Відправка


document.querySelector('.centr').addEventListener('submit', async function(e) {
  e.preventDefault(); // Зупиняє стандартну відправку

  const phone = document.getElementById('phone').value.trim();
  const fullName = document.getElementById('fullName').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (password !== confirmPassword) {
    alert("Паролі не збігаються.");
    return;
  }

  const data = {
    phone,
    fullName,
    password
  };

  try {
    const response = await fetch('https://your-backend.com/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (response.ok) {
      alert('Реєстрація успішна!');
      // Можна перенаправити: window.location.href = '/login';
    } else {
      alert('Помилка: ' + result.message);
    }
  } catch (error) {
    console.error('Помилка з’єднання:', error);
    alert('Сервер недоступний. Спробуйте пізніше.');
  }
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