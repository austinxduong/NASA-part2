DROP TABLE IF EXISTS planets;

CREATE TABLE planets (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL,
    moons: SMALLINT NOT NULL,
    namesake TEXT NOT NULL,
    atmosphere TEXT NOT NULL,
    length_of_year SMALLINT NOT NULL,
    associated_zodiac: TEXT NOT NULL
)