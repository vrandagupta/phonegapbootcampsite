app.controller("RegistrationController",["$scope","AppEventManager","$rootScope",function(e,o,t){o.tellMenuNewSectionLoaded("registration"),e.pageItems={title:{ptLabel:"Inscrições",enLabel:"Register<br>now"},description:{ptLabel:"Para se inscrever, escolha a cidade abaixo e toque no botão <strong>Inscreva-se Agora</strong>:",enLabel:"To register, choose a city below and tap on the <strong>Register Now</strong> button:"},registerButton:{ptLabel:"Inscreva-se Agora",enLabel:"Register Now"},button1:{ptLabel:"Quer o Bootcamp em sua cidade?",enLabel:"Want the Bootcamp in your city?"},bootcamps:[{city:"Natal - RN - Brasil",address:"Estácio:  Avenida Almirante Alexandrino de Alencar, 708 - Alecrim.",ptDates:"26 e 27 / Janeiro / 2014",enDates:"26 & 27 / January / 2014",name:"PhoneGap<br>Bootcamp<br>Natal",url:"http://jornadaadobe.com/inscricoes"}]},e.gotoContactPage=function(){window.location.href="#/talktous"},e.gotoPage=function(e){e.indexOf("message:")>-1?t.showMessage(e.substr(8,e.length)):window.open(e,"_blank")}}]);