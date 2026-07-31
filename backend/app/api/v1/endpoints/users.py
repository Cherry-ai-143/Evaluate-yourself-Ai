from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session

from app.api.deps import get_db
from app.schemas.user import UserCreate, UserResponse
from app.services.user import UserService


from app.api.deps import get_current_user
from app.models.user import User
from app.core.role_checker import RoleChecker

router = APIRouter()


@router.post(
    "/",
    response_model=UserResponse,
    status_code=status.HTTP_201_CREATED,
)
def create_user(
    user: UserCreate,
    db: Session = Depends(get_db),
):
    service = UserService(db)

    return service.register_user(user)

@router.get(
    "/me",
    response_model=UserResponse
)
def get_current_logged_user(
    current_user: User = Depends(get_current_user)
):
    return current_user

@router.get("/admin")
def admin_dashboard(
    current_user=Depends(RoleChecker(["admin"]))
):
    return {
        "message": "Welcome Admin!",
        "user": current_user.email
    }


@router.get("/teacher")
def teacher_dashboard(
    current_user=Depends(RoleChecker(["teacher"]))
):
    return {
        "message": "Welcome Teacher!",
        "user": current_user.email
    }


@router.get("/student")
def student_dashboard(
    current_user=Depends(RoleChecker(["student"]))
):
    return {
        "message": "Welcome Student!",
        "user": current_user.email
    }