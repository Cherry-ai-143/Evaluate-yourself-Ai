from datetime import datetime
from enum import Enum

from sqlalchemy import (
    DateTime,
    ForeignKey,
    Integer,
    String,
    Text,
    Enum as SqlEnum,
)
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy.sql import func

from app.database.base import Base


# ----------------------------------------
# Question Type Enum
# ----------------------------------------
class QuestionType(str, Enum):
    MCQ = "MCQ"


# ----------------------------------------
# Question Model
# ----------------------------------------
class Question(Base):
    __tablename__ = "questions"

    # ----------------------------------------
    # Primary Key
    # ----------------------------------------
    id: Mapped[int] = mapped_column(
        primary_key=True,
        index=True,
    )

    # ----------------------------------------
    # Assessment Foreign Key
    # ----------------------------------------
    assessment_id: Mapped[int] = mapped_column(
        ForeignKey("assessments.id"),
        nullable=False,
    )

    # ----------------------------------------
    # Question Text
    # ----------------------------------------
    question_text: Mapped[str] = mapped_column(
        Text,
        nullable=False,
    )

    # ----------------------------------------
    # Question Type
    # ----------------------------------------
    question_type: Mapped[QuestionType] = mapped_column(
        SqlEnum(QuestionType),
        default=QuestionType.MCQ,
    )

    # ----------------------------------------
    # Option A
    # ----------------------------------------
    option_a: Mapped[str] = mapped_column(
        String(255),
        nullable=False,
    )

    # ----------------------------------------
    # Option B
    # ----------------------------------------
    option_b: Mapped[str] = mapped_column(
        String(255),
        nullable=False,
    )

    # ----------------------------------------
    # Option C
    # ----------------------------------------
    option_c: Mapped[str] = mapped_column(
        String(255),
        nullable=False,
    )

    # ----------------------------------------
    # Option D
    # ----------------------------------------
    option_d: Mapped[str] = mapped_column(
        String(255),
        nullable=False,
    )

    # ----------------------------------------
    # Correct Option
    # ----------------------------------------
    correct_option: Mapped[str] = mapped_column(
        String(1),
        nullable=False,
    )

    # ----------------------------------------
    # Marks
    # ----------------------------------------
    marks: Mapped[int] = mapped_column(
        Integer,
        nullable=False,
    )

    # ----------------------------------------
    # Question Order
    # ----------------------------------------
    order_number: Mapped[int] = mapped_column(
        Integer,
        nullable=False,
        default=1,
    )

    # ----------------------------------------
    # Created At
    # ----------------------------------------
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        server_default=func.now(),
    )

    # ----------------------------------------
    # Updated At
    # ----------------------------------------
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        server_default=func.now(),
        onupdate=func.now(),
    )

    # ----------------------------------------
    # Relationship with Assessment
    # ----------------------------------------
    assessment = relationship(
        "Assessment",
        back_populates="questions",
    )
    
    # relationship with student_answer
    student_answers = relationship(
        "StudentAnswer",
        back_populates="question",
        cascade="all, delete-orphan",
    )