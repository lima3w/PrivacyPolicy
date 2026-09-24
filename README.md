# Lima3 Privacy Policy

Source for the Lima3 privacy policy site, built with [Zola](https://www.getzola.org/) and published at [lima3.dev/privacy](https://lima3.dev/privacy).

This is a publishing and documentation project, not legal advice. Every claim in the policy must be verified against the actual behavior of the relevant app's code, manifest, and dependencies before it's published — see `maintainers/publishing.md`.

## Structure

```
.
├── config.toml                  Zola site config (base_url, policy version, contact)
├── content/
│   ├── _index.md                 Shared baseline policy — renders at /privacy/
│   └── work-my-ticket.md         Work My Ticket addendum — renders at /privacy/work-my-ticket/
├── templates/                    Zola/Tera HTML templates
├── static/
│   └── style.css
├── maintainers/
│   ├── publishing.md                     Publication workflow and deployment requirements
│   ├── app-data-inventory-template.md    Template an app maintainer fills out before an addendum is drafted
│   └── app-addendum-template.md          Template for a new content/<app>.md addendum page
├── POLICY_VERSION.md
└── CHANGELOG.md
```

Content model: a shared baseline (`content/_index.md`) covers principles common to all Lima3 apps. Each app gets its own addendum page that states its actual, specific behavior — the baseline never claims an app is local-only or collects no data on the app's behalf.

## Local development

```
zola serve
```

Serves the site locally with live reload. `zola build` produces the static site in `public/`.

Because `base_url` in `config.toml` is `https://lima3.dev/privacy`, the built `public/` output is meant to be deployed so it's reachable at that path (the rest of lima3.dev is handled outside this repository).

## Publishing a new app addendum

See `maintainers/publishing.md`.

## Deployment

The live site should be built from a pinned, reviewed Git tag or release — not an automatic mirror of `main` — so an unreviewed edit never goes live unreviewed. See `maintainers/publishing.md` for the full workflow.
