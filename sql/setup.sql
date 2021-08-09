DROP TABLE IF EXISTS planet;

CREATE TABLE planet (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL,
    namesake TEXT,
    lengthOfYear TEXT,
    moons: TEXT,
    zodiacs: TEXT
)