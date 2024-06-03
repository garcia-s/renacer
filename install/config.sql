CREATE TABLE IF NOT EXISTS config (
    name VARCHAR(50),
    value VARCHAR(255)
)

CREATE TABLE IF NOT EXISTS users (
    id VARCHAR(20) PRIMARY KEY,
    email VARCHAR(50) NOT NULL,
    pass text NOT NULL,
    salt VARCHAR(200) NOT NULL,
    cycles int NOT NULL
)
