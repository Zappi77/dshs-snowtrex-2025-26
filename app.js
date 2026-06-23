const cardsEl = document.querySelector("#spielkarten");
const pointsChainEl = document.querySelector("#points-chain");
const seasonStatsGridEl = document.querySelector("#season-stats-grid");
const koelnMvpsListEl = document.querySelector("#koeln-mvps-list");
const youtubeViewsDateEl = document.querySelector("#youtube-views-date");
const youtubeViewsListEl = document.querySelector("#youtube-views-list");
const template = document.querySelector("#game-card-template");
const filterButtons = document.querySelectorAll(".filter-button");

const koeln = "DSHS SnowTrex Köln";

function isKoelnWin(game) {
  const [homeSets, awaySets] = game.score.split(":").map(Number);
  return game.home === koeln ? homeSets > awaySets : awaySets > homeSets;
}

function koelnSets(game) {
  const [homeSets, awaySets] = game.score.split(":").map(Number);
  return game.home === koeln ? { own: homeSets, opponent: awaySets } : { own: awaySets, opponent: homeSets };
}

function koelnPoints(game) {
  const sets = koelnSets(game);
  if (sets.own === 3 && sets.opponent <= 1) return 3;
  if (sets.own === 3 && sets.opponent === 2) return 2;
  if (sets.own === 2 && sets.opponent === 3) return 1;
  return 0;
}

function koelnScore(game) {
  const sets = koelnSets(game);
  return `${sets.own}:${sets.opponent}`;
}

function koelnBallPoints(game) {
  const [homePoints, awayPoints] = game.ballPoints.split(":").map(Number);
  return game.home === koeln ? { own: homePoints, opponent: awayPoints } : { own: awayPoints, opponent: homePoints };
}

function opponentInfo(game) {
  const isHome = game.home === koeln;
  const opponent = isHome ? game.away : game.home;
  const badge = teamBadges[opponent] || { short: opponent.slice(0, 3).toUpperCase() };
  return { venue: isHome ? "H" : "A", short: badge.short, name: opponent };
}

function teamIdFor(teamName) {
  const url = teamProfileUrls?.[teamName];
  return url?.match(/teamId=(\d+)/)?.[1] || null;
}

function logoUrlFor(teamName) {
  const explicitLogoUrl = teamLogoUrls?.[teamName];
  if (explicitLogoUrl) return explicitLogoUrl;

  const teamId = teamIdFor(teamName);
  return teamId ? `https://vbl-web.sams-server.de/public/team/logo/${teamId}` : null;
}

function renderBadge(container, teamName) {
  const badge = teamBadges[teamName] || { short: teamName.slice(0, 3).toUpperCase(), color: "#637083", text: "#FFFFFF" };
  const logoUrl = logoUrlFor(teamName);

  container.innerHTML = "";
  container.classList.remove("logo-fallback");
  container.style.setProperty("--badge-bg", badge.color);
  container.style.setProperty("--badge-text", badge.text);
  container.setAttribute("aria-label", `${teamName} Logo`);

  if (!logoUrl) {
    container.textContent = badge.short;
    return;
  }

  const image = document.createElement("img");
  image.className = "team-logo";
  image.src = logoUrl;
  image.alt = `${teamName} Logo`;
  image.loading = "lazy";
  image.decoding = "async";
  image.referrerPolicy = "no-referrer";
  image.addEventListener("error", () => {
    container.innerHTML = "";
    container.textContent = badge.short;
    container.classList.add("logo-fallback");
  }, { once: true });
  container.append(image);
}

function renderTeamName(container, teamName) {
  container.innerHTML = "";
  const url = teamProfileUrls?.[teamName];
  if (url) {
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = teamName;
    container.append(link);
  } else {
    container.textContent = teamName;
  }
}

function createMvpNode(mvp) {
  const wrapper = document.createElement("span");
  wrapper.className = "mvp-item";
  wrapper.append(`${mvp.team}: `);

  const url = mvp.url || playerProfileUrls?.[mvp.name];
  if (url) {
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = mvp.name;
    wrapper.append(link);
  } else {
    wrapper.append(mvp.name);
  }

  return wrapper;
}

function renderMvps(container, mvps) {
  container.innerHTML = "";
  if (!mvps || mvps.length === 0) {
    container.textContent = "noch nicht erfasst";
    return;
  }

  mvps.forEach((mvp, index) => {
    if (index > 0) container.append(" · ");
    container.append(createMvpNode(mvp));
  });
}

function renderCards(filter = "all") {
  cardsEl.innerHTML = "";

  games
    .filter(game => {
      if (filter === "home") return game.home === koeln;
      if (filter === "away") return game.away === koeln;
      if (filter === "win") return isKoelnWin(game);
      if (filter === "loss") return !isKoelnWin(game);
      return true;
    })
    .forEach(game => {
      const node = template.content.cloneNode(true);
      const card = node.querySelector(".game-card");
      const won = isKoelnWin(game);

      card.classList.add(won ? "win" : "loss");
      card.dataset.homeAway = game.home === koeln ? "home" : "away";
      card.dataset.result = won ? "win" : "loss";

      node.querySelector(".date").textContent = `${game.weekday}, ${game.date}`;
      node.querySelector(".game-number").textContent = `#${game.number}`;
      node.querySelector(".match-id").textContent = `matchId ${game.matchId}`;
      renderTeamName(node.querySelector(".home-name"), game.home);
      renderTeamName(node.querySelector(".away-name"), game.away);
      renderBadge(node.querySelector(".home-badge"), game.home);
      renderBadge(node.querySelector(".away-badge"), game.away);
      node.querySelector(".score").textContent = game.score;
      node.querySelector(".ball-points").textContent = `${game.ballPoints} Ballpunkte`;
      node.querySelector(".rank").textContent = `${game.rankAfter}. Platz`;
      node.querySelector(".duration").textContent = `${game.duration} Min.`;
      node.querySelector(".spectators").textContent = game.spectators.toLocaleString("de-DE");
      node.querySelector(".venue").textContent = game.venue;
      const summary = game.summary || gameSummaries?.[game.number] || [];
      const reportSummary = node.querySelector(".report-summary");
      reportSummary.textContent = summary.join(" ");
      if (summary.length === 0) {
        reportSummary.closest(".report-block").classList.add("is-empty");
      }
      renderMvps(node.querySelector(".mvps"), game.mvps);

      const setsEl = node.querySelector(".sets");
      game.sets.forEach((set, index) => {
        const pill = document.createElement("span");
        pill.className = "set-pill";
        pill.textContent = `${index + 1}. Satz ${set}`;
        setsEl.append(pill);
      });

      const detailUrl = `https://www.volleyball-bundesliga.de/popup/matchSeries/matchDetails.xhtml?matchId=${game.matchId}`;
      const statsUrl = `https://live.volleyball-bundesliga.de/2025-26/Women/${game.number}.pdf`;
      node.querySelector(".detail-link").href = detailUrl;
      node.querySelector(".stats-link").href = statsUrl;

      const articleLink = node.querySelector(".article-link");
      if (game.articleUrl) {
        articleLink.href = game.articleUrl;
        articleLink.classList.remove("disabled");
      }

      const videoLink = node.querySelector(".video-link");
      if (game.videoUrl) {
        videoLink.href = game.videoUrl;
        videoLink.classList.remove("disabled");
        videoLink.textContent = "YouTube Video";
      } else {
        videoLink.href = "https://www.youtube.com/results?search_query=dshs+snowtrex+k%C3%B6ln+2.+Liga+Pro+2025%2F26";
        videoLink.classList.remove("disabled");
        videoLink.textContent = "YouTube Suche";
      }

      if (game.galleryUrl) {
        const mediaRow = node.querySelector(".media-row");
        const galleryLink = node.querySelector(".gallery-link");
        mediaRow.classList.add("has-gallery");
        galleryLink.href = game.galleryUrl;
      }

      cardsEl.append(node);
    });
}

function renderPointsChain() {
  pointsChainEl.innerHTML = "";
  let totalPoints = 0;

  games.forEach((game, index) => {
    const points = koelnPoints(game);
    const score = koelnScore(game);
    const opponent = opponentInfo(game);
    totalPoints += points;

    const item = document.createElement("div");
    item.className = "points-game";

    const dot = document.createElement("a");
    dot.className = `points-dot points-${points}`;
    dot.href = `https://www.volleyball-bundesliga.de/popup/matchSeries/matchDetails.xhtml?matchId=${game.matchId}`;
    dot.target = "_blank";
    dot.rel = "noreferrer";
    dot.textContent = totalPoints;
    dot.title = `Spieltag ${index + 1}, #${game.number}: ${game.home} ${game.score} ${game.away} - ${points} Punkt${points === 1 ? "" : "e"}, ${totalPoints} gesamt`;
    dot.setAttribute("aria-label", dot.title);

    const label = document.createElement("span");
    label.className = "points-label";
    label.innerHTML = `<span>${index + 1}</span><span>${opponent.venue} ${opponent.short}</span><span>${score}</span><span class="rank-label"><b>${game.rankAfter}.</b><small>Platz</small></span>`;

    item.append(dot, label);
    pointsChainEl.append(item);
  });
}

function formatRatio(own, opponent) {
  if (opponent === 0) return "n/a";
  return (own / opponent).toLocaleString("de-DE", { minimumFractionDigits: 3, maximumFractionDigits: 3 });
}

function seasonStats() {
  const scoreCounts = { "3:0": 0, "3:1": 0, "3:2": 0, "2:3": 0, "1:3": 0, "0:3": 0 };

  return games.reduce((stats, game) => {
    const sets = koelnSets(game);
    const score = `${sets.own}:${sets.opponent}`;
    const ballPoints = koelnBallPoints(game);
    const points = koelnPoints(game);
    const isWin = sets.own > sets.opponent;
    const isFiveSet = sets.own + sets.opponent === 5;

    if (scoreCounts[score] !== undefined) scoreCounts[score] += 1;
    stats.wins += isWin ? 1 : 0;
    stats.losses += isWin ? 0 : 1;
    stats.fiveSetMatches += isFiveSet ? 1 : 0;
    stats.fiveSetWins += isFiveSet && isWin ? 1 : 0;
    stats.fiveSetLosses += isFiveSet && !isWin ? 1 : 0;
    stats.setsWon += sets.own;
    stats.setsLost += sets.opponent;
    stats.ballPointsWon += ballPoints.own;
    stats.ballPointsLost += ballPoints.opponent;
    stats.leaguePoints += points;
    return stats;
  }, {
    scoreCounts,
    wins: 0,
    losses: 0,
    fiveSetMatches: 0,
    fiveSetWins: 0,
    fiveSetLosses: 0,
    setsWon: 0,
    setsLost: 0,
    ballPointsWon: 0,
    ballPointsLost: 0,
    leaguePoints: 0
  });
}

function renderSeasonStats() {
  const stats = seasonStats();
  const perGame = (value) => (value / games.length).toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const rows = [
    ["3:0", stats.scoreCounts["3:0"]],
    ["3:1", stats.scoreCounts["3:1"]],
    ["3:2", stats.scoreCounts["3:2"]],
    ["2:3", stats.scoreCounts["2:3"]],
    ["1:3", stats.scoreCounts["1:3"]],
    ["0:3", stats.scoreCounts["0:3"]],
    ["Siege", stats.wins],
    ["Niederlagen", stats.losses],
    ["5-Satz-Spiele", stats.fiveSetMatches],
    ["5-Satz-Siege", stats.fiveSetWins],
    ["5-Satz-Niederlagen", stats.fiveSetLosses],
    ["Gesamtpunkte", stats.leaguePoints],
    ["Punkte pro Spiel", perGame(stats.leaguePoints)],
    ["Gewonnene Sätze", stats.setsWon],
    ["Verlorene Sätze", stats.setsLost],
    ["Gewonnene Sätze pro Spiel", perGame(stats.setsWon)],
    ["Verlorene Sätze pro Spiel", perGame(stats.setsLost)],
    ["Satzverhältnis", `${stats.setsWon}:${stats.setsLost}`],
    ["Satzkoeffizient", formatRatio(stats.setsWon, stats.setsLost)],
    ["Gewonnene Ballpunkte", stats.ballPointsWon.toLocaleString("de-DE")],
    ["Verlorene Ballpunkte", stats.ballPointsLost.toLocaleString("de-DE")],
    ["Gewonnene Ballpunkte pro Spiel", perGame(stats.ballPointsWon)],
    ["Verlorene Ballpunkte pro Spiel", perGame(stats.ballPointsLost)],
    ["Ballverhältnis", `${stats.ballPointsWon.toLocaleString("de-DE")}:${stats.ballPointsLost.toLocaleString("de-DE")}`],
    ["Ballkoeffizient", formatRatio(stats.ballPointsWon, stats.ballPointsLost)]
  ];

  seasonStatsGridEl.innerHTML = "";
  rows.forEach(([label, value]) => {
    const item = document.createElement("div");
    item.className = "season-stat";
    item.innerHTML = `<span>${label}</span><strong>${value}</strong>`;
    seasonStatsGridEl.append(item);
  });
}

function koelnMvpStats() {
  const statsByPlayer = new Map();

  games.forEach((game) => {
    const won = isKoelnWin(game);
    (game.mvps || [])
      .filter((mvp) => mvp.team === koeln)
      .forEach((mvp) => {
        const current = statsByPlayer.get(mvp.name) || { name: mvp.name, total: 0, gold: 0, silver: 0 };
        current.total += 1;
        current.gold += won ? 1 : 0;
        current.silver += won ? 0 : 1;
        statsByPlayer.set(mvp.name, current);
      });
  });

  return [...statsByPlayer.values()].sort((a, b) => (
    b.total - a.total ||
    b.gold - a.gold ||
    a.name.localeCompare(b.name, "de")
  ));
}

function renderKoelnMvps() {
  const rows = koelnMvpStats();
  koelnMvpsListEl.innerHTML = "";

  rows.forEach((row, index) => {
    const previous = rows[index - 1];
    const sameMedalScore = previous &&
      previous.total === row.total &&
      previous.gold === row.gold &&
      previous.silver === row.silver;
    const rankNumber = sameMedalScore ? previous.rankNumber : index + 1;
    row.rankNumber = rankNumber;

    const item = document.createElement("div");
    item.className = "koeln-mvp";

    const rank = document.createElement("span");
    rank.className = "mvp-rank";
    rank.textContent = sameMedalScore ? "" : `${rankNumber}.`;

    const name = document.createElement("span");
    name.className = "mvp-name";
    const url = playerProfileUrls?.[row.name];
    if (url) {
      const link = document.createElement("a");
      link.href = url;
      link.target = "_blank";
      link.rel = "noreferrer";
      link.textContent = row.name;
      name.append(link);
    } else {
      name.textContent = row.name;
    }

    const medals = document.createElement("span");
    medals.className = "mvp-medals";
    [
      { count: row.gold, type: "Goldene", className: "medal-gold" },
      { count: row.silver, type: "Silberne", className: "medal-silver" }
    ].forEach(({ count, type, className }) => {
      const medalItem = document.createElement("span");
      medalItem.className = "mvp-medal-count";
      const medal = document.createElement("i");
      medal.className = `medal ${className}`;
      const countNode = document.createElement("strong");
      countNode.textContent = count;
      medalItem.append(medal, countNode, ` ${type} Medaille${count === 1 ? "" : "n"}`);
      medals.append(medalItem);
    });

    const total = document.createElement("strong");
    total.className = "mvp-total";
    total.textContent = row.total;
    total.setAttribute("aria-label", `${row.total} MVP-Auszeichnungen`);

    item.append(rank, name, medals, total);
    koelnMvpsListEl.append(item);
  });
}

function youtubeViewRows() {
  return games
    .filter((game) => Number.isFinite(game.youtubeViews))
    .map((game) => ({
      number: game.number,
      date: game.date,
      matchup: `${game.home} - ${game.away}`,
      score: game.score,
      views: game.youtubeViews,
      videoUrl: game.videoUrl
    }))
    .sort((a, b) => b.views - a.views || a.number - b.number);
}

function renderYoutubeViews() {
  const rows = youtubeViewRows();
  const totalViews = rows.reduce((sum, row) => sum + row.views, 0);

  youtubeViewsDateEl.textContent = `Stand: ${youtubeViewsDate}, direkt aus den YouTube-Watchdaten ausgelesen`;
  youtubeViewsListEl.innerHTML = "";

  rows.forEach((row, index) => {
    const item = document.createElement("div");
    item.className = "youtube-view-row";

    const rank = document.createElement("span");
    rank.className = "youtube-rank";
    rank.textContent = `${index + 1}.`;

    const game = document.createElement("a");
    game.className = "youtube-game";
    game.href = row.videoUrl;
    game.target = "_blank";
    game.rel = "noreferrer";
    game.textContent = `#${row.number} · ${row.matchup} (${row.score})`;

    const date = document.createElement("span");
    date.className = "youtube-date";
    date.textContent = row.date;

    const views = document.createElement("strong");
    views.className = "youtube-views";
    views.textContent = row.views.toLocaleString("de-DE");

    item.append(rank, game, date, views);
    youtubeViewsListEl.append(item);
  });

  const total = document.createElement("div");
  total.className = "youtube-view-row youtube-total-row";
  total.innerHTML = `<span></span><strong>Gesamtanzahl Aufrufe</strong><span></span><strong>${totalViews.toLocaleString("de-DE")}</strong>`;
  youtubeViewsListEl.append(total);
}

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    renderCards(button.dataset.filter);
  });
});

renderCards();
renderPointsChain();
renderSeasonStats();
renderKoelnMvps();
renderYoutubeViews();
