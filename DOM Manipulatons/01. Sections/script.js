function create(words) {
   const elements = words.map(word => {
      const div = document.createElement('div');
      div.appendChild(document.createElement('p'));
      div.firstElementChild.appendChild(document.createTextNode(word));
      return div;
   });

   const parent = document.getElementById('content');

   for (const element of elements) {
      element.firstElementChild.style.display = 'none';
      parent.appendChild(element);
      element.addEventListener('click', display);
   }

   function display() {
      this.firstElementChild.style.display = 'block';
      this.removeEventListener('click', display);
   }
}