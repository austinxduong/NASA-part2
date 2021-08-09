DROP TABLE IF EXISTS planet;

CREATE TABLE planet (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL,
    namesake TEXT,
    length_of_year TEXT,
    moons: TEXT,
    associated_zodiac: TEXT
)