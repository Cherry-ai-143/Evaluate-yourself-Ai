from datetime import datetime
from typing import TYPE_CHECKING

from sqlalchemy import (
    String,
    Integer,
    ForeignKey,
    DateTime,
    Text,
)
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy.sql import func

from app.database.base import Base

# Type Checking Imports
if TYPE_CHECKING:
    from app.models.user import User
    from app.models.question import Question
    from app.models.course import Course
    from app.models.assessment_attempt import AssessmentAttempt


class Assessment(Base):
    __tablename__ = "assessments"

    # Primary Key
    id: Mapped[int] = mapped_column(
        primary_key=True,
        index=True,
    )

    # Assessment Title
    title: Mapped[str] = mapped_column(
        String(255),
        nullable=False,
    )

    # Assessment Description
    description: Mapped[str | None] = mapped_column(
        Text,
        nullable=True,
    )

    # Duration (Minutes)
    duration_minutes: Mapped[int] = mapped_column(
        Integer,
        nullable=False,
    )

    # Total Marks
    total_marks: Mapped[int] = mapped_column(
        Integer,
        nullable=False,
    )

    # Teacher Foreign Key
    created_by: Mapped[int] = mapped_column(
        ForeignKey("users.id"),
        nullable=False,
    )

    # Course Foreign Key
    course_id: Mapped[int] = mapped_column(
        ForeignKey("courses.id"),
        nullable=False,
    )

    # Created Time
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        server_default=func.now(),
    )

    # Updated Time
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        server_default=func.now(),
        onupdate=func.now(),
    )

    # Teacher Relationship
    teacher: Mapped["User"] = relationship(
        "User",
        back_populates="assessments",
    )

    # Course Relationship
    course: Mapped["Course"] = relationship(
        "Course",
        back_populates="assessments",
    )

    # Questions Relationship
    questions: Mapped[list["Question"]] = relationship(
        "Question",
        back_populates="assessment",
        cascade="all, delete-orphan",
    )

    # Assessment Attempts Relationship
    attempts: Mapped[list["AssessmentAttempt"]] = relationship(
        "AssessmentAttempt",
        back_populates="assessment",
    )