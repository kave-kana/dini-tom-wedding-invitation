  const buttons = document.querySelectorAll('.timeline button');
  const sections = document.querySelectorAll('.event-section');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      button.classList.add('active');

      const target = button.dataset.event;
      sections.forEach(section => {
        section.classList.remove('active');
        if (section.id === target) section.classList.add('active');
      });
    });
  });