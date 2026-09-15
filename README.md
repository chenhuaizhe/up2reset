# Up2Reset

macOS menu bar app that covers every screen when you have been sitting too long.

Sit. Forget. Overlay. Stand up. Reset. Continue.

**Download:** [Mac App Store](https://apps.apple.com/us/app/up2stretch/id6447865036?mt=12) (live listing is still **Up2Stretch 1.2.1**; **1.3.0** is in review and will rename it to Up2Reset)  
**Site:** [up2reset.com](https://up2reset.com) · [How to use](https://up2reset.com/guide/)  
**This repo is the public product page**, not the private app source.

## Why it exists

Knowledge workers sit through two-hour diffs. The system sit reminder is a banner you swipe. Up2Reset is a native Swift menu bar timer whose job is one rude, useful moment: dim every display, count down a short break, then get out of the way.

It is not a workout app. It is not an Apple Watch client. It is not Electron.

## Who it is for

People on a Mac who:

- code, design, write, or study for 6+ hours a day
- ignore notifications
- still want a body that works tomorrow

## What you get

- Menu bar timer with pause / continue / restart
- Full-screen break overlay on every monitor
- Optional pre-break notification
- Skip, then get reminded again
- Pause when the Mac sleeps or locks
- Today’s work time and break count
- Optional work note on the overlay
- Launch at login
- Custom overlay background and opacity (since 1.2.1)
- Pro: custom intervals, any break length 1–60 min, idle detection, 7-day / 30-day / this-year **local** reports

**1.3.0 (in App Store review, not live yet):** listing name Up2Reset, bedtime reminder (Not Now does not cut the current focus), menu bar scratch notes, optional 3-second hold on Skip / I moved, extra languages (en, zh-Hans, zh-Hant, ja, ko, de, fr, es). These are not Pro-gated.

Privacy default: no account, no analytics SDK, no Accessibility permission. Idle detection uses the system idle clock.

## FAQ

### Where did the window go?

Look at the **menu bar**, not the Dock. If macOS hid extra items, drag the timer out of the chevron.

### Does it collect data?

No. Settings, notes, and reports stay on this Mac. Details: [Privacy](https://up2reset.com/privacy/).

### Do I need Accessibility?

No. Do not grant it.

### How is this different from Stretchly or Time Out?

Stretchly is Electron. Time Out is a peer. Up2Reset is native, overlay-first, local-only. Apple Watch Stand rings count standing hours; they will not cover your editor.

### Why does the App Store say Up2Stretch?

Same app. Bundle id `com.tool.Up2Stretch`, Apple ID `6447865036`. This brand is Up2Reset. Live store is still 1.2.1 named Up2Stretch; 1.3.0 is in review and will rename the listing.

### What macOS version?

**14.6+.**

### What is Pro?

Any minute interval, any break length 1–60 min, extra skip/warning options, keyboard+mouse idle detection, and 7-day / 30-day / this-year local reports. Annual or lifetime, both through Apple. Restore in Settings → Pro.

### The overlay hit me when I sat back down.

Reading still counts as sitting. If you left the chair, pause first or enable Pro idle. Sleep/lock already pause the free timer.

### Can I skip?

Yes. Skip delays the overlay; it does not cancel the rest of the day.

### Can I change the overlay look?

Yes, since 1.2.1: custom background image and opacity.

### What is in 1.3.0?

In review, not on the store yet. Rename to Up2Reset, bedtime reminder, menu-bar scratch notes, optional hold on Skip / I moved, more languages. None of that is Pro.

### Will reports follow me to a new Mac?

No. Local on purpose. No iCloud sync.

## Free vs Pro

| | Free | Pro |
| --- | --- | --- |
| Work interval | 30 / 45 / 60 min | any minutes |
| Overlay | all displays | same |
| Sleep / lock pause | yes | same |
| Break length | 1 / 3 / 5 / 10 / 20 min | 1–60 min |
| Idle (keyboard / mouse) | — | yes |
| Reports | today | 7-day / 30-day / this year, on disk |

## Support

[up2reset.com/support](https://up2reset.com/support/) · [FAQ](https://up2reset.com/faq/) · email [nine@bigbeefit.com](mailto:nine@bigbeefit.com)

Include macOS version, app version, and what happened.

## Note for search

Queries this page is meant to answer:

- macOS sit reminder / stand up reminder / sedentary reminder
- menu bar break timer Mac
- full screen stretch overlay macOS
- Stretchly alternative native
- Time Out app Mac alternative
- local-only break reminder, no account
