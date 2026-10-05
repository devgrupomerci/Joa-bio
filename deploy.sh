#!/bin/bash
set -e

# Target directory (defaults to $HOME/public_html if DEPLOYPATH is not set)
TARGET_DIR="${DEPLOYPATH:-$HOME/public_html}"

echo "Starting cPanel deployment to: $TARGET_DIR"

# Ensure target directory exists
/bin/mkdir -p "$TARGET_DIR"

# If dist does not exist or package.json is newer, build if node/npm is available
if [ ! -d "dist" ]; then
  if command -v npm >/dev/null 2>&1; then
    echo "Building application with npm..."
    npm install --legacy-peer-deps
    npm run build
  fi
fi

# Deploy built files to target directory
if [ -d "dist" ]; then
  echo "Copying files from dist/ to $TARGET_DIR..."
  /bin/cp -R dist/. "$TARGET_DIR"
  echo "Deployment completed successfully!"
else
  echo "ERROR: 'dist' folder not found."
  echo "Please run 'npm run build' locally and commit the 'dist' directory to git, or install Node.js on cPanel."
  exit 1
fi
