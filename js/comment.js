function addMessage() {
    const name = document.getElementById('guestName').value.trim();
    const msg = document.getElementById('guestMessage').value.trim();

    if (!name || !msg) {
        alert("Please enter your name and your message.");
        return;
    }

    const container = document.getElementById('messageList');

    const item = document.createElement('div');
    item.className = "message-item";

    item.innerHTML = `
        <div class="name">${name}</div>
        <div class="text">${msg}</div>
    `;

    container.prepend(item);

    // Clear inputs
    document.getElementById('guestName').value = "";
    document.getElementById('guestMessage').value = "";
}
