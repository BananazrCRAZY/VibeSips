from database import engine, Base
from models import CoffeeShop

Base.metadata.create_all(bind=engine)

print("Tables created successfully!")