import os
from pathlib import Path

from dotenv import load_dotenv
from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, sessionmaker

# reads vars in .env
BASE_DIR = Path(__file__).resolve().parent.parent
load_dotenv(BASE_DIR / ".env")

DATABASE_URL = os.getenv("DATABASE_URL")

# creates connection SQLAlchemy uses to communicate w/ PostgreSQL
engine = create_engine(DATABASE_URL)

# test connection
#with engine.connect() as connection:
#    print("Successfully connected to PostgreSQL!")

SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)

Base = declarative_base()