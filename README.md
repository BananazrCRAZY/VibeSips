to get the pip requirements into the txt
pip freeze > requirements.txt

to activate python environment in backend
venv\Scripts\activate
uvicorn main:app --reload
localhost:8000