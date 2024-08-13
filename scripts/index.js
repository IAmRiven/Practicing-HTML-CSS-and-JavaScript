// const form = document.querySelector('form');
// const nombreCompleto = document.getElementById('name');
// const discordId = document.getElementById('discord');
// const message = document.getElementById('razon');
// const email = document.getElementById('email');

// function sendEmail() {
//     const bodyMessage = `Nombre completo: ${nombreCompleto.value}<br> Discord ID: ${discordId.value}<br>Correo electrónico: ${email.value}<br>Email de contacto: ${email.value}<br> Razón: ${razon.value}`;
//     Email.send({
//         Host: "smtp.elasticemail.com",
//         Username: "your email",
//         Password: "password_here",
//         To: 'your email',
//         From: "your email",
//         Subject: "Mensaje desde el portafolio",
//         Body: bodyMessage
//     }).then(
//         message => alert(message)
//     );
// }

// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     sendEmail();
// })

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
