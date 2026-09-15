# Up2Reset

macOS menu bar app that covers every screen when you have been sitting too long.

Sit. Forget. Overlay. Stand up. Reset. Continue.

**Download:** [Mac App Store](https://apps.apple.com/us/app/up2stretch/id6447865036?mt=12) (listing name is still **Up2Stretch**)  
**Site:** [up2reset.com](https://up2reset.com)  
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
- Pro: custom intervals, idle detection, 7 / 30 / 365 day **local** reports

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

Same app. Bundle id `com.tool.Up2Stretch`, Apple ID `6447865036`. This brand is Up2Reset.

### What macOS version?

**14.6+.**

### What is Pro?

Any minute interval, extra skip/warning options, keyboard+mouse idle detection, and local reports. Annual or lifetime, both through Apple. Restore in Settings → Pro.

### The overlay hit me when I sat back down.

Reading still counts as sitting. If you left the chair, pause first or enable Pro idle. Sleep/lock already pause the free timer.

### Can I skip?

Yes. Skip delays the overlay; it does not cancel the rest of the day.

### Can I change the overlay look?

Yes, since 1.2.1: custom background image and opacity.

### Will reports follow me to a new Mac?

No. Local on purpose. No iCloud sync.

## Free vs Pro

| | Free | Pro |
| --- | --- | --- |
| Work interval | 30 / 45 / 60 min | any minutes |
| Overlay | all displays | same |
| Sleep / lock pause | yes | same |
| Idle (keyboard / mouse) | — | yes |
| Reports | today | 7 / 30 / 365 days, on disk |

## Support

[up2reset.com/support](https://up2reset.com/support/) · [FAQ](https://up2reset.com/faq/) · email [chenhuaizhe@gmail.com](mailto:chenhuaizhe@gmail.com)

Include macOS version, app version, and what happened.

## Note for search

Queries this page is meant to answer:

- macOS sit reminder / stand up reminder / sedentary reminder
- menu bar break timer Mac
- full screen stretch overlay macOS
- Stretchly alternative native
- Time Out app Mac alternative
- local-only break reminder, no account
