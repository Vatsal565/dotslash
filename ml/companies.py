from groq import Groq
import json
import re

api_key = "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"

def get_company_info(company_name: str, location: str):
    """Fetches company details using Groq AI."""
    client = Groq(api_key=api_key)

    # Create a structured prompt for the AI model
    prompt = f"""
    Extract key details about the company based on the given prompt:
    Strictly always return response in JSON format as shown in example
    
    Company: {company_name}
    Location: {location}
    
    Provide the following details:
    1. Official Name
    2. Industry Type
    3. Headquarters / Main Office Location
    4. Key Products / Services
    5. Website (if available)

    Write the competitors based on the same location, sector, and services.
    """

    prompt += """
    Example: 
    Input :
    {
        "company_name": "Avadh Group",
        "location": "Surat, India"
    }

    Output : 
    {
        "company": {
            "official_name": "Avadh Group",
            "industry_type": "Real Estate and Construction",
            "headquarters": "Surat, India",
            "key_products_services": [
                "Development of residential and commercial projects (apartments, villas, office spaces)",
                "Property management",
                "Interior design",
                "Construction"
            ],
            "website": "Not Available"
        },
        "competitors": [
            {
                "name": "Sangini Group",
                "industry_type": "Real Estate and Construction",
                "headquarters": "Surat, India",
                "key_products_services": [
                    "Residential and commercial real estate development"
                ]
            },
            {
                "name": "Rajhans Group",
                "industry_type": "Real Estate and Construction",
                "headquarters": "Surat, India",
                "key_products_services": [
                    "Property development",
                    "Interior design",
                    "Construction"
                ]
            },
            {
                "name": "JRD Group",
                "industry_type": "Real Estate and Construction",
                "headquarters": "Surat, India",
                "key_products_services": [
                    "Development of residential and commercial projects (apartments, villas, office spaces)"
                ]
            },
            {
                "name": "BK Jewels",
                "industry_type": "Real Estate and Construction",
                "headquarters": "Surat, India",
                "key_products_services": [
                    "Residential and commercial real estate development (apartments, villas, office spaces))"
                ]
            },
            {
                "name": "SPC Group",
                "industry_type": "Real Estate and Construction",
                "headquarters": "Surat, India",
                "key_products_services": [
                    "Property development",
                    "Interior design",
                    "Construction"
                ]
            }
        ]
    }
    """

    # Call Groq API
    completion = client.chat.completions.create(
        messages=[
            {"role": "system", "content": "You are a helpful assistant that extracts structured company information."},
            {"role": "user", "content": prompt}
        ],
        model="llama-3.3-70b-versatile",
        temperature=0.3,
        max_tokens=1000
    )

    # Extract response safely
    response_content = str(completion.choices[0].message.content).strip()
    
    if not response_content:
        raise ValueError("Empty response received from Groq AI.")

    # Remove code block formatting if present
    cleaned_json = re.sub(r"```json|```", "", response_content).strip()

    try:
        return json.loads(cleaned_json)  # Convert to Python dictionary
    except json.JSONDecodeError as e:
        print("Invalid JSON Response:", response_content)
        raise ValueError("Failed to parse response as JSON.") from e

if __name__ == "__main__":
    company_name = "Avadh Group"
    location = "Surat, India"
    api_key = "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"

    try:
        company_info = get_company_info(company_name, location)
        print(json.dumps(company_info, indent=4))  # Pretty print JSON output
    except Exception as e:
        print("Error:", e)
