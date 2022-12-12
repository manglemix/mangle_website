CREATE TABLE EndlessLeaderboard (
    Username NVARCHAR(16) NOT NULL,
    Difficulty TINYINT NOT NULL,
    Levels SMALLINT NOT NULL,
    Time DOUBLE NOT NULL,
    unique (Username, Difficulty)
);
CREATE TABLE TournamentWinners (
    Username NVARCHAR(16) NOT NULL,
    Tournament INT NOT NULL,
    unique (Username, Tournament)
);