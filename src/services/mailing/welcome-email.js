import transporter from "#config/mailer.js";

export function sendWelcomeEmail(user, token) {
  if (!user || !token) {
    throw new Error("Missing user or token");
  }
  const message = {
    from: process.env.SMTP_USER,
    to: user.email,
    subject: "Welcome to our todo app",
    html: `<h1>Welcome to our todo app here your validation token : <span> ${token} </span></h1>`
  };
  return transporter.sendMail(message);
}