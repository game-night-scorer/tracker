export const state = {
  players: [],
  scores: {},
  rounds: 0,
  dealer: "",
};

export function resetGame() {
  state.players = [];
  state.scores = {};
  state.rounds = 0;
  state.dealer="";
  document.getElementById("playerList").textContent = "";
}

export function resetScore() {
  state.players.forEach((p) => {
    state.scores[p] = [];
  });
  state.rounds = 0;
  state.dealer="";
}

export function setTestData() {
  state.players = ["abc", "xyz", "qwe", "asd"];
  state.scores = {
    abc: [],
    xyz: [],
    qwe: [],
    asd: [],
  };
  state.dealer="";
}
