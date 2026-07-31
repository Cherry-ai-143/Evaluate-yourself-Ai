from sqlalchemy import Boolean, Enum, String
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.database.base import Base
from app.enums import UserRole
from app.models.base import TimestampMixin
from app.models.uploaded_file import UploadedFile


# User model representing the users table
class User(TimestampMixin, Base):
    __tablename__ = "users"

    # Primary Key
    id: Mapped[int] = mapped_column(
        primary_key=True,
        index=True
    )

    # User's Full Name
    full_name: Mapped[str] = mapped_column(
        String(255),
        nullable=False
    )

    # User's Email Address (Unique)
    email: Mapped[str] = mapped_column(
        String(255),
        unique=True,
        index=True,
        nullable=False
    )

    # Hashed Password (Never store plain passwords)
    hashed_password: Mapped[str] = mapped_column(
        String(255),
        nullable=False
    )

    # User Role (Student / Teacher / Admin)
    role: Mapped[UserRole] = mapped_column(
        Enum(UserRole),
        default=UserRole.STUDENT,
        nullable=False
    )

    # Indicates whether the user account is active
    is_active: Mapped[bool] = mapped_column(
        Boolean,
        default=True,
        nullable=False
    )

    # One Teacher can create many Assessments
    assessments = relationship(
        "Assessment",
        back_populates="teacher"
    )
    
    
    #relation of assesment attempt
    attempts = relationship(
        "AssessmentAttempt",
        back_populates="student",
    )
    
    # Teacher -> Courses Relationship
    courses = relationship(
        "Course",
        back_populates="teacher",
        cascade="all, delete-orphan",
    )
    
    # Uploaded Files Relationship
    uploaded_files: Mapped[list["UploadedFile"]] = relationship(
        "UploadedFile",
        back_populates="uploader",
    )