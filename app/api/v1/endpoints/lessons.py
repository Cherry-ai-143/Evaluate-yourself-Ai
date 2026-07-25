from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session

from app.database.session import get_db
from app.api.deps import get_current_user

from app.models.user import User

from app.schemas.lesson import (
    LessonCreate,
    LessonUpdate,
    LessonResponse,
)

from app.services.lesson import LessonService


router = APIRouter(
    prefix="/lessons",
    tags=["Lessons"],
)


# Create Lesson
@router.post(
    "/",
    response_model=LessonResponse,
    status_code=status.HTTP_201_CREATED,
)
def create_lesson(
    lesson_data: LessonCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = LessonService(db)

    return service.create_lesson(
        lesson_data,
        current_user,
    )


# Get All Lessons
@router.get(
    "/",
    response_model=list[LessonResponse],
)
def get_all_lessons(
    db: Session = Depends(get_db),
):
    service = LessonService(db)

    return service.get_all_lessons()


# Get Lesson By ID
@router.get(
    "/{lesson_id}",
    response_model=LessonResponse,
)
def get_lesson_by_id(
    lesson_id: int,
    db: Session = Depends(get_db),
):
    service = LessonService(db)

    return service.get_lesson_by_id(
        lesson_id,
    )


# Update Lesson
@router.put(
    "/{lesson_id}",
    response_model=LessonResponse,
)
def update_lesson(
    lesson_id: int,
    lesson_data: LessonUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = LessonService(db)

    return service.update_lesson(
        lesson_id,
        lesson_data,
        current_user,
    )


# Delete Lesson
@router.delete(
    "/{lesson_id}",
)
def delete_lesson(
    lesson_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = LessonService(db)

    return service.delete_lesson(
        lesson_id,
        current_user,
    )