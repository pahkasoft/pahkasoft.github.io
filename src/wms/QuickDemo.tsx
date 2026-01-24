import * as Score from "@tspro/web-music-score/score";
import * as ReactUI from "@tspro/web-music-score/react-ui";
import * as Audio from "@tspro/web-music-score/audio";
import { ClassicalGuitar } from "@tspro/web-music-score/audio-cg";

export default function QuickDemo() {
    Audio.addInstrument(ClassicalGuitar);

    let doc = new Score.DocumentBuilder()
        .setScoreConfiguration("treble")
        .setKeySignature("A Major")
        .setTimeSignature("6/8")
        .setTempo(120)

        .addNote(0, ["A4", "C#5", "E5", "E5", "C#5", "A4"], "8n", { stem: "up" })
        .addNote(1, ["A3", "A3"], "4.", { stem: "down" })

        .addMeasure()
        .addNavigation("ending", 1)
        .addNavigation("endRepeat")
        .addNote(0, ["D5", "B4", "G#4", "A4", "C#5", "E5"], "8n")
        .addNote(1, ["E3", "E3"], "4.")

        .addMeasure()
        .addNavigation("ending", 2)
        .addNote(0, ["D5", "B4", "G#4"], "8n")
        .addNote(0, "A4", "4.")
        .addNote(1, ["E3", "A3"], "4.")

        .getDocument();

    return <div>
        <ReactUI.MusicScoreView doc={doc} />
        <br />
        <ReactUI.PlaybackButtons doc={doc} playPauseStop />
        <br />
    </div>
}