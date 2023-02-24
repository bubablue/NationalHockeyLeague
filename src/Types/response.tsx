export interface TeamStats {
  dates: [
    {
      date: string;
      games: [
        {
          gamePk: number;
          link: string;
          gameType: string;
          season: string;
          gameDate: string;
          status: {
            abstractGameState: string;
            codedGameState: string;
            detailedState: string;
            statusCode: string;
            startTimeTBD: boolean;
          };
          teams: {
            away: {
              leagueRecord: {
                wins: number;
                losses: number;
                ot: number;
                type: string;
              };
              score: number;
              team: {
                id: number;
                name: string;
                link: string;
              };
            };
            home: {
              leagueRecord: {
                wins: number;
                losses: number;
                ot: number;
                type: string;
              };
              score: number;
              team: {
                id: number;
                name: string;
                link: string;
              };
            };
          };
          venue: {
            name: string;
            link: string;
          };
          content: {
            link: string;
          };
        }
      ];
    }
  ];
}
export interface Team {
  copyright: string;
  dates: [
    {
      date: string;
      events: [];
      games: [
        {
          content: {
            link: string;
          };
          gameDate: string;
          gamePk: number;
          gameType: string;
          link: string;
          season: string;
          status: {
            abstractGameState: string;
            codedGameState: string;
            detailedState: string;
            startTimeTBD: boolean;
            statusCode: string;
          };
          teams: {
            away: {
              leagueRecord: {
                losses: number;
                ot: number;
                type: string;
                wins: number;
              };
              score: number;
              team: {
                id: number;
                name: string;
                link: string;
              };
            };
            home: {
              leagueRecord: {
                losses: number;
                ot: number;
                type: string;
                wins: number;
              };
              score: number;
              team: {
                id: number;
                name: string;
                link: string;
              };
            };
          };
          venue: {
            id: number;
            link: string;
            name: string;
          };
          matches: [
            {
              game: {
                gameDate: string;
                gamePk: number;
                gameType: string;
                link: string;
                season: string;
                status: {
                  abstractGameState: string;
                  codedGameState: string;
                  detailedState: string;
                  startTimeTBD: boolean;
                  statusCode: string;
                };
                teams: {
                  away: {
                    leagueRecord: {
                      losses: number;
                      ot: number;
                      type: string;
                      wins: number;
                    };
                    score: number;
                    team: {
                      id: number;
                      name: string;
                      link: string;
                    };
                  };
                  home: {
                    leagueRecord: {
                      losses: number;
                      ot: number;
                      type: string;
                      wins: number;
                    };
                    score: number;
                    team: {
                      id: number;
                      name: string;
                      link: string;
                    };
                  };
                };
                venue: {
                  id: number;
                  link: string;
                  name: string;
                };
              };
              link: string;
              matchType: string;
              season: string;
              seriesGameNumber: number;
              seriesSummary: {
                currentGame: number;
                description: string;
                gameLabel: string;
                gamesInSeries: number;
                numberOfGames: number;
                seriesLabel: string;
                seriesNumber: number;
                seriesStatus: string;
                seriesType: string;
                seriesWinningTeam: {
                  id: number;
                  link: string;
                  name: string;
                };
                seriesWinningTeamId: number;
                seriesWinningTeamLink: string;
                seriesWinningTeamName: string;
                status: string;
                totalGames: number;
                totalSeries: number;
                totalWins: number;
                wins: number;
              };
              source: string;
              teams: {
                away: {
                  leagueRecord: {
                    losses: number;
                    ot: number;
                    type: string;
                    wins: number;
                  };
                  score: number;
                  team: {
                    id: number;
                    name: string;
                    link: string;
                  };
                };
                home: {
                  leagueRecord: {
                    losses: number;
                    ot: number;
                    type: string;
                    wins: number;
                  };
                  score: number;
                  team: {
                    id: number;
                    name: string;
                    link: string;
                  };
                };
              };
            }
          ];
        }
      ];
      totalItems: number;
      totalEvents: number;
      totalGames: number;
      totalMatches: number;
    }
  ];
}
export interface game {
  broadcasts: [
    {
      id: number;
      name: string;
      type: string;
      language: string;
    }
  ];
  content: {
    link: string;
  };
  gameDate: string;
  gamePk: number;
  gameType: string;
  linescore: {
    currentPeriod: number;
    hasShootout: boolean;
    intermissionInfo: {
      intermissionTimeRemaining: number;
      intermissionTimeElapsed: number;
      inIntermission: boolean;
    };
    link: string;
    season: string;
    status: {
      abstractGameState: string;
      codedGameState: string;
      detailedState: string;
      statusCode: string;
      startTimeTBD: boolean;
    };
    teams: {
      away: {
        leagueRecord: {
          losses: number;
          ot: number;
          type: string;
          wins: number;
        };
        score: number;
        team: {
          abbreviation: string;
          active: boolean;
          conference: {
            id: number;
            link: string;
            name: string;
          };
          division: {
            id: number;
            link: string;
            name: string;
            nameShort: string;
            abbreviation: string;
          };
          firstYearOfPlay: string;
          franchise: {
            franchiseId: number;
            teamName: string;
            link: string;
          };
          franchiseId: number;
          id: number;
          link: string;
          locationName: string;
          name: string;
          shortName: string;
          teamName: string;
          officialSiteUrl: string;
          venue: {
            id: number;
            link: string;
            name: string;
            city: string;
            timeZone: {
              id: string;
              offset: number;
              tz: string;
            };
          };
        };
      };
      home: {
        leagueRecord: {
          losses: number;
          ot: number;
          type: string;
          wins: number;
        };
        score: number;
        team: {
          abbreviation: string;
          active: boolean;
          conference: {
            id: number;
            link: string;
            name: string;
          };
          division: {
            id: number;
            link: string;
            name: string;
            nameShort: string;
            abbreviation: string;
          };
          firstYearOfPlay: string;
          franchise: {
            franchiseId: number;
            teamName: string;
            link: string;
          };
          franchiseId: number;
          id: number;
          link: string;
          locationName: string;
          name: string;
          shortName: string;
          teamName: string;
          officialSiteUrl: string;
          venue: {
            id: number;
            link: string;
            name: string;
            city: string;
            timeZone: {
              id: string;
              offset: number;
              tz: string;
            };
          };
        };
      };
      tickets: [
        {
          ticketType: string;
          ticketLink: string;
        }
      ];
      venue: {
        id: number;
        link: string;
        name: string;
      };
    };
  };
}

export interface stats {
  copyRight: string;
  gameData: {
    datetime: {
      dateTime: string;
    };
    game: {
      pk: number;
      season: string;
      type: string;
    }
    players:[
      {
        id: number;
        fullName: string;
        link: string;
        firstName: string;
        lastName: string;
        primaryNumber: string;
        birthDate: string;
        currentAge: number;
        birthCity: string;
        birthStateProvince: string;
        birthCountry: string;
      }
    ],
    status: {
      abstractGameState: string;
      codedGameState: string;
      detailedState: string;
      statusCode: string;
      startTimeTBD: boolean;
    }
    teams: {
      away: {
        abbreviation: string;
        active: boolean;
        conference: {
          id: number;
          link: string;
          name: string;
        }
        division: {
          id: number;
          link: string;
          name: string;
          nameShort: string;
          abbreviation: string;
        }
        firstYearOfPlay: string;
        franchise: {
          franchiseId: number;
          teamName: string;
          link: string;
        }
        franchiseId: number;
        id: number;
        link: string;
        locationName: string;
        name: string;
        shortName: string;
        teamName: string;
        officialSiteUrl: string;
        venue: {
          id: number;
          link: string;
          name: string;
          city: string;
          timeZone: {
            id: string;
            offset: number;
            tz: string;
          }
        }
      }
      home: {
        abbreviation: string;
        active: boolean;
        conference: {
          id: number;
          link: string;
          name: string;
        }
        division: {
          id: number;
          link: string;
          name: string;
          nameShort: string;
          abbreviation: string;
        }
        firstYearOfPlay: string;
        franchise: {
          franchiseId: number;
          teamName: string;
          link: string;
        }
        franchiseId: number;
        id: number;
        link: string;
        locationName: string;
        name: string;
        shortName: string;
        teamName: string;
        officialSiteUrl: string;
        venue: {
          id: number;
          link: string;
          name: string;
          city: string;
          timeZone: {
            id: string;
            offset: number;
            tz: string;
          }
        }
      }
    },
    venue: {
      id: number;
      link: string;
      name: string;
    }
    gamePk: number;
    link: string;
  }
  liveData: {
    plays: {
      allPlays: [
        {
          result: {
            event: string;
            eventCode: string;
            eventTypeId: string;
            description: string;
            secondaryType: string;
            strength: {
              code: string;
              name: string;
            }
            gameWinningGoal: boolean;
            emptyNet: boolean;
            shootout: boolean;
            team: {
              id: number;
              name: string;
            }
          }
          about: {
            eventIdx: number;
            eventId: number;
            period: number;
            periodType: string;
            ordinalNum: string;
            periodTime: string;
            periodTimeRemaining: string;
            dateTime: string;
            goals: {
              away: number;
              home: number;
            }
            team: {
              id: number;
              name: string;
            }
          }
          coordinates: {
            x: number;
            y: number;
          }
          players: [
            {
              player: {
                id: number;
                fullName: string;
                link: string;
              }
              playerType: string;
            }
          ]
        }
      ]
    }
    linescore: {
      currentPeriod: number;
      currentPeriodOrdinal: string;
      currentPeriodTimeRemaining: string;
      periods: [
        {
          periodType: string;
          startTime: string;
          endTime: string;
          num: number;
          ordinalNum: string;
          home: {
            goals: number;
            shotsOnGoal: number;
            rinkSide: string;
          }
          away: {
            goals: number;
            shotsOnGoal: number;
            rinkSide: string;
          }
        }
      ]
      shootoutInfo: {
        away: {
          scores: number;
          attempts: number;
        }
        home: {
          scores: number;
          attempts: number;
        }
      }
      teams: {
        away: {
          team: {
            id: number;
            name: string;
          }
          goals: number;
          shotsOnGoal: number;
        }
        home: {
          team: {
            id: number;
            name: string;
          }
          goals: number;
          shotsOnGoal: number;
        }
      }
    }
    decisions: {}
    boxscore: {}
  };
}
