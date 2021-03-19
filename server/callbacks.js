import Empirica from "meteor/empirica:core";

// onGameStart is triggered opnce per game before the game starts, and before
// the first onRoundStart. It receives the game and list of all the players in
// the game.
Empirica.onGameStart(game => { });

// onRoundStart is triggered before each round starts, and before onStageStart.
// It receives the same options as onGameStart, and the round that is starting.
Empirica.onRoundStart((game, round) => { });

// onStageStart is triggered before each stage starts.
// It receives the same options as onRoundStart, and the stage that is starting.
Empirica.onStageStart((game, round, stage) => { });

// onStageEnd is triggered after each stage.
// It receives the same options as onRoundEnd, and the stage that just ended.
Empirica.onStageEnd((game, round, stage) => {

  // For each player record all the messages
  if (stage.name == "discussion")
    game.players.forEach(player => {
      let messagesAB = round.get("messages").filter(message => message.chat === 1)
      let messagesAC = round.get("messages").filter(message => message.chat === 2)
      let messagesBC = round.get("messages").filter(message => message.chat === 3)

      player.set("chatAB", messagesAB)
      player.set("chatAC", messagesAC)
      player.set("chatBC", messagesBC)
    });
});

// onRoundEnd is triggered after each round.
// It receives the same options as onGameEnd, and the round that just ended.
Empirica.onRoundEnd((game, round) => { });

// onGameEnd is triggered when the game ends.
// It receives the same options as onGameStart.
Empirica.onGameEnd(game => { });