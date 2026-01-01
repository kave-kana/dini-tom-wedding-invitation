// Function to handle RSVP form submission
function submitRSVP(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('rsvpName').value;
    const email = document.getElementById('rsvpEmail').value;
    const attendance = document.getElementById('rsvpAttendance').value;
    const guestType = document.getElementById('rsvpGuests').value;
    const phone = document.getElementById('rsvpPhone').value;
    const message = document.getElementById('rsvpMessage').value;

    // Build confirmation message
    let confirmationText = `Thank you, <strong>${name}</strong>!<br><br>`;
    confirmationText += `We have received your RSVP for <strong>${attendance}</strong>. `;

    if (guestType === 'Myself') {
        confirmationText += `You have indicated <strong>1 guest</strong> (yourself).`;
    } else if (guestType === '+1 Guest') {
        confirmationText += `You have indicated <strong>2 guests</strong> (yourself + 1).`;
    } else if (guestType === 'Family') {
        const familySize = document.getElementById('familySize').value;
        confirmationText += `You have indicated <strong>${familySize} family members</strong> (including yourself).`;
    }

    if (phone) {
        confirmationText += `<br>We have your phone number: <strong>${phone}</strong>`;
    }

    if (message) {
        confirmationText += `<br><br>Your message: <em>"${message}"</em>`;
    }

    if (email) {
        confirmationText += `<br><br>A confirmation email has been sent to <strong>${email}</strong>.`;
    }

    // Display confirmation message
    document.getElementById('confirmationDetails').innerHTML = confirmationText;
    document.getElementById('confirmationMessage').style.display = 'block';

    // Scroll to confirmation
    document.getElementById('confirmationMessage').scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
    });

    // In a real application, you would send this data to a server here
    console.log('RSVP Data:', {
        name, email, attendance, guestType,
        familySize: guestType === 'Family' ? document.getElementById('familySize').value : null,
        phone, message
    });

    // Reset form after 5 seconds (optional)
    setTimeout(() => {
        event.target.reset();
        document.getElementById('familySizeContainer').style.display = 'none';
        document.getElementById('confirmationMessage').style.display = 'none';
    }, 8000);

    return false;
}

// Family size selector functionality
document.addEventListener('DOMContentLoaded', function () {
    const rsvpGuests = document.getElementById('rsvpGuests');
    const familySizeContainer = document.getElementById('familySizeContainer');
    const familySizeInput = document.getElementById('familySize');
    const decreaseBtn = document.getElementById('decreaseBtn');
    const increaseBtn = document.getElementById('increaseBtn');

    // Show/hide family size container based on dropdown selection
    rsvpGuests.addEventListener('change', function () {
        if (this.value === 'Family') {
            familySizeContainer.style.display = 'block';
        } else {
            familySizeContainer.style.display = 'none';
        }

        // Hide confirmation message when selection changes
        document.getElementById('confirmationMessage').style.display = 'none';
    });

    // Handle family size controls
    decreaseBtn.addEventListener('click', function () {
        let currentValue = parseInt(familySizeInput.value);
        if (currentValue > 3) {
            familySizeInput.value = currentValue - 1;
        }
    });

    increaseBtn.addEventListener('click', function () {
        let currentValue = parseInt(familySizeInput.value);
        if (currentValue < 20) {
            familySizeInput.value = currentValue + 1;
        }
    });

    // Allow direct typing in the family size input
    familySizeInput.addEventListener('change', function () {
        let value = parseInt(this.value);
        if (value < 3) {
            this.value = 3;
        } else if (value > 20) {
            this.value = 20;
        }
    });

    // Set initial state
    familySizeContainer.style.display = 'none';
});
