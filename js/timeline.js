// Timeline functionality
document.addEventListener('DOMContentLoaded', function() {
    const timelineButtons = document.querySelectorAll('.timeline button');
    const eventSections = document.querySelectorAll('.event-section');
    const timelineLabels = document.querySelectorAll('.timeline-labels span');
    
    function setActiveEvent(eventId) {
        // Remove active class from all
        eventSections.forEach(section => {
            section.classList.remove('active');
        });
        
        timelineButtons.forEach(button => {
            button.classList.remove('active');
        });
        
        // Add active class to selected
        const activeSection = document.getElementById(eventId);
        if (activeSection) {
            activeSection.classList.add('active');
        }
        
        const activeButton = document.querySelector(`.timeline button[data-event="${eventId}"]`);
        if (activeButton) {
            activeButton.classList.add('active');
        }
    }
    
    // Add click event to timeline buttons
    timelineButtons.forEach(button => {
        button.addEventListener('click', function() {
            const eventId = this.getAttribute('data-event');
            setActiveEvent(eventId);
        });
    });
    
    // Add click event to timeline labels
    timelineLabels.forEach((label, index) => {
        label.style.cursor = 'pointer';
        label.addEventListener('click', function() {
            const eventIds = ['arrival', 'ceremony', 'lunch', 'closing'];
            if (eventIds[index]) {
                setActiveEvent(eventIds[index]);
            }
        });
    });
    
    // Auto-rotate timeline every 5 seconds
    let currentIndex = 0;
    const eventIds = ['arrival', 'ceremony', 'lunch', 'closing'];
    
    function autoRotateTimeline() {
        currentIndex = (currentIndex + 1) % eventIds.length;
        setActiveEvent(eventIds[currentIndex]);
    }
    
    // Start auto-rotation
    let timelineInterval = setInterval(autoRotateTimeline, 5000);
    
    // Pause auto-rotation on hover
    const timelineContainer = document.querySelector('.schedule-container');
    timelineContainer.addEventListener('mouseenter', function() {
        clearInterval(timelineInterval);
    });
    
    timelineContainer.addEventListener('mouseleave', function() {
        timelineInterval = setInterval(autoRotateTimeline, 5000);
    });
    
    // View on Map button
    const mapBtn = document.querySelector('.btn-map');
    if (mapBtn) {
        mapBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const address = "Jasmine+Banquet+Hall+Petaling+Jaya+Selangor+Malaysia";
            window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank');
        });
    }
});