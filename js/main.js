window.onload = function() {
    console.clear();


//image opener

    document.querySelectorAll('.image').forEach(function(photo) {
      photo.addEventListener('click', function() {
        const overlay = document.querySelector('.overlay');
        const popup = this.parentElement.querySelector('.popup');
        overlay.classList.add('active');
        popup.classList.add('active');
        document.body.style.overflow = 'hidden'; // Disable scrolling
    
        // Force reflow to apply transitions
        void overlay.offsetWidth;
        void popup.offsetWidth;
      });
    });
    
    document.querySelectorAll('.close, .overlay').forEach(function(element) {
      element.addEventListener('click', closePopup);
    });
    
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape') {
        closePopup();
      }
    });
    
    function closePopup() {
      const overlay = document.querySelector('.overlay');
      const popups = document.querySelectorAll('.popup');
      overlay.classList.remove('active');
      popups.forEach(function(popup) {
        popup.classList.remove('active');
      });
      document.body.style.overflow = 'auto'; // Enable scrolling
    }


    

//gameblyo bg

    const randomX = random(-250, 350);
    const randomY = random(-350, 250);
    const randomDelay = random(0, 50);
    const randomTime = random(10,20);
    const randomTime2 = random(10, 12);
    const randomAngle = random(-20, 100);

    
    const blurs = gsap.utils.toArray(".blur");
    blurs.forEach((blur) => {
      gsap.set(blur, {
        x: randomX(-1),
        y: randomX(1),
        rotation: randomAngle(-1)
      });
    
      moveX(blur, 1);
      moveY(blur, -1);
      rotate(blur, 1);
    });
    
    function rotate(target, direction) {
      gsap.to(target, randomTime2(), {
        rotation: randomAngle(direction),
        // delay: randomDelay(),
        ease: Sine.easeInOut,
        onComplete: rotate,
        onCompleteParams: [target, direction * -1]
      });
    }
    
    function moveX(target, direction) {
      gsap.to(target, randomTime(), {
        x: randomX(direction),
        ease: Sine.easeInOut,
        onComplete: moveX,
        onCompleteParams: [target, direction * -1]
      });
    }
    
    function moveY(target, direction) {
      gsap.to(target, randomTime(), {
        y: randomY(direction),
        ease: Sine.easeInOut,
        onComplete: moveY,
        onCompleteParams: [target, direction * -1]
      });
    }
    
    function random(min, max) {
      const delta = max - min;
      return (direction = 1) => (min + delta * Math.random()) * direction;
    }

};



