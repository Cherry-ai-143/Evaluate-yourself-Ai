from datetime import datetime

from pydantic import BaseModel, ConfigDict


# Create Assessment
class AssessmentCreate(BaseModel):

    # Assessment belongs to course
    course_id: int
    title: str
    description: str | None = None
    duration_minutes: int
    total_marks: int



# Assessment Response
class AssessmentResponse(BaseModel):
    id: int
    course_id: int
    title: str
    description: str | None
    duration_minutes: int
    total_marks: int
    created_by: int
    created_at: datetime
    updated_at: datetime

    model_config = ConfigDict(
        from_attributes=True
    )



# Update Assessment
class AssessmentUpdate(BaseModel):
    course_id: int | None = None
    title: str | None = None
    description: str | None = None
    duration_minutes: int | None = None
    total_marks: int | None = None