from sqlalchemy import select
from sqlalchemy.orm import Session

from app.models.course import Course
from app.schemas.course import CourseCreate, CourseUpdate


class CourseRepository:

    def __init__(self, db: Session):
        self.db = db

    # Create Course
    def create_course(
        self,
        teacher_id: int,
        course_data: CourseCreate,
    ) -> Course:

        course = Course(
            teacher_id=teacher_id,
            **course_data.model_dump(),
        )

        self.db.add(course)
        self.db.commit()
        self.db.refresh(course)

        return course

    # Get Course By ID
    def get_course_by_id(
        self,
        course_id: int,
    ) -> Course | None:

        query = select(Course).where(
            Course.id == course_id
        )

        result = self.db.execute(query)

        return result.scalar_one_or_none()

    # Get Course By Title
    def get_course_by_title(
        self,
        teacher_id: int,
        title: str,
    ) -> Course | None:

        query = select(Course).where(
            Course.teacher_id == teacher_id,
            Course.title == title,
        )

        result = self.db.execute(query)

        return result.scalar_one_or_none()

    # Get All Courses
    def get_all_courses(self) -> list[Course]:

        query = select(Course)

        result = self.db.execute(query)

        return result.scalars().all()

    # Update Course
    def update_course(
        self,
        course: Course,
        course_data: CourseUpdate,
    ) -> Course:

        update_data = course_data.model_dump(
            exclude_unset=True,
        )

        for key, value in update_data.items():
            setattr(course, key, value)

        self.db.commit()
        self.db.refresh(course)

        return course

    # Delete Course
    def delete_course(
        self,
        course: Course,
    ) -> None:

        self.db.delete(course)
        self.db.commit()