/* Easy personalization: edit the role, experience, projects, skills, and links below. */
window.PORTFOLIO = {
  role: "Java Backend Developer",
  location: "JAVA · SPRING BOOT · BACKEND SYSTEMS",
  heroTitle: "Most users never see<br>the <em>backend.</em>",
  heroLead: "I bring 15+ years of Java and enterprise application work from banking and consulting. Today I’m keeping it hands-on with a Java 17 payment-intent API—security, persistence, tests, and the failure cases included.",
  fitIntro: "My experience covers the whole route from business rule to running service: designing Java applications, integrating systems, supporting releases, and tracing production issues through code, data, and configuration.",
  fit: [
    {n:"01",title:"Java & Spring",text:"Java 8–17, Spring Boot, Spring Framework, Spring Data JPA, Hibernate, Maven, and layered enterprise applications."},
    {n:"02",title:"APIs & integration",text:"REST and SOAP services, microservices, JSON/XML, JWT security, scheduled workflows, and relational database integrations."},
    {n:"03",title:"Reliable delivery",text:"Testing, debugging, root-cause analysis, controlled releases, CI/CD, documentation, and production support for business-critical systems."},
    {n:"04",title:"Technical leadership",text:"Led a team of nine developers at Accenture while staying hands-on with Java delivery, code reviews, coordination, and issue resolution."}
  ],
  experience: [
    {date:"JAN 2024 — PRESENT",role:"Independent Java Backend Projects",company:"Personal project work · Cambridge, ON",text:"Maintain hands-on backend development through Java 17 and Spring Boot projects. Current work includes a payment-intent REST API with JWT security, PostgreSQL persistence, validation, automated tests, and Docker-based development."},
    {date:"APR 2020 — JAN 2023",role:"Associate Manager / Technical Lead · Full-Stack Developer",company:"Accenture · Philippines",text:"Led and mentored nine developers while remaining hands-on with Java/J2EE, Spring applications, SQL, REST APIs, integrations, troubleshooting, and delivery. Supported production issue analysis, releases, code reviews, CI/CD, and cross-team coordination."},
    {date:"JUL 2012 — SEP 2019",role:"Senior Analyst Programmer",company:"Standard Chartered Bank · Malaysia",text:"Developed, enhanced, and supported enterprise banking applications using Java, Spring, Hibernate, Oracle/SQL, REST/SOAP integrations, and scheduled jobs. Investigated production defects through log analysis, SQL validation, code debugging, and controlled fixes."},
    {date:"APR 2011 — JUN 2012",role:"Technology Consultant II · Senior Developer",company:"Hewlett-Packard Asia Pacific · Philippines",text:"Developed and supported Java/J2EE enterprise application components, database integrations, defect fixes, and release activities."},
    {date:"FEB 2007 — APR 2011",role:"Analyst Programmer",company:"BDO · Banco de Oro Universal Bank · Philippines",text:"Developed and supported Corporate Internet Banking applications using Java/J2EE, database integration, production troubleshooting, and controlled application changes."},
    {date:"JUN 2024 — PRESENT",role:"Production Control Operations · Final Vehicle Logistics",company:"Toyota Motor Manufacturing Canada · Cambridge, ON",text:"Current frontline manufacturing experience strengthens my understanding of how accurate, dependable systems support time-sensitive operations and the people who use them."}
  ],
  projects: [
    {state:"ACTIVE PROJECT",kind:"progress",title:"Payment Gateway API",text:"A Java 17 / Spring Boot backend project implementing a secure payment-intent REST flow: create, retrieve, and idempotent confirmation. Includes JWT-protected endpoints and owner isolation, request validation, PostgreSQL persistence with JPA/Flyway, and clear error handling.",outcome:"Unit and PostgreSQL/Testcontainers integration tests; Docker Compose and GitHub Actions CI. CI passed on the project branch in September 2026. Kafka, Redis, and the broader event-driven architecture are future milestones.",tags:["Java 17","Spring Boot","PostgreSQL","JWT","JPA / Flyway","JUnit / Testcontainers"],link:"https://github.com/juliusparco16/payment-gateway-api",linkText:"View project on GitHub"},
    {state:"PROFESSIONAL EXPERIENCE",kind:"",title:"Enterprise Java & Banking Systems",text:"Professional delivery and support across Accenture, Standard Chartered Bank, Hewlett-Packard, and BDO. Work included Java/Spring application development, APIs and integrations, relational databases, scheduled processing, issue diagnosis, and releases.",outcome:"Experience covers both building backend functionality and tracing production issues across code, logs, data, configuration, and connected systems.",tags:["Java / J2EE","Spring / Hibernate","REST / SOAP","Oracle / SQL","Microservices"],link:"#experience",linkText:"Explore experience"},
    {state:"ACADEMIC PROJECT",kind:"",title:"Secure Student Management System",text:"Built a role-aware student management application with Flask and Oracle. Added bcrypt password hashing and CAPTCHA protection, with a focus on secure access and reliable student records.",outcome:"Applied authentication, access control, relational data, and practical user workflows in a complete application project.",tags:["Flask","Oracle","bcrypt","Role-based access","reCAPTCHA"],link:"#contact",linkText:"Discuss this sample"},
    {state:"ACADEMIC PROJECT",kind:"",title:"E-commerce Data Warehouse",text:"Designed an analytical warehouse with a star schema to support reporting and business questions. Applied slowly changing dimensions and KPI-oriented data structures.",outcome:"Related data engineering sample demonstrating structured modeling, data quality, and reporting fundamentals.",tags:["SQL","Star schema","SCD Type 1 / 2","KPIs"],link:"#contact",linkText:"Discuss this sample"}
  ],
  principles: [
    {title:"Understand the domain first",text:"Clarify the business rule, data ownership, API contract, and failure cases before choosing an implementation."},
    {title:"Design for correctness",text:"Pay attention to validation, transaction boundaries, authorization, idempotency, and consistency at service boundaries."},
    {title:"Test meaningful behavior",text:"Use focused unit tests and integration tests to verify both successful flows and important failure conditions."},
    {title:"Support what you build",text:"Make systems diagnosable with useful errors, logs, documentation, controlled releases, and clear operational handoffs."}
  ],
  skills: [
    {title:"Java & frameworks",text:"Java 8–17 · Core Java · Spring Boot · Spring Framework · Spring MVC · Spring Data JPA · Hibernate · J2EE · JDBC · Maven"},
    {title:"APIs & data",text:"REST · SOAP · Microservices · JSON/XML · JWT · SQL / PL/SQL · Oracle · PostgreSQL · MySQL · data validation"},
    {title:"Testing & delivery",text:"JUnit · Mockito · Testcontainers · Postman · debugging · code reviews · Git · CI/CD · Docker · Kubernetes"},
    {title:"Cloud & teamwork",text:"OCI · AWS · Google Cloud · Jenkins · Azure DevOps · Agile / Scrum · Jira · technical leadership · stakeholder coordination"}
  ],
  contactCopy:"I’m interested in Java backend roles where experience with enterprise systems, API development, and production troubleshooting can make a practical difference.",
  email:"juliusparco@yahoo.com",
  linkedin:"https://www.linkedin.com/in/juliusparco",
  github:"https://github.com/juliusparco16"
};
