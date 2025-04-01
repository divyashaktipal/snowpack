
[![My first Github Action](https://github.com/divyashaktipal/snowpack/actions/workflows/test.yml/badge.svg)](https://github.com/divyashaktipal/snowpack/actions/workflows/test.yml)

# CI/CD Pipeline between Github and Vercel

This project implements a CI/CD (Continuous Integration and Continuous Deployment) pipeline using **GitHub Actions** to automatically deploy code from a GitHub repository to the Vercel platform whenever changes are pushed to the repository.

---

## Features

- Automatically deploys your GitHub repository code to Vercel on every push.
- Uses GitHub Actions to automate the build and deployment process.
- Ensures consistent deployments with build checks and environment configuration
- Can integrate easily with multiple repositories and projects.

---

## Prerequisites

To set up and use this pipeline, you need the following:
1. **GitHub repository**: Ensure your project is version-controlled using GitHub.
2. **Vercel account**: Sign up at [Vercel](https://vercel.com/) and create a project.
3. **Node.js Installed**: Install Node.js locally (version 18 or later is recommended).
4. **Vercel Access Token**: Generate a vercel acces token to authenticate deployments.

---

## How It Works

The pipeline utilizes **GitHub Actions** to automate the following steps:
1. Checkout the latest code from the GitHub repository.
2. Install project dependencies using `npm` or `yarn`.
3. Builds the project (e.g., React, Next.js, or any JavaScript framework).
4. Deploys the build folder to Vercel using the Vercel CLI.

---

## Setup Instructions

### Step 1: Clone the Repository
Clone your repository and ensure the project files are up to date:
```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
```

### Step 2: Install Project Dependencies
Navigate to your project folder and install required dependencies:
```bash
npm install
```
or,
```bash
yarn install
```

### Step 3: Generate a Vercel Access Token
1. Log in to your Vercel account.
2. Go to **Account Settings** > **Tokens**.
3. Create a new access token and save it securely.

### Step 4: Add Secrets to GitHub
1. Navigate to your GitHub repository.
2. Go to **Settings** > **Secrets and Variables** > **Actions**.
3. Add the following secrets:
- `VERCEL_TOKEN`: Your Vercel Access Token.
- `VERCEL_PROJECT_ID`: The project ID from your Vercel project settings.
- `VERCEL_ORG_ID`: The organization ID from your Vercel project settings.

### Step 5: Configure the GitHub Action Workflow
Create a `.github/workflows/test.yml` file in your repository and add the following configuration:
```bash
name: Deploy to Vercel

on:
  push:
    branches:
      - main

jobs:
  build-app:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install

      - name: Install Vercel CLI
        run: npm install -g vercel

      - name: Build the project
        run: npm run build

      - name: Configure Vercel environment
        run: |
          cd build
          mkdir .vercel
          cd .vercel
          echo '{"projectId":"${{ secrets.VERCEL_PROJECT_ID }}","orgId":"${{ secrets.VERCEL_ORG_ID }}"}' > project.json

      - name: Deploy to Vercel
        run: vercel --prod --token=${{ secrets.VERCEL_TOKEN }} --yes
```

### Step 6: Push Your Workflow
Commit and push the workflow file to your GitHub repository:
```bash
git add .github/workflows/test.yml
git commit -m "Add GitHub Actions workflow for Vercel deployment"
git push origin main
```

---
### How to Test:
1. Make changes to your code and push them to the `main` branch.
2. The GitHub Action will automatically trigger the workflow and deploy the updated code to Vercel.
3. Verify the deployment status in the Actions tab of your GitHub repository or on the Vercel Dashboard.

---

### Troubleshooting:
- **Command Not Found Errors**: Ensure Vercel CLI is installed globally using `npm install -g vercel`.
- **Authentication Issues**: Double-check that the `VERCEL_TOKEN`, `VERCEL_PROJECT_ID`, and `VERCEL_ORG_ID` are correctly set in GitHub Secrets.
- **Build Errors**: Ensure your `build` script in `package.json` is correctly defined i.e. `bash "scripts": {
  "build": "react-scripts build"
}`

---

### Contributing:
Feel free to open issues or submit pull requests to improve this pipeline.

---

### License:
This project is licensed under the MIT License.
