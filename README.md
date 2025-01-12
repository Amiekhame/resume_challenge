# resume_challenge

## Project Documentation: Resume Website Deployment

This documentation outlines the detailed steps for creating, deploying, and maintaining an HTML-based resume website hosted on Amazon S3, secured with HTTPS via CloudFront, and equipped with a visitor counter backed by DynamoDB. The following sections provide a comprehensive guide to the project, along with placeholders for logs and screenshots.

---

## Project Overview

This project involves:

1. **HTML Resume**: Creating a professional resume using HTML and CSS.
2. **Deployment**: Hosting the website on Amazon S3 as a static website.
3. **Security**: Securing the site with HTTPS using Amazon CloudFront.
4. **Custom Domain**: Mapping a custom domain name to the CloudFront distribution.
5. **Visitor Counter**: Implementing a visitor counter with DynamoDB, API Gateway, and AWS Lambda.
6. **CI/CD**: Automating deployment using GitHub Actions.

---

## Prerequisites

1. AWS account with access to S3, CloudFront, Route 53, DynamoDB, and Lambda.
2. A registered domain name (can be purchased via Route 53 or any DNS provider).
3. Installed tools:
   - AWS CLI
   - Git
   - A text editor (e.g., VS Code).
   - Node.js (for JavaScript development).
4. Basic knowledge of HTML, CSS, JavaScript, and Python.

---

## Step 1: Create the HTML Resume

1. **Structure the Resume**:
   - Use the provided `index.html` file as a template.
   - Modify the `<header>` and `<section>` elements to include your personal details, skills, experiences, and certifications.
   - Ensure semantic HTML usage for better accessibility.

2. **Style the Resume**:
   - Create a `style.css` file to define the website's design.
   - Link the CSS file in the `<head>` section of `index.html`.

3. **Add JavaScript**:
   - Include the provided `script.js` file.
   - Implement the visitor counter function to fetch and display visit counts dynamically.

4. **Test Locally**:
   - Open the `index.html` file in a browser to verify content and styling.

**Screenshots:** Attach screenshots of the rendered webpage.

---

## Step 2: Host the Website on Amazon S3

1. **Create an S3 Bucket**:
   - Name the bucket (e.g., `my-resume-website`).
   - Enable static website hosting.
   - Upload the `index.html`, `style.css`, and `script.js` files.

2. **Set Permissions**:
   - Update the bucket policy to make the contents publicly accessible.

3. **Verify the Website**:
   - Access the website via the S3 public URL.

**Logs & Screenshots:** Attach S3 setup logs and website verification screenshots.

---

## Step 3: Secure the Website with CloudFront

1. **Create a CloudFront Distribution**:
   - Point the origin to the S3 bucket.
   - Enable HTTPS using an SSL/TLS certificate from AWS Certificate Manager (ACM).

2. **Test HTTPS Access**:
   - Access the website via the CloudFront distribution domain name.

**Logs & Screenshots:** Attach CloudFront setup logs and HTTPS verification screenshots.

---

## Step 4: Configure a Custom Domain Name

1. **Update DNS Records**:
   - Use Route 53 or your DNS provider to create a CNAME record pointing to the CloudFront domain.

2. **Test the Custom Domain**:
   - Access the website using your custom domain (e.g., `my-resume-website.com`).

**Logs & Screenshots:** Attach DNS configuration logs and custom domain verification screenshots.

---

## Step 5: Add a Visitor Counter

1. **Set Up DynamoDB**:
   - Create a table with a primary key (e.g., `visitorCount`).
   - Initialize the visitor count to zero.

2. **Create a Lambda Function**:
   - Write a Python script using `boto3` to increment and retrieve the visitor count.
   - Deploy the function in AWS Lambda.

3. **Integrate with API Gateway**:
   - Create a REST API endpoint to invoke the Lambda function.
   - Enable CORS to allow requests from your website.

4. **Update JavaScript**:
   - Modify `script.js` to fetch visitor counts from the API Gateway URL.

**Logs & Screenshots:** Attach DynamoDB setup logs, Lambda function code, and API Gateway configuration screenshots.

---

## Step 6: Automate Deployment with GitHub Actions

1. **Set Up GitHub Repository**:
   - Initialize a repository and push the project files.

2. **Create GitHub Actions Workflow**:
   - Add a `.github/workflows/deploy.yml` file.
   - Configure the workflow to sync files to the S3 bucket on each push.

3. **Test Automation**:
   - Make a change in the repository and verify deployment.

**Logs & Screenshots:** Attach GitHub Actions logs and deployment verification screenshots.

---

## Conclusion

This project demonstrates the deployment of a secure, dynamic resume website using AWS services. Follow the detailed steps to replicate or enhance the setup, and leverage the provided placeholders for logs and screenshots to track your progress.

---
