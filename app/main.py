from contextlib import asynccontextmanager

from fastapi import FastAPI
from sqlalchemy import text

from app.api.v1.api import api_router
from app.core.config import settings
from app.database.database import engine

# Import all models so they are registered with Base.metadata
import app.models


@asynccontextmanager
async def lifespan(app: FastAPI):
    print("Creating database tables...")

    # We are using Alembic migrations,
    # so we don't use Base.metadata.create_all()

    yield

    print("Application shutting down...")


app = FastAPI(
    title=settings.app_name,
    version=settings.app_version,
    lifespan=lifespan,
)


# -------------------------
# Include API Routes
# -------------------------
app.include_router(
    api_router,
    prefix="/api/v1",
)


# -------------------------
# Root Endpoint
# -------------------------
@app.get("/")
def root():
    return {
        "message": f"Welcome to {settings.app_name}",
        "version": settings.app_version,
    }


# -------------------------
# Health Check
# -------------------------
@app.get("/health")
def health():
    try:
        with engine.connect() as connection:
            connection.execute(text("SELECT 1"))

        return {
            "status": "Database Connected Successfully"
        }

    except Exception as e:
        return {
            "status": "Database Connection Failed",
            "error": str(e)
        }