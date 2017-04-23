angular.module('starter.services', [])

.factory('Tasks', function() {
  // Some fake testing data
  var tasks = [
    {
      nome: "Diga a um familiar querido o quanto o ama.",
      name: "",
      done: false
    },
    {
      nome: "Elogie algum amigo próximo que tenha feito algo legal por você.",
      name: "",
      done: false
    },
    {
      nome: "Seja grato a todas as pessoas.",
      name: "",
      done: false
    },
    {
      nome: "Dê bom dia a todas as pessoas que esbarrar pela rua.",
      name: "",
      done: false
    },
    {
      nome: "Compre algo para algum mendigo/pobre comer.",
      name: "",
      done: false
    },
    {
      nome: "Fale com algum amigo seu sobre este aplicativo.",
      name: "",
      done: false
    },
    {
      nome: "Peça desculpas para alguém, mesmo que a pessoa tenha sido a culpada.",
      name: "",
      done: false
    },
    {
      nome: "Doe suas roupas para quem precisa.",
      name: "",
      done: false
    },
    {
      nome: "Pergunte às pessoas que vivem junto a você e a seus vizinhos como eles estão.",
      name: "",
      done: false
    },
    {
      nome: "Compre um chocolate para alguém que você goste.",
      name: "",
      done: false
    },
    {
      nome: "Agradeça por mais um dia de vida.",
      name: "",
      done: false
    },
    {
      nome: "Sorria para um caixa ou vendedor.",
      name: "",
      done: false
    },
    {
      nome: "Deixa alguém passar na sua frente na fila.",
      name: "",
      done: false
    },
    {
      nome: "Convide um amigo para tomar sorvete e diga que vai pagar para ele. Talvez ele esteja precisando conversar, mas esteja no aperto.",
      name: "",
      done: false
    },
    {
      nome: "Seja gentil com todas as pessoas que encontrar.",
      name: "",
      done: false
    },
    {
      nome: "Seja paciente com todos. Procure não elevar sua voz e trate a todos com carinho.",
      name: "",
      done: false
    },
    {
      nome: "Use a roupa mais bonita que você tem hoje.",
      name: "",
      done: false
    },
    {
      nome: "Quando o transporte público estiver lotado, ofereça seu assento para uma pessoa.",
      name: "",
      done: false
    },
    {
      nome: "Envie uma mensagem para alguém dizendo o quanto a presença dela é importante na sua vida.",
      name: "",
      done: false
    },
    {
      nome: "Ajude algum animal de rua, nem que seja dando um petisco para ele. Pets também necessitam de amor.",
      name: "",
      done: false
    },
    {
      nome: "Dê uma garrafa de água reutilizável cheia de água a um mendigo.",
      name: "",
      done: false
    },
    {
      nome: "Se olhe no espelho quando acordar e diga para você mesmo, o quanto és corajoso, bondoso e amado.",
      name: "",
      done: false
    },
    {
      nome: "Se estiver apenas pensando coisas legais sobre uma pessoa, envie uma mensagem para contar. Elogios são sempre necessários e bem vindos.",
      name: "",
      done: false
    },    {
      nome: "Tire 15 minutos para observar a natureza. Tudo isso foi feito para você.",
      name: "",
      done: false
    },    {
      nome: "Diga \"Eu te amo\" para alguém que você ama muito.",
      name: "",
      done: false
    },
    {
      nome: "Conte uma piada/história engraçada para um amigo que adora conversar contigo.",
      name: "",
      done: false
    },
    {
      nome: "Agradeça sempre pela família que possui, mesmo com todos os problemas que ela tenha. Ter problemas é normal.",
      name: "",
      done: false
    },
    {
      nome: "Pegue um lixo da rua que não é seu e jogue no lixo.",
      name: "",
      done: false
    },
    {
      nome: "Repita 3x para você mesmo que ainda que o dia seja difícil, você dará o melhor de você.",
      name: "",
      done: false
    },
    {
      nome: "Escreva num papel algo que você deseja muito e guarde.",
      name: "",
      done: false
    },
    {
      nome: "Passe um dia inteiro sem falar coisas negativas.",
      name: "",
      done: false
    },
    {
      nome: "Ligue para seus avós e dê um pouco de atenção a eles.",
      name: "",
      done: false
    },
    {
      nome: "Pergunte a alguém se ele está se sentido bem e se precisa de alguma coisa.",
      name: "",
      done: false
    },
    {
      nome: "Dê atenção as pessoas que precisarem de sua atenção hoje.",
      name: "",
      done: false
    },
    {
      nome: "Pegue algum bem material que você gosta muito e agradeça por ter ele.",
      name: "",
      done: false
    },
    {
      nome: "Puxe conversa com um desconhecido e conte algo bom sobre a sua vida.",
      name: "",
      done: false
    },
    {
      nome: "Mande mensagem nas redes sociais para alguém que você gosta muito.",
      name: "",
      done: false
    },
    {
      nome: "Faça carinho em alguém.",
      name: "",
      done: false
    },
    {
      nome: "Crie uma playlist de músicas que te deixam animado.",
      name: "",
      done: false
    },
    {
      nome: "Poste uma foto com as pessoas que você mais gosta nas redes sociais.",
      name: "",
      done: false
    },
    {
      nome: "Tente lembrar de algo muito bom que aconteceu recentemente. Se você não lembrar, tente fazer algo bom agora.",
      name: "",
      done: false
    },
    {
      nome: "Puxe assunto com algum amigo seu que você não fala há muito tempo e agradeça pela amizade dele mesmo há tanto tempo sem conversar.",
      name: "",
      done: false
    },
    {
      nome: "Vá até o espelho e se elogie por 1 minuto nesse instante.",
      name: "",
      done: false
    },
    {
      nome: "Ajude alguém no meio da rua com alguma coisa que ela precisa.",
      name: "",
      done: false
    },
    {
      nome: "Quando alguém disser/fizer algo que te deixe magoado, faça uma lista com 10 qualidades dessa pessoa.",
      name: "",
      done: false
    },
    {
      nome: "Compre um sorvete para alguém desconhecido ou alguém que você sempre quis conversar.",
      name: "",
      done: false
    }
  ];

  return tasks;
});
