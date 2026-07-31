from fastapi import APIRouter

from app.api.v1.endpoints import users, auth, assessments, questions, assessment_attempts, student_answers, results, courses, chapters, lessons, contents, uploaded_files   

api_router = APIRouter()

#register the router users
api_router.include_router(
    users.router,
    prefix="/users",
    tags=["Users"],
)

#register the router auth
api_router.include_router(
    auth.router,
    prefix="/auth",
    tags=["Authentication"],
)

#register the router assement 
api_router.include_router(
    assessments.router,
    prefix="/assessments",
    tags=["Assessments"],
)

#register the router questions
api_router.include_router(
    questions.router,
    prefix="/questions",
    tags=["Questions"],
)

#register the router assessment_attempt
api_router.include_router(
    assessment_attempts.router,
    prefix="/assessment-attempts",
    tags=["Assessment Attempts"],
)

# register the router of student_answers
api_router.include_router(
    student_answers.router,
    prefix="/student-answers",
    tags=["Student Answers"],
)

#register the results 
api_router.include_router(
    results.router,
    prefix="/results",
    tags=["Results"],
)

#register the router courses 
api_router.include_router(
    courses.router,
    prefix="/courses",
    tags=["Courses"],
)

#register the router chapters 
api_router.include_router(
    chapters.router,
    prefix="/chapters",
    tags=["Chapters"],
)

# Register the router lessons
api_router.include_router(
    lessons.router,
    prefix="/lessons",
    tags=["Lessons"],
)

#register the router contents 
api_router.include_router(
    contents.router,
    prefix="/contents",
    tags=["Contents"],
)

#register the router uploaded_files 
api_router.include_router(
    uploaded_files.router,
    prefix="/uploaded-files",
    tags=["Uploaded Files"],
)