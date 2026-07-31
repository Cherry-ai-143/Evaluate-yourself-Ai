from fastapi import HTTPException, status
from sqlalchemy.orm import Session

from app.models.user import User
from app.repositories.assessment import AssessmentRepository
from app.schemas.assessment import AssessmentCreate, AssessmentUpdate


class AssessmentService:

    def __init__(self, db: Session):
        self.repository = AssessmentRepository(db)

    def create_assessment(
        self,
        assessment_data: AssessmentCreate,
        current_user: User,
    ):
        # Only Teacher or Admin can create assessments
        if current_user.role.name not in ["TEACHER", "ADMIN"]:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="Only teachers and admins can create assessments",
            )

        return self.repository.create_assessment(
            assessment_data=assessment_data,
            created_by=current_user.id,
        )

    def get_all_assessments(self):
        return self.repository.get_all_assessments()

    def get_assessment_by_id(self, assessment_id: int):

        assessment = self.repository.get_assessment_by_id(assessment_id)

        if not assessment:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Assessment not found",
            )

        return assessment

    def update_assessment(
        self,
        assessment_id: int,
        assessment_data: AssessmentUpdate,
        current_user: User,
    ):

        assessment = self.get_assessment_by_id(assessment_id)

        # Only owner or admin
        if (
            assessment.created_by != current_user.id
            and current_user.role.name != "ADMIN"
        ):
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="You are not allowed to update this assessment",
            )

        return self.repository.update_assessment(
            assessment,
            assessment_data,
        )

    def delete_assessment(
        self,
        assessment_id: int,
        current_user: User,
    ):

        assessment = self.get_assessment_by_id(assessment_id)

        if (
            assessment.created_by != current_user.id
            and current_user.role.name != "ADMIN"
        ):
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="You are not allowed to delete this assessment",
            )

        self.repository.delete_assessment(assessment)

        return {
            "message": "Assessment deleted successfully"
        }