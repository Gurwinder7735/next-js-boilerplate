#!/bin/bash

# Function to convert kebab-case to PascalCase without spaces
kebab_to_pascal_no_spaces() {
  echo "$1" | awk -F'-' '{for(i=1;i<=NF;i++) printf toupper(substr($i,1,1)) tolower(substr($i,2))}' | sed 's/-//g'
}

# Check if the mode and component name are provided
if [ -z "$1" ] || [ -z "$2" ]; then
  echo "Usage: $0 <mode> <component-name> [path]"
  echo "Mode: c - create only component file, cc - create component and container files"
  exit 1
fi

# Get the mode, component name, and path
MODE=$1
KEBAB_CASE_NAME=$2
TARGET_PATH=${3:-.}

# Convert component name to PascalCase
PASCAL_CASE_NAME=$(kebab_to_pascal_no_spaces "$KEBAB_CASE_NAME")

# Create a directory with the name in PascalCase without spaces
mkdir -p "$TARGET_PATH/$KEBAB_CASE_NAME"

# Create the index.tsx file based on the mode
if [ "$MODE" == "c" ]; then
  cat <<EOL > "$TARGET_PATH/$KEBAB_CASE_NAME/index.tsx"
import ${PASCAL_CASE_NAME} from "./${KEBAB_CASE_NAME}.component";

export default ${PASCAL_CASE_NAME};
EOL
else
  cat <<EOL > "$TARGET_PATH/$KEBAB_CASE_NAME/index.tsx"
import ${PASCAL_CASE_NAME} from "./${KEBAB_CASE_NAME}.container";

export default ${PASCAL_CASE_NAME};
EOL
fi

# Conditional file creation based on mode
if [ "$MODE" == "c" ] || [ "$MODE" == "cc" ]; then
  # Create the component file based on the mode
  if [ "$MODE" == "c" ]; then
    cat <<EOL > "$TARGET_PATH/$KEBAB_CASE_NAME/${KEBAB_CASE_NAME}.component.tsx"
import React from "react";
import { I${PASCAL_CASE_NAME} } from "./types";

const ${PASCAL_CASE_NAME}Component = ({}: I${PASCAL_CASE_NAME}) => {
  return <div>${PASCAL_CASE_NAME}</div>;
};

export default ${PASCAL_CASE_NAME}Component;
EOL
  else
    cat <<EOL > "$TARGET_PATH/$KEBAB_CASE_NAME/${KEBAB_CASE_NAME}.component.tsx"
import React from "react";
import { I${PASCAL_CASE_NAME}Component } from "./types";

const ${PASCAL_CASE_NAME}Component = ({}: I${PASCAL_CASE_NAME}Component) => {
  return <div>${PASCAL_CASE_NAME}Component</div>;
};

export default ${PASCAL_CASE_NAME}Component;
EOL
  fi
fi

if [ "$MODE" == "cc" ]; then
  # Create the container file
  cat <<EOL > "$TARGET_PATH/$KEBAB_CASE_NAME/${KEBAB_CASE_NAME}.container.tsx"
import React from "react";
import ${PASCAL_CASE_NAME}Component from "./${KEBAB_CASE_NAME}.component";
import { I${PASCAL_CASE_NAME}Container } from "./types";
import "./style.css";

const ${PASCAL_CASE_NAME}Container = (props: I${PASCAL_CASE_NAME}Container) => {
  return <${PASCAL_CASE_NAME}Component {...props}/>;
};

export default ${PASCAL_CASE_NAME}Container;
EOL
fi

# Create the types file based on the mode
if [ "$MODE" == "c" ]; then
  cat <<EOL > "$TARGET_PATH/$KEBAB_CASE_NAME/types.ts"
export interface I${PASCAL_CASE_NAME} {}
EOL
else
  cat <<EOL > "$TARGET_PATH/$KEBAB_CASE_NAME/types.ts"
export interface I${PASCAL_CASE_NAME} {}
export interface I${PASCAL_CASE_NAME}Component {}
export interface I${PASCAL_CASE_NAME}Container {}
EOL
fi

# Create an empty style.css file
touch "$TARGET_PATH/$KEBAB_CASE_NAME/style.css"

echo "Component $KEBAB_CASE_NAME has been created in folder $TARGET_PATH/$KEBAB_CASE_NAME with the necessary files."
