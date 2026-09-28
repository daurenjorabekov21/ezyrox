// 1000+ mashina rasmlari va matnlarini 100% ishlaydigan qilib yaratish
const carGrid = document.getElementById('car-grid');

const brands = ["Bugatti Chiron", "Lamborghini Aventador", "Porsche 911 GT3", "BMW M4 Competition", "Koenigsegg Jesko", "McLaren 720S", "Aston Martin Vantage", "Audi R8 V10", "Mercedes AMG GT", "Ferrari SF90"];
const types = ["HYPERCAR", "SUPERCAR", "TRACK BEAST", "LIMITED EDITION", "V12 MONSTER"];

// Ishonchli va doim ishlaydigan mashina rasmlari ro'yxati
const reliableImages = [
    "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=600&q=80"
];

// 1000 ta elementni yaratish tsikli
for (let i = 1; i <= 1000; i++) {
    const brand = brands[i % brands.length];
    const type = types[i % types.length];
    const imageUrl = reliableImages[i % reliableImages.length];

    const card = document.createElement('div');
    card.className = "group bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-red-500 transition-all duration-300 shadow-xl";
    
    card.innerHTML = `
        <div class="h-48 overflow-hidden relative bg-slate-950">
            <img src="${imageUrl}" alt="${brand}" loading="lazy" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
            <span class="absolute top-3 left-3 bg-red-600 text-white font-['Orbitron'] text-[9px] font-bold px-2.5 py-0.5 rounded-full">${type}</span>
        </div>
        <div class="p-4">
            <h3 class="text-lg font-bold font-['Orbitron'] mb-1 text-white group-hover:text-red-400 transition-colors">${brand} #${i}</h3>
            <p class="text-slate-400 text-xs mb-3">Ezyrox kolleksiyasidan olingan ${i}-raqamli yuqori quvvatli sport avtomobili.</p>
            <div class="flex items-center justify-between font-['Orbitron'] text-[10px] font-bold pt-3 border-t border-slate-800">
                <span class="text-red-500">OT KUCHI: ${500 + (i % 400)} HP</span>
                <span class="text-slate-400">TEZLIK: ${300 + (i % 100)} km/s</span>
            </div>
        </div>
    `;
    
    carGrid.appendChild(card);
}

// Motor ovozi funksiyasi
function playEngineSound() {
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(60, audioCtx.currentTime); 
        osc.frequency.exponentialRampToValueAtTime(320, audioCtx.currentTime + 0.6); 

        gain.gain.setValueAtTime(0.4, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.9);

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start();
        osc.stop(audioCtx.currentTime + 0.9);
    } catch (e) {
        console.log("Audio xatosi:", e);
    }
}