function updateTime() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');

      const timeContainer = document.getElementById('time');
      
      
      timeContainer.innerHTML = `
        <span class="hour">${hours}</span>:<span class="minute">${minutes}</span>:<span class="second">${seconds}</span>
      `;
    }

    setInterval(updateTime, 1000);
    updateTime();
