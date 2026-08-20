from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from app.database import get_db
from app.models import CoffeeShop

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# api call endpoint
@app.get("/coffee-shops")
def get_coffee_shops(db: Session = Depends(get_db)):
    coffee_shops = db.query(CoffeeShop).all()

    return coffee_shops