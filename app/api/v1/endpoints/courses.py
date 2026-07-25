from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session

from app.database.session import get_db
from app.api.deps import get_current_user
from app.models.user import User
from app.schemas.course import (
    CourseCreate,
    CourseResponse,
    CourseUpdate,
)
from app.services.course import CourseService

router = APIRouter(
    prefix="/courses",
    tags=["Courses"],
)


# Create Course
@router.post(
    "/",
    response_model=CourseResponse,
    status_code=status.HTTP_201_CREATED,
)
def create_course(
    course_data: CourseCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = CourseService(db)

    return service.create_course(
        course_data,
        current_user,
    )


# Get All Courses
@router.get(
    "/",
    response_model=list[CourseResponse],
)
def get_all_courses(
    db: Session = Depends(get_db),
):
    service = CourseService(db)

    return service.get_all_courses()


# Get Course By ID
@router.get(
    "/{course_id}",
    response_model=CourseResponse,
)
def get_course_by_id(
    course_id: int,
    db: Session = Depends(get_db),
):
    service = CourseService(db)

    return service.get_course_by_id(course_id)


# Update Course
@router.put(
    "/{course_id}",
    response_model=CourseResponse,
)
def update_course(
    course_id: int,
    course_data: CourseUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = CourseService(db)

    return service.update_course(
        course_id,
        course_data,
        current_user,
    )


# Delete Course
@router.delete(
    "/{course_id}",
)
def delete_course(
    course_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = CourseService(db)

    return service.delete_course(
        course_id,
        current_user,
    )