// Countdown Timer
function updateCountdown() {
    const weddingDate = new Date('August 30, 2026 09:00:00').getTime();
    const now = new Date().getTime();
    const distance = weddingDate - now;
    
    // Calculate days, hours, minutes, seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Update hero countdown
    document.getElementById('days-hero').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours-hero').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes-hero').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds-hero').textContent = seconds.toString().padStart(2, '0');
    
    // Update main countdown
    document.getElementById('days-main').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours-main').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes-main').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds-main').textContent = seconds.toString().padStart(2, '0');
    
    // Update attendance counter (demo - random for now)
    if (Math.random() > 0.7) {
        const attendNumber = document.querySelector('.attend-number');
        const current = parseInt(attendNumber.textContent);
        if (current < 120) {
            attendNumber.textContent = (current + 1).toString().padStart(2, '0');
        }
    }
}

// Initialize countdown
updateCountdown();
setInterval(updateCountdown, 1000);

// Save the Date button functionality
document.querySelectorAll('.cta-btn').forEach(btn => {
    if (btn.textContent.includes('Save the Date')) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Save the Date: August 30, 2026\nLocation: Jasmine Banquet Hall\nWe look forward to celebrating with you!');
        });
    }
    
    if (btn.textContent.includes('RSVP')) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector('#rsvp-heading').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});