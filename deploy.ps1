#!/bin/bash

# Build the project
npm run build

# Ensure you are on the main branch
git checkout main

# Create and switch to the gh-pages branch
git checkout -b gh-pages

# Remove all files except the build directory
git rm public/*
git rm src/*
git rm .gitignore
git rm deploy.ps1
git rm eslint.config.js
git rm package-lock.json
git rm package.json
git rm vite.config.ts
git rm README.md
git rm index.html
git rm tsconfig*.json

# git clean -fxd

# Move the build files to the root directory
mv dist/* .

# Add and commit the build files
git add .
git commit -m "Deploy static files to gh-pages"

# Push the gh-pages branch to the remote repository
git push origin gh-pages --force
git branch -D gh-pages
# Switch back to the main branch
git checkout main
npm i