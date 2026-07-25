from fastapi import (
    APIRouter,
    Depends,
    HTTPException,
    status,
)
from sqlalchemy.orm import Session

from app.database.session import get_db
from app.schemas.chapter import (
    ChapterCreate,
    ChapterUpdate,
    ChapterResponse,
)
from app.services.chapter import ChapterService
from app.api.deps import get_current_user
from app.models.user import User

router = APIRouter(
    prefix="/chapters",
    tags=["Chapters"],
)


# Create Chapter
@router.post(
    "/",
    response_model=ChapterResponse,
    status_code=status.HTTP_201_CREATED,
)
def create_chapter(
    chapter: ChapterCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = ChapterService(db)

    try:
        return service.create_chapter(
            chapter,
            current_user,
        )
    except ValueError as e:
        raise HTTPException(
            status_code=404,
            detail=str(e),
        )
    except PermissionError as e:
        raise HTTPException(
            status_code=403,
            detail=str(e),
        )


# Get All Chapters
@router.get(
    "/",
    response_model=list[ChapterResponse],
)
def get_all_chapters(
    db: Session = Depends(get_db),
):
    service = ChapterService(db)
    return service.get_all_chapters()


# Get Chapter By ID
@router.get(
    "/{chapter_id}",
    response_model=ChapterResponse,
)
def get_chapter_by_id(
    chapter_id: int,
    db: Session = Depends(get_db),
):
    service = ChapterService(db)

    try:
        return service.get_chapter_by_id(
            chapter_id,
        )
    except ValueError as e:
        raise HTTPException(
            status_code=404,
            detail=str(e),
        )


# Get Chapters By Course
@router.get(
    "/course/{course_id}",
    response_model=list[ChapterResponse],
)
def get_chapters_by_course(
    course_id: int,
    db: Session = Depends(get_db),
):
    service = ChapterService(db)
    return service.get_chapters_by_course(
        course_id,
    )


# Update Chapter
@router.put(
    "/{chapter_id}",
    response_model=ChapterResponse,
)
def update_chapter(
    chapter_id: int,
    chapter: ChapterUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = ChapterService(db)

    try:
        return service.update_chapter(
            chapter_id,
            chapter,
            current_user,
        )
    except ValueError as e:
        raise HTTPException(
            status_code=404,
            detail=str(e),
        )
    except PermissionError as e:
        raise HTTPException(
            status_code=403,
            detail=str(e),
        )


# Delete Chapter
@router.delete(
    "/{chapter_id}",
)
def delete_chapter(
    chapter_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = ChapterService(db)

    try:
        return service.delete_chapter(
            chapter_id,
            current_user,
        )
    except ValueError as e:
        raise HTTPException(
            status_code=404,
            detail=str(e),
        )
    except PermissionError as e:
        raise HTTPException(
            status_code=403,
            detail=str(e),
        )