to get the pip requirements into the txt
pip freeze > requirements.txt

to activate python environment in backend
venv\Scripts\activate
uvicorn main:app --reload
localhost:8000

for react page in frontend
npm run dev
http://localhost:5173