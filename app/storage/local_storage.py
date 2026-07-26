import os
import shutil
import uuid

from fastapi import UploadFile


UPLOAD_DIRECTORY = "media/uploads"


class LocalStorage:

    @staticmethod
    def save_file(file: UploadFile):

        os.makedirs(
            UPLOAD_DIRECTORY,
            exist_ok=True,
        )

        extension = os.path.splitext(
            file.filename
        )[1]

        unique_filename = (
            f"{uuid.uuid4()}{extension}"
        )

        file_path = os.path.join(
            UPLOAD_DIRECTORY,
            unique_filename,
        )

        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(
                file.file,
                buffer,
            )

        return (
            unique_filename,
            file_path,
        )