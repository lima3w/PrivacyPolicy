# App data inventory template

Fill this out per app before drafting or updating its addendum. Every claim must be checked against the app's actual source, manifest, dependencies, and release configuration — not assumed.

- **App name:**
- **Platform(s):**
- **Data collected/stored, and where (local DB, files, remote server):**
- **Local vs. remote processing:** Does any data leave the device? To where?
- **Permissions requested, and why each is used:**
- **Third-party SDKs (analytics, ads, crash reporting, backend, etc.):**
- **Accounts/authentication, if any:**
- **Backup and device-transfer behavior:** Automatic cloud backup? Manual export? What format, and is transfer off-device user-initiated or automatic?
- **Sharing/export behavior:** What can the user share, how, and is it user-initiated?
- **Retention behavior:** How long is data kept, and what deletes it (uninstall, in-app delete, account deletion)?
- **Children:** Is this app directed at, or likely to be used by, children under 13?
- **Known open questions / tracked issues:** (link any relevant issue tracker items)
- **Verified against:** (commit/tag, manifest file, dependency list reviewed)
- **Reviewed by / date:**
