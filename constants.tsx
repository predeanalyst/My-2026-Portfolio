
import { ExperienceItem, SkillCategory, ProjectItem, EducationItem, CertificationItem } from './types';

// Dynamic experience calculation starting from 2019
export const START_YEAR = 2019;
export const YEARS_OF_EXPERIENCE = new Date().getFullYear() - START_YEAR;

// Using a high-quality placeholder for the profile image based on the user's photo
export const PROFILE_IMAGE = "https://media.licdn.com/dms/image/v2/D4E03AQGv3fuF6vSoEw/profile-displayphoto-scale_200_200/B4EZusKRQkL0AY-/0/1768119933684?e=1772668800&v=beta&t=69TCusQNNaXvOlQ7j7vLm0NovHs-FdIT8hOn2crYm5U?q=80&w=1000&auto=format&fit=crop";

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'renaissance',
    role: 'Finance Advisor, SAP FICO BW',
    company: 'RENAISSANCE AFRICA ENERGY COMPANY',
    location: 'Lagos State, Nigeria',
    period: 'May 2025 - Present',
    description: [
      'Developing customized reports and dashboards using SAP tools for proactive financial management.',
      'Integrating SAP BW with FI, MM, PM, and PS modules to streamline data flow and enhance reporting.',
      'Ensuring SAP FICO BW HANA solutions are fit for purpose and updated to meet evolving business requirements.',
      'Standardizing and automating Management Information (MI) and reporting using Macros and Touchless MI Power BI Dashboards.',
      'Regularly conducting data integrity checks on SAP BW FICO data.'
    ],
    skills: ['SAP FICO', 'SAP BW HANA', 'Power BI', 'Financial Modeling', 'Process Automation'],
    highlights: [
      'Automated the end-to-end MI reporting pipeline reducing manual intervention by 80%.',
      'Successfully integrated cross-functional data from 4 major SAP modules for unified analysis.'
    ]
  },
  {
    id: 'shell',
    role: 'SAP BW/FI, Finance Advisor',
    company: 'SHELL PETROLEUM DEVELOPMENT COMPANY OF NIGERIA',
    location: 'Nigeria',
    period: '2023 - 2025',
    description: [
      'Led SAP BW FICO support ensuring data integrity and report stability for finance information providers.',
      'Developed and maintained macro-based process improvements across finance operations.',
      'Provided daily SAP P10 data extraction support to finance advisors and analysts for operational and reconciliation tasks.'
    ],
    highlights: [
      'Developed MJE Reporting macro for SAP P10 automation (WD5 and WD7 retrieval).',
      'Created SAP Agreement/Contract Validation Macro for ERP Team.',
      'Implemented Single Sign-On (SSO) Macro for SAP auto-logon.',
      'Built NCD Recovery Automation using Excel VBA macros.'
    ],
    skills: ['SAP BW', 'SAP FI', 'Excel VBA', 'Power Automate', 'Tax Compliance']
  },
  {
    id: 'edo',
    role: 'Data Analyst & Power BI Developer',
    company: 'EDO INNOVATES',
    location: 'Nigeria',
    period: 'Jan 2020 - Jan 2024',
    description: [
      'Cleaned, validated, and transformed complex datasets using Power BI, Excel, and Python scripts.',
      'Designed and developed interactive dashboards providing data-driven insights to stakeholders.',
      'Analyzed large dynamic datasets including customer behavior, market trends, and sales performance.'
    ],
    skills: ['Power BI', 'Python', 'SQL', 'Data Governance', 'ETL'],
  },
  {
    id: 'sparks',
    role: 'Data Science and Business Analytics',
    company: 'THE SPARKS FOUNDATION',
    location: 'Remote',
    period: 'Nov 2019 - Dec 2021',
    description: [
      'Applied machine learning techniques to solve business problems and generate predictive insights.',
      'Monitored and reported on trends in a suite of Key Performance Indicators (KPIs).',
      'Conducted complex research by gathering data from operational, competitor, and feedback sources.'
    ],
    skills: ['Machine Learning', 'Jupyter', 'Statistical Analysis', 'Business Analytics', 'Python'],
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    title: 'Drilling Efficiency Predictive AI',
    description: 'Developed a machine learning model to predict drilling bit failure in upstream operations, utilizing historical sensor data to reduce downtime.',
    category: 'AI & ML in Oil & Gas'
  },
  {
    title: 'Reservoir Characterization via Deep Learning',
    description: 'Using CNNs to automate the classification of facies from well log data, significantly speeding up geological interpretation workflows.',
    category: 'AI & ML in Oil & Gas'
  },
  {
    title: 'Touchless MI Reporting Dashboard',
    description: 'A fully automated Power BI suite integrated with SAP BW HANA that delivers real-time financial health metrics for Renaissance Africa Energy.',
    category: 'Oil & Gas'
  },
  {
    title: 'Customer Behavior Cluster Analysis',
    description: 'Unsupervised learning project using K-Means clustering to segment energy consumers based on usage patterns and payment history.',
    category: 'Data Science Portfolio'
  },
  {
    title: 'Market Trend Forecasting Engine',
    description: 'Time-series analysis project using Prophet and ARIMA models to forecast crude oil price volatility.',
    category: 'Data Science Portfolio'
  },
  {
    title: 'Sentiment Analysis for Stakeholder Feedback',
    description: 'NLP pipeline built with Python and NLTK to analyze unstructured feedback from annual corporate reports.',
    category: 'Data Science Portfolio'
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: 'AI & Data Science',
    items: ['Machine Learning (Supervised/Unsupervised)', 'Deep Learning (CNNs, RNNs)', 'NLP & Sentiment Analysis', 'Python (Pandas, Scikit-learn, PyTorch)', 'MLOps']
  },
  {
    category: 'SAP & Enterprise',
    items: ['SAP FICO / BW HANA', 'S/4HANA Finance', 'Asset Management', 'Sourcing & Procurement', 'Business Intelligence (BI)']
  },
  {
    category: 'Technical Stack',
    items: ['Power BI (Advanced DAX)', 'SQL (UC Davis Certified)', 'Excel VBA & Macros', 'Tableau', 'AWS Cloud Practitioner']
  },
  {
    category: 'Non-Technical Expertise',
    items: ['Stakeholder Management', 'Strategic Financial Planning', 'Business Process Optimization', 'Project Management', 'Cross-functional Leadership', 'Agile Methodology']
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'Master of Science - MS, Data Science',
    school: 'University of East London',
    period: '2025 - In view'
  },
  {
    degree: 'Bachelor\'s Degree in Business Administration',
    school: 'University of Benin, Nigeria',
    period: '2016 - 2020',
    detail: 'Second Class Upper Division'
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  { name: 'SAP Certified Associate - S/4HANA Financial Accounting', issuer: 'SAP', year: '2024' },
  { name: 'SAP Certified Associate - S/4HANA Asset Management', issuer: 'SAP', year: '2024' },
  { name: 'SAP Certified Associate - S/4HANA Sourcing and Procurement', issuer: 'SAP', year: '2024' },
  { name: 'SAP Associate Consultant (YPP)', issuer: 'SAP', year: '2023' },
  { name: 'Stepping up to management', issuer: 'Lagos Business School', year: '2025' },
  { name: 'Python FastAPI', issuer: 'Cursa', year: '2025' },
  { name: 'Micro1 Certified', issuer: 'micro1', year: '2025' },
  { name: 'Health Safety and Environment (HSE)', issuer: 'Ace Coterie', year: '2025' },
  { name: 'Certificate in Customer Service (CSRM)', issuer: 'Ace Coterie', year: '2025' },
  { name: 'Certificate in HR Management (HRM)', issuer: 'Ace Coterie', year: '2025' },
  { name: 'Cost Engineering', issuer: 'Udemy', year: '2025' },
  { name: 'Master Microsoft Power BI', issuer: 'Alison', year: '2022' },
  { name: 'SQL for Data Science', issuer: 'University of California, Davis', year: '2023' },
  { name: 'Data Analyst NanoDegree', issuer: 'Udacity', year: '2023' },
  { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', year: '2022' },
  { name: 'Financial Management', issuer: 'Saylor Academy', year: '2023' },
  { name: 'Data Science', issuer: 'Board Infinity', year: '2022' },
  { name: 'Tableau Training', issuer: 'Simplilearn', year: '2022' },
  { name: 'Jobberman Soft-Skills Training', issuer: 'Jobberman', year: '2022' },
  { name: 'AWS re/Start Graduate', issuer: 'Amazon Web Services', year: '2022' }
];
