from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

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
    return [
    {
        "id": 1,
        "name": "Arcade Coffee Roasters",
        "city": "Riverside"
    },
    {
        "id": 2,
        "name": "Condron Coffee",
        "city": "Riverside"
    }
]