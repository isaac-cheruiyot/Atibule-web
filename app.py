import librosa
import noisereduce as nr
import soundfile as sf

y, sr = librosa.load("Nelly-Ochieng.MP3", sr=None)
reduced_noise = nr.reduce_noise(y=y, sr=sr)
sf.write("Nelly-Ochieng_Cleaned.MP3", reduced_noise, sr)
