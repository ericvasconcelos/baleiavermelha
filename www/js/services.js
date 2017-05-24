angular.module('starter.services', [])

.factory('Tasks', function() {
  // Some fake testing data
  var tasks = [
    {
      nome: "Diga a um familiar querido o quanto o ama.",
      name: "Tell a loved one how much you loved them.",
      done: false
    },
    {
      nome: "Elogie algum amigo próximo que tenha feito algo legal por você.",
      name: "Praise a close friend who has done something nice for you.",
      done: false
    },
    {
      nome: "Seja grato a todas as pessoas hoje.",
      name: "Be grateful to all people today.",
      done: false
    },
    {
      nome: "Dê bom dia a todas as pessoas que esbarrar pela rua.",
      name: "Wish a good day to all those people you come across in the street.",
      done: false
    },
    {
      nome: "Compre algo para alguma pessoa necessitada comer.",
      name: "Buy someone who needs something to eat.",
      done: false
    },
    {
      nome: "Fale com algum amigo seu sobre este aplicativo.",
      name: "Talk to a friend of yours about this app.",
      done: false
    },
    {
      nome: "Peça desculpas para alguém, mesmo que a pessoa tenha sido a culpada.",
      name: "Apologize to someone, even if it is not your fault.",
      done: false
    },
    {
      nome: "Doe suas roupas velhas para quem precisa.",
      name: "Donate some of your old clothes to those who need them.",
      done: false
    },
    {
      nome: "Fale com 5 pessoas sobre o Baleia Vermelha! Talvez essa pessoa também precisa espalhar coisas boas por aí.",
      name: "Talk to 5 people about the Red Whale! Maybe that person also needs to spread good things out there.",
      done: false
    },
    {
      nome: "Pergunte às pessoas que vivem junto a você e a seus vizinhos como eles estão.",
      name: "Ask people who live with you and your neighbors how they are.",
      done: false
    },
    {
      nome: "Compre um chocolate para alguém que você goste.",
      name: "Buy some chocolate for someone you care of.",
      done: false
    },
    {
      nome: "Seja grato por mais um dia de vida.",
      name: "Say thanks for another day on your life.",
      done: false
    },
    {
      nome: "Sorria para o caixa ou o vendedor que encontrar.",
      name: "Smile at a cashier or salesperson.",
      done: false
    },
    {
      nome: "Deixa alguém passar na sua frente na fila.",
      name: "Let someone pass in front of you by a wait line.",
      done: false
    },
    {
      nome: "Convide um amigo para tomar sorvete e diga que vai pagar para ele. Talvez ele esteja precisando conversar, mas esteja no aperto.",
      name: "Invite a friend for some ice cream and tell you are paying. Maybe they need to talk, but haven't got the money or courage for it.",
      done: false
    },
    {
      nome: "Seja gentil com todas as pessoas que encontrar.",
      name: "Be kind to all people you meet.",
      done: false
    },
    {
      nome: "Seja paciente com todos. Procure não elevar sua voz e trate a todos com carinho.",
      name: "Be patient with everyone. Try not to raise your voice and treat everyone with affection.",
      done: false
    },
    {
      nome: "Use a roupa mais bonita que você tem hoje.",
      name: "Wear the most beautiful clothes you have today.",
      done: false
    },
    {
      nome: "Quando o transporte público estiver lotado, ofereça seu assento para uma pessoa.",
      name: "When public transportation is full, offer your seat to someone.",
      done: false
    },
    {
      nome: "Envie uma mensagem para alguém dizendo o quanto a presença dela é importante na sua vida.",
      name: "Send a message to someone telling them how important their presence is in your life.",
      done: false
    },
    {
      nome: "Ajude algum animal de rua, nem que seja dando um petisco para ele. Pets também necessitam de amor.",
      name: "Help some street animal, even if it is by giving them a snack. Animals also need attention and love.",
      done: false
    },
    {
      nome: "Dê uma garrafa de água reutilizável cheia de água a um mendigo.",
      name: "Give a beggar a reusable bottle full of drinkable water.",
      done: false
    },
    {
      nome: "Se olhe no espelho quando acordar e diga para você mesmo, o quanto és corajoso, bondoso e amado.",
      name: "Look at yourself in the mirror when you wake up and tell yourself how brave, kind and loving you are.",
      done: false
    },
    {
      nome: "Se estiver apenas pensando coisas legais sobre uma pessoa, envie uma mensagem para contar. Elogios são sempre necessários e bem vindos.",
      name: "If you think nice things about someone, send them a message telling them those things. Praising is always needed and welcome.",
      done: false
    },    {
      nome: "Tire 15 minutos para observar a natureza. Tudo isso foi feito para você.",
      name: "Take 15 minutes to observe nature. All of that was done for you.",
      done: false
    },    {
      nome: "Diga \"Eu te amo\" para alguém que você ama muito.",
      name: "Say \"I love you \" to someone you love very much.",
      done: false
    },
    {
      nome: "Conte uma piada/história engraçada para um amigo que adora conversar contigo.",
      name: "Tell a funny joke/story to a friend who loves to talk to you.",
      done: false
    },
    {
      nome: "Fale com mais 5 pessoas sobre o Baleia Vermelha! Talvez essa pessoa também precisa espalhar coisas boas por aí.",
      name: "Talk to 5 more people about the Red Whale! Maybe that person also needs to spread good things out there.",
      done: false
    },
    {
      nome: "Agradeça sempre pela família que possui, mesmo com todos os problemas que ela tenha. Ter problemas é normal.",
      name: "Always thank for the family you have and even for their problems. It is normal to have problems.",
      done: false
    },
    {
      nome: "Pegue um lixo da rua que não é seu e jogue no lixo.",
      name: "Collect garbage from a street that is not yours and throw it in the trash.",
      done: false
    },
    {
      nome: "Repita 3x para você mesmo que ainda que o dia seja difícil, você dará o melhor de você.",
      name: "Repeat 3x for yourself that even if the day is difficult, you will do your best.",
      done: false
    },
    {
      nome: "Escreva num papel algo que você deseja muito e guarde.",
      name: "Write something you really want on a piece of paper and keep it.",
      done: false
    },
    {
      nome: "Passe um dia inteiro sem falar coisas negativas.",
      name: "Spend a whole day without saying negative things.",
      done: false
    },
    {
      nome: "Ligue para seus avós e dê um pouco de atenção a eles.",
      name: "Call your grandparents and give them a little attention.",
      done: false
    },
    {
      nome: "Pergunte a alguém se ele está se sentido bem e se precisa de alguma coisa.",
      name: "Ask someone if they are feeling well and if they need anything.",
      done: false
    },
    {
      nome: "Dê atenção as pessoas que precisarem de sua atenção hoje.",
      name: "Pay attention to the people who need your attention today.",
      done: false
    },
    {
      nome: "Pegue algum bem material que você gosta muito e agradeça por ter ele.",
      name: "Get some stuff you like a lot and thank for having it.",
      done: false
    },
    {
      nome: "Puxe conversa com um desconhecido e conte algo bom sobre a sua vida.",
      name: "Start a conversation with a stranger and tell them something good about your life.",
      done: false
    },
    {
      nome: "Mande mensagem nas redes sociais para alguém que você gosta muito.",
      name: "Send messages on social networks to someone you care about.",
      done: false
    },
    {
      nome: "Faça carinho em alguém.",
      name: "Treat someone with care.",
      done: false
    },
    {
      nome: "Crie uma playlist de músicas que te deixam animado.",
      name: "Create a list of songs that cheer you up.",
      done: false
    },
    {
      nome: "Poste uma foto com as pessoas que você mais gosta nas redes sociais.",
      name: "Post a photo with the people you love the most on social networks.",
      done: false
    },
    {
      nome: "Tente lembrar de algo muito bom que aconteceu recentemente. Se você não lembrar, tente fazer algo bom agora.",
      name: "Try to remember something very good that happened recently. If you do not remember, try to do something good now.",
      done: false
    },
    {
      nome: "Puxe assunto com algum amigo seu que você não fala há muito tempo e agradeça pela amizade dele mesmo há tanto tempo sem conversar.",
      name: "Start a conversation with a friend you have not spoken to for a long time and thank them for their friendship even though you have been apart.",
      done: false
    },
    {
      nome: "Vá até o espelho e se elogie por 1 minuto nesse instante.",
      name: "Go to the mirror and praise yourself for 1 minute right now.",
      done: false
    },
    {
      nome: "Ajude alguém no meio da rua com alguma coisa que ela precisa.",
      name: "Help someone in the street with anything they need.",
      done: false
    },
    {
      nome: "Quando alguém disser/fizer algo que te deixe magoado, faça uma lista com 10 qualidades dessa pessoa.",
      name: "When someone says/does something that hurts you, make a list of 10 qualities of that person.",
      done: false
    },
    {
      nome: "Compre um sorvete para alguém desconhecido ou alguém que você sempre quis conversar.",
      name: "Buy an ice cream for someone you do not know or someone you've always wanted to talk to.",
      done: false
    },
    {
      nome: "Sabe aquele livro que você mais gostou de ler? Deixe ele no banco da praça mais próxima de sua casa com uma dedicatória.",
      name: "Do you remember that book you love the most? Leave it on the bench in the nearest square with something written on it.",
      done: false
    },
    {
      nome: "Passar em uma rede de lanchonetes e comprar a promoção do dia para alguém que necessita? Sim! Hoje é essa a sua missão.",
      name: "Go to a fast food restaurant and buy today's special for someone who really needs it. Yes! That is today's mission!",
      done: false
    },
    {
      nome: "Hoje é a festa do \"Dia Ruim\" Convide seu melhor amigo e conversem sobre as coisas que não estão dando certo. Dividir nossas dores ajuda a superá-las.",
      name: "Today is the \"Bad Day\" party. Invite your best friend and talk about things that are not working. Dividing our pain helps to overcome them.",
      done: false
    },
    {
      nome: "Vá ao cinema assistir ao último lançamento.",
      name: "Go to the cinema to watch the latest films.",
      done: false
    },
    {
      nome: "Escreva uma carta para o seu vizinho falando sobre suas qualidades.",
      name: "Send a letter to your neighbor listing their qualities.",
      done: false
    }
  ];

  return tasks;
});
