from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from companies import get_company_info
from urllib.parse import unquote

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
@app.get("/api/home")
def read_root():
    return {
        'message': "Hello World!",
        'team': ['Vatsal', 'Miten', 'Laskhit']
    }

@app.get("/company")
def get_company_details(company: str, location: str):
    try:
        company = unquote(company)
        location = unquote(location)
        company_info = get_company_info(company, location)
        return company_info
    except Exception as e:
        return {
            "error": str(e)  # Return error message as JSON response if an exception occurs
        }
