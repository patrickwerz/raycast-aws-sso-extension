/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** AWS Config File Path - Path to your AWS config file (defaults to ~/.aws/config) */
  "awsConfigPath": string,
  /** Additional Regions - Comma-separated list of extra regions to show for each role (e.g., 'us-east-2, us-west-2'). Roles will be listed once per region. */
  "additionalRegions"?: string,
  /** Show Usage Count - Display how many times each account and role has been opened */
  "showUsageCount": boolean
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `list-profiles` command */
  export type ListProfiles = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `list-profiles` command */
  export type ListProfiles = {}
}

