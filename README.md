# GradeMyProfessor

This project is a course and professor evaluation platform built for CUNY Hunter College, helping 1,000+ students access in-depth grade distributions, performance trends, and student feedback to make data-driven academic decisions.

## The Team:

| Member    | Position   | Responsibilities                       |
| --------- | ---------- | -------------------------------------- |
| **Krish** | Full Stack | API Development, Backend Architecture  |
| **Mahim** | Full Stack | Authentication System, Database Schema |

## Visit The Site

Feel free to check out the [project here!](https://grademyprofessor.vercel.app/)

<img width="1437" alt="Screenshot 2025-04-20 at 5 14 25 PM" src="https://github.com/user-attachments/assets/43fab214-a4bf-455a-b680-39ca695b3bd5" />

## Key Features

- **Course Analytics (Most Popular Feature)**

  - Interactive charts showing how grades and evaluations have changed over time for each course and professor. This data-driven insight is what sets GradeMyProfessor apart from platforms like RateMyProfessor — it's the #1 reason students use the platform.

- **Course and Professor Search**

  - Instantly look up courses, instructors, and grade distributions.

- **Review System**

  - Leave and read student-written feedback specific to Hunter courses and professors.

- **Custom Authentication**

  - Secure login system supporting different user roles (students, admins).

## Tech Stack

- **Backend**: Django
- **Frontend**: React
- **Database**: PostgreSQL
- **Deployment**: Docker

---

## Prerequisites

Before running locally, ensure you have:

- **Python 3.8+**
- **Node.js 14+** & **npm**
- **PostgreSQL**
- _(Optional)_ **Docker** & **docker‑compose**

---

## Installation

```bash
# 1. Clone and enter the project
git clone https://github.com/Mahimali937/GradeMyProfessor.git
cd GradeMyProfessor

# 2. Backend setup
cd backend
python -m venv .venv
# macOS/Linux:
source .venv/bin/activate
# Windows:
# .venv\Scripts\activate

pip install -r requirements.txt
cp .env.example .env        # ← edit with your PostgreSQL creds
python manage.py migrate
python manage.py runserver

# 3. Frontend setup
# From the project root (if still in backend/, go up one level)
cd ../frontend
npm install

# 4. Configure frontend API URL
# Open src/config.js and set:
# export const API_URL = "http://localhost:8000/api";

# 5. Start React
npm start

## Usage

- **Frontend**
  Visit `http://localhost:3000` to browse professors, view grade distributions, and submit reviews.

- **API Endpoints** (perform CRUD on professors & evaluations):
  - `GET    /api/professors/`
  - `GET    /api/professors/{id}/`
  - `POST   /api/evaluations/`
  - `PUT    /api/evaluations/{id}/`
  - `DELETE /api/evaluations/{id}/`
```
