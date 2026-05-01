const DB_ITEMS = [
    // Taverna Risca Faca do MC
    { id: 101, name: "Ensopado de Carne do MC 🍲🥩", category: "Taverna", desc: "Uma refeição quente e nutritiva servida na Taverna Risca Faca. Restaura um pouco de PV.", price: 10, image: "assets/comida.jpg" },
    { id: 102, name: "Hipoglós 🐟 🌿 (Pacu Assado)", category: "Taverna", desc: "Delicioso pacu assado com ervas da região.", price: 15, image: "assets/comida.jpg" },
    { id: 103, name: "Banquete dos Reis 🍗🍞", category: "Taverna", desc: "Serve até 6 pessoas. +2 temporário em Constituição (24h), cura completa de PV, remove exaustão, imunidade a doenças (7 dias), vantagem contra venenos (24h), +3 em Carisma (48h) e bônus moral para o grupo.", price: 100, image: "assets/comida.jpg" },
    { id: 104, name: "Caneco de Hidromel 🍯🍺", category: "Taverna", desc: "O clássico das tavernas, doce e forte.", price: 5, image: "assets/bebida.jpg" },
    { id: 105, name: "Vinho da Casa 🍷", category: "Taverna", desc: "Um vinho aceitável para viajantes cansados.", price: 8, image: "assets/bebida.jpg" },
    { id: 106, name: "Seninha (Batida de Coco) ⛑️", category: "Taverna", desc: "Uma batida de coco refrescante e não alcoólica.", price: 10, image: "assets/bebida.jpg" },
    { id: 107, name: "Licor de Frutas da Aurora 🍷✨", category: "Taverna", desc: "Um licor refinado que brilha com a luz da manhã.", price: 10, image: "assets/bebida.jpg" },
    { id: 108, name: "Garrafão de Uísque Inferiano 🥃💀", category: "Taverna", desc: "Só para os corajosos! Uma bebida extremamente forte vinda das profundezas.", price: 20, image: "assets/bebida.jpg" },
    { id: 109, name: "Jogo de Dados (Aposta Mínima) 🎲", category: "Taverna", desc: "Tente sua sorte nos dados da Taverna.", price: 5, image: "assets/jogo_dados.png" },
    { id: 110, name: "Cartas dos Mercadores 🃏", category: "Taverna", desc: "Aposta média em um jogo de cartas tenso.", price: 20, image: "assets/jogo.jpg" },
    { id: 111, name: "Roleta do Destino 🎡", category: "Taverna", desc: "Altos riscos, grandes prêmios. Quem sabe o que o destino reserva?", price: 50, image: "assets/roleta_destino.png" },
    { id: 112, name: "Briga no Pátio 🥊", category: "Taverna", desc: "Soco inglês incluído. Briga para diversão (e alguns dentes a menos).", price: 0, image: "assets/jogo.jpg" },
    { id: 113, name: "Desafio do Mc Daleste e Mc Kelvin 🍺💫", category: "Taverna", desc: "Beba e tente ficar de pé. Um desafio de resistência.", price: 5, image: "assets/jogo.jpg" },
    { id: 114, name: "Histórias de Aventureiros 📖", category: "Taverna", desc: "Ouça ou pague para contar a sua própria história épica.", price: 2, image: "assets/livro.jpg" },
    { id: 115, name: "Baralho de Tarot 🃏✨", category: "Taverna", desc: "Um baralho místico que permite vislumbrar o destino. Pode ser usado no seu inventário.", price: 50, image: "assets/tarot.png" },

    // Guarnição de Pedra
    { id: 201, name: "Pablo Escobar – Chefe de Contrabando 💰", category: "Caçadores", desc: "PROCURADO! Vivo: 1000 PP, Morto: 700 PP. Visto por último na Baía de Nerath.", price: 1000, image: "assets/pablo_poster.png" },
    { id: 202, name: "Elza 'A Ladra de Gelo' ❄️", category: "Caçadores", desc: "PROCURADA! Viva: 750 PP, Morta: 500 PP. Vista na Vila Cruzeiro.", price: 750, image: "assets/elza_poster.png" },
    { id: 203, name: "'Mão Negra' Krug 🩸", category: "Caçadores", desc: "PROCURADO! Mercenário brutal. Vivo: 500 PP, Morto: 400 PP. Visto no Sertão.", price: 500, image: "assets/krug_poster.png" },
    { id: 204, name: "Garras de Sombra 🗡️", category: "Caçadores", desc: "Grupo de assassinos. 250 PP por captura, 100 PP por info.", price: 250, image: "assets/procurado.jpg" },
    { id: 205, name: "Caçada Simples 🎯", category: "Caçadores", desc: "Contrato para lidar com bandidos menores.", price: 0, image: "assets/cacada_simples.png" },
    { id: 206, name: "Missão Especial 🔥", category: "Caçadores", desc: "Contrato para alvos específicos de média periculosidade.", price: 0, image: "assets/cacada.jpg" },
    { id: 207, name: "Caçada Mortal ☠️", category: "Caçadores", desc: "Contrato para os alvos mais perigosos do reino.", price: 0, image: "assets/cacada_mortal.png" },

    // Sede dos Aventureiros
    { id: 301, name: "Inscrição de Aventureiro ✍️", category: "Aventureiros", desc: "Registro oficial para novatos na guilda.", price: 25, image: "assets/pergaminho.jpg" },
    { id: 302, name: "Promoção para Bronze 🥉", category: "Aventureiros", desc: "Requisito: Nível 5+.", price: 50, image: "assets/bronze.jpg" },
    { id: 303, name: "Promoção para Prata 🥈", category: "Aventureiros", desc: "Nível 8+.", price: 250, image: "assets/prata.jpg" },
    { id: 304, name: "Promoção para Ouro 🥇", category: "Aventureiros", desc: "Nível 10+.", price: 350, image: "assets/ouro.jpg" },
    { id: 305, name: "Promoção para Rubi ♦️", category: "Aventureiros", desc: "Nível 14+.", price: 500, image: "assets/rubi.jpg" },
    { id: 306, name: "Promoção para Esmeralda 💚", category: "Aventureiros", desc: "Nível 18+.", price: 1000, image: "assets/esmeralda.jpg" },
    { id: 307, name: "Promoção para Diamante 💎", category: "Aventureiros", desc: "Nível 20+.", price: 2000, image: "assets/diamante.jpg" },
    { id: 308, name: "Cama Simples 🛏️", category: "Aventureiros", desc: "Descanso seguro por uma noite.", price: 1, image: "assets/cama.jpg" },
    { id: 309, name: "Quarto Compartilhado 🛌", category: "Aventureiros", desc: "Até 6 camaradas.", price: 5, image: "assets/cama.jpg" },
    { id: 310, name: "Suíte do Aventureiro 🏰", category: "Aventureiros", desc: "Quarto privado na sede da guilda.", price: 10, image: "assets/cama.jpg" },
    { id: 311, name: "Missões de Investigação 🔍", category: "Aventureiros", desc: "Contratos de busca e informações.", price: 15, image: "assets/livro.jpg" },
    { id: 312, name: "Missões de Caçada 🦴", category: "Aventureiros", desc: "Contratos focados em eliminar ameaças específicas.", price: 20, image: "assets/livro.jpg" },
    { id: 313, name: "Missões de Proteção 🛡️", category: "Aventureiros", desc: "Escolta de VIPs ou guarda de locais importantes.", price: 25, image: "assets/livro.jpg" },
    { id: 314, name: "Missões de Exploração 🗺️", category: "Aventureiros", desc: "Mapeamento de ruínas, cavernas e novos territórios.", price: 30, image: "assets/livro.jpg" },

    // Doca de Cristal
    { id: 401, name: "Bote Pequeno 🛶", category: "Doca", desc: "2 pessoas, remo manual.", price: 50, image: "assets/barco.jpg" },
    { id: 402, name: "Navio Mercante 🚢", category: "Doca", desc: "Tripulação de 10, grande espaço de carga.", price: 5000, image: "assets/barco.jpg" },
    { id: 403, name: "Navio de Guerra ⚔️🚢", category: "Doca", desc: "Tripulação de 20, equipado com canhões.", price: 10000, image: "assets/barco.jpg" },
    { id: 404, name: "Barco de Pesca 🎣", category: "Doca", desc: "4 pessoas, simples.", price: 700, image: "assets/barco.jpg" },
    { id: 405, name: "Veleiro Pequeno ⛵", category: "Doca", desc: "6 pessoas, movido a vento.", price: 1000, image: "assets/barco.jpg" },
    { id: 406, name: "Canoa Rápida 🛶💨", category: "Doca", desc: "2 pessoas, desliza melhor na água.", price: 300, image: "assets/barco.jpg" },
    { id: 407, name: "Rede de Pesca Reforçada 🎣", category: "Doca", desc: "Ideal para pesca em alto mar ou imobilização.", price: 20, image: "assets/corda.jpg" },
    { id: 408, name: "Cordas Náuticas Resistentes (15m) 🪢", category: "Doca", desc: "Material naval de alta durabilidade.", price: 15, image: "assets/corda.jpg" },
    { id: 409, name: "Âncora Pequena ⚓", category: "Doca", desc: "Para embarcações de pequeno e médio porte.", price: 50, image: "assets/ancora.jpg" },
    { id: 410, name: "Olho do Vigia 🔭", category: "Doca", desc: "Luneta de longo alcance.", price: 200, image: "assets/luneta.jpg" },
    { id: 411, name: "Cavalo de Guerra 🏇⚔️", category: "Doca", desc: "Montaria treinada para combate.", price: 200, image: "assets/animal.jpg" },
    { id: 412, name: "Carruagem de Luxo 🏎️", category: "Doca", desc: "Transporte confortável usado pela nobreza.", price: 700, image: "assets/carroça.jpg" },
    { id: 413, name: "Bússola de Capitão 🧭", category: "Doca", desc: "Indica a direção do vento.", price: 75, image: "assets/bussola.jpg" },
    { id: 414, name: "Mapa Náutico 🗺️", category: "Doca", desc: "Regiões costeiras.", price: 100, image: "assets/mapa.jpg" },
    { id: 415, name: "Cavalo Comum 🐎", category: "Doca", desc: "Montaria básica para viagens terrestres.", price: 125, image: "assets/animal.jpg" },
    { id: 416, name: "Camelo Comum 🐫", category: "Doca", desc: "Ideal para travessias em terrenos áridos.", price: 150, image: "assets/animal.jpg" },
    { id: 417, name: "Burro de Carga 🐴", category: "Doca", desc: "Transporte de suprimentos e equipamentos.", price: 100, image: "assets/animal.jpg" },
    { id: 418, name: "Pônei 🐎", category: "Doca", desc: "Ideal para anões e pequenos viajantes.", price: 100, image: "assets/animal.jpg" },
    { id: 419, name: "Carroça Simples 🚛", category: "Doca", desc: "Espaço de carga médio, requer 2 cavalos.", price: 200, image: "assets/carroça.jpg" },
    { id: 420, name: "Carroça Reforçada 🏰🚛", category: "Doca", desc: "Protegida contra flechas e impactos.", price: 500, image: "assets/carroça.jpg" },

    // Loja dos Inventores
    { id: 501, name: "Bomba Incendiária 🔥", category: "Inventores", desc: "Causa 2d6 de dano de fogo. CD 13 Destreza.", price: 25, image: "assets/bomba.jpg" },
    { id: 502, name: "Bomba Gélida ❄️", category: "Inventores", desc: "Congela o terreno e causa 2d6 de dano de frio.", price: 25, image: "assets/bomba.jpg" },
    { id: 503, name: "Bomba Máxima 💣", category: "Inventores", desc: "6d6 de dano à sua escolha. CD 15 Destreza.", price: 80, image: "assets/bomba.jpg" },
    { id: 504, name: "Mochila de Propulsão Experimental 🎒", category: "Inventores", desc: "Não testada! Use por sua conta e risco.", price: 800, image: "assets/mochila.jpg" },
    { id: 505, name: "Mini Autômato 🤖", category: "Inventores", desc: "Pequeno robô que segue comandos simples.", price: 300, image: "assets/robo.jpg" },
    { id: 506, name: "Bomba Ácida 🧪", category: "Inventores", desc: "Corrói metal e carne, 2d6 de dano.", price: 25, image: "assets/bomba.jpg" },
    { id: 507, name: "Bomba Tóxica ☠️", category: "Inventores", desc: "Nuvem venenosa, 1d6 de dano/turno.", price: 25, image: "assets/bomba.jpg" },
    { id: 508, name: "Bomba de Fumaça 💨", category: "Inventores", desc: "Cobre 6m, cegando inimigos.", price: 25, image: "assets/bomba.jpg" },
    { id: 509, name: "Bastão de Choque ⚡", category: "Inventores", desc: "Arma corpo a corpo, 1d8 elétrico.", price: 200, image: "assets/arma.jpg" },
    { id: 510, name: "Garras Retráteis 🐾", category: "Inventores", desc: "Automáticas e afiadas.", price: 350, image: "assets/arma.jpg" },
    { id: 511, name: "Bomba Superior 💣", category: "Inventores", desc: "4d6 de dano à escolha. CD 14 Destreza. Raio de 4.5m.", price: 50, image: "assets/bomba.jpg" },
    { id: 512, name: "Arpéu Reforçado 🧗", category: "Inventores", desc: "Permite escalar superfícies difíceis com facilidade.", price: 75, image: "assets/arma.jpg" },
    { id: 513, name: "5x Munição Explosiva 🎯", category: "Inventores", desc: "Balas ou flechas com +1d6 de dano adicional.", price: 100, image: "assets/bomba.jpg" },
    { id: 514, name: "Óculos de Visão Noturna 🕶️", category: "Inventores", desc: "Permite enxergar no escuro total até 18 metros.", price: 150, image: "assets/oculos.jpg" },
    { id: 515, name: "Lança-Raios Elétricos ⚡", category: "Inventores", desc: "1d6 de dano elétrico por disparo. Possui 5 usos.", price: 500, image: "assets/arma.jpg" },
    { id: 516, name: "Machado Giratório 🪓", category: "Inventores", desc: "Engenhoca de combate para mãos livres.", price: 700, image: "assets/arma.jpg" },

    // Loja de Itens Mágicos
    { id: 601, name: "Poção de Restauração 💪", category: "Mágico", desc: "Permite usar os dados de vida para cura imediata.", price: 50, image: "assets/porçoes.jpg" },
    { id: 602, name: "Poção de Cura Suprema ❤️", category: "Mágico", desc: "Restaura 10d4+20 HP.", price: 1000, image: "assets/cura.jpg" },
    { id: 603, name: "Poção de Mana Master 🔷", category: "Mágico", desc: "Restaura 1d12 pontos de mana.", price: 600, image: "assets/mana.jpg" },
    { id: 604, name: "Poção de Invisibilidade 👁️🗨️", category: "Mágico", desc: "Fica invisível por 1 minuto.", price: 500, image: "assets/porçoes.jpg" },
    { id: 605, name: "Gema Arcana 💠", category: "Mágico", desc: "Utilizada para encantamentos e rituais.", price: 50, image: "assets/porçoes.jpg" },
    { id: 606, name: "Poção de Velocidade 🏃‍♂️", category: "Mágico", desc: "Dobra deslocamento por 1 min.", price: 400, image: "assets/porçoes.jpg" },
    { id: 607, name: "Poção Sopro de Fogo 🔥", category: "Mágico", desc: "3d6 de dano de fogo (1 uso).", price: 150, image: "assets/porçoes.jpg" },
    { id: 608, name: "Pergaminho de Magia 1º Nível 📜", category: "Mágico", desc: "Mísseis Mágicos, Escudo, etc.", price: 60, image: "assets/pergaminho.jpg" },
    { id: 609, name: "Pergaminho de Magia 2º Nível ✨", category: "Mágico", desc: "Invisibilidade, etc.", price: 120, image: "assets/pergaminho.jpg" },
    { id: 610, name: "Poção de Cura Simples ❤️", category: "Mágico", desc: "Restaura 2d4+2 HP.", price: 50, image: "assets/cura.jpg" },
    { id: 611, name: "Poção de Cura Maior 💖", category: "Mágico", desc: "Restaura 4d4+4 HP.", price: 150, image: "assets/cura.jpg" },
    { id: 612, name: "Poção de Cura Superior 💕", category: "Mágico", desc: "Restaura 8d4+2 HP.", price: 450, image: "assets/cura.jpg" },
    { id: 613, name: "Poção de Mana Simples 🔵", category: "Mágico", desc: "Restaura 1d4 pontos de mana.", price: 100, image: "assets/mana.jpg" },
    { id: 614, name: "Poção de Mana Maior 🔹", category: "Mágico", desc: "Restaura 1d6 pontos de mana.", price: 150, image: "assets/mana.jpg" },
    { id: 615, name: "Poção de Mana Superior 🔷", category: "Mágico", desc: "Restaura 1d8 pontos de mana.", price: 300, price: 300, image: "assets/mana.jpg" },
    { id: 616, name: "Poção de Mana Suprema 🔷", category: "Mágico", desc: "Restaura 1d10 pontos de mana.", price: 400, image: "assets/mana.jpg" },
    { id: 617, name: "Pergaminho: Truque 📜", category: "Mágico", desc: "Magias básicas como Luz ou Prestidigitação.", price: 50, image: "assets/pergaminho.jpg" },
    { id: 618, name: "Pergaminho de Magia 3º Nível ⚡", category: "Mágico", desc: "Relâmpago, Contra-Maldição, etc.", price: 180, image: "assets/pergaminho.jpg" },
    { id: 619, name: "Pergaminho de Magia 4º Nível 🔥", category: "Mágico", desc: "Teletransporte, Muralha de Fogo, etc.", price: 250, image: "assets/pergaminho.jpg" },

    // Ferraria Martelo e Bigode
    { id: 701, name: "Aprimoramento I (Arma) ⚔️", category: "Ferraria", desc: "Afiamento, concede +1 de dano.", price: 100, image: "assets/arma.jpg" },
    { id: 702, name: "Encantamento Incomum (Arma +1) ⚡", category: "Ferraria", desc: "+1 acerto/+1 dano e dano mágico. Requer Essência.", price: 350, image: "assets/arma.jpg" },
    { id: 703, name: "Armadura +1 ✨", category: "Ferraria", desc: "Concede +1 CA mágico. Requer Essência.", price: 500, image: "assets/armadura.jpg" },
    { id: 704, name: "Escudo +1 ✨", category: "Ferraria", desc: "+1 CA mágico.", price: 400, image: "assets/escudo.jpg" },
    { id: 705, name: "Aprimoramento II (Arma) 🔥", category: "Ferraria", desc: "+1 no acerto.", price: 150, image: "assets/arma.jpg" },
    { id: 706, name: "Aprimoramento III (Mestre) ⚡", category: "Ferraria", desc: "+1 acerto e +1 dano.", price: 250, image: "assets/arma.jpg" },
    { id: 707, name: "Melhoria Escudo I 🛡️", category: "Ferraria", desc: "+1 CA contra ataques frontais (reação).", price: 200, image: "assets/escudo.jpg" },
    { id: 708, name: "Reparo de Armas 🛠️", category: "Ferraria", desc: "Conserto de armas ou armaduras danificadas.", price: 0, image: "assets/arma.jpg" },
    { id: 709, name: "Forja de Arma Simples 🔨", category: "Ferraria", desc: "Criação de uma arma comum conforme o padrão.", price: 0, image: "assets/arma.jpg" },
    { id: 710, name: "Aprimoramento Armadura I 🏋️", category: "Ferraria", desc: "Leveza e resistência aprimorada.", price: 300, image: "assets/armadura.jpg" },
    { id: 711, name: "Aprimoramento Armadura II 💎", category: "Ferraria", desc: "Redução de -1 em danos físicos.", price: 400, image: "assets/armadura.jpg" },
    { id: 712, name: "Aprimoramento Armadura III ✨", category: "Ferraria", desc: "Resistência especial (-2 dano) e anti-oxidante.", price: 700, image: "assets/armadura.jpg" },
    { id: 713, name: "Melhoria Escudo II 🔨", category: "Ferraria", desc: "Empunhadura de estabilidade. Vantagem contra desarmar.", price: 120, image: "assets/escudo.jpg" },
    { id: 714, name: "Reparo de Armaduras 🛡️", category: "Ferraria", desc: "Manutenção de placas e malhas.", price: 0, image: "assets/armadura.jpg" },

    // Empório do Andarilho
    { id: 801, name: "Mochila Resistente 🎒", category: "Empório", desc: "Durabilidade garantida para suas viagens.", price: 20, image: "assets/mochila.jpg" },
    { id: 802, name: "Kit de Cozinha de Aventureiro 🍲", category: "Empório", desc: "Tudo o que você precisa para cozinhar no mato.", price: 15, image: "assets/kit.jpg" },
    { id: 803, name: "Kit de Herbalismo 🌿", category: "Empório", desc: "Para identificação e preparo de ervas.", price: 50, image: "assets/kit.jpg" },
    { id: 804, name: "Ração de Viagem (7 dias) 🥖", category: "Empório", desc: "Suprimentos básicos.", price: 10, image: "assets/comida.jpg" },
    { id: 805, name: "Pedra Guia ✨", category: "Empório", desc: "Aponta sempre para o norte.", price: 100, image: "assets/bussola.jpg" },
    { id: 806, name: "Cantil de Água 💧", category: "Empório", desc: "Essencial para o deserto.", price: 5, image: "assets/cantil.jpg" },
    { id: 807, name: "Cordas de Cânhamo (15m) 🪢", category: "Empório", desc: "Corda rústica e funcional.", price: 10, image: "assets/corda.jpg" },
    { id: 808, name: "Tocha (1 hora) 🔥", category: "Empório", desc: "Iluminação básica para masmorras.", price: 1, image: "assets/tocha.jpg" },
    { id: 809, name: "Pederneira e Aço 🔥", category: "Empório", desc: "Essencial para acender fogueiras.", price: 5, image: "assets/kit.jpg" },
    { id: 810, name: "Kit de Escalada 🧗", category: "Empório", desc: "Ganchos e cordas reforçadas para montanhismo.", price: 25, image: "assets/kit.jpg" },
    { id: 811, name: "Kit de Caçador 🎯", category: "Empório", desc: "Iscas, laços e redes de captura.", price: 30, image: "assets/kit.jpg" },
    { id: 812, name: "Mapa de Regiões Selvagens 🗺️", category: "Empório", desc: "Guia básico para exploradores terrestres.", price: 25, image: "assets/mapa.jpg" },
    { id: 813, name: "Bússola de Bronze 🧭", category: "Empório", desc: "Instrumento de navegação terrestre.", price: 50, image: "assets/bussola.jpg" },
    { id: 814, name: "Kits Variados 🧰", category: "Empório", desc: "Ferramentas diversas para necessidades gerais.", price: 0, image: "assets/kit.jpg" },

    // Biblioteca de Pedravive
    { id: 901, name: "Mapa Completo de Elvenor 🗺️", category: "Biblioteca", desc: "O guia definitivo das terras de Elvenor.", price: 50, image: "assets/mapa.jpg" },
    { id: 902, name: "Tomo Arcano 📖", category: "Biblioteca", desc: "Vantagem em testes de Arcano por 1 semana.", price: 300, image: "assets/mapa.jpg" },
    { id: 903, name: "Pesquisa Profunda 🔍", category: "Biblioteca", desc: "Informações detalhadas sobre um assunto específico.", price: 25, image: "assets/pesquisa.jpg" },
    { id: 904, name: "Mapa do Subterrâneo 🗺️", category: "Biblioteca", desc: "Passagens ocultas e cavernas.", price: 250, image: "assets/mapa.jpg" },
    { id: 905, name: "Livro de Criaturas Raras 📖", category: "Biblioteca", desc: "Conhecimento sobre monstros míticos.", price: 150, image: "assets/livro.jpg" },
    { id: 906, name: "Mapa Básico da Região 🗺️", category: "Biblioteca", desc: "Cartografia simples dos arredores.", price: 10, image: "assets/mapa.jpg" },
    { id: 907, name: "Mapa de Ruínas 🗺️", category: "Biblioteca", desc: "Localização de templos e cidades perdidas.", price: 150, image: "assets/mapa.jpg" },
    { id: 908, name: "Livro Comum 📖", category: "Biblioteca", desc: "Histórias, fábulas e lendas locais.", price: 5, image: "assets/livro.jpg" },
    { id: 909, name: "Livro de Criaturas Comuns 📖", category: "Biblioteca", desc: "Bestiário de animais da região.", price: 25, image: "assets/livro.jpg" },
    { id: 910, name: "Livro de Maldições 📖", category: "Biblioteca", desc: "Dicas para lidar com magia negra.", price: 400, image: "assets/livro.jpg" },
    { id: 911, name: "Pesquisa Simples 🔍", category: "Biblioteca", desc: "Resposta rápida para uma dúvida comum.", price: 5, image: "assets/pesquisa.jpg" },
    { id: 912, name: "Consulta Mágica 🔮", category: "Biblioteca", desc: "Apoio direto dos magos bibliotecários.", price: 100, image: "assets/pesquisa.jpg" },

    // Templo do Escudo Luminoso
    { id: 1001, name: "Bênção da Luz ⛨", category: "Templo", desc: "1h de dano radiante adicional em ataques corpo a corpo.", price: 50, image: "assets/bença.jpg" },
    { id: 1002, name: "Água Benta 🧴", category: "Templo", desc: "Eficaz contra mortos-vivos e demônios.", price: 25, image: "assets/agua.jpg" },
    { id: 1003, name: "Lâmina da Redenção ⚔️", category: "Templo", desc: "+1 contra mortos-vivos, brilha com luz sagrada.", price: 1200, image: "assets/arma.jpg" },
    { id: 1004, name: "Bênção da Pureza ⛨", category: "Templo", desc: "Resistência a venenos e doenças por 1h.", price: 75, image: "assets/bença.jpg" },
    { id: 1005, name: "Amuleto da Luz Eterna 📿", category: "Templo", desc: "Gera luz e repele mortos-vivos fracos.", price: 500, image: "assets/simbolo.jpg" },
    { id: 1006, name: "Óleo Consagrado 🧴", category: "Templo", desc: "Imbui uma arma com dano radiante por 1h.", price: 75, image: "assets/simbolo.jpg" },
    { id: 1007, name: "Pergaminho de Remover Maldição 📜", category: "Templo", desc: "Magia de 3º nível para purificação.", price: 200, image: "assets/pergaminho.jpg" },
    { id: 1008, name: "Bênção do Caçador ⛨", category: "Templo", desc: "Sinta mortos-vivos a até 18m por 1h.", price: 100, image: "assets/bença.jpg" },
    { id: 1009, name: "Poção Res. Necromântico 🧴", category: "Templo", desc: "Proteção contra energias da morte.", price: 300, image: "assets/porçoes.jpg" },
    { id: 1010, name: "Pergaminho Sagrado: Truque 📜", category: "Templo", desc: "Luz, Chama Sagrada ou Resistência.", price: 20, image: "assets/pergaminho.jpg" },
    { id: 1011, name: "Pergaminho Sagrado Lvl 1 📜", category: "Templo", desc: "Proteção contra o Mal ou Cura.", price: 60, image: "assets/pergaminho.jpg" },
    { id: 1012, name: "Pergaminho Sagrado Lvl 2 📜", category: "Templo", desc: "Arma Espiritual ou Restaurar Vitalidade.", price: 120, image: "assets/pergaminho.jpg" },
    { id: 1013, name: "Pergaminho Sagrado Lvl 4 📜", category: "Templo", desc: "Banimento ou Guardião Espiritual.", price: 320, image: "assets/pergaminho.jpg" },
    { id: 1014, name: "Símbolo Sagrado Consagrado 📿", category: "Templo", desc: "+1 em conjuração divina contra mortos-vivos.", price: 800, image: "assets/simbolo.jpg" }
];

// App State
let appState = {
    gold: 0,
    cart: [], // Stores { ...item, quantity: 1 }
    wishlist: [],
    inventory: [], // Stores { ...item }
    currentCategory: "Todos",
    searchQuery: ""
};

// DOM Elements
const setupScreen = document.getElementById("setup-screen");
const shopScreen = document.getElementById("shop-screen");
const goldInput = document.getElementById("gold-input");
const startBtn = document.getElementById("start-btn");
const currentGoldEl = document.getElementById("current-gold");
const editGoldBtn = document.getElementById("edit-gold-btn");

const itemsGrid = document.getElementById("items-grid");
const categoryList = document.getElementById("category-list");
const searchInput = document.getElementById("search-input");

const cartBtn = document.getElementById("cart-btn");
const cartSidebar = document.getElementById("cart-sidebar");
const closeCartBtn = document.getElementById("close-cart");
const cartItemsContainer = document.getElementById("cart-items");
const cartTotalEl = document.getElementById("cart-total");
const cartCount = document.getElementById("cart-count");
const checkoutBtn = document.getElementById("checkout-btn");

const wishlistBtn = document.getElementById("wishlist-btn");
const wishlistSidebar = document.getElementById("wishlist-sidebar");
const closeWishlistBtn = document.getElementById("close-wishlist");
const wishlistItemsContainer = document.getElementById("wishlist-items");
const wishlistCount = document.getElementById("wishlist-count");

const inventoryBtn = document.getElementById("inventory-btn");
const inventorySidebar = document.getElementById("inventory-sidebar");
const closeInventoryBtn = document.getElementById("close-inventory");
const inventoryItemsContainer = document.getElementById("inventory-items");
const inventoryCount = document.getElementById("inventory-count");

const tarotModal = document.getElementById("tarot-modal");
const closeTarotModalBtn = document.getElementById("close-tarot-modal");
const tarotCard = document.getElementById("tarotCard");
const drawBtn = document.getElementById("drawBtn");
const cardImage = document.getElementById("cardImage");
const resultInfo = document.getElementById("resultInfo");
const cardNameEl = document.getElementById("cardName");
const cardStatusEl = document.getElementById("cardStatus");

const itemModal = document.getElementById("item-modal");
const closeItemModalBtn = document.getElementById("close-item-modal");
const itemDetailContent = document.querySelector(".item-detail-content");

const diceModal = document.getElementById("dice-modal");
const closeDiceModalBtn = document.getElementById("close-dice-modal");
const diceResultEl = document.getElementById("dice-result");
const rollDiceBtn = document.getElementById("rollDiceBtn");
const diceVisual = document.getElementById("dice-visual");
const diceTypeBtns = document.querySelectorAll(".dice-type-btn");

const wheelModal = document.getElementById("wheel-modal");
const closeWheelModalBtn = document.getElementById("close-wheel-modal");
const wheelCanvas = document.getElementById("wheelCanvas");
const wheelSegmentsInput = document.getElementById("wheel-segments");
const spinWheelBtn = document.getElementById("spinWheelBtn");
const wheelResultText = document.getElementById("wheel-result-text");

const betModal = document.getElementById("bet-modal");
const customBetInput = document.getElementById("custom-bet-input");
const confirmBetBtn = document.getElementById("confirm-bet-btn");
const cancelBetBtn = document.getElementById("cancel-bet-btn");

let currentDieType = 6;
let isRollingDice = false;
let isSpinningWheel = false;
let wheelRotation = 0;
let currentUsingDice = null; // Track which dice item is being used
let pendingAddToCart = null; // Track item pending bet confirmation

const toastContainer = document.getElementById("toast-container");

// Initialization
function init() {
    loadState();
    if (appState.gold > 0) {
        showShop();
    }

    // Setup listeners
    startBtn.addEventListener("click", () => {
        const goldVal = parseInt(goldInput.value);
        if (goldVal && goldVal > 0) {
            appState.gold = goldVal;
            saveState();
            showShop();
            showToast(`Bem-vindo! Você possui ${goldVal} moedas de ouro.`, "info", "fa-coins");
        } else {
            showToast("Por favor, insira um valor válido de moedas.", "error", "fa-triangle-exclamation");
        }
    });

    // Sidebar toggles
    cartBtn.addEventListener("click", () => cartSidebar.classList.remove("hidden"));
    closeCartBtn.addEventListener("click", () => cartSidebar.classList.add("hidden"));

    wishlistBtn.addEventListener("click", () => wishlistSidebar.classList.remove("hidden"));
    closeWishlistBtn.addEventListener("click", () => wishlistSidebar.classList.add("hidden"));

    inventoryBtn.addEventListener("click", () => inventorySidebar.classList.remove("hidden"));
    closeInventoryBtn.addEventListener("click", () => inventorySidebar.classList.add("hidden"));

    closeItemModalBtn.addEventListener("click", () => itemModal.classList.add("hidden"));
    closeTarotModalBtn.addEventListener("click", () => tarotModal.classList.add("hidden"));
    closeDiceModalBtn.addEventListener("click", () => diceModal.classList.add("hidden"));
    closeWheelModalBtn.addEventListener("click", () => wheelModal.classList.add("hidden"));

    // Dice Logic Setup
    diceTypeBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            diceTypeBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentDieType = parseInt(btn.dataset.die);
            diceResultEl.textContent = "?";
        });
    });
    rollDiceBtn.addEventListener("click", rollDice);

    // Wheel Logic Setup
    wheelSegmentsInput.addEventListener("input", () => {
        let val = parseInt(wheelSegmentsInput.value);
        if (val < 2) val = 2;
        if (val > 20) val = 20;
        wheelSegmentsInput.value = val;
        drawWheel();
    });
    spinWheelBtn.addEventListener("click", spinWheel);

    // Bet Modal Setup
    cancelBetBtn.addEventListener("click", () => {
        betModal.classList.add("hidden");
        pendingAddToCart = null;
    });

    confirmBetBtn.addEventListener("click", () => {
        if (pendingAddToCart) {
            const betVal = parseInt(customBetInput.value);
            if (!isNaN(betVal) && betVal >= 5) {
                finishAddToCart(pendingAddToCart.id, betVal, pendingAddToCart.closemodal);
                betModal.classList.add("hidden");
                pendingAddToCart = null;
            } else {
                showToast("Aposta mínima é 5 ouros!", "error", "fa-triangle-exclamation");
            }
        }
    });

    // Tarot Logic Setup
    drawBtn.addEventListener("click", drawCard);
    tarotCard.addEventListener("click", () => {
        if (!tarotCard.classList.contains("is-flipped")) drawCard();
    });

    // Filters
    categoryList.addEventListener("click", (e) => {
        if (e.target.tagName === "LI" || e.target.closest("li")) {
            const li = e.target.closest("li");
            document.querySelectorAll("#category-list li").forEach(el => el.classList.remove("active"));
            li.classList.add("active");
            appState.currentCategory = li.dataset.category;
            renderItems();
        }
    });

    searchInput.addEventListener("input", (e) => {
        appState.searchQuery = e.target.value.toLowerCase();
        renderItems();
    });

    // Checkout
    checkoutBtn.addEventListener("click", handleCheckout);

    // Edit Gold
    editGoldBtn.addEventListener("click", () => {
        const newVal = prompt("Digite a nova quantidade de moedas de ouro:", appState.gold);
        if (newVal !== null) {
            const parsed = parseInt(newVal);
            if (!isNaN(parsed) && parsed >= 0) {
                appState.gold = parsed;
                saveState();
                updateUI();
                showToast(`Seu ouro foi alterado para ${parsed}.`, "info", "fa-coins");
            } else {
                showToast("Por favor, insira um valor numérico válido.", "error", "fa-triangle-exclamation");
            }
        }
    });

    // Initial render
    renderItems();
    updateUI();
}

// Show Shop Screen
function showShop() {
    setupScreen.classList.remove("active");
    shopScreen.classList.add("active");
    updateUI();
}

// Render Items Grid
function renderItems() {
    itemsGrid.innerHTML = "";

    const filteredItems = DB_ITEMS.filter(item => {
        const matchCat = appState.currentCategory === "Todos" || item.category === appState.currentCategory;
        const matchSearch = item.name.toLowerCase().includes(appState.searchQuery) || item.desc.toLowerCase().includes(appState.searchQuery);
        return matchCat && matchSearch;
    });

    if (filteredItems.length === 0) {
        itemsGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">Nenhum item encontrado nesta busca mágica.</p>`;
        return;
    }

    filteredItems.forEach(item => {
        const inWishlist = appState.wishlist.some(w => w.id === item.id);

        const card = document.createElement("div");
        card.className = "item-card";
        card.innerHTML = `
            <div class="item-image" onclick="openItemDetails(${item.id})">
                <span class="item-class-badge">${item.category}</span>
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="item-details">
                <h3 class="item-name" onclick="openItemDetails(${item.id})">${item.name}</h3>
                <p class="item-desc">${item.desc}</p>
                <div class="item-footer">
                    <span class="item-price"><i class="fa-solid fa-coins gold-icon"></i> ${item.price}</span>
                </div>
                <div class="item-actions">
                    <button class="add-cart-btn" onclick="addToCart(${item.id})">
                        <i class="fa-solid fa-cart-plus"></i> Adicionar
                    </button>
                    <button class="wishlist-icon-btn ${inWishlist ? 'in-wishlist' : ''}" onclick="toggleWishlist(${item.id}, event)">
                        <i class="fa-solid fa-heart"></i>
                    </button>
                </div>
            </div>
        `;
        itemsGrid.appendChild(card);
    });
}

// Item Details Modal
function openItemDetails(id) {
    const item = DB_ITEMS.find(i => i.id === id);
    if (!item) return;

    itemDetailContent.innerHTML = `
        <div class="detail-image">
            <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="detail-info">
            <span class="detail-class"><i class="fa-solid fa-tag"></i> ${item.category}</span>
            <h2 class="detail-name">${item.name}</h2>
            <p class="detail-desc">${item.desc}</p>
            <div class="detail-bottom">
                <span class="detail-price"><i class="fa-solid fa-coins gold-icon"></i> ${item.price}</span>
                <div class="detail-actions">
                    <button class="btn-primary" onclick="addToCart(${item.id}, true)"><i class="fa-solid fa-cart-plus"></i> Ao Carrinho</button>
                </div>
            </div>
        </div>
    `;
    itemModal.classList.remove("hidden");
}

// Cart Logic
function addToCart(id, closemodal = false) {
    const item = DB_ITEMS.find(i => i.id === id);

    if (id === 109) { // Jogo de Dados
        pendingAddToCart = { id, closemodal };
        customBetInput.value = 5;
        betModal.classList.remove("hidden");
        return;
    }

    finishAddToCart(id, item.price, closemodal);
}

function finishAddToCart(id, betValue, closemodal = false) {
    const item = DB_ITEMS.find(i => i.id === id);
    const cartItem = appState.cart.find(i => i.id === id && i.price === betValue);

    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        appState.cart.push({ ...item, price: betValue, quantity: 1 });
    }

    showToast(`${item.name} adicionado ao carrinho!`, "success", "fa-check");

    if (closemodal) itemModal.classList.add("hidden");

    updateUI();
    saveState();
}

function updateQuantity(id, delta) {
    const cartItem = appState.cart.find(i => i.id === id);
    if (!cartItem) return;

    cartItem.quantity += delta;

    if (cartItem.quantity <= 0) {
        removeFromCart(id);
    } else {
        updateUI();
        saveState();
    }
}

function removeFromCart(id) {
    appState.cart = appState.cart.filter(i => i.id !== id);
    updateUI();
    saveState();
}

// Wishlist Logic
function toggleWishlist(id, event) {
    if (event) event.stopPropagation(); // prevent clicking card
    const item = DB_ITEMS.find(i => i.id === id);
    const index = appState.wishlist.findIndex(w => w.id === id);

    if (index === -1) {
        appState.wishlist.push(item);
        showToast(`${item.name} adicionado aos desejos!`, "info", "fa-heart");
    } else {
        appState.wishlist.splice(index, 1);
        showToast(`${item.name} removido dos desejos.`, "info", "fa-heart-crack");
    }

    renderItems();
    updateUI();
    saveState();
}

// Checkout Logic
function handleCheckout() {
    if (appState.cart.length === 0) {
        showToast("Seu carrinho está vazio!", "error", "fa-triangle-exclamation");
        return;
    }

    const total = appState.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    if (appState.gold >= total) {
        appState.gold -= total;
        
        // Move items to inventory
        appState.cart.forEach(cartItem => {
            // For Dice (109), we want to keep them separate if bets are different
            const existing = appState.inventory.find(i => i.id === cartItem.id && i.price === cartItem.price);
            if (existing) {
                existing.quantity += cartItem.quantity;
            } else {
                appState.inventory.push({ ...cartItem });
            }
        });

        appState.cart = []; // empty cart
        saveState();
        updateUI();
        cartSidebar.classList.add("hidden");
        showToast(`Compra realizada com sucesso! Pagou ${total} ouros.`, "success", "fa-sack-dollar");
    } else {
        showToast(`Ouro insuficiente! Faltam ${total - appState.gold} moedas.`, "error", "fa-xmark");
    }
}

// Update UI Elements
function updateUI() {
    // Gold
    currentGoldEl.innerText = appState.gold;

    // Cart
    const totalItems = appState.cart.reduce((sum, i) => sum + i.quantity, 0);
    cartCount.innerText = totalItems;
    cartCount.style.display = totalItems > 0 ? "block" : "none";

    cartItemsContainer.innerHTML = "";
    let total = 0;
    appState.cart.forEach((item) => {
        total += item.price * item.quantity;
        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
            <img src="${item.image}" class="cart-item-img">
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price"><i class="fa-solid fa-coins gold-icon"></i> ${item.price}</div>
                <div class="cart-quantity-controls">
                    <button onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${item.id})"><i class="fa-solid fa-trash"></i></button>
        `;
        cartItemsContainer.appendChild(div);
    });

    if (appState.cart.length === 0) {
        cartItemsContainer.innerHTML = "<p style='color: var(--text-muted)'>Nenhum item adicionado à sacola.</p>";
    }

    cartTotalEl.innerText = total;

    // Check affordance
    if (appState.gold < total && total > 0) {
        cartTotalEl.style.color = "var(--danger)";
    } else {
        cartTotalEl.style.color = "";
    }

    // Wishlist
    wishlistCount.innerText = appState.wishlist.length;
    wishlistCount.style.display = appState.wishlist.length > 0 ? "block" : "none";

    wishlistItemsContainer.innerHTML = "";
    appState.wishlist.forEach((item) => {
        const div = document.createElement("div");
        div.className = "wishlist-item";
        div.innerHTML = `
            <img src="${item.image}" class="cart-item-img">
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <button class="btn-secondary" style="font-size: 0.8rem; margin-top:5px; width: 100%;" onclick="addToCart(${item.id}); toggleWishlist(${item.id})">
                    Mover p/ Carrinho
                </button>
            </div>
        `;
        wishlistItemsContainer.appendChild(div);
    });

    if (appState.wishlist.length === 0) {
        wishlistItemsContainer.innerHTML = "<p style='color: var(--text-muted)'>Sua lista de desejos mágicos está vazia.</p>";
    }

    // Inventory
    inventoryCount.innerText = appState.inventory.length;
    inventoryCount.style.display = appState.inventory.length > 0 ? "block" : "none";

    inventoryItemsContainer.innerHTML = "";
    appState.inventory.forEach((item) => {
        const div = document.createElement("div");
        div.className = "inventory-item";
        div.innerHTML = `
            <img src="${item.image}" class="cart-item-img">
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">${item.id === 109 ? `Aposta: ${item.price}` : `Qtd: ${item.quantity}`}</div>
                ${item.id === 109 ? `<div class="cart-item-price">Qtd: ${item.quantity}</div>` : ''}
                <button class="use-btn" onclick="useItem(${item.id}, ${item.price})">Usar</button>
            </div>
        `;
        inventoryItemsContainer.appendChild(div);
    });

    if (appState.inventory.length === 0) {
        inventoryItemsContainer.innerHTML = "<p style='color: var(--text-muted)'>Você ainda não possui itens no seu inventário.</p>";
    }
}

// Toast Notifications
function showToast(message, type = "info", icon = "fa-info-circle") {
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;

    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("toast-fadeout");
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

// LocalStorage Persistence
function saveState() {
    localStorage.setItem("rpgShopState", JSON.stringify({
        gold: appState.gold,
        cart: appState.cart,
        wishlist: appState.wishlist,
        inventory: appState.inventory
    }));
}

function loadState() {
    const saved = localStorage.getItem("rpgShopState");
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            appState.gold = parsed.gold || 0;
            appState.wishlist = parsed.wishlist || [];
            appState.inventory = parsed.inventory || [];

            // Migration for old cart format
            const savedCart = parsed.cart || [];
            if (savedCart.length > 0 && !savedCart[0].quantity) {
                // Group old individual items into quantities
                const newCart = [];
                savedCart.forEach(item => {
                    const existing = newCart.find(i => i.id === item.id);
                    if (existing) {
                        existing.quantity += 1;
                    } else {
                        newCart.push({ ...item, quantity: 1 });
                    }
                });
                appState.cart = newCart;
            } else {
                appState.cart = savedCart;
            }
        } catch (e) {
            console.error("Error loading saved state", e);
        }
    }
}

// Start
document.addEventListener("DOMContentLoaded", init);

// --- Tarot System Logic ---
const tarotCardsData = [
    { imagem: "assets/tarot_cards/01.jpg", texto: "MAGO" },
    { imagem: "assets/tarot_cards/02.jpg", texto: "LOUCO" },
    { imagem: "assets/tarot_cards/03.jpg", texto: "PAPISA" },
    { imagem: "assets/tarot_cards/04.jpg", texto: "IMPERATRIZ" },
    { imagem: "assets/tarot_cards/05.jpg", texto: "LOUCO - INVERTIDO" },
    { imagem: "assets/tarot_cards/06.jpg", texto: "IMPERADOR" },
    { imagem: "assets/tarot_cards/07.jpg", texto: "PAPA" },
    { imagem: "assets/tarot_cards/08.jpg", texto: "AMANTES" },
    { imagem: "assets/tarot_cards/09.jpg", texto: "GUERRA" },
    { imagem: "assets/tarot_cards/10.jpg", texto: "JUSTIÇA" },
    { imagem: "assets/tarot_cards/11.jpg", texto: "EREMITA" },
    { imagem: "assets/tarot_cards/12.jpg", texto: "RODA DA FORTUNA" },
    { imagem: "assets/tarot_cards/13.jpg", texto: "FORÇA" },
    { imagem: "assets/tarot_cards/14.jpg", texto: "O ENFORCADO" },
    { imagem: "assets/tarot_cards/15.jpg", texto: "MORTE" },
    { imagem: "assets/tarot_cards/16.jpg", texto: "TEMPERANÇA" },
    { imagem: "assets/tarot_cards/17.jpg", texto: "DAIBO" },
    { imagem: "assets/tarot_cards/18.jpg", texto: "TORRE" },
    { imagem: "assets/tarot_cards/19.jpg", texto: "ESPERANÇA" },
    { imagem: "assets/tarot_cards/20.jpg", texto: "LUA" },
    { imagem: "assets/tarot_cards/21.jpg", texto: "O SOL" },
    { imagem: "assets/tarot_cards/22.jpg", texto: "JULGAMENTO" },
    { imagem: "assets/tarot_cards/23.jpg", texto: "O MUNDO" },
    { imagem: "assets/tarot_cards/24.jpg", texto: "JULGAMENTO - INVERTIDO" },
    { imagem: "assets/tarot_cards/25.jpg", texto: "O MUNDO - INVERTIDO" },
    { imagem: "assets/tarot_cards/26.jpg", texto: "RODA DA FORTUNA - INVERTIDO" },
    { imagem: "assets/tarot_cards/27.jpg", texto: "FORÇA - INVERTIDO" },
    { imagem: "assets/tarot_cards/28.jpg", texto: "O ENFORCADO - INVERTIDO" },
    { imagem: "assets/tarot_cards/29.jpg", texto: "MORTE - INVERTIDO" },
    { imagem: "assets/tarot_cards/30.jpg", texto: "TEMPERANÇA - INVERTIDO" },
    { imagem: "assets/tarot_cards/31.jpg", texto: "DAIBO - INVERTIDO" },
    { imagem: "assets/tarot_cards/32.jpg", texto: "TORRE - INVERTIDO" },
    { imagem: "assets/tarot_cards/33.jpg", texto: "ESPERANÇA - INVERTIDO" },
    { imagem: "assets/tarot_cards/34.jpg", texto: "LUA - INVERTIDO" },
    { imagem: "assets/tarot_cards/35.jpg", texto: "O SOL - INVERTIDO" },
    { imagem: "assets/tarot_cards/36.jpg", texto: "MAGO - INVERTIDO" },
    { imagem: "assets/tarot_cards/37.jpg", texto: "PAPISA - INVERTIDO" },
    { imagem: "assets/tarot_cards/38.jpg", texto: "IMPERATRIZ - INVERTIDO" },
    { imagem: "assets/tarot_cards/39.jpg", texto: "IMPERADOR - INVERTIDO" },
    { imagem: "assets/tarot_cards/40.jpg", texto: "PAPA - INVERTIDO" },
    { imagem: "assets/tarot_cards/41.jpg", texto: "AMANTES - INVERTIDO" },
    { imagem: "assets/tarot_cards/42.jpg", texto: "GUERRA - INVERTIDO" },
    { imagem: "assets/tarot_cards/43.jpg", texto: "JUSTIÇA - INVERTIDO" },
    { imagem: "assets/tarot_cards/44.jpg", texto: "EREMITA - INVERTIDO" }
];

let isDrawingTarot = false;

function useItem(id, customPrice = null) {
    if (id === 115) { // Baralho de Tarot
        inventorySidebar.classList.add("hidden");
        tarotModal.classList.remove("hidden");
        resetTarot();
    } else if (id === 109) { // Jogo de Dados
        inventorySidebar.classList.add("hidden");
        diceModal.classList.remove("hidden");
        currentUsingDice = { id, price: customPrice };
        resetDice();
    } else if (id === 111) { // Roleta do Destino
        inventorySidebar.classList.add("hidden");
        wheelModal.classList.remove("hidden");
        resetWheel();
    } else {
        showToast("Este item não tem um uso imediato aqui, mas é bom tê-lo!", "info", "fa-circle-info");
    }
}

function consumeItem(id, price = null) {
    const itemIndex = appState.inventory.findIndex(i => i.id === id && (price === null || i.price === price));
    if (itemIndex !== -1) {
        if (appState.inventory[itemIndex].quantity > 1) {
            appState.inventory[itemIndex].quantity -= 1;
        } else {
            appState.inventory.splice(itemIndex, 1);
        }
        saveState();
        updateUI();
    }
}

function resetWheel() {
    wheelResultText.classList.remove("show");
    wheelResultText.textContent = "?";
    wheelRotation = 0;
    wheelCanvas.style.transform = `rotate(0deg)`;
    isSpinningWheel = false;
    spinWheelBtn.disabled = false;
    drawWheel();
}

function drawWheel() {
    const ctx = wheelCanvas.getContext("2d");
    const segments = parseInt(wheelSegmentsInput.value);
    const radius = wheelCanvas.width / 2;
    const arc = (Math.PI * 2) / segments;

    ctx.clearRect(0, 0, wheelCanvas.width, wheelCanvas.height);

    for (let i = 0; i < segments; i++) {
        const angle = i * arc;
        ctx.beginPath();
        ctx.fillStyle = i % 2 === 0 ? "#1a0b2e" : "#2d1b4d";
        ctx.strokeStyle = "#a855f7";
        ctx.lineWidth = 2;
        ctx.moveTo(radius, radius);
        ctx.arc(radius, radius, radius, angle, angle + arc);
        ctx.fill();
        ctx.stroke();

        // Text
        ctx.save();
        ctx.translate(radius, radius);
        ctx.rotate(angle + arc / 2);
        ctx.textAlign = "right";
        ctx.fillStyle = "#fff";
        ctx.font = "bold 16px Cinzel";
        ctx.fillText(i + 1, radius - 20, 10);
        ctx.restore();
    }
}

function spinWheel() {
    if (isSpinningWheel) return;

    isSpinningWheel = true;
    spinWheelBtn.disabled = true;
    wheelResultText.classList.remove("show");

    // Consume item (already paid price of 50 at purchase)
    consumeItem(111);
    updateUI();
    saveState();

    const segments = parseInt(wheelSegmentsInput.value);
    const extraRounds = 5 + Math.floor(Math.random() * 5);
    const randomSegment = Math.floor(Math.random() * segments);
    const segmentDegrees = 360 / segments;
    
    const targetRotation = 270 - (randomSegment * segmentDegrees + segmentDegrees / 2);
    wheelRotation += (extraRounds * 360) + (targetRotation - (wheelRotation % 360));
    
    wheelCanvas.style.transform = `rotate(${wheelRotation}deg)`;

    setTimeout(() => {
        isSpinningWheel = false;
        const result = randomSegment + 1;
        wheelResultText.textContent = result;
        wheelResultText.classList.add("show");

        showToast(`Destino revelado: ${result}!`, "info", "fa-sparkles");

        setTimeout(() => {
            wheelModal.classList.add("hidden");
            showToast("Item consumido.", "info", "fa-info-circle");
        }, 2000);
    }, 4000);
}

function resetDice() {
    diceResultEl.textContent = "?";
    diceVisual.classList.remove("rolling");
    isRollingDice = false;
    rollDiceBtn.disabled = false;
}

function rollDice() {
    if (isRollingDice || !currentUsingDice) return;

    const bet = currentUsingDice.price;

    isRollingDice = true;
    rollDiceBtn.disabled = true;
    diceVisual.classList.add("rolling");

    // Consume item (already paid at purchase)
    consumeItem(109, bet);
    updateUI();
    saveState();

    // Rapidly change numbers for a better "spinning" effect
    let rollInterval = setInterval(() => {
        diceResultEl.textContent = Math.floor(Math.random() * currentDieType) + 1;
    }, 50);

    // Simulating roll duration
    setTimeout(() => {
        clearInterval(rollInterval);
        const result = Math.floor(Math.random() * currentDieType) + 1;
        diceVisual.classList.remove("rolling");
        diceResultEl.textContent = result;
        isRollingDice = false;
        rollDiceBtn.disabled = true;
        
        // Final result feedback (No gold change)
        if (result === currentDieType) {
            showToast(`CRÍTICO! Você rolou o valor máximo: ${result}!`, "success", "fa-star");
        } else if (result === 1) {
            showToast(`ERRO CRÍTICO! Você rolou 1.`, "error", "fa-skull");
        } else {
            showToast(`Você rolou ${result}.`, "info", "fa-dice");
        }
        
        updateUI();
        saveState();
        currentUsingDice = null;

        setTimeout(() => {
            diceModal.classList.add("hidden");
            showToast("Item consumido.", "info", "fa-info-circle");
        }, 2000);
    }, 1000);
}

function resetTarot() {
    tarotCard.classList.remove("is-flipped");
    tarotCard.classList.remove("is-inverted");
    cardImage.classList.remove("is-inverted");
    cardImage.classList.remove("loaded");
    resultInfo.classList.remove("show");
    drawBtn.disabled = false;
    drawBtn.textContent = "Revelar Oculto";
}

function drawCard() {
    if (isDrawingTarot) return;
    isDrawingTarot = true;
    drawBtn.disabled = true;

    if (tarotCard.classList.contains("is-flipped")) {
        tarotCard.classList.remove("is-flipped");
        tarotCard.classList.remove("is-inverted");
        cardImage.classList.remove("is-inverted");
        resultInfo.classList.remove("show");
        setTimeout(revealNewCard, 1000);
    } else {
        revealNewCard();
    }
}

function revealNewCard() {
    const randomIndex = Math.floor(Math.random() * tarotCardsData.length);
    const selectedCard = tarotCardsData[randomIndex];

    // Reset image state for new draw
    cardImage.classList.remove("loaded");
    cardImage.src = selectedCard.imagem;

    const triggerFlip = () => {
        const isReversed = selectedCard.texto.includes("INVERTIDO");
        let cleanName = selectedCard.texto.replace(" - INVERTIDO", "").trim();

        if (isReversed) {
            tarotCard.classList.add("is-inverted");
            cardImage.classList.add("is-inverted");
            cardStatusEl.textContent = "INVERTIDA";
            cardStatusEl.className = "status-marker reversed";
        } else {
            tarotCard.classList.remove("is-inverted");
            cardImage.classList.remove("is-inverted");
            cardStatusEl.textContent = "";
            cardStatusEl.className = "status-marker";
        }

        cardNameEl.textContent = cleanName;
        
        // Ensure image is marked as loaded for the fade-in effect
        cardImage.classList.add("loaded");
        
        // Start the flip animation
        tarotCard.classList.add("is-flipped");

        setTimeout(() => {
            resultInfo.classList.add("show");
            isDrawingTarot = false;
            drawBtn.disabled = false;
            drawBtn.textContent = "Tentar Outra";
        }, 600);
    };

    // Preload the image before flipping
    if (cardImage.complete) {
        setTimeout(triggerFlip, 100);
    } else {
        cardImage.onload = triggerFlip;
        cardImage.onerror = triggerFlip;
    }
}
