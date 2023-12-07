let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #9c0c5e;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #9c0c5e;">Soy diseñadora UX/UI actualmente desarrollando habilidades en la creación de sitios web de diversos giros.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
