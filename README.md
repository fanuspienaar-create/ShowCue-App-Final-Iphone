# ShowCue v5 — Universal Audio / Cut Track / Level Matching

Built from the locked ShowCue v4 baseline.

Changes in this version:
- Same responsive visual system across phone, iPad/tablet and PC, including landscape handling for older iPads.
- Songs accepts MP3, AIFF, FLAC, M4A, WAV and WMA by extension.
- Media accepts MP4, M4V, MOV and AVI by extension.
- Audio and video are stored locally in IndexedDB.
- Cue Pads preload assigned files to reduce iOS user-activation/autoplay problems.
- Pad launch cues and starts the assigned audio.
- Level Matching Sync raises softer analysed tracks toward the loudest analysed track at playback only; original files are never changed and louder tracks are not turned down.
- Cut Track detects leading silence/noise and starts up to four bars before the first detected audio. BPM is editable per song.
- Level matching and Cut Track analysis is performed only when enabled.
- The original v4 files remain the recovery baseline.

Browser codec limitation:
Importing a file and playing it are separate capabilities. Older iPad Air/Safari versions cannot natively decode every container/codec, especially WMA and AVI. ShowCue therefore imports and stores all requested extensions, while playback depends on the device/browser's native codec support. For the widest compatibility on iPad Air 1, use MP3/WAV/AIFF/common M4A audio and MP4/M4V/MOV video.
