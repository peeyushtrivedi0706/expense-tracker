from fastapi import FastAPI

app = FastAPI(title="Expense Tracker")

@app.get('/health')
def healthcheck() -> dict[str, str]:
    return {'status': 'ok'}
