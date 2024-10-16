        const speechBubble = document.createElement('div');
        speechBubble.classList.add('speech-bubble');
        speechBubble.textContent = 'Merhaba ben akıllı asistanınız Omnia! Hızlı teslimat sorgulaması yapmanıza yardımcı olabilirim!';
    
        document.body.appendChild(speechBubble);
    
        const style = document.createElement('style');
        style.innerHTML = `
            .speech-bubble {
                position: fixed;
                right: 40px;
                bottom: 90px;
                max-width: 200px;
                padding: 5px;
                background-color: #fff;
                color: navy;
                border-radius: 15px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                user-select: none;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                z-index: 9999;
                opacity: 0;
                transition: opacity 1s ease-in-out;
                animation: fadeIn 1s ease-in-out forwards;
                animation-delay: 1s;
            }
    
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
    
            @media (max-width: 768px) {
                .speech-bubble {
                    transform: scale(0.8);
                    right: 20px;
                    bottom: 80px;
                }
            }
    
            .color-shift {
                display: inline;
                animation: colorShift 7s infinite;
            }
    
            @keyframes colorShift {
                0% { color: navy; }
                20% { color: navy; }
                50% { color: red; }
                100% { color: navy; }
            }
        `;
        document.head.appendChild(style);
    
        const wrapLetters = (text) => {
            return text.split('').map((letter, index) => {
                return `<span class="color-shift" style="animation-delay: ${index * 0.04}s;">${letter}</span>`;
            }).join('');
        };
    
        speechBubble.innerHTML = wrapLetters(speechBubble.textContent);
