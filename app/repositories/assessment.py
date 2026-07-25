from sqlalchemy import select
from sqlalchemy.orm import Session

from app.models.assessment import Assessment
from app.schemas.assessment import AssessmentCreate, AssessmentUpdate


class AssessmentRepository:

    def __init__(self, db: Session):
        self.db = db

    def create_assessment(
        self,
        assessment_data: AssessmentCreate,
        created_by: int
    ) -> Assessment:

        assessment = Assessment(
        course_id=assessment_data.course_id,    
        title=assessment_data.title,
        description=assessment_data.description,
        duration_minutes=assessment_data.duration_minutes,
        total_marks=assessment_data.total_marks,
        created_by=created_by,
    )

        self.db.add(assessment)
        self.db.commit()
        self.db.refresh(assessment)

        return assessment

    def get_all_assessments(self):
        query = select(Assessment)
        result = self.db.execute(query)
        return result.scalars().all()

    def get_assessment_by_id(
        self,
        assessment_id: int
    ) -> Assessment | None:

        query = select(Assessment).where(
            Assessment.id == assessment_id
        )

        result = self.db.execute(query)
        return result.scalar_one_or_none()

    def update_assessment(
        self,
        assessment: Assessment,
        assessment_data: AssessmentUpdate
    ) -> Assessment:

        update_data = assessment_data.model_dump(exclude_unset=True)

        for key, value in update_data.items():
            setattr(assessment, key, value)

        self.db.commit()
        self.db.refresh(assessment)

        return assessment

    def delete_assessment(
        self,
        assessment: Assessment
    ) -> None:

        self.db.delete(assessment)
        self.db.commit()