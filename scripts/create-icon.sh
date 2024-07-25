#!/bin/bash

# Function to convert kebab-case to PascalCase without spaces
kebab_to_pascal_no_spaces() {
  echo "$1" | awk -F'-' '{for(i=1;i<=NF;i++) printf toupper(substr($i,1,1)) tolower(substr($i,2))}' | sed 's/-//g'
}

# Check if a name argument is provided
if [ -z "$1" ]; then
  echo "Please provide a name as an argument."
  exit 1
fi

NAME=$1

# Create the directory structure
DIRECTORY="src/components/atoms/svgs/$NAME"
mkdir -p $DIRECTORY

# Convert kebab-case to PascalCase
PASCAL_NAME=$(kebab_to_pascal_no_spaces "$NAME")

# Define the file path for the new component
FILE_PATH="$DIRECTORY/index.tsx"

# Create the file with the specified content
cat > $FILE_PATH <<EOL
import React from "react";

const ${PASCAL_NAME} = () => {
  return <div>${PASCAL_NAME}</div>;
};

export default ${PASCAL_NAME};
EOL

echo "File created at $FILE_PATH"

# Update the atoms/svgs/index.tsx file
INDEX_FILE="src/components/atoms/svgs/index.tsx"

# Create the index.tsx file if it does not exist
if [ ! -f "$INDEX_FILE" ]; then
  cat > $INDEX_FILE <<EOL
import ${PASCAL_NAME} from "./$NAME";

export const Icon = {
  ${PASCAL_NAME},
};
EOL
  echo "$INDEX_FILE created with initial content"
  exit 0
fi

# Ensure the import statement is added at the top
IMPORT_LINE="import ${PASCAL_NAME} from \"./$NAME\";"
if ! grep -q "$IMPORT_LINE" $INDEX_FILE; then
  sed -i '' "1i\\
$IMPORT_LINE" $INDEX_FILE
fi

# Ensure the new component is added to the Icon export block
if grep -q "export const Icon = {" $INDEX_FILE; then
  # Add the new component to the Icon export block if not present
  if ! grep -q "  ${PASCAL_NAME}," $INDEX_FILE; then
    sed -i '' "/^export const Icon = {/a\\
  ${PASCAL_NAME}," $INDEX_FILE
  fi
else
  # If the Icon export block does not exist, create it
  sed -i '' "/^import/a\\
import ${PASCAL_NAME} from \"./$NAME\";\n\nexport const Icon = {\n  ${PASCAL_NAME},\n};" $INDEX_FILE
fi

echo "${PASCAL_NAME} added to $INDEX_FILE"
