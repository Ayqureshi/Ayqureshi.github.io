const words = [
    "phoneme", "syntax", "IPA", "morpheme", "prosody",
    "intonation", "semantics", "lexicon", "discourse",
    "phonology", "pragmatics", "pitch", "stress", "parsing"
];

function setup() {
    const canvas = createCanvas(400, 400);
    canvas.parent('wordWaveContainer');
    textAlign(CENTER, CENTER);
    textSize(20);
    textFont('monospace');
    noStroke();
}

function draw() {
    clear();
    background(245, 241, 234);
    const waveAmplitude = 50;
    const waveLength = 150;
    const speed = frameCount * 0.02;

    for (let x = 20; x < width; x += 100) {
        const index = int((x / 100 + frameCount * 0.03) % words.length);
        const y = height / 2 + sin((x / waveLength) + speed) * waveAmplitude;
        
        // Draw shadow/glow
        fill(100, 124, 144, 30);
        text(words[index], x + 1, y + 1);
        
        // Draw main text
        fill(100, 124, 144);
        text(words[index], x, y);
    }
} 