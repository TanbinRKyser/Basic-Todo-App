
# Basic Todo App

A simple, full‑stack ToDo application demonstrating an Angular front‑end and a Spring Boot back‑end.

---

## Table of Contents

- [Overview](#overview)  
- [Features](#features)  
- [Architecture](#architecture)  
- [Prerequisites](#prerequisites)  
- [Getting Started](#getting-started)  
  - [Backend (Spring Boot)](#backend-spring-boot)  
  - [Frontend (Angular)](#frontend-angular)  
- [API Reference](#api-reference)  
- [Project Structure](#project-structure)  
- [Technologies](#technologies)  
- [Contributing](#contributing)  
- [License](#license)  
- [Author](#author)  

---

## Overview

This project implements a basic ToDo application where users can:

- Create new tasks  
- View a list of tasks  
- Mark tasks as complete/incomplete  
- Edit task details  
- Delete tasks  

It serves as a hands‑on demonstration of a RESTful API with Spring Boot, consumed by an Angular single‑page application.

---

## Features

- **CRUD operations** for ToDo items  
- **Responsive UI** built with Angular Material  
- **RESTful API** endpoints with Spring Data JPA  
- **In‑memory H2 database** (easy to reset; switch to MySQL/Postgres by updating config)  
- **CORS configuration** to allow front‑end and back‑end on different ports  

---

## Architecture

┌──────────────────┐ HTTP ┌─────────────────────┐
│ Angular SPA │ ───────────────▶ │ Spring Boot API │
│ (my-dream-app/) │ │ (restful-web-services/) │
└──────────────────┘ ◀───────────────┘ │


- **Frontend** runs on port **4200** (Angular CLI)  
- **Backend** runs on port **8080** (Spring Boot)  

---

## Prerequisites

- **Node.js** ≥ 14.x & **npm**  
- **Angular CLI** (`npm install -g @angular/cli`)  
- **Java** ≥ 11  
- **Maven** ≥ 3.x  

---

## Getting Started

### Backend (Spring Boot)

1. Open a terminal and navigate to the back-end folder:  
   ```bash
   cd restful-web-services
2. Build and run with Maven:
  mvn clean spring-boot:run
3. The API will be available at http://localhost:8080/api/todos

### Frontend (Angular)
1. In a new terminal, navigate to the front-end folder:
  cd my-dream-app
2. Install dependencies:
  npm install

3. Serve the app:
    ng serve
4. Open your browser at http://localhost:4200

