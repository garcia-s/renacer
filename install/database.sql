
CREATE TABLE IF NOT EXISTS users (
    id VARCHAR(20) PRIMARY KEY,
    role VARCHAR(30) NOT NULL,
    email VARCHAR(50) NOT NULL,
    pass text NOT NULL,
    salt VARCHAR(200) NOT NULL,
    cycles int NOT NULL
);
