function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.display = 'block';

    setTimeout(() => {
        notification.style.opacity = 0;
        setTimeout(() => {
            notification.style.display = 'none';
            notification.style.opacity = 1;
        }, 500);
    }, 3000);
}

function discordName() {
    const discord_name = "imrivenbot";

    const copyContent = async () => {
        try {
            await navigator.clipboard.writeText(discord_name);
            showNotification('Has copiado mi nombre de discord con éxito.');
        } catch (err) {
            showNotification('No se pudo copiar el texto.');
        }
    };

    copyContent();
}