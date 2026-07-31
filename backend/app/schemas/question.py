from pydantic import BaseModel, ConfigDict


class QuestionCreate(BaseModel):
    assessment_id: int
    question_text: str
    option_a: str
    option_b: str
    option_c: str
    option_d: str
    correct_option: str
    marks: int
    order_number: int


class QuestionResponse(BaseModel):
    id: int
    assessment_id: int
    question_text: str
    option_a: str
    option_b: str
    option_c: str
    option_d: str
    correct_option: str
    marks: int
    order_number: int

    model_config = ConfigDict(
        from_attributes=True
    )


class QuestionUpdate(BaseModel):
    question_text: str | None = None
    option_a: str | None = None
    option_b: str | None = None
    option_c: str | None = None
    option_d: str | None = None
    correct_option: str | None = None
    marks: int | None = None
    order_number: int | None = None