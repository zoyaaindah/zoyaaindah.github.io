document.addEventListener('DOMContentLoaded', function () {
    const personalInfoCards = [
      { title: 'Name', content: 'Your Name' },
      { title: 'Email', content: 'Your Email' },
      { title: 'Phone Number', content: 'Your Phone Number' },
      { title: 'Address', content: 'Your Address' },
      { title: 'Location', content: 'Your City, State, Country' },
    ];
  
    const educationCards = [
      { title: 'Degree', content: 'University Name, Year of Graduation' },
      { title: 'Degree', content: 'University Name, Year of Graduation' },
    ];
  
    const portfolioCards = [
      { title: 'Portfolio 1', content: 'Description of Portfolio 1', image: 'portfolio1.jpg' },
      { title: 'Portfolio 2', content: 'Description of Portfolio 2', image: 'portfolio2.jpg' },
    ];
  
    const personalInfoContainer = document.getElementById('personalInfo');
    const educationContainer = document.getElementById('educationInfo');
    const portfolioContainer = document.getElementById('portfolioInfo');
  
    // Menambahkan kartu informasi pribadi
    personalInfoCards.forEach(function (card) {
      const cardElement = document.createElement('div');
      cardElement.classList.add('card');
      cardElement.innerHTML = `
        <h3>${card.title}</h3>
        <p>${card.content}</p>
      `;
      personalInfoContainer.appendChild(cardElement);
    });
  
    // Menambahkan kartu pendidikan
    educationCards.forEach(function (card) {
      const cardElement = document.createElement('div');
      cardElement.classList.add('card');
      cardElement.innerHTML = `
        <h3>${card.title}</h3>
        <p>${card.content}</p>
      `;
      educationContainer.appendChild(cardElement);
    });
  
    // Menambahkan kartu portofolio
    portfolioCards.forEach(function (card) {
      const cardElement = document.createElement('div');
      cardElement.classList.add('card');
      cardElement.innerHTML = `
        <h3>${card.title}</h3>
        <p>${card.content}</p>
        <img src="${card.image}" alt="${card.title}">
      `;
      portfolioContainer.appendChild(cardElement);
    });
  });