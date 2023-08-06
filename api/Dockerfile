FROM tiangolo/uvicorn-gunicorn-fastapi:python3.9-slim AS base

WORKDIR /workspace/app

COPY requirements.txt ../
RUN pip install --no-cache-dir --upgrade -r /workspace/requirements.txt

COPY ./app/ .

CMD ["uvicorn", "main:app", "--reload", "--host", "0.0.0.0", "--port", "8000"]


# 現状、ホットリロードしないのでこっちが読み込まれている
# Production
FROM tiangolo/uvicorn-gunicorn-fastapi:python3.9-slim AS production

WORKDIR /workspace/app
COPY ./app/ .

# CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
