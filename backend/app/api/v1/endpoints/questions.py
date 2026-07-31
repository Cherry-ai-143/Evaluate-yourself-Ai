from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session

from app.api.deps import get_db, get_current_user
from app.models.user import User
from app.schemas.question import (
    QuestionCreate,
    QuestionResponse,
    QuestionUpdate,
)
from app.services.question import QuestionService

router = APIRouter()


@router.post(
    "/",
    response_model=QuestionResponse,
    status_code=status.HTTP_201_CREATED,
)
def create_question(
    question: QuestionCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = QuestionService(db)

    return service.create_question(
        question,
        current_user,
    )


@router.get(
    "/",
    response_model=list[QuestionResponse],
)
def get_all_questions(
    db: Session = Depends(get_db),
):
    service = QuestionService(db)

    return service.get_all_questions()


@router.get(
    "/{question_id}",
    response_model=QuestionResponse,
)
def get_question(
    question_id: int,
    db: Session = Depends(get_db),
):
    service = QuestionService(db)

    return service.get_question_by_id(
        question_id
    )


@router.get(
    "/assessment/{assessment_id}",
    response_model=list[QuestionResponse],
)
def get_questions_by_assessment(
    assessment_id: int,
    db: Session = Depends(get_db),
):
    service = QuestionService(db)

    return service.get_questions_by_assessment(
        assessment_id
    )


@router.put(
    "/{question_id}",
    response_model=QuestionResponse,
)
def update_question(
    question_id: int,
    question_data: QuestionUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = QuestionService(db)

    return service.update_question(
        question_id,
        question_data,
        current_user,
    )


@router.delete(
    "/{question_id}",
)
def delete_question(
    question_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = QuestionService(db)

    return service.delete_question(
        question_id,
        current_user,
    )