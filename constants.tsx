
import { ExperienceItem, SkillCategory, ProjectItem, EducationItem, CertificationItem } from './types';

// Dynamic experience calculation starting from 2019
export const START_YEAR = 2019;
export const YEARS_OF_EXPERIENCE = new Date().getFullYear() - START_YEAR;

// Updated to use a direct link format for the provided Google Drive image ID
export const PROFILE_IMAGE = "https://lh3.googleusercontent.com/d/1J0xt0qUnuFrLMouoIjnYlG5hIvLRL_XH";

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
    title: 'Real-time Anomaly Detection',
    description: 'Implementation of LSTM-based autoencoders for unsupervised detection of sensor drift and equipment failure in offshore production assets.',
    category: 'AI & ML in Oil & Gas',
    link: 'https://github.com/precious-iyekeoretin/anomaly-detection-oilgas'
  },
  {
    title: 'Gas Lift Production Optimization',
    description: 'Developed a Reinforcement Learning framework to autonomously optimize gas-lift injection rates, maximizing recovery while minimizing operational costs.',
    category: 'AI & ML in Oil & Gas',
    link: 'https://github.com/precious-iyekeoretin/gas-lift-optimization'
  },
  {
    title: 'Hydrocarbon Production Forecasting',
    description: 'Advanced time-series forecasting utilizing Attention-based RNN architectures to predict multi-phase flow rates with high confidence intervals.',
    category: 'AI & ML in Oil & Gas',
    link: 'https://github.com/precious-iyekeoretin/production-forecasting'
  },
  {
    title: 'AI-Driven Seismic Interpretation',
    description: 'Deep Learning models for automated seismic facies classification and salt body segmentation, enhancing structural interpretation accuracy and speed.',
    category: 'AI & ML in Oil & Gas',
    link: 'https://github.com/precious-iyekeoretin/seismic-interpretation'
  },
  {
    title: 'Predictive Hydraulic Fracture Analytics',
    description: 'Machine learning surrogate models trained on geomechanical simulations to predict fracture conductivity and geometry in unconventional reservoirs.',
    category: 'AI & ML in Oil & Gas',
    link: 'https://github.com/precious-iyekeoretin/hydraulic-fracture'
  },
  {
    title: 'Sand Production Risk Modeling',
    description: 'XGBoost-based classification system for early warning of sand production, integrating well-log data and real-time pressure gradients.',
    category: 'AI & ML in Oil & Gas',
    link: 'https://github.com/precious-iyekeoretin/sand-production'
  },
  {
    title: 'Intelligent Well Spacing & field Layout',
    description: 'Spatial clustering and interference modeling to optimize infill drilling patterns and minimize competitive drainage in complex reservoirs.',
    category: 'AI & ML in Oil & Gas',
    link: 'https://github.com/precious-iyekeoretin/well-spacing'
  },
  {
    title: 'Multi-Objective Well Optimization',
    description: 'Bayesian Optimization approach for determining optimal drawdown strategies and well placement to maximize asset Net Present Value (NPV).',
    category: 'AI & ML in Oil & Gas',
    link: 'https://github.com/precious-iyekeoretin/well-optimization'
  },
  {
    title: 'Asset Management Capstone Project',
    description: 'A comprehensive end-to-end data science solution for integrated asset management, combining technical performance with financial health metrics.',
    category: 'AI & ML in Oil & Gas',
    link: 'https://github.com/precious-iyekeoretin/capstone-project'
  },
  {
    title: 'Production Performance Suite (Power BI)',
    description: 'Integrated upstream production dashboard with real-time KPI tracking for well uptime and variance analysis.',
    category: 'Data Science Portfolio',
    link: 'https://app.powerbi.com/view?r=production-demo'
  },
  {
    title: 'Capital Expenditure (CAPEX) Tracker (Power BI)',
    description: 'Comprehensive financial dashboard for multi-asset budget monitoring and predictive cost-overrun alerts.',
    category: 'Data Science Portfolio',
    link: 'https://app.powerbi.com/view?r=capex-demo'
  },
  {
    title: 'Automated Cash Flow Visualizer (Excel)',
    description: 'High-fidelity financial visualization tool utilizing advanced VBA for dynamic reporting and sensitivity analysis.',
    category: 'Data Science Portfolio'
  },
  {
    title: 'Operational Risk Assessment Tool (Excel)',
    description: 'Probabilistic risk modeling tool built in Excel with interactive heatmaps for prioritizing maintenance activities.',
    category: 'Data Science Portfolio'
  },
  {
    title: 'Global Asset Data ETL Pipeline (SQL)',
    description: 'Architected a robust ETL process using T-SQL to normalize legacy production data for enterprise BI consumption.',
    category: 'Data Science Portfolio',
    link: 'https://github.com/precious-iyekeoretin/sql-etl-pipeline'
  },
  {
    title: 'Finance Process Automation (Alteryx)',
    description: 'Automated end-to-end tax compliance and reconciliation workflow reducing monthly processing time from days to minutes.',
    category: 'Data Science Portfolio',
    link: 'https://github.com/precious-iyekeoretin/alteryx-finance-automation'
  },
  {
    title: 'Customer Behavior Cluster Analysis',
    description: 'Unsupervised learning project using K-Means clustering to segment energy consumers based on usage patterns and payment history.',
    category: 'Data Science Portfolio',
    link: 'https://github.com/precious-iyekeoretin/customer-segmentation'
  },
  {
    title: 'Market Trend Forecasting Engine',
    description: 'Time-series analysis project using Prophet and ARIMA models to forecast crude oil price volatility.',
    category: 'Data Science Portfolio',
    link: 'https://github.com/precious-iyekeoretin/oil-price-forecast'
  },
  {
    title: 'Sentiment Analysis for Stakeholder Feedback',
    description: 'NLP pipeline built with Python and NLTK to analyze unstructured feedback from annual corporate reports.',
    category: 'Data Science Portfolio'
  },
  {
    title: 'Finance Automation & BW Alternative Reporting',
    description: 'Developed a suite of Excel VBA and SAP Scripting tools for MJE, WHT, VAT, and NCD reporting, reducing reporting cycles and dependency on legacy BW systems.',
    category: 'Oil & Gas'
  },
  {
    title: 'NCMT Tracking Application (Power Platform)',
    description: 'A comprehensive automated solution using Power BI, Apps, and Automate to streamline contract creation and bidding for Nigerian Content Development.',
    category: 'Oil & Gas'
  },
  {
    title: 'SPDC Cost Performance Report',
    description: 'End-to-end design and development of a financial monitoring report in SAP BW/BI, managing massive data extractions from 2008-2012 for trend analysis.',
    category: 'Oil & Gas'
  },
  {
    title: 'SAP Logon Setup Automation',
    description: 'Created a Bash and Python executable script to automate SAP Logon configuration, enabling user self-service and eliminating setup backlogs.',
    category: 'Oil & Gas'
  },
  {
    title: 'SAP User Role Management Tool',
    description: 'Excel VBA based system for mirroring user roles across SAP systems and detecting duplicate access to enhance compliance and security.',
    category: 'Oil & Gas'
  },
  {
    title: 'Help Desk Reporting Dashboard',
    description: 'Automated daily incident reporting using Power BI and ServiceNow, reducing manual data processing time from 30 minutes to 5 minutes.',
    category: 'Oil & Gas'
  },
  {
    title: 'Employee Engagement Platform',
    description: 'Cloud-based automation solution built with Power Automate to track milestones (birthdays/anniversaries) and deliver personalized executive alerts.',
    category: 'Oil & Gas'
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
    items: ['Power BI (Advanced DAX)', 'SQL (UC Davis Certified)', 'Excel VBA & Macros', 'Tableau', 'Alteryx Designer', 'AWS Cloud Practitioner']
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
