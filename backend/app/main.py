from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database import SessionLocal
from app.models import CoffeeShop

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/coffee-shops")
def get_coffee_shops():
    db = SessionLocal()

    coffee_shops = db.query(CoffeeShop).all()

    db.close()

    return coffee_shops