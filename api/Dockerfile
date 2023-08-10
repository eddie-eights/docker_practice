FROM python:3.9-slim AS base

COPY . /workspace
WORKDIR /workspace/app
RUN pip install --no-cache-dir --upgrade -r /workspace/requirements.txt

CMD ["uvicorn", "main:app", "--reload", "--host", "0.0.0.0", "--port", "8000"]


# Production
FROM python:3.9-slim AS production

COPY . /workspace
WORKDIR /workspace/app
RUN pip install --no-cache-dir --upgrade -r /workspace/requirements.txt

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
