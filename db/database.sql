CREATE DATABASE IF NOT EXISTS noiseregister;

use noiseregister;

CREATE TABLE register (
    id VARCHAR(40) NOT NULL,
    intensity INT(2) NOT NULL,
    dateregister DATETIME NOT NULL,
    PRIMARY KEY (id)
);

DESCRIBE register;