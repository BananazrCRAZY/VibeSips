import os

from dotenv import load_dotenv
from sqlalchemy import create_engine

# reads vars in .env
load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")

# creates connection SQLAlchemy uses to communicate w/ PostgreSQL
engine = create_engine(DATABASE_URL)

# test connection
with engine.connect() as connection:
    print("Successfully connected to PostgreSQL!")