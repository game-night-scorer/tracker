export function saveGame(key, game) {
  localStorage.removeItem(key);
  localStorage.setItem(key, JSON.stringify(game));
}

export function loadGames(key) {
  return JSON.parse(localStorage.getItem(key) || "[]");
}