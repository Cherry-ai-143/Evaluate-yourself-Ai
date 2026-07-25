from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session

from app.api.deps import get_db
from app.api.deps import get_current_user
from app.models.user import User
from app.schemas.assessment import (
    AssessmentCreate,
    AssessmentResponse,
    AssessmentUpdate,
)
from app.services.assessment import AssessmentService

router = APIRouter()


@router.post(
    "/",
    response_model=AssessmentResponse,
    status_code=status.HTTP_201_CREATED,
)
def create_assessment(
    assessment: AssessmentCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = AssessmentService(db)
    return service.create_assessment(
        assessment,
        current_user,
    )


@router.get(
    "/",
    response_model=list[AssessmentResponse],
)
def get_all_assessments(
    db: Session = Depends(get_db),
):
    service = AssessmentService(db)
    return service.get_all_assessments()


@router.get(
    "/{assessment_id}",
    response_model=AssessmentResponse,
)
def get_assessment(
    assessment_id: int,
    db: Session = Depends(get_db),
):
    service = AssessmentService(db)
    return service.get_assessment_by_id(assessment_id)


@router.put(
    "/{assessment_id}",
    response_model=AssessmentResponse,
)
def update_assessment(
    assessment_id: int,
    assessment_data: AssessmentUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = AssessmentService(db)
    return service.update_assessment(
        assessment_id,
        assessment_data,
        current_user,
    )


@router.delete(
    "/{assessment_id}",
)
def delete_assessment(
    assessment_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = AssessmentService(db)
    return service.delete_assessment(
        assessment_id,
        current_user,
    )