# Publication workflow

1. App maintainer completes an app data inventory from `app-data-inventory-template.md`.
2. Policy maintainer updates the app addendum (`content/<app>.md`, based on `app-addendum-template.md`) and `CHANGELOG.md`.
3. Review claims against the actual source, manifest, dependencies, and release configuration for that app. Do not publish a claim that hasn't been verified this way.
4. Merge via GitHub PR.
5. Deploy the approved revision to lima3.dev/privacy.
6. Pin app release notes and store listings to the public app-specific policy URL.
7. Keep a visible "Last updated" date and policy version on every rendered page (handled automatically by the site templates from each page's front matter and `config.extra.policy_version`).

## Deployment requirement

The website should publish a pinned Git tag or release revision, not automatically mirror this repository's main branch. This prevents an unreviewed policy edit from becoming public immediately. Bump `config.extra.policy_version` and `POLICY_VERSION.md` together with each tagged release.

## Adding a new app

1. Copy `app-data-inventory-template.md`, fill it out with the app maintainer.
2. Copy `app-addendum-template.md` to `content/<app-slug>.md`, fill in front matter (`title`, `date`) and each section.
3. Build locally with `zola serve` and confirm the app appears in the "App-specific addenda" list on the home page and renders at `/privacy/<app-slug>/`.
4. Follow the review and deploy steps above.
