# Foretyx: On-Device AI Security Gateway

Foretyx is an elite, on-device AI security plane designed to sit between your workforce and external Large Language Models (LLMs). It ensures that sensitive data, PII, and proprietary information never leave the local environment, providing a "fail-closed" security architecture that doesn't compromise on performance.

---

## 🛡️ Key Features

### 1. Local PII Scrubbing
Detects and redacts over 20+ PII entity types locally using a Presidio-powered detection engine.
*   **Native Indian Support**: Specially tuned for Indian identifiers including Aadhaar, PAN card, GSTIN, Voter ID, IFSC, and UPI IDs.
*   **Global Compliance**: Handles standard names, emails, phone numbers, and addresses.

### 2. Prompt Injection Protection
Employs an **ONNX DistilBERT model** to score every prompt for injection risk in real-time. Adversarial inputs are blocked before they reach the cloud.

### 3. Policy Enforcement
Admins can define granular usage policies in the **Control Plane**. Rules (LLM access, forbidden data categories, etc.) are pushed instantly to every sidecar via WebSocket.

### 4. Privacy-First Audit Logs
Only structured metadata reaches the Control Plane. 
*   **No Raw Content**: Actual prompt content and PII are never stored or transmitted.
*   **Forensic Completeness**: Logs include timestamps, risk scores, and policy decisions for full DPDP Act, GDPR, and HIPAA compliance.

### 5. High Performance
The entire guard pipeline completes in **under 200ms**. Security at the speed of thought, optimized for standard enterprise hardware (CPU inference).

---

## 🏗️ Architecture

Foretyx uses a **Sidecar Architecture**:
- **Data Plane (Local)**: A lightweight sidecar running on employee machines (Windows, macOS, Linux). It intercepts, scrubs, and inspects all prompts offline.
- **Control Plane (Central)**: A centralized management layer for policies, analytics, and authentication.

---

## 🚀 Tech Stack

- **Frontend**: React, Vite, TailwindCSS, Lucide-React
- **Local Engine**: Rust, ONNX Runtime
- **Communication**: WebSockets (Real-time policy updates)

---

## 📦 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or bun

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/rishiii183/Foretyx-rebranding.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

---

## 👥 The Team

*   **Soham Singh**: CEO & Co-founder (Product Strategy & Control Plane)
*   **Soumik Misra**: CTO & Co-founder (Data Plane & ML Architecture)
*   **Rishi Ghosh**: COO & Co-founder (Deployment & Infrastructure)
*   **Upasna Mishra**: Business & GTM Lead (Partnerships & Compliance)

---

## 📄 Compliance Support

Foretyx is architected to satisfy the most stringent data localization and privacy requirements:
- **India DPDP Act**: Native Indian PII detection and local rehydration.
- **GDPR**: Data minimization by design; no raw content storage.
- **HIPAA**: Automated audit logs for PHI handling.

---

© 2026 Foretyx. All rights reserved.
