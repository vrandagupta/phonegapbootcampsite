app.controller('AgendaController', ['$scope', 'AppEventManager',
    function (scope, AppEventManager) {
        AppEventManager.tellMenuNewSectionLoaded('agenda');

        // defining multiple language content
        scope.pageItems = {
            "title": {
                "ptLabel": "Agenda",
                "enLabel": "Agenda"
            },
            "day1": {
                "ptLabel": "DIA 1",
                "enLabel": "DAY 1"
            },
            "day2": {
                "ptLabel": "DIA 2",
                "enLabel": "DAY 2"
            },
            "description": {
                "ptLabel": "Conteúdo",
                "enLabel": "Content"
            },
            "warning": {
                "ptLabel": "Horários sujeitos à alterações.",
                "enLabel": "Schedule subject to change."
            }
        };

        // agenda day 1
        scope.agendaItemsDay1 = [
            {
                "hours": "8am - 9am",
                "ptLabel": "Credenciamento e Apresentações.",
                "enLabel": "Registration and Introductions."
            },
            {
                "hours": "9am - 1:30pm",
                "ptLabel": "Introdução ao PhoneGap;<br>Introdução ao Cordova, suas dependências, plugins, limitações e vantagens;<br>Configurando o ambiente Windows e o ambiente Mac:<ul><li>Instalando todas as ferramentas e configurando o ambiente Cordova nas máquinas (Windows e Mac) para criação de apps para iOS, Android e BlackBerry 10;</li><li>Instalando e conhecendo dependências do PhoneGap/Cordova: Node.js, Apache Ant e Conhecendo e configurando o PATH do sistema;</li><li>Instalando o Adobe Brackets;</li><li>Preparando o ambiente iOS (somente Mac): Xcode e Command Line Tools;</li><li>Preparando o ambiente Android (Mac e Windows): Java, Eclipse e Android SDK;</li><li>Preparando o ambiente BlackBerry 10 (Mac e Windows): Native SDK, obtendo e configurando chaves de Assinatura.</li></ul>Criando seu primeiro projeto com o Cordova usando o fluxo de trabalho PLATFORM INDEPENDENT e o fluxo de trabalho CROSS PLATFORM (CLI);<br>Compilando para cada plataforma (iOS, Android e BlackBerry 10).",
                "enLabel": "Introduction to PhoneGap;<br>Introduction to Cordova, its dependencies, plugins, limitations and advantages;<br>Configuring Windows and Mac environments:<ul><li>Installing all tools and configuring each Cordova environment for Windows and Mac computers, in order to create apps for iOS, Android and BlackBerry 10;</li><li>Installing and getting to know PhoneGap/Cordova dependencies: Node.js, Apache Ant and configuring the system PATH;</li><li>Installing Adobe Brackets;</li><li>Preparing iOS environment (Mac only): Xcode and Command Line Tools;</li><li>Preparing Android environment (Mac and Windows): Java, Eclipse and Android SDK;</li><li>Preparing BlackBerry 10 environment (Mac and Windows): Native SDK, requesting and configuring signing keys.</li></ul>Creating your first project with Cordova with the PLATFORM INDEPENDENT workflow and with the CROSS PLATFROM workflow (CLI);<br>Compiling to each platform (iOS, Android and BlackBerry 10)."
            },
            {
                "hours": "1:30 - 2:30",
                "ptLabel": "Intervalo para Almoço.",
                "enLabel": "Lunch Break."
            },
            {
                "hours": "2:30 - 3pm",
                "ptLabel": "Conhecendo o Adobe Brackets e extensões poderosas:<ul><li>Emmet;</li><li>Tabs;</li><li>Beautify;</li><li>Editando CSS e Javascript a partir do HTML;</li><li>Live Preview.</li></ul>",
                "enLabel": "Getting to know Adobe Brackets and powerful extensions:<ul><li>Emmet;</li><li>Tabs;</li><li>Beautify;</li><li>Editing CSS and JavaScript from your HTML;</li><li>Live Preview.</li></ul>"
            },
            {
                "hours": "3 - 3:30pm",
                "ptLabel": "Entendendo Single Page Apps.",
                "enLabel": "Getting to know Single Page Apps."
            },
            {
                "hours": "3:30 - 7:30pm",
                "ptLabel": "Entendendo as APIs do HTML5;<br>Entendendo as APIs do Cordova;<br>Instalando plugins;<br>Criando e gerando builds com:<ul><li>Detectando a plataforma;</li><li>Status da bateria;</li><li>Câmera;</li><li>Contatos;</li><li>Informações do aparelho;</li><li>Acelerômetro;</li><li>Bússola.</li></ul>",
                "enLabel": "Getting to know HTML5 APIs;<br>Getting to know Cordova APIs;<br>Installing plugins;<br>Creating and generating builds with:<ul><li>Platform Detection;</li><li>Battery Status;</li><li>Camera;</li><li>Contacts;</li><li>Device;</li><li>Device Motion (Accelerometer);</li><li>Device Orientation (Compass).</li></ul>"
            }
        ];

        // agenda day 2
        scope.agendaItemsDay2 = [
            {
                "hours": "8:30 - 9:30",
                "ptLabel": "20 Técnicas de UX, JS, CSS e HTML, vindas do mundo real, que fazem a diferença em relação à Performance de aplicativos móveis.",
                "enLabel": "20 UX, JS, CSS and HTML Techniques, coming from the real world, that make a big difference regarding Performance for mobile apps."
            },
            {
                "hours": "9:30 - 10am",
                "ptLabel": "Conhecendo o Cordova serve e o Chrome Dev Tools.",
                "enLabel": "Getting to know Cordova serve and Chrome Dev Tools."
            },
            {
                "hours": "10am - 11am",
                "ptLabel": "Conhecendo o AngularJS (passado, presente e futuro).",
                "enLabel": "Getting to know AngularJS (past, present and future)."
            },
            {
                "hours": "11am - 12pm",
                "ptLabel": "Automatizando seu fluxo de trabalho com Gulp, Bower e Sass.",
                "enLabel": "Automating your workflow with Gulp, Bower and Sass."
            },
            {
                "hours": "12pm - 1:30pm",
                "ptLabel": "Debugando no device real (iOS, Android e BlackBerry 10).",
                "enLabel": "Debugging on a real device (iOS, Android and BlackBerry10)."
            },
            {
                "hours": "1:30 - 2:30",
                "ptLabel": "Intervalo para Almoço.",
                "enLabel": "Lunch Break."
            },
            {
                "hours": "2:30 - 6pm",
                "ptLabel": "Criando e gerando builds com:<ul><li>Caixas de diálogo nativas;</li><li>Consumindo JSON & WebServices;</li><li>Sistema de arquivos;</li><li>Geolocalização;</li><li>Detectando o idioma;</li><li>In App Browser;</li><li>Tocando áudio e vídeo;</li><li>Gravando áudio e vídeo;</li><li>Informações e status da rede (online/offline);</li><li>Vibração;</li><li>Sistema (BlackBerry);</li><li>Status Bar (iOS);</li><li>Armazenamento local (Local Storage, WebSQL).</li></ul>",
                "enLabel": "Creating and generating builds with:<ul><li>Dialogs;</li><li>Consuming JSON + WebServices;</li><li>File System;</li><li>Geolocation;</li><li>Globalization;</li><li>In App Browser;</li><li>Media;</li><li>Media Capture;</li><li>Network Information (Connection);</li><li>Vibration;</li><li>System (BlackBerry);</li><li>Status Bar (iOS);</li><li>Storage (Local Storage, WebSQL).</li></ul>"
            },
            {
                "hours": "6pm - 7pm",
                "ptLabel": "Empacotando o aplicativo e ajustando para cada plataforma;<br>Instalando no Device;<br>Debugando no Device com o Remote Web Inspector;<br>Assinando seu aplicativo antes de submeter para a loja;<br>Entendendo como criar uma conta de vendor e como enviar seu aplicativo para as lojas de apps:<ul><li>Apple App Store;</li><li>Google Play;</li><li>BlackBerry World.</li></ul>",
                "enLabel": "Packaging the app and adjusting to each platform;<br>Deploying to the device;<br>On-device Debugging with Remote Web Inspector;<br>Signing your app before submitting to the store;<br>Understanding how to create a vendor account and how to submit to the app stores:<ul><li>Apple App Store;</li><li>Google Play;</li><li>BlackBerry World.</li></ul>"
            },
            {
                "hours": "7 - 7:30pm",
                "ptLabel": "Encerramento;<br>Entrega dos Certificados;<br>Foto da Turma.",
                "enLabel": "Closing remarks;<br>Course Certificate;<br>Group Picture."
            }
        ];
}]);