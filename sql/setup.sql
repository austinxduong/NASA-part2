DROP TABLE IF EXISTS planets;

CREATE TABLE planets (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL,
    moons: TEXT,
    namesake TEXT,
    length_of_year TEXT,
    associated_zodiac: TEXT
)