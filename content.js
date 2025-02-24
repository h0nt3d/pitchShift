(async function() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        
        if (stream) {
            console.log("Captured audio stream:", stream);
            
            // Process the audio using Web Audio API
            const audioContext = new AudioContext();
            const source = audioContext.createMediaStreamSource(stream);
            const gainNode = audioContext.createGain();
            gainNode.gain.value = 1.0;

            source.connect(gainNode);
            gainNode.connect(audioContext.destination);

            console.log("Audio is playing through the AudioContext.");
        } else {
            console.error("Failed to capture audio.");
        }
    } catch (error) {
        console.error("Error capturing audio:", error);
    }
})();
