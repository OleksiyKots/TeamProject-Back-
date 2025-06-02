themeToggle.addEventListener("change", function () {
    if (themeToggle.checked) {
        applyDarkTheme();
    } else {
        applyLightTheme();
    }
  });
  
  function applyDarkTheme() {
    document.body.style.backgroundColor = '#1E1E1E';
    document.querySelectorAll('.tin1').forEach(label => label.style.backgroundColor = '#1E1E1E');
    document.querySelectorAll('.tin1').forEach(label => label.style.color = '#fff');
    document.querySelectorAll('.border1').forEach(div => div.style.backgroundColor = '#828586');
    document.querySelectorAll('.gr').forEach(h2 => h2.style.color = '#fff');
    document.querySelectorAll('.or-text').forEach(div => div.style.color = '#fff');
    document.querySelectorAll('.rtw').forEach(button => button.style.backgroundColor = '#828586');
    document.querySelectorAll('.forgot-password').forEach(a => a.style.color = '#fff');
    document.querySelectorAll('.up').forEach(input => input.style.backgroundColor = '#1E1E1E');
    document.querySelectorAll('.inputLine').forEach(input => {
      input.style.backgroundColor = '#1E1E1E';
      input.style.borderColor = '#fff';
  });
    document.querySelectorAll('.current1').forEach(a => a.style.color = '#fff');
    document.querySelectorAll('.separator').forEach(span => span.style.color = '#fff');
    document.querySelectorAll('.reg').forEach(h1 => h1.style.color = '#fff');
    document.querySelectorAll('.submit-btn').forEach(button => {
        button.style.color = '#fff';
        button.style.backgroundColor = 'gray';
    });
    document.querySelectorAll('.header').forEach(section => {
        section.style.background = 'linear-gradient(to right, #B7BDC2, #525557)';
    });
    document.querySelectorAll('.description').forEach(div => {
        div.style.background = 'linear-gradient(to right, #B7BDC2, #525557)';
    });
    document.querySelectorAll('.foot').forEach(div => {
        div.style.background = 'linear-gradient(to right, #B7BDC2, #525557)';
    });
    document.querySelectorAll('.adress').forEach(div => {
        div.style.color = '#fff';
    });
    themeLabel.textContent = 'Темна версія';
    isBlack = true;
  }
  
  function applyLightTheme() {
    document.body.style.backgroundColor = '#fff';
    document.querySelectorAll('.tin1').forEach(label => label.style.backgroundColor = '#fff');
    document.querySelectorAll('.tin1').forEach(label => label.style.color = '#141414');
    document.querySelectorAll('.border1').forEach(div => div.style.backgroundColor = '#fff');
    document.querySelectorAll('.gr').forEach(h2 => h2.style.color = '#141414');
    document.querySelectorAll('.or-text').forEach(div => div.style.color = '#141414');
    document.querySelectorAll('.rtw').forEach(button => button.style.backgroundColor = '#DADFE2');
    document.querySelectorAll('.forgot-password').forEach(a => a.style.color = '#141414');
    document.querySelectorAll('.up').forEach(input => input.style.backgroundColor = '#fff');
    document.querySelectorAll('.inputLine').forEach(input => {
      input.style.backgroundColor = '#fff';
      input.style.borderColor = '#000';
  });
    document.querySelectorAll('.current1').forEach(a => a.style.color = '#141414');
    document.querySelectorAll('.separator').forEach(span => span.style.color = '#141414');
    document.querySelectorAll('.reg').forEach(h1 => h1.style.color = '#141414');
    document.querySelectorAll('.submit-btn').forEach(button => {
        button.style.color = '#000';
        button.style.backgroundColor = 'lightgray';
    });
    document.querySelectorAll('.header').forEach(section => {
        section.style.background = 'linear-gradient(to right, #DADFE2, #787A7C)';
    });
    document.querySelectorAll('.description').forEach(div => {
        div.style.background = 'linear-gradient(to right, #DADFE2, #787A7C)';
    });
    document.querySelectorAll('.foot').forEach(div => {
        div.style.background = 'linear-gradient(to right, #DADFE2, #787A7C)';
    });
    document.querySelectorAll('.adress').forEach(div => {
        div.style.color = '#141414';
    });
    themeLabel.textContent = 'Світла версія';
    isBlack = false;
  }
  
  
  
  
  
  
  
  
  
  
  
  