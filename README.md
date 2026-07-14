# Resume Site — Frontend

Personal resume site for [teklu.me](https://teklu.me), built as part of the
[Cloud Resume Challenge](https://cloudresumechallenge.dev/docs/the-challenge/aws/).

## Architecture

```
Browser
   │
   ▼
Route 53 (teklu.me)
   │
   ▼
CloudFront (HTTPS via ACM, Origin Access Control)
   │
   ▼
S3 (private bucket, static site files)
```

The site is a static HTML/CSS/JS page served through CloudFront, with the origin
S3 bucket locked down so it's only reachable through CloudFront — not directly
from the internet. A small JavaScript snippet calls a separate backend API to
display a live visitor count.

## Tech stack

- **HTML / CSS / JavaScript** — static site, no framework or build step
- **Amazon S3** — private bucket, storage only, not publicly accessible
- **Amazon CloudFront** — CDN + HTTPS termination, Origin Access Control (OAC)
  restricts the bucket to CloudFront-only access
- **AWS Certificate Manager (ACM)** — TLS certificate for the custom domain
- **Amazon Route 53** — DNS, routes `teklu.me` to the CloudFront distribution
- **GitHub Actions** — CI/CD, syncs files to S3 and invalidates the CloudFront
  cache on every push to `main`

## Project structure

```
frontend/
├── index.html
├── styles.css
├── script.js                    # calls the backend API for the visitor count
├── .github/workflows/deploy.yml
└── README.md
```

## Local development

No build step — open `index.html` directly in a browser to preview changes.

## Deployment

Pushes to `main` trigger a GitHub Actions workflow that:
1. Syncs all site files to the S3 bucket
2. Invalidates the CloudFront cache so changes go live immediately

## What this project demonstrates

- Secure static site hosting (private S3 origin, CloudFront-only access via OAC)
- HTTPS with a custom domain via ACM and Route 53
- Infrastructure as code with Terraform, including importing manually-provisioned
  resources into Terraform state
- CI/CD via GitHub Actions

## Related

- Backend repo: [link to your backend repo]
- Live site: [teklu.me](https://teklu.me)