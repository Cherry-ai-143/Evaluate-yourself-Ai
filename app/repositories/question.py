from sqlalchemy import select
from sqlalchemy.orm import Session

from app.models.question import Question
from app.schemas.question import (
    QuestionCreate,
    QuestionUpdate,
)


class QuestionRepository:

    def __init__(self, db: Session):
        self.db = db

    def create_question(
        self,
        question_data: QuestionCreate,
    ) -> Question:

        question = Question(
            assessment_id=question_data.assessment_id,
            question_text=question_data.question_text,
            option_a=question_data.option_a,
            option_b=question_data.option_b,
            option_c=question_data.option_c,
            option_d=question_data.option_d,
            correct_option=question_data.correct_option,
            marks=question_data.marks,
        )

        self.db.add(question)
        self.db.commit()
        self.db.refresh(question)

        return question

    def get_all_questions(self):

        query = select(Question)

        result = self.db.execute(query)

        return result.scalars().all()

    def get_question_by_id(
        self,
        question_id: int,
    ) -> Question | None:

        query = select(Question).where(
            Question.id == question_id
        )

        result = self.db.execute(query)

        return result.scalar_one_or_none()

    def get_questions_by_assessment(
        self,
        assessment_id: int,
    ):

        query = select(Question).where(
            Question.assessment_id == assessment_id
        )

        result = self.db.execute(query)

        return result.scalars().all()

    def update_question(
        self,
        question: Question,
        question_data: QuestionUpdate,
    ) -> Question:

        update_data = question_data.model_dump(
            exclude_unset=True
        )

        for key, value in update_data.items():
            setattr(question, key, value)

        self.db.commit()
        self.db.refresh(question)

        return question

    def delete_question(
        self,
        question: Question,
    ):

        self.db.delete(question)
        self.db.commit()