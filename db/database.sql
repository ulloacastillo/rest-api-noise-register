CREATE DATABASE IF NOT EXISTS noiseregister;

use noiseregister;

CREATE TABLE register (
    id INT(11) NOT NULL AUTO_INCREMENT,
    intensity INT(2) NOT NULL,
    dateregister TIMESTAMP NOT NULL DEFAULT  NOW(),
    PRIMARY KEY (id)
);

DESCRIBE register;