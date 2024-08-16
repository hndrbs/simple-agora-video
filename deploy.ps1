#!/bin/bash

# Build the project
npm run build

# Navigate to the project directory
cd /path/to/your/project

# Ensure you are on the main branch
git checkout main

# Create and switch to the gh-pages branch
git checkout -b gh-pages

# Remove all files except the build directory
git rm -rf .
git clean -fxd

# Move the build files to the root directory
mv build/* .

# Add and commit the build files
git add .
git commit -m "Deploy static files to gh-pages"

# Push the gh-pages branch to the remote repository
git push origin gh-pages

# Switch back to the main branch
git checkout main
