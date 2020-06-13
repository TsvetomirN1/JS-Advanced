function solve() {
   
      const sendBtn  = document.getElementById('send');
      const chatMessages = document.getElementById('chat_messages');
      const input = document.getElementById('chat_input');
  
      sendBtn.addEventListener('click', function () {
  
          if (input.value) {
              const newElement = document.createElement('div');
              newElement.innerText = input.value;
              newElement.className = 'message my-message';
              chatMessages.appendChild(newElement);
              input.value = ''
          }
      })
}


