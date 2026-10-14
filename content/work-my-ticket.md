+++
title = "Work My Ticket"
template = "page.html"
date = 2026-10-13
+++

This addendum supplements the [Lima3 Privacy Policy](@/_index.md) and describes the specific privacy behavior of the Work My Ticket Android app. Where this addendum and the shared baseline differ, this addendum controls for Work My Ticket.

## Data we collect and store

Work My Ticket stores the following locally on your device, in an app-private database (Room):

- Ticket data, including counselor contact fields, goals, tasks, notes, and revision history.
- Task photos, stored in app-private storage.
- A few usage counters, stored locally and used only to decide when to offer the in-app rating prompt (see [Ratings and feedback](#ratings-and-feedback)): how many times you have launched the app, the date you first opened it, and the date the rating prompt was last shown.

## Local vs. remote processing

All data processing happens **on your device**. Work My Ticket does not use an app backend, account system, analytics SDK, advertising SDK, or network service.

## Permissions requested

Work My Ticket may request the Android notification permission, used to show reminders for your tasks.

## Third parties and SDKs

Work My Ticket does not integrate any third-party analytics, advertising, or backend SDKs.

The one Google component the app uses is the Google Play in-app review prompt, described under [Ratings and feedback](#ratings-and-feedback). It is part of Google Play, not an analytics or advertising SDK, and Work My Ticket does not send it your ticket data.

## Backup and device-transfer behavior

Work My Ticket does not perform automatic cloud backup. You can manually export your data as a zip file to your device's storage from within the app. That export is entirely user-initiated: the app never uploads the file, and your data is only moved off your device if you choose to transfer, share, or store that zip file yourself (for example, by copying it to another device or uploading it to a service of your choice).

You can also restore from a backup zip file you choose. Restoring replaces the data currently on your device with the contents of that file.
<!-- TODO(verify): confirm restore behavior (replace vs. merge, what is included) against the app's backup code before publishing. -->

## Sharing and export behavior

- You can export a ticket as a PDF and share it through Android's share sheet, to any destination you choose.
- You can export your data as a zip file, as described above.

Both are actions you take deliberately; Work My Ticket does not share or transmit your data on its own.

## Ratings and feedback

- **Rating prompt.** After you have used the app for a while, Work My Ticket may ask the Google Play in-app review prompt to appear. The usage counters listed above, which stay on your device, decide when. The prompt is shown and handled by Google Play, and any rating you submit is governed by Google's terms and privacy policy. Work My Ticket does not receive your rating or send Google your ticket data.
- **Rate this app.** The "Rate this app" option in Settings opens the Work My Ticket listing in the Play Store.
- **Send feedback.** The "Send feedback" option opens your own email app with a prefilled draft addressed to `support@lima3.dev`. The draft contains only the app version, your Android version, and your device model. Work My Ticket sends nothing itself; you decide whether to edit and send the email.

## Developer and contact

Work My Ticket is published by Lima3 (lima3.dev). For support, email **support@lima3.dev**. For privacy questions or requests, see the contact details in the [Lima3 Privacy Policy](@/_index.md).

## Retention and deletion

Ticket data, task photos, and usage counters remain on your device until you delete them within the app or uninstall Work My Ticket, which removes the app's local data. Backup zip files you export are yours to keep or delete; the app does not track or remove them. We have no copy of your data, since none is transmitted to us.
