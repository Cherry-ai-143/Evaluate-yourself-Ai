from sqlalchemy import select
from sqlalchemy.orm import Session

from app.models.user import User
from app.schemas.user import UserCreate


class UserRepository:

    def __init__(self, db: Session):
        self.db = db

    def get_user_by_email(self, email: str) -> User | None:
        query = select(User).where(User.email == email)
        result = self.db.execute(query)
        return result.scalar_one_or_none()

    def create_user(
        self,
        user_data: UserCreate,
        hashed_password: str
    ) -> User:

        user = User(
            full_name=user_data.full_name,
            email=user_data.email,
            hashed_password=hashed_password,
        )

        self.db.add(user)
        self.db.commit()
        self.db.refresh(user)

        return user