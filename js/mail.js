const form = document.querySelector('form');

const fullName = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail(){
    const bodyMessage = `Name: ${fullName.value}<br>Email: ${email.value}<br>Subject: ${subject.value}<br>Message:${message.value}<br>`;


    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "coding.nikz@gmail.com",
        Password : "73F29D4480AC207B57D70D0A3BBB55C952D4",
        To : 'coding.nikz@gmail.com',
        From : 'coding.nikz@gmail.com',
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK"){
            Swal.fire({
                title: "Good job!",
                text: "Message Sent Successfully!",
                icon: "success"
              });
        }
      }
    );
}

form.addEventListener("submit",(e) => {
    e.preventDefault();

    sendEmail();
});
