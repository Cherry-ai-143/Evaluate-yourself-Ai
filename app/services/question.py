from fastapi import HTTPException, status
from sqlalchemy.orm import Session

from app.models.user import User
from app.repositories.assessment import AssessmentRepository
from app.repositories.question import QuestionRepository
from app.schemas.question import (
    QuestionCreate,
    QuestionUpdate,
)


class QuestionService:

    def __init__(self, db: Session):
        self.question_repository = QuestionRepository(db)
        self.assessment_repository = AssessmentRepository(db)

    def create_question(
        self,
        question_data: QuestionCreate,
        current_user: User,
    ):
        # Only Teacher or Admin
        if current_user.role.name not in ["TEACHER", "ADMIN"]:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="Only teachers and admins can create questions",
            )

        assessment = self.assessment_repository.get_assessment_by_id(
            question_data.assessment_id
        )

        if not assessment:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Assessment not found",
            )

        # Teacher must own the assessment (Admin can bypass)
        if (
            assessment.created_by != current_user.id
            and current_user.role.name != "ADMIN"
        ):
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="You are not allowed to add questions to this assessment",
            )

        return self.question_repository.create_question(
            question_data
        )

    def get_all_questions(self):
        return self.question_repository.get_all_questions()

    def get_question_by_id(
        self,
        question_id: int,
    ):
        question = self.question_repository.get_question_by_id(
            question_id
        )

        if not question:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Question not found",
            )

        return question

    def get_questions_by_assessment(
        self,
        assessment_id: int,
    ):
        return self.question_repository.get_questions_by_assessment(
            assessment_id
        )

    def update_question(
        self,
        question_id: int,
        question_data: QuestionUpdate,
        current_user: User,
    ):
        question = self.get_question_by_id(question_id)

        assessment = self.assessment_repository.get_assessment_by_id(
            question.assessment_id
        )

        if (
            assessment.created_by != current_user.id
            and current_user.role.name != "ADMIN"
        ):
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="You are not allowed to update this question",
            )

        return self.question_repository.update_question(
            question,
            question_data,
        )

    def delete_question(
        self,
        question_id: int,
        current_user: User,
    ):
        question = self.get_question_by_id(question_id)

        assessment = self.assessment_repository.get_assessment_by_id(
            question.assessment_id
        )

        if (
            assessment.created_by != current_user.id
            and current_user.role.name != "ADMIN"
        ):
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="You are not allowed to delete this question",
            )

        self.question_repository.delete_question(question)

        return {
            "message": "Question deleted successfully"
        }