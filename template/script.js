new Vue({
    el: '#app',
    methods: {
      redirectTo: function(url) {
        window.open(url)
      },
    },
    data () {
      return {
        title: 'Your Logo',
        user: {
          firstname: 'Jocelyn',
          name :'David',
          shortDescription :'Freelance – Lead Developer Android – Guitariste – Grimpeur',
          description :"Salut, je suis Jocelyn, jeune Freelance de 27 ans. J’habite à Lille depuis la fin de mes études d’ingénieur informatique. J’ai fait plusieurs années dans des entreprises de prestation de services, d’abord SII pendant 1 an puis Phoceis durant 2 ans et demi où j’étais Lead Dev Android. Depuis juillet 2017, je me suis lancé dans l’aventure de entrepreneuriat avec ma propre entreprise, Novajox"
        },
        posts: [{
            title: 'Application Décathlon Grand public',
            content: "Au sein d'une équipe de 14 personnes, je suis en charge de l'application sur Android. Nous sommes 4 développeurs au total pour Android.",
            details: ['Architecture de l’application Android Décathlon','UX/Ergonomie de l’application Android'],
            tags : ['android','4.4/5'],
            url :"https://play.google.com/store/apps/details?id=com.decathlon.app",
            imgUrl: 'https://novajox.files.wordpress.com/2017/09/sans-titre.jpg?w=507&h=666&crop=1',
            show: false
          },
          {
            title: 'Unofficial Bitrise Client for Android',
            content: 'Projet personnel venant de mon utilisation régulière de Bitrise. Ce client permet de se connecter à son compte et récupérer les différents fichiers générés lors des builds',
            details: ["Utilisation de l'API de Bitrise","Téléchargement d'APK"],
            tags :['android', 'bitrise', 'continuos delivery','mvp'],
            sourceCode :'https://gitlab.com/Novajox/bitrise-android',
            url :'https://play.google.com/store/apps/details?id=io.novajox.bitrise',
            imgUrl: 'https://lh3.googleusercontent.com/mjF8KDqHOOk8P77LZoKc8XcTF9GxkyV516-8CNV_lfSBXspsqUA7edrMtAz4sByaIRg=w1899-h953',
            show: false
          },
          {
            title: 'Zikobot',
            content: 'Projet personnel suite à une envie de pouvoir me réveiller en musique. On se connecte à son compte Spotify et on peut préparer une alarme qui lance la playlist de son choix. Depuis peu, il y a également des propositions pour des artistes similaires',
            details: ['Utilisation du SDK spotify','Alarme musicale'],
            tags :['android', 'spotify', "mvvm"],
            imgUrl: 'assets/zikobot.png',
            sourceCode :'https://github.com/joxad/zikobot',
            url :'https://play.google.com/store/apps/details?id=com.startogamu.zikobot',
            show: false
          },
          {
            title: 'My pocket Garden',
            content: "Projet pour créer et partager les plantes de son jardin ou logement. Cela m'a permit de tester de lier une application avec une api sur Firebase Realtime Database",
            tags :['android', 'firebase', 'lottie', 'mvp'],
            sourceCode :'https://gitlab.com/Novajox/pocket-garden-app',
            imgUrl: 'assets/pocketgarden.png',
            show: false
          }
        ]
      }
    }
  })