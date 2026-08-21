from fastapi import FastAPI, Depends, HTTPException
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

@app.get("/coffee-shops/{shop_id}")
def get_coffee_shop(shop_id: int, db: Session = Depends(get_db)):
    coffee_shop = (
        db.query(CoffeeShop)
        .filter(CoffeeShop.id == shop_id)
        .first()
    )

    if coffee_shop is None:
        raise HTTPException(
            status_code = 404,
            detail = "Coffee shop not found"
        )

    return coffee_shop