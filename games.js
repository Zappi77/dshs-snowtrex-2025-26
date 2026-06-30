const teamBadges = {
  "DSHS SnowTrex Köln": { short: "DSK", color: "#0D6FB8", text: "#FFFFFF" },
  "Eintracht Spontent Düsseldorf": { short: "ESD", color: "#343434", text: "#FFFFFF" },
  "ESA Grimma Volleys": { short: "EGV", color: "#C3C3C3", text: "#111111" },
  "BayerVolleys Leverkusen": { short: "BVL", color: "#343434", text: "#FFFFFF" },
  "NawaRo Straubing": { short: "STR", color: "#EE7101", text: "#FFFFFF" },
  "Neuseenland-Volleys Markkleeberg": { short: "NVM", color: "#65B32E", text: "#FFFFFF" },
  "Sparkassen Wildcats Stralsund": { short: "SWS", color: "#343434", text: "#FFFFFF" },
  "TV Planegg-Krailling": { short: "TVP", color: "#A4CFA1", text: "#111111" },
  "TV Waldgirmes": { short: "TVW", color: "#3898CF", text: "#FFFFFF" },
  "VCO Dresden": { short: "VCO", color: "#009CD0", text: "#FFFFFF" },
  "VfL Oythe": { short: "OYT", color: "#E31825", text: "#FFFFFF" },
  "Rote Raben Vilsbiburg": { short: "RRV", color: "#E20010", text: "#FFFFFF" },
  "BBSC Berlin": { short: "BER", color: "#D70079", text: "#FFFFFF" },
  "TV Dingolfing": { short: "TVD", color: "#E0B187", text: "#111111" },
  "TV Hörde": { short: "TVH", color: "#111111", text: "#FFFFFF" }
};

const teamProfileUrls = {
  "DSHS SnowTrex Köln": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776308895",
  "Eintracht Spontent Düsseldorf": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776311815",
  "ESA Grimma Volleys": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776308803",
  "BayerVolleys Leverkusen": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776308933",
  "NawaRo Straubing": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776308823",
  "Neuseenland-Volleys Markkleeberg": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776309559",
  "Sparkassen Wildcats Stralsund": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776309386",
  "TV Planegg-Krailling": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776309673",
  "TV Waldgirmes": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776309795",
  "VCO Dresden": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776309105",
  "VfL Oythe": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776308853",
  "Rote Raben Vilsbiburg": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776309082",
  "BBSC Berlin": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776308987",
  "TV Dingolfing": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776309004",
  "TV Hörde": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776309275"
};

const teamLogoUrls = {
  "DSHS SnowTrex Köln": "https://www.volleyball-bundesliga.de/uploads/9d7057ef-e7c8-4d41-9c70-3efce1b653a3/DSHS+SnowTrex+K%C3%B6ln.png",
  "BBSC Berlin": "https://www.volleyball-bundesliga.de/uploads/131fc503-06e0-4f69-a475-84adf278b0d9/BBSC+Berlin.png",
  "BayerVolleys Leverkusen": "https://www.volleyball-bundesliga.de/uploads/bb11fe67-9f40-49ed-a42f-1e99316dadf9/Bayer+Leverkusen.png",
  "ESA Grimma Volleys": "https://www.volleyball-bundesliga.de/uploads/e1c6edbd-64a5-4055-8f01-28c03e70f558/ESA+Grimma+Volleys_kreis.png",
  "Eintracht Spontent Düsseldorf": "https://www.volleyball-bundesliga.de/uploads/11eb6af6-6268-4767-8c60-813b6161d2fc/Eintracht+Spontent_Kreis.png",
  "TV Hörde": "https://www.volleyball-bundesliga.de/uploads/0a049112-a6b6-49b9-8e9d-38f09c907cb7/TV+H%C3%B6rde.png",
  "VfL Oythe": "https://www.volleyball-bundesliga.de/uploads/10c17d7b-d082-4d7d-a4e0-f1d800544ff8/oythe.png",
  "NawaRo Straubing": "https://www.volleyball-bundesliga.de/uploads/825c2558-e734-45c0-a93d-261df75fb4c3/Straubing.png",
  "Neuseenland-Volleys Markkleeberg": "https://www.volleyball-bundesliga.de/uploads/befce1b4-d568-4ffd-928a-d351be3301eb/Neuseenland-Volleys+Markkleeberg.png",
  "Rote Raben Vilsbiburg": "https://www.volleyball-bundesliga.de/uploads/19de3821-7526-4e46-a0b9-9cd60bf0535e/Vilsbiburg.png",
  "Sparkassen Wildcats Stralsund": "https://www.volleyball-bundesliga.de/uploads/edc53223-6279-497b-8f0c-a3b2bf93eed8/Sparkassen+Wildcats+Stralsund.png",
  "TV Dingolfing": "https://www.volleyball-bundesliga.de/uploads/b87f5e38-7eb4-4966-84a1-be0e4839f151/TV+Dingolfing.png",
  "TV Planegg-Krailling": "https://www.volleyball-bundesliga.de/uploads/c44d2e47-3206-4312-ac8e-067faff3ac85/Planegg-Krailling_Kreis.png",
  "TV Waldgirmes": "https://www.volleyball-bundesliga.de/uploads/89cb6afe-a0c8-4c30-a4c6-34cbe79176aa/TV_Waldgirmes_kreis.png",
  "VCO Dresden": "https://www.volleyball-bundesliga.de/uploads/33ebca47-ee88-4505-80a3-8f625a651bdc/Dresden.png"
};

const matchArticles = {
  "3006": [
    {
      "title": "Trotz Niederlage hängen die Köpfe nicht",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778420607"
    },
    {
      "title": "Köln gewinnt klar in Hörde",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778419067"
    },
    {
      "title": "DSHS SnowTrex Köln reist zum TV Hörde",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778377188"
    },
    {
      "title": "Das Abenteuer Sparda 2. Liga Pro beginnt!",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778374013"
    }
  ],
  "3008": [
    {
      "title": "Sechspunkte-Wochenende für Köln",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779821588"
    },
    {
      "title": "Jahresausklang in Halle 22",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779775284"
    }
  ],
  "3018": [
    {
      "title": "Knapp am Punktgewinn vorbei.",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778607710"
    },
    {
      "title": "Nervenstark zum Derbysieg",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778578046"
    },
    {
      "title": "Köln gastiert bei Eintracht Spontent",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778548365"
    },
    {
      "title": "Zweites Heimspiel für die Eintracht.",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778545520"
    }
  ],
  "3022": [
    {
      "title": "Volleys feiern souveränen Derbyerfolg",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778688730"
    },
    {
      "title": "Köln unterliegt Leverkusen mit 1:3",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778671199"
    },
    {
      "title": "Volleys vor Duell mit hohem Reiz",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778650614"
    },
    {
      "title": "Erstes Heimspiel, großes Derby",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778627301"
    }
  ],
  "3030": [
    {
      "title": "Starker Auftritt, aber ohne Lohn",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778802129"
    },
    {
      "title": "Harter Kampf mit Happy End für Oythe",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778781564"
    },
    {
      "title": "Köln trifft auf Tabellennachbarn",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778759205"
    },
    {
      "title": "Langjähriger Weggefährte zu Gast",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778708275"
    }
  ],
  "3036": [
    {
      "title": "Punkte blieben leider in Köln",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779043837"
    },
    {
      "title": "Köln bezwingt Markkleeberg mit 3:1",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779032852"
    },
    {
      "title": "Premiere in Köln",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778966159"
    },
    {
      "title": "Die nächste Auswärtsfahrt steht an",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778946340"
    }
  ],
  "3048": [
    {
      "title": "Köln verliert 0:3 in Vilsbiburg",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779291374"
    },
    {
      "title": "Rote Raben behalten ihre weiße Weste",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779276600"
    },
    {
      "title": "Köln reist zum Tabellenführer",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779254375"
    },
    {
      "title": "Raben wollen Heimnimbus behalten",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779245049"
    }
  ],
  "3050": [
    {
      "title": "BBSC mit Fortschritten zurückgekehrt",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779387144"
    },
    {
      "title": "Köln bezwingt Berlin mit 3:1",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779374789"
    },
    {
      "title": "BBSC Berlin kommt nach Köln",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779339599"
    }
  ],
  "3060": [
    {
      "title": "Der zweite Sieg in Folge",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779503250"
    },
    {
      "title": "Herzschlag-Tiebreak in Stralsund",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779502796"
    },
    {
      "title": "Köln mit Gastspiel bei den Wildcats",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779464053"
    },
    {
      "title": "Spiel Nummer 5 in neun Tagen",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779451502"
    }
  ],
  "3064": [
    {
      "title": "Starker Auftakt, bitteres Ende",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779583782"
    },
    {
      "title": "3 Punkte am Nikolausabend",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779577451"
    },
    {
      "title": "Double-Header auswärts!",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779566454"
    },
    {
      "title": "Köln mit Härtetest gegen NawaRo Straubing",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779549660"
    }
  ],
  "3072": [
    {
      "title": "Köln ohne Punkte in Planegg",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779727791"
    },
    {
      "title": "Der TVP feiert klares 3:0 gegen Köln",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779696989"
    },
    {
      "title": "Köln zu Gast beim TV Planegg-Krailling",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779669627"
    },
    {
      "title": "Nächstes Heimspiel: TVP empfängt Köln",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779653292"
    }
  ],
  "3078": [
    {
      "title": "TVW beendet das Jahr als Tabellenachter",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779814947"
    },
    {
      "title": "Köln vor schwieriger Aufgabe",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779757134"
    }
  ],
  "3085": [
    {
      "title": "Köln setzt sich knapp gegen Dingos durch",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779611676"
    },
    {
      "title": "Knappe Niederlage in Köln",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779606381"
    },
    {
      "title": "Unberechenbarkeit beim Duell mit dem TVD",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779561417"
    },
    {
      "title": "Mit Zuversicht nach Köln",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779516460"
    }
  ],
  "3097": [
    {
      "title": "Köln startet perfekt in die Rückrunde",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780025405"
    },
    {
      "title": "Kein Neustart für Hörde",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780016050"
    },
    {
      "title": "Die Rückrunde startet",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780011584"
    },
    {
      "title": "Rückrundenauftakt in Köln",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779987072"
    }
  ],
  "3099": [
    {
      "title": "Köln krönt Doppelspieltag mit Auswärtssieg",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780112565"
    },
    {
      "title": "ESA VOLLEYS mit leeren Händen im 1. Heimspiel…",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780110636"
    },
    {
      "title": "Köln will Serie ausbauen",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780089558"
    },
    {
      "title": "ESA VOLLEYS wollen zurück in Erfolgsspur",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780086824"
    }
  ],
  "3109": [
    {
      "title": "Sechster Sieg in Folge",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780203090"
    },
    {
      "title": "Rheinderby in Halle 22",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780164270"
    }
  ],
  "3113": [
    {
      "title": "Volleys setzen gute Tradition im Derby fort",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780311214"
    },
    {
      "title": "Derbyniederlage beendet Kölner Siegesserie",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780304906"
    },
    {
      "title": "Volleys freuen sich auf Highlight",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780263943"
    },
    {
      "title": "Nach dem Derby ist vor dem Derby",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780229448"
    }
  ],
  "3121": [
    {
      "title": "Köln verpasst Tie-Break gegen VfL Oythe",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780398861"
    },
    {
      "title": "Oythe kommt als Favorit",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780357182"
    }
  ],
  "3127": [
    {
      "title": "Köln holt 3:0 in Markkleeberg",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780486265"
    },
    {
      "title": "Auf Erstligaboden leider keine Heimpunkte",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780476293"
    },
    {
      "title": "Köln reist nach Markkleeberg",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780450251"
    },
    {
      "title": "Heimspiel am Valentinstag",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780444187"
    }
  ],
  "3139": [
    {
      "title": "Köln unterliegt dem Spitzenreiter klar",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780573170"
    },
    {
      "title": "Rote Raben lassen nichts anbrennen",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780550930"
    },
    {
      "title": "Köln empfängt Ligaprimus Vilsbiburg",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780537193"
    }
  ],
  "3141": [
    {
      "title": "BBSC mit Wochenende ohne Fortune",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780749244"
    },
    {
      "title": "Köln gewinnt umkämpftes Auswärtsspiel",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780747323"
    },
    {
      "title": "Köln trifft auf kämpferischen BBSC Berlin",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780719268"
    },
    {
      "title": "Köln in der Hämmerlinghalle zu Gast",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780692623"
    }
  ],
  "3151": [
    {
      "title": "Nur noch ein Punkt",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780926762"
    },
    {
      "title": "Episches Comeback Köln dreht 0:2-Rückstand",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780906722"
    },
    {
      "title": "Köln bereit für die Wildcats aus Stralsund",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780880509"
    },
    {
      "title": "Unveränderte Umstände in Köln",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780880342"
    },
    {
      "title": "Die erste Saison im Pro-Kader: Anna Selle",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780849377"
    }
  ],
  "3155": [
    {
      "title": "Satzgewinn beim Tabellenzweiten",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=781020462"
    },
    {
      "title": "NawaRo bezwingt Köln mit 3:1!",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=781007176"
    },
    {
      "title": "Köln gastiert bei NawaRo Straubing",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780987438"
    },
    {
      "title": "NawaRo empfängt Köln!",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780968048"
    }
  ],
  "3163": [
    {
      "title": "Köln verliert 1:3 gegen TVP",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=781163185"
    },
    {
      "title": "Köln vs. TVP: Heimspiel mit Revanchechance",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=781124832"
    }
  ],
  "3169": [
    {
      "title": "Finale Entscheidung vertagt",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=781298348"
    },
    {
      "title": "Showdown um Platz 6",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=781276636"
    }
  ],
  "3176": [
    {
      "title": "Arbeitssieg zum Saisonabschluss",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=781376088"
    },
    {
      "title": "Umkämpftes Saisonfinale",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=781373494"
    },
    {
      "title": "Wiedergutmachung und Platz 6",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=781358982"
    },
    {
      "title": "Saisonfinale mit Heimspiel",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=781324852"
    }
  ],
  "3184": [
    {
      "title": "VCO Dresden unterliegt Köln mit 1:3",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780133791"
    },
    {
      "title": "Doppelwechsel brachte die Wende",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780112424"
    },
    {
      "title": "Köln vor schwerer Aufgabe in Dresden",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780084669"
    },
    {
      "title": "VCO Dresden empfängt Köln und BBSC Berlin",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780081898"
    }
  ],
  "3198": [
    {
      "title": "Fünf-Satz-Krimi in Köln",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779399980"
    },
    {
      "title": "VCO Dresden gastiert in Köln",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779350944"
    }
  ]
};


const articleOrigins = {
  "778374013": "TVH",
  "778377188": "DSK",
  "778419067": "DSK",
  "778420607": "TVH",
  "778545520": "ESD",
  "778548365": "DSK",
  "778578046": "DSK",
  "778607710": "ESD",
  "778627301": "DSK",
  "778650614": "BVL",
  "778671199": "DSK",
  "778688730": "BVL",
  "778708275": "OYT",
  "778759205": "DSK",
  "778781564": "OYT",
  "778802129": "DSK",
  "778946340": "NVM",
  "778966159": "DSK",
  "779032852": "DSK",
  "779043837": "NVM",
  "779245049": "RRV",
  "779254375": "DSK",
  "779276600": "RRV",
  "779291374": "DSK",
  "779339599": "DSK",
  "779350944": "DSK",
  "779374789": "DSK",
  "779387144": "BER",
  "779399980": "DSK",
  "779451502": "SWS",
  "779464053": "DSK",
  "779502796": "DSK",
  "779503250": "SWS",
  "779516460": "TVD",
  "779549660": "DSK",
  "779561417": "DSK",
  "779566454": "STR",
  "779577451": "STR",
  "779583782": "DSK",
  "779606381": "TVD",
  "779611676": "DSK",
  "779653292": "TVP",
  "779669627": "DSK",
  "779696989": "TVP",
  "779727791": "DSK",
  "779757134": "DSK",
  "779775284": "DSK",
  "779814947": "TVW",
  "779821588": "DSK",
  "779987072": "DSK",
  "780011584": "TVH",
  "780016050": "TVH",
  "780025405": "DSK",
  "780081898": "VCO",
  "780084669": "DSK",
  "780086824": "EGV",
  "780089558": "DSK",
  "780110636": "EGV",
  "780112424": "DSK",
  "780112565": "DSK",
  "780133791": "VCO",
  "780164270": "DSK",
  "780203090": "DSK",
  "780229448": "DSK",
  "780263943": "BVL",
  "780304906": "DSK",
  "780311214": "BVL",
  "780357182": "DSK",
  "780398861": "DSK",
  "780444187": "NVM",
  "780450251": "DSK",
  "780476293": "NVM",
  "780486265": "DSK",
  "780537193": "DSK",
  "780550930": "RRV",
  "780573170": "DSK",
  "780692623": "BER",
  "780719268": "DSK",
  "780747323": "DSK",
  "780749244": "BER",
  "780849377": "DSK",
  "780880342": "SWS",
  "780880509": "DSK",
  "780906722": "DSK",
  "780926762": "SWS",
  "780968048": "STR",
  "780987438": "DSK",
  "781007176": "STR",
  "781020462": "DSK",
  "781124832": "DSK",
  "781163185": "DSK",
  "781276636": "DSK",
  "781298348": "DSK",
  "781324852": "TVD",
  "781358982": "DSK",
  "781373494": "TVD",
  "781376088": "DSK"
};


const youtubeViewsDate = "23.06.2026";

const officialReportUrls = {
  3006: "https://distributor.sams-score.de/scoresheet/pdf/acccc648-535e-4a3b-9815-097492a73c84/3006",
  3018: "https://distributor.sams-score.de/scoresheet/pdf/600448d6-814e-4936-a245-5248306bd6b0/3018",
  3022: "https://distributor.sams-score.de/scoresheet/pdf/e1415fb9-0399-4c97-a430-fdf2d7929a60/3022",
  3030: "https://distributor.sams-score.de/scoresheet/pdf/cbf3a84b-6beb-4635-9a0f-281de27166d2/3030",
  3036: "https://distributor.sams-score.de/scoresheet/pdf/32fd7619-e73a-4c31-9d29-f96126dc52df/3036",
  3048: "https://distributor.sams-score.de/scoresheet/pdf/1ca09abb-271b-4b84-b319-f57cb34af190/3048",
  3050: "https://distributor.sams-score.de/scoresheet/pdf/7925531a-cebc-41f8-b4e2-e020612f8e0f/3050",
  3198: "https://distributor.sams-score.de/scoresheet/pdf/abf1bd5b-bd2e-4d08-9f5c-b24bd7b87959/3198",
  3060: "https://distributor.sams-score.de/scoresheet/pdf/a43576d7-c8c4-4d63-a9ac-7023ecee358f/3060",
  3064: "https://distributor.sams-score.de/scoresheet/pdf/e11666bf-cbcc-48ac-aa7f-2c24bbe73f41/3064",
  3085: "https://distributor.sams-score.de/scoresheet/pdf/3f44ff7f-4dd7-42b4-a720-dbdba86daae5/3085",
  3072: "https://distributor.sams-score.de/scoresheet/pdf/1e3a2f14-9147-49e3-b906-df9795e98f91/3072",
  3078: "https://distributor.sams-score.de/scoresheet/pdf/ee8dca3a-c0fd-4814-824b-b3df8999c4af/3078",
  3008: "https://distributor.sams-score.de/scoresheet/pdf/47ac148f-c13e-48b9-9e42-2d0156b8fa06/3008",
  3097: "https://distributor.sams-score.de/scoresheet/pdf/05e8e175-1384-4826-9c64-81ea7e9571a3/3097",
  3184: "https://distributor.sams-score.de/scoresheet/pdf/2c28bcd9-a5b2-4ddb-a491-7b5ebbf57bf5/3184",
  3099: "https://distributor.sams-score.de/scoresheet/pdf/42a28a15-03cc-4b62-8c93-c9a230196f49/3099",
  3109: "https://distributor.sams-score.de/scoresheet/pdf/1c768949-b202-4b06-b2ca-75c6b4365065/3109",
  3113: "https://distributor.sams-score.de/scoresheet/pdf/8e49e6e0-38c5-47dd-9944-c37657a0e82a/3113",
  3121: "https://distributor.sams-score.de/scoresheet/pdf/56f9af7a-3ef3-444d-8389-7b84a5b90442/3121",
  3127: "https://distributor.sams-score.de/scoresheet/pdf/cb31d241-b953-437c-979e-388756de58e1/3127",
  3139: "https://distributor.sams-score.de/scoresheet/pdf/edfe6e05-5702-4900-a8b0-715330464e85/3139",
  3141: "https://distributor.sams-score.de/scoresheet/pdf/d561779f-9727-4582-804b-f60b7628d222/3141",
  3151: "https://distributor.sams-score.de/scoresheet/pdf/2314bf2e-2813-4918-967b-f0b13a9386ce/3151",
  3155: "https://distributor.sams-score.de/scoresheet/pdf/11189648-76bd-47f0-85f4-a1af1430bccd/3155",
  3163: "https://distributor.sams-score.de/scoresheet/pdf/688d44e7-0617-4e18-8224-dca200caa171/3163",
  3169: "https://distributor.sams-score.de/scoresheet/pdf/f4e2d2a7-3191-4739-9e7d-26ae9407137d/3169",
  3176: "https://distributor.sams-score.de/scoresheet/pdf/52a3f623-1522-479f-958b-4b92dd4a2d25/3176"
};

const finalStandingsSource = "VBL-Tabelle, Stand 06.05.2026";

const finalStandings = {
  overall: [
    { rank: 1, team: "Rote Raben Vilsbiburg", played: 28, wins: 26, sets: "80:11", balls: "2215:1651", points: 79 },
    { rank: 2, team: "NawaRo Straubing", played: 28, wins: 24, sets: "76:28", balls: "2439:1973", points: 72 },
    { rank: 3, team: "VfL Oythe", played: 28, wins: 24, sets: "75:32", balls: "2485:2184", points: 69 },
    { rank: 4, team: "TV Planegg-Krailling", played: 28, wins: 22, sets: "71:30", balls: "2327:2023", points: 63 },
    { rank: 5, team: "VCO Dresden", played: 28, wins: 17, sets: "65:45", balls: "2422:2341", points: 52 },
    { rank: 6, team: "DSHS SnowTrex Köln", played: 28, wins: 15, sets: "56:52", balls: "2357:2400", points: 45 },
    { rank: 7, team: "BayerVolleys Leverkusen", played: 28, wins: 15, sets: "55:53", balls: "2358:2293", points: 44 },
    { rank: 8, team: "TV Waldgirmes", played: 28, wins: 14, sets: "54:49", balls: "2258:2248", points: 42 },
    { rank: 9, team: "ESA Grimma Volleys", played: 28, wins: 13, sets: "49:59", balls: "2282:2309", points: 35 },
    { rank: 10, team: "Sparkassen Wildcats Stralsund", played: 28, wins: 11, sets: "49:63", balls: "2332:2464", points: 35 },
    { rank: 11, team: "Eintracht Spontent Düsseldorf", played: 28, wins: 9, sets: "43:67", balls: "2284:2456", points: 27 },
    { rank: 12, team: "Neuseenland-Volleys Markkleeberg", played: 28, wins: 7, sets: "34:70", balls: "2128:2386", points: 21 },
    { rank: 13, team: "TV Dingolfing", played: 28, wins: 5, sets: "32:75", balls: "2134:2493", points: 18 },
    { rank: 14, team: "TV Hörde", played: 28, wins: 4, sets: "26:77", balls: "2067:2405", points: 16 },
    { rank: 15, team: "BBSC Berlin", played: 28, wins: 4, sets: "24:78", balls: "1968:2430", points: 12 }
  ],
  home: [
    { rank: 1, team: "Rote Raben Vilsbiburg", played: 14, wins: 14, sets: "42:3", balls: "1108:803", points: 42 },
    { rank: 2, team: "VfL Oythe", played: 14, wins: 13, sets: "41:10", balls: "1229:1000", points: 40 },
    { rank: 3, team: "NawaRo Straubing", played: 14, wins: 11, sets: "37:15", balls: "1215:1018", points: 35 },
    { rank: 4, team: "TV Planegg-Krailling", played: 14, wins: 11, sets: "34:15", balls: "1121:975", points: 31 },
    { rank: 5, team: "VCO Dresden", played: 14, wins: 8, sets: "32:24", balls: "1243:1190", points: 24 },
    { rank: 6, team: "BayerVolleys Leverkusen", played: 14, wins: 8, sets: "31:26", balls: "1245:1165", points: 24 },
    { rank: 7, team: "TV Waldgirmes", played: 14, wins: 8, sets: "28:24", balls: "1143:1119", points: 23 },
    { rank: 8, team: "Sparkassen Wildcats Stralsund", played: 14, wins: 7, sets: "29:28", balls: "1205:1241", points: 21 },
    { rank: 9, team: "DSHS SnowTrex Köln", played: 14, wins: 7, sets: "27:28", balls: "1162:1199", points: 20 },
    { rank: 10, team: "ESA Grimma Volleys", played: 14, wins: 7, sets: "27:28", balls: "1201:1165", points: 19 },
    { rank: 11, team: "Eintracht Spontent Düsseldorf", played: 14, wins: 5, sets: "25:30", balls: "1196:1187", points: 18 },
    { rank: 12, team: "TV Dingolfing", played: 14, wins: 5, sets: "20:33", balls: "1078:1210", points: 14 },
    { rank: 13, team: "TV Hörde", played: 14, wins: 4, sets: "17:35", balls: "1093:1199", points: 13 },
    { rank: 14, team: "Neuseenland-Volleys Markkleeberg", played: 14, wins: 4, sets: "16:34", balls: "1023:1145", points: 11 },
    { rank: 15, team: "BBSC Berlin", played: 14, wins: 2, sets: "12:38", balls: "983:1195", points: 7 }
  ],
  away: [
    { rank: 1, team: "NawaRo Straubing", played: 14, wins: 13, sets: "39:13", balls: "1224:955", points: 37 },
    { rank: 2, team: "Rote Raben Vilsbiburg", played: 14, wins: 12, sets: "38:8", balls: "1107:848", points: 37 },
    { rank: 3, team: "TV Planegg-Krailling", played: 14, wins: 11, sets: "37:15", balls: "1206:1048", points: 32 },
    { rank: 4, team: "VfL Oythe", played: 14, wins: 11, sets: "34:22", balls: "1256:1184", points: 29 },
    { rank: 5, team: "VCO Dresden", played: 14, wins: 9, sets: "33:21", balls: "1179:1151", points: 28 },
    { rank: 6, team: "DSHS SnowTrex Köln", played: 14, wins: 8, sets: "29:24", balls: "1195:1201", points: 25 },
    { rank: 7, team: "BayerVolleys Leverkusen", played: 14, wins: 7, sets: "24:27", balls: "1113:1128", points: 20 },
    { rank: 8, team: "TV Waldgirmes", played: 14, wins: 6, sets: "26:25", balls: "1115:1129", points: 19 },
    { rank: 9, team: "ESA Grimma Volleys", played: 14, wins: 6, sets: "22:31", balls: "1081:1144", points: 16 },
    { rank: 10, team: "Sparkassen Wildcats Stralsund", played: 14, wins: 4, sets: "20:35", balls: "1127:1223", points: 14 },
    { rank: 11, team: "Neuseenland-Volleys Markkleeberg", played: 14, wins: 3, sets: "18:36", balls: "1105:1241", points: 10 },
    { rank: 12, team: "Eintracht Spontent Düsseldorf", played: 14, wins: 4, sets: "18:37", balls: "1088:1269", points: 9 },
    { rank: 13, team: "BBSC Berlin", played: 14, wins: 2, sets: "12:40", balls: "985:1235", points: 5 },
    { rank: 14, team: "TV Dingolfing", played: 14, wins: 0, sets: "12:42", balls: "1056:1283", points: 4 },
    { rank: 15, team: "TV Hörde", played: 14, wins: 0, sets: "9:42", balls: "974:1206", points: 3 }
  ]
};

const playerProfileUrls = {
  "Anna-Lena Vogel": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308987&userId=44010163",
  "Annelis Lotte Denise Tyws": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308853&userId=767172913",
  "Annika Stenchly": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308895&userId=70003721",
  "Carlotta Fleischmann": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309004&userId=777954679",
  "Elisabeth Kettenbach": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309673&userId=59149633",
  "Emelie Siegner": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308895&userId=70748100",
  "Emilia Schaarschmidt": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309105&userId=767229256",
  "Emma Carlotta Dogu": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309795&userId=685275014",
  "Emma Neukirchen": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309275&userId=771345481",
  "Gesa Brandstrup": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309386&userId=752329134",
  "Hannah Mörke": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308895&userId=70203755",
  "Hannah Zoe Bolsius": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308895&userId=741312619",
  "Johanna Röhner": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309105&userId=777554183",
  "Lara Drölle": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776311815&userId=22326117",
  "Leonie Amann": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309795&userId=70434234",
  "Maike Brönhorst": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308895&userId=760227625",
  "Maria Petkova": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308853&userId=777895333",
  "Marian Mischo": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308933&userId=685843413",
  "Marina Müller": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308895&userId=743082989",
  "Maya Lucia Kleinpeter": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776311815&userId=778128140",
  "Melanie Gosmann": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308895&userId=9969466",
  "Meret Singer": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308803&userId=750449302",
  "Milena Geist": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308895&userId=761003718",
  "Nadine Yvonne Bernadette Raß": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309673&userId=70661993",
  "Paula Reinisch": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308987&userId=13394655",
  "Pia Fernau": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309082&userId=678774889",
  "Selina Ebner": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309004&userId=767191582",
  "Tabea-Éliane Dreiack": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309559&userId=769049818",
  "Tessa Müller": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308933&userId=750792399",
  "Theresa Barner": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308823&userId=750792046",
  "Thora Bauer": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309559&userId=770982680",
  "Valbona Ismaili": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308823&userId=158916735",
  "Vanessa Gorny": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309275&userId=777566810"
};

const gameSummaries = {
  3006: ["Köln startete mit einem souveränen 3:0-Erfolg beim Liga-Neuling TV Hörde in die Saison.", "In einem typischen Auftaktspiel musste sich das Team zunächst finden, hatte in den entscheidenden Phasen aber die besseren Antworten.", "Der Bericht hebt die geschlossene Teamleistung und die ersten drei Punkte als gelungenen Start in die Sparda 2. Liga Pro hervor."],
  3018: ["Köln gewann das erste rheinische Derby der Saison bei Eintracht Spontent Düsseldorf mit 3:1.", "Nach einem klaren ersten Satz kam Düsseldorf besser ins Spiel und glich aus, bevor Köln die folgenden engen Sätze nervenstark entschied.", "Der Bericht betont den druckvollen Start, die nötige Reaktion nach dem Satzverlust und den zweiten Sieg im zweiten Saisonspiel."],
  3022: ["Köln startete im ersten Heimspiel gegen Leverkusen mit Problemen und verlor die ersten beiden Sätze deutlich.", "Nach dem Satzgewinn zum 1:2 blieb das Derby offen, ehe Leverkusen den vierten Durchgang kontrolliert zu Ende brachte.", "Der Bericht ordnet das 1:3 als bitteren Heimauftakt ein, bei dem Köln nur phasenweise Zugriff fand."],
  3030: ["In Oythe blieb Köln trotz starker kämpferischer Phasen ohne Punktgewinn.", "Die engen Sätze zwei und vier zeigten, dass ein Tie-Break möglich gewesen wäre.", "Oythe blieb in den entscheidenden Phasen konstanter und brachte die engen Sätze besser zu Ende."],
  3036: ["Gegen Markkleeberg stoppte Köln die Negativserie mit einem 3:1-Heimsieg.", "Nach dem verlorenen zweiten Satz reagierte das Team stabil und gewann die Sätze drei und vier klarer.", "Der Bericht hebt vor allem die geschlossene Reaktion und den wichtigen Befreiungsschlag hervor."],
  3048: ["Beim Tabellenführer Vilsbiburg hielt Köln kämpferisch dagegen, blieb aber ohne Satzgewinn.", "Die Roten Raben agierten in den entscheidenden Momenten effizienter und ließen wenig liegen.", "Der Bericht beschreibt die Niederlage als klar, aber mit Kölner Phasen, auf denen das Team aufbauen konnte."],
  3050: ["Zum Auftakt des Doppelheimspielwochenendes gewann Köln gegen BBSC Berlin mit 3:1.", "Nach drei umkämpften Sätzen setzte sich Köln im vierten Durchgang deutlich ab.", "Der Bericht fasst das Spiel als wichtigen Heimsieg mit starker Reaktion nach dem Satzverlust zusammen."],
  3198: ["Einen Tag später gegen VCO Dresden reichte eine 2:0-Führung nicht zum Sieg.", "Dresden kam über längere Ballwechsel und mehr Stabilität zurück und entschied den Tie-Break knapp.", "Der Bericht bündelt das Wochenende deshalb als Sieg und Niederlage mit gemischtem Ertrag."],
  3060: ["In Stralsund kämpfte sich Köln nach Rückständen mehrfach zurück und erzwang den Tie-Break.", "Die Wildcats nutzten im Entscheidungssatz die besseren Momente und gewannen 15:12.", "Der Bericht bewertet den Auftritt als großen Kampf, der knapp nicht mit Punkten belohnt wurde."],
  3064: ["Gegen NawaRo Straubing begann Köln stark und gewann den ersten Satz.", "Danach übernahm Straubing mit mehr Druck und klareren Abläufen die Kontrolle.", "Der Bericht beschreibt das 1:3 als bitteres Ende nach gutem Auftakt."],
  3085: ["Gegen TV Dingolfing drehte Köln einen 0:2-Satzrückstand in einen Heimsieg.", "Der Tie-Break blieb bis zum Ende eng, bevor Köln sich mit 16:14 durchsetzte.", "Der Bericht stellt den Erfolg als Nervenprobe und wichtigen Moralbeweis dar."],
  3072: ["In Planegg fand Köln zu selten Zugriff auf das Spiel und verlor glatt mit 0:3.", "Vor allem in den Satzmitten setzte sich der Aufsteiger immer wieder ab.", "Der Bericht fasst den Auswärtsauftritt als Niederlage ohne Punkte zusammen."],
  3078: ["In Waldgirmes zeigte Köln eine starke Reaktion auf die vorherige Niederlage.", "Nach zwei gewonnenen Auftaktsätzen blieb das Team auch nach dem Satzverlust ruhig.", "Der Bericht sieht den 3:1-Erfolg als Teil eines positiven Jahresabschlusses."],
  3008: ["Gegen Grimma kontrollierte Köln das Heimspiel über weite Strecken.", "Der klare 3:0-Sieg rundete das Wochenende mit sechs Punkten ab.", "Der Bericht betont den stabilen Jahresabschluss und die gute Ausgangslage vor der Pause."],
  3097: ["Zum Rückrundenauftakt gegen TV Hörde erwischte Köln einen konzentrierten Start.", "Das Team hielt das Niveau über drei Sätze und ließ keinen Satzgewinn zu.", "Der Bericht beschreibt den 3:0-Erfolg als kontrollierten Heimsieg zum Start ins Jahr 2026."],
  3184: ["Beim VCO Dresden musste Köln nach verlorenem ersten Satz arbeiten.", "Mit engen, aber stabilen Schlussphasen drehte das Team das Spiel zum 3:1.", "Der Bericht ordnet den Sieg als ersten Teil eines erfolgreichen Sachsen-Wochenendes ein."],
  3099: ["In Grimma legte Köln einen weiteren Auswärtssieg nach.", "Nach dem Satzverlust im dritten Durchgang blieb das Team im vierten Satz stabil.", "Der Bericht fasst die beiden Sachsen-Spiele als Sechs-Punkte-Wochenende zusammen."],
  3109: ["Im Rheinderby gegen Düsseldorf setzte Köln die Siegesserie fort.", "Nach dem Ausgleich der Gäste übernahm Köln wieder die Kontrolle und entschied die engen Schlussbälle für sich.", "Der Bericht hebt den umkämpften Charakter und die Bedeutung des Derbysiegs hervor."],
  3113: ["In Leverkusen endete Kölns Siegesserie mit einer Derby-Niederlage.", "Nach dem Ausgleich zum 1:1 kippte das Spiel wieder zugunsten der BayerVolleys.", "Der Bericht sieht vor allem Leverkusens Effizienz und Kölner Fehlerphasen als ausschlaggebend."],
  3121: ["Gegen Oythe startete Köln mit einem Satzgewinn, konnte die Führung aber nicht bestätigen.", "Die Gäste gewannen die folgenden Durchgänge und verhinderten im vierten Satz den Tie-Break.", "Der Bericht beschreibt das Ende als bitter, weil Köln lange eine Chance auf Zählbares hatte."],
  3127: ["In Markkleeberg gewann Köln ein enges 3:0, bei dem zwei Sätze erst spät entschieden wurden.", "Blockstärke und bessere Crunchtime-Aktionen gaben den Ausschlag.", "Der Bericht ordnet den Sieg als wichtige Antwort auf die vorangegangene Negativserie ein."],
  3139: ["Gegen Spitzenreiter Vilsbiburg blieb Köln zu Hause ohne Satzgewinn.", "Die Gäste nutzten ihre Chancen konsequent und ließen Köln kaum längere Läufe.", "Der Bericht beschreibt Vilsbiburg als gnadenlos effektiv und Köln als zu selten durchschlagskräftig."],
  3141: ["In Berlin gewann Köln nach verlorenem Auftaktsatz mit 3:1.", "Das Team steigerte sich in Aufschlag, Block und Schlussphasen sichtbar.", "Der Bericht hebt den Auswärtssieg als umkämpft, aber verdient hervor."],
  3151: ["Gegen Stralsund lag Köln bereits mit 0:2 Sätzen zurück.", "Mit viel Energie und besseren Entscheidungen drehte das Team das Spiel noch in fünf Sätzen.", "Der Bericht beschreibt das Comeback als außergewöhnlich und emotionalen Heimsieg."],
  3155: ["In Straubing gewann Köln den ersten Satz beim Tabellenzweiten.", "NawaRo erhöhte danach Druck und Stabilität und entschied die folgenden drei Sätze klarer.", "Der Bericht hebt dennoch die Moral und den Satzgewinn in einer schweren Auswärtsaufgabe hervor."],
  3163: ["Auch im Rückspiel gegen Planegg fand Köln nicht dauerhaft die passenden Mittel.", "Der Satzgewinn im dritten Durchgang hielt das Spiel kurz offen.", "Der Bericht bewertet das 1:3 als erneute Niederlage gegen einen Gegner, gegen den Köln zu selten Zugriff bekam."],
  3169: ["Gegen Waldgirmes verlor Köln das letzte Heimspiel der Saison in drei sehr engen Sätzen.", "Alle Durchgänge blieben bis in die Schlussphase offen, kippten aber zu den Gästen.", "Der Bericht betont, dass die Entscheidung um Platz sechs trotz der Niederlage vertagt blieb."],
  3176: ["Zum Saisonabschluss gewann Köln in Dingolfing ein enges 3:1.", "Der vierte Satz ging in die Verlängerung, bevor Köln den Auswärtssieg festmachte.", "Der Bericht beschreibt den Erfolg als Arbeitssieg und Bestätigung von Platz sechs."]
};

const games = [
  { weekday: "Samstag", date: "20.09.2025", time: "19:30", number: 3006, matchId: 777353324, home: "TV Hörde", away: "DSHS SnowTrex Köln", score: "0:3", ballPoints: "62:75", sets: ["22:25", "22:25", "18:25"], rankAfter: 4, venue: "Sporthalle Phoenix (Hörde III) (44263 Dortmund)", duration: 82, spectators: 170, galleryUrl: "https://www.flickr.com/photos/88608964@N07/albums/72177720329228034", articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778419067", mvps: [{ team: "TV Hörde", name: "Emma Neukirchen" }, { team: "DSHS SnowTrex Köln", name: "Milena Geist" }], videoUrl: "https://www.youtube.com/watch?v=fESnOx6T1o8&t=1s", youtubeViews: 1558 },
  { weekday: "Samstag", date: "04.10.2025", time: "16:00", number: 3018, matchId: 777353398, home: "Eintracht Spontent Düsseldorf", away: "DSHS SnowTrex Köln", score: "1:3", ballPoints: "79:98", sets: ["12:25", "25:23", "20:25", "22:25"], rankAfter: 3, venue: "DH Brinckmannstraße, Hulda Pankok (40225 Düsseldorf)", duration: 93, spectators: 90, galleryUrl: "https://www.flickr.com/photos/88608964@N07/albums/72177720329527185", articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778578046", statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/600448d6-814e-4936-a245-5248306bd6b0/3018", mvps: [{ team: "Eintracht Spontent Düsseldorf", name: "Lara Drölle" }, { team: "DSHS SnowTrex Köln", name: "Emelie Siegner" }], videoUrl: "https://www.youtube.com/watch?v=WYb3e9a45HU&t=3s", youtubeViews: 8926 },
  { weekday: "Samstag", date: "11.10.2025", time: "19:00", number: 3022, matchId: 777353429, home: "DSHS SnowTrex Köln", away: "BayerVolleys Leverkusen", score: "1:3", ballPoints: "74:97", sets: ["11:25", "20:25", "25:22", "18:25"], rankAfter: 6, venue: "Deutsche Sporthochschule Köln, Halle 22 (50933 Köln)", duration: 98, spectators: 300, galleryUrl: "https://www.flickr.com/photos/88608964@N07/albums/72177720329791370/", articleUrl: "https://www.dshs-snowtrex-koeln.de/erstes-heimspiel-ohne-happy-end-dshs-snowtrex-koeln-unterliegt-leverkusen-mit-13/", mvps: [{ team: "DSHS SnowTrex Köln", name: "Melanie Gosmann" }, { team: "BayerVolleys Leverkusen", name: "Tessa Müller" }], videoUrl: "https://www.youtube.com/watch?v=S7gQuAHzJvM", youtubeViews: 1251 },
  { weekday: "Samstag", date: "18.10.2025", time: "18:00", number: 3030, matchId: 777353472, home: "VfL Oythe", away: "DSHS SnowTrex Köln", score: "3:1", ballPoints: "101:95", sets: ["25:20", "26:24", "22:25", "28:26"], rankAfter: 8, venue: "SH Gymnasium Antonianum Vechta (49377 Vechta)", duration: 106, spectators: 208, articleUrl: "https://www.dshs-snowtrex-koeln.de/starker-auftritt-aber-ohne-lohn-koeln-verpasst-punktgewinn-in-oythe-nur-hauchduenn/", mvps: [{ team: "VfL Oythe", name: "Annelis Lotte Denise Tyws" }, { team: "DSHS SnowTrex Köln", name: "Annika Stenchly" }], videoUrl: "https://www.youtube.com/watch?v=92PSZAJd6Vw&t=23s", youtubeViews: 1095 },
  { weekday: "Sonntag", date: "02.11.2025", time: "16:00", number: 3036, matchId: 777353515, home: "DSHS SnowTrex Köln", away: "Neuseenland-Volleys Markkleeberg", score: "3:1", ballPoints: "96:79", sets: ["25:21", "21:25", "25:15", "25:18"], rankAfter: 9, venue: "Deutsche Sporthochschule Köln, Halle 22 (50933 Köln)", duration: 100, spectators: 180, galleryUrl: "https://www.flickr.com/photos/88608964@N07/albums/72177720330118334", articleUrl: "https://www.dshs-snowtrex-koeln.de/dshs-snowtrex-koeln-bezwingt-neuseenland-volleys-markkleeberg-mit-31-und-stoppt-negativserie/", mvps: [{ team: "DSHS SnowTrex Köln", name: "Annika Stenchly" }, { team: "Neuseenland-Volleys Markkleeberg", name: "Tabea-Éliane Dreiack" }], videoUrl: "https://www.youtube.com/watch?v=fBjhULBYJ4U", youtubeViews: 1399 },
  { weekday: "Sonntag", date: "16.11.2025", time: "16:00", number: 3048, matchId: 777353582, home: "Rote Raben Vilsbiburg", away: "DSHS SnowTrex Köln", score: "3:0", ballPoints: "75:56", sets: ["25:15", "25:23", "25:18"], rankAfter: 10, venue: "Ballsporthalle Vilsbiburg (84137 Vilsbiburg)", duration: 76, spectators: 916, articleUrl: "https://www.dshs-snowtrex-koeln.de/dshs-snowtrex-koeln-verliert-trotz-kaempferischer-phasen-03-in-vilsbiburg/", mvps: [{ team: "Rote Raben Vilsbiburg", name: "Pia Fernau" }, { team: "DSHS SnowTrex Köln", name: "Hannah Mörke" }], videoUrl: "https://www.youtube.com/watch?v=8egp1gOMuaw", youtubeViews: 1412 },
  { weekday: "Samstag", date: "22.11.2025", time: "19:00", number: 3050, matchId: 777353601, home: "DSHS SnowTrex Köln", away: "BBSC Berlin", score: "3:1", ballPoints: "94:81", sets: ["25:22", "25:20", "19:25", "25:14"], rankAfter: 9, venue: "Deutsche Sporthochschule Köln, Halle 22 (50933 Köln)", duration: 95, spectators: 130, galleryUrl: "https://www.flickr.com/photos/88608964@N07/albums/72177720330563204/", articleUrl: "https://www.dshs-snowtrex-koeln.de/dshs-snowtrex-koeln-mit-sieg-und-niederlage-am-doppelheimspielwochenende/", mvps: [{ team: "DSHS SnowTrex Köln", name: "Annika Stenchly" }, { team: "BBSC Berlin", name: "Paula Reinisch" }], videoUrl: "https://www.youtube.com/watch?v=5p1z2TILJAE", youtubeViews: 793 },
  { weekday: "Sonntag", date: "23.11.2025", time: "18:00", number: 3198, matchId: 777354496, home: "DSHS SnowTrex Köln", away: "VCO Dresden", score: "2:3", ballPoints: "98:96", sets: ["25:14", "25:17", "21:25", "14:25", "13:15"], rankAfter: 10, venue: "Deutsche Sporthochschule Köln, Halle 22 (50933 Köln)", duration: 102, spectators: 151, galleryUrl: "https://www.flickr.com/photos/88608964@N07/albums/72177720330563314", articleUrl: "https://www.dshs-snowtrex-koeln.de/dshs-snowtrex-koeln-mit-sieg-und-niederlage-am-doppelheimspielwochenende/", mvps: [{ team: "DSHS SnowTrex Köln", name: "Annika Stenchly" }, { team: "VCO Dresden", name: "Johanna Röhner" }], videoUrl: "https://www.youtube.com/watch?v=9C5l5mNIDkk", youtubeViews: 2051 },
  { weekday: "Sonntag", date: "30.11.2025", time: "15:00", number: 3060, matchId: 777353656, home: "Sparkassen Wildcats Stralsund", away: "DSHS SnowTrex Köln", score: "3:2", ballPoints: "108:98", sets: ["25:17", "23:25", "25:19", "20:25", "15:12"], rankAfter: 10, venue: "Diesterweg-Sporthalle (18435 Stralsund)", duration: 118, spectators: 317, galleryUrl: "https://www.flickr.com/photos/88608964@N07/albums/72177720330711434", articleUrl: "https://www.dshs-snowtrex-koeln.de/herzschlag-tiebreak-in-stralsund-dshs-snowtrex-koeln-unterliegt-den-wildcats-nach-grossem-kampf/", mvps: [{ team: "Sparkassen Wildcats Stralsund", name: "Gesa Brandstrup" }, { team: "DSHS SnowTrex Köln", name: "Emelie Siegner" }], videoUrl: "https://www.youtube.com/watch?v=PhDsLCEr7Ag", youtubeViews: 1678 },
  { weekday: "Samstag", date: "06.12.2025", time: "20:00", number: 3064, matchId: 777353687, home: "DSHS SnowTrex Köln", away: "NawaRo Straubing", score: "1:3", ballPoints: "65:97", sets: ["25:22", "13:25", "10:25", "17:25"], rankAfter: 10, venue: "Deutsche Sporthochschule Köln, Halle 22 (50933 Köln)", duration: 88, spectators: 120, galleryUrl: "https://www.flickr.com/photos/88608964@N07/albums/72177720330828304", articleUrl: "https://www.dshs-snowtrex-koeln.de/starker-auftakt-bitteres-ende-dshs-snowtrex-koeln-verliert-13-gegen-nawaro-straubing/", mvps: [{ team: "DSHS SnowTrex Köln", name: "Emelie Siegner" }, { team: "NawaRo Straubing", name: "Valbona Ismaili" }], videoUrl: "https://www.youtube.com/watch?v=0jImxEjn9xc", youtubeViews: 1260 },
  { weekday: "Sonntag", date: "07.12.2025", time: "15:00", number: 3085, matchId: 777353816, home: "DSHS SnowTrex Köln", away: "TV Dingolfing", score: "3:2", ballPoints: "109:105", sets: ["26:28", "17:25", "25:16", "25:22", "16:14"], rankAfter: 10, venue: "Deutsche Sporthochschule Köln, Halle 22 (50933 Köln)", duration: 111, spectators: 100, galleryUrl: "https://www.flickr.com/photos/88608964@N07/albums/72177720330800856", articleUrl: "https://www.dshs-snowtrex-koeln.de/thriller-in-halle-22-dshs-snowtrex-koeln-setzt-sich-knapp-gegen-tv-dingolfing-durch/", mvps: [{ team: "DSHS SnowTrex Köln", name: "Emelie Siegner" }, { team: "TV Dingolfing", name: "Carlotta Fleischmann" }], videoUrl: "https://www.youtube.com/watch?v=xpUnW_jfJYc", youtubeViews: 1258 },
  { weekday: "Samstag", date: "13.12.2025", time: "18:00", number: 3072, matchId: 777353730, home: "TV Planegg-Krailling", away: "DSHS SnowTrex Köln", score: "3:0", ballPoints: "75:57", sets: ["25:22", "25:16", "25:19"], rankAfter: 10, venue: "Feodor-Lynen-Gymnasium (82152 Planegg)", duration: 72, spectators: 125, galleryUrl: "https://www.flickr.com/photos/88608964@N07/albums/72177720330943102/", articleUrl: "https://www.dshs-snowtrex-koeln.de/koeln-ohne-punkte-in-planegg-niederlage-beim-tv-planegg-krailling/", mvps: [{ team: "TV Planegg-Krailling", name: "Nadine Yvonne Bernadette Raß" }, { team: "DSHS SnowTrex Köln", name: "Annika Stenchly" }], videoUrl: "https://www.youtube.com/watch?v=PJv4qotJzt8&t=7s", youtubeViews: 788 },
  { weekday: "Samstag", date: "20.12.2025", time: "20:00", number: 3078, matchId: 777353809, home: "TV Waldgirmes", away: "DSHS SnowTrex Köln", score: "1:3", ballPoints: "83:96", sets: ["21:25", "22:25", "25:21", "15:25"], rankAfter: 10, venue: "Sporthalle der Lahntalschule Atzbach (35633 Lahnau)", duration: 94, spectators: 199, articleUrl: "https://www.dshs-snowtrex-koeln.de/sechspunkte-wochenende-fuer-koeln-dshs-snowtrex-koeln-verabschiedet-sich-positiv-in-die-feiertagspause/", mvps: [{ team: "TV Waldgirmes", name: "Emma Carlotta Dogu" }, { team: "DSHS SnowTrex Köln", name: "Melanie Gosmann" }], videoUrl: "https://www.youtube.com/watch?v=khdnUTTvulc", youtubeViews: 913 },
  { weekday: "Sonntag", date: "21.12.2025", time: "15:00", number: 3008, matchId: 777353343, home: "DSHS SnowTrex Köln", away: "ESA Grimma Volleys", score: "3:0", ballPoints: "75:50", sets: ["25:11", "25:22", "25:17"], rankAfter: 6, venue: "Deutsche Sporthochschule Köln, Halle 22 (50933 Köln)", duration: 68, spectators: 140, galleryUrl: "https://www.flickr.com/photos/88608964@N07/albums/72177720331316793", articleUrl: "https://www.dshs-snowtrex-koeln.de/sechspunkte-wochenende-fuer-koeln-dshs-snowtrex-koeln-verabschiedet-sich-positiv-in-die-feiertagspause/", mvps: [{ team: "DSHS SnowTrex Köln", name: "Maike Brönhorst" }, { team: "ESA Grimma Volleys", name: "Meret Singer" }], videoUrl: "https://www.youtube.com/watch?v=VUeSA_cmOak", youtubeViews: 1043 },
  { weekday: "Sonntag", date: "11.01.2026", time: "16:00", number: 3097, matchId: 777353889, home: "DSHS SnowTrex Köln", away: "TV Hörde", score: "3:0", ballPoints: "75:50", sets: ["25:16", "25:15", "25:19"], rankAfter: 7, venue: "Deutsche Sporthochschule Köln, Halle 22 (50933 Köln)", duration: 70, spectators: 150, galleryUrl: "https://www.flickr.com/photos/88608964@N07/albums/72177720331416765", articleUrl: "https://www.dshs-snowtrex-koeln.de/blitzstart-kontrolle-heimsieg-koeln-startet-perfekt-in-die-rueckrunde/", mvps: [{ team: "DSHS SnowTrex Köln", name: "Annika Stenchly" }, { team: "TV Hörde", name: "Vanessa Gorny" }], videoUrl: "https://www.youtube.com/watch?v=lGeLlkRsns0", youtubeViews: 1046 },
  { weekday: "Samstag", date: "17.01.2026", time: "16:00", number: 3184, matchId: 777354424, home: "VCO Dresden", away: "DSHS SnowTrex Köln", score: "1:3", ballPoints: "90:95", sets: ["25:17", "26:28", "16:25", "23:25"], rankAfter: 5, venue: "Schulsporthalle des Sportschulzentrum (01067 Dresden)", duration: 98, spectators: 73, articleUrl: "https://www.dshs-snowtrex-koeln.de/ein-sechs-punkte-wochenende-in-sachsen-fuer-dshs-snowtrex-koeln/", mvps: [{ team: "VCO Dresden", name: "Emilia Schaarschmidt" }, { team: "DSHS SnowTrex Köln", name: "Hannah Mörke" }], videoUrl: "https://www.youtube.com/watch?v=Ok2_wA9qLdc&t=4694s", youtubeViews: 1481 },
  { weekday: "Sonntag", date: "18.01.2026", time: "15:00", number: 3099, matchId: 777353902, home: "ESA Grimma Volleys", away: "DSHS SnowTrex Köln", score: "1:3", ballPoints: "87:95", sets: ["18:25", "22:25", "25:20", "22:25"], rankAfter: 5, venue: "Muldentalhalle (04668 Grimma)", duration: 97, spectators: 295, articleUrl: "https://www.dshs-snowtrex-koeln.de/ein-sechs-punkte-wochenende-in-sachsen-fuer-dshs-snowtrex-koeln/", mvps: [{ team: "ESA Grimma Volleys", name: "Sophie Dreblow" }, { team: "DSHS SnowTrex Köln", name: "Annika Stenchly" }], videoUrl: "https://www.youtube.com/watch?v=AzUDGRhbIdM", youtubeViews: 982 },
  { weekday: "Samstag", date: "24.01.2026", time: "19:00", number: 3109, matchId: 777353963, home: "DSHS SnowTrex Köln", away: "Eintracht Spontent Düsseldorf", score: "3:1", ballPoints: "95:84", sets: ["25:21", "19:25", "25:14", "26:24"], rankAfter: 5, venue: "Deutsche Sporthochschule Köln, Halle 22 (50933 Köln)", duration: 97, spectators: 210, galleryUrl: "https://www.flickr.com/photos/88608964@N07/albums/72177720331727844", articleUrl: "https://www.dshs-snowtrex-koeln.de/sechster-sieg-in-folge-dshs-snowtrex-koeln-entscheidet-umkaempftes-derby-fuer-sich/", mvps: [{ team: "DSHS SnowTrex Köln", name: "Melanie Gosmann" }, { team: "Eintracht Spontent Düsseldorf", name: "Maya Lucia Kleinpeter" }], videoUrl: "https://www.youtube.com/watch?v=JYLFtvnXI3k&t=8485s", youtubeViews: 2247 },
  { weekday: "Sonntag", date: "01.02.2026", time: "16:00", number: 3113, matchId: 777353988, home: "BayerVolleys Leverkusen", away: "DSHS SnowTrex Köln", score: "3:1", ballPoints: "94:79", sets: ["26:24", "18:25", "25:17", "25:13"], rankAfter: 6, venue: "Ostermann-Arena (51373 Leverkusen)", duration: 100, spectators: 585, galleryUrl: "http://flickr.com/photos/88608964@N07/albums/72177720331801650", articleUrl: "https://www.dshs-snowtrex-koeln.de/derby-niederlage-beendet-koelner-siegesserie-dshs-snowtrex-koeln-unterliegt-bayervolleys-leverkusen-mit-13/", mvps: [{ team: "BayerVolleys Leverkusen", name: "Marian Mischo" }, { team: "DSHS SnowTrex Köln", name: "Marina Müller" }], videoUrl: "https://www.youtube.com/watch?v=ZnsIASbb8lI&t=5s", youtubeViews: 1072 },
  { weekday: "Sonntag", date: "08.02.2026", time: "16:00", number: 3121, matchId: 777354037, home: "DSHS SnowTrex Köln", away: "VfL Oythe", score: "1:3", ballPoints: "77:97", sets: ["25:20", "11:25", "16:25", "25:27"], rankAfter: 6, venue: "Deutsche Sporthochschule Köln, Halle 22 (50933 Köln)", duration: 89, spectators: 200, galleryUrl: "https://www.flickr.com/photos/88608964@N07/albums/72177720331938496", articleUrl: "https://www.dshs-snowtrex-koeln.de/bitteres-ende-im-vierten-satz-koeln-verpasst-tie-break-gegen-vfl-oythe/", mvps: [{ team: "DSHS SnowTrex Köln", name: "Annika Stenchly" }, { team: "VfL Oythe", name: "Maria Petkova" }], videoUrl: "https://www.youtube.com/watch?v=b8q62mTx9rY&t=4793s", youtubeViews: 1197 },
  { weekday: "Samstag", date: "14.02.2026", time: "18:00", number: 3127, matchId: 777354074, home: "Neuseenland-Volleys Markkleeberg", away: "DSHS SnowTrex Köln", score: "0:3", ballPoints: "66:77", sets: ["22:25", "25:27", "19:25"], rankAfter: 6, venue: "Neuseenlandhalle (04416 Markkleeberg)", duration: 86, spectators: 267, galleryUrl: "https://www.flickr.com/photos/88608964@N07/albums/72177720332096083/", articleUrl: "https://www.dshs-snowtrex-koeln.de/crunchtime-und-blockstaerke-entscheiden-koeln-holt-30-in-markkleeberg/", mvps: [{ team: "Neuseenland-Volleys Markkleeberg", name: "Thora Bauer" }, { team: "DSHS SnowTrex Köln", name: "Annika Stenchly" }], videoUrl: "https://www.youtube.com/watch?v=Fn6zbPXNvvo&t=8714s", youtubeViews: 1101 },
  { weekday: "Samstag", date: "21.02.2026", time: "19:00", number: 3139, matchId: 777354147, home: "DSHS SnowTrex Köln", away: "Rote Raben Vilsbiburg", score: "0:3", ballPoints: "49:75", sets: ["15:25", "15:25", "19:25"], rankAfter: 6, venue: "Deutsche Sporthochschule Köln, Halle 22 (50933 Köln)", duration: 58, spectators: 102, galleryUrl: "https://www.flickr.com/photos/88608964@N07/albums/72177720332174670", articleUrl: "https://www.dshs-snowtrex-koeln.de/vilsbiburg-gnadenlos-effektiv-koeln-unterliegt-dem-spitzenreiter-klar/", mvps: [{ team: "DSHS SnowTrex Köln", name: "Emelie Siegner" }, { team: "Rote Raben Vilsbiburg", name: "Pia Fernau" }], videoUrl: "https://www.youtube.com/watch?v=hxFniOAftro", youtubeViews: 1013 },
  { weekday: "Samstag", date: "07.03.2026", time: "18:00", number: 3141, matchId: 777354160, home: "BBSC Berlin", away: "DSHS SnowTrex Köln", score: "1:3", ballPoints: "89:99", sets: ["26:24", "22:25", "18:25", "23:25"], rankAfter: 6, venue: "Sporthalle Hämmerlingstraße (12555 Berlin)", duration: 111, spectators: 135, articleUrl: "https://www.dshs-snowtrex-koeln.de/dshs-snowtrex-koeln-gewinnt-umkaempftes-auswaertsspiel-in-berlin/", mvps: [{ team: "BBSC Berlin", name: "Anna-Lena Vogel" }, { team: "DSHS SnowTrex Köln", name: "Hannah Mörke" }], videoUrl: "https://www.youtube.com/watch?v=olp0UJ-UbZQ", youtubeViews: 777 },
  { weekday: "Samstag", date: "21.03.2026", time: "19:00", number: 3151, matchId: 777354221, home: "DSHS SnowTrex Köln", away: "Sparkassen Wildcats Stralsund", score: "3:2", ballPoints: "105:108", sets: ["15:25", "20:25", "30:28", "25:23", "15:7"], rankAfter: 6, venue: "Deutsche Sporthochschule Köln, Halle 22 (50933 Köln)", duration: 130, spectators: 150, articleUrl: "https://www.dshs-snowtrex-koeln.de/episches-comeback-dshs-snowtrex-koeln-trotzt-widrigkeiten-und-dreht-02-rueckstand/", mvps: [{ team: "DSHS SnowTrex Köln", name: "Annika Stenchly" }, { team: "Sparkassen Wildcats Stralsund", name: "Gesa Brandstrup" }], videoUrl: "https://www.youtube.com/watch?v=BN0fJktKmKU", youtubeViews: 1610 },
  { weekday: "Samstag", date: "28.03.2026", time: "19:00", number: 3155, matchId: 777354246, home: "NawaRo Straubing", away: "DSHS SnowTrex Köln", score: "3:1", ballPoints: "95:74", sets: ["20:25", "25:20", "25:15", "25:14"], rankAfter: 6, venue: "turmair Volleyballarena (94315 Straubing)", duration: 92, spectators: 500, articleUrl: "https://www.dshs-snowtrex-koeln.de/satzgewinn-beim-tabellenzweiten-dshs-snowtrex-koeln-zeigt-moral-in-straubing/", mvps: [{ team: "NawaRo Straubing", name: "Theresa Barner" }, { team: "DSHS SnowTrex Köln", name: "Annika Stenchly" }], videoUrl: "https://www.youtube.com/watch?v=-FkRIwJ7_KI&t=2427s", youtubeViews: 1193 },
  { weekday: "Sonntag", date: "12.04.2026", time: "15:00", number: 3163, matchId: 777354295, home: "DSHS SnowTrex Köln", away: "TV Planegg-Krailling", score: "1:3", ballPoints: "77:99", sets: ["14:25", "20:25", "26:24", "17:25"], rankAfter: 6, venue: "Deutsche Sporthochschule Köln, Halle 22 (50933 Köln)", duration: 103, spectators: 120, articleUrl: "https://www.dshs-snowtrex-koeln.de/auch-im-rueckspiel-kein-kraut-gewachsen-dshs-snowtrex-koeln-verliert-13-gegen-tvp/", mvps: [{ team: "DSHS SnowTrex Köln", name: "Hannah Zoe Bolsius" }, { team: "TV Planegg-Krailling", name: "Elisabeth Kettenbach" }], videoUrl: "https://www.youtube.com/watch?v=XQjxnNXWJ6E", youtubeViews: 1144 },
  { weekday: "Samstag", date: "25.04.2026", time: "19:00", number: 3169, matchId: 777354332, home: "DSHS SnowTrex Köln", away: "TV Waldgirmes", score: "0:3", ballPoints: "73:81", sets: ["27:29", "21:25", "25:27"], rankAfter: 6, venue: "Deutsche Sporthochschule Köln, Halle 22 (50933 Köln)", duration: 90, spectators: 310, articleUrl: "https://www.dshs-snowtrex-koeln.de/finale-entscheidung-vertagt-dshs-snowtrex-koeln-bleibt-trotz-niederlage-in-der-pole-position-um-platz-6/", mvps: [{ team: "DSHS SnowTrex Köln", name: "Annika Stenchly" }, { team: "TV Waldgirmes", name: "Leonie Amann" }], videoUrl: "https://www.youtube.com/watch?v=HU76cUZ11Bs", youtubeViews: 809 },
  { weekday: "Samstag", date: "02.05.2026", time: "19:00", number: 3176, matchId: 777354375, home: "TV Dingolfing", away: "DSHS SnowTrex Köln", score: "1:3", ballPoints: "97:101", sets: ["23:25", "25:22", "22:25", "27:29"], rankAfter: 6, venue: "Sporthalle Höll-Ost (84130 Dingolfing)", duration: 111, spectators: 270, articleUrl: "https://www.dshs-snowtrex-koeln.de/arbeitssieg-zum-saisonabschluss-koeln-gewinnt-krimi-in-dingolfing-und-sichert-platz-6/", mvps: [{ team: "TV Dingolfing", name: "Selina Ebner" }, { team: "DSHS SnowTrex Köln", name: "Milena Geist" }], videoUrl: "https://www.youtube.com/watch?v=xc_3w7i4JbQ&list=PLKvhsxfxEhVcbdeGhYZfXAPpB8UFaFWrp", youtubeViews: 1185 }
];
